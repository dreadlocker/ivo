import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import {
  about,
  projects,
  contacts,
} from '@/assets/routesPath.js';

// TODO: da smenq imeto na saita(tova koeto se vijda v tab na brayzura) - package.json => name
// TODO: animaciqta na logoto da se restartira pri klik na vseki ot osnovnite tabove

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: about,
        name: 'About',
        component: () => import('@/components/About.vue')
      },
      {
        path: projects,
        name: 'Projects',
        component: () => import('@/components/Projects.vue')
      },
      {
        path: contacts,
        name: 'Contacts',
        component: () => import('@/components/Contacts.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
