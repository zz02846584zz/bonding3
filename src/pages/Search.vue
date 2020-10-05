<template>
  <div class="search">
    <div class="filter fixed-top flex align-center">
      <div class="filter-item">材料</div>
      <div class="filter-item">公司</div>
      <div class="filter-item">課程</div>
      <div class="filter-item">話題</div>
      <div class="filter-item">新聞</div>
    </div>

    <div class="content">
      <div class="separate">239筆結果</div>
      <div class="list">
        <MaterialItem class="material-item" v-for="n in 3" :key="n" />
      </div>

      <div class="courses section">
        <div class="title">符合關鍵字的課程</div>
        <div class="scroll-h">
          <div class="scroll-x">
            <CourseSwipeItem class="course-item" v-for="n in 3" :key="n" />
            <router-link to="#" class="more-courses course-item text-center">
              <p>查看全部</p>
            </router-link>
          </div>
        </div>
      </div>

      <div class="companys section">
        <div class="title">符合關鍵字的公司</div>
        <div class="scroll-h">
          <div class="scroll-x">
            <CompanySwipeItem class="company-item" v-for="n in 3" :key="n" />
            <router-link to="#" class="more-courses course-item text-center">
              <p>查看全部</p>
            </router-link>
          </div>
        </div>
      </div>

      <div class="discus section">
        <div class="title">符合關鍵字的話題</div>
        <div class="list">
          <DiscusItem class="discus-item" v-for="n in 3" :key="n" />
        </div>
        <router-link to="#" class="more-courses course-item text-center">
          <p>查看全部</p>
        </router-link>
      </div>

      <div class="news section">
        <div class="title">符合關鍵字的新聞</div>
        <div class="scroll-h">
          <div class="scroll-x">
            <NewItem class="new-item" v-for="n in 3" :key="n" />
            <router-link to="#" class="more-courses course-item text-center">
              <p>查看全部</p>
            </router-link>
          </div>
        </div>
      </div>

      <div class="list">
        <MaterialItem class="material-item" v-for="n in 10" :key="n" />
      </div>
    </div>
  </div>
</template>

<script>
import MaterialItem from 'components/Material/Item'
import CourseSwipeItem from 'components/Course/SwipeItem'
import CompanySwipeItem from 'components/Company/SwipeItem'
import DiscusItem from 'components/Discus/Item'
import NewItem from 'components/New/GridItem'

export default {
  data () {
    return {

    }
  },
  components: {
    MaterialItem, CourseSwipeItem, CompanySwipeItem, DiscusItem, NewItem
  }
}
</script>

<style lang="scss" scoped>
.section {
  .scroll-x {
    display: -webkit-box;
  }
}

.filter {
  top: 50px;
  padding: 0 12px;
  height: 40px;
  font-size: 12px;
  background: $white;
  border-bottom: 1px solid $lighter2;
  z-index: 9;
  .filter-item {
    padding: 2px 8px;
    margin-right: 8px;
    border: 1px solid $filter-border;
    border-radius: 2px;
    color: $gray;
    font-weight: bold;
    &.active {
      border-color: $primary;
      background: $primary;
      color: $white;
    }
  }
}
.content {
  padding-top: 40px;
}
.separate {
  background: $lighter2;
  font-size: 12px;
  padding: 4px 12px 2px;
  color: $light;
  margin-bottom: 12px;
}
.list {
  padding: 0 12px;
  .material-item {
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid $lighter2;
    &:last-child {
      border-bottom: 0;
    }
  }
  .discus-item {
    padding: 10px 0;
    border-bottom: 1px solid $lighter2;
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      margin-bottom: 10px;
      border: 0;
    }
  }
}
.courses {
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

.companys {
  .company-item {
    width: 75%;
    margin-right: 12px;
    margin-left: 12px;
    border: 1px solid $lighter2;
    border-radius: 6px;
    overflow: hidden;
  }
  .more-courses {
    width: 40%;
    height: 100%;
    background: #eaeaea;
  }
}

.news {
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid $lighter2;
  .new-item {
    width: calc(50% - 10px);
    margin-right: 4px;
    margin-left: 12px;
  }
}

.title {
  padding-left: 12px;
  font-size: 16px;
  font-weight: bold;
  padding: 0 0 12px 12px;
  margin-top: 20px;
}

// cordova ios
.platform-ios {
  .filter {
    top: calc(50px + env(safe-area-inset-top));
  }
}
</style>
