<template>
  <form action>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">¿Desea Eliminar ?</p>
      </header>
      <section class="modal-card-body">
        <p>¿Desea eliminar toda la informacion del paciente {{ rut }}, ¡esta acción es permanente!</p>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">Cancelar</button>
        <button class="button is-danger" @click="accept">Aceptar</button>
      </footer>
    </div>
  </form>
</template>

<script>
import Rest from "@/services/rest";
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    rut: {
      required: true
    }
  },
  methods: {
    async accept() {
      const loading = this.$buefy.loading.open();
      try {
        await Rest.delete(`patients/${this.id}`);
        this.$success("Paciente eliminado");
        this.$emit("patientdeleted");
        loading.close();
        this.$parent.close();
      } catch ({ response: res }) {
        this.$goLogin(res);
        this.$danger(res && res.data ? res.data.message : "Server Error");
        loading.close();
        this.$parent.close();
      }
    }
  }
};
</script>