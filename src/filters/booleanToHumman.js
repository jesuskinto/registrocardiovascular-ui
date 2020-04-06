const booleanToHumman = {};

booleanToHumman.install = function fb(Vue) {
  Vue.filter("btm", bool => (bool ? " Sí" : " Nó"));
};

export default booleanToHumman;
