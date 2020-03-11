import Vue from "vue";
import {
  Button,
  Input,
  Field,
  Menu,
  Modal,
  Select,
  Radio,
  Pagination,
  Navbar,
  Datepicker,
  Datetimepicker,
  Switch,
  Checkbox,
  Clockpicker,
  Collapse,
  Loading
} from "buefy";
import "buefy/dist/buefy.css";

import App from "@/App.vue";
import "@/registerServiceWorker";
import router from "@/router";
import booleanToHumman from "@/filters/booleanToHumman";

Vue.use(Button);
Vue.use(Input);
Vue.use(Field);
Vue.use(Menu);
Vue.use(Modal);
Vue.use(Select);
Vue.use(Radio);
Vue.use(Pagination);
Vue.use(Navbar);
Vue.use(Datepicker);
Vue.use(Switch);
Vue.use(Checkbox);
Vue.use(Clockpicker);
Vue.use(Datetimepicker);
Vue.use(Collapse);
Vue.use(Loading);
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
