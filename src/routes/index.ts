import { createRouter, createWebHistory } from "vue-router";
import EditorDicionarioPageVue from "../pages/EditorDicionarioPage/Listagem.vue";

import EditorDicionarioPageFormVue from "../pages/EditorDicionarioPage/Form.vue";

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
    {
      name: "editor-dicionario.form",
      path: "/editor-dicionario/:uuid/form/",
      component: EditorDicionarioPageFormVue,
      props: true,
    },
  ],
});

export default router;
