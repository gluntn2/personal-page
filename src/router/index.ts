import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'
import Project from '@/views/Project/Project.vue'

import PageNotFound from '@/views/Errors/PageNotFound.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/projects/:id', name: 'Project', component: Project },
  { path: '*', name: '404', component: PageNotFound }
]

const router = new VueRouter({
  routes
})

export default router
