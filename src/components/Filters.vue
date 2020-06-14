<template>
  <div class="notification">
    <button type="button" class="modal-close" @click="$emit('close')"></button>
    <div>
      <div class="columns">
        <div class="column">
          <b-field grouped expanded>
            <b-field label="Primer Cirujano:" expanded>
              <b-select
                size="is-small"
                v-model="filters.firstSurgeon"
                placeholder="Primer Cirujano"
                rounded
                expanded
              >
                <option
                  v-for="surgeon in surgeons"
                  :value="surgeon._id"
                  :key="surgeon._id"
                >{{ `${surgeon.firstname} ${surgeon.lastname}`}}</option>
                <option :value="null">Ninguno</option>
              </b-select>
            </b-field>
            <b-button
              class="mt-31"
              size="is-small"
              rounded
              @click="newSurgeon({ newU: true })"
              icon-right="account-plus"
            >Crear cirujano</b-button>
          </b-field>
        </div>
        <div class="column">
          <b-field grouped expanded>
            <b-field label="Rango de fechas:" expanded>
              <b-datepicker
                placeholder="Click para seleccionar..."
                v-model="filters.datesRange"
                range
                size="is-small"
                rounded
                expanded
              ></b-datepicker>
            </b-field>
            <b-button
              class="mt-31"
              size="is-small"
              rounded
              @click="filters.datesRange = []"
              icon-right="close"
            ></b-button>
          </b-field>
        </div>
        <div class="column"></div>
      </div>
      <div class="columns">
        <div class="column">
          <label class="label">Diagnostico:</label>
          <div class="field">
            <b-checkbox
              v-model="filters.diagnosis.estenosis_aortica"
              size="is-small"
            >Estenosis aortica</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="filters.diagnosis.insuficiencia_aortica"
              size="is-small"
            >Insuficiencia aortica</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="filters.diagnosis.estenosis_mitral"
              size="is-small"
            >Estenosis mitral</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="filters.diagnosis.insuficiencia_mitral"
              size="is-small"
            >Insuficiencia mitral</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="filters.diagnosis.insuficiencia_tricuspidea"
              size="is-small"
            >Insuficiencia tricuspidea</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="filters.diagnosis.aneurisma_aorta_ascendente"
              size="is-small"
            >Aneurisma aorta ascendente</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="filters.diagnosis.enfermedad_valvular_aortica"
              size="is-small"
            >Enfermedad valvular aortica</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="filters.diagnosis.enfermedad_coronaria"
              size="is-small"
            >Enfermedad coronaria</b-checkbox>
          </div>
        </div>
        <div class="column">
          <label class="label">
            <br />
          </label>
          <div class="field">
            <b-checkbox
              v-model="filters.diagnosis.enfermedad_valvular_mitral"
              size="is-small"
            >Enfermedad valvular mitral</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="filters.diagnosis.enfermedad_aorta_ascendente"
              size="is-small"
            >Enfermedad aorta ascendente</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="filters.diagnosis.miocardiopatia_hipertrofica_obstructiva"
              size="is-small"
            >Miocardiopatia hipertrofica obstructiva</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="filters.diagnosis.comunicacion_interauricular"
              size="is-small"
            >Comunicación interauricular</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="filters.diagnosis.comunicacion_interventricular"
              size="is-small"
            >Comunicación interventricular</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="filters.diagnosis.pericardico_constrictiva"
              size="is-small"
            >Pericardico constrictiva</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="filters.diagnosis.ductus_arteriosus_persistente"
              size="is-small"
            >Ductus arteriosus persistente</b-checkbox>
          </div>
        </div>
        <div class="column">
          <label class="label">Complicaciones:</label>
          <div class="field">
            <b-checkbox
              v-model="filters.diagnosis.accidente_cerebro_vascular"
              size="is-small"
            >Accidente cerebro vascular</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox v-model="filters.diagnosis.delirio" size="is-small">Delirio</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="filters.diagnosis.fibrilacion_auricular"
              size="is-small"
            >Fibrilación auricular</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="filters.diagnosis.infeccion_herida_superficial"
              size="is-small"
            >Infección de herida superficial</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox v-model="filters.diagnosis.muerte" size="is-small">Muerte</b-checkbox>
          </div>
        </div>
      </div>
    </div>
    <div class="button-wrapper">
      <b-button
        size="is-small"
        rounded
        type="is-warning"
        class="is-pulled-right ml-10"
        @click="filter"
      >Filtrar</b-button>
      <b-button size="is-small" rounded class="is-pulled-right" @click="restart">Restaurar</b-button>
    </div>
  </div>
</template>

<script>
import surgeonMixin from "@/mixins/surgeonMixin.vue";

export default {
  mixins: [surgeonMixin],
  data() {
    return {
      filters: {
        firstSurgeon: null,
        datesRange: [],
        diagnosis: {
          estenosis_aortica: null,
          insuficiencia_aortica: null,
          estenosis_mitral: null,
          insuficiencia_mitral: null,
          insuficiencia_tricuspidea: null,
          aneurisma_aorta_ascendente: null,
          enfermedad_valvular_aortica: null,
          enfermedad_coronaria: null,
          enfermedad_valvular_mitral: null,
          enfermedad_aorta_ascendente: null,
          miocardiopatia_hipertrofica_obstructiva: null,
          comunicacion_interauricular: null,
          comunicacion_interventricular: null,
          pericardico_constrictiva: null,
          ductus_arteriosus_persistente: null
        }
      }
    };
  },
  methods: {
    restart() {
      this.filters.firstSurgeon = null;
      this.filters.datesRange = [];
      for (let d in this.filters.diagnosis) this.filters.diagnosis[d] = null;
      this.$emit("restart");
    },
    filter() {
      let { diagnosis, ...filters } = this.filters;
      for (let d in diagnosis) if (diagnosis[d]) filters[d] = diagnosis[d];
      this.$emit("filters", filters);
    }
  }
};
</script>

<style lang="sass" scoped>
.options
  height: 26px
  button
    margin-left: 5px

.notification
  background: white
  border: whitesmoke solid 2px

.button-wrapper
  bottom: 20px
  position: relative

.modal-close
  position: absolute
  background: gray
</style>