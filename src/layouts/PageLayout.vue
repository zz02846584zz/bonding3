<template>
  <div>
    <div class="header fixed-top flex align-center">
      <div @click="previous()" class="previous absolute">
        <q-icon size="1.8em" name="eva-arrow-ios-back-outline" />
      </div>
      <div class="title full-width">{{title}}</div>
    </div>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    title () {
      return this.$route.name
    }
  },
  methods: {
    previous () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
  padding: 0 12px;
  border-bottom: 1px solid $lighter2;
  background: $white;
  z-index: 9;
  .previous {
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
  .title {
    padding: 0 25px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
}
.content {
  padding: 50px 0 10px;
}

// cordova css
.platform-ios {
  .header {
    height: calc(50px + env(safe-area-inset-top));
    padding-top: constant(safe-area-inset-top); // for iOS 11.0
    padding-top: env(safe-area-inset-top); // for iOS 11.2 +
  }
  .content {
    padding-top: calc(50px + env(safe-area-inset-top));
  }
  .footer {
  /* for your app's footer */
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>
