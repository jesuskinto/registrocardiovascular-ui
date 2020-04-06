const fullName = {};

fullName.install = function fb(Vue) {
    Vue.filter("fullname", (people) => {
        if (!people) return '-';
        const { firstname, lastname } = people;
        return ` ${firstname} ${lastname}`
    });
};



export default fullName;
