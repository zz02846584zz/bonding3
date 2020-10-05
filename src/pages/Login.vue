<template>
  <div class="login">
    <div class="logo">
      <img src="~/assets/images/logo.png">
    </div>
    <q-form
      @submit="userLogin(loginForm)"
      autocorrect="off"
      autocapitalize="off"
      autocomplete="off"
      spellcheck="false"
    >
      <q-input
        label="帳號"
        v-model="loginForm.account"
        lazy-rules
        :rules="[ val => val && val.length > 0 || '請輸入您的帳號']"
      />

      <q-input
        label="密碼"
        :type="loginForm.isPwd ? 'password' : 'text'"
        v-model="loginForm.password"
        lazy-rules
        :rules="[ val => val !== null && val !== '' || '請輸入密碼']"
      >
        <template v-slot:append>
          <q-icon
            :name="loginForm.isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="loginForm.isPwd = !loginForm.isPwd"
          />
        </template>
      </q-input>

      <div class="forgot-password text-right">忘記密碼？</div>

      <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->

      <div>
        <q-btn class="full-width" label="登入" type="submit" color="primary"/>
      </div>
    </q-form>
    <div class="other-type flex align-center"><span>或</span></div>
    <div class="register-button">
      <q-btn class="full-width" @click="showRegisterDialog" label="註冊"/>
    </div>

    <transition name="fade">
      <div v-if="registerVisible" class="overlay absolute-full"></div>
    </transition>

    <transition name="slide-long-bottom">
      <Register v-if="registerVisible" @close="registerClose" @submit="register(data)" />
    </transition>

    <div class="copyright text-center absolute-bottom">© 2020 Bonding Tech. 鍵結科技</div>

  </div>
</template>

<script>
// import userApi from 'boot/api/userApi'
import Register from 'components/Login/Register.vue'
// import { mapActions } from 'vuex'

export default {
  data () {
    return {
      loginForm: {
        account: null,
        password: null,
        isPwd: true
      },
      accept: false,
      registerVisible: false
    }
  },
  components: {
    Register
  },
  async mounted () {
    // const data = await userApi.userLogin()
    // console.log(data)
  },
  methods: {
    // ...mapActions('user', ['userLogin']),
    userLogin () {
      this.$router.push('/home')
    },
    showRegisterDialog () {
      const vm = this
      vm.registerVisible = true
      console.log('show')
    },
    register () {
      console.log('register')
    },
    login () {
      // this.$axios.get('/api')
      this.$router.push('/home')
    },
    registerClose () {
      this.registerVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  background: $black;
  opacity: 0.8;
}
.login {
  height: 100%;
  overflow: hidden;
  > form {
    padding: 40px 12px 20px;
    label:nth-child(2) {
      padding-bottom: 8px;
    }
  }
}
.logo {
  padding-top: 15%;
}
.forgot-password {
  font-size: 12px;
  color: $light;
  padding-bottom: 20px;
}
.other-type {
  padding: 10px 12px 30px;
  color: $light;
  font-weight: bold;
  span {
    padding: 0 8px;
  }
  &:before, &:after {
    content: "";
    flex: 1;
    height: 1px;
    background: $lighter2;
  }
}
.register-button {
  padding: 0 12px;
  > button {
    border: 2px solid $lighter2
  }
}
button {
  :before {
    display: none;
  }
}
.copyright {
  color: $light;
  font-size: 12px;
  bottom: 12px;
}
/deep/ .q-field--error .q-field__label {
  animation: unset;
}
/deep/ .q-field--float .q-field__label {
  transform: translateY(-40%) scale(0.8);
}
/deep/ .q-field__label {
  font-size: 14px;
}
</style>
