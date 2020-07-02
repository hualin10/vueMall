<template>
	<div class = "tabControl">
		<!-- {{cartData}} -->
		<CartNavTab></CartNavTab>
		<CartGoodsList :cartData = "cartData" />
		<CartBottomBar :cartData = "cartData" :isChecked = "isChecked"/>
	</div>
</template>
<script>
import CartNavTab from './childComps/CartNavTab'
import CartGoodsList from './childComps/CartGoodsList'
import CartBottomBar from './childComps/CartBottomBar'
	export default{
		name:'Cart',
		components:{
			CartNavTab,
			CartGoodsList,
			CartBottomBar
		},
		computed:{
			// 返回购物车的数据
			cartData(){
				return this.$store.state.cartList
			},
			isChecked(){
				if (this.cartData.length == 0) {
					return false
				}else{
				  // return !(this.cartData.filter(item => !item.checked).length)
				 return this.cartData.every(item => item.checked)
				}
			}
		},
		methods:{
			allSelected(){
				for(var item in this.cartData){
					if (!item.checked) {
						item.checked = !item.checked
					}
				}
			}
		}

	}
	
</script>
<style>
	.tabControl{
		margin-top: 44px;
	}
	.content{
		overflow: hidden
	}
</style>
