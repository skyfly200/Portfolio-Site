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
              @change="addTag"
              label="Search for tags"
              v-model="post.tags"
              item-text="title" item-value="id" :items="tags")
                template(slot="no-data")
                  v-list-tile
                    v-list-tile-content
                      v-list-tile-title
                        | No tags matching "
                        strong {{ search }}
                        | ". Press&nbsp;
                        kbd enter
                        | &nbsp;to create a new one
                template(slot="selection" slot-scope="{ item, parent }")
                  v-chip(small close @input="removeTag(item)")
                    span.pr-2 {{ item.title }}

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
            v-btn(v-if="edit" color="error" type="submit" large @click="revertPost") Discard Changes
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
    this.axios
      .get("https://skylerflyserver.appspot.com/tags")
      .then(response => {
        this.tags = response.data.tags;
      });
    if (this.$route.params.id) {
      let url =
        "https://skylerflyserver.appspot.com/post/" + this.$route.params.id;
      this.axios
        .get(url)
        .then(response => {
          this.post = response.data.post;
          this.edit = true;
          this.post.edits.push({
            edited: this.post.edited,
            body: this.post.body,
            tags: this.post.tags
          });
        })
        .catch(() => {});
    } else {
      this.axios
        .get("https://skylerflyserver.appspot.com/uid")
        .then(response => {
          this.post.id = response.data.id;
          this.post.created = new Date().toISOString();
        });
    }
  },
  data: () => {
    return {
      tags: [],
      post: {
        title: "Post Title",
        body: "Write post in Markdown here",
        edits: [],
        tags: [],
        edited: new Date().toISOString(),
        created: new Date().toISOString(),
        canComment: true,
        comments: [],
        published: "",
        publishedVersion: "",
        archived: false,
        id: ""
      },
      rows: 3,
      edit: false,
      version: null,
      errors: [],
      search: null,
      saved: "",
      advanced: false
    };
  },
  methods: {
    updateTags(tag, increment) {
      this.axios.post("https://skylerflyserver.appspot.com/tags", {
        tag: tag.title,
        increment: increment
      });
    },
    addTag(selection) {
      var tag;
      if (typeof selection.slice(0).pop() === "string") {
        var title = selection.pop();
        tag = {
          title: title,
          id: title.toLowerCase()
        };
        this.post.tags.push(tag);
      } else {
        tag = this.post.tags.slice(0).pop();
      }
      this.updateTags(tag, true);
      this.search = null;
      this.updateDatetime();
      this.savePost();
    },
    removeTag(tag) {
      this.post.tags.splice(this.post.tags.indexOf(tag), 1);
      this.post.tags = [...this.post.tags];
      this.updateTags(tag, false);
      this.search = null;
      this.updateDatetime();
      this.savePost();
    },
    formatDatetime(datetime) {
      return moment(datetime).format("dddd, MMM Do YYYY, h:mm a");
    },
    updateTitle: function() {
      this.updateDatetime();
      this.savePost();
    },
    updateBody: _.debounce(function() {
      this.updateDatetime();
      this.savePost();
    }, 300),
    updateDatetime: function() {
      this.post.edited = new Date().toISOString();
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
    revertPost: function() {
      var lastEdit = this.post.edits.pop();
      console.log(lastEdit);
      this.post.edited = lastEdit.edited;
      this.post.body = lastEdit.body;
      this.post.tags = lastEdit.tags;
      this.axios
        .post("https://skylerflyserver.appspot.com/submit", this.post)
        .then(res => {
          if (res.status !== 200) this.errors.push(res.data);
        })
        .catch(error => {
          this.errors.push(error);
        });
    },
    savePost: function() {
      this.axios
        .post("https://skylerflyserver.appspot.com/submit", this.post)
        .then(res => {
          if (res.status === 200) this.saved = new Date().toISOString();
          else this.errors.push(res.data);
        })
        .catch(error => {
          this.errors.push(error);
        });
    },
    submitPost: function() {
      if (this.verifyPost()) {
        this.post.publishedVersion = this.post.edited;
        this.post.published = new Date().toISOString();
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
