<template>
	<TabBar>
    <TabBarItem path = "/home" activeColor = '#ff5777'>
      <img slot = "tabbar-item_img" src = "~assets/img/tabbar/home.svg">
      <img slot = "tabbar-item_img_active" src = "~assets/img/tabbar/home_active.svg">
      <div slot ="tabbar-item_text">首页</div>
    </TabBarItem>
    <TabBarItem path = "/category">
      <img slot = "tabbar-item_img" src = "~assets/img/tabbar/category.svg">
      <img slot = "tabbar-item_img_active" src = "~assets/img/tabbar/category_active.svg">
      <div slot ="tabbar-item_text">分类</div>
    </TabBarItem>
    <TabBarItem path = "/card">
      <img slot = "tabbar-item_img" src = "~assets/img/tabbar/shopcard.svg">
      <img slot = "tabbar-item_img_active" src = "~assets/img/tabbar/shopcard_active.svg">
      <div slot ="tabbar-item_text">购物车</div>
    </TabBarItem>
    <TabBarItem path = "/profile">
      <img slot = "tabbar-item_img" src = "~assets/img/tabbar/profile.svg">
      <img slot = "tabbar-item_img_active" src = "~assets/img/tabbar/profile_active.svg">
      <div slot ="tabbar-item_text">我的</div>
    </TabBarItem>
  </TabBar>
</template>
<script>
	import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  export default{
  	name:'MainTabBar',
  	components:{
  		TabBar,
  		TabBarItem
  	}
  }
</script>