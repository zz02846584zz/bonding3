<template>
  <div class="material">
    <div class="filter fixed-top flex align-center">
      <div class="filter-item active">分類</div>
      <div class="filter-item">特性</div>
      <div class="filter-item">公司</div>
      <div class="filter-item">排序</div>
    </div>
    <div class="material-list">
      <Item class="item" v-for="n in 30" :key="n" />
    </div>
  </div>
</template>

<script>
import Item from 'components/Material/Item'
export default {
  components: {
    Item
  }
}
</script>

<style lang="scss" scoped>
.material {
  padding-top: 40px;
}
.filter {
  top: 50px;
  padding: 0 12px;
  height: 40px;
  font-size: 12px;
  background: $white;
  border-bottom: 1px solid $lighter2;
  .filter-item {
    padding: 2px 8px;
    margin-right: 8px;
    border: 1px solid $filter-border;
    border-radius: 2px;
    color: $gray;
    font-weight: bold;
    &.active {
      border-color: $primary;
      background: $primary;
      color: $white;
    }
  }
}
.material-list {
  padding: 10px 12px;
}
.item {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid $lighter;
}
</style>

<style lang="scss" scoped>
.platform-ios {
  .filter {
    top: calc(50px + env(safe-area-inset-top)) !important;
  }
}
</style>
