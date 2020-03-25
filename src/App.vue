<template>
  <div id="app">
    <div class="content-wrapper">
      <r-header />
      <router-view class="view" />
    </div>
    <r-footer />
  </div>
</template>

<script>
import RHeader from "@/components/layout/Header.vue";
import RFooter from "@/components/layout/Footer.vue";
export default {
  components: {
    RHeader,
    RFooter
  }
};
</script>

<style lang="sass">
.padding-10
  padding: 10px

.padding-30
  padding: 30px

.ml-10
  margin-left: 10px

.content-wrapper
  padding: 30px

.view
  max-width: 1024px
  margin: 0 auto
</style>
