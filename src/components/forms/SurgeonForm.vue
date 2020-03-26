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
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import Rest from "@/services/rest";
import formMixin from "@/mixins/formMixin.vue";

extend("required", {
  ...required,
  message: "El campo es requerido"
});

export default {
  mixins: [formMixin],
  components: {
    ValidationProvider,
    ValidationObserver
  },
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
      }
    };
  },
  methods: {
    async getData() {
      if (this.newU) return;
      const loading = this.$buefy.loading.open();
      try {
        const res = await Rest.get(`surgeon/${this.id}`);
        const { firstname, lastname } = res.data.data;
        this.form.firstname = firstname;
        this.form.lastname = lastname;
        loading.close();
      } catch ({ response: res }) {
        this.$danger(res.data && res.data.message);
        loading.close();
      }
    },
    async update() {
      const loading = this.$buefy.loading.open();
      try {
        await Rest.patch(`surgeon/${this.id}`, this.form);
        this.$success("Información actualizada!");
        loading.close();
        this.$emit("close-modal");
      } catch ({ response: res }) {
        this.$danger(res.data && res.data.message);
        loading.close();
      }
    },
    async create() {
      const loading = this.$buefy.loading.open();
      try {
        await Rest.post(`surgeon`, this.form);
        this.$success("Cirujano creado!");
        loading.close();
        this.$emit("close-modal");
      } catch ({ response: res }) {
        this.$danger(res.data && res.data.message);
        loading.close();
      }
    }
  },
  mounted() {
    this.getData();
  }
};
</script>