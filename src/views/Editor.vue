<template lang="pug">
  b-container#editor(fluid)
    b-row#editor-header
      b-col
        h1(v-if="edit") Edit Post
        h1(v-else) New Post
    b-row#editor-body
      b-col(lg="6")
        b-form#editor-form(@submit.prevent="submitPost")
          b-form-group#title-input-group(
            label="Post Title"
            label-for="post-title-field")
            b-input#post-title-field(v-model="post.title" @input="updateTitle" required)
          b-form-group#body-input-group(
            label="Post Body"
            label-for="post-body-field")
            b-form-textarea#post-body-field(v-model="post.body" @input="updateBody" :rows="rows")
          b-form-group#tags-input-group(
            description="Commas or space seperated list of tags"
            label="Post Tags"
            label-for="post-tags-field")
            b-input#post-tags-field(v-model="rawTags" @input="updateTags")
          b-btn#advanced-link(v-b-toggle.post-advanced size="sm" variant="outline-success") Advanced Options
          b-collapse#post-advanced
            b-form-group#id-input-group(
              label="Post ID"
              label-for="post-id-field")
              b-input#post-id-field(v-model="post.id" disabled)
            b-form-group#created-input-group(
              label="Post Created"
              label-for="post-created-field")
              b-input#post-created-field(:value="formatDatetime(post.created)" disabled)
            b-form-group#version-input-group(
              label="Version History"
              label-for="post-version-field"
              v-if="post.edits && post.edits.length > 0")
              b-form-select#post-version-field(class="mb-3")
                option(v-for="(item,index) in post.edits" :value="index") {{ index + ": " + formatDatetime(item.edited) }}
            b-checkbox#post-id-field(v-model="!post.canComment") Disable Post Comments
          ul.errors
            li.error(v-for="error in errors") {{ error }}
          b-button(variant="success" type="submit" size="lg" @click="submitPost") Publish
          //-b-button(v-if="!edit" variant="primary" size="lg" @click="savePost") Save
      b-col#post-preview(lg="6")
        Post(v-bind="post")
</template>

<script>
import Post from "@/components/blog/Post.vue";
import _ from "lodash";
import moment from "moment";

export default {
  name: "create-post",
  components: {
    Post
  },
  created() {
    if (this.$route.params.id) {
      let url =
        "https://skylerflyserver.appspot.com/post/" + this.$route.params.id;
      this.axios
        .get(url)
        .then(response => {
          this.post = response.data.post;
          this.edit = true;
          this.rawTags = this.post.tags.join();
          this.post.edits.push({
            edited: this.post.edited,
            body: this.post.body,
            tags: this.post.tags
          });
        })
        .catch(() => {});
    }
  },
  data: () => {
    return {
      post: {
        title: "Post Title",
        body: "Write post in Markdown here",
        edits: [],
        tags: [],
        edited: new Date().toISOString(),
        created: new Date().toISOString(),
        canComment: true,
        comments: [],
        isPublished: false,
        published: "",
        archived: false,
        id: "post_title"
      },
      rawTags: "",
      rows: 3,
      edit: false,
      errors: []
    };
  },
  methods: {
    formatDatetime(datetime) {
      return moment(datetime).format("dddd, MMM Do YYYY, h:mm a");
    },
    updateTitle: function() {
      if (!this.edit)
        this.post.id = this.post.title.replace(/\s/g, "_").toLowerCase();
      this.updateDatetime();
    },
    updateBody: _.debounce(function() {
      this.updateDatetime();
    }, 300),
    updateTags: function() {
      this.post.tags = this.rawTags.split(/[\s,]+/);
      this.updateDatetime();
    },
    updateDatetime: function() {
      this.post.edited = new Date().toISOString();
      if (!this.edit) this.post.created = this.post.edited;
    },
    verifyPost: function() {
      this.errors = [];
      let valid = true;
      if (this.post.title === "") {
        valid = false;
        this.errors.push("Title May Not Be Empty!");
      } else if (this.post.title === "Post Title") {
        valid = false;
        this.errors.push("Title Must Be Unique!");
      }
      if (this.post.body === "") {
        valid = false;
        this.errors.push("Body May Not Be Empty!");
      }
      return valid;
    },
    savePost: function() {
      if (this.verifyPost()) {
        this.axios
          .post("https://skylerflyserver.appspot.com/submit", this.post)
          .then(res => {
            if (res.status === 200) this.$router.push("/blog");
            else this.errors.push(res.data);
          })
          .catch(error => {
            this.errors.push(error);
          });
      }
    },
    submitPost: function() {
      if (this.verifyPost()) {
        this.post.isPublished = true;
        this.published = new Date().toISOString();
        this.axios
          .post("https://skylerflyserver.appspot.com/submit", this.post)
          .then(res => {
            if (res.status === 200) this.$router.push("/blog");
            else this.errors.push(res.data);
          })
          .catch(error => {
            this.errors.push(error);
          });
      }
    }
  }
};
</script>

<style lang="sass">
  html
    margin: 0
    body
      background-color: $color-primary-4
      color: white
  #editor
    min-height: 100vh
    display: flex
    flex-direction: column
    justify-content: space-around
    #editor-header
      text-align: center
    #editor-body
      margin: auto 0
      display: flex
    #editor-form
      width: auto
      margin: auto
      margin-bottom: 3%
      button
        margin: 0 5px
    #post-preview
      margin-bottom: 3%
</style>
