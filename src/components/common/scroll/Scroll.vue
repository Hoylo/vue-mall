<template>
<div class="wrapper" ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>

import BScroll from "better-scroll"

export default {
  name: "BScroll",
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.$nextTick(()=> {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        click: true,
        pullUpLoad: true
      })
    })

  }
}
</script>

<style scoped>

</style>