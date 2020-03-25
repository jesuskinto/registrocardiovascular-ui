<template>
  <div class="card">
    <section>
      <b-field label="Correo" :type="email.type" :message="email.message">
        <b-input
          v-model="form.email"
          type="email"
          icon="email"
          placeholder="tucorreo@email.com"
          maxlength="30"
        ></b-input>
      </b-field>
      <b-field label="Contraseña" :type="password.type" :message="password.message">
        <b-input
          v-model="form.password"
          type="password"
          icon="key"
          placeholder="*********"
          password-reveal
          v-on:keyup.native.enter="login"
        ></b-input>
      </b-field>
      <b-button @click="login">Iniciar</b-button>
    </section>
  </div>
</template>

<script>
import Rest from "@/services/rest";

export default {
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
        this.$danger(res.data && res.data.message);
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