<template>
  <form action>
    <div class="modal-card" style="width: 640">
      <header class="modal-card-head">
        <p class="modal-card-title">Registro</p>
      </header>
      <section class="modal-card-body">
        <r-surgical-protocol-form :id="id" :modal="true" v-on:close-modal="$parent.close()" />
      </section>
    </div>
  </form>
</template>

<script>
import RSurgicalProtocolForm from "@/components/forms/SurgicalProtocolForm.vue";

export default {
  props: {
    id: {
      default: null,
      type: String
    }
  },
  components: {
    RSurgicalProtocolForm
  }
};
</script>