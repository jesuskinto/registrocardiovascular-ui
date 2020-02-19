<template>
  <div>
    <div class="columns is-mobile is-multiline">
      <div class="column is-6-mobile is-4-tablet" v-for="a in [0,1,2,3,4,5,6,7,8,9,10]" :key="a">
        <div class="card">Hola Mundo</div>
      </div>
    </div>
    <hr />
    <b-pagination
      :total="total"
      :current.sync="current"
      :range-before="rangeBefore"
      :range-after="rangeAfter"
      :order="order"
      :size="size"
      :simple="isSimple"
      :rounded="isRounded"
      :per-page="perPage"
      :icon-prev="prevIcon"
      :icon-next="nextIcon"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 200,
      current: 10,
      perPage: 10,
      rangeBefore: 3,
      rangeAfter: 1,
      order: "",
      size: "",
      isSimple: false,
      isRounded: false,
      prevIcon: "chevron-left",
      nextIcon: "chevron-right"
    };
  }
};
</script>

<style lang="sass" scoped>
.card
    padding: 20px
</style>