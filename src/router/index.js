import Vue from 'vue'
import Router from 'vue-router'
import tab from '@/pages/tabtest'

Vue.use(Router)

const routes = [
  {
    path: '/tab',
    name: 'tab',
    component: tab
  }
]

export default new Router({
  routes
})
