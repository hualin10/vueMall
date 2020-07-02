import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
// 1、安装插件
Vue.use(Vuex)
const state = {
  cartList:[]
}

// 2、创建 store 对象
const store = new Vuex.Store({
	state,
	// mutations唯一的目的就是修改state中的状态
	// mutations里面的函数做的事情尽量单一一点
	mutations,
	actions
})
// 3、导出对象到 main.js
export default store