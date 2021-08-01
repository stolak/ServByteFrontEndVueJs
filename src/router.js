import { createWebHistory, createRouter } from "vue-router";
import Dashboard from './components/Dashboard.vue';
import ServiceDetails from './components/ServiceDetails.vue';

const routes =  [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: Dashboard
  },
  {
    name: 'details',
    path: '/details/:id',
    component: ServiceDetails
},
  {
    path: "/transactions",
    alias: "/transactions",
    name: "transactions",
    component: () => import("./components/Transaction")
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
