<template>
  <div class="wrapper">
    <b-collapse class="card" :open="false">
      <div slot="trigger" slot-scope="props" class="card-header" role="button">
        <p class="card-header-title">Basico:</p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <r-basic-form />
        </div>
      </div>
    </b-collapse>
    <b-collapse class="card" :open="false">
      <div slot="trigger" slot-scope="props" class="card-header" role="button">
        <p class="card-header-title">Antecedentes personales patologicos:</p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <r-app-form />
        </div>
      </div>
    </b-collapse>
    <b-collapse class="card" :open="false">
      <div slot="trigger" slot-scope="props" class="card-header" role="button">
        <p class="card-header-title">Coronariografia:</p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <r-coronografia-form />
        </div>
      </div>
    </b-collapse>
    <b-collapse class="card" :open="false">
      <div slot="trigger" slot-scope="props" class="card-header" role="button">
        <p class="card-header-title">Ecocardiograma transtoracico:</p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <r-escocardiograma-form />
        </div>
      </div>
    </b-collapse>
    <b-collapse class="card" :open="false">
      <div slot="trigger" slot-scope="props" class="card-header" role="button">
        <p class="card-header-title">Cirugía cardiaca:</p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <r-cirugia-cardiaca-form />
        </div>
      </div>
    </b-collapse>
    <b-collapse class="card" :open="false">
      <div slot="trigger" slot-scope="props" class="card-header" role="button">
        <p class="card-header-title">Circulación extracorporea:</p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <r-circulacion-extracorporea-form />
        </div>
      </div>
    </b-collapse>
    <b-collapse class="card" :open="false">
      <div slot="trigger" slot-scope="props" class="card-header" role="button">
        <p class="card-header-title">Otros:</p>
        <a class="card-header-icon">
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <r-final-form />
        </div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
import RBasicForm from "@/components/BasicForm.vue";
import RAppForm from "@/components/APPForm.vue";
import RCoronografiaForm from "@/components/CoronografiaForm.vue";
import REscocardiogramaForm from "@/components/EscocardiogramaForm.vue";
import RCirugiaCardiacaForm from "@/components/CirugiaCardiacaForm.vue";
import RCirculacionExtracorporeaForm from "@/components/CirculacionExtracorporeaForm.vue";
import RFinalForm from "@/components/FinalForm.vue";

export default {
  components: {
    RBasicForm,
    RAppForm,
    RCoronografiaForm,
    REscocardiogramaForm,
    RCirugiaCardiacaForm,
    RCirculacionExtracorporeaForm,
    RFinalForm
  }
};
</script>

<style lang="sass" scoped>
.wrapper
    margin-top: 5px
</style>
