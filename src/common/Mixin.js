import {debounce} from './utils'
import BackTop from 'components/content/backtop/BackTop'

export const itemListenerMixin = {
	data(){
		return {
			imgListener:null,
			refresh:null
		}
	},
	
	mounted(){
		this.refresh = debounce(this.$refs.scroll.refresh,200)

    this.imgListener = () => {
      this.refresh() 
    }
		this.$bus.$on('itemload',this.imgListener)
	}
}

//返回顶部代码
export const backTopMixin = {
	data(){
		return {
			 isBackTop:false
		}
	},
	components:{
		BackTop
	},
	methods:{
		backTopClick(){
			// scrollTo(x,y,easing)参数：{Number} x /y 横/纵轴坐标（单位 px）， time 滚动动画执行的时长（单位 ms）
			// {Object} easing 缓动函数，一般不建议修改。无返回值,作用：滚动到指定的位置
			this.$refs.scroll.scrollTo(0,0)
		}
	}
}