<template>
	<div v-if = "baseInfo !== null" class="goods-base_info">
		<div class="goods-title">{{baseInfo.title}}</div>
		<div class="price-info">
			<span class="price">{{baseInfo.price}}</span>
			<span class="o-price">{{baseInfo.oldPrice}}</span>
			<span v-if = "baseInfo.discount" class="discount">{{baseInfo.discount}}</span>
		</div>
		<div class="other-info">
			<span>{{baseInfo.columns[0]}}</span>
			<span>{{baseInfo.columns[1]}}</span>
			<span>{{baseInfo.services[baseInfo.services.length-1].name}}</span>
		</div>
		<div class="service-info">
			<span v-for = "index in baseInfo.services.length-2" :key = "index">
				<img :src="baseInfo.services[index].icon" alt="">
			  <span class="service-item_info">{{baseInfo.services[index].name}}</span>
			</span>
		</div>
	</div>
</template>
<script>
	export default{
		name:'GoodsBaseInfo',
		props:{
			baseInfo:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>
<style scoped>
	.goods-base_info{
		width: 100%;
		padding: 10px 0;
		border-bottom: 3px solid #ccc;
		margin-bottom: 3px;
	}
	.goods-title{
		font-size: 15px;
	}
	.price-info{
		height:30px;
		line-height: 30px;
		margin-top: 10px;
	}
	.price{
		font-size: 16px;
		color:#e56e76;
		font-weight: 900;
	}
	.o-price{
		font-size: 12px;
		text-decoration: line-through;
    margin: 0 5px;
    color:#aaa;
	}
	.discount{
		line-height: 20px;
		font-size: 12px;
		text-align: center;
		color: #fff;
    border-radius: 15px;
    padding: 3px 5px;
    vertical-align:25%;
    background-color:#e56e76;
	}
	.other-info{
		font-size: 12px;
		color: #aaa;
		display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    border-bottom:1px solid #ccc;
    padding: 10px 0 5px 0
	}
	.service-info{
		width: 100%;
		font-size: 14px;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		padding: 15px 0 10px 0;
	}
	.service-info img{
		width: 12px;
		height: 12px;
		margin-right: 2px;
	}
	
</style>