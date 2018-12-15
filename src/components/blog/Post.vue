<template lang="pug">
  v-card.post.elevation-8
    .post-header
      .post-title
        router-link(:to="'/blog/post/' + id")
          h1 {{ title }}
      .post-ctrls(v-if="isAdmin")
        #post-ctrls-full
          a(v-if="edits && edits.length > 0" href="#"
            @click="showEdits = !showEdits"
            :class="showEdits ? 'collapsed' : null"
            :aria-controls="'edits-' + id"
            :aria-expanded="showEdits ? 'true' : 'false'")
              svg.fas.fa-lg.fa-clock
          router-link(:to="'/blog/edit/' + id")
            svg.fas.fa-lg.fa-edit
          a(@click.prevent="deleteConfirm" href="#")
            svg.fas.fa-lg.fa-trash
        v-menu#post-ctrls-col.m-md-2(variant="link" right no-caret)
          template(slot="activator")
            svg.fas.fa-lg.fa-ellipsis-v
          v-list
            v-list-tile
              a(v-if="edits && edits.length > 0" href="#"
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
    id: String
  },
  data() {
    return {
      showEdits: false
    };
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.body, { sanitize: true });
    },
    isAdmin: function() {
      return this.admin;
    }
  },
  methods: {
    formatDatetime(datetime) {
      return moment(datetime).format("dddd, MMM Do YYYY, h:mm a");
    },
    deletePost() {
      this.axios
        .delete("https://skylerflyserver.appspot.com/post/" + this.id, {})
        .then(res => {
          if (res.data.result.indexUpdates > 0) this.$emit("refreshPosts");
        })
        .catch(() => {});
    },
    deleteConfirm() {
      let message = {
        title: "Confirm Delete Post",
        body: "Are you sure you want to permanently delete this Post?"
      };
      var post = this;
      this.$dialog
        .confirm(message)
        .then(function() {
          post.deletePost();
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
    .post-header
      display: flex
      justify-content: space-between
      margin: -10px 0 -16px 0
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
      img
        width: 100%
        height: auto
    .post-footer
      display: flex
      justify-content: space-between
      flex-wrap: wrap-reverse
      .tags
        padding: 0
        align-items: center
        display: flex
        list-style-type: none
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
