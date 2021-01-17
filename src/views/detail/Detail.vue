<template>
<div class="detail">
  <detail-nav-bar/>
  <detail-swiper :top-images="topImages"/>
  <detail-base-info :goods="goods"/>
</div>

</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar"
import DetailSwiper from "@/views/detail/childComps/DetailSwiper"
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo"

import {getDetail, Goods} from "@/network/detail"

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {}
    }
  },
  methods: {
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  created() {
    this.iid = this.$route.params.iid

    getDetail(this.iid).then(res => {
      let result = res.result

      this.topImages = result.itemInfo.topImages

      this.goods = new Goods(result.itemInfo, result.columns, result.shopInfo.services)

      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style scoped>

</style>