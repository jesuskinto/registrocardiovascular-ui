<template>
  <form action>
    <div class="modal-card" style="width: 640">
      <header class="modal-card-head">
        <p class="modal-card-title">Registro</p>
      </header>
      <section class="modal-card-body">
        <r-cirujano-form :modal="true" :id="id" />
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">Cancelar</button>
        <button class="button is-primary" @click="$parent.close()">Crear</button>
      </footer>
    </div>
  </form>
</template>

<script>
import RCirujanoForm from "@/components/forms/CirujanoForm.vue";

export default {
  props: {
    id: {
      default: null,
      type: Number
    }
  },
  components: {
    RCirujanoForm
  }
};
</script>