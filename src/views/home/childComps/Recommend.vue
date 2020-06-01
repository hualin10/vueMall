<template>
	<div class="recommend">
		<div v-for = "item in recommend" class = "recommend-item" :key = "item.acm">
			<a :href="item.link"><img :src="item.image" alt=""></a>
			<p>{{item.title}}</p>
		</div>
	</div>
</template>
<script>
	export default{
	  name:'Recommend',
	  props:{
	  	recommend:{
	  		type:Array,
	  		default(){
	  			return []
	  		}
	  	}
	  }
	}
</script>
<style>
	.recommend{
		display: flex;
		text-align: center;
		border-bottom: 10px solid #ccc
	}
	.recommend-item{
		flex: 1;
		padding: 15px 0 20px
	}
	.recommend img{
		width: 70px;
		height: 70px;
		margin-bottom: 10px
	}
	.recommend-item p{
		font-size: 12px
	}
</style>