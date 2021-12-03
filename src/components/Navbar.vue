<template>
  <div id="navbar">
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link class="nav-link" to="/about">About</router-link>
    <router-link class="nav-link" to="/posts">Posts</router-link>
  </div>
</template>

<style lang="scss" scoped>
#navbar {
  @apply fixed top-0 left-0 h-20px bg-light-700 w-full flex justify-start items-center p-4;
}

.nav-link {
  @apply mr-2 text-emerald-700 no-underline font-bold;

  &.router-link-exact-active {
    @apply text-amber-700;
  }
}
</style>
