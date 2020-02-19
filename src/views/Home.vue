<template>
  <div class="home">
    <r-search />
    <r-results />
  </div>
</template>

<script>
import RSearch from "@/components/RSearch.vue";
import RResults from "@/components/RResults.vue";
export default {
  name: "Home",
  components: {
    RSearch,
    RResults
  }
};
</script>