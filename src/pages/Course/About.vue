<template>
  <div class="main">
    <div class="title">机器学习 A-Z (Machine Learning A-Z in Chinese)</div>
    <div class="summer flex align-center">
      <div class="summer-item"><q-icon name="o_schedule" size="1.2em" />共10.5小時</div>
      <div class="summer-item"><q-icon name="o_vertical_split" size="1.35em" />4個章節</div>
      <div class="summer-item"><q-icon name="o_tv" size="1.2em" />共20堂課程</div>
    </div>
    <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi ipsa fugiat dolor magnam mollitia doloribus voluptate! At, suscipit saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, obcaecati!</div>
    <div class="detail-group">
      <div class="detail-item flex">
        <label>上次更新</label>
        <p>2020-04-20</p>
      </div>
      <div class="detail-item flex">
        <label>語言</label>
        <p>中文</p>
      </div>
      <div class="detail-item flex">
        <label>評價</label>
        <p>4.8</p>
      </div>
      <div class="detail-item flex">
        <label>購買人數</label>
        <p>136 人</p>
      </div>
    </div>

    <div class="seperator"></div>

    <div class="teacher section">
      <div class="title">導師資訊</div>
      <ul>
        <li>
          <label>姓名</label>
          <div>陳老師</div>
        </li>
        <li>
          <label>電話</label>
          <div>0987654321</div>
        </li>
        <li>
          <label>Email</label>
          <div>zz02946584zz@gmail.com</div>
        </li>
        <li>
          <label>地區</label>
          <div>台灣 台北市</div>
        </li>
        <li>
          <label>簡介</label>
          <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, atque reprehenderit? Nemo nobis saepe eaque, facilis amet aliquid sed quis dolores et non asperiores! Rem velit maxime tempore, rerum laudantium sapiente id amet ipsam ab magnam porro quam magni sequi.</div>
        </li>
      </ul>
    </div>

    <!-- <div class="seperator"></div> -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main {
  padding: 20px 12px 50px;
}
.title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
}
.section .title {
  margin-top: 0 !important;
}
.summer {
  padding: 5px 0;
  border-width: 1px 0;
  border-color: $lighter2;
  border-style: solid;
  font-size: 12px;
  .summer-item {
    display: flex;
    align-items: center;
    padding-right: 15px;
    &:last-child {
      padding-right: 0;
    }
    i {
      margin-right: 3px;
    }
  }
}
.description {
  padding: 15px 0;
  border-bottom: 1px solid $lighter2;
}
.detail-group {
  padding: 15px 0;
  .detail-item {
    padding-bottom: 8px;
    font-size: 12px;
    label {
      width: 90px;
    }
    p {
      margin: 0;
    }
  }
}

.teacher {
  ul {
    padding: 0;
    list-style: none;
    li {
      padding: 10px 0;
      display: flex;
      border-bottom: 1px solid $lighter2;
      > label {
        width: 90px;
      }
      > div {
        flex: 1;
      }
    }
  }
}
</style>
