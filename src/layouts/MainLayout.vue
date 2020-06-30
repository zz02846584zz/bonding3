<template>
  <div>
    <div class="header fixed-top flex align-center">
      <div class="logo image-cover">
        <img src="~/assets/images/avatar.gif">
      </div>
      <div class="search flex align-center clickable">
        <div class="icon">
          <div class="circle"></div>
          <div class="path"></div>
        </div>
        <span>搜尋......</span>
      </div>
      <div class="notice flex align-center justify-center">
        <div class="icon">
          <img src="~/assets/images/home-black-24dp.svg">
        </div>
        <span class="flex align-center justify-center">12</span>
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
    <div class="footer flex align-center justify-between wide fixed-bottom">
      <router-link to="/" class="item">
        <div class="icon center">
          <img src="~/assets/images/home-black-24dp.svg">
          <span>首頁</span>
        </div>
      </router-link>
      <router-link to="/material" class="item">
        <div class="icon">
          <img src="~/assets/images/home-black-24dp.svg">
          <span>材料</span>
        </div>
      </router-link>
      <router-link to="/courses" class="item">
        <div class="icon">
          <img src="~/assets/images/home-black-24dp.svg">
          <span>課程</span>
        </div>
      </router-link>
      <router-link to="/discus" class="item">
        <div class="icon">
          <img src="~/assets/images/home-black-24dp.svg">
          <span>討論</span>
        </div>
      </router-link>
      <router-link to="/news" class="item">
        <div class="icon">
          <img src="~/assets/images/home-black-24dp.svg">
          <span>新聞</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
  padding: 0 12px;
  border-bottom: 1px solid $lighter;
  background: $white;
  z-index: 99;
  .logo {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    overflow: hidden;
  }
  .search {
    position: relative;
    flex: 1;
    background: $lighter;
    border-radius: 20px;
    height: 23px;
    padding-left: 30px;
    margin: 0 15px;
    font-size: 12px;
    border: 1px solid $lighter2;
    color: $light;
    .icon {
      position: absolute;
      width: 13px;
      height: 13px;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      .circle {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid $light;
      }
      .path {
        position: absolute;
        right: 2px;
        bottom: 2px;
        width: 4px;
        height: 1px;
        background: $light;
        transform: rotate(45deg);
      }
    }
  }
  .notice {
    position: relative;
    width: 25px;
    height: 25px;
    .icon {
      transform-origin: left top;
      transform: scale(1.05);
    }
    span {
      position: absolute;
      right: -5px;
      top: -5px;
      background: $red;
      color: $white;
      font-size: 12px;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      transform: scale(0.9);
    }
  }
}
.content {
  padding: 50px 0;
}
.footer {
  height: 50px;
  padding: 0 24px;
  background: $white;
  font-size: 12px;
  border-top: 1px solid $lighter;
  z-index: 99;
  span {
    color: $font-default;
  }
}

/deep/ .section > .title {
  display: flex;
  align-items: center;
  margin: 20px 0 10px;
  line-height: 28px;
  font-size: 18px;
  font-weight: 500;
  &:before {
    content: "";
    display: inline-block;
    width: 3px;
    height: 18px;
    background: $primary;
    margin-right: 6px;
  }
}
</style>
