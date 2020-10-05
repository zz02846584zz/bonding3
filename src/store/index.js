import Vue from 'vue'
import Vuex from 'vuex'

<<<<<<< HEAD
// modules
import user from './user'

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      user
    },
=======
// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
>>>>>>> 99b48ee8b94c2800e2e471702a062a49b4d62493
    strict: process.env.DEV
  })

  return Store
}
