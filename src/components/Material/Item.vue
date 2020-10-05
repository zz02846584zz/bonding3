<template>
  <div>
    <router-link to="/material/test" class="flex default">
      <img src="~/assets/images/avatar.gif">
      <div class="content">
        <div class="name">PDBE-10 EO</div>
        <div class="detail flex">
          <div class="company">宏林化工原料有限公司</div>
          <div class="score flex align-center margin-left">
            <q-icon name="grade" />
            <q-icon name="grade" />
            <q-icon name="grade" />
            <q-icon name="grade" />
            <q-icon name="star_half" />
            <span>4.7 (<span class="count">28</span>)</span>
          </div>
        </div>
        <div class="category">分類：環氧樹脂</div>
        <div class="features">特性：硬度高、光滑、熔點低、可重複使用、可食用、熔點低、可重複使用、可食用、</div>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 12px 0 0;
}
.content {
  flex: 1;
  font-size: 12px;
  .name {
    font-size: 14px;
    color: #385898;
    font-weight: bold;
  }
  .detail {
    padding: 2px 0 8px;
    color: #616770;
    .score {
      z-index: -1;
      i {
        color: $star;
        font-size: 14px;
      }
      span {
        line-height: 10px;
        padding-left: 4px;
      }
      .count {
        padding: 0 1px;
      }
    }
  }
  .category {
    line-height: 18px;
    padding-bottom: 3px;
  }
  .features {
    line-height: 18px;
  }
}
</style>
