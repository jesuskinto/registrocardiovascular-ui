<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Registro Medico"
        />
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div" v-show="!isLogin()">
        <div class="buttons">
          <a class="button is-light" @click="logout">Log out</a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$router.push("/login");
    },
    isLogin() {
      return this.$route.name === "Login";
    }
  }
};
</script>
