<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control class="tab-control" ref="tabControl1" :tabs="tabs" @tabClick="tabClick" v-show="isTabFixed"/>
    <scroll class="scroll-content" ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="scrollPosition"
            @pullUpload="pullUpload">
      <home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends" />
      <tab-control ref="tabControl2" :tabs="tabs" @tabClick="tabClick" />
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"
import HomeSwiper from "@/views/home/childComps/HomeSwiper"
import RecommendView from "@/views/home/childComps/RecommendView"
import TabControl from "@/components/common/tabControl/TabControl"
import GoodsList from "@/components/content/goods/GoodsList"
import Scroll from "@/components/common/scroll/Scroll"
import {BACK_TOP} from '@/common/mixin'
import {debounce} from "@/common/utils"

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
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
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
  mixins: [BACK_TOP],
  created() {
    this.getHomeData()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    this.$nextTick(() => {
      // 图片加载完成监听
      const refresh = debounce(this.$refs.scroll.refresh)
      this.$bus.$on('itemImageLoad', () => {
        this.$refs.scroll && this.$refs.scroll.scroll && refresh()
      })
    })
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
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
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },

    scrollPosition(position) {
      //backtop是否显示
      this.showBackTop(position)
      //tab-control吸顶效果
      this.isTabFixed = -position.y > this.$refs.tabControl2.$el.offsetTop
    },
    pullUpload() {
      this.getHomeGoods(this.currentType)
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
        this.$refs.scroll.finishPullUp()
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
  position: relative;
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