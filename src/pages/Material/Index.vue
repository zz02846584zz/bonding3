<template>
<<<<<<< HEAD
  <div class="main">
    <div class="table-group">
      <div class="item">
        <label>品名</label>
        <p>PDBE-10 EO</p>
      </div>
      <div class="item">
        <label>分類</label>
        <p>環氧樹酯</p>
      </div>
      <div class="item">
        <label>特性</label>
        <p>作為法語書籍中擁有最多讀者和譯本的小說</p>
      </div>
      <div class="item">
        <label>用途</label>
        <p>小王子，是法國貴族作家、詩人、飛行員先驅安托萬·德·聖修伯里創作的最著名的小說，發表於1943年。</p>
      </div>
    </div>
    <div class="contact section">
      <div class="title">聯絡窗口</div>
      <ul>
        <li>
          <label>姓名</label>
          <span>張先生</span>
        </li>
        <li>
          <label>電話</label>
          <span>0987654321</span>
        </li>
        <li>
          <label>e-mail</label>
          <span>zz02846584zz@gmail.com</span>
        </li>
      </ul>
    </div>
    <div class="company section">
      <div class="title">公司信息</div>
      <router-link to="/company/test" class="flex default">
        <div class="logo image-cover"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnrHrn3izcEwtX8nE1taWpQyNQLCw_CuFWv5xLEDVcBRZKB3ho&usqp=CAU"></div>
        <div class="info">
          <div class="name">紅林化工原料有限公司</div>
          <div class="city">台灣 台北市</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  padding: 20px 12px;
  .table-group {
    .item {
      padding-bottom: 8px;
      label {
        position: relative;
        font-size: 14px;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 15px;
        padding-left: 15px;
        &:before {
          content: "";
          position: absolute;
          top: 50%;
          left: 3px;
          transform: translateY(-50%);
          width: 3px;
          height: 70%;
          background: $primary;
          margin-right: 5px;
        }
      }
      p {
        margin-top: 10px;
        padding-left: 15px;
      }
    }
  }
}

.contact {
  border-top: 1px solid $lighter2;
  border-bottom: 1px solid $lighter2;
  padding-bottom: 20px;
  ul {
    padding: 0;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      padding: 8px 0 8px 15px;
      label {
        width: 70px;
      }
    }
  }
}

.company {
  .logo {
    width: 100px;
    height: 100px;
    box-shadow: 2px 2px 10px -5px $lighter3;
    border: 2px solid $lighter2;
    border-radius: 50%;
    overflow: hidden;
  }
  .info {
    flex: 1;
    padding: 20px;
    .name {
      font-weight: bold;
      font-size: 14px;
    }
    .city {
      font-size: 12px;
      padding-top: 8px;
    }
  }
}
</style>
=======
  <div>
    test2
  </div>
</template>
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
