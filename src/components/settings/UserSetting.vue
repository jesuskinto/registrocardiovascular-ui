<template>
  <div>
    <b-button type="is-primary" rounded @click="newUser({ newU: true })">Nuevo</b-button>
    <hr />
    <b-table :data="users" v-if="users.length">
      <template slot-scope="props">
        <b-table-column field="firstname" label="Nombres">{{ props.row.firstname }}</b-table-column>
        <b-table-column field="lastname" label="Apellidos">{{ props.row.lastname }}</b-table-column>
        <b-table-column field="email" label="Correo">{{ props.row.email }}</b-table-column>
        <b-table-column field="edit">
          <b-button class="is-small ml-10" @click="newUser({ id: props.row._id})">Editar</b-button>
          <b-button
            type="is-danger ml-10"
            class="is-small"
            @click="removeUser(props.row._id)"
          >Eliminar</b-button>
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
import UserMixin from "@/mixins/userMixin.vue";
import Rest from "@/services/rest";
import RUserModal from "@/components/modals/UserModal.vue";

export default {
  mixins: [UserMixin],
  data() {
    return {
      users: []
    };
  },
  methods: {
    newUser({ id = null, newU = false }) {
      const modal = this.$buefy.modal.open({
        parent: this,
        component: RUserModal,
        hasModalCard: true,
        trapFocus: true,
        props: { id, newU }
      });
      modal.$on("close", () => {
        this.getData();
      });
    },
    async removeUser(id) {
      const loading = this.$buefy.loading.open();
      try {
        await Rest.delete(`users/${id}`);
        this.getData();
        this.$success("Usuario eliminado");
        loading.close();
      } catch ({ response: res }) {
this.$goLogin(res);
        this.$danger((res && res.data) ? res.data.message : "Server Error");
        loading.close();
      }
    },
    async getData() {
      try {
        const res = await Rest.get("users");
        const users = res.data.data;
        this.users = users.filter(user => user._id !== this.getUserID()._id);
      } catch ({ response: res }) {
this.$goLogin(res);
        this.$danger((res && res.data) ? res.data.message : "Server Error");
      }
    }
  },
  mounted() {
    this.getData();
  }
};
</script>