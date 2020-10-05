<template>
  <div id="main">
    <div class="header fixed-top flex align-center">
      <div @click="previous()" class="previous absolute">
        <q-icon size="1.8em" name="eva-arrow-ios-back-outline" />
      </div>
      <div class="title full-width">{{title}}</div>
      <div
        @click="favorite = !favorite"
        class="favorite absolute"
        :class="{ active: favorite }">
        <transition name="fade">
          <q-icon class="absolute" v-if="!favorite" size="1.6em" name="eva-heart-outline" />
        </transition>
        <transition name="fade">
          <q-icon class="absolute" v-if="favorite" size="1.6em" name="eva-heart" />
        </transition>
      </div>
    </div>

    <div class="content">
      <div class="video-container">
        <div class="video"></div>
        <div class="play-icon flex absolute-center">
          <q-icon size="4em" name="ion-play-circle" />
        </div>
      </div>
      <div class="filter flex align-center justify-evenly">
        <q-tabs
          v-model="tab"
          class="text-teal default"
        >
          <q-tab :class="{active : tab === 'about'}" @click="tabLink('about')" :ripple="false" name="about" label="簡介" />
          <q-tab :class="{active : tab === 'chapter'}" @click="tabLink('chapter')" :ripple="false" name="chapter" label="章節" />
          <q-tab :class="{active : tab === 'qa'}" @click="tabLink('qa')" :ripple="false" name="qa" label="Q&A" />
          <q-tab :class="{active : tab === 'comment'}" @click="tabLink('comment')" :ripple="false" name="comment" :label="'評價(' + comment + ')'" />
        </q-tabs>
      </div>
      <router-view />
    </div>

    <div class="cta-row flex align-center justify-between fixed-bottom">
      <div class="price price-discount row align-center">
        <div class="discount">
          NT$400
        </div>
        <div class="origin">NT$500</div>
      </div>
      <div class="buy-btn">購買課程</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      favorite: false,
      tab: '',
      comment: 3
    }
  },
  computed: {
    title () {
      return this.$route.matched[0].name
    }
  },
  watch: {
    '$route' (to, from) {
      const path = this.$route.path.split('/')
      const pathName = path[path.length - 1]
      this.tab = pathName
    }
  },
  mounted () {
    const path = this.$route.path.split('/')
    const pathName = path[path.length - 1]
    this.tab = pathName
  },
  methods: {
    previous () {
      this.$router.go(-1)
    },
    tabLink (type) {
      this.$router.push(`/course/test/${type}`)
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
  .favorite {
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: $light;
    width: 1.6em;
    height: 1.6em;
    &.active {
      color: $heart;
    }
  }
}
.content {
  padding: 50px 0 10px;
}
.cover {
  position: relative;
  height: 22vh;
  .logo {
    position: absolute;
    left: 8%;
    bottom: 0;
    transform: translateY(50%);
    background: #eaeaea;
    border: 1px solid #eaeaea;
    box-shadow: 0px 0px 10px -5px #979fff;
    width: 80px;
    height: 80px;
  }
}
.info {
  padding: 60px 8% 30px;
  .name {
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 12px;
  }
  .list {
    > div {
      padding-bottom: 4px;
      font-size: 14px;
      &.address {
        font-size: 0.9em;
      }
      &:last-child {
        padding-bottom: 0;
      }
      i {
        margin-right: 4px;
      }
    }
  }
}

.text-teal {
  width: 82%;
}

.video-container {
  position: relative;
  i {
    color: $white;
  }
}
.video {
  height: 200px;
  background: $dark;
}

.filter {
  height: 40px;
  top: 50px;
  background: $white;
  border-top: 1px solid $lighter2;
  border-bottom: 1px solid $lighter2;
  z-index: 9;
}
/deep/ .q-tab {
  height: 40px;
  min-height: auto;
  animation: none;
  width: 45px;
  flex: unset;
  &:last-child {
    margin-right: 0;
  }
}
/deep/ .q-tabs__content {
  display: flex;
  justify-content: space-between;
}
/deep/ .q-tab__indicator {
  background: $primary;
}

.cta-row {
  background: $lighter;
  height: 60px;
  padding: 0 20px;
  border-top: 1px solid $lighter2;
  z-index: 11;
  .price {
    .discount {
      font-size: 16px;
      font-weight: bold;
    }
    .origin {
      font-size: 14px;
      font-weight: bold;
      color: $light;
      padding-left: 10px;
      text-decoration: line-through
    }
  }
  .buy-btn {
    padding: 5px 18px;
    background: $primary;
    color: $white;
    font-weight: bold;
    border-radius: 3px;
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
    // padding-top: calc(50px + env(safe-area-inset-top));
  }
  .footer {
  /* for your app's footer */
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>
