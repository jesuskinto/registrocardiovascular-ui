<template>
  <div>
    <ValidationObserver ref="form">
      <b-field grouped expanded>
        <ValidationProvider rules="required" v-slot="{ errors }" class="mr-12">
          <b-field label="Nombre" :type="errors[0] && 'is-danger'" :message="errors[0]" expanded>
            <b-input
              type="text"
              v-model="form.firstname"
              placeholder="Nombre"
              v-on:keyup.native.enter="save"
            />
          </b-field>
        </ValidationProvider>
        <ValidationProvider rules="required" v-slot="{ errors }">
          <b-field label="Apellido" :type="errors[0] && 'is-danger'" :message="errors[0]" expanded>
            <b-input
              type="text"
              v-model="form.lastname"
              placeholder="Apellido"
              v-on:keyup.native.enter="save"
            />
          </b-field>
        </ValidationProvider>
      </b-field>
      <hr />
      <div class="buttons">
        <b-button @click="cancel">{{ modal ? 'Cancelar':'Restablecer'}}</b-button>
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
        firstname: null,
        lastname: null
      },
      url: "surgeons"
    };
  },
  methods: {
    setData({ firstname, lastname }) {
      this.form.firstname = firstname;
      this.form.lastname = lastname;
    }
  }
};
</script>