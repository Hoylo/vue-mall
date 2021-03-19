<template>
  <div class="check-button">
    <img src="@/assets/images/cart/tick.svg" alt="" :class="{'checked': checked}">
  </div>
</template>

<script>
export default {
 name: "CheckButton",
  props: {
   checked: {
     type: Boolean,
     default: false
   }
  }
}
</script>

<style scoped>
.check-button,img {
  border-radius: 50%;
  border: 1px solid #aaa;
}
.checked {
  border-color: var(--color-tint);
  background-color: var(--color-tint);
}
</style>