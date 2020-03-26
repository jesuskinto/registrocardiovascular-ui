<template>
  <form action>
    <div class="modal-card" style="width: 640">
      <header class="modal-card-head">
        <p class="modal-card-title">Registro</p>
      </header>
      <section class="modal-card-body">
        <r-surgeon-form :modal="true" :id="id" :newU="newU" v-on:close-modal="$parent.close()" />
      </section>
    </div>
  </form>
</template>

<script>
import RSurgeonForm from "@/components/forms/SurgeonForm.vue";

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
    RSurgeonForm
  }
};
</script>