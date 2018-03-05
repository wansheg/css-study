import Vue from 'vue'
import Router from 'vue-router'
import CssTest from '@/components/CssTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CssTest',
      component: CssTest
    }
  ]
})
