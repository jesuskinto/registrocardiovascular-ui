<template>
  <div>
    <div class="columns is-mobile is-multiline">
      <div class="column is-6-mobile is-4-tablet is-3-desktop" v-for="a in results" :key="a">
        <div class="card">Hola Mundo</div>
      </div>
    </div>
    <div v-show="results.length === 0">
      <div class="notification">
        <div class="content">
          <h3>No hay resultados</h3>
          <p>
            Intente ampliar su criterio de busqueda o
            <br />registre al paciente
          </p>
        </div>
      </div>
    </div>
    <hr />
    <b-pagination
      :total="pagination.total"
      :current.sync="pagination.current"
      :range-before="pagination.rangeBefore"
      :range-after="pagination.rangeAfter"
      :order="pagination.order"
      :size="pagination.size"
      :simple="pagination.isSimple"
      :rounded="pagination.isRounded"
      :per-page="pagination.perPage"
      :icon-prev="pagination.prevIcon"
      :icon-next="pagination.nextIcon"
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
      results: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      pagination: {
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
      }
    };
  }
};
</script>

<style lang="sass" scoped>
.card
    padding: 20px
</style>