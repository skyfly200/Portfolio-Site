import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Post from "@/components/blog/Post.vue";

var postProps = {
  admin: false,
  title: "Test Title",
  body: "",
  tags: [],
  created: "",
  edited: "",
  id: ""
};

describe("Post.vue", () => {
  it("Renders Post Title", () => {
    const wrapper = shallowMount(Post, {
      propsData: postProps
    });
    expect(wrapper.text()).to.include("Test Title");
  });
});
