import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Categories from '../views/Categories.vue'
import Contact from '../views/Contact.vue'
import ErrorPage from '../views/ErrorPage.vue'
import CarInfo from '../components/cars/CarInfo.vue'
import CarCategory from '../components/cars/CarCategory.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/car/:cartype',
    name: 'homefromside',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/:catchAll(.*)',
    name: 'ErrorPage',
    component: ErrorPage
  },
  {
    path:'/home/car/:cartype',
    name:"car_category",
    component:CarCategory
  },
  {
    path:'/home/car/:carname/:carid',
    name:"CarInfo",
    component:CarInfo
  }

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  console.log(to);
  document.title=`${process.env.VUE_APP_TITLE} | ${to.name} | ${to.params.pagetitle}`
  console.log(from);
  next()
 })

export default router
