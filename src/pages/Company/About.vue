<template>
  <div class="about">
    <div class="intro section">
      <div class="title">簡介</div>
      <div class="content">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit praesentium ad quod possimus doloribus, iste vel fugiat corrupti. Iusto, sed.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, iure quam omnis aliquam veritatis necessitatibus doloribus fuga reprehenderit numquam praesentium, officia ullam quod at? Aut cupiditate aperiam pariatur laboriosam aliquam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quas officiis porro quo voluptatem obcaecati.</p>
      </div>
    </div>
    <div class="contact-info">
      <div class="contact-item flex align-center">
        <label>地址</label>
        <span>Lorem ipsum dolor sit amet.</span>
      </div>
      <div class="contact-item flex align-center">
        <label>電話</label>
        <span>0918987273</span>
      </div>
      <div class="contact-item flex align-center">
        <label>網站</label>
        <span>https://twitter.com</span>
      </div>
      <div class="contact-item flex align-center">
        <label>營業時間</label>
        <span>週一 ~ 週五, 10:00 ~ 18:00</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.intro {
  padding: 0 20px;
  border-bottom: 1px solid #eaeaea;
}
.contact-info {
  padding: 20px 15px;
  .contact-item {
    padding: 8px 0;
    label {
      width: 80px;
    }
    span {
      flex: 1;
    }
  }
}
</style>
