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
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
        <option :value="null">Ninguno</option>
      </b-select>
    </b-field>
    <b-field grouped>
      <b-field label="Enfermedad de TCI" expanded>
        <b-input
          type="number"
          v-model="form.enfermedad_tci"
          placeholder="Enfermedad de TCI %"
          expanded
        />
      </b-field>
      <b-field label="ADA PROXIMAL" expanded>
        <b-input type="number" v-model="form.ada_proximal" placeholder="ADA PROXIMAL %" expanded />
      </b-field>
      <b-field label="FEVI" expanded>
        <b-input type="number" v-model="form.fevi" placeholder="FEVI %" expanded />
      </b-field>
    </b-field>
    <p class="has-text-danger">PCTA. Metálico. Fármaco activo</p>
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
    <b-field label="Nro de coronariografias">
      <b-input
        type="number"
        v-model="form.nro_coronariografias"
        placeholder="Nro de coronariografias"
      />
    </b-field>
    <b-field label="Clopidogrel">
      <b-switch v-model="form.clopidogrel">{{ form.clopidogrel | btm }}</b-switch>
    </b-field>
    <b-field label="Ticagrelor">
      <b-switch v-model="form.ticagrelor">{{ form.ticagrelor | btm }}</b-switch>
    </b-field>
    <hr />
    <div class="buttons">
      <b-button>Cancelar</b-button>
      <b-button type="is-primary">Guardar</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        fecha: null,
        vasos_enfermos: null,
        enfermedad_tci: null,
        ada_proximal: null,
        fevi: null,
        arterias_revascularizadas: "",
        complicaciones: "",
        nro_coronariografias: 0,
        clopidogrel: false,
        ticagrelor: false
      }
    };
  }
};
</script>