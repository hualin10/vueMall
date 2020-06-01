<template>
	<div class="goods-list_item">
		<img :src="goodsItem.show.img" :alt="goodsItem.title">
		<div class="goods-info">
			<p>{{goodsItem.title}}</p>
			<span class = "price">￥{{goodsItem.price}}</span>
			<span class = "collect">{{goodsItem.cfav}}</span>
		</div>
		
	</div>
</template>
<script>
	export default{
		name:'GoodsListItem',
		props:{
			goodsItem:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>
<style scoped>
  .goods-list_item{
  	width: 48%;
  	margin-bottom: 40px;
  	position: relative
  }
	.goods-list_item img{
		width: 100%;
		border-radius: 5px;
		margin: 5px 0 5px 0; 
	}
	.goods-info{
		width: 100%;
		height: 40px;
		position: absolute;
		bottom: -40px
	}
	.goods-info p{
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
    font-size:12px;
    text-align: center;
    line-height:20px;
	}
  .goods-info .price{
  	position: absolute;
  	right:80px;
    color: #f40;
    font-size:14px;
  }
  .goods-info .collect{
    font-size: 14px;
    position: absolute;
    right: 20px
  }
  .goods-info .collect:before{
  	content:"";
  	width: 14px;
  	height: 14px;
  	background:url('~assets/img/common/collect.svg') 0 0/14px 14px;
  	position: absolute;
  	left: -14px;
    /*top: -1px;*/
  }
</style>