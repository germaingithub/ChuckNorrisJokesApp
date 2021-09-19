import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [

  {
    path: "/chucknorrisgenerator",
    name: "ChuckNorrisGenerator",
    component: () => import("../views/ChuckHome.vue"),
  },
  {
    path: "/boxgold",
    name: "Generatorgold",
    component: () => import("../components/JokeboxGold"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router