<template>
	<div id = "home">
		<NavBar id = "homeNav"></NavBar>
		<TabControl :titles = "['流行','新款','精选']" 
			          class = "tab_Control"
			          @tabClick = "tabClick" 
			          ref = "topTabControl" v-show = "isTabFixed" />

		<BackTop class = "backTop" @click.native = "backTopClick" v-show = "isBackTop"/>
		<Scroll ref = "scroll" 
		        :probeType = "3"
		        :pullUpLoad = "true" 
		        @contentScroll = "contentScroll"
		        @pullingUp = "pullLoadMore">
			<HomeSlide :banners = "banners" @swiperImageLoad = "swiperImageLoad"></HomeSlide>
			<Recommend :recommend = "recommend"></Recommend>
			<FeatureView></FeatureView>
			<TabControl :titles = "['流行','新款','精选']" 
			            class = "tabControl"
			            @tabClick = "tabClick"
			            ref = "tabControl" />
			            
			<GoodsList :goods = "showGoods"></GoodsList>
		</Scroll>
	</div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'
	import HomeSlide from './childComps/HomeSlide'
  import Recommend from './childComps/Recommend'
  import FeatureView from './childComps/FeatureView'

  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/bscroll/BScroll'
  
	import {getHomeMultiData,getHomeGoods} from 'network/home'
	import {itemListenerMixin,backTopMixin} from 'common/Mixin'
	export default{
		name:'Home',
		data(){
			return {
        banners:[],
        recommend:[],
        titles:[],
        goods:{
        	'pop':{page:0,list:[]},
        	'new':{page:0,list:[]},
        	'sell':{page:0,list:[]}
        },
        currentType:'pop',

        isTabFixed:false,
        getScrollTop:0,
        saveY:0
			}
		},
		components:{
			NavBar,
			HomeSlide,
      Recommend,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll
		},
		mixins:[itemListenerMixin,backTopMixin],
		computed:{
			showGoods(){
				return this.goods[this.currentType].list
			}
		},
		activated(){
			// this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.refresh()
		},
		deactivated(){
			this.saveY = this.$refs.scroll.getScrollY()
			//取消全局事件的监听
			this.$bus.$off('itemload',this.imgListener)
			this.$off('contentScroll',this.contentScroll)
		},
		created(){
			//获取更多数据
			this.homeMultiData()
			//获取分类数据
			this.homeGoodsData('pop')
			this.homeGoodsData('new')
			this.homeGoodsData('sell')
		},
		methods:{
			// 这部分为监听事件
			tabClick(index){
				switch (index){
					case 0:
						this.currentType = 'pop'
						break;
					case 1:
						this.currentType = 'new'
						break;
					case 2:
						this.currentType = 'sell'
						break;
				}
				this.$refs.topTabControl.currentIndex = index
				this.$refs.tabControl.currentIndex = index
			},
			//获取滚动条当前位置
			contentScroll(position){
				//当滚动条y轴的位置大于1000时 backTop显示
        this.isBackTop = (-position.y) > 1000
        //TabControl显示的位置
        this.isTabFixed = (-position.y) >= this.getScrollTop-40
			},
			// 上拉加载更多数据
			pullLoadMore(){
				this.homeGoodsData(this.currentType)
			},
			// 监听首页幻灯图片加载,并刷新
			swiperImageLoad(){
				// this.$refs.scroll.refresh()
				this.refresh()
				this.getScrollTop = this.$refs.tabControl.$el.offsetTop
				// console.log(this.getScrollTop)
			},

			//以下是网络请求事件
			homeMultiData(){
				getHomeMultiData().then(res => {
					// console.log(res.data)
	        this.banners = res.data.banner.list
	        this.recommend = res.data.recommend.list
				})
			},
			homeGoodsData(type){
				const page = this.goods[type].page + 1
				getHomeGoods(type,page).then(res => {
					// console.log(res.data.list)
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          //完成上拉加载更多
          //finishPullUp()当上拉加载数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载
          this.$refs.scroll.finishPullUp()
				})
			}
			
		}
	}
</script>
<style scoped>
  #home{
  	position: relative;
  	height: 100vh
  }
	#homeNav{
		background-color: var(--color_tint);
		color: #fff;
	}
	/*.tab-control{
		position: sticky;
		top: 40px;
		z-index: 9
	}*/
	.tabControl{
		position: relative;
		z-index:9
	}
	.tab_Control{
		width:100%;
		position: fixed;
    top:40px;
		z-index: 9
	}
	.wrapper{
		position: absolute;
		top: 0;
		bottom:52px;
		left: 0;
		right: 0
	}
	.backTop{
		position: fixed;
		bottom: 55px;
		right: 5px; 
		z-index:9;
	}
</style>