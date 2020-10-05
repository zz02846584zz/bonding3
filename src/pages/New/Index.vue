<template>
  <div class="main">
    <div class="top">
      <div class="cover"><img src="https://img.technews.tw/wp-content/uploads/2019/09/26111145/Deutsche-Bahn-White-railroad-tracks-624x338.jpg"></div>
      <div class="title">炎炎夏日鐵軌塗白降溫，德國防熱有撇步</div>
      <div class="summer flex">
        <div class="date flex items-center">
          <q-icon size="1.3em" name="eva-calendar-outline" />
          2020-09-26
        </div>
        <div class="view flex items-center">
          <q-icon size="1.3em" name="eva-eye-outline" />
          184
        </div>
      </div>
    </div>
    <div class="content">
      <p>連年夏季熱浪來襲，國營德國鐵路公司正在測試鐵軌塗白色油漆降溫，這款鐵軌可反射部分陽光，並保護鐵軌避免因高熱受損。</p>
      <p>德國鐵路公司（Deutsche Bahn）發聲明表示，今年夏天的試驗成功使得鐵軌沒那麼燙，因此德國鐵路公司（DB）計劃延伸白色鐵軌至 1 公里長，設置在北部城市漢諾威（Hanover）和中部城市烏厄茲堡（Wuerzburg）間的高鐵路段，這條是德國最繁忙鐵道之一。</p>
      <p>這種環保塗料對密集交通的承受力，將在聯邦黑森邦（Hesse）梅森根（Melsungen）附近一座 61 公尺高的橋梁展開全面測試。</p>
      <p>由於鋼鐵遇熱膨脹，時間更久且更熱的夏天可能損及鐵軌與路基。初步測試發現，白色鐵軌可反射更多光線，升溫「明顯少於」一般鐵軌。</p>
      <p>瑞士聯邦鐵路公司（CFF）已進行白色鐵軌測試，並灑水降溫。德國鐵路公司說，其他選項包括密集栽種植被和高科技解決方案，像是氣凝膠或「仿生學新發現」。</p>
      <p>譯者：曹宇帆；首圖來源：Deutsche Bahn）</p>
    </div>

    <div class="seperator"></div>

    <div class="author flex items-start">
      <div class="avatar image-cover border-50"><img src="https://static.mobile01.com/avatar/220c8ff35aca47928876a2fcd560de76.jpg"></div>
      <div class="info">
        <div class="name">陳爸爸</div>
        <div class="work">中科院研究部長</div>
        <div class="intro">大江國際購物中心是一位於臺灣桃園市中壢區的購物中心，開幕於2001年，造價23億元、土地成本25億元。</div>
      </div>
    </div>

    <div class="seperator"></div>

    <div class="recommend-list section">
      <div class="title">推薦新聞</div>
      <NewListItem class="item" v-for="n in 8" :key="n" />
    </div>
  </div>
</template>

<script>
import NewListItem from 'components/New/ListItem'

export default {
  components: {
    NewListItem
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding: 0 0 20px;
  .content {
    padding: 10px 12px;
    p {
      margin-bottom: 12px;
      line-height: 25px;
      text-indent: 2em;
    }
    img {
      margin: 15px 0;
    }
  }
}
.title {
  font-size: 16px;
  font-weight: bold;
  padding: 10px 12px 6px;
}
.section .title {
  padding: 15px 0 6px;
  margin-top: 0;
}
.summer {
  font-size: 14px;
  color: $light;
  padding: 0 12px;
  > div {
    &:first-child {
      padding-right: 8px;
    }
    i {
      margin-right: 3px;
    }
  }
}
.author {
  padding: 20px;
  .avatar {
    width: 80px;
    height: 80px;
    margin-right: 15px;
    border-radius: 50%;
    overflow: hidden;
    img {
      margin: 0;
    }
  }
  .info {
    flex: 1;
    .name {
      font-size: 16px;
      font-weight: bold;
      padding-bottom: 3px;
    }
    .work {
      color: $light;
      font-size: 12px;
      padding-bottom: 8px;
    }
    .intro {
      font-size: 13px;
      color: $dark;
    }
  }
}

.seperator {
  background: $lighter2;
  height: 10px;
}

.recommend-list {
  padding: 0 12px;
}
</style>
