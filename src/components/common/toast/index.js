// 导入组件文件
import Toast from 'components/common/toast/Toast'

// 定义一个空的对象
const obj = {}

// Vue.use('Toast') 安装toast就触发 install方法
obj.install = function(Vue){

	//1.创建组件构造器，并传入组件对象
	const toastConstructor = Vue.extend(Toast)

	// 2.new的方式，根据组件构造器，可以创建出来一个组件对象
	const toast = new toastConstructor()

	// 3.将组件对象，手动挂载到某个元素上
	toast.$mount(document.createElement('div'))

	// 4.toast.$el对应的就是div
	document.body.appendChild(toast.$el)
  
  //5.把 toast组件对象添加到 Vue的原型上
	Vue.prototype.$toast = toast;
}

export default obj