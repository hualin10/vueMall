<template>
	<div class="cartBottomBar">
		<div class="allButton" @click = "isSelected()">
			<img src="~assets/img/cart/tick.svg" alt="" class="buttonSelf" :class = "{checked:isChecked}">全选
		</div>
		<div class="total">
			<span>合计:</span>
			<span>{{totalPrice}}</span>
		</div>
		<button @click = "goCalc">去计算({{totalCount}})</button>
	</div>
</template>
<script>
	export default{
		name:'CartBottomBar',
		data(){
			return {}
		},
		props:{
			cartData:{
				type:Array,
				default(){
					return []
			  }
			},
			isChecked:{
				type:Boolean,
				default(){
					return true
				}
			}
		},
		computed:{
			totalPrice(){
				return '￥' + this.cartData.filter( item => { return item.checked
				} ).reduce((preValue,item) => {
					return preValue + item.realPrice * item.count
				},0).toFixed(2)
			},
			totalCount(){
				return this.cartData.filter( item => { return item.checked
				}).length
			}

		},
		methods:{
			// isSelected(){
			// 	if (this.isChecked) {
			// 		this.cartData.map(item => item.checked = false)
			// 	}else{
			// 		this.cartData.map(item => item.checked = true)
			// 	}
			// },
			// 
			// isSelected(){
			// 	if (this.isChecked) {
			// 		this.cartData.forEach(item => item.checked = false)
			// 	}else{
			// 		this.cartData.forEach(item => item.checked = true)
			// 	}
			// },

			isSelected(){
				if (this.isChecked) {
					for(let item of this.cartData){
						// item.checked = !item.checked
						item.checked = false
					}
				}else{
					for(let item of this.cartData){
						item.checked = true
					}
				}
			},
			goCalc(){
				if (!this.isChecked) {
					return this.$toast.show('请选择商品',1500)
				}
			}

		}

	}
</script>
<style scoped>
	.cartBottomBar{
		width: 100%;
		height: 40px;
		line-height: 40px;
		font-size: 14px;
		background-color:#EEE;
		position: fixed;
		bottom: 52px;
		left: 0;
		right: 0;
		z-index: 999;
	}
	.allButton{
		display: inline-block;
		height: 100%;
	}
	.buttonSelf{
		width: 16px;
		height: 16px;
		border:1px solid #ccc;
		border-radius: 50%;
		background-color: #fff;
		vertical-align: middle;
		margin: 0 3px 3px 3px;
	}
	.checked{
		border: 1px solid #f40;
		background-color: #f40;
	}
	.total{
		display: inline-block;
		margin-left: 20px;
		height: 100%;
		/*background-color: pink;*/
	}
	.cartBottomBar button{
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		height: 100%;
		padding:3px 10px;
		border: 0;
		outline: none;
		background-color: #F0880E;
		color: #fff
	}
</style>