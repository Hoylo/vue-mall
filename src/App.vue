<template>
  <div id="app" v-cloak>
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar/>

  </div>
</template>

<script>
import MainTabBar from "@/components/content/mainTabbar/MainTabBar";

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
[v-cloak] {
  display: none;
}
@import "assets/css/base.css";
</style>
