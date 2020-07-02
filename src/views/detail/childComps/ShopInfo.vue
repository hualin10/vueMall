<template>
	<div class="shop-info">
		<div class="shop-name">
			<img :src="shopInfo.logo" alt="">
			<span>{{shopInfo.name}}</span>
		</div>
		<div class="shop-middle">
			<div class="shop-middle_left">
				<div class="shopSells">
					<div class="sells-count">{{sells}}万</div>
					<div class="sells-text">总销量</div>
				</div>
				<div class="goodsCount">
					<div class="goods-count">{{shopInfo.goodsCount}}</div>
					<div class="goods-text">商品总数</div>
				</div>
			</div>
      <div class="shop-middle_right">
      	<table>
      		<tr v-for = "item in shopInfo.score">
      			<td>{{item.name}}</td>
      			<td class = "greenFont" :class = "{redFont:item.isBetter}">{{item.score}}</td>
      			<td class = "green" :class = "{red:(item.isBetter)}">{{item.isBetter ? '高' : '低'}}</td>
      		</tr>
      	</table>
      </div>
		</div>
		<div class="shopBtn">
			<button>进店逛逛</button>
		</div>
	</div>
	
</template>
<script>
	export default{
		name:'ShopInfo',
		props:{
			shopInfo:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		computed:{
			sells(){
				const sells = (this.shopInfo.sells/10000).toFixed(2)
				return sells
			}
		}
	}
</script>
<style scoped>
	.shop-info{
		width: 100%;
		padding: 5px 5px 10px 5px;
		border-bottom: 3px solid #ccc
	}
	.shop-name{
    line-height: 50px;
    padding:5px 0;
	}
	.shop-name img{
		width: 45px;
		height: 45px;
		vertical-align: middle;
		border: 1px solid #ccc;
		border-radius: 50%
	}
	.shop-name span{
		margin-left: 5px;
		font-size: 15px;
	}

	.shop-middle{
		height: 100px;
		display: flex;
	}
	.shop-middle_left{
		flex: 1;
		display: flex;
    align-items: center; /* 让子元素垂直居中 */
		font-size: 14px;
	}

	.shopSells{
		flex: 1;
		text-align: center
		
	}
	.goodsCount{
		flex: 1;
		text-align: center;
		border-right: 1px solid #ccc
	}
	.shop-middle_right{
		  flex: 1;
		  position: relative;
	}
	.shop-middle_right table{
		width: 80%;
		height: 60%;
		font-size: 12px;
		margin-top:20px;
		margin-left: 15px;
		white-space: nowrap;
	}
	.shopBtn{
		width: 100%;
		line-height: 30px;
		text-align: center
	}
	.shopBtn button{
		margin: 0;
		padding: 0;
		border: 0;
		outline: none;    /*消除默认点击蓝色边框效果*/

		padding: 3px 30px;
		border-radius: 5px;
		font-size: 14px;
	}
	.red,.green{
		color: #fff;
		text-align: center
	}
	.green{
		background-color: #43BB58
	}
	.greenFont{
		color: #43BB58
	}
	.red{
		background-color: #f40 
	}
	.redFont{
		color: #f40
	}
	
</style>