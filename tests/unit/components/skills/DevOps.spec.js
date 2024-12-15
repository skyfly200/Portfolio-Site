import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import DevOps from "../components/skills/DevOps.vue";

describe("DevOps.vue", () => {
  it("Renders Title", () => {
    const wrapper = shallowMount(DevOps);
    expect(wrapper.text()).to.include("Experience and Skillset");
  });
});
