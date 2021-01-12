<template>
<div class="tab-control">
  <div v-for="(item, index) in tabs" class="tab-control-item"
       :class="{active: currentIndex === index}"
       @click="clickItem(index)"
       :key="index">
    <span >{{item.title}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    clickItem(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #f6f6f6;
}
.tab-control-item {
  flex: 1;
}

.tab-control-item span {
  padding: 5px;
}

.active span {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-high-text);
}
</style>