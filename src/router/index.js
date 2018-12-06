import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import tab from '@/pages/tab'
// import tab1 from '@/components/tab/tab1'
// import tab2 from '@/components/tab/tab2'
// import tab3 from '@/components/tab/tab3'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/tab',
    name: 'tab',
    component: tab
  }
]

export default new Router({
  routes
})
