import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VChartsDemo from '../views/VChartsDemo.vue'
import G2Demo from '../views/G2.vue'
import G2DataSet from '../views/G2DataSet.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vue-charts-demo',
    name: 'VChartsDemo',
    component: VChartsDemo
  },
  {
    path: '/g2-demo',
    name: 'G2Demo',
    component: G2Demo
  },
  {
    path: '/g2-data-set',
    name: 'G2DataSet',
    component: G2DataSet
  },
]

const router = new VueRouter({
  routes
})

export default router
