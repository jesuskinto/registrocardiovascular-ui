<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="has-text-primary logo" @click="$router.push({ name: 'Home' })">
        <b-icon icon="heartbeat"></b-icon>
        <h1>Registro Cardiovascular</h1>
      </a>
    </div>
    <div class="custom-navbar">
      <div class="navbar-end" v-show="!isLogin()">
        <b-dropdown position="is-bottom-left" aria-role="menu">
          <a class="navbar-item" slot="trigger" role="button">
            <span>Menu</span>
            <b-icon icon="menu-down"></b-icon>
          </a>
          <b-dropdown-item custom aria-role="menuitem">
            Logeado como
            <b>{{ username }}</b>
          </b-dropdown-item>
          <hr class="dropdown-divider" aria-role="menuitem" />
          <!-- <b-dropdown-item value="Risk Calculator" @click="$openRiskCalculator">
            <b-icon icon="calculator"></b-icon>Risk Calculator
          </b-dropdown-item>-->
          <b-dropdown-item value="settings" @click="$router.push({ name: 'Settings' })">
            <b-icon icon="settings"></b-icon>Configuraciones
          </b-dropdown-item>
          <b-dropdown-item value="logout" aria-role="menuitem" @click="$logout">
            <b-icon icon="logout"></b-icon>Salir
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </nav>
</template>

<script>
import UserMixin from "@/mixins/userMixin.vue";

export default {
  mixins: [UserMixin],
  data() {
    return {
      username: "Pepe"
    };
  },
  methods: {
    isLogin() {
      return this.$route.name === "Login";
    }
  },
  updated() {
    this.username = this.getUserID().firstname;
  }
};
</script>

<style scoped lang="sass">
.navbar
  position: relative
  background-color: #fafafa
  margin-bottom: 25px
  .navbar-item
    padding: 0.8rem 0.75rem

.custom-navbar
  position: absolute
  right: 0
  top: 0

.logo > h1
  display: inline-block
  position: absolute
  top: 20%
  font-weight: bold
  font-size: 20px

.logo > img
  height: 50px
</style>
