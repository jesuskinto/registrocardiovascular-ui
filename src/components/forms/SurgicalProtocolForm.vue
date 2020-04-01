<template>
  <div>
    {{ id }}
    {{ form }}
    <b-field label="Fecha">
      <b-datetimepicker
        v-model="form.date"
        :timepicker="{ enableSeconds: true, hourFormat: '12' }"
        placeholder="Fecha"
      />
    </b-field>
    <hr />
    <b-button
      class="mb-20"
      size="is-small"
      @click="newSurgeon({ newU: true })"
      icon-right="account-plus"
    >Crear Cirujano</b-button>
    <b-field grouped>
      <b-field label="Primer Cirujano" expanded>
        <b-select v-model="form.firstSurgeon" placeholder="Primer Cirujano" expanded>
          <option
            v-for="surgeon in surgeons"
            :value="surgeon._id"
            :key="surgeon._id"
          >{{ `${surgeon.firstname} ${surgeon.lastname}`}}</option>
          <option value="ninguno">Ninguno</option>
        </b-select>
      </b-field>
      <b-field label="Otros Cirujanos" message="Use ctrl para selección multiple" expanded>
        <b-select v-model="form.othersSurgeons" placeholder="Otros Cirujanos" multiple expanded>
          <option
            v-for="surgeon in surgeons"
            :value="surgeon.id"
            :key="surgeon.id"
          >{{ `${surgeon.firstname} ${surgeon.lastname}`}}</option>
          <option value="ninguno">Ninguno</option>
        </b-select>
      </b-field>
    </b-field>
    <hr />
    <b-field label="Nota Operatoria" expanded>
      <b-input
        rows="30"
        type="textarea"
        v-model="form.operativeNotes"
        placeholder="Nota Operatoria"
      />
    </b-field>
    <div class="buttons">
      <b-button @click="cancel">Cancelar</b-button>
      <b-button type="is-primary" @click="save">Guardar</b-button>
    </div>
  </div>
</template>

<script>
import surgeonMixin from "@/mixins/surgeonMixin.vue";
import formMixin from "@/mixins/formMixin.vue";

export default {
  mixins: [formMixin, surgeonMixin],
  props: {
    modal: {
      default: false,
      type: Boolean
    },
    id: {
      default: null,
      type: String
    },
    new: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      form: {
        operativeNotes: null,
        firstSurgeon: null,
        date: null,
        othersSurgeons: []
      },
      url: "surgical-protocols"
    };
  }
};
</script>
