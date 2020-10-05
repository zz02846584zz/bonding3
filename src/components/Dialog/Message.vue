<template>
  <div class="dialog__message absolute-center shadow-7">
    <div class="title">{{title}}</div>
    <div class="message">{{message}}</div>
    <div class="confirm clickable" @click="$emit('close')">OK</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .dialog__message {
    z-index: 10;
    background: $white;
    width: 70%;
    min-width: 250px;
    padding: 10px 20px 20px;
    border-radius: 4px;
    .title {
      font-size: 16px;
      font-weight: bold;
      color: $font-default;
      padding-bottom: 12px;
    }
    .message {
      font-size: 14px;
      padding-bottom: 14px;
    }
    .confirm {
      display: inline-block;
      background: $primary;
      color: $white;
      font-size: 12px;
      padding: 4px 16px;
      border-radius: 3px;
      float: right;
    }
  }
</style>
