<template>
  <div class="item">
    <div class="userinfo flex align-center">
      <div class="avatar image-cover border-50"><img src="~/assets/images/avatar.gif"></div>
      <div class="info">
        <div class="id">C-1238717924</div>
        <div class="time">2020-05-08</div>
      </div>
    </div>
    <div class="content">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ducimus quam consequatur, impedit necessitatibus aliquam!
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.item {
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid $lighter2;
  &:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: 0;
  }
  .userinfo {
    line-height: 18px;
    .avatar {
      width: 40px;
      height: 40px;
      margin-right: 12px;
    }
    .time {
      font-size: 12px;
      color: gray;
    }
  }
  .content {
    padding: 10px 0 0;
  }
}
</style>
