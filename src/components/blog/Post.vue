<template lang="pug">
  .post
    .post-ctrls(v-if="showCtrls")
        a(:href="'/blog/edit/' + id")
          svg.fas.fa-lg.fa-edit
        a(@click.prevent="deleteConfirm" href="#")
          svg.fas.fa-lg.fa-trash
        a(v-if="edits && edits.length > 0" v-b-toggle.edit-history href="#")
          svg.fas.fa-lg.fa-clock
    .post-header
      a(:href="'/blog/post/' + id")
        h1 {{ title }}
    .post-body(v-html="compiledMarkdown")
    hr
    .post-footer
      .tags(v-if="tags")
          .tag(v-for="tag in tags")
            a(:href="'#' + tag").tag-link {{ tag }}
      .datetime
        p {{ timestamp }}
    b-collapse#edit-history
      h3 Edit History
      ul.edits
        li(v-for="(item,index) in edits")
          a(:href="'/blog/post/' + id + '/' + index") {{ formatDatetime(item.edited) }}
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
  computed: {
    timestamp: function() {
      return moment(this.created).format("dddd, MMMM Do YYYY, h:mm:ss a");
    },
    compiledMarkdown: function() {
      return marked(this.body, { sanitize: true });
    },
    showCtrls: function() {
      return this.admin;
    }
  },
  methods: {
    deletePost() {
      this.axios
        .delete("https://skylerflyserver.appspot.com/post/" + this.id, {})
        .then(res => {
          if (res.data.result.indexUpdates > 0) this.$emit("refreshPosts");
        })
        .catch(() => {});
    },
    formatDatetime(datetime) {
      return moment(datetime).format("dddd, MMMM Do YYYY, h:mm:ss a");
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
    text-align: center
    background-color: white
    color: black
    box-shadow: 0em 0em 1em 0.1em rgba(255,255,255,0.5)
    .post-ctrls
      width: auto
      display: flex
      align-items: center
      justify-content: left
      a
        width: 2em
        margin: 0
    .post-header h3
      margin-top: 5px
      font-size: 1.5rem
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
