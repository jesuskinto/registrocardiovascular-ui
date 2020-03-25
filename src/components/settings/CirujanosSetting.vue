<template>
  <div>
    <b-button type="is-primary" rounded @click="newCirujano">Nuevo</b-button>
    <hr />
    <b-table :data="data">
      <template slot-scope="props">
        <b-table-column field="id" label="ID" numeric width="10">{{ props.row.id }}</b-table-column>
        <b-table-column field="first_name" label="Nombre">{{ props.row.first_name }}</b-table-column>
        <b-table-column field="last_name" label="Apellido">{{ props.row.last_name }}</b-table-column>
        <b-table-column field="edit">
          <b-button class="is-small ml-10" @click="newCirujano(props.row.id)">Editar</b-button>
          <b-button
            type="is-danger ml-10"
            class="is-small"
            @click="removeCirujano(props.row.id)"
          >Eliminar</b-button>
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
import RCirujanoModal from "@/components/modals/CirujanoModal.vue";

export default {
  data() {
    return {
      data: [
        {
          id: 1,
          first_name: "Jesse",
          last_name: "Simmons"
        },
        {
          id: 2,
          first_name: "John",
          last_name: "Jacobs"
        },
        {
          id: 3,
          first_name: "Tina",
          last_name: "Gilbert"
        },
        {
          id: 4,
          first_name: "Clarence",
          last_name: "Flores"
        },
        {
          id: 5,
          first_name: "Anne",
          last_name: "Lee"
        }
      ]
    };
  },
  methods: {
    newCirujano() {
      this.$buefy.modal.open({
        parent: this,
        component: RCirujanoModal,
        hasModalCard: true,
        trapFocus: true
      });
    },
    removeCirujano() {}
  }
};
</script>