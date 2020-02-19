<template>
  <div id="app">
    <r-header />
    <router-view class="view" />
  </div>
</template>

<script>
import RHeader from "@/components/layout/RHeader.vue";
export default {
  components: {
    RHeader
  }
};
</script>

<style lang="sass">
.padding-10
  padding: 10px

.padding-30
  padding: 30px

#app
  padding: 30px

.view
  max-width: 800px
  margin: 0 auto
</style>
