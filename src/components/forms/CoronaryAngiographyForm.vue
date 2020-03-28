<template>
  <div>
    <b-field label="Fecha">
      <b-datepicker
        v-model="form.fecha"
        :month-names="$monthNames"
        :day-names="$dayNames"
        placeholder="Fecha"
      />
    </b-field>
    <b-field label="Vasos enfermos" expanded>
      <b-select v-model="form.vasos_enfermos" placeholder="Vasos enfermos" expanded>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="ninguno">Ninguno</option>
      </b-select>
    </b-field>
    <b-field grouped>
      <b-field label="Enfermedad de TCI" expanded>
        <b-input
          type="text"
          v-model="form.enfermedad_tci"
          placeholder="Enfermedad de TCI %"
          expanded
        />
      </b-field>
      <b-field label="ADA PROXIMAL" expanded>
        <b-input type="text" v-model="form.ada_proximal" placeholder="ADA PROXIMAL %" expanded />
      </b-field>
      <b-field label="FEVI" expanded>
        <b-input type="text" v-model="form.fevi" placeholder="FEVI %" expanded />
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Angioplastia</h4>
    <b-field grouped>
      <b-field label="Presente" expanded>
        <b-switch v-model="form.angioplastia.presente">{{ form.angioplastia.presente | btm }}</b-switch>
      </b-field>
      <b-field label="PCTA" expanded>
        <b-select v-model="form.angioplastia.pcta" placeholder="PCTA" expanded>
          <option value="metalico">Metálico</option>
          <option value="farmacoactivo">Fármaco activo</option>
          <option value="ninguno">Ninguno</option>
        </b-select>
      </b-field>
    </b-field>
    <hr />
    <b-field grouped>
      <b-field label="Arterias revascularizadas" expanded>
        <b-input
          type="textarea"
          v-model="form.arterias_revascularizadas"
          placeholder="Arterias revascularizadas"
        />
      </b-field>
      <b-field label="Complicaciones" expanded>
        <b-input type="textarea" v-model="form.complicaciones" placeholder="Complicaciones" />
      </b-field>
    </b-field>
    <b-field label="Coronariografias Previas">
      <b-input type="textarea" v-model="form.nro_coronariografias" placeholder="Coronariografias" />
    </b-field>
    <b-field label="Clopidogrel">
      <b-switch v-model="form.clopidogrel">{{ form.clopidogrel | btm }}</b-switch>
    </b-field>
    <b-field label="Ticagrelor">
      <b-switch v-model="form.ticagrelor">{{ form.ticagrelor | btm }}</b-switch>
    </b-field>
    <hr />
    <div class="buttons">
      <b-button @click="cancel">Cancelar</b-button>
      <b-button type="is-primary" @click="save">Guardar</b-button>
    </div>
  </div>
</template>

<script>
import formMixin from "@/mixins/formMixin.vue";
export default {
  mixins: [formMixin],
  data() {
    return {
      form: {
        fecha: null,
        vasos_enfermos: null,
        enfermedad_tci: null,
        ada_proximal: null,
        fevi: null,
        arterias_revascularizadas: null,
        complicaciones: null,
        nro_coronariografias: null,
        clopidogrel: false,
        ticagrelor: false,
        angioplastia: {
          presente: null,
          pcta: null
        }
      },
      url: "coronary-angiography"
    };
  },
  methods: {
    setData(data) {
      delete data._id;
      delete data.patient;
      for (let d in data) {
        if (d === "fecha") {
          this.form[d] = new Date(data[d]);
          continue;
        }
        this.form[d] = data[d];
      }
    }
  }
};
</script>