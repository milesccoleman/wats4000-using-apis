import Vue from 'vue'
import Router from 'vue-router'
import Rhymesaurus from '@/components/Rhymesaurus'
import OtherComponent from '@/components/OtherComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Rhymesaurus',
      component: Rhymesaurus
      },
      {
      path: '/OtherComponent',
      name: 'OtherComponent',
      component: OtherComponent
    }
  ]
})
