<template>
  <div class="columns">
    <div class="column">
      <r-menu-form />
    </div>
    <div class="column is-three-quarters">
      <div class="card">
        <transition name="fade">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import RMenuForm from "@/components/Menu.vue";

export default {
  components: {
    RMenuForm
  }
};
</script>

<style lang="sass" scoped>
.fade-enter-active, .fade-leave-active
  transition: opacity .2s

.card
  padding: 20px
</style>
