<template>
  <div>
    <b-field grouped>
      <b-field label="Diabetes mellitus" expanded>
        <b-select v-model="form.diabetes" placeholder="Diabetes mellitus" expanded>
          <option value="nir">NIR</option>
          <option value="ir">IR</option>
          <option value="ninguno">Ninguno</option>
        </b-select>
      </b-field>
      <b-field label="Enfermedad cerebro vascular" expanded>
        <b-select
          v-model="form.enfermedad_cerebro_vascular"
          placeholder="Enfermedad cerebro vascular"
          expanded
        >
          <option value="isquemica">Isquemica</option>
          <option value="hemorragica">Hemorragica</option>
          <option value="ninguno">Ninguno</option>
        </b-select>
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Enfermedad renal</h4>
    <b-field grouped>
      <b-field label="Tipo" expanded>
        <b-select v-model="form.enfermedad_renal.tipo" placeholder="Enfermedad renal" expanded>
          <option value="aguda">Aguda</option>
          <option value="cronica">Cronica</option>
          <option value="ninguno">Ninguno</option>
        </b-select>
      </b-field>
      <b-field label="Estadio" expanded>
        <b-select v-model="form.enfermedad_renal.estadio" placeholder="Estadio" expanded>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="ninguno">Ninguno</option>
        </b-select>
      </b-field>
      <b-field label="Dialisis" expanded>
        <b-select v-model="form.enfermedad_renal.dialisis" placeholder="Dialisis" expanded>
          <option value="peritoneal">Peritoneal</option>
          <option value="hemodiálisis">Hemodiálisis</option>
          <option value="ninguno">Ninguno</option>
        </b-select>
      </b-field>
    </b-field>
    <hr />
    <div class="columns">
      <div class="column">
        <b-field label=" Hipertensión Arterial" expanded>
          <b-switch v-model="form.hipertencion">{{ form.hipertencion | btm }}</b-switch>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Asma" expanded>
          <b-switch v-model="form.asma">{{ form.asma | btm }}</b-switch>
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="Enfermedad arterial periferica" expanded>
          <b-switch
            v-model="form.enfermedad_arterial_periferica"
          >{{ form.enfermedad_arterial_periferica | btm }}</b-switch>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Enfermedad pulmonar obstructiva crónica" expanded>
          <b-switch
            v-model="form.enfermedad_pulmonar_obstructiva_cronica"
          >{{ form.enfermedad_pulmonar_obstructiva_cronica | btm }}</b-switch>
        </b-field>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <b-field label="Enfermedad carotidea" expanded>
          <b-switch v-model="form.enfermedad_carotidea">{{ form.enfermedad_carotidea | btm }}</b-switch>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Tabaquismo" expanded>
          <b-switch v-model="form.tabaquismo">{{ form.tabaquismo | btm }}</b-switch>
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="Alcohol" expanded>
          <b-switch v-model="form.alcohol">{{ form.alcohol | btm }}</b-switch>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Uso de drogas" expanded>
          <b-switch v-model="form.drogas">{{ form.drogas | btm }}</b-switch>
        </b-field>
      </div>
    </div>
    <hr />
    <h4 class="subtitle is-4">Cancer</h4>
    <b-field grouped>
      <b-field label="Tipo">
        <b-input type="text" v-model="form.cancer.tipo" placeholder="Tipo de cancer" />
      </b-field>
      <b-field label="Localización" expanded>
        <b-input
          type="textarea"
          v-model="form.cancer.localizacion"
          placeholder="Localización del cancer"
        />
      </b-field>
    </b-field>
    <hr />
    <b-field label="Endocarditis">
      <b-select v-model="form.endocarditis" placeholder="Endocarditis" expanded>
        <option value="mitral">Mitral</option>
        <option value="tricuspide">Tricuspide</option>
        <option value="aortica">Aortica</option>
        <option value="pulmonar">Pulmonar</option>
        <option value="ninguno">Ninguno</option>
      </b-select>
    </b-field>
    <div class="columns">
      <div class="column">
        <b-field label="Enfermedad hepatica">
          <b-switch v-model="form.enfermedad_hepatica">{{ form.enfermedad_hepatica | btm }}</b-switch>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Apnea del sueño">
          <b-switch v-model="form.apnea_del_sueno">{{ form.apnea_del_sueno | btm }}</b-switch>
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="Inmunosupresion">
          <b-switch v-model="form.inmunosupresion">{{ form.inmunosupresion | btm }}</b-switch>
        </b-field>
      </div>
      <div class="column">
        <b-field label="Radiación mediastinal">
          <b-switch v-model="form.radiacion_mediastinal">{{ form.radiacion_mediastinal | btm }}</b-switch>
        </b-field>
      </div>
    </div>
    <b-field label="Alergia a medicamentos" expanded>
      <b-input type="textarea" v-model="form.alergia_medicamentos" placeholder="Cuales" />
    </b-field>
    <b-field label="Cirugías previas" expanded>
      <b-input type="textarea" v-model="form.cirugias_previas" placeholder="Cuales" />
    </b-field>
    <b-field grouped>
      <b-field label="Fibrilación auricular" expanded>
        <b-select v-model="form.fibrilacion_auricular" placeholder="Fibrilación auricular" expanded>
          <option value="aguda">Aguda</option>
          <option value="cronica">Cronica</option>
          <option value="taco">TACO</option>
          <option value="ninguno">Ninguno</option>
        </b-select>
      </b-field>
      <b-field label="Flutter auricular" expanded>
        <b-switch v-model="form.flutter_auricular">{{ form.flutter_auricular | btm }}</b-switch>
      </b-field>
    </b-field>
    <b-field grouped>
      <b-field label="Arritmia Ventriculares" expanded>
        <b-select
          v-model="form.arritmia_ventriculares"
          placeholder="Arritmia Ventriculares"
          expanded
        >
          <option value="esv">ESV</option>
          <option value="tv">TV</option>
          <option value="fv">FV</option>
          <option value="ninguno">Ninguno</option>
        </b-select>
      </b-field>
      <b-field label="Bloqueo AV" expanded>
        <b-select v-model="form.bloqueo_av.grado" placeholder="Bloqueo AV" expanded>
          <option value="primer_grado">Primer grado</option>
          <option value="segundo_grado">Segundo grado</option>
          <option value="tercer_grado">Tercer grado</option>
          <option value="ninguno">Ninguno</option>
        </b-select>
      </b-field>
      <b-field label="Portador de marcapaso">
        <b-select v-model="form.bloqueo_av.marcapaso" placeholder="Portador de marcapaso" expanded>
          <option value="bicameral">Bicameral</option>
          <option value="unicameral">Unicameral</option>
          <option value="ninguno">Ninguno</option>
        </b-select>
      </b-field>
    </b-field>

    <b-field grouped>
      <b-field label="Infarto agudo del miocardio">
        <b-select
          v-model="form.infarto_agudo_miocardio"
          placeholder="Infarto agudo del miocardio"
          expanded
        >
          <option value="menor_6_horas">&lt; 6hrs</option>
          <option value="6_a_24_horas">6 a 24 hrs</option>
          <option value="1_a_7_dias">1 a 7 días</option>
          <option value="8_a_21_dias">8 a 21 días.</option>
          <option value="mayor_21_dias">&gt; 21 dias</option>
          <option value="ninguno">Ninguno</option>
        </b-select>
      </b-field>
      <b-field label="Tratamiento" expanded>
        <b-input
          type="textarea"
          v-model="form.infarto_agudo_miocardio_tratamiento"
          placeholder="Tratamiento"
          :disabled="!form.infarto_agudo_miocardio"
        />
      </b-field>
    </b-field>
    <b-field grouped>
      <b-field label="Clase funcional NYHA:" expanded>
        <b-select v-model="form.clase_funcional_nyha" placeholder="Clase funcional NYHA:" expanded>
          <option value="i">I</option>
          <option value="ii">II</option>
          <option value="iii">III</option>
          <option value="iv">IV</option>
          <option value="ninguno">Ninguno</option>
        </b-select>
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Shock Cardiogenico</h4>
    <b-field grouped>
      <b-field expanded>
        <b-field label="Presente" expanded>
          <b-switch
            v-model="form.shock_cardiogenico.presente"
          >{{ form.shock_cardiogenico.presente | btm }}</b-switch>
        </b-field>
        <b-field label="Colocación" expanded>
          <b-select
            v-model="form.shock_cardiogenico.colocacion"
            placeholder="Shock Cardiogenico:"
            expanded
            :disabled="!form.shock_cardiogenico.presente"
          >
            <option value="BCIA">BCIA</option>
            <option value="ECMO">ECMO</option>
            <option value="ninguno">Ninguno</option>
          </b-select>
        </b-field>
      </b-field>
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
        diabetes: null,
        hipertencion: false,
        asma: false,
        enfermedad_renal: {
          tipo: null,
          estadio: null,
          dialisis: null
        },
        enfermedad_arterial_periferica: false,
        enfermedad_cerebro_vascular: null,
        enfermedad_pulmonar_obstructiva_cronica: false,
        enfermedad_carotidea: false,
        tabaquismo: false,
        alcohol: false,
        drogas: false,
        cancer: {
          tipo: "",
          localizacion: ""
        },
        endocarditis: null,
        enfermedad_hepatica: false,
        apnea_del_sueno: false,
        inmunosupresion: false,
        radiacion_mediastinal: false,
        alergia_medicamentos: null,
        cirugias_previas: null,
        fibrilacion_auricular: null,
        flutter_auricular: false,
        arritmia_ventriculares: null,
        bloqueo_av: {
          grado: null,
          marcapaso: null
        },
        infarto_agudo_miocardio: null,
        infarto_agudo_miocardio_tratamiento: null,
        clase_funcional_nyha: null,
        shock_cardiogenico: {
          colocacion: null,
          presente: null
        }
      },
      url: "pph"
    };
  }
};
</script>
