<script>
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, email, confirmed } from "vee-validate/dist/rules";
import Rest from "@/services/rest";

extend("required", {
  ...required,
  message: "El campo es requerido"
});

extend("confirmed", {
  ...confirmed,
  message: "La constraseña no coincide"
});

extend("email", {
  ...email,
  message: "El correo no es valido"
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  computed: {
    finishId() {
      return this.$route.params.id || this.id;
    }
  },
  methods: {
    async getData() {
      if (this.newU) return;
      const loading = this.$buefy.loading.open();
      try {
        const res = await Rest.get(`${this.url}/${this.finishId}`);
        this.setData(res.data.data);
        loading.close();
      } catch ({ response: res }) {
        this.$goLogin(res);
        this.$danger(res && res.data ? res.data.message : "Server Error");
        loading.close();
      }
    },
    async update() {
      const loading = this.$buefy.loading.open();
      const payload = this.cleanPayload();
      try {
        await Rest.patch(`${this.url}/${this.finishId}`, payload);
        this.$success("Información actualizada!");
        loading.close();
        this.$emit("close-modal");
      } catch ({ response: res }) {
        this.$goLogin(res);
        this.$danger(res && res.data ? res.data.message : "Server Error");
        loading.close();
      }
    },
    async create() {
      const loading = this.$buefy.loading.open();
      const payload = this.cleanPayload();
      try {
        await Rest.post(`${this.url}`, payload);
        this.$success("Creado!");
        loading.close();
        this.$emit("close-modal");
      } catch ({ response: res }) {
        this.$goLogin(res);
        this.$danger(res && res.data ? res.data.message : "Server Error");
        loading.close();
      }
    },
    async save() {
      const susses = this.$refs.form ? await this.$refs.form.validate() : true;
      if (!susses) {
        this.$danger("Revisar Formulario");
        return;
      }
      if (this.newU) return this.create();
      else return this.update();
    },
    cancel() {
      if (this.modal) this.$emit("close-modal");
      else this.getData();
    },
    cleanPayload() {
      const payload = {};
      for (const l in this.form)
        if (this.form[l] !== null) payload[l] = this.form[l];
      return payload;
    },
    setData(data) {
      delete data._id;
      delete data.patient;
      for (let d in data) this.form[d] = data[d];
    }
  },
  mounted() {
    this.getData();
  }
};
</script>