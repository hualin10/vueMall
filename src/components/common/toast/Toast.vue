<template>
	<div class="toast" v-show = "isShow">
		<span>{{message}}</span>
	</div>
</template>
<script>
	export default{
		name:'Toast',
		props:{
			// message:{
			// 	type:String,
			// 	default:''
			// },
			// isShow:false
		},
		data(){
			return {
				message:'',
				isShow:false
			}
		},
		methods:{
			show(message,duration){
				this.message = message
      	this.isShow = true
      	
      	setTimeout(() => {
      		this.isShow = false;
      	}, duration)
			}
		}
	}
</script>
<style scoped>
	.toast{
		position: fixed;
		top:50%;
		left: 50%;
		background: rgba(0, 0, 0, .7);
		transform: translate(-50%, -50%);
		padding: 5px 10px;
		color: #fff;
		border-radius: 5px;
		z-index: 999
	}
</style>