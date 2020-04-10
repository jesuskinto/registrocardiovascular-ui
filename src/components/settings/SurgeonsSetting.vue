<template>
  <div>
    <b-button type="is-primary" rounded @click="newSurgeon({ newU: true })">Nuevo</b-button>
    <hr />
    <b-table :data="surgeons" v-if="surgeons.length">
      <template slot-scope="props">
        <b-table-column field="first_name" label="Nombres">{{ props.row.firstname }}</b-table-column>
        <b-table-column field="last_name" label="Apellidos">{{ props.row.lastname }}</b-table-column>
        <b-table-column field="edit">
          <b-button class="is-small ml-10" @click="newSurgeon({ id: props.row._id })">Editar</b-button>
          <b-button
            type="is-danger ml-10"
            class="is-small"
            @click="removeSurgeon(props.row._id)"
          >Eliminar</b-button>
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
import surgeonMixin from "@/mixins/surgeonMixin.vue";
import Rest from "@/services/rest";

export default {
  mixins: [surgeonMixin],
  methods: {
    async removeSurgeon(id) {
      const loading = this.$buefy.loading.open();
      try {
        await Rest.delete(`surgeons/${id}`);
        this.getData();
        this.$success("Cirujano eliminado");
        loading.close();
      } catch ({ response: res }) {
this.$goLogin(res);
        this.$danger((res && res.data) ? res.data.message : "Server Error");
        loading.close();
      }
    }
  }
};
</script>