const arrayToString = {};

arrayToString.install = function fb(Vue) {
    Vue.filter("ats", a => {
        if (!a) return ''
        return a.map(i => ` ${i}`).toString()
    });
};

export default arrayToString;
