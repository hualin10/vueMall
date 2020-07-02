import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Card = () => import('views/card/Card')
const Profile = () => import('views/profile/Profile')
const Detail = () => import('views/detail/Detail')

//创建路由映射
const routes = [
  {
  	path:'/',
  	redirect:'/home'
  },
  {
  	path:'/home',
  	component:Home
  },
  {
  	path:'/category',
  	component:Category
  },
  {
  	path:'/card',
  	component:Card
  },
  {
  	path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
]
const router = new VueRouter({
	routes,
	mode:'history'
})
export default router