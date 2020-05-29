<template>
	<div class = "tabbar-item" @click = tabBarClick()>
	  <div v-if = "!isActive">
	    <slot name = "tabbar-item_img"></slot>
	  </div>
	  <div v-else>
	    <slot name = "tabbar-item_img_active"></slot>
	  </div>
	  <div :class = "{active:isActive}" :style = "activeStyle">
	    <slot name = "tabbar-item_text"></slot>
	  </div>
	</div>
</template>
<script>
	export default{
		name:'TabBarItem',
		data(){
			return {
				// isActive:false
			}
		},
		props:{
			path:{
				type:String
			},
			activeColor:{
				type:String,
				default:'#ff5777'
			}
		},
		methods:{
			tabBarClick(){
				// console.log(this.$route.path)
				// console.log(this.path)
				this.$router.push(this.path).catch(err =>{
					// console.log('good')
				})
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path) != -1
			},
			activeStyle(){
				return this.isActive ? {color:this.activeColor} : {}
			}
		}
	}
</script>
<style scoped>
	.tabbar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    margin-top:3px;

  }
  .tabbar-item img{
  	width: 26px;
  	height: 26px;
  	padding-bottom: 0;
  	vertical-align: middle;
  }
  .tabbar-item .active{
  	color: #f40
  }
</style>
