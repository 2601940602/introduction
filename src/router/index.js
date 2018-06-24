import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FiltersTest from '@/pages/FiltersTest'
import ComputedTest from '@/pages/ComputedTest'
import WatchTest from '@/pages/WatchTest'
import BindClass from '@/pages/bindClass'
import ComputedSetGet from '@/pages/ComputedSetGet'
import BindClass2 from '@/pages/bindClass2'
import Index from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
    	path: '/FiltersTest',
      name: 'FiltersTest',
      component: FiltersTest
    },{
    	path: '/ComputedTest',
      name: 'ComputedTest',
      component: ComputedTest
    },{
    	path: '/WatchTest',
    	name: 'WatchTest',
    	component: WatchTest
    },{
    	path: '/BindClass',
    	name: 'BindClass',
    	component: BindClass
    },{
    	path: '/ComputedSetGet',
    	name: 'ComputedSetGet',
    	component: ComputedSetGet
    },{
    	path: '/BindClass2',
    	name: 'BindClass2',
    	component: BindClass2
    }
    ,
    {
    	path: '/Index',
    	name: 'Index',
    	component: Index
    }
  ]
})
