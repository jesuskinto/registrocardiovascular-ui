<template>
  <div>
    <b-field grouped>
      <b-field label="Días en UCI" expanded>
        <b-input v-model="form.dias_uci" placeholder="Días en UCI" expanded />
      </b-field>
      <b-field label="Días en UTI" expanded>
        <b-input v-model="form.dias_uti" placeholder="Días en UTI" expanded />
      </b-field>
    </b-field>
    <b-field grouped>
      <b-field label="Días totales de hospitalización" expanded>
        <b-input
          v-model="form.dias_totales_hospitalizacion"
          placeholder="Días totales de hospitalización"
          expanded
        />
      </b-field>
      <b-field label="Días de intubación" expanded>
        <b-input v-model="form.dias_intubacion" placeholder="Días de intubación" expanded />
      </b-field>
    </b-field>
    <b-field grouped>
      <b-field label="Drogas vasoactivas">
        <b-switch
          v-model="form.drogras_vasoactivas.tiene"
        >{{ form.drogras_vasoactivas.tiene | btm }}</b-switch>
      </b-field>
      <b-field label="Tipo" expanded>
        <b-select
          v-model="form.drogras_vasoactivas.tipo"
          placeholder="Tipo"
          expanded
          :disabled="!form.drogras_vasoactivas.tiene"
        >
          <option value="adrenalina">Adrenalina</option>
          <option value="noradrenalina">Noradrenalina</option>
          <option value="dopamina">Dopamina</option>
          <option value="dobutamina">Dobutamina</option>
          <option :value="null">Ninguno</option>
        </b-select>
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Ecocardiograma Postoperatorio</h4>
    <b-field label="FEVI">
      <b-input
        type="textarea"
        v-model="form.ecocardiograma_postoperatorio.fevi"
        placeholder="FEVI"
      />
    </b-field>
    <b-field label="CINESIA VENTRICULAR">
      <b-input
        type="textarea"
        v-model="form.ecocardiograma_postoperatorio.cinesia_ventricular"
        placeholder="Cinesia Ventricular"
      />
    </b-field>
    <b-field label="PRÓTESIS VALVULAR">
      <b-input
        type="textarea"
        v-model="form.ecocardiograma_postoperatorio.protesis_valvular"
        placeholder="Prótesis Valvular"
      />
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Control Postoperatorio</h4>
    <b-field label="Control a los 15 días">
      <b-input v-model="form.control_postoperatorio.dias_15" type="textarea" />
    </b-field>
    <b-field label="Control al 1er. Mes">
      <b-input v-model="form.control_postoperatorio.mes_1" type="textarea" />
    </b-field>
    <b-field label="Contro a los 3meses">
      <b-input v-model="form.control_postoperatorio.mes_3" type="textarea" />
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
        dias_uci: null,
        dias_uti: null,
        dias_totales_hospitalizacion: null,
        dias_intubacion: null,
        drogras_vasoactivas: {
          tiene: false,
          tipo: null
        },
        ecocardiograma_postoperatorio: {
          fevi: null,
          cinesia_ventricular: null,
          protesis_valvular: null
        },
        control_postoperatorio: {
          dias_15: null,
          mes_1: null,
          mes_3: null
        }
      }
    };
  }
};
</script>
