<template>
  <div class="news">
    <div class="video-news section">
      <div class="title">影音新聞</div>
      <!-- <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper> -->
      <Slider>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
      </Slider>
    </div>
  </div>
</template>

<script>
import Slider from '../components/New/SwipeNews'
import { SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Slider, SwiperSlide
  }
}
</script>

<style lang="scss" scoped>
.news {
  padding: 10px 0;
}
.section {
  &:first-child .title {
    margin-top: 0;
  }
  > .title {
    padding: 0 12px;
  }
}
</style>
