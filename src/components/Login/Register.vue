<template>
  <div class="register full-width">
    <div class="register-dialog absolute-full">
      <div class="dialog-content">
        <div @click="$emit('close')" class="close absolute-top">
          <q-icon name="close" />
        </div>
        <div class="main scroll-y">
          <div class="dialog-logo">
            <img src="~/assets/images/logo.png">
          </div>
          <div class="title">建立帳戶</div>
          <div class="login-cta">已經有帳戶了嗎？<span class="clickable">登入</span></div>
          <q-form
            @submit="submit"
            autocorrect="off"
            autocapitalize="off"
            autocomplete="off"
            spellcheck="false"
          >
            <q-input
              label="帳號"
              v-model="registerForm.account"
              lazy-rules
              :rules="[ val => val && val.length > 0 || '請輸入您的帳號']"
            />

            <q-input
              label="名字"
              v-model="registerForm.lastName"
              lazy-rules
              :rules="[ val => val !== null && val !== '' || '請輸入名字']"
            />

            <q-input
              label="姓氏"
              v-model="registerForm.firstName"
              lazy-rules
              :rules="[ val => val !== null && val !== '' || '請輸入姓氏']"
            />

            <q-input
              label="密碼"
              :type="registerForm.isPwd ? 'password' : 'text'"
              v-model="registerForm.password"
              lazy-rules
              :rules="[ val => val !== null && val !== '' || '請輸入密碼']"
            >
              <template v-slot:append>
                <q-icon
                  :name="registerForm.isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="registerForm.isPwd = !registerForm.isPwd"
                />
              </template>
            </q-input>

            <q-input
              label="確認密碼"
              :type="registerForm.isPwd2 ? 'password' : 'text'"
              v-model="registerForm.passwordCheck"
              lazy-rules
              :rules="[ val => val !== null && val !== '' || '請輸入密碼']"
            >
              <template v-slot:append>
                <q-icon
                  :name="registerForm.isPwd2 ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="registerForm.isPwd2 = !registerForm.isPwd2"
                />
              </template>
            </q-input>

            <q-input
              label="生日"
              v-model="registerForm.birthday"
              class="last-group"
              type="date"
              lazy-rules
              :rules="[ val => val !== null && val !== '' || '請輸入生日']">
            </q-input>

            <div class="note">如果建立帳戶，即表示我已閱讀並同意<router-link to="#">使用條款</router-link>和<router-link to="#">隱私權條款</router-link></div>

            <div>
              <q-btn class="full-width" label="註冊帳戶" type="submit" color="primary"/>
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      registerForm: {
        account: null,
        firstName: null,
        lastName: null,
        password: null,
        passwordCheck: null,
        birthday: null,
        isPwd: true,
        isPwd2: true
      }
    }
  },
  methods: {
    submit () {
      this.$emit('submit')
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  position: absolute;
  height: 100%;
  bottom: 0;
  z-index: 10;
}

.register-dialog {
  .dialog-content {
    position: absolute;
    background: $white;
    padding: 45px 12px 10px;
    width: calc(100% - 5px);
    height: calc(100% - 20px);
    left: 2.5px;
    bottom: 0;
    border-radius: 20px 20px 0 0;
    .close {
      top: 12px;
      left: 14px;
    }
    .dialog-logo {
      padding-top: 10px;
      width: 70px;
    }
    .title {
      display: flex;
      align-items: center;
      margin: 20px 0 10px;
      line-height: 28px;
      font-size: 22px;
      font-weight: 500;
      &:before {
        content: "";
        display: inline-block;
        width: 3px;
        height: 20px;
        background: $primary;
        margin-right: 6px;
      }
    }
    .login-cta {
      font-size: 12px;
      color: $light;
      padding-bottom: 8px;
      span {
        color: $link;
      }
    }
    form {
      padding-bottom: 20px;
      .last-group {
        padding-bottom: 12px;
      }
    }
    .note {
      color: $light;
      font-size: 12px;
      padding-bottom: 12px;
      a {
        color: $link;
      }
    }
  }
}
.main {
  height: 100%;
}
</style>
