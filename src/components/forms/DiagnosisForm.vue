<template>
  <div>
    <div class="columns is-mobile is-multiline">
      <b-field class="column is-narrow" label="Estenosis aortica" expanded>
        <b-switch v-model="form.estenosis_aortica">{{ form.estenosis_aortica | btm }}</b-switch>
      </b-field>
      <b-field class="column is-narrow" label="Insuficiencia aortica" expanded>
        <b-switch v-model="form.insuficiencia_aortica">{{ form.insuficiencia_aortica | btm }}</b-switch>
      </b-field>
      <b-field class="column is-narrow" label="Estenosis mitral" expanded>
        <b-switch v-model="form.estenosis_mitral">{{ form.estenosis_mitral | btm }}</b-switch>
      </b-field>
      <b-field class="column is-narrow" label="Insuficiencia mitral" expanded>
        <b-switch v-model="form.insuficiencia_mitral">{{ form.insuficiencia_mitral | btm }}</b-switch>
      </b-field>
      <b-field class="column is-narrow" label="Insuficiencia tricuspidea" expanded>
        <b-switch
          v-model="form.insuficiencia_tricuspidea"
        >{{ form.insuficiencia_tricuspidea | btm }}</b-switch>
      </b-field>
      <b-field class="column is-narrow" label="Aneurisma de aorta ascendente" expanded>
        <b-switch
          v-model="form.aneurisma_aorta_ascendente"
        >{{ form.aneurisma_aorta_ascendente | btm }}</b-switch>
      </b-field>
    </div>
    <hr />
    <h4 class="subtitle is-4">Patología combinada</h4>
    <div class="field">
      <b-checkbox v-model="form.enfermedad_valvular_aortica">Enfermedad valvular aortica</b-checkbox>
    </div>
    <div class="field">
      <b-checkbox v-model="form.enfermedad_coronaria">Enfermedad coronaria</b-checkbox>
    </div>
    <div class="field">
      <b-checkbox v-model="form.enfermedad_valvular_mitral">Enfermedad valvular mitral</b-checkbox>
    </div>
    <div class="field">
      <b-checkbox v-model="form.enfermedad_aorta_ascendente">Enfermedad de aorta ascendente</b-checkbox>
    </div>
    <hr />
    <div class="columns is-mobile is-multiline">
      <b-field class="column is-narrow" label="Miocardiopatia hipertrofica obstructiva" expanded>
        <b-switch
          v-model="form.miocardiopatia_hipertrofica_obstructiva"
        >{{ form.miocardiopatia_hipertrofica_obstructiva | btm }}</b-switch>
      </b-field>
      <b-field class="column is-narrow" label="Comunicación Interauricular" expanded>
        <b-switch
          v-model="form.comunicacion_interauricular"
        >{{ form.comunicacion_interauricular | btm }}</b-switch>
      </b-field>
      <b-field class="column is-narrow" label="Comunicación interventricular" expanded>
        <b-switch
          v-model="form.comunicacion_interventricular"
        >{{ form.comunicacion_interventricular | btm }}</b-switch>
      </b-field>
      <b-field class="column is-narrow" label="Pericardico a constrictiva" expanded>
        <b-switch v-model="form.pericardico_constrictiva">{{ form.pericardico_constrictiva | btm }}</b-switch>
      </b-field>
      <b-field class="column is-narrow" label="Ductus arteriosus persistente" expanded>
        <b-switch
          v-model="form.ductus_arteriosus_persistente"
        >{{ form.ductus_arteriosus_persistente | btm }}</b-switch>
      </b-field>
    </div>
    <hr />
    <b-field label="Otro" expanded>
      <b-input type="textarea" v-model="form.otros">{{ form.otros | btm }}</b-input>
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
        ductus_arteriosus_persistente: null,
        otros: null
      },
      url: "diagnosis"
    };
  }
};
</script>
