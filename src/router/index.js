import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Formulario from "../views/Formulario.vue";
import Settings from "../views/Settings.vue";
import RBasicForm from "@/components/forms/BasicForm.vue";
import RPPHForm from "@/components/forms/PPHForm.vue";
import RCoronaryAngiographyForm from "@/components/forms/CoronaryAngiographyForm.vue";
import RTransthoracicEchocardiogramForm from "@/components/forms/TransthoracicEchocardiogramForm.vue";
import RHeartSurgeryForm from "@/components/forms/HeartSurgeryForm.vue";
import RExtracorporealCirculationForm from "@/components/forms/ExtracorporealCirculationForm.vue";
import ROthersForm from "@/components/forms/OthersForm.vue";
import SurgicalProtocols from "@/components/SurgicalProtocols.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/form/:id",
    name: "Formulario",
    component: Formulario,
    children: [
      {
        path: "basic",
        name: "basic",
        component: RBasicForm
      },
      {
        path: "pph",
        name: "pph",
        component: RPPHForm
      },
      {
        path: "coronary-angiography",
        name: "coronary-angiography",
        component: RCoronaryAngiographyForm
      },
      {
        path: "transthoracic-echocardiogram",
        name: "transthoracic-echocardiogram",
        component: RTransthoracicEchocardiogramForm
      },
      {
        path: "heart-surgery",
        name: "heart-surgery",
        component: RHeartSurgeryForm
      },
      {
        path: "extracorporeal-circulation",
        name: "extracorporeal-circulation",
        component: RExtracorporealCirculationForm
      },
      {
        path: "others",
        name: "others",
        component: ROthersForm
      },
      {
        path: "surgical-protocols",
        name: "surgical-protocols",
        component: SurgicalProtocols
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
