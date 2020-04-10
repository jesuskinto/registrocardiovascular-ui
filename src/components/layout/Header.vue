<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="has-text-primary logo" @click="$router.push({ name: 'Home' })">
        <img src="@/assets/heart.png" alt="Registro" />
        <h1>Registro Cardiovascular</h1>
      </a>
    </div>
    <div class="navbar-menu">
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

<style scoped>
.navbar-menu {
  display: block !important;
}

.logo > h1 {
  display: inline-block;
  position: absolute;
  top: 20%;
  left: 42px;
}

.logo > img {
  height: 50px;
}
</style>
