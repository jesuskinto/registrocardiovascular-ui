import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Formulario from "../views/Formulario.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/formulario",
    name: "Formulario",
    component: Formulario
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
