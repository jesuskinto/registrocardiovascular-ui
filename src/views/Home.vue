<template>
  <div class="home">
    <r-search @search="text = $event" />
    <r-results :text="text" />
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
  },
  data() {
    return {
      text: null
    };
  }
};
</script>