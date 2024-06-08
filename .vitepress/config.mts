import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zed Vim Cheatsheet",
  description:
    "A curated collection of personal Zed Vim cheatsheets. Perfect for beginners.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Zed",
        link: "/",
      },
      {
        text: "Navigations",
        link: "/navigation",
      },
      {
        text: "Editing",
        link: "/editing",
      },
      {
        text: "Modifying",
        link: "/modifying",
      },
      {
        text: "Searching",
        link: "/search",
      },
      {
        text: "Bookmarks",
        link: "/bookmarks",
      },
    ],
  },
});
