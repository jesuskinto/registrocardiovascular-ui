<template>
  <div>
    <div class="columns is-multiline">
      <div class="column" slot="trigger">
        <b-field>
          <b-input placeholder="Buscar..." type="search" icon="magnify" rounded expanded></b-input>
          <p class="control">
            <b-button
              class="button is-warning"
              aria-controls="filter"
              @click="showFilter = !showFilter"
              rounded
            >Filtros</b-button>
          </p>
          <p class="control">
            <b-button class="button is-primary" rounded>Buscar</b-button>
          </p>
        </b-field>
      </div>
      <div class="column is-narrow">
        <b-button class="button is-primary" rounded @click="newClient">Nuevo</b-button>
      </div>
      <div class="column is-full">
        <b-collapse aria-id="filter" :open.sync="showFilter">
          <r-filters />
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import RBasicRegistration from "@/components/modals/BasicRegistrationModal";
import RFilters from "@/components/Filters";

export default {
  components: {
    RFilters
  },
  data() {
    return {
      showFilter: false
    };
  },
  methods: {
    newClient() {
      this.$buefy.modal.open({
        parent: this,
        component: RBasicRegistration,
        hasModalCard: true,
        trapFocus: true
      });
    }
  }
};
</script>

<style lang="sass" scoped>
.columns 
    margin-top: 30px
    margin-bottom: 30px
</style>