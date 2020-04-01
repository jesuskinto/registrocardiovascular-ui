<script>
import RSurgicalProtocolModal from "@/components/modals/SurgicalProtocolModal.vue";

export default {
  methods: {
    newProtocol({ id = null, newU = false }) {
      const modal = this.$buefy.modal.open({
        parent: this,
        component: RSurgicalProtocolModal,
        hasModalCard: true,
        trapFocus: true,
        props: { id, newU }
      });
      modal.$on("close", () => {
        this.getData();
      });
    }
  }
};
</script>