<template>
  <div>
    <b-button
      v-show="$route.name === 'surgical-protocols'"
      type="is-primary is-mb-5"
      rounded
      @click="newProtocol"
    >Nuevo</b-button>
    <div class="columns is-mobile is-multiline">
      <r-surgical-protocol @getdata="getData()" v-for="f in form" :key="f._id" :data="f"></r-surgical-protocol>
    </div>
  </div>
</template>

<script>
import RSurgicalProtocol from "@/components/SurgicalProtocol";
import formMixin from "@/mixins/formMixin.vue";
import newProtocolMixin from "@/mixins/newProtocolMixin.vue";

export default {
  mixins: [formMixin, newProtocolMixin],
  components: {
    RSurgicalProtocol
  },
  props: {
    id: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      form: [],
      url: "surgical-protocols"
    };
  },
  methods: {
    setData(data) {
      this.form = data;
    }
  }
};
</script>

<style lang="sass" scoped>
button
  margin-bottom: 15px
</style>
