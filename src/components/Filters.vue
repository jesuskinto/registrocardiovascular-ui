<template>
  <div class="notification">
    <div class="content">
      <h3>Filtros</h3>
      <b-select size="is-small" v-model="filters.primer_cirujano" placeholder="Primer Cirujano">
        <option value="marcos">Marcos Durand</option>
        <option value="felix">Felix Durand</option>
        <option value="francisco">Francisco Durand</option>
        <option :value="null">Ninguno</option>
      </b-select>
      <div class="options">
        <div class="is-pulled-right">
          <b-button size="is-small" class="button" @click="clean">Limpiar</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        primer_cirujano: null
      }
    };
  },
  methods: {
    clean() {
      this.filters.primer_cirujano = null;
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