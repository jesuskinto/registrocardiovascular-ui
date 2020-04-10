<script>
import Rest from "@/services/rest";
import RSurgeonModal from "@/components/modals/SurgeonModal.vue";

export default {
  data() {
    return {
      surgeons: []
    };
  },
  methods: {
    newSurgeon({ id = null, newU = false }) {
      const modal = this.$buefy.modal.open({
        parent: this,
        component: RSurgeonModal,
        hasModalCard: true,
        trapFocus: true,
        props: { id, newU }
      });
      modal.$on("close", () => {
        this.getSurgeon();
      });
    },
    async getSurgeon() {
      const loading = this.$buefy.loading.open();
      try {
        const res = await Rest.get("surgeons");
        loading.close();
        this.surgeons = res.data.data;
      } catch ({ response: res }) {
        this.$goLogin(res);
        loading.close();
        this.$danger(res && res.data ? res.data.message : "Server Error");
      }
    }
  },
  mounted() {
    this.getSurgeon();
  }
};
</script>