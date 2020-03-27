<template>
  <form action>
    <div class="modal-card">
      <div class="notification">
        <div class="content">{{ id }}</div>
        <b-button type="is-primary" class="is-small" @click="edit">Editar</b-button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    id: {
      default: null,
      type: String
    }
  },
  methods: {
    edit() {
      this.$router.push(`formulario/${this.id}/basic`);
      this.$parent.close();
    }
  }
};
</script>