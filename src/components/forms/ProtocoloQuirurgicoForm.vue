<template>
  <div>
    <b-field label="Fecha">
      <b-datetimepicker
        v-model="form.date"
        :month-names="$monthNames"
        :day-names="$dayNames"
        :timepicker="{ enableSeconds: true, hourFormat: '12' }"
        placeholder="Fecha"
      />
    </b-field>
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
            :value="surgeon.id"
            :key="surgeon.id"
          >{{ `${surgeon.firstname} ${surgeon.lastname}`}}</option>
          <option value="ninguno">Ninguno</option>
        </b-select>
      </b-field>
    </b-field>
    <b-field label="Nota Operatoria" expanded>
      <b-input
        rows="30"
        type="textarea"
        v-model="form.operativeNotes"
        placeholder="Nota Operatoria"
      />
    </b-field>
  </div>
</template>

<script>
import surgeonMixin from "@/mixins/surgeonMixin.vue";
export default {
  mixins: [surgeonMixin],
  data() {
    return {
      form: {
        operativeNotes: null,
        firstSurgeon: null,
        date: null,
        othersSurgeons: []
      }
    };
  }
};
</script>
