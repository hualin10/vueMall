<template>
	<div class="wrapper" ref = "wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	export default{
		name:'Scroll',
		data(){
			return{
				scroll:null
			}
		},
		props:{
			probeType:{
				type:Number,
				default:0
			},
			pullUpLoad:{
				type:Boolean,
				default:false
			}
		},
		mounted(){
			//1、创建scroll对象
			this.scroll = new BScroll(this.$refs.wrapper,{

				// better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件，我们会给派发的 event 参数加一个私有属性 _constructed，值为 true
				click:true,

				// 有时候我们需要知道滚动的位置。当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。如果没有设置该值，其默认值为 0，即不派发 scroll 事件
				probeType:this.probeType,

				// 这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
				pullUpLoad:this.pullUpLoad
			})

			// 2、监听滚动的位置
			if (this.probeType == 2 || this.probeType == 3) {
        // scroll事件函数
				// 参数：{Object} {x, y} 滚动的实时坐标
        // 触发时机：滚动过程中，具体时机取决于选项中的 probeType
				this.scroll.on('scroll',(position) => {
					this.$emit('contentScroll',position)
				})
			}
			
			// 3、监听上拉加载
			// pullingUp 事件 触发时机：在一次上拉加载的动作后，这个时机一般用来去后端请求数据。
			if (this.pullUpLoad) {
        this.scroll.on('pullingUp',() => {
					this.$emit('pullingUp')
				})
			}
				
		},

		methods:{
			scrollTo(x,y,time = 500){//滚动到指定位置
				this.scroll && this.scroll.scrollTo(x,y,time)
			},
			refresh(){//刷新重新计算
				this.scroll && this.scroll.refresh()
			},
			finishPullUp(){//上拉加载数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载
				this.scroll && this.scroll.finishPullUp()
			},
			getScrollY(){
				return this.scroll ? this.scroll.y : 0
			}
			
		}
		
	}
	
</script>