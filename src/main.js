// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/default_pc.css'
// import Vconsole from 'vconsole'

// let vConsole = new Vconsole()
Vue.config.productionTip = false

/* eslint-disable */
setTimeout(function () {
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })
}, 0)
