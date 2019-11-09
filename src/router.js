import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Page from './views/page'
import Page2 from './views/page2'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Page',
      path: '/',
      component: Page,
    },
    {
      name: 'Page2',
      path: '/page2',
      component: Page2,
    },
  ],
})
