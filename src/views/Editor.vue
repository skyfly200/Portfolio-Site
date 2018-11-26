<template lang="pug">
  #create-post
    h1(v-if="edit") Edit Blog Post
    h1(v-else) New Blog Post
    #editor
      form.post-form(@submit.prevent="submitPost")
        label Post Title
        input(:value="post.title" @input="updateTitle")
        label Post Body
        textarea(:value="post.body" @input="updateBody" :rows="rows")
        label Post Tags
        input(:value="post.tags" @input="updateTags")
      ul.errors
        li.error(v-for="error in errors")
    hr
    #post-preview
      Post(v-bind="post")
    hr
    button(@click="submitPost") {{ edit ? "Save" : "Add"}} Post
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
          this.post.edits.append({
            timestamp: this.post.updated,
            body: this.post.updated,
            tags: this.post.tags
          });
        })
        .catch();
    }
  },
  data: () => {
    return {
      post: {
        title: "",
        body: "enter Markdown here",
        edits: [],
        tags: [],
        edited: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
        created: null,
        id: "post_title"
      },
      rows: 3,
      edit: false,
      errors: []
    };
  },
  methods: {
    updateTitle: function(e) {
      this.post.title = e.target.value;
      this.post.id = this.post.title.replace(/\s/g, "_").toLowerCase();
      this.updateDatetime();
    },
    updateBody: _.debounce(function(e) {
      this.post.body = e.target.value;
      this.updateDatetime();
    }, 300),
    updateTags: function(e) {
      this.post.tags = e.target.value.split(/[\s,]+/);
      this.updateDatetime();
    },
    updateDatetime: function() {
      this.post.edited = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    },
    verifyPost: function() {
      let valid = true;
      if (this.post.title !== "") {
        valid = false;
        this.errors.append("Title May Not Be Empty!");
      }
      if (this.post.body !== "") {
        valid = false;
        this.errors.append("Body May Not Be Empty!");
      }
      return valid;
    },
    submitPost: function() {
      if (this.verifyPost()) {
        if (!this.edit) this.post.created = this.post.edited;
        this.axios
          .post("https://skylerflyserver.appspot.com/submit", this.post)
          .then(res => {
            if (res.status === 200) this.$router.push("/blog/dash");
            else this.errors.append(res.data);
          })
          .catch(error => {
            this.errors.append(error);
          });
      }
    }
  }
};
</script>

<style lang="sass">
  body
    text-align: center
    margin: 0
  #editor
    display: flex
    flex-direction: column
    align-items: center
    width: auto
    margin: auto
    .post-form
      display: flex
      flex-direction: column
      width: 100%
      align-items: center
      input, textarea
        width: 90%
        color: black
        margin: 10px auto

  button
    color: black

  #post-preview
    width: 100%

</style>
