<template>
	<div class="goods-list_item" @click = "goodsItemClick">
		<img v-lazy = "showImage" :alt = "goodsItem.title" @load = "imgload">
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
		},
		methods:{
			// 发送一个事件总线监听
			imgload(){
				this.$bus.$emit('itemload')
			},
			goodsItemClick(){
				this.$router.push('/detail/' + this.goodsItem.iid)

			}
		},
		computed:{
			showImage(){
				return this.goodsItem.image || this.goodsItem.show.img 
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
		margin: 0 0 5px 0; 
	}
	.goods-info{
		width: 100%;
		height: 44px;
		position: absolute;
		bottom: -44px;
		margin:5px 0;
		box-sizing: border-box;
	}
	.goods-info p{
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
    font-size:12px;
    text-align: center;
    line-height:24px;
	}
  .goods-info .price{
  	position: absolute;
  	left:0;
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