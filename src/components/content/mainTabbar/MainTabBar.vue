<template>
  <tab-bar>
    <tab-bar-item url="/home">
      <img slot="item-icon" src="@/assets/img/home.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item url="/category">
      <img slot="item-icon" src="@/assets/img/category.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/category_actvie.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item url="/shop-cart">
      <img slot="item-icon" src="@/assets/img/shopcart.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item url="/profile">
      <img slot="item-icon" src="@/assets/img/profile.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/profile_actvie.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>