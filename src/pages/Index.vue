<template>
  <div class="home">
    <div class="news section">
      <h2 class="title">焦點新聞</h2>

    </div>
    <div class="materials section">
      <h2 class="title">來找尋您需要的材料吧！</h2>
      <div class="slider">
        <div class="slider-container">
          <!-- <div class="slider-item"><a href="#">test</a></div> -->
        </div>
        <div class="slider-navigation">
          <div class="slider-navigation-prev"></div>
          <div class="slider-navigation-next"></div>
        </div>
      </div>
      <div class="materials-list">
        <MaterialItem class="item" v-for="n in 3" :key="n" />
      </div>
    </div>
    <div class="courses section">
      <div class="title">推薦課程</div>
      <div class="slider">
        <div class="slider-container">
          <div class="item">
            <div class="cover">
              <img src="" alt="">
            </div>
            <div class="title">机器学习 A-Z (Machine Learning A-Z in Chinese)</div>
            <div class="author">Hadelin de Ponteves</div>
            <div class="category">機器學習</div>
            <div class="score flex align-center">
              <q-icon name="grade" />
              <q-icon name="grade" />
              <q-icon name="grade" />
              <q-icon name="grade" />
              <q-icon name="star_half" />
              <span>4.7(28)</span>
            </div>
            <div class="price">
              <div class="discount">NT$400</div>
              <div class="origin">NT$500</div>
            </div>
          </div>
        </div>
        <div class="slider-pagination">
          <span class="active"></span>
          <span></span>
          <span></span>
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
import MaterialItem from 'components/Material/Item'
import DiscusList from 'components/Discus/Item'

export default {
  name: 'PageIndex',
  components: {
    MaterialItem,
    DiscusList
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 10px 12px;
}
.news {
  .title {
    margin-top: 0;
  }
}
.materials {
  .materials-list {
    padding: 15px 0;
    .item {
      margin-bottom: 12px;
      padding-bottom: 12px;
      border-bottom: 1px solid $lighter;
      &:last-child {
        border-bottom: 0;
      }
    }
  }
}
.discus {
  .discus-list {
    .item {
      padding: 10px 0;
      border-bottom: 1px solid $lighter;
      &:first-child {
        padding-top: 0;
      }
    }
  }
}
</style>
