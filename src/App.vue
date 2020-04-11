<template>
  <div id="app">
    <div id="page-container">
      <div class="content-wrapper">
        <r-header />
        <transition name="fade">
          <router-view class="view" />
        </transition>
      </div>
      <r-footer />
    </div>
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

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #00d1b2;
$primary-invert: findColorInvert($primary);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>


<style lang="sass">
#page-container
  position: relative
  min-height: 100vh

.padding-10
  padding: 10px

.padding-30
  padding: 30px

.mt-31
  margin-top: 31px

.mt-10
  margin-top: 10px

.ml-10
  margin-left: 10px

.mr-12
  margin-right: 12px

.mt-15
  margin-top: 15px

.mb-10
  margin-bottom: 10px

.mb-20
  margin-bottom: 20px

.mb-5
  margin-bottom: 5px


.content-wrapper
  padding: 30px
  padding-bottom: 2.5rem

.view
  max-width: 1024px
  margin: 0 auto

.fade-enter-active, .fade-leave-active
  transition: opacity .3s

.fade-enter, .fade-leave-active
  opacity: 0
</style>
