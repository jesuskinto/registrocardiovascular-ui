<template>
  <form action>
    <div class="modal-card" style="width: 640">
      <header class="modal-card-head">
        <p class="modal-card-title">Registro</p>
      </header>
      <section class="modal-card-body">
        <r-user-form :modal="true" :id="id" :newU="newU" ref="userform" />
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">Cancelar</button>
        <button class="button is-primary" @click="update">Actualizar</button>
      </footer>
    </div>
  </form>
</template>

<script>
import RUserForm from "@/components/forms/UserForm.vue";

export default {
  props: {
    id: {
      default: null,
      type: String
    },
    newU: {
      default: false,
      type: Boolean
    }
  },
  components: {
    RUserForm
  },
  methods: {
    async update() {
      await this.$refs.userform.save();
      this.$parent.close();
    }
  }
};
</script>
