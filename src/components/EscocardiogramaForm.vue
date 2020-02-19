<template>
  <div>
    <b-field label="Estenosis aortica">
      <div class="columns">
        <div class="column">
          <div class="field">
            <b-radio v-model="form.esternosis_aortica.tipo" :native-value="null">Ninguno</b-radio>
          </div>
          <div class="field">
            <b-radio v-model="form.esternosis_aortica.tipo" native-value="leve">Leve</b-radio>
          </div>
          <div class="field">
            <b-radio v-model="form.esternosis_aortica.tipo" native-value="moderada">Moderada</b-radio>
          </div>
          <div class="field">
            <b-radio v-model="form.esternosis_aortica.tipo" native-value="severa">Severa</b-radio>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <b-checkbox v-model="form.esternosis_aortica.valor" native-value="ava">AVA</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox v-model="form.esternosis_aortica.valor" native-value="vmax">Vmax</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox v-model="form.esternosis_aortica.valor" native-value="gmed">Gmed</b-checkbox>
          </div>
        </div>
      </div>
    </b-field>
    <b-field grouped>
      <b-field label="Válvula">
        <b-select v-model="valvula" placeholder="Válvula">
          <option :value="null">Ninguna</option>
          <option value="valvula bicuspide">Bicúspide</option>
          <option value="valvula tricuspide">Tricúspide</option>
          <option value="otra">Otra</option>
        </b-select>
      </b-field>
      <b-field label="Otra" expanded>
        <b-input
          type="textarea"
          v-model="form.valvula"
          placeholder="Especifique"
          :disabled="valvula !== 'otra'"
        />
      </b-field>
    </b-field>
    <b-field label="Insufuciencia aortica">
      <div class="columns">
        <div class="column">
          <div class="field">
            <b-radio v-model="form.insuficiencia_aortica.tipo" :native-value="null">Ninguno</b-radio>
          </div>
          <div class="field">
            <b-radio v-model="form.insuficiencia_aortica.tipo" native-value="leve">Leve</b-radio>
          </div>
          <div class="field">
            <b-radio v-model="form.insuficiencia_aortica.tipo" native-value="moderada">Moderada</b-radio>
          </div>
          <div class="field">
            <b-radio v-model="form.insuficiencia_aortica.tipo" native-value="severa">Severa</b-radio>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <b-checkbox
              v-model="form.insuficiencia_aortica.valor"
              native-value="dilatacion_anular"
            >Dilatación anular</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="form.insuficiencia_aortica.valor"
              native-value="prolapso_velo"
            >Prolapso de velo</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="form.insuficiencia_aortica.valor"
              native-value="perforacion_velo"
            >Perforación del velo</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="form.insuficiencia_aortica.valor"
              native-value="vena_contracta"
            >Vena contracta</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="form.insuficiencia_aortica.valor"
              native-value="vol_regurgitante"
            >Vol regurgitante</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox v-model="form.insuficiencia_aortica.valor" native-value="ore">ORE</b-checkbox>
          </div>
        </div>
      </div>
    </b-field>
    <b-field label="Estenosis mitral" expanded>
      <div class="columns">
        <div class="column">
          <div class="field">
            <b-radio v-model="form.estenosis_mitral.tipo" :native-value="null">Ninguno</b-radio>
          </div>
          <div class="field">
            <b-radio v-model="form.estenosis_mitral.tipo" native-value="leve">Leve</b-radio>
          </div>
          <div class="field">
            <b-radio v-model="form.estenosis_mitral.tipo" native-value="moderada">Moderada</b-radio>
          </div>
          <div class="field">
            <b-radio v-model="form.estenosis_mitral.tipo" native-value="severa">Severa</b-radio>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <b-checkbox v-model="form.estenosis_mitral.valor" native-value="reumatica">Reumática</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="form.estenosis_mitral.valor"
              native-value="degenerativa"
            >Degenerativa</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox v-model="form.estenosis_mitral.valor" native-value="ava">AVA</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox v-model="form.estenosis_mitral.valor" native-value="gmed">GMED</b-checkbox>
          </div>
        </div>
      </div>
    </b-field>
    <b-field label="Insuficiencia mitral" expanded>
      <div class="columns">
        <div class="column">
          <div class="field">
            <b-radio v-model="form.insuficiencia_mitral.tipo" :native-value="null">Ninguno</b-radio>
          </div>
          <div class="field">
            <b-radio v-model="form.insuficiencia_mitral.tipo" native-value="leve">Leve</b-radio>
          </div>
          <div class="field">
            <b-radio v-model="form.insuficiencia_mitral.tipo" native-value="moderada">Moderada</b-radio>
          </div>
          <div class="field">
            <b-radio v-model="form.insuficiencia_mitral.tipo" native-value="severa">Severa</b-radio>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <b-checkbox v-model="form.insuficiencia_mitral.valor" native-value="primaria">Primaria</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="form.insuficiencia_mitral.valor"
              native-value="secundaria"
            >Secundaria</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="form.insuficiencia_mitral.valor"
              native-value="mixomatosa"
            >Mixomatosa</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="form.insuficiencia_mitral.valor"
              native-value="enfermedad_de_barlow"
            >Enfermedad De barlow</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="form.insuficiencia_mitral.valor"
              native-value="prolapso_de_velo"
            >Prolapso de velo</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox v-model="form.insuficiencia_mitral.valor" native-value="anterior">Anterior</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox v-model="form.insuficiencia_mitral.valor" native-value="posterior">Posterior</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="form.insuficiencia_mitral.valor"
              native-value="dilatacion."
            >Dilatación</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="form.insuficiencia_mitral.valor"
              native-value="lesion_de_velo"
            >Lesión de velo</b-checkbox>
          </div>
        </div>
      </div>
    </b-field>
    <b-field label="Insuficiencia de válvula Tricuspide" expanded>
      <div class="columns">
        <div class="column">
          <div class="field">
            <b-radio
              v-model="form.insuficiencia_valvula_tricuspide.tipo"
              :native-value="null"
            >Ninguno</b-radio>
          </div>
          <div class="field">
            <b-radio v-model="form.insuficiencia_valvula_tricuspide.tipo" native-value="leve">Leve</b-radio>
          </div>
          <div class="field">
            <b-radio
              v-model="form.insuficiencia_valvula_tricuspide.tipo"
              native-value="moderada"
            >Moderada</b-radio>
          </div>
          <div class="field">
            <b-radio
              v-model="form.insuficiencia_valvula_tricuspide.tipo"
              native-value="severa"
            >Severa</b-radio>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <b-checkbox
              v-model="form.insuficiencia_valvula_tricuspide.valor"
              native-value="primaria"
            >Primaria</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="form.insuficiencia_valvula_tricuspide.valor"
              native-value="secundaria"
            >Secundaria</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="form.insuficiencia_valvula_tricuspide.valor"
              native-value="prolapso_de_velo"
            >Prolapso de velo</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="form.insuficiencia_valvula_tricuspide.valor"
              native-value="dilatacion"
            >Dilatación</b-checkbox>
          </div>
          <div class="field">
            <b-checkbox
              v-model="form.insuficiencia_valvula_tricuspide.valor"
              native-value="lesion_de_velo"
            >Lesión de velo</b-checkbox>
          </div>
        </div>
      </div>
    </b-field>
    <b-field label="Estenosis de válvula tricúspide" expanded>
      <div class="columns">
        <div class="column">
          <div class="field">
            <b-radio v-model="form.estenosis_valvula_tricuspide.tipo" :native-value="null">Ninguno</b-radio>
          </div>
          <div class="field">
            <b-radio v-model="form.estenosis_valvula_tricuspide.tipo" native-value="leve">Leve</b-radio>
          </div>
          <div class="field">
            <b-radio
              v-model="form.estenosis_valvula_tricuspide.tipo"
              native-value="moderada"
            >Moderada</b-radio>
          </div>
          <div class="field">
            <b-radio v-model="form.estenosis_valvula_tricuspide.tipo" native-value="severa">Severa</b-radio>
          </div>
        </div>
      </div>
    </b-field>
    <b-field label="Estenosis de válvula pulmonar" expanded>
      <div class="columns">
        <div class="column">
          <div class="field">
            <b-radio v-model="form.estenosis_valvula_pulmonar.tipo" :native-value="null">Ninguno</b-radio>
          </div>
          <div class="field">
            <b-radio v-model="form.estenosis_valvula_pulmonar.tipo" native-value="leve">Leve</b-radio>
          </div>
          <div class="field">
            <b-radio v-model="form.estenosis_valvula_pulmonar.tipo" native-value="moderada">Moderada</b-radio>
          </div>
          <div class="field">
            <b-radio v-model="form.estenosis_valvula_pulmonar.tipo" native-value="severa">Severa</b-radio>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <b-checkbox
              v-model="form.estenosis_valvula_pulmonar.valor"
              native-value="prolapso_velo"
            >Insuficie</b-checkbox>
          </div>
        </div>
      </div>
    </b-field>
    <b-field label="Insuficiencia de válvula pulmonar" expanded>
      <div class="columns">
        <div class="column">
          <div class="field">
            <b-radio v-model="form.insuficiencia_valvula_pulmonar.tipo" :native-value="null">Ninguno</b-radio>
          </div>
          <div class="field">
            <b-radio v-model="form.insuficiencia_valvula_pulmonar.tipo" native-value="leve">Leve</b-radio>
          </div>
          <div class="field">
            <b-radio
              v-model="form.insuficiencia_valvula_pulmonar.tipo"
              native-value="moderada"
            >Moderada</b-radio>
          </div>
          <div class="field">
            <b-radio v-model="form.insuficiencia_valvula_pulmonar.tipo" native-value="severa">Severa</b-radio>
          </div>
        </div>
      </div>
    </b-field>
    <p>
      FEVI
      Dilatación Aurícula Izquierda
      Dilatacionde orejuela izquierda
      Presencia de trombos
      Dilatación de VI. DIÁMETRO AL FINAL DE DIASTOLE. DSF
      TRASTORNOS DE CONTRACTILIDAD
      Dilatación de Raíz aortica
      Dilatación de aorta ascendente
    </p>
    <b-field label="Derrame pericardico" expanded>
      <div class="columns">
        <div class="column">
          <div class="field">
            <b-radio v-model="form.derrame_pericardico.tipo" :native-value="null">Ninguno</b-radio>
          </div>
          <div class="field">
            <b-radio v-model="form.derrame_pericardico.tipo" native-value="leve">Leve</b-radio>
          </div>
          <div class="field">
            <b-radio v-model="form.derrame_pericardico.tipo" native-value="moderada">Moderada</b-radio>
          </div>
          <div class="field">
            <b-radio v-model="form.derrame_pericardico.tipo" native-value="severa">Severa</b-radio>
          </div>
        </div>
      </div>
    </b-field>
    <p>
      Engrosamiento de PericardiO
      ENGROSAMIENTO SEPTAL
    </p>
    <b-field grouped>
      <b-field label="Ecocardiograma Stress con dobutamina" expanded>
        <div class="columns">
          <div class="column">
            <div class="field">
              <b-radio v-model="form.ecocardiograma_stress_dobutamina" :native-value="null">Ninguno</b-radio>
            </div>
            <div class="field">
              <b-radio
                v-model="form.ecocardiograma_stress_dobutamina"
                native-value="viabilidad"
              >Viabilidad</b-radio>
            </div>
            <div class="field">
              <b-radio
                v-model="form.ecocardiograma_stress_dobutamina"
                native-value="no_viabilidad"
              >No viabilidad</b-radio>
            </div>
          </div>
        </div>
      </b-field>
      <b-field label="Resonancia Cardíaca" expanded>
        <div class="columns">
          <div class="column">
            <div class="field">
              <b-radio v-model="form.resonancia_cardiaca" :native-value="null">Ninguno</b-radio>
            </div>
            <div class="field">
              <b-radio v-model="form.resonancia_cardiaca" native-value="viabilidad">Viabilidad</b-radio>
            </div>
            <div class="field">
              <b-radio v-model="form.resonancia_cardiaca" native-value="no_viabilidad">No viabilidad</b-radio>
            </div>
            <div class="field">
              <b-radio v-model="form.resonancia_cardiaca" native-value="fevi">FEVI</b-radio>
            </div>
            <div class="field">
              <b-radio
                v-model="form.resonancia_cardiaca"
                native-value="septum_ventricular"
              >SEPTUM VENTRICULAR</b-radio>
            </div>
          </div>
        </div>
      </b-field>
    </b-field>

    <b-field label="Score de Fragilidad">
      <b-input type="number" v-model="form.score_fragilidad" placeholder="Score de Fragilidad" />
    </b-field>
    <b-field label="Tratamiento actual">
      <b-input type="textarea" v-model="form.tratamiento_actual" placeholder="Tratamiento actual" />
    </b-field>
  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {
        esternosis_aortica: {
          tipo: null,
          valor: []
        },
        valvula: null,
        insuficiencia_aortica: {
          tipo: null,
          valor: []
        },
        estenosis_mitral: {
          tipo: null,
          valor: []
        },
        insuficiencia_mitral: {
          tipo: null,
          valor: []
        },
        insuficiencia_valvula_tricuspide: {
          tipo: null,
          valor: []
        },
        estenosis_valvula_tricuspide: {
          tipo: null,
          valor: []
        },
        estenosis_valvula_pulmonar: {
          tipo: null,
          valor: []
        },
        insuficiencia_valvula_pulmonar: {
          tipo: null
        },
        derrame_pericardico: {
          tipo: null
        },
        ecocardiograma_stress_dobutamina: null,
        resonancia_cardiaca: null,
        score_fragilidad: null,
        tratamiento_actual: ""
      },
      valvula: null
    };
  },
  watch: {
    valvula(val) {
      if (val === "otra") this.form.valvula = "";
    }
  }
};
</script>














