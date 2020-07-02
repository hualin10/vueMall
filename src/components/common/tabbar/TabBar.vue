<template>
	<div id="tabbar">
		<slot></slot>
	</div>
</template>
<script>
  export default{
    name:'TabBar'
  }
</script>
<style scoped>
	#tabbar{
    width: 100%;
    position:fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:#f6f6f6;
    box-shadow: 0 -2px 2px rgba(100,100,100,.2);
    display: flex
  }
</style>