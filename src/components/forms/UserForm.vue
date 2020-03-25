<template>
  <div>
    <b-field grouped expanded>
      <b-field label="Nombre" expanded>
        <b-input type="text" v-model="form.firstname" placeholder="Nombre" />
      </b-field>
      <b-field label="Apellido" expanded>
        <b-input type="text" v-model="form.lastname" placeholder="Apellido" />
      </b-field>
    </b-field>
    <b-field label="Correo" expanded>
      <b-input type="email" v-model="form.email" placeholder="Correo" />
    </b-field>
    <hr />
    <b-field grouped expanded>
      <b-field label="Contraseña" expanded>
        <b-input type="password" v-model="form.password" placeholder="Contraseña" />
      </b-field>
      <b-field label="Repita Contraseña" expanded>
        <b-input type="password" v-model="form.password2" placeholder="Repita Contraseña" />
      </b-field>
    </b-field>
    <div v-show="!modal">
      <hr />
      <div class="buttons">
        <b-button @click="getData">Restablecer</b-button>
        <b-button type="is-primary" @click="save">Guardar</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Rest from "@/services/rest";
import UserMixin from "@/mixins/userMixin.vue";

export default {
  mixins: [UserMixin],
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
        password: null,
        password2: null
      }
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
    save() {
      if (this.newU) return this.create();
      else return this.update();
    },
    async update() {
      const loading = this.$buefy.loading.open();
      try {
        const payload = { ...this.form };
        delete payload.password2;
        if (!payload.password) delete payload.password;
        const url = `users/${this.id ? this.id : this.getUserID()._id}`;
        await Rest.patch(url, payload);
        this.$success("Información actualizada!");
        loading.close();
      } catch ({ response: res }) {
        this.$danger(res.data && res.data.message);
        loading.close();
      }
    },
    async create() {
      const loading = this.$buefy.loading.open();
      try {
        const payload = { ...this.form };
        delete payload.password2;
        if (!payload.password) delete payload.password;
        await Rest.post(`users`, payload);
        this.$success("Usuario creado!");
        loading.close();
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