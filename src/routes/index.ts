import { createRouter, createWebHistory } from "vue-router";
import EditorDicionarioPageVue from "../pages/EditorDicionarioPage/Listagem.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/HomePage.vue"),
    },
    {
      path: "/editor-dicionario",
      name: "editor-dicionario",
      component: EditorDicionarioPageVue,
    },
  ],
});

export default router;
