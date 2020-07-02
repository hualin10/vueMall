<template>
	<div class="bottomTab">
		<div class="bottomTab_tool">
			<div class="server">
				<i class="icon1"></i>
				<span>客服</span>
			</div>
			<div class="shop">
				<i class="icon2"></i>
				<span>店铺</span>
			</div>
			<div class="collection">
				<i class="icon3"></i>
				<span>收藏</span>
			</div>
		</div>
		<div class="card-buy">
			<div class="shopingCard" @click = "addCart">加入购物车</div>
			<div class="buy">购买</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'BottomTab',
		methods:{
			addCart(){
				this.$emit('addCart')
			}
		}
	}
</script>
<style scoped>
	.bottomTab{
		display:flex;
		height: 49px;
		line-height: 49px;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 9999
	}
  .bottomTab_tool,
	.server,
	.shop,
	.collection,
	.card-buy,
	.shopingCard,
	.buy{
		/*flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto*/
		flex: 1 0 auto
	}
	.bottomTab_tool{
		display: flex;
		text-align: center
	}
	.server, .shop, .collection{
		display: flex;
		/*flex-direction: column;/*定义主轴 为垂直方向*/
		flex-flow: column wrap;/*flex-direction与flex-wrap的简写*/
		padding: 2px 0;
		background: #eee
	}
	.bottomTab_tool span{
		flex: 1;
		height: 20px;
		line-height: 20px;
		font-size: 12px
	}
	.bottomTab_tool i{
		flex: 1;
		background: url('~assets/img/detail/detail_bottom.png') no-repeat;
		background-size:20px 150px 
	}
	.server i.icon1{
		background-position: center -52px;
	}
	.shop i.icon2{
		background-position: center -98px;
	}
	.collection i.icon3{
		background-position: center 0
	}
	.card-buy{
		display: flex;
		font-size: 14px;
		text-align: center
	}
 .shopingCard{
		background: #F2F20C
	}
	.buy{
		background: #e67c94;
		color: #fff
	}
</style>
