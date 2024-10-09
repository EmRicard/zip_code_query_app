import { createRouter, type RouteRecordRaw, createWebHashHistory } from "vue-router";

const TelaLogin = ;

const rotas: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/cadastro",
        name: "cadastro",
        component: () => import("../views/Cadastro.vue"),
    }
];

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas,
});

export default roteador;