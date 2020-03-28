<template>
  <div class="card">
    <section>
      <ValidationObserver v-slot="{ invalid }">
        <ValidationProvider rules="required|email" v-slot="{ errors }">
          <b-field label="Correo" :type="errors[0] && 'is-danger'" :message="errors[0]">
            <b-input
              v-model="form.email"
              type="text"
              icon="email"
              placeholder="tucorreo@email.com"
              maxlength="30"
            ></b-input>
          </b-field>
        </ValidationProvider>
        <ValidationProvider rules="required" v-slot="{ errors }">
          <b-field label="Contraseña" :type="errors[0] && 'is-danger'" :message="errors[0]">
            <b-input
              v-model="form.password"
              type="password"
              icon="key"
              placeholder="*********"
              password-reveal
              v-on:keyup.native.enter="login"
            ></b-input>
          </b-field>
        </ValidationProvider>
        <b-button class="mt-15" @click="login" :disabled="invalid || !form.email">Iniciar</b-button>
      </ValidationObserver>
    </section>
  </div>
</template>

<script>
import Rest from "@/services/rest";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { email, required } from "vee-validate/dist/rules";

extend("email", {
  ...email,
  message: "El correo no es valido"
});

extend("required", {
  ...required,
  message: "El campo es requerido"
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      email: {
        type: null,
        message: null
      },
      password: {
        type: null,
        message: null
      },
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async login() {
      const loading = this.$buefy.loading.open();
      try {
        const res = await Rest.post("auth", this.form);
        sessionStorage.setItem("token", res.data.token);
        loading.close();
        this.$success(res.data && res.data.message);
        this.$router.push("/");
      } catch ({ response: res }) {
        this.$danger(res && res.data ? res.data.message : "Server Error");
        loading.close();
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.card
    padding: 30px
    width: 400px
    margin: 0 auto
    margin-top: 18vh
    margin-bottom: 18vh
</style>