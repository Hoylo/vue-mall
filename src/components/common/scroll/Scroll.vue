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
  props: {
    probeType: {
      type: Number,
       default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    }
  },
  mounted() {
    this.$nextTick(()=> {
      //创建scroll
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad
      })
      // 监听滚动的位置
      if (this.probeType !== 0) {
        this.scroll.on('scroll', (position) => {
          this.$emit('scroll', position)
        })
      }

      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullUpload')
        })
      }
    })

  }
}
</script>

<style scoped>

</style>