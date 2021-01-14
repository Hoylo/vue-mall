<template>
<div class="detail">
  <detail-nav-bar/>
</div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";

import {getDetail} from "@/network/detail";

export default {
  name: "Detail",
  data() {
    return {
      iid: null
    }
  },
  methods: {
  },
  components: {
    DetailNavBar
  },
  created() {
    this.iid = this.$route.params.iid

    getDetail(this.iid).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style scoped>

</style>