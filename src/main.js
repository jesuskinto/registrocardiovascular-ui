import Vue from "vue";
import buefy from "buefy";

import App from "@/App.vue";
import "@/registerServiceWorker";
import router from "@/router";
import booleanToHumman from "@/filters/booleanToHumman";
import arrayToString from "@/filters/arrayToString";
import dateForm from "@/filters/dateForm";
import fullName from "@/filters/fullName";
import age from "@/filters/age";
import moment from "moment";
import objectIdToDate from "@/filters/objectIdToDate";

Vue.use(buefy, {
  defaultDateParser: (date) => moment(date, ["DD-MM-YY", "DD-MM-YYYY"]).toDate(),
  defaultDayNames: ["Do", "L", "Ma", "Mi", "Ju", "Vi", "Sa"],
  defaultMonthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  defaultFirstDayOfWeek: 1
});

Vue.use(booleanToHumman);
Vue.use(arrayToString);
Vue.use(age);
Vue.use(dateForm);
Vue.use(fullName);
Vue.use(objectIdToDate);
Vue.config.productionTip = false;

Vue.prototype.$danger = function (message) {
  Vue.prototype.$buefy.toast.open({
    duration: 2000,
    message: message,
    position: "is-top-right",
    type: "is-danger"
  });
};

Vue.prototype.$success = function (message) {
  Vue.prototype.$buefy.toast.open({
    duration: 2000,
    message: message,
    position: "is-top-right",
    type: "is-success"
  });
};

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
