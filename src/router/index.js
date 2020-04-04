import Vue from 'vue';
import VueRouter from 'vue-router';
import CheckPhone from '../views/CheckPhone.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'CheckPhone',
    component: CheckPhone,
  }
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router
