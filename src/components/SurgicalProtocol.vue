<template>
  <div class="column is-12-mobile is-12-tablet is-6-desktop">
    <div class="card">
      <b-button
        type="is-small"
        v-show="$route.name === 'surgical-protocols'"
        @click="newProtocol"
        class="is-pulled-right"
        rounded
      >editar</b-button>
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
      <p>
        <truncate
          clamp="...mas"
          :length="200"
          less="... menos"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam modi consequuntur quis porro explicabo iusto repudiandae odio nobis, assumenda iure totam, eum expedita quae at nostrum excepturi corrupti unde et. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam modi consequuntur quis porro explicabo iusto repudiandae odio nobis, assumenda iure totam, eum expedita quae at nostrum excepturi corrupti unde et.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam modi consequuntur quis porro explicabo iusto repudiandae odio nobis, assumenda iure totam, eum expedita quae at nostrum excepturi corrupti unde et."
        ></truncate>
      </p>
    </div>
  </div>
</template>

<script>
import RProtocoloQuirurgicoModal from "@/components/modals/ProtocoloQuirurgicoModal.vue";
import truncate from "vue-truncate-collapsed";
export default {
  components: {
    truncate
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
</style>