<template lang="pug">
  v-card.post.elevation-8
    .post-header
      .post-title
        router-link(:to="'/blog/post/' + id")
          h1 {{ title }}
      .post-ctrls(v-if="isAdmin")
        #post-ctrls-full
          a(v-if="unpublished" @click.prevent="publish" href="#")
            svg.fas.fa-lg.fa-eye-slash
          a(v-if="future" href="#")
            svg.fas.fa-lg.fa-hourglass-start
          a(v-if="edits && edits.length > 0" href="#"
            @click="showEdits = !showEdits"
            :class="showEdits ? 'collapsed' : null"
            :aria-controls="'edits-' + id"
            :aria-expanded="showEdits ? 'true' : 'false'")
              svg.fas.fa-lg.fa-clock
          router-link(:to="'/blog/edit/' + id")
            svg.fas.fa-lg.fa-edit
          a(@click.stop="deleteConfirm = true" href="#")
            svg.fas.fa-lg.fa-trash
        v-menu#post-ctrls-col.m-md-2(variant="link" right no-caret)
          template(slot="activator")
            svg.fas.fa-lg.fa-ellipsis-v
          v-list
            v-list-tile(v-if="unpublished")
              a(@click.prevent="publish" href="#")
                svg.fas.fa-lg.fa-eye-slash
                span Publish
            v-list-tile(v-if="future")
              a(href="#")
                svg.fas.fa-lg.fa-hourglass-start
                span Scheduled
            v-list-tile(v-if="edits && edits.length > 0")
              a(href="#"
                @click="showEdits = !showEdits"
                :class="showEdits ? 'collapsed' : null"
                :aria-controls="'edits-' + id"
                :aria-expanded="showEdits ? 'true' : 'false'")
                  svg.fas.fa-lg.fa-clock
                  span Edit History
            v-list-tile
              router-link(:to="'/blog/edit/' + id")
                svg.fas.fa-lg.fa-edit
                span Edit Post
            v-list-tile
              a(@click.pre0vent="deleteConfirm" href="#")
                svg.fas.fa-lg.fa-trash
                span Delete Post
    v-divider
    .post-body(v-html="compiledMarkdown")
    v-divider
    .post-footer
      .tags(v-if="tags")
        router-link(v-for="tag in tags" :to="'/blog/tag/' + tag.id").tag-link
          v-chip(small).tag {{ tag.title }}
      .datetime
        .created
          span.datetime-label Published:&nbsp;
          span.datetime-created {{ formatDatetime(created) }}
        .edited(v-if="edits")
          span.datetime-label Last Edit:&nbsp;
          span.datetime-edited {{ formatDatetime(edited) }}
    .history(:id="'edits-' + id" v-show="showEdits").mt-2
      h3 Edit History
      v-list.edits
        li(v-for="(item,index) in edits")
          router-link(:to="'/blog/post/' + id + '/' + index") {{ formatDatetime(item.edited) }}
    v-dialog(v-model='deleteConfirm', max-width='290')
      v-card
        v-card-title.headline Are you sure you want to delete this post?
        v-card-text
          | This will permanently delete the post titled {{ title }}! Please confirm.
        v-card-actions
          v-spacer
          v-btn(color='green darken-1', flat='flat', @click='deleteConfirm = false')
            | Cancel
          v-btn(color='red darken-1', flat='flat', @click='deletePost')
            | Confirm
</template>

<script>
import marked from "marked";
import moment from "moment";

export default {
  name: "post",
  components: {},
  props: {
    admin: Boolean,
    title: String,
    body: String,
    tags: Array,
    created: String,
    edited: String,
    edits: Array,
    canComment: Boolean,
    comments: Array,
    published: String,
    publishedVersion: String,
    archived: Boolean,
    id: String
  },
  data() {
    return {
      showEdits: false,
      deleteConfirm: false
    };
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.body, { sanitize: true });
    },
    isAdmin: function() {
      return this.admin;
    },
    future: function() {
      return new Date(this.published) >= new Date();
    },
    unpublished: function() {
      return !this.published;
    }
  },
  methods: {
    publish() {
      let post = {
        admin: this.admin,
        title: this.title,
        body: this.body,
        tags: this.tags,
        created: this.created,
        edited: this.edited,
        edits: this.edits,
        canComment: this.canComment,
        comments: this.comments,
        published: new Date().toISOString(),
        publishedVersion: this.edited,
        archived: this.archived,
        id: this.id
      };
      this.axios
        .post("https://skylerflyserver.appspot.com/posts/submit", post)
        .then(res => {
          if (res.status === 200) this.$emit("refresh");
        })
        .catch(error => {
          this.errors.push(error);
        });
    },
    formatDatetime(datetime) {
      return moment(datetime).format("dddd, MMM Do YYYY, h:mm a");
    },
    deletePost() {
      this.axios
        .delete("https://skylerflyserver.appspot.com/posts/post/" + this.id, {})
        .then(res => {
          this.deleteConfirm = false;
          if (res.data.result.indexUpdates > 0) this.$emit("refresh");
        })
        .catch(() => {});
    }
  }
};
</script>

<style lang="sass">
  .post
    width: 100%
    padding: 1em
    align-content: center
    color: white
    box-shadow: 0em 0em 1em 0.1em rgba(255,255,255,0.5)
    a
      color: $color-secondary-2-1
      &:visited, &:focus, &:active
        color: $color-secondary-2-2
      &:hover
        color: $color-secondary-2-1
    .post-header
      display: flex
      justify-content: space-between
      .post-title
        margin-top: 5px
        font-size: 1.5rem
      .post-ctrls
        margin: auto 0
        a
          width: 2em
          margin: 0
      #post-ctrls-col
        display: none
        svg
          color: white
      #post-ctrls-full
        width: auto
        display: flex
        align-items: center
        justify-content: right
      @media(max-width: 500px)
        #post-ctrls-full
          display: none
        #post-ctrls-col
          display: flex

    .post-body
      width: 100%
      margin-top: 15px
      min-height: 25vh
      img
        width: 100%
        height: auto
    .post-footer
      margin-top: 15px
      display: flex
      justify-content: space-between
      flex-wrap: wrap-reverse
      .tags
        padding: 0
        align-items: center
        display: flex
        list-style-type: none
        .v-chip
          border: none
          color: white
          background-color: $color-secondary-2-1
        @media(max-width: 500px)
          font-size: 0.9em
          flex-wrap: wrap
          .tag
            margin: 0.4em
      .datetime
        margin: 0
        @media(max-width: 500px)
          .datetime-created
            font-size: 0.8em
          .datetime-label, .datetime-edited
            display: none
</style>
