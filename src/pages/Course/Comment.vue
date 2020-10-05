<template>
<<<<<<< HEAD
  <div class="comment">
    <div class="top">
      <div class="score">
        <div class="total flex align-end">
          <div>4.7</div>
          <span>平均評分</span>
        </div>
        <ul>
          <li class="flex align-center">
            <div class="progress">
              <div style="width: 64%"></div>
            </div>
            <div class="icon flex align-center">
              <q-icon name="grade" v-for="n in 5" :key="n" />
            </div>
            <div class="percent">64%</div>
          </li>
          <li class="flex align-center">
            <div class="progress">
              <div style="width: 30%"></div>
            </div>
            <div class="icon flex align-center">
              <q-icon name="grade" v-for="n in 4" :key="n" />
              <q-icon name="grade" class="unactive" />
            </div>
            <div class="percent">30%</div>
          </li>
          <li class="flex align-center">
            <div class="progress">
              <div style="width: 6%"></div>
            </div>
            <div class="icon flex align-center">
              <q-icon name="grade" v-for="n in 3" :key="n" />
              <q-icon name="grade" class="unactive" v-for="n in 2" :key="n" />
            </div>
            <div class="percent">6%</div>
          </li>
          <li class="flex align-center">
            <div class="progress">
              <div style="width: 1%"></div>
            </div>
            <div class="icon flex align-center">
              <q-icon name="grade" v-for="n in 2" :key="n" />
              <q-icon name="grade" class="unactive" v-for="n in 3" :key="n" />
            </div>
            <div class="percent">1%</div>
          </li>
          <li class="flex align-center">
            <div class="progress">
              <div style="width: 0%"></div>
            </div>
            <div class="icon flex align-center">
              <q-icon name="grade" v-for="n in 1" :key="n" />
              <q-icon name="grade" class="unactive" v-for="n in 4" :key="n" />
            </div>
            <div class="percent">0%</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="note">只有購買此課程的會員才能評論</div>
    <div class="rate-list">
      <CourseComment v-for="n in 10" :key="n" />
    </div>
  </div>
</template>

<script>
import CourseComment from 'components/Course/Comment'
export default {
  components: {
    CourseComment
  }
}
</script>

<style lang="scss" scoped>
.comment {
  padding-bottom: 70px;
}

.top .score {
  overflow: hidden;
  padding: 30px 20px;
  .total {
    font-size: 36px;
    line-height: 30px;
    font-weight: bold;
    padding-bottom: 20px;
    span {
      font-size: 12px;
      line-height: 12px;
      font-weight: normal;
      padding-left: 10px;
    }
  }
  > ul {
    padding-left: 0;
    li {
      padding-bottom: 4px;
      &:last-child {
        padding-bottom: 0;
      }
    }
    .progress {
      position: relative;
      flex: 1;
      height: 8px;
      background: $lighter2;
      margin-right: 10px;
      > div {
        position: absolute;
        height: 100%;
        background: $star;
      }
    }
    .icon {
      color: $star;
      i.unactive {
        color: $light;
      }
    }
    .percent {
      width: 25px;
      text-align: left;
      margin-left: 15px;
    }
  }
}

.note {
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: #adadad;
  padding: 20px 0 40px;
}

.rate-list {
  padding: 0 15px;
}
</style>
=======
  <div>

  </div>
</template>
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
