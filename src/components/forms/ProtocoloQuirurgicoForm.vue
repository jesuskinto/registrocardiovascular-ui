<template>
  <div>
    <b-field label="Fecha">
      <b-datetimepicker
        v-model="form.fecha"
        :month-names="$monthNames"
        :day-names="$dayNames"
        :timepicker="{ enableSeconds: true, hourFormat: '12' }"
        placeholder="Fecha"
      />
    </b-field>
    <b-field grouped>
      <b-field label="Primer Cirujano" expanded>
        <b-select v-model="form.primer_cirujano" placeholder="Primer Cirujano" expanded>
          <option
            v-for="cirujano in cirujanos"
            :value="cirujano.id"
            :key="cirujano.id"
          >{{ `${cirujano.user.first_name} ${cirujano.user.last_name}`}}</option>
          <option :value="null">Ninguno</option>
        </b-select>
      </b-field>
      <b-field label="Otros Cirujanos" message="Use ctrl para selección multiple" expanded>
        <b-select v-model="form.otros_cijuanos" placeholder="Otros Cirujanos" multiple expanded>
          <option
            v-for="cirujano in cirujanos"
            :value="cirujano.id"
            :key="cirujano.id"
          >{{ `${cirujano.user.first_name} ${cirujano.user.last_name}`}}</option>
          <option :value="null">Ninguno</option>
        </b-select>
      </b-field>
    </b-field>
    <b-field label="Nota Operatoria" expanded>
      <b-input
        rows="30"
        type="textarea"
        v-model="form.notas_operatorias"
        placeholder="Nota Operatoria"
      />
    </b-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        notas_operatorias: null,
        primer_cirujano: null,
        fecha: null,
        otros_cirujanos: []
      },
      cirujanos: [
        {
          id: 11,
          user: {
            first_name: "Marcos",
            last_name: "Durand"
          }
        },
        {
          id: 12,
          user: {
            first_name: "Felix",
            last_name: "Durand"
          }
        },
        {
          id: 13,
          user: {
            first_name: "Francis",
            last_name: "Durand"
          }
        },
        {
          id: 14,
          user: {
            first_name: "Francisco",
            last_name: "Durand"
          }
        }
      ]
    };
  }
};
</script>
