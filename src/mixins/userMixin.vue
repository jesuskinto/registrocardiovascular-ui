<script>
import VueJwtDecode from "vue-jwt-decode";

export default {
  methods: {
    getUserID() {
      const jwtCode = sessionStorage.getItem("token");
      if (!jwtCode) return {};
      const decode = VueJwtDecode.decode(jwtCode);
      return decode.data;
    },
    isAdmin() {
      const user = this.getUserID();
      return user.admin;
    }
  }
};
</script>