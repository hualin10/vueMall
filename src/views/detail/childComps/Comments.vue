<template>
	<div class="comments">
		<div class="common-title clear-fix">
			<span class="title"> 用户评价 </span>
			<span class = "more"> 更多> </span>
		</div>

		<div class="user-name" v-if ="Object.keys(commons).length !== 0">
			<img :src="commons.user.avatar" alt="" class="avatar">
			<span class="name">{{commons.user.uname}}</span>
		</div>

		<div class="com-content">
			<p>{{commons.content}}</p>
		</div>

		<div class="footer">
     <span>{{commons.created | dateFormat('yy-mm-dd')}}</span>
     <span>{{commons.style}}</span>
		</div>
		<div class="commonImage clear-fix">
			<img :src="item" v-for = "(item,index) in commons.images" alt="" class = "clear-fix">
		</div>
	</div>
</template>
<script>
	export default{
		name:'Comments',
		props:{
			commons:{}
    }
	}
</script>
<style scoped>
	.comments{
		width: 100%;
		padding: 10px 0;
		background-color:#fff;
	}
	.common-title{
		width: 100%;
		height: 30px;
		line-height: 30px;
		padding-right: 10px;
		border-bottom: 1px solid #ccc
	}
	.common-title .title{
		float: left;
		font-size: 14px;
		font-weight: 600
	}
	.common-title .more{
		float: right;
		font-size: 12px;
		color: #999;
		font-weight: 600
	}
	.user-name{
		height: 40px;
		line-height: 40px;
		margin: 5px;
	}
	.user-name img{
		width: 40px;
		height: 40px;
		vertical-align: middle;
		margin-right: 10px;
		border-radius: 500%
	}
  .user-name .name{
    font-weight: 900;
    font-size: 15px;
  }
  .com-content{
  	font-size: 14px;
  }
 .footer{
 	font-size: 13px;
 	color: #999;
 	margin-top: 5px;
 }
 .footer span{
 	padding-right: 5px
 }
 .commonImage{
 	width: 100%;
 	margin:5px 2px;
 }
 .commonImage img{
 	height: 60px;
  margin:5px 3px;
 }
</style>