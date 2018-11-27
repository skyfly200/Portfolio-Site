import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Post from "@/components/blog/Post.vue";

var postProps = {
  admin: false,
  title: "Title",
  body: "",
  tags: Array,
  created: "",
  edited: "",
  id: String
};

describe("Post.vue", () => {
  it("Renders Post Title", () => {
    const wrapper = shallowMount(Post, {
      propsData: postProps
    });
    expect(wrapper.text()).to.include("Skyler Fly-Wilson");
  });
});
