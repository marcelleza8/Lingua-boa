import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name:"home",
            component: () => import('../pages/HomePage.vue')
        },
        {
            path: '/editor-dicionario',
            name: 'editor-dicionario',
            component: () => import('../pages/EditorDicionarioPage.vue')
        }
    ]
});

export default router;
