<template>
  <div class="course">
    <div class="hot-list section">
      <div class="title">熱門推薦</div>
      <div class="scroll-h">
        <div class="scroll-x">
          <CourseSwipeItem class="course-item" v-for="n in 3" :key="n" />
          <router-link to="#" class="more-courses course-item text-center">
            <p>查看全部</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="category section">
      <div class="title">探索<div class="flex align-center margin-left">更多<span></span></div></div>
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
    <div class="category section">
      <div class="title">免費課程</div>
      <div class="scroll-h">
        <div class="scroll-x">
          <CourseSwipeItem class="course-item" v-for="n in 3" :key="n" />
          <router-link to="#" class="more-courses course-item text-center">
            <p>查看全部</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="category section">
      <div class="title">評分最高</div>
      <div class="scroll-h">
        <div class="scroll-x">
          <CourseSwipeItem class="course-item" v-for="n in 3" :key="n" />
          <router-link to="#" class="more-courses course-item text-center">
            <p>查看全部</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="category section">
      <div class="title">熱門課程</div>
      <div class="scroll-h">
        <div class="scroll-x">
          <CourseSwipeItem class="course-item" v-for="n in 3" :key="n" />
          <router-link to="#" class="more-courses course-item text-center">
            <p>查看全部</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseSwipeItem from 'components/Course/SwipeItem'

export default {
  components: {
    CourseSwipeItem
  }
}
</script>

<style lang="scss" scoped>
.course {
  padding: 10px 0;
}
.section .title {
  padding: 0 12px;
}
.scroll-x {
  display: -webkit-box;
}
.hot-list {
  .title {
    margin-top: 0;
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

.box {
  position: relative;
  height: 150px;
  > div {
    display: inline-block;
    position: absolute;
    width: 35vw;
    height: 100%;
    background: $light;
    margin-left: 12px;
    &:nth-child(2) {
      transform: translateX(100%);
      left: 20px
    }
    &:nth-child(3) {
      transform: translateX(200%);
      left: 40px
    }
  }
}
</style>
