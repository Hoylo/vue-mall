<template>
    <nav-bar class="nav-bar">
      <div slot="left" class="left" @click="back">
        <img src="@/assets/images/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <div v-for="(item, index) in navItems" :key="index" class="nav-item"
             @click="clickNavItem(index)" :class="{active: currentIndex === index}">{{item}}
        </div>
      </div>
    </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"

export default {
  name: "DetailNavBar",
  data() {
    return {
      currentIndex: 0,
      navItems: ['商品', '参数', '评论', '推荐'],
    }
  },
  components: {
    NavBar
  },
  methods: {
    clickNavItem(index) {
      this.currentIndex = index
      this.$emit('clickNav', index)
    },
    back() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.left img {
  padding-left: 1px;
  padding-top: 10px;
}
.center {
  display: flex;
}
.nav-item {
  flex: 1;
}
.center .active {
  color: var(--color-high-text);
}
</style>