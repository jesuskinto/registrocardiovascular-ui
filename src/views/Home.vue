<template>
  <div class="home">
    <r-search @search="searchPatient($event)" />
    <r-results ref="refResult" />
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
  },
  methods: {
    searchPatient({ text, filters = {} }) {
      this.$refs.refResult.getData({ textSearch: text, ...filters });
    }
  }
};
</script>