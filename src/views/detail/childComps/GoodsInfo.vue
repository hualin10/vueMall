<template>
	<div class="goodsInfo">
		<div class="desc-info clear-fix">
			<div class="start"></div>
			<div class="desc">{{goodsInfo.desc}}</div>
			<div class="end right"></div>
		</div>
		<div class="key">{{goodsInfo.key}}</div>
		<div class="list-info" v-for ="(item,index) in goodsInfo.list" :key = "index">
			<img :src = "item" alt="" @load = "loadImage">
		</div>
	</div>
</template>
<script>
	export default{
		name:'GoodsInfo',
		props:{
			goodsInfo:{}
		},
		methods:{
			loadImage(){
				this.$emit('loadImg')
			}
		}
	}
</script>
<style scoped>
	.goodsInfo{
		width: 100%;
		padding: 10px 0;
		border-bottom:3px solid #ccc;
	}
	.desc-info{
    width: 100%;
    padding: 5px 0;
    font-size: 14px
	}
	.start{
		width: 25%;
		height: 10px;
		background-color: #ccc;
		border-top: 4px solid #fff;
		border-left:4px solid #999;
		border-bottom:4px solid #fff;
		margin-bottom: 5px;
		border-radius: 10px
	}
	.end{
		width: 25%;
		height: 10px;
		background-color: #ccc;
		border-top: 4px solid #fff;
		border-right:4px solid #999;
		border-bottom:4px solid #fff;
		margin-top: 5px;
		margin-bottom: 5px;
		border-radius: 10px
	}
	.key{
		width:100%;
		height: 40px;
		line-height: 30px;
		font-weight: 900;
		font-size: 15px;
	}
	.list-info{
		width: 100%;
	}
	.list-info img{
		width: 100%
	}
	
</style>