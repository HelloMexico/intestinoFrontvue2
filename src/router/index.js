import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import isAuthenticatedGuard from './auth-guard';

Vue.use(VueRouter);

const routes = [

  {
    path: '/',
    name: 'login',
    beforeEnter: isAuthenticatedGuard,
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    beforeEnter: isAuthenticatedGuard,
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/crear',
    name: 'crear',
    beforeEnter: isAuthenticatedGuard,
    component: () => import(/* webpackChunkName: "about" */ '../views/CrearPlanView.vue'),  },
  {
    path: '/consultar',
    name: 'consultar',
    beforeEnter: isAuthenticatedGuard,
    component: () => import(/* webpackChunkName: "about" */ '../views/ConsultaPlanView.vue'),
  },
  { 
    path: '/preg',
    name: 'preg',
    beforeEnter: isAuthenticatedGuard,
    component: () => import(/* webpackChunkName: "about" */ '../views/PreguntasFrecView.vue'),
  },
  {
    path: '/perfil',
    name: 'perfil',
    beforeEnter: isAuthenticatedGuard,
    component: () => import(/* webpackChunkName: "about" */ '../views/PerfilView.vue'),
  },
  {
    path: '/olvidar',
    name: 'olvida',
    // beforeEnter: isAuthenticatedGuard,
    component: () => import(/* webpackChunkName: "about" */ '../views/OlvidarPasswordView.vue')
  },
  {
    path: '/nuevo',
    name: 'nuevo',
    // beforeEnter: isAuthenticatedGuard,
    component: () => import(/* webpackChunkName: "about" */ '../views/NuevoPasswordView.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
