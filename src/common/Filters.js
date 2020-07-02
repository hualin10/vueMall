//定义全局过滤器
//语法格式：1、调用时的格式：{{name | 过滤器名称}}
//         2、定义时的格式：Vue.filter('过滤器名称',callback(data,arg,...))
//可被用在常见的文本格式化，过滤器可用在两个地方，mustache插值与v-bind表达式
// Vue.filter('dateFormat',function(dateStr,pattern = ''){
// 	if (dateStr) {
// 		var dt = new Date(dateStr);
// 		var y = dt.getFullYear();
// 		var m = (dt.getMonth()+1).toString().padStart(2,0);
// 		var d = dt.getDate().toString().padStart(2,0);
		
// 		// return y + '-' + m + '-' + d;
// 		if (pattern.toLowerCase() == 'yy-mm-dd') {
// 			return `${y}-${m}-${d}`
// 		}else{
// 			var hh = dt.getHours().toString().padStart(2,0);
// 			var mm = dt.getMinutes().toString().padStart(2,0);
// 			var ss = dt.getSeconds().toString().padStart(2,0);
// 			return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
// 		}
// 	}else{
// 		return
// 	}
// })

let dateFormat = (dateStr,pattern = '') => {
	if (dateStr) {
    var dateStr = (dateStr.toString().length == 10) ? dateStr * 1000 : dateStr
		var dt = new Date(dateStr);
		var y = dt.getFullYear();
		var m = (dt.getMonth()+1).toString().padStart(2,0);
		var d = dt.getDate().toString().padStart(2,0);
		
		// return y + '-' + m + '-' + d;
		if (pattern.toLowerCase() == 'yy-mm-dd') {
			return `${y}-${m}-${d}`
		}else{
			var hh = dt.getHours().toString().padStart(2,0);
			var mm = dt.getMinutes().toString().padStart(2,0);
			var ss = dt.getSeconds().toString().padStart(2,0);
			return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
		}
	}else{
		return
	}
}
export {dateFormat}