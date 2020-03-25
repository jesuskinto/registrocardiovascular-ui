<template>
  <div>
    <b-button type="is-primary is-mb-5" rounded @click="newProtocol">Nuevo</b-button>
    <div class="columns is-mobile is-multiline">
      <div
        class="column is-6-mobile is-6-desktop"
        v-for="a in results"
        :key="a"
        @click="newProtocol"
      >
        <div class="card">
          <ul>
            <li>
              <strong>Fecha:</strong> 12/02/1996
            </li>
            <li>
              <strong>Primer Cirujano:</strong> Marcos Durand
            </li>
            <li>
              <strong>Otros Cirujanos:</strong>
              <ul>
                <li>Felix Durand</li>
                <li>Francis Durand</li>
              </ul>
            </li>
          </ul>
          <br />
          <strong>Nota Operatoria:</strong>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla cum nostrum sapiente a obcaecati. Praesentium ipsa, cum inventore omnis architecto rerum magni debitis vel blanditiis natus eum qui, assumenda commodi?</p>
          <br />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla cum nostrum sapiente a obcaecati. Praesentium ipsa, cum inventore omnis architecto rerum magni debitis vel blanditiis natus eum qui, assumenda commodi?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RProtocoloQuirurgicoModal from "@/components/modals/ProtocoloQuirurgicoModal.vue";

export default {
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
.card
  padding: 20px

button
  margin-bottom: 15px
</style>
