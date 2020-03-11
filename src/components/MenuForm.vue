<template>
  <b-menu>
    <b-menu-list label="Menu">
      <b-menu-item
        tag="router-link"
        :active="$route.name === 'basic'"
        :to="{ name: 'basic'}"
        label="Basico"
      ></b-menu-item>
      <b-menu-item
        tag="router-link"
        :active="$route.name === 'app'"
        :to="{ name: 'app'}"
        label="Antecedentes personales patologicos"
      ></b-menu-item>
      <b-menu-item
        tag="router-link"
        :active="$route.name === 'coronografia'"
        :to="{ name: 'coronografia'}"
        label="Coronariografia"
      ></b-menu-item>
      <b-menu-item
        tag="router-link"
        :active="$route.name === 'escocardiograma'"
        :to="{ name: 'escocardiograma'}"
        label="Ecocardiograma transtoracico"
      ></b-menu-item>
      <b-menu-item
        tag="router-link"
        :active="$route.name === 'cirugia-cardiaca'"
        :to="{ name: 'cirugia-cardiaca'}"
        label="Cirugía cardiaca"
      ></b-menu-item>
      <b-menu-item
        tag="router-link"
        :active="$route.name === 'circulacion-extracorporea'"
        :to="{ name: 'circulacion-extracorporea'}"
        label="Circulación extracorporea"
      ></b-menu-item>
      <b-menu-item
        tag="router-link"
        :active="$route.name === 'otros'"
        :to="{ name: 'otros'}"
        label="Otros"
      ></b-menu-item>
      <b-menu-item
        tag="router-link"
        :active="$route.name === 'protocolo-quirurgico'"
        :to="{ name: 'protocolo-quirurgico'}"
        label="Protocolo Quirurgico"
      ></b-menu-item>
    </b-menu-list>
  </b-menu>
</template>
