<template>
<div class="bottom-bar">
  <div class="check-content" @click="checkAll">
    <check-button class="check-button" :checked="isCheckAll"/>
    <div>全选</div>
  </div>
  <div class="price">
    总计:{{checkedTotalPrice}}
  </div>
  <div class="calc">
    去结算({{checkedLength}})
  </div>
</div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton"
import {mapGetters} from 'vuex'

export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters([
        "checkedTotalPrice",
        "checkedLength",
        "isCheckAll"
    ])
  },
  methods: {
    checkAll() {
      this.$store.dispatch('cancelCheckedAll', !this.isCheckAll)
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  background-color: #eee;
  position: relative;
  line-height: 40px;
  display: flex;
  font-size: 12px;
}
.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
}
.price {
  width: 80px;
  margin-left: 30px;
}
.calc {
  background-color: #ff8198;
  margin-left: auto;
  color: #f6f6f6;
  min-width: 80px;
  text-align: center;
}

</style>