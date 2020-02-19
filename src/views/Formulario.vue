<template>
  <div class="columns">
    <div class="column">
      <r-menu-form />
    </div>
    <div class="column is-three-quarters">
      <div class="card">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import RMenuForm from "@/components/MenuForm.vue";

export default {
  components: {
    RMenuForm
  }
};
</script>

<style scoped>
.card {
  padding: 20px;
}
</style>
