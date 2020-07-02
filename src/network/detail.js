import {request} from './request'

export function getDetailData(iid){
	return request({
		url:'/detail',
		params:{
			iid
		}
	})
}
// 详情页推荐数据
export function getRecommendData(){
	return request({
		url:'/recommend'
	})
}
// 商品数据
export class Goods{
	constructor(itemInfo,columns,services){
	  this.title = itemInfo.title
	  this.price = itemInfo.price
	  this.oldPrice = itemInfo.oldPrice
	  this.discount = itemInfo.discountDesc
		this.desc = itemInfo.desc
		this.columns = columns
		this.services = services
		this.realPrice = itemInfo.lowNowPrice
	}
}
//店铺数据
export class Shop{
	constructor(shopInfo){
    this.name = shopInfo.name
    this.logo = shopInfo.shopLogo
    this.goodsCount = shopInfo.cGoods
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score =shopInfo.score
	}
}
//商品参数
export class GoodsParams{
	constructor(info,rule){
		this.image = info.images ? info.images[0] : ''
		this.set = info.set
		this.tables =rule.tables
	}
}