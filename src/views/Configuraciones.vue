<template>
  <section>
    <b-tabs v-model="activeTab">
      <b-tab-item label="Perfil">
        <div class="user-form">
          <r-user-form></r-user-form>
        </div>
      </b-tab-item>
      <b-tab-item label="Cirujanos">
        <r-cirujanos-setting></r-cirujanos-setting>
      </b-tab-item>
      <b-tab-item label="Usuarios" v-if="isAdmin()">
        <r-user-setting></r-user-setting>
      </b-tab-item>
    </b-tabs>
  </section>
</template>

<script>
import RUserForm from "@/components/forms/UserForm.vue";
import RUserSetting from "@/components/settings/UserSetting.vue";
import RCirujanosSetting from "@/components/settings/CirujanosSetting.vue";
import UserMixin from "@/mixins/userMixin.vue";

export default {
  mixins: [UserMixin],
  components: {
    RUserForm,
    RUserSetting,
    RCirujanosSetting
  },
  data() {
    return {
      activeTab: 0
    };
  }
};
</script>

<style lang="sass">
.user-form
  max-width: 600px
</style>