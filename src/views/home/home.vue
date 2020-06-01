<template>
	<div>
		<NavBar id = "homeNav"></NavBar>
		<HomeSlide :banners = "banners"></HomeSlide>
		<Recommend :recommend = "recommend"></Recommend>
		<FeatureView></FeatureView>
		<TabControl :titles = "['流行','新款','精选']" class = "tab-control" @tabClick = "tabClick" />
		<GoodsList :goods = "showGoods"></GoodsList>
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
	</div>
</template>
<script>
	import NavBar from 'components/common/navtab/NavBar'

	import HomeSlide from './childComps/HomeSlide'
  import Recommend from './childComps/Recommend'
  import FeatureView from './childComps/FeatureView'

  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'

	import {getHomeMultiData,getHomeGoods} from 'network/home'
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
        currentType:'pop'
			}
		},
		components:{
			NavBar,
			TabControl,
			HomeSlide,
      Recommend,
      FeatureView,
      GoodsList
		},
		computed:{
			showGoods(){
				return this.goods[this.currentType].list
			}
		},
		created(){
			this.homeMultiData()
			this.homeGoodsData('pop')
			this.homeGoodsData('new')
			this.homeGoodsData('sell')
		},
		methods:{
			// 这部分为监听事件
			tabClick(index){
				// console.log(index)
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
				})
			}
		}
	}
</script>
<style scoped>
	#homeNav{
		background-color: var(--color_tint);
		color: #fff;
	}
	.tab-control{
		position: sticky;
		top: 40px;
		z-index: 9
	}
</style>