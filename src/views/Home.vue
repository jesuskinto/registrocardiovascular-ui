<template>
  <div class="home">
    <r-search />
    <r-results />
  </div>
</template>

<script>
import RSearch from "@/components/Search.vue";
import RResults from "@/components/Results.vue";
export default {
  name: "Home",
  components: {
    RSearch,
    RResults
  }
};
</script>