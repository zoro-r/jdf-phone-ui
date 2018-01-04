import utils from '../../utils'
/**
 * 注意
 * token直接存储在storage中 永久缓存
 */
const types = {
	LOADING: 'LOADING',
	LOADING_DISABLED: 'LOADING_DISABLED',
	TOGGLE_TOAST: 'TOGGLE_TOAST',
	//是否有底部导航
	HAS_FOOTER: 'HAS_FOOTER',
	//设置proposal对象
	SET_PROPOSAL: 'SET_PROPOSAL',
	//默认选中tab
	TAB_SELECTED:'TAB_SELECTED',
	//获取用户信息
	USE_RINFO: "USE_RINFO",
	//设置是否有秦秋loadding
	LOADING_DISABLED:"LOADING_DISABLED",
	//设置滚动
  DISABLE_DSCROLL:"DISABLE_DSCROLL",
	
}

const state = {
	user: utils.cache.get("user"),
	//是否有底部导航
	hasFooter: false,
	tabSelected:'1',
	proposal: null,
	loadingDisabled:false,
	//禁止底部滚动
  disabledScroll:false,
  toast: false,
}

const getters = {
	getUser: () => {
		return state.user
	},
	loading: () => {
		return state.loading
	},
}

const actions = {
	add({
    commit,
		state
  }, product) {
		commit(types.ADD_PRODUCT, product)
	}
}

const mutations = {
	//设置加载loadding样式
	[types.LOADING](state, params) {
		state.loading = params.loading
		state.loadingMsg = params.msg || '';
	},
	//设置是否需要loadding
	[types.LOADING_DISABLED](state, flag) {
		state.loadingDisabled = flag
	},
	//是否有底部导航
	[types.HAS_FOOTER](state, flag) {
		state.hasFooter = flag
	},
	[types.TAB_SELECTED](state, flag) {
		state.tabSelected = flag
	},
	[types.SET_PROPOSAL](state, value) {
		state.proposal = value;
  },
  [types.TOGGLE_TOAST](state, params) {
    state.toast = params.toast
    state.toastMsg = params.toastMsg
    state.toastImg = params.toastImg || ''
    if (state.toast) {
      setTimeout(() => {
        state.toast = false
      }, 3000)
    }
  },
	//存储用户信息
	[types.USE_RINFO](state, params) {
		//调试模式下存储用户信息入 storage
		if (window.globalConfig.isDebug) {
			utils.cache.set("user", params)
		} else {
			state.user = params
		}
  },
	//存储用户信息
	[types.DISABLE_DSCROLL](state, params) {
		//调试模式下存储用户信息入 storage
		state.disabledScroll = params;
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
