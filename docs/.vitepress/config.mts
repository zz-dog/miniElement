import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "z-element",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "指南", link: "/" },
      { text: "组件", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "组件",
        items: [
          { text: "icon", link: "/icon.md" },
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/zz-dog/miniElement" },
    ],
  },
});
