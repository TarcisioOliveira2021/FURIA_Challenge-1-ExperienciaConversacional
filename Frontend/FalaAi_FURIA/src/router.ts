import { createRouter, createWebHistory } from 'vue-router';
import ChatUI from './ChatScreen.vue';
import Index from './IndexScreen.vue';


const routes = [
    { path: '/chat', component: ChatUI },
    { path: '/', component: Index }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export {router};