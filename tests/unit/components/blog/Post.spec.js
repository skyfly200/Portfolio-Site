import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import sinon from "sinon";
import Post from "../components/blog/Post.vue";
import marked from "marked";
import moment from "moment";

var postProps = {
  admin: false,
  title: "Test Title",
  body: "",
  tags: ["test"],
  created: new Date().toISOString(),
  edited: new Date().toISOString(),
  id: "test_title"
};

describe("Post.vue", () => {
  const wrapper = shallowMount(Post, {
    propsData: postProps
  });
  it("Renders Post Title", () => {
    expect(wrapper.text()).to.include(postProps.title);
  });
  it("Renders Post Body", () => {
    let renderedBody = marked(postProps.body);
    expect(wrapper.text()).to.include(renderedBody);
  });
  it("Renders List of Tags", () => {
    expect(wrapper.text()).to.contain(postProps.tags[0]);
  });
  it("Renders Datetime", () => {
    let fmtDate = moment(postProps.created).format(
      "dddd, MMMM Do YYYY, h:mm:ss a"
    );
    expect(wrapper.html()).to.contain(
      '<div class="datetime"><p>' + fmtDate + "</p></div>"
    );
  });
  it("Renders Admin Controls Only to Admin", () => {
    expect(wrapper.html()).not.to.contain('<div class="post-ctrls">');
    wrapper.setProps({ admin: true });
    expect(wrapper.html()).to.contain('<div class="post-ctrls">');
  });
  it("Confirms Delete", () => {
    const deleteConfirmStub = sinon.stub();
    wrapper.setMethods({ deleteConfirm: deleteConfirmStub });
    wrapper.find(".fa-trash").trigger("click");
    expect(deleteConfirmStub.called).to.equal(true);
  });
  afterEach(() => {
    // Restore the default sandbox here
    sinon.restore();
  });
});
