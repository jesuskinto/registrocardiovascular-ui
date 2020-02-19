<template>
  <div>
    <b-field label="RUT">
      <b-input type="text" v-model="form.rut" placeholder="RUT" required />
    </b-field>
    <b-field grouped>
      <b-field label="Nombres" expanded>
        <b-input type="text" v-model="form.firstname" placeholder="Nombres" required />
      </b-field>
      <b-field label="Apellidos" expanded>
        <b-input type="text" v-model="form.lastname" placeholder="Apellidos" required />
      </b-field>
    </b-field>
    <b-field grouped>
      <b-field label="Fecha nacimiento" expanded>
        <b-datepicker
          v-model="form.birthdate"
          :month-names="$monthNames"
          :day-names="$dayNames"
          placeholder="Tu fecha de nacimiento"
        />
      </b-field>
      <b-field label="Edad" expanded>
        <b-input type="text" v-model="form.age" placeholder="Tu edad" disabled />
      </b-field>
    </b-field>
    <b-field label="Cta. corriente">
      <b-input type="number" v-model="form.account" placeholder="Tu cuenta corriente" />
    </b-field>
    <b-field label="Telefono">
      <b-input type="number" v-model="form.phone" placeholder="Tu telefono" />
    </b-field>
    <b-field grouped>
      <b-field label="Peso" expanded>
        <b-input type="number" v-model="form.weight" placeholder="Tu peso" />
      </b-field>
      <b-field label="IMC" expanded>
        <b-input type="number" v-model="form.imc" placeholder="Tu IMC" />
      </b-field>
      <b-field label="Talla" expanded>
        <b-input type="number" v-model="form.size" placeholder="Tu talla" />
      </b-field>
    </b-field>
    <b-field label="Dirección">
      <b-input type="textarea" v-model="form.address" placeholder="Tu dirección" />
    </b-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        rut: null,
        firstname: null,
        lastname: null,
        birthdate: null,
        age: null,
        account: null,
        phone: null,
        weight: null,
        size: null,
        address: null
      }
    };
  }
};
</script>
