const objectIdToDate = {};
import ObjectID from "bson-objectid";

objectIdToDate.install = function fb(Vue) {
    Vue.filter("od", (date) => {
        if (!date) return ''
        return ObjectID(date).getTimestamp();
    });
};



export default objectIdToDate;
