const arrayToString = {};

arrayToString.install = function fb(Vue) {
    Vue.filter("ats", a => (a.map(i => ` ${i}`).toString()));
};

export default arrayToString;
