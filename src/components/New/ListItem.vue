<template>
  <div class="new-item__list">
    <router-link to="#" class="flex default">
      <div class="image image-cover"><img src="https://attach.mobile01.com/attach/202005/mobile01-d25b36cb1ffc814d69f9096a6be44b98.jpg"></div>
      <div class="info">
        <div class="title">FREEDOM 1/48 F-CK-1 IDF 經國號戰機</div>
        <div class="summer flex">
          <div class="date flex align-center">
            <q-icon size="1.3em" name="eva-calendar-outline" />
            05-08
          </div>
          <div class="view flex align-center">
            <q-icon size="1.3em" name="eva-eye-outline" />
            201
          </div>
          <!-- <div class="author margin-left">陳爸爸</div> -->
        </div>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.new-item__list {
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid $lighter2;
  &:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: 0;
  }
}
.image {
  width: 80px;
  height: 65px;
}
.info {
  padding: 2px 10px;
  flex: 1;
  .title {
    font-weight: bold;
    font-size: 13px;
    overflow: hidden;
    margin-bottom: 5px;
  }
  .summer {
    font-size: 12px;
    color: $light;
    > div {
      &:first-child {
        padding-right: 8px;
      }
      i {
        margin-right: 3px;
      }
    }
  }
}
</style>
