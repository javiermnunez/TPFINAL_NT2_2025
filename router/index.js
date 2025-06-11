import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/components/Home.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../src/components/About.vue')
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;