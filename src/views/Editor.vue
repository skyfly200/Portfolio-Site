<template lang="pug">
  v-container#editor(fluid grid-list-md)
    v-layout#editor-header
      v-flex
        h1(v-if="edit") Edit Post
        h1(v-else) New Post
    v-layout(align-center row fill-height)#editor-body
      v-flex(xs12 md6)
        v-card.pa-3
          v-form#editor-form(@submit.prevent="submitPost")
            v-text-field#title-field( label="Post Title" v-model="post.title" @input="updateTitle" solo required)
            v-textarea#body-input-group(label="Post Body" v-model="post.body" @input="updateBody" solo :rows="rows")
            v-combobox#tags-input-group(small-chips solo multiple
              :search-input.sync="search"
              :hide-no-data="!search"
              hide-selected
              label="Search for tags"
              v-model="post.tags" :items="topics")
                template(slot="no-data")
                  v-list-tile
                    v-list-tile-content
                      v-list-tile-title
                      | No results matching "
                      strong {{ search }}
                      | ". Press
                      kbd enter
                      | to create a new one
                template(slot="selection" slot-scope="{ item, parent, selected }")
                  v-chip(small close :selected="selected" @input="removeTag(item)")
                    span.pr-2 {{ item }}
            v-btn#advanced-link(@click="advanced = !advanced" flat small) Show Advanced
            #post-advanced(v-show="advanced")
              v-text-field#id-field(label="Post ID" v-model="post.id" readonly)
              v-text-field#created-field(label="Post Created" :value="formatDatetime(post.created)" readonly)
              v-select#version-field(return-object
                v-model="version"
                label="Version History"
                v-if="post.edits && post.edits.length > 0"
                :items="post.edits"
                item-text="edited")
              v-switch#post-id-field(v-model="post.canComment" label="Post Comments")
            ul.errors
              li.error(v-for="error in errors") {{ error }}
            v-btn(color="success" type="submit" large @click="submitPost") Publish
            //-v-btn(v-if="!edit" variant="primary" size="lg" @click="savePost") Save
      v-flex#post-preview(xs12 md6)
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
      topics: ["Mycology", "Hardware", "Software", "LEDs", "Audio", "Video"],
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
      version: null,
      errors: [],
      search: null,
      advanced: false
    };
  },
  methods: {
    removeTag(tag) {
      this.post.tags.splice(this.post.tags.indexOf(tag), 1);
      this.post.tags = [...this.post.tags];
    },
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
    #editor-header
      text-align: center
</style>
