<template lang="pug">
  .post
    .post-header
      .post-title
        router-link(:to="'/blog/post/' + id")
          h1 {{ title }}
      .post-ctrls(v-if="showCtrls")
          router-link(:to="'/blog/edit/' + id")
            svg.fas.fa-lg.fa-edit
          a(@click.prevent="deleteConfirm" href="#")
            svg.fas.fa-lg.fa-trash
          a(v-if="edits && edits.length > 0" href="#"
            @click="showEdits = !showEdits"
            :class="showEdits ? 'collapsed' : null"
            :aria-controls="'edits-' + id"
            :aria-expanded="showEdits ? 'true' : 'false'")
              svg.fas.fa-lg.fa-clock
    hr
    .post-body(v-html="compiledMarkdown")
    hr
    .post-footer
      .tags(v-if="tags")
          .tag(v-for="tag in tags")
            router-link(:to="'/blog/' + tag").tag-link {{ tag }}
      .datetime
        p.created Posted: {{ formatDatetime(created) }}
        p.edited(v-if="edited") Last Edit: {{ formatDatetime(edited) }}
    b-collapse(:id="'edits-' + id" v-model="showEdits").mt-2
      h3 Edit History
      ul.edits
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
    showCtrls: function() {
      return this.admin;
    }
  },
  methods: {
    formatDatetime(datetime) {
      return moment(datetime).format("dddd, MMMM Do YYYY, h:mm:ss a");
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
    width: 90%
    padding: 1em
    margin: 1em auto
    align-content: center
    background-color: white
    color: black
    box-shadow: 0em 0em 1em 0.1em rgba(255,255,255,0.5)
    .post-header
      display: flex
      justify-content: space-between
      margin: -10px 0 -16px 0
      .post-title
        margin-top: 5px
        font-size: 1.5rem
      .post-ctrls
        width: auto
        display: flex
        align-items: center
        justify-content: right
        a
          width: 2em
          margin: 0
    .post-body
      width: 100%
      img
        width: 100%
        height: auto
    .post-footer
      display: flex
      justify-content: space-between
      align-items: flex-end
      .tags
        margin: 0
        padding: 0
        display: flex
        list-style-type: none
        .tag
          margin: 0 0.2em
          padding: 0.2em
          background-color: rgba(0,255,0,0.2)
      .datetime p
        margin: 0
</style>
