<template>
  <div>
    <b-field grouped>
      <b-field label="Primera cirugia" expanded>
        <b-switch v-model="form.primera_cirujia">{{ form.primera_cirujia | btm }}</b-switch>
      </b-field>
      <b-field label="REDO" expanded>
        <b-switch v-model="form.redo">{{ form.redo | btm }}</b-switch>
      </b-field>
      <b-field label="Urgencia" expanded>
        <b-switch v-model="form.urgencia">{{ form.urgencia | btm }}</b-switch>
      </b-field>
    </b-field>
    <b-field label="Programada" expanded>
      <b-datepicker
        v-model="form.programada"
        :month-names="$monthNames"
        :day-names="$dayNames"
        placeholder="Fecha de programación"
      />
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Reemplazo de Válvula Ahortico</h4>
    <b-field grouped>
      <b-field label="Prótesis Biológica" expanded>
        <b-select v-model="form.protesis_biologica" placeholder="Prótesis Biológica" expanded>
          <option :value="null">Ninguna</option>
          <option value="cronw">Cronw</option>
          <option value="perceval">Perceval</option>
          <option value="19">19</option>
          <option value="21">21</option>
          <option value="23">23</option>
          <option value="25">25</option>
        </b-select>
      </b-field>
      <b-field label="Prótesis Mecánica" expanded>
        <b-select v-model="form.protesis_mecanica" placeholder="Prótesis Mecánica" expanded>
          <option :value="null">Ninguna</option>
          <option value="19">19</option>
          <option value="21">21</option>
          <option value="23">23</option>
          <option value="25">25</option>
        </b-select>
      </b-field>
    </b-field>
    <b-field grouped>
      <b-field label="Esternotomia" expanded>
        <b-switch v-model="form.esternotomia">{{ form.esternotomia | btm }}</b-switch>
      </b-field>
      <b-field label="Miniesternotomia" expanded>
        <b-switch v-model="form.miniesternotomia">{{ form.miniesternotomia | btm }}</b-switch>
      </b-field>
      <b-field label="Transapical" expanded>
        <b-switch v-model="form.transapical">{{ form.transapical | btm }}</b-switch>
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Reemplazo válvular mitral</h4>
    <b-field grouped>
      <b-field label="Prótesis Biológica" expanded>
        <b-select
          v-model="form.valvula_mitral.protesis_biologica"
          placeholder="Prótesis Biológica"
          expanded
        >
          <option :value="null">Ninguna</option>
          <option value="25">25</option>
          <option value="27">27</option>
          <option value="29">29</option>
          <option value="31">31</option>
          <option value="33">33</option>
        </b-select>
      </b-field>
      <b-field label="Prótesis Mecánica" expanded>
        <b-select
          v-model="form.valvula_mitral.protesis_mecanica"
          placeholder="Prótesis Mecánica"
          expanded
        >
          <option :value="null">Ninguna</option>
          <option value="25">25</option>
          <option value="27">27</option>
          <option value="29">29</option>
          <option value="31">31</option>
          <option value="33">33</option>
        </b-select>
      </b-field>
    </b-field>
    <b-field grouped>
      <b-field label="Esternotomia" expanded>
        <b-switch
          v-model="form.valvula_mitral.esternotomia"
        >{{ form.valvula_mitral.esternotomia | btm }}</b-switch>
      </b-field>
      <b-field label="Minimainvasiva" expanded>
        <b-switch
          v-model="form.valvula_mitral.minimainvasiva"
        >{{ form.valvula_mitral.minimainvasiva | btm }}</b-switch>
      </b-field>
    </b-field>
    <b-field grouped>
      <b-field label="Anuloplastia mitral" expanded>
        <b-select
          v-model="form.valvula_mitral.anuloplastia"
          placeholder="Anuloplastia mitral"
          expanded
        >
          <option :value="null">Ninguna</option>
          <option value="30">30</option>
          <option value="32">32</option>
          <option value="34">34</option>
          <option value="36">36</option>
        </b-select>
      </b-field>
      <b-field label="Reparación de válvula mitral" expanded>
        <b-select
          v-model="form.valvula_mitral.reparacion"
          placeholder="Anuloplastia mitral"
          expanded
        >
          <option :value="null">Ninguna</option>
          <option value="neocuerdas">Neocuerdas</option>
          <option value="resección_triangular">Resección triangular</option>
          <option value="resección_cuadrángular">Resección cuadrángular</option>
          <option value="Sliding">Sliding</option>
        </b-select>
      </b-field>
      <b-field label="Anuloplastia tricuspidea" expanded>
        <b-select
          v-model="form.anuloplastia_tricuspidea"
          placeholder="Anuloplastia tricuspidea"
          expanded
        >
          <option :value="null">Ninguna</option>
          <option value="30">30</option>
          <option value="32">32</option>
          <option value="34">34</option>
          <option value="36">36</option>
        </b-select>
      </b-field>
    </b-field>
    <p class="has-text-danger">
      Cirugía de Bentall
      Biovalsalva. Tubo valvulado prótesis mecánica
      Nro
      Hemiarco Arco aortico
    </p>
    <p class="has-text-danger">
      Revascularizacion coronaria
      Conducto
      Safena interna
      Izquierda derecha ambas
      Técnica abierta Tecnica Cerrada
      Arteria radial
      Izquierda Derecha
      LIMA RIMA AMBAS
      LIMA -DA
      RIMA-DA
      LIMA-DA +PAC A CX
      LIMA-DA + PAC A CX + PAC A DP
      LIMA-DA + PAC A CX + PAC A CD
      LIMA -DA + PAC A RI
      LIMA-DA +RIMA A CD +PAC A CX
      LIMA-DA +RIMA EN Y A CX + PAC A CD
      PAC A ADA + PAC A CX
    </p>
    <b-field grouped>
      <b-field label="Miectomia septal" expanded>
        <b-select v-model="form.miectomia_septal" placeholder="Miectomia septal" expanded>
          <option :value="null">Ninguna</option>
          <option value="morrow">Morrow</option>
          <option value="ampliada">Ampliada</option>
        </b-select>
      </b-field>
      <b-field label="Resección de tumor" expanded>
        <b-select v-model="form.mixoma" placeholder="Mixoma" expanded>
          <option :value="null">Ninguna</option>
          <option value="transeptal">Transeptal</option>
          <option value="auricula_izquierda">Auricula izquierda</option>
        </b-select>
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Cirugía de arco aortico</h4>
    <b-field grouped>
      <b-field label="Tubo de dacron" expanded>
        <b-input
          type="text"
          v-model="form.cirugia_arco_aortico.tubo_dacron"
          placeholder="Tubo de dacron"
          expanded
        />
      </b-field>
      <b-field label="Thoraflex" expanded>
        <b-input
          type="text"
          v-model="form.cirugia_arco_aortico.thoraflex"
          placeholder="Thoraflex"
          expanded
        />
      </b-field>
      <b-field label="Nro" expanded>
        <b-input type="number" v-model="form.cirugia_arco_aortico.nro" placeholder="Nro" expanded />
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Cierre de comunicación interauricular</h4>
    <b-field grouped>
      <b-field label="T. de defecto auricular" expanded>
        <b-input
          type="text"
          v-model="form.cierre_comunicacion_interauricular.tamano_defecto_auricular"
          placeholder="Tamaño de defecto auricular"
          expanded
        />
      </b-field>
      <b-field label="Parche de pericardio" expanded>
        <b-input
          type="text"
          v-model="form.cierre_comunicacion_interauricular.parche_pericardio"
          placeholder="Parche de pericardio"
          expanded
        />
      </b-field>
      <b-field label="Parche de Dacron" expanded>
        <b-input
          type="text"
          v-model="form.cierre_comunicacion_interauricular.parche_dacron"
          placeholder="Parche de Dacron"
          expanded
        />
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Cierre de CIV</h4>
    <b-field grouped>
      <b-field label="Clasificación" expanded>
        <b-select v-model="form.cierre_civ.clasificacion" placeholder="Clasificación" expanded>
          <option :value="null">Ninguna</option>
          <option value="congenita">Congenita</option>
          <option value="adquirida">Adquirida</option>
        </b-select>
      </b-field>
      <b-field label="Tipo" expanded>
        <b-select v-model="form.cierre_civ.tipo" placeholder="Tipo" expanded>
          <option :value="null">Ninguna</option>
          <option value="I">I</option>
          <option value="II">II</option>
          <option value="III">III</option>
          <option value="IV">IV</option>
        </b-select>
      </b-field>
      <b-field label="Parche" expanded>
        <b-select v-model="form.cierre_civ.parche" placeholder="Parche" expanded>
          <option :value="null">Ninguna</option>
          <option value="parche_pericardio">Parche de pericardio</option>
          <option value="parche_dacron">Parche de Dacron</option>
        </b-select>
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Ventriculoseptoplastia</h4>
    <b-field label="Parche" expanded>
      <b-select v-model="form.ventriculoseptoplastia.parche" placeholder="Parche" expanded>
        <option :value="null">Ninguna</option>
        <option value="parche_pericardio">Parche de pericardio</option>
        <option value="parche_dacron">Parche de Dacron</option>
      </b-select>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Pericardiectomia anterior</h4>
    <b-field label="Pericardiectomia anterior">
      <b-switch v-model="form.pericardiectomia_anterior">{{ form.pericardiectomia_anterior | btm }}</b-switch>
    </b-field>
    <hr />
    <h3>Complicaciones</h3>
    <h4 class="subtitle is-4">Reintervención</h4>
    <b-field grouped>
      <b-field label="Causa" expanded>
        <b-input
          type="text"
          v-model="form.complicaciones.reintervencion.causa"
          placeholder="Causa"
          expanded
        />
      </b-field>
      <b-field label="Tiempo después" expanded>
        <b-input
          type="text"
          v-model="form.complicaciones.reintervencion.tiempo_despues"
          placeholder="Tiempo después de la cirugía"
          expanded
        />
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Derrame pericardico</h4>
    <b-field expanded>
      <b-select v-model="form.complicaciones.derrame_pericardico" placeholder="Tipo" expanded>
        <option :value="null">Ninguna</option>
        <option value="hematico">Hematico</option>
        <option value="inflamatorio">Inflamatorio</option>
        <option value="neumotorax">Neumotorax</option>
      </b-select>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Accidente vascular cerebral</h4>
    <b-field expanded>
      <b-select
        v-model="form.complicaciones.accidente_vascular_cerebra"
        placeholder="Tipo"
        expanded
      >
        <option :value="null">Ninguna</option>
        <option value="isaquemico">Isaquemico</option>
        <option value="hemorragico">Hemorragico</option>
      </b-select>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Delirio y alucinaciones</h4>
    <b-field>
      <b-switch
        v-model="form.complicaciones.delirio_alucinaciones"
      >{{ form.complicaciones.delirio_alucinaciones | btm }}</b-switch>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Arritmias</h4>
    <b-field>
      <b-select v-model="form.complicaciones.arritmias" placeholder="Tipo" expanded>
        <option :value="null">Ninguna</option>
        <option value="fa">FA</option>
        <option value="tv">TV</option>
        <option value="fv">Fv</option>
      </b-select>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Bloqueo AV</h4>
    <b-field grouped>
      <b-field label="Tipo" expanded>
        <b-select v-model="form.complicaciones.bloqueo_av.tipo" placeholder="Tipo" expanded>
          <option :value="null">Ninguna</option>
          <option value="1er">1er</option>
          <option value="2do">2do</option>
          <option value="completo">Completo</option>
        </b-select>
      </b-field>
      <b-field label="Marcapaso" expanded>
        <b-input
          v-model="form.complicaciones.bloqueo_av.marcapaso"
          placeholder="Cuanto tiempo desde la cirugía"
          expanded
        />
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Infección de Herida operatoria superficial</h4>
    <b-field grouped>
      <b-field label="Cultivo" expanded>
        <b-input
          v-model="form.complicaciones.infeccion_herida_operatoria_superficial.cultivo"
          placeholder="Cultivo"
          expanded
        />
      </b-field>
      <b-field label="Tiempo desde la cirugía" expanded>
        <b-input
          v-model="form.complicaciones.infeccion_herida_operatoria_superficial.tiempo_desde_cirugia"
          placeholder="Cuanto tiempo desde la cirugía"
          expanded
        />
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Infeccion de Herida operatoria profunda</h4>
    <b-field grouped>
      <b-field label="Cultivo" expanded>
        <b-input
          v-model="form.complicaciones.infenccion_herida_operatoria_profunda.cultivo"
          placeholder="Cultivo"
          expanded
        />
      </b-field>
      <b-field label="Tiempo desde la cirugía" expanded>
        <b-input
          v-model="form.complicaciones.infenccion_herida_operatoria_profunda.tiempo_desde_cirugia"
          placeholder="Cuanto tiempo desde la cirugía"
          expanded
        />
      </b-field>
      <b-field label="Hospitalización" expanded>
        <b-input
          v-model="form.complicaciones.infenccion_herida_operatoria_profunda.hospitalizacion"
          placeholder="Hospitalización"
          expanded
        />
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Dehiscencia Esternal</h4>
    <b-field>
      <b-field label="Tratamiento">
        <b-input
          v-model="form.complicaciones.dehiscencia_esternal.tratamiento"
          placeholder="Tratamiento"
          expanded
        />
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Derrame pleural</h4>
    <b-field label="Tipo">
      <b-select v-model="form.complicaciones.derrame_pleural" placeholder="Tipo" expanded>
        <option :value="null">Ninguna</option>
        <option value="derecho">Derecho</option>
        <option value="izquierdo">Izquierdo</option>
        <option value="bilateral">Bilateral</option>
      </b-select>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Mediastinitis</h4>
    <b-field grouped>
      <b-field label="Cultivo" expanded>
        <b-input
          type="textarea"
          v-model="form.complicaciones.mediastinitis.cultivo"
          placeholder="Cultivo"
          expanded
        />
      </b-field>
      <b-field label="Hospitalización" expanded>
        <b-input
          type="textarea"
          v-model="form.complicaciones.mediastinitis.hospitalizacion"
          placeholder="Hospitalización"
          expanded
        />
      </b-field>
    </b-field>
    <b-field grouped>
      <b-field label="Tiempo desde la cirugía" expanded>
        <b-input
          type="textarea"
          v-model="form.complicaciones.mediastinitis.tiempo_desde_cirugia"
          placeholder="Tiempo desde la cirugía"
          expanded
        />
      </b-field>
      <b-field label="Tratamiento" expanded>
        <b-input
          type="textarea"
          v-model="form.complicaciones.mediastinitis.tratamiento"
          placeholder="Tratamiento"
          expanded
        />
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Endocarditis de válvula protesica</h4>
    <b-field grouped>
      <b-field label="Precoz Tardía" expanded>
        <b-input
          type="textarea"
          v-model="form.complicaciones.endocarditis_valvula_protesica.precoz_tardia"
          placeholder="Precoz Tardía"
          expanded
        />
      </b-field>
      <b-field label="Tratamiento" expanded>
        <b-input
          type="textarea"
          v-model="form.complicaciones.endocarditis_valvula_protesica.tratamiento"
          placeholder="Tratamiento"
          expanded
        />
      </b-field>
    </b-field>
    <b-field grouped>
      <b-field label="Antibiotico" expanded>
        <b-input
          type="textarea"
          v-model="form.complicaciones.endocarditis_valvula_protesica.antibiotico"
          placeholder="Antibiotico"
          expanded
        />
      </b-field>
      <b-field label="Cultivo" expanded>
        <b-input
          type="textarea"
          v-model="form.complicaciones.endocarditis_valvula_protesica.cultivo"
          placeholder="Cultivo"
          expanded
        />
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Muerte</h4>
    <b-field grouped>
      <b-field label="Causa" expanded>
        <b-input
          type="textarea"
          v-model="form.complicaciones.muerte.causa"
          placeholder="Causa"
          expanded
        />
      </b-field>
      <b-field label="Quirófano" expanded>
        <b-input
          type="textarea"
          v-model="form.complicaciones.muerte.quirofano"
          placeholder="Quirófano"
          expanded
        />
      </b-field>
    </b-field>
    <b-field grouped>
      <b-field label="UCO" expanded>
        <b-input
          type="textarea"
          v-model="form.complicaciones.muerte.uco"
          placeholder="UCO"
          expanded
        />
      </b-field>
      <b-field label="Hospitalización" expanded>
        <b-input
          type="textarea"
          v-model="form.complicaciones.muerte.hospitalizacion"
          placeholder="Hospitalización"
          expanded
        />
      </b-field>
    </b-field>
    <hr />
    <div class="buttons">
      <b-button>Cancelar</b-button>
      <b-button type="is-primary">Guardar</b-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        primera_cirujia: false,
        redo: false,
        programada: null,
        urgencia: false,
        protesis_biologica: null,
        protesis_mecanica: null,
        valvula_mitral: {
          protesis_biologica: null,
          protesis_mecanica: null,
          esternotomia: null,
          minimainvasiva: null,
          anuloplastia: null
        },
        mixoma: null,
        cirugia_arco_aortico: {
          tubo_dacron: null,
          thoraflex: null,
          nro: null
        },
        cierre_comunicacion_interauricular: {
          tamano_defecto_auricular: null,
          parche_pericardio: null,
          parche_dacron: null
        },
        cierre_civ: {
          clasificacion: null,
          tipo: null,
          parche: null
        },
        ventriculoseptoplastia: {
          parche: null
        },
        pericardiectomia_anterior: false,
        complicaciones: {
          reintervencion: {
            causa: null,
            tiempo_despues: null
          },
          derrame_pericardico: null,
          accidente_vascular_cerebra: null,
          delirio_alucinaciones: false,
          arritmias: null,
          bloqueo_av: {
            tipo: null,
            marcapaso: null
          },
          infeccion_herida_operatoria_superficial: {
            cultivo: null,
            tiempo_desde_cirugia: null
          },
          infenccion_herida_operatoria_profunda: {
            cultivo: null,
            tiempo_desde_cirugia: null,
            hospitalizacion: null
          },
          dehiscencia_esternal: {
            tratamiento: null
          },
          derrame_pleural: null,
          mediastinitis: {
            cultivo: null,
            hospitalizacion: null,
            tiempo_desde_cirugia: null,
            tratamiento: null
          },
          endocarditis_valvula_protesica: {
            precoz_tardia: null,
            tratamiento: null,
            antibiotico: null,
            cultivo: null
          },
          muerte: {
            causa: null,
            quirofano: null,
            uco: null,
            Hospitalización: null
          }
        }
      }
    };
  }
};
</script>
