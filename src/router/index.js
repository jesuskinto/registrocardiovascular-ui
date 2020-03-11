import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Formulario from "../views/Formulario.vue";
import RBasicForm from "@/components/forms/BasicForm.vue";
import RAppForm from "@/components/forms/APPForm.vue";
import RCoronografiaForm from "@/components/forms/CoronografiaForm.vue";
import REscocardiogramaForm from "@/components/forms/EscocardiogramaForm.vue";
import RCirugiaCardiacaForm from "@/components/forms/CirugiaCardiacaForm.vue";
import RCirculacionExtracorporeaForm from "@/components/forms/CirculacionExtracorporeaForm.vue";
import ROtrosForm from "@/components/forms/OtrosForm.vue";
import RProtocoloQuirugicoForm from "@/components/forms/ProtocoloQuirugicoForm.vue";
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
      },
      {
        path: "protocolo-quirurgico",
        name: "protocolo-quirurgico",
        component: RProtocoloQuirugicoForm
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
