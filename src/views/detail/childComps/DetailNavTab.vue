<template>
	<NavTab>
		<div class="back" slot = "left" @click = "backClick">
			<img src="~assets/img/common/back.svg" alt="">
		</div>
		<div class = "title" slot = "center">
			<div class = "detailItem" 
			     :class = "{active:index === currentIndex}" 
			     v-for = "(item,index) in titles" 
			     @click = "detailNavTab(index)">
			     {{item}}
			</div>
	  </div>
	</NavTab>
</template>
<script>
	import NavTab from 'components/common/navbar/NavBar'
	export default{
		name:'DetailNavTab',
		components:{
			NavTab
		},
		data(){
			return {
				titles:['商品','参数','评论','推荐'],
				currentIndex:0
			}
		},
		methods:{
			detailNavTab(index){
				this.currentIndex = index
				this.$emit('titleNavTab',index)
			},
			backClick(){
				this.$router.back()
			}
		}
	}
</script>
<style scoped>
	.title{
		display: flex
	}
	.detailItem{
		flex: 1;
		font-size: 13px
	}
	.active{
		color:#f40;
	}
	.back{
		padding-left: 10px;
		padding-top: 5px
	}
</style>