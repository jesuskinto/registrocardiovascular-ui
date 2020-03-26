<template>
  <div>
    <b-select size="is-small" v-model="filters.firstSurgeon" placeholder="Primer Cirujano" rounded>
      <option
        v-for="surgeon in surgeons"
        :value="surgeon._id"
        :key="surgeon._id"
      >{{ `${surgeon.firstname} ${surgeon.lastname}`}}</option>
      <option :value="null">Ninguno</option>
    </b-select>
  </div>
</template>

<script>
import surgeonMixin from "@/mixins/surgeonMixin.vue";

export default {
  mixins: [surgeonMixin],
  data() {
    return {
      filters: {
        firstSurgeon: null
      }
    };
  },
  methods: {
    clean() {
      this.filters.firstSurgeon = null;
    }
  }
};
</script>

<style lang="sass" scoped>
.options
  height: 26px
  button
    margin-left: 5px
</style>