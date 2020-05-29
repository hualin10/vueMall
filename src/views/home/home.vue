<template>
	<div>
		<navBar id = "homeNav"></navBar>
	</div>
</template>
<script>
	import navBar from 'components/common/navtab/NavBar'
	export default{
		name:'home',
		components:{
			navBar
		}
	}
</script>
<style scoped>
	#homeNav{
		background-color: var(--color_tint);
		color: #fff
	}
</style>