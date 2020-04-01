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
      @change="getData({}, $event)"
      :total="pagination.total"
      :current.sync="pagination.current"
      :per-page="pagination.perPage"
      :rounded="true"
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
        total: null,
        current: null,
        perPage: null
      }
    };
  },
  methods: {
    async getData(params = {}, page = 1) {
      const loading = this.$buefy.loading.open();
      params.page = page;
      try {
        const res = await Rest.get("patients", { params });
        this.results = res.data.data;
        this.pagination.total = res.data.count;
        this.pagination.current = res.data.page;
        this.pagination.perPage = res.data.resPerPage;
        loading.close();
      } catch ({ response: res }) {
        this.$danger(res && res.data ? res.data.message : "Server Error");
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