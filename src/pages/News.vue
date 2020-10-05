<template>
  <div class="news">
    <div class="video-news section">
<<<<<<< HEAD
      <div class="title">影音</div>
      <Slider class="video-slider">
        <swiper-slide class="video-slide" v-for="n in 5" :key="n">
          <router-link class="default" to="/new/test">
            <div class="image image-cover">
              <img src="" alt="">
            </div>
            <div class="title absolute-bottom">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
          </router-link>
        </swiper-slide>
      </Slider>
    </div>
    <div class="lastest-news section">
      <div class="title">最新</div>
      <div class="list row justify-between items-center">
        <NewSwipeItem class="item" v-for="n in 4" :key="n" />
      </div>
      <div class="read-more">載入更多</div>
    </div>
    <div class="hot-news section">
      <div class="title">熱門</div>
      <div class="list">
        <NewSwipeItem class="item" v-for="n in 10" :key="n" />
      </div>
    </div>
=======
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
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
  </div>
</template>

<script>
<<<<<<< HEAD
import Slider from 'components/New/SwipeNews'
import NewSwipeItem from 'components/New/GridItem'
=======
import Slider from '../components/New/SwipeNews'
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
import { SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
<<<<<<< HEAD
    Slider, NewSwipeItem, SwiperSlide
=======
    Slider, SwiperSlide
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
  }
}
</script>

<style lang="scss" scoped>
.news {
<<<<<<< HEAD
  padding: 10px 12px;
=======
  padding: 10px 0;
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
}
.section {
  &:first-child .title {
    margin-top: 0;
  }
<<<<<<< HEAD
}
.video-news {
  padding-bottom: 12px;
}
.video-slide {
  position: relative;
  .image {
    width: 100%;
    height: 200px;
    background: #eaeaea;
  }
  .title {
    position: absolute;
    padding: 10px;
  }
}
.lastest-news {
  .item {
    width: calc(50% - 10px);
    margin-bottom: 20px;
  }
}
.hot-news {
  .item {
    margin-bottom: 15px;
    /deep/ .image {
      width: 100%;
      height: 200px;
      background: #eaeaea;
    }
  }
}

/deep/ .swiper-container {
  overflow: visible;
  .swiper-pagination {
    bottom: -25px;
    span {
      background: $primary;
      opacity: 0.3;
      border-radius: 20px;
      transition: 0.3s;
      &.swiper-pagination-bullet-active {
        opacity: 1;
        width: 20px;
      }
    }
=======
  > .title {
    padding: 0 12px;
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
  }
}
</style>
