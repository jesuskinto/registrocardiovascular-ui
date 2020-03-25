<template>
  <div>
    <b-select
      size="is-small"
      v-model="filters.primer_cirujano"
      placeholder="Primer Cirujano"
      rounded
    >
      <option
        v-for="cirujano in cirujanos"
        :value="cirujano.id"
        :key="cirujano.id"
      >{{ `${cirujano.user.first_name} ${cirujano.user.last_name}`}}</option>
      <option :value="null">Ninguno</option>
    </b-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        primer_cirujano: null
      },
      cirujanos: [
        {
          id: 11,
          user: {
            first_name: "Marcos",
            last_name: "Durand"
          }
        },
        {
          id: 12,
          user: {
            first_name: "Felix",
            last_name: "Durand"
          }
        },
        {
          id: 13,
          user: {
            first_name: "Francis",
            last_name: "Durand"
          }
        },
        {
          id: 14,
          user: {
            first_name: "Francisco",
            last_name: "Durand"
          }
        }
      ]
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