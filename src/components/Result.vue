<template>
  <div class="column is-12-mobile is-6-tablet is-4-desktop">
    <div class="notification">
      <small class="has-text-primary">{{ data.rut }}</small>
      <small class="is-pulled-right">{{ data.date | df('DD/MM/YY') }}</small>
      <small>
        <ul>
          <li>
            <strong>Nombres:</strong>
            {{ data.firstname }}
          </li>
          <li>
            <strong>Apellidos:</strong>
            {{ data.lastname }}
          </li>
          <li>
            <strong>Nacimiento:</strong>
            <span>{{ data.birthdate | df('DD/MM/YY') }}</span>
          </li>
          <li>
            <strong>Edad:</strong>
            <span v-show="data.birthdate">{{ data.birthdate | age }}</span>
          </li>
          <li>
            <strong>Telefono:</strong>
            <span v-show="data.phone">{{ data.phone }}</span>
          </li>
          <hr />
          <li>
            <strong>Diagnostico:</strong>
            <small class="has-text-grey">
              <ul class="ml-10">
                <li>
                  <strong>Estenosis aortica:</strong>
                  <span v-if="data.diagnosis">{{ data.diagnosis.estenosis_aortica | btm }}</span>
                </li>
                <li>
                  <strong>Insuficiencia aortica:</strong>
                  <span v-if="data.diagnosis">{{ data.diagnosis.insuficiencia_aortica | btm }}</span>
                </li>
                <li>
                  <strong>Estenosis mitral:</strong>
                  <span v-if="data.diagnosis">{{ data.diagnosis.estenosis_mitral | btm }}</span>
                </li>
                <li>
                  <strong>Insuficiencia mitral:</strong>
                  <span v-if="data.diagnosis">{{ data.diagnosis.insuficiencia_mitral | btm }}</span>
                </li>
                <li>
                  <strong>Insuficiencia tricuspidea:</strong>
                  <span v-if="data.diagnosis">{{ data.diagnosis.insuficiencia_tricuspidea | btm }}</span>
                </li>
                <li>
                  <strong>Aneurisma aorta ascendente:</strong>
                  <span v-if="data.diagnosis">{{ data.diagnosis.aneurisma_aorta_ascendente | btm }}</span>
                </li>
                <li>
                  <strong>Enfermedad valvular aortica:</strong>
                  <span v-if="data.diagnosis">{{ data.diagnosis.enfermedad_valvular_aortica | btm }}</span>
                </li>
                <li>
                  <strong>Enfermedad coronaria:</strong>
                  <span v-if="data.diagnosis">{{ data.diagnosis.enfermedad_coronaria | btm }}</span>
                </li>
                <li>
                  <strong>Enfermedad valvular mitral:</strong>
                  <span v-if="data.diagnosis">{{ data.diagnosis.enfermedad_valvular_mitral | btm }}</span>
                </li>
                <li>
                  <strong>Enfermedad aorta ascendente:</strong>
                  <span v-if="data.diagnosis">{{ data.diagnosis.enfermedad_aorta_ascendente | btm }}</span>
                </li>
                <li>
                  <strong>Miocardiopatia hipertrofica obst:</strong>
                  <span
                    v-if="data.diagnosis"
                  >{{ data.diagnosis.miocardiopatia_hipertrofica_obstructiva | btm }}</span>
                </li>
                <li>
                  <strong>Comunicación interauricular:</strong>
                  <span v-if="data.diagnosis">{{ data.diagnosis.comunicacion_interauricular | btm }}</span>
                </li>
                <li>
                  <strong>Comunicación interventricular:</strong>
                  <span
                    v-if="data.diagnosis"
                  >{{ data.diagnosis.comunicacion_interventricular | btm }}</span>
                </li>
                <li>
                  <strong>Pericardico constrictiva:</strong>
                  <span v-if="data.diagnosis">{{ data.diagnosis.pericardico_constrictiva | btm }}</span>
                </li>
                <li>
                  <strong>Ductus arteriosus persistente:</strong>
                  <span
                    v-if="data.diagnosis"
                  >{{ data.diagnosis.ductus_arteriosus_persistente | btm }}</span>
                </li>
                <li>
                  <strong>Otros:</strong>
                  <span v-if="data.diagnosis">
                    <truncate
                      class="truncate"
                      clamp="...mas"
                      :length="20"
                      less="... menos"
                      :text="data.diagnosis.otros || ''"
                    ></truncate>
                  </span>
                </li>
              </ul>
            </small>
          </li>
        </ul>
      </small>
      <div class="mb-20">
        <b-button size="is-small" @click="details()" class="is-pulled-right">Detalles</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import truncate from "vue-truncate-collapsed";
import RResultModal from "@/components/modals/ResultModal.vue";

export default {
  components: { truncate },
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  methods: {
    details() {
      this.$buefy.modal.open({
        parent: this,
        component: RResultModal,
        scroll: "keep",
        props: { id: this.data._id }
      });
    }
  }
};
</script>

<style  lang="sass" scoped>
hr
  margin: 0.5rem 0
.truncate
  display: inline-block
</style>