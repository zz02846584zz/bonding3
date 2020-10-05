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
<<<<<<< HEAD
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
=======
          pagination: {
            el: '.swiper-pagination'
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
