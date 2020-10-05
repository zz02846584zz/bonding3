<template>
  <div class="news">
    <div class="video-news section">
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
  </div>
</template>

<script>
import Slider from 'components/New/SwipeNews'
import NewSwipeItem from 'components/New/GridItem'
import { SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Slider, NewSwipeItem, SwiperSlide
  }
}
</script>

<style lang="scss" scoped>
.news {
  padding: 10px 12px;
}
.section {
  &:first-child .title {
    margin-top: 0;
  }
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
  }
}
</style>
