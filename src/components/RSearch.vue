<template>
  <div class="columns">
    <div class="column">
      <b-field>
        <b-input
          placeholder="Buscar..."
          type="search"
          icon="magnify"
          rounded
          expanded
          size="is-large"
        ></b-input>
        <p class="control">
          <b-button class="button is-primary" rounded size="is-large">Buscar</b-button>
        </p>
      </b-field>
    </div>
    <div class="column is-narrow">
      <b-button class="button is-primary" rounded size="is-large" @click="newClient">Nuevo</b-button>
    </div>
  </div>
</template>

<script>
import BasicRegistration from "@/components/modals/BasicRegistration";

export default {
  methods: {
    newClient() {
      this.$buefy.modal.open({
        parent: this,
        component: BasicRegistration,
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