import { createRouter, type RouteRecordRaw, createWebHashHistory } from "vue-router";


const rotas: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
    },
];

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas,
});

export default roteador;