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
          <b-field label="Detalles">
            <b-input type="textarea" v-model="form.esternosis_aortica.ava" placeholder="AVA" />
          </b-field>
          <b-field>
            <b-input type="textarea" v-model="form.esternosis_aortica.vmax" placeholder="Vmax" />
          </b-field>
          <b-field>
            <b-input type="textarea" v-model="form.esternosis_aortica.gmed" placeholder="Gmed" />
          </b-field>
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
            <b-input
              type="textarea"
              v-model="form.insuficiencia_aortica.dilatacion_anular"
              placeholder="Dilatación anular"
            />
          </div>
          <div class="field">
            <b-input
              type="textarea"
              v-model="form.insuficiencia_aortica.prolapso_velo"
              placeholder="Prolapso de velo"
            />
          </div>
          <div class="field">
            <b-input
              type="textarea"
              v-model="form.insuficiencia_aortica.perforacion_velo"
              placeholder="Perforación del velo"
            />
          </div>
          <div class="field">
            <b-input
              type="textarea"
              v-model="form.insuficiencia_aortica.vena_contracta"
              placeholder="Vena contracta"
            />
          </div>
          <div class="field">
            <b-input
              type="textarea"
              v-model="form.insuficiencia_aortica.vol_regurgitante"
              placeholder="Vol regurgitante"
            />
          </div>
          <div class="field">
            <b-input type="textarea" v-model="form.insuficiencia_aortica.ore" placeholder="ORE" />
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
            <b-input type="textarea" v-model="form.estenosis_mitral.AVA" placeholder="AVA" />
          </div>
          <div class="field">
            <b-input type="textarea" v-model="form.estenosis_mitral.GMED" placeholder="GMED" />
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
    <b-field grouped>
      <b-field label="FEVI" expanded>
        <b-input type="textarea" v-model="form.fevi" placeholder="Fevi" expanded />
      </b-field>
      <b-field label="Dilatación Aurícula Izquierda" expanded>
        <b-input
          type="textarea"
          v-model="form.dilatacion_auricula_izquierda"
          placeholder="Dilatación Aurícula Izquierda"
          expanded
        />
      </b-field>
    </b-field>
    <b-field grouped>
      <b-field label="Dilatacion de orejuela izquierda" expanded>
        <b-input
          type="textarea"
          v-model="form.dilatacionde_orejuela_izquierda"
          placeholder="Dilatacion de orejuela izquierda"
          expanded
        />
      </b-field>
      <b-field label="Dilatación de VI" expanded>
        <b-input
          type="textarea"
          v-model="form.dilatación_de_vi"
          placeholder="Dilatación de VI"
          expanded
        />
      </b-field>
    </b-field>
    <b-field grouped>
      <b-field label="Dilatación de Raíz aortica" expanded>
        <b-input
          type="textarea"
          v-model="form.dilatación_raiz_aortica"
          placeholder="Dilatación de Raíz aortica"
          expanded
        />
      </b-field>
      <b-field label="Dilatación de aorta ascendente" expanded>
        <b-input
          type="textarea"
          v-model="form.dilatacion_aorta_ascendente"
          placeholder="Dilatación de aorta ascendente"
          expanded
        />
      </b-field>
    </b-field>
    <b-field grouped>
      <b-field label="Presencia de trombos" expanded>
        <b-input
          type="textarea"
          v-model="form.presencia_trombos"
          placeholder="Presencia de trombos"
          expanded
        />
      </b-field>
      <b-field label="Diámetro al final de diastole" expanded>
        <b-input
          type="textarea"
          v-model="form.diametro_al_final_de_diastole"
          placeholder="Diámetro al final de diastole"
          expanded
        />
      </b-field>
    </b-field>
    <b-field grouped>
      <b-field label="DSF" expanded>
        <b-input type="textarea" v-model="form.DSF" placeholder="DSF" expanded />
      </b-field>
      <b-field label="Transtornos de Contractivilidad" expanded>
        <b-input
          type="textarea"
          v-model="form.trasntorno_contractivilidad"
          placeholder="Transtornos de Contractivilidad"
          expanded
        />
      </b-field>
    </b-field>
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
    <b-field grouped>
      <b-field label="Engrosamiento de Pericardio" expanded>
        <b-input
          type="textarea"
          v-model="form.engrosamiento_pericardio"
          placeholder="Engrosamiento de Pericardio"
          expanded
        />
      </b-field>
      <b-field label="Engrosamiento septal" expanded>
        <b-input
          type="textarea"
          v-model="form.engrosamiento_septal"
          placeholder="Engrosamiento septal"
          expanded
        />
      </b-field>
    </b-field>
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
              <b-radio v-model="form.resonancia_cardiaca.viabilidad" :native-value="null">Ninguno</b-radio>
            </div>
            <div class="field">
              <b-radio
                v-model="form.resonancia_cardiaca.viabilidad"
                native-value="viabilidad"
              >Viabilidad</b-radio>
            </div>
            <div class="field">
              <b-radio
                v-model="form.resonancia_cardiaca.viabilidad"
                native-value="no_viabilidad"
              >No viabilidad</b-radio>
            </div>
            <div class="field">
              <b-input
                type="textarea"
                v-model="form.resonancia_cardiaca.fevi"
                placeholder="FEVI"
                expanded
              />
            </div>
            <div class="field">
              <b-input
                type="textarea"
                v-model="form.resonancia_cardiaca.septum_ventricular"
                placeholder="Septum Ventricular"
                expanded
              />
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
        esternosis_aortica: {
          tipo: null,
          vmax: null,
          ava: null,
          gmed: null
        },
        valvula: null,
        insuficiencia_aortica: {
          tipo: null,
          dilatacion_anular: null,
          prolapso_velo: null,
          perforacion_velo: null,
          vena_contracta: null,
          vol_regurgitante: null,
          ore: null
        },
        estenosis_mitral: {
          tipo: null,
          valor: [],
          AVA: null,
          GMED: null
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
        fevi: null,
        dilatacion_auricula_izquierda: null,
        dilatacionde_orejuela_izquierda: null,
        dilatación_de_vi: null,
        dilatación_raiz_aortica: null,
        dilatacion_aorta_ascendente: null,
        presencia_trombos: null,
        diametro_al_final_de_diastole: null,
        DSF: null,
        engrosamiento_pericardio: null,
        engrosamiento_septal: null,
        trasntorno_contractivilidad: null,
        ecocardiograma_stress_dobutamina: null,
        resonancia_cardiaca: {
          fevi: null,
          septum_ventricular: null,
          viabilidad: null
        },
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














