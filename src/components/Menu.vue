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
        :active="$route.name === 'pph'"
        :to="{ name: 'pph'}"
        label="Antecedentes personales patologicos"
      ></b-menu-item>
      <b-menu-item
        tag="router-link"
        :active="$route.name === 'coronary-angiography'"
        :to="{ name: 'coronary-angiography'}"
        label="Coronariografia"
      ></b-menu-item>
      <b-menu-item
        tag="router-link"
        :active="$route.name === 'transthoracic-echocardiogram'"
        :to="{ name: 'transthoracic-echocardiogram'}"
        label="Ecocardiograma transtorácico"
      ></b-menu-item>
      <b-menu-item
        tag="router-link"
        :active="$route.name === 'heart-surgery'"
        :to="{ name: 'heart-surgery'}"
        label="Cirugía cardiaca"
      ></b-menu-item>
      <b-menu-item
        tag="router-link"
        :active="$route.name === 'extracorporeal-circulation'"
        :to="{ name: 'extracorporeal-circulation'}"
        label="Circulación extracorporea"
      ></b-menu-item>
      <b-menu-item
        tag="router-link"
        :active="$route.name === 'others'"
        :to="{ name: 'others'}"
        label="Otros"
      ></b-menu-item>
      <b-menu-item
        tag="router-link"
        :active="$route.name === 'surgical-protocols'"
        :to="{ name: 'surgical-protocols'}"
        label="Protocolos Quirurgicos"
      ></b-menu-item>
    </b-menu-list>
  </b-menu>
</template>
