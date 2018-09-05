import Vue from 'vue'
import Router from 'vue-router'


import list from '@/components/list'
import insert from '@/components/insert'
import statistic from '@/components/statistic'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: list
    },
		{
			path: '/list',
			name: 'list',
			component: list
		},
		{
			path: '/insert',
			name: 'insert',
			component: insert
		},
		{
			path: '/statistic',
			name: 'statistic',
			component: statistic
		}
  ]
})
