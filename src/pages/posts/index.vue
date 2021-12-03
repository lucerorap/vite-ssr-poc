<script lang="ts" setup>
import type { RouteRecordRaw } from "vue-router";
import { inject } from "vue";

const pageRoutes = inject<RouteRecordRaw[]>("posts");
</script>
<template>
  <div class="posts">
    <router-link :to="page.path" v-for="page in pageRoutes" class="post">
      <div class="post-name">{{ page.name }}</div>
      <div class="post-detail">
        <div v-for="(value, key) in page.meta" class="item">
          {{ key }}: {{ value }}
        </div>
      </div>
    </router-link>
    <!-- <h3>Post page {{ pageRoutes }}</h3>
    <router-link to="/posts/samplemdfile">Go to MD</router-link> -->
  </div>
</template>

<style lang="scss" scoped>
.posts {
  @apply w-full max-w-750px mx-auto p-3;
  @apply border-2 border-light-600 border-solid rounded-5px;
  box-shadow: 0px 0px 3px 1px hsla(0, 0%, 0%, 0.11);
}

.post {
  @apply mb-2 p-2 border-dark-200 rounded-2px border-l-2 border-solid;
  @apply border-t-0 border-r-0 border-b-0 block no-underline text-red-800;

  .post-name {
    @apply text-base font-bold mb-2;
  }

  .post-detail {
    @apply text-gray-500;
  }
}
</style>
