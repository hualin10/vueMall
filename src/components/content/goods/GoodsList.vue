<template>
	<div class="goods">
		<GoodsListItem v-for = "item in goods" :goodsItem = "item" />
	</div>
</template>
<script>
  import GoodsListItem from 'components/content/goods/GoodsListItem'
	export default{
		name:'Goods',
		props:{
			goods:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			GoodsListItem
		}
	}
</script>
<style>
	.goods{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around
	}
</style>