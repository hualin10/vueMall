import {
	ADD_COUNTER,
	ADD_TO_CART
} from './mutations-type'

export default{
	[ADD_COUNTER](state,payload){
		payload.count++
	},

  [ADD_TO_CART](state,payload){
  	payload.checked = true
  	state.cartList.push(payload)
  },
  chengeCheck(state,index){
  	// console.log(state.cartList[index])
  	// console.log(index)
  	state.cartList[index].checked = !state.cartList[index].checked
  }
}