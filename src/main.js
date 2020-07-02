import Vue from 'vue'
import App from './App'
import router from './router'
import Toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import * as custom from 'common/Filters'
import store from './store'

// 安装Toast,自动调用install函数
Vue.use(Toast)

// vue-lazyload 图片懒加载
Vue.use(VueLazyLoad,{
	loading:require('./assets/img/common/Loading.png'),
	error:require('./assets/img/common/Nothumb.png')
})

//解决移动端点击延迟300ms
FastClick.attach(document.body)

// 导出的是对象，可以直接通过 key 和 value 来获得过滤器的名和过滤器的方法
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})

Vue.config.producationTip = false

// 定义一个事件监听变量 $bus
Vue.prototype.$bus = new Vue()

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')


