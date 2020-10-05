<template>
  <div class="main">
    <div class="search-header fixed-top flex items-center">
      <div @click="previous()" class="previous">
        <q-icon size="1.8em" name="eva-arrow-ios-back-outline" />
      </div>
      <div class="search-input">
        <div class="icon absolute-left">
          <div class="circle"></div>
          <div class="path"></div>
        </div>
        <q-input @keydown.enter="search()" type="search" class="text-box" borderless clearable v-model="text" inputmode="search" autocomplete="off" autocorrect="off" placeholder="搜尋關鍵字..."/>
      </div>
    </div>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: null
    }
  },
  mounted () {
    this.text = sessionStorage.getItem('search-text')
  },
  methods: {
    search () {
      console.log('test')
      this.$router.push('/search')
    },
    previous () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  background: #fff;
  z-index: 10;
}
.search-header {
  height: 50px;
  padding: 0 12px;
  border-bottom: 1px solid #f9f9f9;
  background: #ffffff;
  z-index: 9;
  .previous {
    margin-right: 12px;
  }
  .text-box {
    flex: 1;
    margin-right: 12px;
  }
  .close {
    color: $light;
    font-size: 13px;
  }
}

.search-input {
  position: relative;
  flex: 1;
  background: #f9f9f9;
  border-radius: 20px;
  height: 28px;
  padding-left: 30px;
  font-size: 12px;
  border: 1px solid #efefef;
  color: #7c7786;
  .icon {
    position: absolute;
    width: 13px;
    height: 13px;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    .circle {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 1px solid $light;
    }
    .path {
      position: absolute;
      right: 2px;
      bottom: 2px;
      width: 4px;
      height: 1px;
      background: $light;
      transform: rotate(45deg);
    }
  }
}

.search-content {
  padding: 6px 12px;
  height: 100%;
  overflow-y: scroll;
  .title {
    margin-top: 0 !important;
  }
  .list {
    .item {
      padding: 10px 0;
      letter-spacing: 1px;
      border-bottom: 1px solid $lighter2;
      &:first-child {
        padding-top: 4px;
      }
      i {
        margin-right: 12px;
      }
    }
  }
}

.content {
  padding: 50px 0 10px;
}

/deep/ .text-box {
  input {
    height: 26px;
    font-size: 14px;
    line-height: 14px;
    &::placeholder {
      font-size: 13px;
      line-height: 20px;
    }
  }
  .q-field__control {
    height: 28px;
  }
  .q-field--rounded {
    border-radius: 20px;
  }
  .q-field__append {
    height: 28px;
    font-size: 16px;
  }
}

// cordova css
.platform-ios {
  .search-header {
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
