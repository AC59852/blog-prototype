import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Posts from '../views/Posts.vue'
import PostSpecific from '../views/PostSpecific.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/discover',
    name: 'posts',
    component: Posts
  },
  {
    path: '/post/:uid',
    name: 'post-specific',
    component: PostSpecific
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
