<template>
  <div class="card">
    <section>
      <b-field label="Usuario">
        <b-input v-model="username"></b-input>
      </b-field>
      <b-field label="Contraseña">
        <b-input v-model="password" type="password"></b-input>
      </b-field>
      <b-button @click="login">Iniciar</b-button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasError: true,
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$router.push("/");
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
</style>