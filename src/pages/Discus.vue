<template>
  <div class="discus">
    <div class="filter flex align-center justify-evenly fixed-top">
      <!-- <div class="item">熱門</div>
      <div class="item">最新</div> -->
      <q-tabs
        v-model="tab"
        class="text-teal"
      >
        <q-tab :ripple="false" name="hot" label="熱門" />
        <q-tab :ripple="false" name="new" label="最新" />
      </q-tabs>
    </div>
    <div class="discus-list">
      <DiscusItem class="item" v-for="n in 20" :key="n" />
    </div>
  </div>
</template>

<script>
import DiscusItem from 'components/Discus/Item'

export default {
  data () {
    return {
      tab: 'hot'
    }
  },
  components: {
    DiscusItem
  }
}
</script>

<style lang="scss" scoped>
.discus {
<<<<<<< HEAD
  padding: 60px 12px 10px;
=======
  padding: 60px 10px 10px;
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
}
.filter {
  height: 40px;
  top: 50px;
  background: $white;
  border-bottom: 1px solid $lighter2;
<<<<<<< HEAD
  z-index: 9;
=======
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
}
.discus-list {
  .item {
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid $lighter2;
  }
}
/deep/ .q-tab {
  height: 40px;
  min-height: auto;
  margin-right: 80px;
  animation: none;
  width: 35px;
  &:last-child {
    margin-right: 0;
  }
}
/deep/ .text-teal {
  color: $font-default !important;
}
/deep/ .q-tab__indicator {
  background: $primary;
}
</style>
<<<<<<< HEAD

<style lang="scss" scoped>
.platform-ios {
  .filter {
    top: calc(50px + env(safe-area-inset-top)) !important;
  }
}
</style>
=======
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
