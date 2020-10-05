<template>
  <div class="company-item__swipe">
    <router-link class="default" to="#">
        <div class="cover">
          <div class="background image-cover"><img src="https://images.unsplash.com/photo-1588974705506-89b77aa703da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"></div>
          <div class="logo image-cover border-50 absolute-bottom"><img src="https://www.roots.com.tw/Content/ROS/resource/banner-about-2.jpg"></div>
        </div>
        <div class="info center">
          <div class="title">紅林化工原料有限公司</div>
          <div class="city">台灣 台北市</div>
          <div class="summer flex justify-around">
            <div class="item">
              <div>123</div>
              <div>材料</div>
            </div>
            <div class="item">
              <div>4.8</div>
              <div>評分</div>
            </div>
            <div class="item">
              <div>1982</div>
              <div>創辦</div>
            </div>
          </div>
        </div>
      </router-link>
  </div>
</template>

<style lang="scss" scoped>
.cover {
  position: relative;
  .logo {
    background: #fff;
    width: 60px;
    height: 60px;
    margin: auto;
    transform: translateY(50%);
  }
}
.info {
  padding: 35px 20px 15px;
  .title {
    font-weight: bold;
  }
  .city {
    color: $light;
    font-size: 12px;
    padding: 6px 0 10px;
  }
  .summer {
    .item {
      position: relative;
      width: calc(100% / 3);
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 2px;
        height: 60%;
        background: $lighter2;
      }
      &:last-child:after {
        display: none;
      }
      > div:first-child {
        font-size: 1.2em;
        font-weight: bold;
      }
    }
  }
}
</style>
