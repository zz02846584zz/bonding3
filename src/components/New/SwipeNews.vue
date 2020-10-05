<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <slot />
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper
  },
  props: {
    swiperOptions: {
      type: Object,
      default () {
        return {
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
