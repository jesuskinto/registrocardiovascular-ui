<template>
  <form action>
    <div class="modal-card">
      <div class="notification">
        <div class="content">
          <h3>No hay resultados</h3>
          <p>
            Intente ampliar su criterio de busqueda o
            <br />registre al paciente
          </p>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    id: {
      default: null,
      type: Number
    }
  }
};
</script>