<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartListLength }})</div>
    </nav-bar>

    <scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </scroll>

    <cart-bottom-bar/>

  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll"
import NavBar from "@/components/common/navbar/NavBar"
import CartList from "@/views/shopcart/childComps/CartList"
import CartBottomBar from "@/views/shopcart/childComps/CartBottomBar";

import {mapGetters} from "vuex"

export default {
  name: "ShopCart",
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
        'cartList',
        'cartListLength'
    ])
  },
  activated() {
    this.$refs.scroll.refresh()
  },
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomBar
  }
}
</script>

<style scoped>
.cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #f6f6f6;
}
.content {
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
</style>