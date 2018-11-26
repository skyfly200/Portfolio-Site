<template lang="pug">
  .post
    .post-ctrls(v-if="showCtrls")
        a(:href="'/blog/edit/' + id")
          i.fas.fa-2x.fa-edit
        a(@click.prevent="deleteConfirm" href="#")
          i.fas.fa-2x.fa-trash
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
        .catch();
    },
    deleteConfirm() {
      let message = {
        title: "Confirm Delete Post",
        body: "Are you sure you want to permanently delete this Post?"
      };
      this.$dialog
        .confirm(message)
        .then(this.deletePost())
        .catch(); // delete cancled
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
      width: 6em
      display: flex
      align-items: center
      justify-content: space-around
      a
        margin: auto
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
