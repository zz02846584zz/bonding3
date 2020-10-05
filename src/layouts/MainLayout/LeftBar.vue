<template>
  <div>
    <div class="info flex align-center">
      <div class="avatar image-cover">
        <img src="~/assets/images/avatar.gif">
      </div>
      <div class="meta">
        <div class="id">I1291274819273</div>
        <div class="wallet flex items-center">剩餘
          <span>129</span>
          <img src="~/assets/images/money.png">
        </div>
      </div>
    </div>

    <div class="cta">
      <div class="content flex items-center justify-between">
        <img src="~/assets/images/values.png">
        <span>購買 P 幣</span>
      </div>
    </div>

    <div class="main-menu">
      <ul>
        <li>
          <router-link to="#">
            <q-icon size="1.4em" name="eva-book-outline" />
            課程管理
          </router-link>
        </li>
        <li>
          <router-link to="#">
            <q-icon size="1.4em" name="eva-heart-outline" />
            收藏清單
          </router-link>
        </li>
        <li>
          <router-link to="#">
            <q-icon size="1.4em" name="eva-bulb-outline" />
            我的知識集
          </router-link>
        </li>
        <li>
          <router-link to="#" class="disable">
            <q-icon size="1.4em" name="eva-list-outline" />
            配方管理
          </router-link>
        </li>
      </ul>
    </div>

    <div class="divider"></div>

    <div class="account-menu">
      <ul>
        <li>
          <router-link to="#">
            <q-icon size="1.4em" name="eva-person-outline" />
            個人資料
          </router-link>
        </li>
        <li>
          <router-link to="#">
            <q-icon size="1.4em" name="eva-settings-outline" />
            設定
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <q-icon size="1.4em" name="eva-log-out-outline" />
            登出
          </router-link>
        </li>
      </ul>
    </div>

    <div class="switch-identity absolute-bottom flex items-center justify-between">
      切換到 Bonding 公司帳戶
      <q-icon size="1.3em" name="eva-arrow-forward-outline" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info {
  padding: 30px 20px 20px;
  .avatar {
    width: 55px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 15px;
  }
  .meta {
    .id {
      font-weight: 500;
    }
    .wallet {
      padding-top: 4px;
      span {
        color: $point;
        font-weight: bold;
        line-height: 14px;
        padding: 0 4px;
      }
      img {
        width: 16px;
        margin: 0;
      }
    }
  }
}
.cta {
  padding: 0 16px;
  .content {
    padding: 12px;
    background: #fff3cd;
    line-height: 14px;
    border-radius: 4px;
    color: #4d3e3e;
    font-weight: bold;
    img {
      width: 20px;
      margin: 0 8px 0 3px;
    }
    span {
      margin-right: auto;
    }
    &:after {
      content: "";
      width: 7px;
      height: 7px;
      border-right: 1px solid;
      border-bottom: 1px solid;
      border-color: #000;
      transform: rotate(-45deg);
    }
  }
}

ul {
  padding: 10px 20px;
  list-style: none;
  li {
    padding: 12px 0;
    a {
      display: flex;
      align-items: center;
      color: $black;
      i {
        margin-right: 8px;
      }
    }
  }
}

.divider {
  height: 1px;
  background: $lighter2;
}

.switch-identity {
  padding: 12px 20px;
  background: #e8e8ff;
  color: #3030e2;
  font-weight: bold;
  font-size: 13px;
}
</style>
