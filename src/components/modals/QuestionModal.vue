<template>
  <form action>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ question.title }}</p>
      </header>
      <section class="modal-card-body">
        <p>{{ question.message }}</p>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$parent.close()">Cancelar</button>
        <button class="button is-danger" @click="accept">Aceptar</button>
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    question: {
      default: null,
      type: Object
    }
  },
  methods: {
    accept() {
      this.$parent.close();
      this.$parent.$parent.acceptModal();
    }
  }
};
</script>