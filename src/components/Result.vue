<template>
  <div class="column is-12-mobile is-6-tablet is-4-desktop">
    <div class="notification" @click="openResult">
      <div class="content">
        <h3>Pedro Perez</h3>
        <p>
          Intente ampliar su criterio de busqueda o
          <br />registre al paciente
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import RResultModal from "@/components/modals/ResultModal.vue";

export default {
  methods: {
    openResult() {
      this.$buefy.modal.open({
        parent: this,
        component: RResultModal,
        hasModalCard: true,
        trapFocus: true
      });
    }
  }
};
</script>