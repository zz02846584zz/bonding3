<template>
  <div class="main">
    <div class="search-header flex items-center">
      <div class="search-input">
        <div class="icon absolute-left">
          <div class="circle"></div>
          <div class="path"></div>
        </div>
        <q-input @keydown.enter="search()" type="search" class="text-box" borderless clearable v-model="text" inputmode="search" autocomplete="off" autocorrect="off" placeholder="搜尋關鍵字..."/>
      </div>
      <div class="close" @click="$emit('close')">取消</div>
    </div>
    <div class="search-content section">
      <div class="title">近期搜尋紀錄</div>
      <div class="list">
        <div class="item flex items-center" v-for="n in 10" :key="n">
          <q-icon size="1.3em" name="eva-clock-outline" />
          第{{n}}條搜尋紀錄
        </div>
        <router-link to="#" class="showAll flex items-center">看全部
          <q-icon size="1.3em" name="eva-plus-circle-outline" />
        </router-link>
      </div>
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
  methods: {
    search () {
      sessionStorage.setItem('search-text', this.text)
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  background: #fff;
  z-index: 10;
}
.title {
  &:before {
    display: none !important;
  }
}
.search-header {
  height: 50px;
  padding: 0 12px;
  border-bottom: 1px solid #f9f9f9;
  background: #ffffff;
  z-index: 9;
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
  margin-right: 15px;
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

.showAll {
  display: block;
  padding: 10px 0;
  text-align: center;
  font-weight: bold;
  color: $link;
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
}
</style>
