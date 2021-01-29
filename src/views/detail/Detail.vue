<template>
<div class="detail" id="detail">
  <detail-nav-bar class="detail-nav"/>
  <scroll class="content" :probe-type="3" :pull-up-load="true" ref="scroll">
    <detail-swiper :top-images="topImages"/>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
    <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
    <detail-params-info :param-info="itemParams"/>
    <detail-comment-info :comment-infos="commentInfo"/>
    <goods-list :goods="recommendInfo"/>
  </scroll>
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
import GoodsList from "@/components/content/goods/GoodsList";

import {getDetail, Goods, Shop, getRecommend} from "@/network/detail"

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
      recommendInfo: []
    }
  },
  methods: {
    imageLoad () {
      this.$refs.scroll.refresh()
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
    GoodsList
  },
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
  height: calc(100% - 44px);
}
</style>