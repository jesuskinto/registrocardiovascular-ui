<template>
  <div>
    <b-button
      v-show="$route.name === 'surgical-protocols'"
      type="is-primary is-mb-5"
      rounded
      @click="newProtocol"
    >Nuevo</b-button>
    <div class="columns is-mobile is-multiline">
      <r-surgical-protocol v-for="a in results" :key="a"></r-surgical-protocol>
    </div>
  </div>
</template>

<script>
import RProtocoloQuirurgicoModal from "@/components/modals/ProtocoloQuirurgicoModal.vue";
import RSurgicalProtocol from "@/components/SurgicalProtocol";

export default {
  components: {
    RSurgicalProtocol
  },
  data() {
    return {
      results: [1, 2, 3, 4]
    };
  },
  methods: {
    newProtocol() {
      this.$buefy.modal.open({
        parent: this,
        component: RProtocoloQuirurgicoModal,
        hasModalCard: true,
        trapFocus: true
      });
    }
  }
};
</script>

<style lang="sass" scoped>
button
  margin-bottom: 15px
</style>
