<template>
	<div class="product">
		<div class="product_info" v-if = "Object.keys(goodsParams).length !== 0">
			<!-- <table v-for = "(table,index) in goodsParams.sizes" :key = "index" class = "info-size">
				<tr v-for = "(tr,indey) in table"  :key = "indey">  
					<td v-for = "(td,indez) in tr" :key = "indez">{{td}}</td>>
				</tr>
			</table>
			<table>
				<tr v-for = "(info,index) in goodsParams.infos">  
					<td>{{info.key}}</td>
					<td>{{info.value}}</td>
				</tr>
			</table> -->
			<table>
				<tr v-for = "(item,index) in this.goodsParams.tables[0]"
				    :key = "index">  
					<td class = "text_left">{{item[0]}}</td>
					<td>{{item[1]}}</td>
					<td>{{item[2]}}</td>
					<td>{{item[3]}}</td>
					<td>{{item[4]}}</td>
				</tr>
			</table>
		</div>
		<div class="protuct_rule" v-if = "Object.keys(goodsParams).length !== 0">
			<table>
				<tr v-for = "(item) in this.goodsParams.set" :key = "item.key">
					<td class = "text_left">{{item.key}}</td>
					<td class = "red">{{item.value}}</td>
				</tr>
			</table>
		</div>
	</div>
</template>
<script>
	export default{
		name:'GoodsParams',
		props:{
			goodsParams:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>
<style>
	.product{
		width: 100%;
		padding: 10px 0 0 0;
		background-color: #fff
	}
	.product_info table{
		width: 100%;
		border-spacing: 0;
		text-align: center;
		font-size: 14px;
		border-bottom: 2px solid #ccc;
	}
	.product_info table td{
		height: 35px;
		background-color: #fff;
		border: 0;
		border-bottom: 1px solid #ccc;
	}
	.protuct_rule table{
		width: 100%;
		border-spacing:0;
		font-size: 14px;
		border-bottom: 2px solid #ccc
	}
	.protuct_rule table td{
		height: 35px;
		background-color: #fff;
		border: 0;
		border-bottom: 1px solid #ccc;
	}
	.red{
		color: #ED113D
	}
	.text_left{
		text-align: left;
		white-space: nowrap;
		padding-right: 10px
	}
</style>