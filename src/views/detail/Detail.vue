<template>
<div class="detail" id="detail">
  <detail-nav-bar class="detail-nav" @clickNav="clickNav" ref="nav" />
  <scroll class="content" :probe-type="3" :pull-up-load="true" ref="scroll" @scroll="contentScroll">
    <detail-swiper :top-images="topImages"/>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
    <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
    <detail-params-info ref="params" :param-info="itemParams"/>
    <detail-comment-info ref="comment" :comment-infos="commentInfo"/>
    <goods-list ref="recommend" :goods="recommendInfo"/>
  </scroll>
  <back-top @click.native="backClick" v-show="isShowBackTop"/>
  <detail-bottom-bar @addToCart="addToCart"/>
</div>

</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar"
import DetailSwiper from "@/views/detail/childComps/DetailSwiper"
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo"
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo"
import Scroll from "@/components/common/scroll/Scroll"
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo"
import DetailParamsInfo from "@/views/detail/childComps/DetailParamsInfo"
import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo"
import GoodsList from "@/components/content/goods/GoodsList"
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";

import {getDetail, Goods, Shop, getRecommend} from "@/network/detail"
import {BACK_TOP} from '@/common/mixin'

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommendInfo: [],
      themeTopY: [],
      currentIndex: 0
    }
  },
  methods: {
    imageLoad () {
      this.$refs.scroll.refresh()
      this.themeTopY = []
      this.themeTopY.push(0)
      this.themeTopY.push(this.$refs.params.$el.offsetTop)
      this.themeTopY.push(this.$refs.comment.$el.offsetTop)
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopY.push(Number.MAX_VALUE);
    },
    clickNav(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index] + 50, 200)
      console.log(index)
    },
    contentScroll(position) {
      this.showBackTop(position)
      const positionY = -position.y
      let length = this.themeTopY.length
      for (let i = 0; i < length; i++) {
        if (this.currentIndex !== i &&
            ((i < length - 1 && positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1]) ||
                (i === length - 1 && positionY >= this.themeTopY[i]))) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
    },
    addToCart() {
      const product = {
        image: this.topImages[0],
        title: this.goods.title,
        desc: this.goods.desc,
        price: this.goods.newPrice,
        realPrice: this.goods.realPrice,
        iid: this.iid
      }
      this.$store.dispatch('addCart', product)
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
  },
  mixins: [BACK_TOP],
  created() {
    this.iid = this.$route.params.iid

    getDetail(this.iid).then(res => {
      let result = res.result

      //顶部轮播图数据
      this.topImages = result.itemInfo.topImages
      //商品数据
      this.goods = new Goods(result.itemInfo, result.columns, result.shopInfo.services)
      //商家数据
      this.shop = new Shop(result.shopInfo)
      //商品详情
      this.detailInfo = result.detailInfo
      //参数信息
      this.itemParams = result.itemParams
      //评论信息
      if (result.rate.cRate > 0) {
        this.commentInfo = result.rate.list
      }
      //推荐信息
      getRecommend().then(res => {
        this.recommendInfo = res.data.list
      })

      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px - 49px);
}
</style>