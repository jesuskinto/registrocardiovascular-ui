<template>
  <div>
    <b-field label="Fecha">
      <b-datetimepicker
        v-model="form.date"
        :timepicker="{ enableSeconds: true, hourFormat: '12' }"
        placeholder="Fecha"
      />
    </b-field>
    <hr />
    <b-button
      class="mb-20"
      size="is-small"
      @click="newSurgeon({ newU: true })"
      icon-right="account-plus"
    >Crear Cirujano</b-button>
    <b-field grouped>
      <b-field label="Primer Cirujano" expanded>
        <b-select v-model="form.firstSurgeon" placeholder="Primer Cirujano" expanded>
          <option
            v-for="surgeon in surgeons"
            :value="surgeon._id"
            :key="surgeon._id"
          >{{ `${surgeon.firstname} ${surgeon.lastname}`}}</option>
          <option value="ninguno">Ninguno</option>
        </b-select>
      </b-field>
      <b-field label="Otros Cirujanos" message="Use ctrl para selección multiple" expanded>
        <b-select v-model="form.othersSurgeons" placeholder="Otros Cirujanos" multiple expanded>
          <option
            v-for="surgeon in surgeons"
            :value="surgeon._id"
            :key="surgeon._id"
          >{{ `${surgeon.firstname} ${surgeon.lastname}`}}</option>
          <option value="ninguno">Ninguno</option>
        </b-select>
      </b-field>
    </b-field>
    <hr />
    <b-field label="Nota Operatoria" expanded>
      <b-input
        rows="30"
        type="textarea"
        v-model="form.operativeNotes"
        placeholder="Nota Operatoria"
      />
    </b-field>
    <div class="buttons">
      <b-button @click="$emit('close-modal')">Cancelar</b-button>
      <b-button type="is-primary" @click="save">Guardar</b-button>
    </div>
  </div>
</template>

<script>
import surgeonMixin from "@/mixins/surgeonMixin.vue";
import Rest from "@/services/rest";

export default {
  mixins: [surgeonMixin],
  props: {
    modal: {
      default: false,
      type: Boolean
    },
    id: {
      default: null,
      type: String
    },
    newU: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      form: {
        operativeNotes: null,
        firstSurgeon: null,
        date: null,
        othersSurgeons: []
      },
      url: "surgical-protocols"
    };
  },
  computed: {
    finishId() {
      return this.$route.params.id;
    }
  },
  methods: {
    async getData() {
      if (this.newU) return;
      const loading = this.$buefy.loading.open();
      try {
        const res = await Rest.get(`${this.url}/${this.finishId}/${this.id}`);
        this.setData(res.data.data);
        loading.close();
      } catch ({ response: res }) {
        this.$danger(res && res.data ? res.data.message : "Server Error");
        loading.close();
      }
    },
    async update() {
      const loading = this.$buefy.loading.open();
      const payload = this.cleanPayload();
      try {
        await Rest.patch(`${this.url}/${this.finishId}/${this.id}`, payload);
        this.$success("Información actualizada!");
        loading.close();
        this.$emit("close-modal");
      } catch ({ response: res }) {
        this.$danger(res && res.data ? res.data.message : "Server Error");
        loading.close();
      }
    },
    async create() {
      const loading = this.$buefy.loading.open();
      const payload = this.cleanPayload();
      try {
        await Rest.post(`${this.url}/${this.finishId}`, payload);
        this.$success("Creado!");
        loading.close();
        this.$emit("close-modal");
      } catch ({ response: res }) {
        this.$danger(res && res.data ? res.data.message : "Server Error");
        loading.close();
      }
    },
    cleanPayload() {
      const payload = {};
      for (const l in this.form)
        if (this.form[l] !== null) payload[l] = this.form[l];
      return payload;
    },
    save() {
      if (this.newU) return this.create();
      else return this.update();
    },
    setData(data) {
      delete data._id;
      delete data.patient;
      for (let d in data) {
        if (d === "date") {
          this.form[d] = new Date(data[d]);
          continue;
        } else if (d === "firstSurgeon") {
          this.form[d] = data[d]._id;
          continue;
        } else if (d === "othersSurgeons") {
          this.form[d] = data[d].map(i => i._id);
          continue;
        }
        this.form[d] = data[d];
      }
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
