<template>
<div class="wrapper" ref="wrapper">

</div>
</template>

<script>
import BScroll from "better-scroll"

export default {
  name: "Category",
  data() {
    return {
      scroll: null
    }
  },
  created() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        click: true,
        pullUpLoad: true
      })

      this.scroll.on('scroll', (position) => {
        console.log(position)
      })

      this.scroll.on('pullingUp', () => {

      })
    })
  }
}
</script>

<style scoped>
.wrapper {
  height: 200px;
  background: #ff5777;
  overflow: hidden;
}
</style>