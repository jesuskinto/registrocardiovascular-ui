<template>
  <div class="column is-12-mobile is-12-tablet is-6-desktop">
    <div class="card">
      <b-button
        type="is-small"
        v-show="$route.name === 'surgical-protocols'"
        @click="newProtocol({ id: data._id })"
        class="is-pulled-right"
        rounded
      >editar</b-button>
      <ul>
        <li>
          <strong>Fecha:</strong>
          {{ data.date | df}}
        </li>
        <li>
          <strong>Primer Cirujano:</strong>
          {{ data.firstSurgeon }}
        </li>
        <li>
          <strong>Otros Cirujanos:</strong>
          <ul>
            <li v-for="other in data.othersSurgeons" :key="other">{{ other }}</li>
          </ul>
        </li>
      </ul>
      <br />
      <strong>Nota Operatoria:</strong>
      <p>
        <truncate clamp="...mas" :length="200" less="... menos" :text="data.operativeNotes"></truncate>
      </p>
    </div>
  </div>
</template>

<script>
import newProtocolMixin from "@/mixins/newProtocolMixin.vue";

import truncate from "vue-truncate-collapsed";
export default {
  mixins: [newProtocolMixin],
  components: {
    truncate
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    getData() {
      this.$emit("getdata");
    }
  }
};
</script>

<style lang="sass" scoped>
.card
  padding: 20px
</style>