<template>
  <div class="home">
    <div class="news section">
      <h2 class="title">焦點新聞</h2>
      <Slider class="video-slider">
        <swiper-slide class="news-slide" v-for="n in 5" :key="n">
          <div class="image image-cover">
            <img src="" alt="">
          </div>
          <div class="title absolute-bottom">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
        </swiper-slide>
      </Slider>
    </div>
    <div class="courses section">
      <div class="title">推薦課程</div>
      <div class="scroll-h">
        <div class="scroll-x">
          <CourseSwipeItem class="course-item" v-for="n in 3" :key="n" />
          <router-link to="#" class="more-courses course-item text-center">
            <p>查看全部</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="materials category section">
      <div class="title">來找尋您需要的材料吧！<div class="flex align-center margin-left">更多<span></span></div></div>
      <div class="category-list scroll-h">
        <div class="scroll-x">
          <div>
            <ul>
              <li v-for="n in 8" :key="n">分類{{n}}</li>
            </ul>
            <ul>
              <li v-for="n in 6" :key="n">分類{{n+8}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="discus section">
      <div class="title">大家都在討論</div>
      <div class="discus-list">
        <DiscusList class="item" v-for="n in 10" :key="n" />
      </div>
    </div>
  </div>
</template>

<script>
// import MaterialItem from 'components/Material/Item'
import CourseSwipeItem from 'components/Course/SwipeItem'
import DiscusList from 'components/Discus/Item'
import Slider from '../components/New/SwipeNews'
import { SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'PageIndex',
  components: {
    // MaterialItem,
    CourseSwipeItem,
    DiscusList,
    Slider,
    SwiperSlide
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 10px 0;
}
.news {
  padding: 0 12px 25px;
  .title {
    margin-top: 0 !important;
  }
  .news-slide {
    position: relative;
    border-radius: 6px;
    overflow: hidden;
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
}

.category {
  .title {
    > div {
      font-size: 14px;
      color: $light;
      span {
        display: inline-block;
        width: 7px;
        height: 7px;
        border-left: 1px solid;
        border-top: 1px solid;
        border-color: $light;
        margin-left: 8px;
        transform: rotate(135deg) translate(3px, 3px);
      }
    }
  }
  .course-item {
    width: 42%;
    margin-left: 12px;
    /deep/ .cover {
      height: 110px;
    }
  }
  .more-courses {
    width: 40%;
    height: 100%;
    background: #eaeaea;
  }
}
.materials {
  // padding: 0 12px;
  padding: 10px 0;
  .title {
    padding: 0 12px 12px;
  }
  .category-list {
    ul {
      display: flex;
      list-style: none;
      padding: 0 0 12px 12px;
      li {
        padding: 5px 20px;
        border-radius: 20px;
        background: $lighter2;
        width: fit-content;
        word-break: keep-all;
        margin-right: 18px;
        color: $dark;
        font-weight: bold;
        &:last-child {
          padding-right: 10px;
        }
      }
    }
  }
}
.courses {
  .title {
    padding-left: 12px;
  }
  .scroll-x {
    display: -webkit-box;
  }
  .course-item {
    width: 75%;
    margin-right: 12px;
    margin-left: 12px;
  }
  .more-courses {
    width: 40%;
    height: 100%;
    background: #eaeaea;
  }
}
.discus {
  padding: 0 12px;
  .discus-list {
    .item {
      padding: 10px 0;
      border-bottom: 1px solid $lighter2;
      &:first-child {
        padding-top: 0;
      }
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
