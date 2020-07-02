<template>
	<div class="navBar">
	  <div class="navBar-left">
	    <slot name = "left"></slot>
	  </div>
	  <div class="navBar-center">
	    <slot name = "center">购物街</slot>
	  </div>
	  <div class="navBar-right">
	    <slot name = "right"></slot>
	  </div>
	</div>
</template>
<script>
	export default{
		name:'NavTab'
	}
</script>
<style scoped>
	.navBar{
		display:flex;
		height: 44px;
		line-height: 44px;
		text-align: center;
		box-shadow: 0px 3px 3px rgba(100,100,100,.2);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 9;
		width: 100%
	}
	.navBar-left,.navBar-right{
		width:60px;
	}
	.navBar-center{
		flex: 1;
	}
</style>