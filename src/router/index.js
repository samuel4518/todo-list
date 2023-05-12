import { createRouter, createWebHashHistory } from 'vue-router'
import MyList from '../pages/MyList.vue'
import UnFinished from '../pages/UnFinished.vue'
import MyFinished from '../pages/MyFinished.vue'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MyList
  },
  {
    path: '/MyList',
    name: 'MyList',
    component: MyList
  },
  {
    path: '/unFinished',
    name: 'UnFinished',
    component: UnFinished
  },
  {
    path: '/MyFinished',
    name: 'MyFinished',
    component: MyFinished
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
