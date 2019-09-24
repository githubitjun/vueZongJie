import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Child from '../components/child/child.vue'
import Parent from '../components/parent/parent.vue'
import Counter from '../components/parent/counter.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/child',
      name:'Child',
      component:Child
    },
    {
      path:'/parent',
      name:'Parent',
      component:Parent
    },
    {
      path:'/counter',
      name:'Parent',
      component:Counter
    },
    {
      path:'/event',
      name:'Event',
      component:()=> import('@/components/event/event.vue')
    }
  ]
})
