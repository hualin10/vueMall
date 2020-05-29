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
    position:fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:#f6f6f6;
    box-shadow: 0 -3px 3px rgba(100,100,100,.2);
    display: flex
  }
</style>