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
          v-model="form.hora_salida_cirugia"
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
    <b-field grouped>
      <b-field label="Cardioplegia" expanded>
        <b-select v-model="form.cardioplegia" placeholder="Cardioplegia" expanded>
          <option value="raiz">Raiz</option>
          <option value="ostium">Ostium</option>
          <option value="retrograda">Retrograda</option>
          <option value="fria">fria</option>
          <option value="normotermica">Normotermica</option>
          <option value="hematica">Hematica</option>
          <option value="cristalode">Cristalode</option>
          <option value="del_nido">Del Nido</option>
          <option :value="null">Ninguno</option>
        </b-select>
      </b-field>
      <b-field label="Asistencia ventricular izquierda postoperatoria" expanded>
        <b-select
          v-model="form.asistencia_ventricular_izquierda_postoperatoria"
          placeholder="Asistencia"
          expanded
        >
          <option value="bcia">BCIA</option>
          <option value="ecmo">ECMO</option>
          <option :value="null">Ninguno</option>
        </b-select>
      </b-field>
    </b-field>
    <hr />
    <h4>Canulación</h4>
    <b-field grouped>
      <b-field label="Arterial" expanded>
        <b-select v-model="form.canulacion.arterial" placeholder="Arterial" expanded>
          <option value="aorta">Aorta</option>
          <option value="femoral">Femoral</option>
          <option value="axilar">Axilar</option>
          <option :value="null">Ninguno</option>
        </b-select>
      </b-field>
      <b-field label="Venosa" expanded>
        <b-select v-model="form.canulacion.venosa" placeholder="Venosa" expanded>
          <option value="Auiculocava">Auiculocava</option>
          <option value="Bicava">Bicava</option>
          <option value="Femoral">Femoral</option>
          <option :value="null">Ninguno</option>
        </b-select>
      </b-field>
    </b-field>
    <hr />
    <h4>Tiempo de arresto circulatorio</h4>
    <b-field grouped>
      <b-field label="Técnica Alpha" expanded>
        <b-select
          v-model="form.tiempo_arresto_circulatorio.tecnica_alpha"
          placeholder="Técnica Alpha"
          expanded
        >
          <option value="stat">stat</option>
          <option value="pHStat">pHStat</option>
          <option value="ambas">ambas</option>
          <option :value="null">Ninguno</option>
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
    <h4>Perfusion cerebral</h4>
    <b-field grouped>
      <b-field label="Anterograda" expanded>
        <b-select v-model="form.perfusion_cerebral.anterograda" placeholder="Anterograda" expanded>
          <option value="Axilar">Axilar</option>
          <option value="tronco braquicefalico">tronco braquicefalico</option>
          <option value="Carótida iquierda">Carótida iquierda</option>
          <option :value="null">Ninguno</option>
        </b-select>
      </b-field>
      <b-field label="Retrograda" expanded>
        <b-select v-model="form.perfusion_cerebral.retrograda" placeholder="Retrograda" expanded>
          <option value="Axilar">Axilar</option>
          <option value="tronco braquicefalico">tronco braquicefalico</option>
          <option value="Carótida iquierda">Carótida iquierda</option>
          <option :value="null">Ninguno</option>
        </b-select>
      </b-field>
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
        hora_inicio_cirugia: null,
        hora_fin_cirugia: null,
        hora_inicio_cec: null,
        tiempo_clamp: null,
        tiempo_cec_total: null,
        cardioplegia: null,
        asistencia_ventricular_izquierda_postoperatoria: null,
        canulacion: {
          arterial: null,
          venosa: null
        },
        tiempo_arresto_circulatorio: {
          tecnica_alpha: null,
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
      }
    };
  }
};
</script>
