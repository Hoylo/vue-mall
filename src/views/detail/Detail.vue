<template>
<div class="detail">
  <detail-nav-bar/>
  <detail-swiper :top-images="topImages"/>
</div>

</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar"
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";

import {getDetail} from "@/network/detail"

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: []
    }
  },
  methods: {
  },
  components: {
    DetailNavBar,
    DetailSwiper
  },
  created() {
    this.iid = this.$route.params.iid

    getDetail(this.iid).then(res => {
      this.topImages = res.result.itemInfo.topImages
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style scoped>

</style>