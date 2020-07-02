<template>
	<div id="detail">
		<DetailNavTab class = "detail-nav_tab" ref = "navTab" @titleNavTab = "titleClick" />
		<BackTop  class = "backTop" @click.native = "backTopClick" v-show = "isBackTop"/>
		<BottomTab @addCart = "addToCart" />
		<Scroll class = "content" ref = "scroll" :probeType = "3" @contentScroll = "contentScroll">
			<DetailSlide :topImgs = "topImages" />
			<GoodsBaseInfo :baseInfo = "goodBaseInfo" />
			<ShopInfo :shopInfo = "shopInfo" />
			<GoodsInfo :goodsInfo = "goodsInfo" @loadImg = "loadImg" />
			<GoodsParam ref = "params"  :goodsParams = "goodsParams" />
			<Comments ref = "common"  :commons = "commons" />
			<GoodsList ref = "recommend"  :goods = "recommendData" />
		</Scroll>
		<!-- <Toast :message = "message" :isShow = "isShow" /> -->
	</div>
</template>
<script>
	import DetailNavTab from './childComps/DetailNavTab'
	import DetailSlide from './childComps/DetailSlide'
	import GoodsBaseInfo from './childComps/GoodsBaseInfo'
	import ShopInfo from './childComps/ShopInfo'
	import GoodsInfo from './childComps/GoodsInfo'
	import GoodsParam from './childComps/GoodsParams'
	import Comments from './childComps/Comments'
	import GoodsList from 'components/content/goods/GoodsList'
	import BottomTab from './childComps/BottomTab'

  import Scroll from 'components/common/bscroll/BScroll'
	import {itemListenerMixin,backTopMixin} from 'common/Mixin'
	import {debounce} from 'common/utils'
	import {getDetailData,Goods,Shop,GoodsParams,getRecommendData} from 'network/detail'

	// import Toast from 'components/common/toast/Toast'
	export default{
		name:'Detail',
		data(){
			return {
				iid:null,
				topImages:[],
				goodBaseInfo:null,
        shopInfo:{},
        goodsInfo:[],
        goodsParams:{},
        commons:[],
        recommendData:[],
				themeScrollY:[],
				getThemeScrollY:null,
				currentIndex:0,
				// message:'',
				// isShow: false
			}
		},
		components:{
			DetailNavTab,
			DetailSlide,
			GoodsBaseInfo,
			ShopInfo,
			Scroll,
			GoodsInfo,
			GoodsParam,
			Comments,
			GoodsList,
			BottomTab,
			// Toast
		},
		
		mixins:[itemListenerMixin,backTopMixin],
		created(){
			// 1、保存传入的iid
			this.iid = this.$route.params.iid

			// 2、根据iid获取商品数据
			getDetailData(this.iid).then(res => {
				// console.log(res)
				// console.log(res.result)
				const data = res.result
				// 2.1、获取轮播图
				this.topImages = data.itemInfo.topImages

				// 2.2、获取商品信息
				this.goodBaseInfo = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

				// 2.3、获取店铺信息
				this.shopInfo = new Shop(data.shopInfo)

				// 2.4、获取Detail里的商品详细信息
				this.goodsInfo = data.detailInfo.detailImage[0]
        // console.log(this.goodsInfo)
				// 2.5、获取商品参数
				this.goodsParams = new GoodsParams(data.itemParams.info,data.itemParams.rule)

				// 2.6、获取评论信息
				if (data.rate.cRate !== 0) {
					this.commons = data.rate.list[0]
				}
				
			}).catch(function (reason) {
			    // console.log('失败：' + reason);
			});
      // 获取商品详情页推荐商品
			getRecommendData().then(res => {
				this.recommendData = res.data.list
				// console.log(this.recommendData)
			})
      // 防抖函数封装，防止频繁执行
			this.getThemeScrollY = debounce(() => {
				this.themeScrollY = []
        this.themeScrollY.push(0)
        this.themeScrollY.push(-this.$refs.params.$el.offsetTop)
        this.themeScrollY.push(-this.$refs.common.$el.offsetTop)
        this.themeScrollY.push(-this.$refs.recommend.$el.offsetTop)
        this.themeScrollY.push(-Number.MAX_VALUE)
        // console.log(this.themeScrollY)
			},100)
      
		},
		mounted(){
			// console.log(this.$refs.navTab)
		},
    //离开本页面时，停止对‘itemload’的监听
		destroyed(){
			this.$bus.$off('itemload',this.imgListener)
			this.$off('contentScroll',this.contentScroll)
		},
		methods:{
			// 此为商品图片信息监听回调函数
			loadImg(){
				this.refresh()
				//获取页面上指定元素的位置
				this.getThemeScrollY()
			},
			titleClick(index){
				let y = (this.themeScrollY[index] == 0) ? this.themeScrollY[index] : (this.themeScrollY[index] + 44)
        this.$refs.scroll.scrollTo(0,y,200)
        
			},
			contentScroll(position){
				const positionY = -position.y
			  if (positionY >= 1000) {
			  	this.isBackTop = true
			  }
				let length = this.themeScrollY.length
				for(let i = 0; i < length-1; i++){
					let themeY = -this.themeScrollY[i] - 44

					// if ( this.currentIndex !== i && ((i < length - 1 && positionY >= themeY && positionY < (-this.themeScrollY[i+1] - 44) ) || (i === length - 1 && positionY >= themeY )) ) {
					// 	this.currentIndex = i;
					// 	this.$refs.navTab.currentIndex = this.currentIndex
					// }
					
					if (this.currentIndex !== i && positionY >= themeY && positionY < -this.themeScrollY[i+1] - 44) {
						this.currentIndex = i;
						// console.log(this.currentIndex);
						this.$refs.navTab.currentIndex = this.currentIndex
					}
				}	
			},
			addToCart(){
				//1 获取购物车所需的信息
				const cartInfo = {}
				cartInfo.iid = this.iid
				cartInfo.toImages = this.topImages[0]
				cartInfo.title = this.goodBaseInfo.title
				cartInfo.price = this.goodBaseInfo.price
				cartInfo.desc = this.goodBaseInfo.desc
				cartInfo.realPrice = this.goodBaseInfo.realPrice
        // console.log(this.$store)

        //2、将商品添加到购物车
        this.$store.dispatch('addCart',cartInfo).then(res => {
        	this.$toast.show(res,1500)
        })
			}
		}

	}
</script>
<style scoped>
  #detail{
  	margin:0 auto;
  	width: 100%;
  	padding: 0 3px;
  	position: relative;
  	background-color: #fff;
  	z-index: 9;
  }
	.detail-nav_tab{
		background-color:#fff
	}
	.content{
		height: calc(100vh - 49px);
	}
	.backTop{
		position: fixed;
		bottom: 55px;
		right: 5px; 
		z-index:9;
	}
</style>