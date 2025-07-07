import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Skill from './views/Skill.vue'
import Service from './views/Service.vue'
import Blog from './views/Blog.vue'
import Contact from './views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/skill', component: Skill },
  { path: '/service', component: Service },
  { path: '/blog', component: Blog },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
