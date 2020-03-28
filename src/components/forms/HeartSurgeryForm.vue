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
      <b-field label="Emergencia" expanded>
        <b-switch v-model="form.emergencia">{{ form.emergencia | btm }}</b-switch>
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
    <h4 class="subtitle is-4">Reemplazo de Válvula Aórtica</h4>
    <b-field grouped>
      <b-field label="Prótesis Biológica" expanded>
        <b-select v-model="form.protesis_biologica" placeholder="Prótesis Biológica" expanded>
          <option value="ninguno">Ninguna</option>
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
          <option value="ninguno">Ninguna</option>
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
          <option value="ninguno">Ninguna</option>
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
          <option value="ninguno">Ninguna</option>
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
          <option value="ninguno">Ninguna</option>
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
          <option value="ninguno">Ninguna</option>
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
          <option value="ninguno">Ninguna</option>
          <option value="30">30</option>
          <option value="32">32</option>
          <option value="34">34</option>
          <option value="36">36</option>
        </b-select>
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Cirugía de Bentall</h4>
    <b-field grouped>
      <b-field label="Presente" expanded>
        <b-switch v-model="form.cirugia_bentall.presente">{{ form.cirugia_bentall.presente | btm }}</b-switch>
      </b-field>
      <b-field label="Tipo" expanded>
        <b-select
          v-model="form.cirugia_bentall.tipo"
          placeholder="Tipo"
          :disabled="!form.cirugia_bentall.presente"
          expanded
        >
          <option value="ninguno">Ninguna</option>
          <option value="biovalsalva">Biovalsalva</option>
          <option value="tubo_valvulado_protesis_mecanica">Tubo valvulado prótesis mecánica</option>
        </b-select>
      </b-field>
      <b-field label="Nro" expanded>
        <b-input
          v-model="form.cirugia_bentall.nro"
          :disabled="!form.cirugia_bentall.presente"
          placeholder="Nro"
          expanded
        />
      </b-field>
    </b-field>
    <b-field label="Clase" expanded>
      <b-select
        v-model="form.cirugia_bentall.clase"
        :disabled="!form.cirugia_bentall.presente"
        placeholder="Clase"
        expanded
      >
        <option value="ninguno">Ninguna</option>
        <option value="hemiarco">Hemiarco</option>
        <option value="arco_aortico">Arco aortico</option>
      </b-select>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Revascularizacion coronaria</h4>
    <b-field label="Conducto Safena interna" expanded>
      <b-switch
        v-model="form.revascularizacion_coronaria.presente"
      >{{ form.revascularizacion_coronaria.presente | btm }}</b-switch>
    </b-field>
    <b-field grouped>
      <b-field label="Conducto Safena interna" expanded>
        <b-select
          v-model="form.revascularizacion_coronaria.conducto_safena_interna"
          :disabled="!form.revascularizacion_coronaria.presente"
          placeholder="Conducto Safena Interna"
          expanded
        >
          <option value="ninguno">Ninguna</option>
          <option value="izquierda">Izquierda</option>
          <option value="derecha">Derecha</option>
          <option value="ambas">Ambas</option>
        </b-select>
      </b-field>
      <b-field label="Técnica" expanded>
        <b-select
          v-model="form.revascularizacion_coronaria.tecnica"
          :disabled="!form.revascularizacion_coronaria.presente"
          placeholder="Tecnica"
          expanded
        >
          <option value="ninguno">Ninguna</option>
          <option value="abierta">Abierta</option>
          <option value="cerrada">Cerrada</option>
        </b-select>
      </b-field>
    </b-field>
    <b-field grouped>
      <b-field label="Arteria radial" expanded>
        <b-select
          v-model="form.revascularizacion_coronaria.arteria_radial"
          :disabled="!form.revascularizacion_coronaria.presente"
          placeholder="Arteria radial"
          expanded
        >
          <option value="ninguno">Ninguna</option>
          <option value="izquierda">Izquierda</option>
          <option value="derecha">Derecha</option>
        </b-select>
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Opciones Quirurgicas</h4>
    <div class="columns">
      <div class="column">
        <div class="field">
          <b-radio v-model="form.opciones_quirurgicas.lima_rima" native-value="LIMA">LIMA</b-radio>
        </div>
        <div class="field">
          <b-radio v-model="form.opciones_quirurgicas.lima_rima" native-value="RIMA">RIMA</b-radio>
        </div>
        <div class="field">
          <b-radio v-model="form.opciones_quirurgicas.lima_rima" native-value="AMBAS">AMBAS</b-radio>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <b-checkbox v-model="form.opciones_quirurgicas.opciones" native-value="LIMA -DA">LIMA -DA</b-checkbox>
        </div>
        <div class="field">
          <b-checkbox v-model="form.opciones_quirurgicas.opciones" native-value="RIMA-DA">RIMA-DA</b-checkbox>
        </div>
        <div class="field">
          <b-checkbox
            v-model="form.opciones_quirurgicas.opciones"
            native-value="LIMA-DA +PAC A CX"
          >LIMA-DA +PAC A CX</b-checkbox>
        </div>
        <div class="field">
          <b-checkbox
            v-model="form.opciones_quirurgicas.opciones"
            native-value="LIMA-DA + PAC A CX + PAC A DP"
          >LIMA-DA + PAC A CX + PAC A DP</b-checkbox>
        </div>
        <div class="field">
          <b-checkbox
            v-model="form.opciones_quirurgicas.opciones"
            native-value="LIMA-DA + PAC A CX + PAC A CD"
          >LIMA-DA + PAC A CX + PAC A CD</b-checkbox>
        </div>
        <div class="field">
          <b-checkbox
            v-model="form.opciones_quirurgicas.opciones"
            native-value="LIMA -DA + PAC A RI"
          >LIMA -DA + PAC A RI</b-checkbox>
        </div>
        <div class="field">
          <b-checkbox
            v-model="form.opciones_quirurgicas.opciones"
            native-value="LIMA-DA +RIMA A CD +PAC A CX"
          >LIMA-DA +RIMA A CD +PAC A CX</b-checkbox>
        </div>
        <div class="field">
          <b-checkbox
            v-model="form.opciones_quirurgicas.opciones"
            native-value="LIMA-DA +RIMA EN Y A CX + PAC A CD"
          >LIMA-DA +RIMA EN Y A CX + PAC A CD</b-checkbox>
        </div>
        <div class="field">
          <b-checkbox
            v-model="form.opciones_quirurgicas.opciones"
            native-value="PAC A ADA + PAC A CX"
          >PAC A ADA + PAC A CX</b-checkbox>
        </div>
      </div>
    </div>
    <hr />
    <b-field grouped>
      <b-field label="Miectomia septal" expanded>
        <b-select v-model="form.miectomia_septal" placeholder="Miectomia septal" expanded>
          <option value="ninguno">Ninguna</option>
          <option value="morrow">Morrow</option>
          <option value="ampliada">Ampliada</option>
        </b-select>
      </b-field>
      <b-field label="Resección de tumor" expanded>
        <b-select v-model="form.mixoma" placeholder="Mixoma" expanded>
          <option value="ninguno">Ninguna</option>
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
          <option value="ninguno">Ninguna</option>
          <option value="congenita">Congenita</option>
          <option value="adquirida">Adquirida</option>
        </b-select>
      </b-field>
      <b-field label="Tipo" expanded>
        <b-select v-model="form.cierre_civ.tipo" placeholder="Tipo" expanded>
          <option value="ninguno">Ninguna</option>
          <option value="I">I</option>
          <option value="II">II</option>
          <option value="III">III</option>
          <option value="IV">IV</option>
        </b-select>
      </b-field>
      <b-field label="Parche" expanded>
        <b-select v-model="form.cierre_civ.parche" placeholder="Parche" expanded>
          <option value="ninguno">Ninguna</option>
          <option value="parche_pericardio">Parche de pericardio</option>
          <option value="parche_dacron">Parche de Dacron</option>
        </b-select>
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Ventriculoseptoplastia</h4>
    <b-field label="Parche" expanded>
      <b-select v-model="form.ventriculoseptoplastia.parche" placeholder="Parche" expanded>
        <option value="ninguno">Ninguna</option>
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
    <h4 class="subtitle is-4">Complicaciones</h4>
    <h3>Reintervención</h3>
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
    <b-field label="Derrame pericardico" expanded>
      <b-select v-model="form.complicaciones.derrame_pericardico.tipo" placeholder="Tipo" expanded>
        <option value="ninguno">Ninguna</option>
        <option value="hematico">Hematico</option>
        <option value="inflamatorio">Inflamatorio</option>
      </b-select>
    </b-field>
    <b-field label="Neumotorax" expanded>
      <b-switch
        expanded
        v-model="form.complicaciones.derrame_pericardico.neumotorax"
      >{{ form.complicaciones.derrame_pericardico.neumotorax | btm }}</b-switch>
    </b-field>
    <b-field label="Accidente vascular cerebral" expanded>
      <b-select
        v-model="form.complicaciones.accidente_vascular_cerebra"
        placeholder="Tipo"
        expanded
      >
        <option value="ninguno">Ninguna</option>
        <option value="isaquemico">Isaquemico</option>
        <option value="hemorragico">Hemorragico</option>
      </b-select>
    </b-field>
    <b-field label="Delirio y alucinaciones">
      <b-switch
        v-model="form.complicaciones.delirio_alucinaciones"
      >{{ form.complicaciones.delirio_alucinaciones | btm }}</b-switch>
    </b-field>
    <b-field label="Arritmias">
      <b-select v-model="form.complicaciones.arritmias" placeholder="Tipo" expanded>
        <option value="ninguno">Ninguna</option>
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
          <option value="ninguno">Ninguna</option>
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
    <b-field grouped>
      <b-field label="Presente" expanded>
        <b-switch
          v-model="form.complicaciones.dehiscencia_esternal.presente"
        >{{ form.complicaciones.dehiscencia_esternal.presente | btm }}</b-switch>
      </b-field>
      <b-field label="Tratamiento" expanded>
        <b-input
          type="textarea"
          v-model="form.complicaciones.dehiscencia_esternal.tratamiento"
          :disabled="!form.complicaciones.dehiscencia_esternal.presente"
          placeholder="Tratamiento"
          expanded
        />
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Derrame pleural</h4>
    <b-field grouped>
      <b-field label="Presente" expanded>
        <b-switch
          v-model="form.complicaciones.derrame_pleural.presente"
        >{{ form.complicaciones.derrame_pleural.presente | btm }}</b-switch>
      </b-field>
      <b-field label="Tipo" expanded>
        <b-select
          v-model="form.complicaciones.derrame_pleural.tipo"
          :disabled="!form.complicaciones.derrame_pleural.presente"
          placeholder="Tipo"
          expanded
        >
          <option value="ninguno">Ninguna</option>
          <option value="derecho">Derecho</option>
          <option value="izquierdo">Izquierdo</option>
          <option value="bilateral">Bilateral</option>
        </b-select>
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Mediastinitis</h4>
    <b-field label="Presente" expanded>
      <b-switch
        v-model="form.complicaciones.mediastinitis.presente"
      >{{ form.complicaciones.mediastinitis.presente | btm }}</b-switch>
    </b-field>
    <b-field grouped>
      <b-field label="Cultivo" expanded>
        <b-input
          :disabled="!form.complicaciones.mediastinitis.presente"
          type="textarea"
          v-model="form.complicaciones.mediastinitis.cultivo"
          placeholder="Cultivo"
          expanded
        />
      </b-field>
      <b-field label="Hospitalización" expanded>
        <b-input
          :disabled="!form.complicaciones.mediastinitis.presente"
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
          :disabled="!form.complicaciones.mediastinitis.presente"
          type="textarea"
          v-model="form.complicaciones.mediastinitis.tiempo_desde_cirugia"
          placeholder="Tiempo desde la cirugía"
          expanded
        />
      </b-field>
      <b-field label="Tratamiento" expanded>
        <b-input
          :disabled="!form.complicaciones.mediastinitis.presente"
          type="textarea"
          v-model="form.complicaciones.mediastinitis.tratamiento"
          placeholder="Tratamiento"
          expanded
        />
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Endocarditis de válvula protesica</h4>
    <b-field label="Presente" expanded>
      <b-switch
        v-model="form.complicaciones.endocarditis_valvula_protesica.presente"
      >{{ form.complicaciones.endocarditis_valvula_protesica.presente | btm }}</b-switch>
    </b-field>
    <b-field grouped>
      <b-field label="Precoz Tardía" expanded>
        <b-input
          :disabled="!form.complicaciones.endocarditis_valvula_protesica.presente"
          type="textarea"
          v-model="form.complicaciones.endocarditis_valvula_protesica.precoz_tardia"
          placeholder="Precoz Tardía"
          expanded
        />
      </b-field>
      <b-field label="Tratamiento" expanded>
        <b-input
          :disabled="!form.complicaciones.endocarditis_valvula_protesica.presente"
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
          :disabled="!form.complicaciones.endocarditis_valvula_protesica.presente"
          type="textarea"
          v-model="form.complicaciones.endocarditis_valvula_protesica.antibiotico"
          placeholder="Antibiotico"
          expanded
        />
      </b-field>
      <b-field label="Cultivo" expanded>
        <b-input
          :disabled="!form.complicaciones.endocarditis_valvula_protesica.presente"
          type="textarea"
          v-model="form.complicaciones.endocarditis_valvula_protesica.cultivo"
          placeholder="Cultivo"
          expanded
        />
      </b-field>
    </b-field>
    <hr />
    <h4 class="subtitle is-4">Muerte</h4>
    <b-field label="Presente" expanded>
      <b-switch
        v-model="form.complicaciones.muerte.presente"
      >{{ form.complicaciones.muerte.presente | btm }}</b-switch>
    </b-field>
    <b-field label="Fecha">
      <b-datetimepicker
        :disabled="!form.complicaciones.muerte.presente"
        v-model="form.complicaciones.muerte.fecha"
        :month-names="$monthNames"
        :day-names="$dayNames"
        :timepicker="{ enableSeconds: true, hourFormat: '12' }"
        placeholder="Fecha de muerte"
      />
    </b-field>
    <b-field grouped>
      <b-field label="Causa" expanded>
        <b-input
          :disabled="!form.complicaciones.muerte.presente"
          type="textarea"
          v-model="form.complicaciones.muerte.causa"
          placeholder="Causa"
          expanded
        />
      </b-field>
      <b-field label="Quirófano" expanded>
        <b-input
          :disabled="!form.complicaciones.muerte.presente"
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
          :disabled="!form.complicaciones.muerte.presente"
          type="textarea"
          v-model="form.complicaciones.muerte.uco"
          placeholder="UCO"
          expanded
        />
      </b-field>
      <b-field label="Hospitalización" expanded>
        <b-input
          :disabled="!form.complicaciones.muerte.presente"
          type="textarea"
          v-model="form.complicaciones.muerte.hospitalizacion"
          placeholder="Hospitalización"
          expanded
        />
      </b-field>
    </b-field>
    <hr />
    <div class="buttons">
      <b-button @click="cancel">Cancelar</b-button>
      <b-button type="is-primary" @click="save">Guardar</b-button>
    </div>
  </div>
</template>


<script>
import formMixin from "@/mixins/formMixin.vue";
export default {
  mixins: [formMixin],
  data() {
    return {
      form: {
        primera_cirujia: false,
        redo: false,
        programada: null,
        urgencia: false,
        emergencia: false,
        protesis_biologica: null,
        protesis_mecanica: null,
        esternotomia: null,
        miniesternotomia: null,
        transapical: null,
        anuloplastia_tricuspidea: null,
        miectomia_septal: null,
        valvula_mitral: {
          protesis_biologica: null,
          protesis_mecanica: null,
          esternotomia: null,
          minimainvasiva: null,
          anuloplastia: null
        },
        revascularizacion_coronaria: {},
        cirugia_bentall: {
          presente: null,
          tipo: null,
          numero: null,
          clase: null
        },
        conducto_safena_interna: {
          conducto_safena_interna: null,
          tipo: null,
          tecnica: null,
          arteria_radial: null
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
        opciones_quirurgicas: {
          lima_rima: null,
          opciones: []
        },
        complicaciones: {
          reintervencion: {
            causa: null,
            tiempo_despues: null
          },
          derrame_pericardico: {
            tipo: null,
            neumotorax: null
          },
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
            tratamiento: null,
            presente: null
          },
          derrame_pleural: {
            tipo: null,
            presente: null
          },
          mediastinitis: {
            cultivo: null,
            hospitalizacion: null,
            tiempo_desde_cirugia: null,
            tratamiento: null,
            presente: null
          },
          endocarditis_valvula_protesica: {
            precoz_tardia: null,
            tratamiento: null,
            antibiotico: null,
            cultivo: null,
            presente: null
          },
          muerte: {
            causa: null,
            quirofano: null,
            uco: null,
            hospitalizacion: null,
            presente: null,
            fecha: null
          }
        }
      },
      url: "heart-surgery"
    };
  },
  methods: {
    setData(data) {
      delete data._id;
      delete data.patient;
      for (let d in data) {
        if (d === "programada") {
          this.form[d] = new Date(data[d]);
          continue;
        }
        this.form[d] = data[d];
      }
    }
  }
};
</script>
