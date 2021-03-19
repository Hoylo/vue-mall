<template>
<div class="bottom-bar">
   <div class="cart" @click="addToCart">加入购物车</div>
</div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  position: relative;
  height: 49px;
  background-color: #ffffff;
}
.cart {
  right: 0;
  height: 49px;
  width: 100px;
  line-height: 49px;
  background-color: #ff8198;
}
</style>