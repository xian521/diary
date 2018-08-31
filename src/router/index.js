import Vue from 'vue'
import Router from 'vue-router'
import diaryList from '@/components/diary-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'diary-list',
      component: diaryList
    },
		{
			path: '/diary-list',
			name: 'diaryList',
			component: diaryList
		}
  ]
})
