import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Editor from '@/components/Editor'
import Music from '@/components/music/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    }
  ]
})
