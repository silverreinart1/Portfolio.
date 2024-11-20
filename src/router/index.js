// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Portfolio from '../components/Portfolio.vue';
import About from '/src/components/About.vue';
import Talk from '/src/components/talk.vue';
import Page from '/src/components/page.vue';
import services from '/src/components/services.vue';


const routes = [
  { path: '/portfolio', component: Portfolio },
  { path: '/about', component: About },
  { path: '/talk', component: Talk},
  { path: '/page', component: Page},
  { path: '/services', component: services},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
