<template>
  <div>
    <router-link to="/discus/test" class="default">
      <div class="author flex align-center">
        <div class="avatar">
          <img src="~/assets/images/avatar.gif">
        </div>
        <div class="id">I1291274819273</div>
      </div>
      <div class="detail flex">
        <div class="content">
          <div class="title">百度等墻內IT產品是否為精英階層製造信息不對等的工具？</div>
          <div class="desc flex">
            <div class="thumb flex align-center">
              <q-icon name="grade" /><span>293</span>
            </div>
            <div class="comment flex align-center">回應<span>47</span></div>
          </div>
        </div>
        <div class="cover image-cover">
          <img src="~/assets/images/logo.png">
        </div>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.author {
  .avatar {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    overflow: hidden;
  }
  .id {
    font-size: 12px;
    padding-left: 6px;
    color: $light;
  }
}
.detail {
  padding: 6px 0;
  .content {
    flex: 1;
    margin-right: 12px;
    .title {
      font-size: 13px;
      font-weight: bold;
    }
  }
  .cover {
    border-radius: 2px;
    overflow: hidden;
    width: 80px;
    img {
      height: auto;
    }
  }
}
.desc {
  padding-top: 5px;
  font-size: 13px;
  * {
    color: $light;
  }
  .thumb {
    padding-right: 12px;
    i {
      color: $primary;
    }
    span {
      padding-left: 2px;
    }
  }
  .comment {
    span {
      padding-left: 2px;
    }
  }
}
</style>
