import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/category',
    name: 'Category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/category/Category.vue')
  },
  {
    path: '/shop-cart',
    name: 'ShopCart',
    component: () => import('../views/shopcart/ShopCart.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/profile/Profile')
  },
  {
    path: '/detail/:iid',
    component: () => import('../views/detail/Detail')
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}


export default router
