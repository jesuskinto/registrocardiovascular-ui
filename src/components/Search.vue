<template>
  <div>
    <div class="columns is-mobile is-multiline">
      <div class="column is-9-mobile is-9-tablet is-9-desktop" slot="trigger">
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
              icon-right="filter"
              rounded
            ></b-button>
          </p>
          <p class="control">
            <b-button class="button is-primary" rounded @click="search">Buscar</b-button>
          </p>
        </b-field>
      </div>
      <div class="column is-3-mobile is-3-tablet is-3-desktop">
        <b-button class="button is-primary" rounded expanded @click="newClient">Nuevo</b-button>
      </div>
      <div class="column is-full">
        <b-collapse aria-id="filter" :open.sync="showFilter">
          <r-filters @close="showFilter = !showFilter" @filters="filter" @restart="clear" />
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
      this.$emit("search", { text: this.text, filters: this.filters });
    },
    filter(e) {
      this.filters = e;
      this.search();
    },
    clear() {
      this.filters = {};
      this.text = null;
      this.search();
    },
    newClient() {
      const modal = this.$buefy.modal.open({
        parent: this,
        component: RBasicRegistration,
        hasModalCard: true,
        trapFocus: true,
        props: { newU: true }
      });
      modal.$on("close", () => this.search());
    }
  }
};
</script>

<style lang="sass" scoped>
.columns 
    margin-top: 30px
    margin-bottom: 30px
</style>