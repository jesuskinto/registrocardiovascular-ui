const age = {};

const mls2Años = mls => mls / 31536000000;
const años2Meses = años => años * 12;
const meses2Dias = meses => meses * 30.4167;
const dias2Horas = dias => dias * 24;

const calcularEdad = fecha_nac => {
  const nacimiento = new Date(fecha_nac);
  const hoy = new Date();
  const diferencia = hoy - nacimiento;

  const años = mls2Años(diferencia);
  if (años >= 1) {
    return `${parseInt(años)} Años`;
  }

  const meses = años2Meses(años);
  if (meses >= 1) {
    return `${parseInt(meses)} Meses`;
  }

  const dias = meses2Dias(meses);
  if (dias >= 1) {
    return `${parseInt(dias)} Días`;
  }

  const horas = dias2Horas(dias);
  return `${parseInt(horas)} Horas`;
};

age.install = function (Vue) {
  Vue.filter("age", fecha_nac => {
    return calcularEdad(fecha_nac)
  });
};

export default age;