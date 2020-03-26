<script>
export default {
  methods: {
    async save() {
      const susses = await this.$refs.form.validate();
      if (!susses) return;
      if (this.newU) return this.create();
      else return this.update();
    },
    cancel() {
      if (this.modal) this.$emit("close-modal");
      else this.getData();
    }
  }
};
</script>