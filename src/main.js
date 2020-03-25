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
  Loading,
  Dropdown,
  Icon,
  Tabs,
  Table,
  Taginput,
  Toast
} from "buefy";
import "buefy/dist/buefy.css";

import App from "@/App.vue";
import "@/registerServiceWorker";
import router from "@/router";
import booleanToHumman from "@/filters/booleanToHumman";
import age from "@/filters/age";

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
Vue.use(Dropdown);
Vue.use(Icon);
Vue.use(Tabs);
Vue.use(Table);
Vue.use(Taginput);
Vue.use(Toast);
Vue.use(booleanToHumman);
Vue.use(age);
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
