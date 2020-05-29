import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('views/home/home')
const Category = () => import('views/category/category')
const Card = () => import('views/card/card')
const Profile = () => import('views/profile/profile')

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
  }
]
const router = new VueRouter({
	routes,
	mode:'history'
})
export default router