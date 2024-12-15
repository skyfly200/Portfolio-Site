import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Footer from "../components/Footer.vue";

describe("Footer.vue", () => {
  it("Renders My Name", () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper.text()).to.include("Skyler Fly-Wilson");
  });
});
