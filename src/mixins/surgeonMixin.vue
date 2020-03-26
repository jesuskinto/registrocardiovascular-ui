<script>
import Rest from "@/services/rest";

export default {
  data() {
    return {
      surgeons: []
    };
  },
  methods: {
    async getData() {
      const loading = this.$buefy.loading.open();
      try {
        const res = await Rest.get("surgeon");
        loading.close();
        this.surgeons = res.data.data;
      } catch ({ response: res }) {
        loading.close();
        this.$danger(res.data && res.data.message);
      }
    }
  },
  mounted() {
    this.getData();
  }
};
</script>