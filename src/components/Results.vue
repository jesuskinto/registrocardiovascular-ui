<template>
  <div>
    <div class="columns is-mobile is-multiline">
      <r-result v-for="result in results" :key="result._id" :data="result" />
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
import Rest from "@/services/rest";
import RResult from "@/components/Result.vue";

export default {
  components: {
    RResult
  },
  data() {
    return {
      results: [],
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
  },
  methods: {
    async getData() {
      const loading = this.$buefy.loading.open();
      try {
        const res = await Rest.get("patients");
        this.results = res.data.data;
        loading.close();
      } catch ({ response: res }) {
        this.$danger(res.data && res.data.message);
        loading.close();
      }
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="sass" scoped>
.card
    padding: 20px
</style>