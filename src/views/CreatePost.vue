<template lang="pug">
  #create-post
    h1 Create a New Blog Post
    #editor
      form.post-form(@submit.prevent="submitPost")
        label Post Title
        input(:value="post.title" @input="updateTitle")
        label Post Body
        textarea(:value="post.body" @input="updateBody" :rows="rows")
        label Post Tags
        input(:value="post.tags" @input="updateTags")
    hr
    #post-preview
      h3 Post Preview
      Post(v-bind="post")
    button(@click="submitPost") Add Post
</template>

<script>
import Post from "@/components/blog/Post.vue";
import _ from "lodash";

export default {
  name: "create-post",
  components: {
    Post
  },
  data: () => {
    return {
      post: {
        title: "Post Title",
        body: "enter Markdown here",
        tags: [],
        datetime: Date(),
        key: ""
      },
      rows: 3
    };
  },
  methods: {
    updateTitle: function(e) {
      this.post.title = e.target.value;
      this.post.key = this.post.title.toLowerCase().replace(" ", "_");
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
      this.post.datetime = Date();
    },
    submitPost: function() {
      this.axios
        .post("https://skylerflyserver.appspot.com/submit", this.post)
        .then(res => {
          if (res.status === 200) alert("Post Submited /n" + res);
          else console.error(res.data);
        })
        .catch(error => {
          console.error(error);
        });
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
        margin: 10px auto

  #post-preview
    width: 100%

</style>
