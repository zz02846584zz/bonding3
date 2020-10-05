<template>
  <div class="notice">
    <div class="list">
      <NoticeItem v-for="n in 10" :key="n" />
    </div>
  </div>
</template>

<script>
import NoticeItem from 'components/Notice/Item'

export default {
  components: {
    NoticeItem
  }
}
</script>

<style lang="scss" scoped>
.notice {
  padding: 10px 12px;
}
</style>
