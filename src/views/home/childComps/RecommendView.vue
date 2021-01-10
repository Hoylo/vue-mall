<template>
<div class="recommend">
  <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  padding: 15px 0 15px;
  border-bottom: 8px solid #eee;
}
.recommend-item {

}

.recommend-item img {
  width: 100%;
}
</style>