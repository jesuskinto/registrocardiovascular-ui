import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Formulario from "../views/Formulario.vue";
import Settings from "../views/Settings.vue";
import RBasicForm from "@/components/forms/BasicForm.vue";
import RAppForm from "@/components/forms/APPForm.vue";
import RCoronografiaForm from "@/components/forms/CoronografiaForm.vue";
import REscocardiogramaForm from "@/components/forms/EscocardiogramaForm.vue";
import RCirugiaCardiacaForm from "@/components/forms/CirugiaCardiacaForm.vue";
import RCirculacionExtracorporeaForm from "@/components/forms/CirculacionExtracorporeaForm.vue";
import ROtrosForm from "@/components/forms/OtrosForm.vue";
import RProtocolosQuirugicos from "@/components/ProtocolosQuirugicos.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/formulario/:id",
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
        path: "protocolos-quirurgicos",
        name: "protocolos-quirurgicos",
        component: RProtocolosQuirugicos
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings
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

async function isAuthenticated() {
  return await sessionStorage.getItem("token");
}

router.beforeEach(async (to, from, next) => {
  const auth = await isAuthenticated();
  if (to.name !== "Login" && !auth) return next({ name: "Login" });
  if (to.name === "Login" && auth) return next({ name: "Home" });
  return next();
});

export default router;
