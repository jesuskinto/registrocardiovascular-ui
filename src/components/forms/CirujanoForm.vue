<template>
  <div>
    <b-field grouped expanded>
      <b-field label="Nombre" expanded>
        <b-input type="text" v-model="form.firstname" placeholder="Nombre" />
      </b-field>
      <b-field label="Apellido" expanded>
        <b-input type="text" v-model="form.lastname" placeholder="Apellido" />
      </b-field>
    </b-field>
    <div v-show="!modal">
      <hr />
      <div class="buttons">
        <b-button>Restablecer</b-button>
        <b-button type="is-primary">Guardar</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modal: {
      type: Boolean,
      default: false
    },
    id: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      form: {
        firstname: null,
        lastname: null
      }
    };
  }
};
</script>