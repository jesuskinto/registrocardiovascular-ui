<template>
  <div class="column is-12-mobile is-6-tablet is-4-desktop">
    <div class="notification">
      <small>{{ data.rut }}</small>
      <small>
        <ul>
          <li>
            <strong>Nombres:</strong>
            {{ data.firstname }}
          </li>
          <li>
            <strong>Apellidos:</strong>
            {{ data.lastname }}
          </li>
          <li>
            <strong>Edad:</strong>
            <span v-show="data.birthdate">{{ data.birthdate | edad }}</span>
          </li>
          <li>
            <strong>Telefono:</strong>
            <span v-show="data.phone">{{ data.phone }}</span>
          </li>
        </ul>
      </small>
      <div class="mb-20">
        <b-button size="is-small" @click="details()" class="is-pulled-right">Detalles</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import RResultModal from "@/components/modals/ResultModal.vue";

export default {
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  methods: {
    details() {
      this.$buefy.modal.open({
        parent: this,
        component: RResultModal,
        hasModalCard: true,
        trapFocus: true,
        props: { id: this.data._id }
      });
    }
  }
};
</script>