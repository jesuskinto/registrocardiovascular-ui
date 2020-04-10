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
    path: "/form/:id",
    name: "Formulario",
    component: Formulario,
    children: [
      {
        path: "basic",
        name: "basic",
        component: () => import("@/components/forms/BasicForm")
      },
      {
        path: "pph",
        name: "pph",
        component: () => import("@/components/forms/PPHForm")
      },
      {
        path: "coronary-angiography",
        name: "coronary-angiography",
        component: () => import("@/components/forms/CoronaryAngiographyForm")
      },
      {
        path: "transthoracic-echocardiogram",
        name: "transthoracic-echocardiogram",
        component: () => import("@/components/forms/TransthoracicEchocardiogramForm")
      },
      {
        path: "heart-surgery",
        name: "heart-surgery",
        component: () => import("@/components/forms/HeartSurgeryForm")
      },
      {
        path: "extracorporeal-circulation",
        name: "extracorporeal-circulation",
        component: () => import("@/components/forms/ExtracorporealCirculationForm")
      },
      {
        path: "diagnosis",
        name: "diagnosis",
        component: () => import("@/components/forms/DiagnosisForm")
      },
      {
        path: "others",
        name: "others",
        component: () => import("@/components/forms/OthersForm")
      },
      {
        path: "surgical-protocols",
        name: "surgical-protocols",
        component: () => import("@/components/SurgicalProtocols")
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
    component: () => import("@/views/Settings.vue")
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

router.scrollBehavior = () => ({ x: 0, y: 0 });

export default router;
