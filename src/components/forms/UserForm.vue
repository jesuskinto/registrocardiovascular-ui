<template>
  <div>
    <ValidationObserver ref="form">
      <b-field grouped expanded>
        <ValidationProvider rules="required" v-slot="{ errors }" class="mr-12">
          <b-field label="Nombre" :type="errors[0] && 'is-danger'" :message="errors[0]" expanded>
            <b-input type="text" v-model="form.firstname" placeholder="Nombre" />
          </b-field>
        </ValidationProvider>
        <ValidationProvider rules="required" v-slot="{ errors }">
          <b-field label="Apellido" :type="errors[0] && 'is-danger'" :message="errors[0]" expanded>
            <b-input type="text" v-model="form.lastname" placeholder="Apellido" />
          </b-field>
        </ValidationProvider>
      </b-field>
      <ValidationProvider rules="email|required" v-slot="{ errors }">
        <b-field label="Correo" :type="errors[0] && 'is-danger'" :message="errors[0]" expanded>
          <b-input v-model="form.email" type="text" placeholder="Correo" />
        </b-field>
      </ValidationProvider>
      <hr />
      <b-field grouped expanded>
        <ValidationProvider rules="confirmed:confirmation" v-slot="{ errors }">
          <b-field
            label="Contraseña"
            :type="errors[0] && 'is-danger'"
            :message="errors[0]"
            expanded
            class="mr-12"
          >
            <b-input
              type="password"
              v-model="form.password"
              placeholder="Contraseña"
              password-reveal
            />
          </b-field>
        </ValidationProvider>
        <ValidationProvider vid="confirmation" v-slot="{ errors }">
          <b-field
            label="Repita Contraseña"
            :type="errors[0] && 'is-danger'"
            :message="errors[0]"
            expanded
          >
            <b-input
              type="password"
              v-model="confirmation"
              placeholder="Repita Contraseña"
              password-reveal
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
import { confirmed, email, required } from "vee-validate/dist/rules";
import Rest from "@/services/rest";
import UserMixin from "@/mixins/userMixin.vue";
import formMixin from "@/mixins/formMixin.vue";

extend("confirmed", {
  ...confirmed,
  message: "La constraseña no coincide"
});

extend("email", {
  ...email,
  message: "El correo no es valido"
});

extend("required", {
  ...required,
  message: "El campo es requerido"
});

export default {
  mixins: [UserMixin, formMixin],
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
        lastname: null,
        email: null,
        password: null
      },
      confirmation: null
    };
  },
  methods: {
    async getData() {
      if (this.newU) return;
      const loading = this.$buefy.loading.open();
      try {
        const url = `users/${this.id ? this.id : this.getUserID()._id}`;
        const res = await Rest.get(url);
        const { firstname, lastname, email } = res.data.data;
        this.form.firstname = firstname;
        this.form.lastname = lastname;
        this.form.email = email;
        loading.close();
      } catch ({ response: res }) {
        this.$danger(res.data && res.data.message);
        loading.close();
      }
    },
    async update() {
      const loading = this.$buefy.loading.open();
      try {
        const payload = this.cleanPayload();
        const url = `users/${this.id ? this.id : this.getUserID()._id}`;
        await Rest.patch(url, payload);
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
        const payload = this.cleanPayload();
        await Rest.post(`users`, payload);
        this.$success("Usuario creado!");
        loading.close();
        this.$emit("close-modal");
      } catch ({ response: res }) {
        this.$danger(res.data && res.data.message);
        loading.close();
      }
    },
    cleanPayload() {
      const payload = { ...this.form };
      if (!payload.password) delete payload.password;
      return payload;
    }
  },
  mounted() {
    this.getData();
  }
};
</script>