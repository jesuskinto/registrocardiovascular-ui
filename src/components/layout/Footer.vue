<template>
  <footer class="footer">
    <div class="container has-text-centered">
      Hecho por 💻
      <a target="_blank" href="http://portafolio.jesuskinto.now.sh/">jesuskinto</a>
    </div>
    <div class="data">
      <small>
        <strong>VERSION:</strong>
        1.0.0
      </small>
      <br />
      <small>
        <strong>API:</strong>
        {{ API }}
      </small>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      API: process.env.VUE_APP_API_URL
    };
  }
};
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: -200px;
  width: 100%;
  height: 2.5rem;
}
.data {
  color: gray;
  position: absolute;
  right: 10px;
  bottom: 10px;
  text-align: right;
}
</style>