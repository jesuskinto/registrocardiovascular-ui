<template>
  <div>
    <b-field grouped>
      <b-field label="Inicio de cirugía" expanded>
        <b-clockpicker
          v-model="form.hora_inicio_cirugia"
          placeholder="Hora de inicio de cirugía"
          expanded
        ></b-clockpicker>
      </b-field>
      <b-field label="Salida de Cirugía" expanded>
        <b-clockpicker
          v-model="form.hora_fin_cirugia"
          placeholder="Hora de Salida de Cirugía"
          expanded
        ></b-clockpicker>
      </b-field>
      <b-field label="Inicio de CEC" expanded>
        <b-clockpicker v-model="form.hora_inicio_cec" placeholder="Hora de inicio de CEC" expanded></b-clockpicker>
      </b-field>
    </b-field>
    <b-field grouped>
      <b-field label="Tiempo de CLAMP" expanded>
        <b-input v-model="form.tiempo_clamp" placeholder="Tiempo de CLAMP" expanded />
      </b-field>
      <b-field label="Tiempo de CEC TOTAL" expanded>
        <b-input v-model="form.tiempo_cec_total" placeholder="Tiempo de CEC TOTAL" expanded />
      </b-field>
    </b-field>
    <b-field label="Asistencia ventricular izquierda postoperatoria" expanded>
      <b-select
        v-model="form.asistencia_ventricular_izquierda_postoperatoria"
        placeholder="Asistencia"
        expanded
      >
        <option value="bcia">BCIA</option>
        <option value="ecmo">ECMO</option>
        <option value="ninguno">Ninguno</option>
      </b-select>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Cardioplegia</h4>
    <b-field grouped>
      <b-field expanded>
        <b-select v-model="form.cardioplegia.type" placeholder="Cardioplegia" expanded>
          <option value="raiz">Raiz</option>
          <option value="ostium">Ostium</option>
          <option value="retrograda">Retrograda</option>
          <option value="ninguno">Ninguno</option>
        </b-select>
      </b-field>
      <b-field expanded>
        <b-select v-model="form.cardioplegia.class" placeholder="Cardioplegia" expanded>
          <option value="fria">fria</option>
          <option value="normotermica">Normotermica</option>
          <option value="ninguno">Ninguno</option>
        </b-select>
      </b-field>
      <b-field expanded>
        <b-select v-model="form.cardioplegia.method" placeholder="Cardioplegia" expanded>
          <option value="hematica">Hematica</option>
          <option value="cristalode">Cristalode</option>
          <option value="del_nido">Del Nido</option>
          <option value="ninguno">Ninguno</option>
        </b-select>
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Canulación</h4>
    <b-field grouped>
      <b-field label="Arterial" expanded>
        <b-select v-model="form.canulacion.arterial" placeholder="Arterial" expanded>
          <option value="aorta">Aorta</option>
          <option value="femoral">Femoral</option>
          <option value="axilar">Axilar</option>
          <option value="ninguno">Ninguno</option>
        </b-select>
      </b-field>
      <b-field label="Venosa" expanded>
        <b-select v-model="form.canulacion.venosa" placeholder="Venosa" expanded>
          <option value="Auiculocava">Auiculocava</option>
          <option value="Bicava">Bicava</option>
          <option value="Femoral">Femoral</option>
          <option value="ninguno">Ninguno</option>
        </b-select>
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Tiempo de arresto circulatorio</h4>
    <b-field grouped>
      <b-field label="Técnica de correción del PH" expanded>
        <b-select
          v-model="form.tiempo_arresto_circulatorio.tecnica_correcion_ph"
          placeholder="Técnica de correción del PH"
          expanded
        >
          <option value="stat">stat</option>
          <option value="pHStat">pHStat</option>
          <option value="ambas">ambas</option>
          <option value="ninguno">Ninguno</option>
        </b-select>
      </b-field>
      <b-field label="Temperatura de descenso" expanded>
        <b-input
          type="text"
          v-model="form.tiempo_arresto_circulatorio.temperatura_descenso"
          placeholder="Temperatura de descenso"
          expanded
        />
      </b-field>
    </b-field>
    <b-field grouped>
      <b-field label="Tiempo de descenso" expanded>
        <b-input
          type="text"
          v-model="form.tiempo_arresto_circulatorio.tiempo_descenso"
          placeholder="Tiempo de descenso"
          expanded
        />
      </b-field>
      <b-field label="Recalentamiento" expanded>
        <b-input
          type="text"
          v-model="form.tiempo_arresto_circulatorio.recalentamiento"
          placeholder="Recalentamiento"
          expanded
        />
      </b-field>
    </b-field>
    <b-field grouped>
      <b-field label="Tiempo Recalentamiento" expanded>
        <b-input
          type="text"
          v-model="form.tiempo_arresto_circulatorio.tiempo_recalentamiento"
          placeholder="Tiempo Recalentamiento"
          expanded
        />
      </b-field>
      <b-field label="Tiempo total de arresto circulatorio" expanded>
        <b-input
          type="text"
          v-model="form.tiempo_arresto_circulatorio.tiempo_total_arresto_circulatorio"
          placeholder="Tiempo total de arresto circulatorio"
          expanded
        />
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Perfusion cerebral</h4>
    <b-field grouped>
      <b-field label="Anterograda" expanded>
        <b-select v-model="form.perfusion_cerebral.anterograda" placeholder="Anterograda" expanded>
          <option value="Axilar">Axilar</option>
          <option value="tronco braquicefalico">tronco braquicefalico</option>
          <option value="Carótida iquierda">Carótida izquierda</option>
          <option value="ninguno">Ninguno</option>
        </b-select>
      </b-field>
      <b-field label="Retrograda" expanded>
        <b-switch
          v-model="form.perfusion_cerebral.retrograda"
        >{{ form.perfusion_cerebral.retrograda | btm }}</b-switch>
      </b-field>
    </b-field>
    <div class="buttons buttons-footer-form">
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
        hora_inicio_cirugia: null,
        hora_fin_cirugia: null,
        hora_inicio_cec: null,
        tiempo_clamp: null,
        tiempo_cec_total: null,
        cardioplegia: {
          type: null,
          class: null,
          method: null
        },
        asistencia_ventricular_izquierda_postoperatoria: null,
        canulacion: {
          arterial: null,
          venosa: null
        },
        tiempo_arresto_circulatorio: {
          tecnica_correcion_ph: null,
          temperatura_descenso: null,
          tiempo_descenso: null,
          recalentamiento: null,
          tiempo_recalentamiento: null,
          tiempo_total_arresto_circulatorio: null
        },
        perfusion_cerebral: {
          anterograda: null,
          retrograda: null
        }
      },
      url: "extracorporeal-circulation"
    };
  },
  methods: {
    setData(data) {
      delete data._id;
      delete data.patient;
      const dateFields = [
        "hora_inicio_cirugia",
        "hora_fin_cirugia",
        "hora_inicio_cec"
      ];
      for (let d in data) {
        if (dateFields.includes(d)) {
          this.form[d] = new Date(data[d]);
          continue;
        }
        this.form[d] = data[d];
      }
    }
  }
};
</script>
