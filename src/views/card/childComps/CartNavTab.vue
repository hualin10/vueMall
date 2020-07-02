<template>
	<NavTab class="cartNavTab">
		<div slot = "left"></div>
		<div slot = "center">购物车({{cartGoodNum}})</div>
		<div slot = "right"></div>
	</NavTab>
	</template>
<script>
	import NavTab from 'components/common/navbar/NavBar'
	export default{
		name:'CartNavTab',
		components:{
			NavTab
		},
		computed:{
			cartGoodNum(){
				return this.$store.state.cartList.length
			}
		}
	}
</script>
<style>
	.cartNavTab{
		color: #fff;
		background-color:#ff5777 
	}
</style>