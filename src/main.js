// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "./router"
import "lib-flexible/flexible"
import store from "./store"
import Cube from "cube-ui" // 一般直接放在这个位置
import axios from "axios"

Vue.prototype.$http = axios
Vue.use(Cube)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  store
})
// router.beforeEach((to, from, next) => {
//   console.log(vm.isLoading)
//   next()
// })
