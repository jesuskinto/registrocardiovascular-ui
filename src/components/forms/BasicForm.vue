<template>
  <div>
    <ValidationObserver ref="form">
      <ValidationProvider rules="required" v-slot="{ errors }">
        <b-field label="RUT" :type="errors[0] && 'is-danger'" :message="errors[0]">
          <b-input type="number" v-model="form.rut" placeholder="RUT" />
        </b-field>
      </ValidationProvider>
      <b-field grouped>
        <ValidationProvider rules="required" v-slot="{ errors }" class="mr-12">
          <b-field label="Nombres" :type="errors[0] && 'is-danger'" :message="errors[0]" expanded>
            <b-input type="text" v-model="form.firstname" placeholder="Nombres" />
          </b-field>
        </ValidationProvider>
        <ValidationProvider rules="required" v-slot="{ errors }">
          <b-field label="Apellidos" :type="errors[0] && 'is-danger'" :message="errors[0]" expanded>
            <b-input type="text" v-model="form.lastname" placeholder="Apellidos" required />
          </b-field>
        </ValidationProvider>
      </b-field>
      <b-field grouped>
        <b-field label="Fecha nacimiento" expanded>
          <b-datepicker v-model="form.birthdate" placeholder="Tu fecha de nacimiento" editable />
        </b-field>
        <b-field label="Edad" expanded>
          <b-input type="text" :value="form.birthdate | age " placeholder="Tu edad" disabled />
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
          <b-input type="text" v-model="form.weight" placeholder="Tu peso" />
        </b-field>
        <b-field label="IMC" expanded>
          <b-input type="text" v-model="form.imc" placeholder="Tu IMC" />
        </b-field>
        <b-field label="Talla" expanded>
          <b-input type="text" v-model="form.size" placeholder="Tu talla" />
        </b-field>
      </b-field>
      <b-field label="Dirección">
        <b-input type="textarea" v-model="form.address" placeholder="Tu dirección" />
      </b-field>
      <hr />
      <div class="buttons">
        <b-button @click="cancel">Restaurar</b-button>
        <b-button type="is-primary" @click="save">Guardar</b-button>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import formMixin from "@/mixins/formMixin.vue";
export default {
  mixins: [formMixin],
  props: {
    modal: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: null
    },
    newU: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        rut: null,
        firstname: null,
        lastname: null,
        birthdate: null,
        account: null,
        phone: null,
        weight: null,
        size: null,
        address: null
      },
      url: "patients"
    };
  },
  methods: {
    setData(data) {
      delete data._id;
      for (let d in data) {
        if (d === "birthdate") {
          this.form[d] = new Date(data[d]);
          continue;
        }
        this.form[d] = data[d];
      }
    }
  }
};
</script>
