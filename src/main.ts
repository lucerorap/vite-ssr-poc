import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "virtual:generated-pages";
import "virtual:windi.css";

import { viteSSR } from "vite-ssr/vue";
import { createHead } from "@vueuse/head";

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// const app = createApp(App);

// app.use(router).mount("#app");

export default viteSSR(
  App,
  {
    routes,
  },
  ({ app, router }) => {
    const head = createHead();
    app.use(head);

    let postPages = routes.filter((route) => {
      return route.path.startsWith("/posts/") ? true : false;
    });

    postPages = postPages.map((post) => {
      const date = post.meta!.date as string;
      const dateObject = new Date(date);
      post.meta!.newdate = dateObject;
      //   console.log("dateobject", dateObject);
      //   return post;
      return Object.assign(post, {
        ___time: dateObject.getTime(),
      });
    });

    postPages.sort((a, b) => {
      return b.___time - a.___time;
    });
    console.log("postPages", postPages);

    app.provide("posts", postPages);

    return {
      head,
    };
  }
);
