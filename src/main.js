import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

import App from "@/App.vue";
import "@/registerServiceWorker";
import router from "@/router";
import booleanToHumman from "@/filters/booleanToHumman";

Vue.use(Buefy);
Vue.use(booleanToHumman);
Vue.config.productionTip = false;

Vue.prototype.$monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];

Vue.prototype.$dayNames = ["Do", "L", "Ma", "Mi", "Ju", "Vi", "Sa"];

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
