<template>
	<div class = "tab-control">
		<div v-for = "(item,index) in titles" class = "tab-control_item" @click = "tabControlActive(index)">
		  <span :class = "{active:index == currentIndex}">{{item}}</span>
		</div>
	</div>
</template>
<script>
	export default{
		name:'TabControl',
		data(){
			return {
				currentIndex:0
			}
		},
		props:{
			titles:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods:{
			tabControlActive:function(index){
				// console.log(index)
				this.currentIndex = index
				this.$emit('tabClick',index)
			}
		}
	}
</script>
<style scoped>
	.tab-control{
		display:flex;
		text-align: center;
		line-height: 40px;
		background-color: #fff;
		font-size: 15px
	}
	.tab-control_item{
		flex:1;
	}
	.active{
		color: var(--color-high-text);
		border-bottom: 2px solid #ff5777
	}
	span{
		/*display: inline-block;*/
		padding: 0 5px;
	}
</style>