<template>
  <div>
    <b-button
      v-show="$route.name === 'surgical-protocols'"
      type="is-primary is-mb-5"
      rounded
      @click="newProtocol({ newU: true })"
    >Nuevo</b-button>
    <div class="columns is-mobile is-multiline">
      <r-surgical-protocol
        @getdata="getData()"
        @remove="remove($event)"
        v-for="f in form"
        :key="f._id"
        :data="f"
      ></r-surgical-protocol>
    </div>
  </div>
</template>

<script>
import RSurgicalProtocol from "@/components/SurgicalProtocol";
import newProtocolMixin from "@/mixins/newProtocolMixin.vue";
import Rest from "@/services/rest";

export default {
  mixins: [newProtocolMixin],
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
    },
    async remove(id) {
      const loading = this.$buefy.loading.open();
      try {
        await Rest.delete(`${this.url}/${id}`);
        this.getData();
        this.$success("Protocolo eliminado");
        loading.close();
      } catch ({ response: res }) {
        this.$danger(res && res.data ? res.data.message : "Server Error");
        loading.close();
      }
    },
    async getData() {
      const loading = this.$buefy.loading.open();
      try {
        const res = await Rest.get(
          `${this.url}/${this.id || this.$route.params.id}`
        );
        this.setData(res.data.data);
        loading.close();
      } catch ({ response: res }) {
        this.$danger(res && res.data ? res.data.message : "Server Error");
        loading.close();
      }
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="sass" scoped>
button
  margin-bottom: 15px
</style>
