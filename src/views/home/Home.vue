<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="scroll-content">
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <tab-control  class="tab-control" :tabs="tabs" @tabClick="tabClick"/>
      <goods-list :goods="showGoods"/>
    </scroll>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"
import HomeSwiper from "@/views/home/childComps/HomeSwiper"
import RecommendView from "@/views/home/childComps/RecommendView"
import TabControl from "@/components/common/tabControl/TabControl"
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";

import {
  getHomeData,
  getHomeGoods
} from "@/network/home"

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      homeGoods: {
        pop: {page: 0, list: []},
        new: {page: 0, list: []},
        sell: {page: 0, list: []}
      },
      currentType: 'pop',
      tabs: [
        {
          id: 1,
          title: "流行"
        },
        {
          id: 2,
          title: '新款'
        },
        {
          id: 3,
          title: '精选'
        }
      ]
    }
  },
  created() {
    this.getHomeData()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      console.log(index)
    },

    /**
     * 网络请求相关方法
     */
    getHomeData() {
      getHomeData().then (res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      let page = this.homeGoods[type].page + 1
      getHomeGoods(type, page).then (res => {
        this.homeGoods[type].list.push(...res.data.list)
        this.homeGoods[type].list.page += 1
      })
    }
  },
  computed: {
    showGoods() {
      return this.homeGoods[this.currentType].list
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    TabControl,
    GoodsList,
    Scroll
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #f6f6f6;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}

.scroll-content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>