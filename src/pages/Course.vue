<template>
  <div class="course">
    <div class="hot-list section">
      <div class="title">熱門推薦</div>
<<<<<<< HEAD
      <div class="scroll-h">
        <div class="scroll-x">
          <CourseSwipeItem class="course-item" v-for="n in 3" :key="n" />
          <router-link to="#" class="more-courses course-item text-center">
            <p>查看全部</p>
          </router-link>
        </div>
=======
      <div class="box">
        <div></div>
        <div></div>
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
      </div>
    </div>
    <div class="category section">
      <div class="title">探索<div class="flex align-center margin-left">更多<span></span></div></div>
<<<<<<< HEAD
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
=======
      <div class="category-list">
        <ul>
          <li v-for="n in 10" :key="n">分類{{n}}</li>
        </ul>
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
      </div>
    </div>
    <div class="category section">
      <div class="title">免費課程</div>
<<<<<<< HEAD
      <div class="scroll-h">
        <div class="scroll-x">
          <CourseSwipeItem class="course-item" v-for="n in 3" :key="n" />
          <router-link to="#" class="more-courses course-item text-center">
            <p>查看全部</p>
          </router-link>
        </div>
=======
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
      </div>
    </div>
    <div class="category section">
      <div class="title">評分最高</div>
<<<<<<< HEAD
      <div class="scroll-h">
        <div class="scroll-x">
          <CourseSwipeItem class="course-item" v-for="n in 3" :key="n" />
          <router-link to="#" class="more-courses course-item text-center">
            <p>查看全部</p>
          </router-link>
        </div>
=======
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
      </div>
    </div>
    <div class="category section">
      <div class="title">熱門課程</div>
<<<<<<< HEAD
      <div class="scroll-h">
        <div class="scroll-x">
          <CourseSwipeItem class="course-item" v-for="n in 3" :key="n" />
          <router-link to="#" class="more-courses course-item text-center">
            <p>查看全部</p>
          </router-link>
        </div>
=======
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
      </div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import CourseSwipeItem from 'components/Course/SwipeItem'

export default {
  components: {
    CourseSwipeItem
  }
=======
export default {

>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
}
</script>

<style lang="scss" scoped>
.course {
  padding: 10px 0;
}
.section .title {
  padding: 0 12px;
}
<<<<<<< HEAD
.scroll-x {
  display: -webkit-box;
}
=======
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
.hot-list {
  .title {
    margin-top: 0;
  }
<<<<<<< HEAD
  .course-item {
    width: 75%;
    margin-right: 12px;
    margin-left: 12px;
  }
  .more-courses {
    width: 40%;
    height: 100%;
    background: #eaeaea;
=======
  .box {
    position: relative;
    height: 200px;
    > div {
      display: inline-block;
      position: absolute;
      width: 80vw;
      height: 100%;
      background: $light;
      margin-left: 12px;
      &:last-child {
        transform: translateX(100%);
        left: 20px
      }
    }
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
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
<<<<<<< HEAD
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
=======
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
}
.category-list {
  ul {
    display: flex;
    list-style: none;
<<<<<<< HEAD
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
=======
    padding: 0 0 12px;
    overflow-x: scroll;
    li {
      width: fit-content;
      word-break: keep-all;
      margin-left: 12px;
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
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
