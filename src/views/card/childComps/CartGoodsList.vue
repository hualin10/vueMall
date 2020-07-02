<template>
  <Scroll>
		<div class = "cartList"  v-for = "(item,index) in cartData" :key = "index">
			<div class="checkBox">
				<img class = "checkImg" :class = "{'check':item.checked}" src="~assets/img/cart/tick.svg"
			  @click = "isSelected(index)">
			</div>
			<div class="thumbnail">
				<img :src="item.toImages" alt="">
			</div>
			<div class="right">
				<div class="title">{{item.title}}</div>
				<div class="desc">{{item.desc}}</div>
				<div class="price-num">
					<span class="price">￥{{item.realPrice}}</span>
					<span class="num">x{{item.count}}</span>
				</div>
			</div>
		</div>
	</Scroll>
</template>
<script>
  import Scroll from 'components/common/bscroll/BScroll'
	export default{
		name:'CartGoodsList',
		props:{
			cartData:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			Scroll
		},
		methods:{
			isSelected(index){
				this.$store.commit('chengeCheck',index)
			}
		}
	}
</script>
<style scoped>
  .cartList{
  	position: relative;
		display: flex;
		border-bottom: 1px solid #ccc
	}
	.checkBox{
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		
	}
	.checkImg{
		width: 16px;
		height: 16px;
		border: 2px solid #ccc;
		border-radius: 50%
	}
	.check{
		background-color: red;
		border: 2px solid red;
		border-radius: 50%;
	}
	.thumbnail{
		width: 100%;
		flex: 3;
		/*background-color: blue;*/

	}
	.thumbnail img{
		width:100%;
		padding: 3px;
		border-radius: 5px
	}
	.right{
		flex: 6;
		display: flex;
    flex-flow: column nowrap;
		justify-content: space-between;
		padding: 0 5px;
	}
	.right .title{
		width: 200px;
		height: 30px;
		line-height: 30px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 16px;
	}
	.right .desc{
		width: 200px;
		height: 30px;
		line-height: 30px;
		white-space: nowrap;
    overflow: hidden;
		text-overflow: ellipsis;
		font-size: 14px;
		flex: 1;
		flex-flow: column wrap;
	}
	.right .price-num{
		height: 40px;
		line-height: 40px;
		position:relative;
	}
	.right .price-num .price{
		font-size: 16px;
		color: #f40
	
	}
	.right .price-num .num{
		position: absolute;
		right: 5px;
	}
	.wrapper{
		position: absolute;
		top: 44px;
		bottom: 91px;
		left: 0;
    right: 0
	}
</style>