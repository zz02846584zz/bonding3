<template>
  <div id="q-app">
    <router-view />

    <transition name="fade">
      <DailyKnowledgeDialog v-if="knowlodgeDialog" @close="knowlodgeDialog = false" :title="'每日小知識'" :message="'此區域尚未開放，敬請期待！'"></DailyKnowledgeDialog>
    </transition>

    <transition name="fade">
      <div v-if="knowlodgeDialog" @click="knowlodgeDialog = false" class="knowlodge-overlay absolute-full"></div>
    </transition>
  </div>
</template>

<script>
import DailyKnowledgeDialog from 'components/Dialog/DailyKnowledge'

export default {
  name: 'App',
  data () {
    return {
      knowlodgeDialog: false
    }
  },
  components: {
    DailyKnowledgeDialog
  },
  watch: {
    '$route' (to, from) {
      // const user = this.$store.state.user.user
      // if (!sessionStorage.getItem('status-login')) {
      //   this.$router.push('/')
      // }

      document.getElementById('q-app').scrollTop = 0

      if (!sessionStorage.getItem('dailyKnowlodge')) {
        console.log('小知識出現')
        this.knowlodgeDialog = true
        sessionStorage.setItem('dailyKnowlodge', true)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#q-app {
  height: 100%;
  overflow-x: hidden;
}

.knowlodge-overlay {
  background: #fff;
  opacity: 0.5;
  z-index: 9;
}

/deep/ .section > .title {
  display: flex;
  align-items: center;
  margin: 20px 0 10px;
  line-height: 27px;
  font-size: 18px;
  font-weight: 500;
  &:before {
    content: "";
    display: inline-block;
    width: 3px;
    height: 18px;
    background: $primary;
    margin-right: 10px;
  }
}
</style>

<style lang="scss" scoped>

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
