<template>
  <div class="dialog__message absolute-center shadow-7">
    <div class="dialog_header flex items-center justify-between">
      <div class="title flex align-center">
        <q-icon size="1.4em" name="eva-bulb" />
        {{title}}
      </div>
      <div class="close" @click="$emit('close')">
        <q-icon size="1.6em" name="eva-close-outline" />
      </div>
    </div>
    <div class="image"><img src="https://4.bp.blogspot.com/-3wxIW4M7EfU/VrBnLygE9pI/AAAAAAAGwFI/_V-JFrl9Vxc/s0/phpZgMesX"></div>
    <div class="title">Barton reaction Chemical reaction Reaction mechanism Organic reaction</div>
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
    width: 90%;
    min-width: 280px;
    padding: 10px 20px 20px;
    border-radius: 4px;
    .dialog_header {
      .title {
        font-size: 14px;
        font-weight: bold;
        color: $font-default;
        padding: 12px 0 20px;
        i {
          margin-right: 5px;
          color: $star;
        }
      }
    }
    .image {
      padding: 20px 0;
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
    > .title {
      font-size: 14px;
      font-weight: bold;
      color: $font-default;
      padding: 12px 0 20px;
    }
  }
</style>
