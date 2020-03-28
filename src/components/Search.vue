<template>
  <div>
    <div class="columns is-mobile is-multiline">
      <div class="column is-10-mobile is-10-tablet is-10-desktop" slot="trigger">
        <b-field>
          <b-input
            v-model="text"
            placeholder="Buscar..."
            type="search"
            icon="magnify"
            v-on:keyup.native.enter="search"
            rounded
            expanded
          ></b-input>
          <p class="control">
            <b-button
              class="button is-warning"
              aria-controls="filter"
              @click="showFilter = !showFilter"
              rounded
            >Filtros</b-button>
          </p>
          <p class="control">
            <b-button class="button is-primary" rounded @click="search">Buscar</b-button>
          </p>
        </b-field>
      </div>
      <div class="column is-2-mobile is-2-tablet is-2-desktop">
        <b-button class="button is-primary" rounded expanded @click="newClient">Nuevo</b-button>
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
      showFilter: false,
      text: null
    };
  },
  methods: {
    search() {
      this.$emit("search", this.text);
    },
    newClient() {
      this.$buefy.modal.open({
        parent: this,
        component: RBasicRegistration,
        hasModalCard: true,
        trapFocus: true,
        props: { newU: true }
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