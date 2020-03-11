<template>
  <div>
    <b-field label="Notas Operatorias" expanded>
      <b-input
        rows="30"
        type="textarea"
        v-model="form.notas_operatorias"
        placeholder="Notas Operatorias"
      />
    </b-field>
    <hr />
    <div class="buttons">
      <b-button>Cancelar</b-button>
      <b-button type="is-primary">Guardar</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        notas_operatorias: null
      }
    };
  }
};
</script>
