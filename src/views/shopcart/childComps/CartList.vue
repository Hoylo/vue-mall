<template>
<div class="cart-list">
    <cart-list-item v-for="(item, index) in $store.state.cartList"
                    :key="index"
                    :product="item"/>
</div>
</template>

<script>
import CartListItem from "@/views/shopcart/childComps/CartListItem";
export default {
  name: "CartList",
  components: {
    CartListItem
  }
}
</script>

<style scoped>
.cart-list {

}
</style>