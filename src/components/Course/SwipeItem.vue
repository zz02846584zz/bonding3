<template>
  <div class="course-item__swipe">
    <router-link to="/course/test" class="default">
      <div class="cover image-cover">
        <img src="">
      </div>
      <div class="content">
        <div class="title">机器学习 A-Z (Machine Learning A-Z in Chinese)</div>
        <div class="teacher">Hadelin de Ponteves</div>
        <div class="score flex align-center margin-left">
          <q-icon name="grade" />
          <q-icon name="grade" />
          <q-icon name="grade" />
          <q-icon name="grade" />
          <q-icon name="star_half" />
          <span>4.7 (<span class="num">28</span>)</span>
        </div>
        <div class="price flex align-center">
          <div class="price__discount">$630</div>
          <div class="price__origin">$5690</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      //  {
      //   cover: '',
      //   title: 'test',
      //   category: [1],
      //   discount: 10,
      //   price: 1200
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  display: block;
}
.course-item__swipe {
  display: block;
}
.cover {
  height: 160px;
  background: #eaeaea;
  border: 1px solid $lighter2;
  border-radius: 6px;
  overflow: hidden;
  img {
    display: none;
  }
}
.content {
  padding: 4px;
}
.title {
  font-size: 14px;
  font-weight: 500;
}
.teacher {
  color: $light;
  font-size: 12px;
  padding: 2px 0 4px;
}
.score {
  z-index: -1;
  .num {
    padding: 0 2px;
  }
  i {
    color: $star;
    font-size: 14px;
  }
  span {
    font-size: 12px;
    line-height: 10px;
    padding-left: 4px;
  }
}
.price {
  padding: 5px 0 0;
  .price__discount {
    font-size: 16px;
    font-weight: bold;
  }
  .price__origin {
    font-size: 12px;
    color: $light;
    padding-left: 8px;
    text-decoration: line-through;
  }
}
</style>
