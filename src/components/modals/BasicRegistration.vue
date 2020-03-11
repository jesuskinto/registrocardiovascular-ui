<template>
  <form action>
    <div class="modal-card" style="width: 640">
      <header class="modal-card-head">
        <p class="modal-card-title">Registro</p>
      </header>
      <section class="modal-card-body">
        <r-basic-form />
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">Cancelar</button>
        <button class="button is-primary" @click="makeClient">Crear</button>
      </footer>
    </div>
  </form>
</template>

<script>
import RBasicForm from "@/components/forms/BasicForm.vue";

export default {
  components: {
    RBasicForm
  },
  methods: {
    makeClient() {
      this.$parent.close();
      this.$router.push({ name: "basic" });
    }
  }
};
</script>