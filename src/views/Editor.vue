<template lang="pug">
#editor
  Menu
  Drawer
  v-container(fluid grid-list-md)
    v-layout#editor-header
      v-flex
        h1(v-if="edit") Edit Post
        h1(v-else) New Post
    v-layout(align-center row fill-height)#editor-body
      v-flex(xs12 md6)
        v-card.pa-3
          v-form#editor-form(@submit.prevent="publishPost")
            v-text-field#title-field( label="Post Title" v-model="post.title" @input="updateTitle" solo required)
            v-textarea#body-input-group(label="Post Body" v-model="post.body" @input="updateBody" solo :rows="rows")
            v-combobox(small-chips solo multiple
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
              v-menu(:close-on-content-click="false"
                v-model="publishDateMenu"
                :nudge-right="40"
                :return-value.sync="publishDate"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px")
                v-text-field(slot="activator"
                  v-model="publishDate"
                  label="Publish Date"
                  readonly)
                v-date-picker(v-model="publishDate"  @input="publishDateMenu = false" no-title scrollable)
              v-menu(ref="menu"
                :close-on-content-click="false"
                v-model="publishTimeMenu"
                :nudge-right="40"
                :return-value.sync="publishTime"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                max-width="290px"
                min-width="290px")
                v-text-field(slot="activator"
                  v-model="publishTime"
                  label="Publish Time"
                  readonly)
                v-time-picker(v-if="publishTimeMenu" v-model="publishTime" full-width @change="$refs.menu.save(publishTime)")
              v-select#version-field(return-object
                v-model="version"
                label="Version History"
                v-if="post.edits && post.edits.length > 0"
                :items="post.edits"
                item-text="edited")
              v-switch#post-id-field(v-model="post.canComment" label="Post Comments")
            ul.errors
              li.error(v-for="error in errors") {{ error }}
            p.saved-timestamp(v-if="saved") Saved: {{ formatDatetime(saved) }}
            v-btn(color="success" type="submit" large @click="publishPost") Publish
            router-link(to="/blog")
              v-btn(v-if="post.published === ''" color="primary" large) Save
            v-btn(v-if="edit" color="error" large @click="revertPost") Discard
      v-flex#post-preview(xs12 md6)
        Post(v-bind="post")
</template>

<script>
import Post from "../components/blog/Post.vue";
import Menu from "../components/blog/Menu.vue";
import Drawer from "../components/blog/Drawer.vue";
import _ from "lodash";
import moment from "moment";

export default {
  name: "create-post",
  components: {
    Post,
    Menu,
    Drawer
  },
  created() {
    this.$store.commit("setDrawer", false);
    this.axios
      .get("https://skylerflyserver.appspot.com/tags")
      .then(response => {
        this.tags = response.data.tags;
      });
    if (this.$route.params.id) {
      let url =
        "https://skylerflyserver.appspot.com/posts/post/" +
        this.$route.params.id;
      this.axios
        .get(url)
        .then(response => {
          this.post = response.data.post;
          this.edit = true;
          this.post.edits.push({
            edited: this.post.edited.slice(0),
            body: this.post.body.slice(0),
            tags: this.post.tags.slice(0)
          });
        })
        .catch(() => {});
    } else {
      this.axios
        .get("https://skylerflyserver.appspot.com/posts/uid")
        .then(response => {
          this.post.id = response.data.id;
          this.post.created = new Date().toISOString();
        });
    }
  },
  data: () => {
    return {
      publishDateMenu: false,
      publishTimeMenu: false,
      publishDate: new Date().toISOString().substr(0, 10),
      publishTime: null,
      tags: [],
      post: {
        title: "",
        body: "Write your post in Markdown here",
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
      }
      if (this.post.body === "") {
        valid = false;
        this.errors.push("Body May Not Be Empty!");
      }
      return valid;
    },
    revertPost: function() {
      var preEdit = this.post.edits.pop();
      // get diff of tags list and update tags
      var oldTags = preEdit.tags.filter(x => !this.post.tags.includes(x));
      var newTags = this.post.tags.filter(x => !preEdit.tags.includes(x));
      // decrement new tags and increent old tags
      for (let t in oldTags) this.updateTags(oldTags[t], true);
      for (let t in newTags) this.updateTags(newTags[t], false);
      this.post.edited = preEdit.edited;
      this.post.body = preEdit.body;
      this.post.tags = preEdit.tags;
      this.axios
        .post("https://skylerflyserver.appspot.com/posts/submit", this.post)
        .then(res => {
          if (res.status !== 200) this.errors.push(res.data);
          else this.$router.push("/blog");
        })
        .catch(error => {
          this.errors.push(error);
        });
    },
    savePost: function() {
      this.axios
        .post("https://skylerflyserver.appspot.com/posts/submit", this.post)
        .then(res => {
          if (res.status === 200) this.saved = new Date().toISOString();
          else this.errors.push(res.data);
        })
        .catch(error => {
          this.errors.push(error);
        });
    },
    publishPost: function() {
      if (this.verifyPost()) {
        this.post.publishedVersion = this.post.edited;
        this.post.published = new Date().toISOString();
        this.axios
          .post("https://skylerflyserver.appspot.com/posts/submit", this.post)
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
#editor
  #editor-header
    text-align: center
  .v-autocomplete .v-chip
    border: none
    color: white
    background-color: $color-secondary-2-1
  height: 100%
  background-color: $color-primary-4
  color: white
.container
  flex-grow: 1
</style>
