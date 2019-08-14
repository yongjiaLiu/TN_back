import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store.js';


import MainIndex from 'components/mainIndex'
import Home from 'components/views/home/index' //首页
import Goods from 'components/views/goods/index' //商品
import Active from 'components/views/active/index' //活动
import Article from 'components/views/article/index' //软文
import About from 'components/views/about/index' //关于


Vue.use(Router)


let route = [{
		path: '/',
		redirect: 'main'
	}, {
		path: '/main',
		name: 'main',
		component: MainIndex,
		redirect: 'home', //默认跳转页面
		meta: {
			requireAuth: false,
		},
		children: [{
			path: '/home',
			name: 'home',
			component: Home
		},{
			path: '/goods',
			name: 'goods',
			component: Goods
		},{
			path: '/active',
			name: 'active',
			component: Active
		},{
			path: '/article',
			name: 'article',
			component: Article
		},{
			path: '/about',
			name: 'about',
			component: About
		},]
	}

]

const routes = new Router({
	routes: route, //加载路由
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return {
				x: 0,
				y: 0
			}
		}
	}
})

export default routes;
