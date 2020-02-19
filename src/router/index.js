import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Formulario from "../views/Formulario.vue";
import RBasicForm from "@/components/BasicForm.vue";
import RAppForm from "@/components/APPForm.vue";
import RCoronografiaForm from "@/components/CoronografiaForm.vue";
import REscocardiogramaForm from "@/components/EscocardiogramaForm.vue";
import RCirugiaCardiacaForm from "@/components/CirugiaCardiacaForm.vue";
import RCirculacionExtracorporeaForm from "@/components/CirculacionExtracorporeaForm.vue";
import ROtrosForm from "@/components/OtrosForm.vue";
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
    component: Formulario,
    children: [
      {
        path: "basic",
        name: "basic",
        component: RBasicForm
      },
      {
        path: "app",
        name: "app",
        component: RAppForm
      },
      {
        path: "coronografia",
        name: "coronografia",
        component: RCoronografiaForm
      },
      {
        path: "escocardiograma",
        name: "escocardiograma",
        component: REscocardiogramaForm
      },
      {
        path: "cirugia-cardiaca",
        name: "cirugia-cardiaca",
        component: RCirugiaCardiacaForm
      },
      {
        path: "circulacion-extracorporea",
        name: "circulacion-extracorporea",
        component: RCirculacionExtracorporeaForm
      },
      {
        path: "otros",
        name: "otros",
        component: ROtrosForm
      }
    ]
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
