<template>
  <div>
    <router-link class="default" to="/new/test">
      <div class="image image-cover">
        <img src="">
      </div>
      <div class="content">
        <div class="title">飛行員先驅安托萬·德·聖修伯里創作的</div>
        <div class="meta-tag flex items-center justify-between">
          <div class="date">
            <q-icon size="1.3em" name="eva-calendar-outline" />
            2020-06-01
          </div>
          <div class="views">
            <q-icon size="1.3em" name="eva-eye-outline" />
            213
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 13px;
  font-weight: bold;
}
.image {
  width: 100%;
  height: 120px;
  background: $lighter2;
}
.content {
  padding: 5px;
}
.meta-tag {
  padding-top: 6px;
  font-size: 12px;
  color: $light;
}
</style>
