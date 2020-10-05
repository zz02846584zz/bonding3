// import { random } from 'core-js/fn/number'

const state = () => {
  return {
  }
}

const mutations = {
  'USER_LOGIN' (state, data) {
    // state.user.account = data.account
    // state.user.password = data.password

    sessionStorage.setItem('status-login', true)
  },
  'USER_LOGOUT' (state) {
    // state.user = {
    //   account: undefined,
    //   password: undefined
    // }

    sessionStorage.setItem('status-login', false)
  }
}

const actions = {
  userLogin ({ commit }, data) {
    commit('USER_LOGIN', data)
  },
  userLogout ({ commit }, data) {
    commit('USER_LOGOUT', data)
  }
}

const getters = {
  getUser (state) {
    // console.log('getData')
    return state.user
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true // 多模組的時候，當有相同名稱的變數或方法才能區隔開
}
