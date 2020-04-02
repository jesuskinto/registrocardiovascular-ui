const dateForm = {};
import moment from "moment";

dateForm.install = function fb(Vue) {
    Vue.filter("df", date => {
        return moment(date).format('DD/MM/YY, h:mm:ss a')
    });
};



export default dateForm;
