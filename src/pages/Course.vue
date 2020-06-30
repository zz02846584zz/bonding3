<template>
  <div class="course">
    <div class="hot-list section">
      <div class="title">熱門推薦</div>
      <div class="box">
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="category section">
      <div class="title">探索<div class="flex align-center margin-left">更多<span></span></div></div>
      <div class="category-list">
        <ul>
          <li v-for="n in 10" :key="n">分類{{n}}</li>
        </ul>
      </div>
    </div>
    <div class="category section">
      <div class="title">免費課程</div>
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="category section">
      <div class="title">評分最高</div>
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="category section">
      <div class="title">熱門課程</div>
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.course {
  padding: 10px 0;
}
.section .title {
  padding: 0 12px;
}
.hot-list {
  .title {
    margin-top: 0;
  }
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
}
.category-list {
  ul {
    display: flex;
    list-style: none;
    padding: 0 0 12px;
    overflow-x: scroll;
    li {
      width: fit-content;
      word-break: keep-all;
      margin-left: 12px;
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
