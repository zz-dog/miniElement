import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ZButton from "./button.vue";

describe("ZButton", () => {
  it("emits click event", async () => {
    const wrapper = mount(ZButton);
    await wrapper.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("click");
  });

  it("applies size class", () => {
    const wrapper = mount(ZButton, {
      props: {
        size: "large",
      },
    });
    expect(wrapper.classes()).toContain("z-button--large");
  });
});
