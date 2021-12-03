import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";
import Pages from "vite-plugin-pages";
import WindiCSS from "vite-plugin-windicss";
import SSR from "vite-ssr/plugin";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
    Pages({
      pagesDir: "src/pages",
      extensions: ["vue", "md"],
    }),
    WindiCSS(),
    viteSSR(),
  ],
});
