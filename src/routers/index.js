/*
 * @Author: chenjia 
 * @Date: 2018-01-04 15:06:26 
 * @Last Modified by: jdf
 * @Last Modified time: 2018-01-04 15:19:22
 */

import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'

// 引入模块
import demo from './demo'

Vue.use(Router)
const router = new Router({
	routes: [{
		path: '/',
		redirect: '/demo'
	},
	...demo
	]
})

// 监听路由变化
router.beforeEach((to, from, next) => {

	// 底部导航是否显示
	store.commit('HAS_FOOTER', to.meta.hasFooter);
	if (to.meta.tabSelected) {
		store.commit('TAB_SELECTED', to.meta.tabSelected);
	}

	// 是否可以缩放
	if (from.meta.zoom) {
		document.querySelector('meta[name=viewport]').setAttribute('content', 'width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no')
	}

	// 是否登录
	if (to.meta.login != false && !store.state.common.user) {
		next('/login')
	} else {
		next()
	}
})

export default router
