const dateForm = {};
import moment from "moment";

dateForm.install = function fb(Vue) {
    Vue.filter("df", (date, format) => {
        if (!date) return ''
        return (" " + moment(date).format(format || 'DD/MM/YY, h:mm:ss a'))
    });
};



export default dateForm;
