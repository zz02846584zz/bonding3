<template>
  <div class="layout">
    <header class="header fixed-top flex align-center">
      <div @click="leftbarShow()" class="avatar image-cover">
        <img src="~/assets/images/avatar.gif">
      </div>
      <div @click="searchShow()" class="search flex align-center clickable">
        <div class="icon">
          <div class="circle"></div>
          <div class="path"></div>
        </div>
        <span>搜尋......</span>
      </div>
      <router-link to="/notice" class="notice default flex align-center justify-center">
        <div class="icon">
          <q-icon size="1.6em" name="ion-notifications-outline" />
        </div>
        <span class="flex align-center justify-center">12</span>
      </router-link>
    </header>
    <div class="content">
      <router-view />
    </div>
    <div class="footer flex align-center justify-between wide fixed-bottom">
      <router-link to="/home" class="item">
        <div class="icon center">
          <!-- <img src="~/assets/images/home-black-24dp.svg"> -->
          <q-icon size="2.0em" name="eva-home-outline" />
          <span>首頁</span>
        </div>
      </router-link>
      <router-link to="/news" class="item">
        <div class="icon">
          <q-icon size="2.0em" name="eva-paper-plane-outline" />
          <span>新聞</span>
        </div>
      </router-link>
      <!-- <router-link to="/material" class="item">
        <div class="icon">
          <q-icon size="2.0em" name="eva-book-outline" />
          <span>課程</span>
        </div>
      </router-link> -->
      <!-- <div @click="alert()" class="item clickable disable">
        <div class="icon">
          <q-icon size="2.0em" name="eva-book-outline" />
          <span>課程</span>
        </div>
      </div> -->
      <!-- <div @click="alert()" class="item clickable disable">
        <div class="icon">
          <q-icon size="2.0em" name="eva-compass-outline" />
          <span>材料</span>
        </div>
      </div> -->
      <!-- <div @click="alert()" class="item clickable disable">
        <div class="icon">
          <q-icon size="2.0em" name="eva-people-outline" />
          <span>討論</span>
        </div>
      </div> -->
      <router-link to="/courses" class="item">
        <div class="icon">
          <q-icon size="2.0em" name="eva-book-outline" />
          <span>課程</span>
        </div>
      </router-link>
      <router-link to="/material" class="item">
        <div class="icon">
          <q-icon size="2.0em" name="eva-compass-outline" />
          <span>材料</span>
        </div>
      </router-link>
      <router-link to="/discus" class="item">
        <div class="icon">
          <q-icon size="2.0em" name="eva-people-outline" />
          <span>討論</span>
        </div>
      </router-link>
    </div>

    <transition name="slide-long-left">
      <LeftBar v-if="leftBarVisible" class="left-bar fixed-left" />
    </transition>

    <transition name="fade">
      <div v-if="leftBarVisible || messageDialog" @click="leftBarVisible = false; messageDialog = false" :class="{'dark': messageDialog}" class="overlay absolute-full"></div>
    </transition>

    <transition name="fade">
      <MessageDialog v-if="messageDialog" @close="messageDialog = false" :title="'通知'" :message="'此區域尚未開放，敬請期待！'"></MessageDialog>
    </transition>

    <transition name="fast-fade">
      <SearchBar v-if="searchVisible" @close="searchClose()" class="search-bar fixed-full" />
    </transition>
  </div>
</template>

<script>
import LeftBar from './MainLayout/LeftBar'
import SearchBar from './MainLayout/SearchBar'
import MessageDialog from 'components/Dialog/Message'

export default {
  data () {
    return {
      leftBarVisible: false,
      searchVisible: false,
      noticeVisible: true,
      messageDialog: false
    }
  },
  components: {
    LeftBar, SearchBar, MessageDialog
  },
  mounted () {

  },
  methods: {
    leftbarShow () {
      this.leftBarVisible = true
      console.log('avatav click')
    },
    searchShow () {
      this.searchVisible = true
      console.log('search click')
    },
    searchClose () {
      this.searchVisible = false
    },
    noticeShow () {
      this.noticeVisible = true
      console.log('notice click')
    },
    alert () {
      this.messageDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
  padding: 0 12px;
  border-bottom: 1px solid $lighter;
  background: $white;
  z-index: 9;
  .avatar {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    overflow: hidden;
  }
  .search {
    position: relative;
    flex: 1;
    background: $lighter;
    border-radius: 20px;
    height: 28px;
    padding-left: 30px;
    margin: 0 15px;
    font-size: 12px;
    border: 1px solid $lighter2;
    color: $light;
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
  .notice {
    position: relative;
    width: 25px;
    height: 25px;
    .icon {
      transform-origin: left top;
      transform: scale(1.05);
    }
    span {
      position: absolute;
      right: -5px;
      top: -5px;
      background: $red;
      color: $white;
      font-size: 12px;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      transform: scale(0.9);
    }
  }
}
.content {
  padding: 50px 0 55px;
}
.footer {
  height: 55px;
  padding: 0 20px;
  background: $white;
  font-size: 12px;
  border-top: 1px solid $lighter;
  z-index: 9;
  i {
    display: block;
    margin: auto;
    padding: 4px 0 2px;
  }
  span {
    display: block;
    line-height: 14px;
  }
  span, i {
    transition: 0.3s;
    color: $font-default;
  }
  a {
    display: block;
    padding: 0 5px;
    &.router-link-exact-active {
      span, i {
        color: $primary;
      }
    }
  }
  .disable {
    span, i {
      color: $disable;
    }
  }
}

// visible
.left-bar {
  background: $white;
  z-index: 99;
  width: 80%;
  min-width: 300px;
  border-right: 1px solid $lighter2;
}

.overlay {
  z-index: 10;
  background: #fff;
  opacity: 0.7;
  &.dark {
    background: $black;
    opacity: 0.3;
  }
}
// cordova css
.platform-ios {
  .header {
    height: calc(50px + env(safe-area-inset-top));
    padding-top: constant(safe-area-inset-top); // for iOS 11.0
    padding-top: env(safe-area-inset-top); // for iOS 11.2 +
    .previous {
      top: calc(50% + env(safe-area-inset-top) / 2);
    }
    .favorite {
      top: calc(50% + env(safe-area-inset-top) / 2);
    }
  }
  .content {
    // height: calc(50px + env(safe-area-inset-top));
    padding-top: calc(50px + env(safe-area-inset-top));
  }
  .footer {
  /* for your app's footer */
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>
