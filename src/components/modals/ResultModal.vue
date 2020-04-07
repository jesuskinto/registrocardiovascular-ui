<template>
  <form action>
    <div class>
      <div class="notification">
        <div class="content" v-if="res">
          <h3
            class="is-pulled-left has-text-primary"
          >{{ res.rut }} - {{ res._id | od | df('DD/MM/YY') }}</h3>
          <b-button type="is-primary" class="is-small is-pulled-right ml-10" @click="edit">Editar</b-button>
          <b-button type="is-danger" class="is-small is-pulled-right" @click="remove">Eliminar</b-button>
          <br />
          <small>
            <hr />
            <h3>Basico</h3>
            <ul>
              <li>
                <strong>rut:</strong>
                {{ res.rut }}
              </li>
              <li>
                <strong>nombres:</strong>
                {{ res.firstname }}
              </li>
              <li>
                <strong>apellidos:</strong>
                {{ res.lastname }}
              </li>
              <li>
                <strong>fecha de nacimiento:</strong>
                {{ res.birthdate | df('DD/MM/YY') }}
              </li>
              <li>
                <strong>edad:</strong>
                <span v-show="res.birthdate">{{ res.birthdate | age }}</span>
              </li>
              <li>
                <strong>cuenta:</strong>
                {{ res.account }}
              </li>
              <li>
                <strong>telefono:</strong>
                {{ res.phone }}
              </li>
              <li>
                <strong>peso:</strong>
                {{ res.weight }}
              </li>
              <li>
                <strong>talla:</strong>
                {{ res.size }}
              </li>
              <li>
                <strong>dirección:</strong>
                {{ res.address }}
              </li>
              <li>
                <strong>imc:</strong>
                {{ res.imc }}
              </li>
            </ul>
            <h3 v-if="res.diagnosis">Diagnostico</h3>
            <ul v-if="res.diagnosis">
              <li>
                <strong>Estenosis aortica:</strong>
                {{ res.diagnosis.estenosis_aortica | btm }}
              </li>
              <li>
                <strong>Insuficiencia aortica:</strong>
                {{ res.diagnosis.insuficiencia_aortica | btm }}
              </li>
              <li>
                <strong>Estenosis mitral:</strong>
                {{ res.diagnosis.estenosis_mitral | btm }}
              </li>
              <li>
                <strong>Insuficiencia mitral:</strong>
                {{ res.diagnosis.insuficiencia_mitral | btm }}
              </li>
              <li>
                <strong>Insuficiencia tricuspidea:</strong>
                {{ res.diagnosis.insuficiencia_tricuspidea | btm }}
              </li>
              <li>
                <strong>Aneurisma aorta ascendente:</strong>
                {{ res.diagnosis.aneurisma_aorta_ascendente | btm }}
              </li>
              <li>
                <strong>Enfermedad valvular aortica:</strong>
                {{ res.diagnosis.enfermedad_valvular_aortica | btm }}
              </li>
              <li>
                <strong>Enfermedad coronaria:</strong>
                {{ res.diagnosis.enfermedad_coronaria | btm }}
              </li>
              <li>
                <strong>Enfermedad valvular mitral:</strong>
                {{ res.diagnosis.enfermedad_valvular_mitral | btm }}
              </li>
              <li>
                <strong>Enfermedad aorta ascendente:</strong>
                {{ res.diagnosis.enfermedad_aorta_ascendente | btm }}
              </li>
              <li>
                <strong>Miocardiopatia hipertrofica obst:</strong>
                {{ res.diagnosis.miocardiopatia_hipertrofica_obstructiva | btm }}
              </li>
              <li>
                <strong>Comunicación interauricular:</strong>
                {{ res.diagnosis.comunicacion_interauricular | btm }}
              </li>
              <li>
                <strong>Comunicación interventricular:</strong>
                {{ res.diagnosis.comunicacion_interventricular | btm }}
              </li>
              <li>
                <strong>Pericardico constrictiva:</strong>
                {{ res.diagnosis.pericardico_constrictiva | btm }}
              </li>
              <li>
                <strong>Ductus arteriosus persistente:</strong>
                {{ res.diagnosis.ductus_arteriosus_persistente | btm }}
              </li>
              <li>
                <strong>Otros:</strong>
                {{ res.diagnosis.otros }}
              </li>
            </ul>
            <h3>Antecedentes personales patologicos</h3>
            <ul>
              <li v-if="res.pph.bloqueo_av">
                <strong>bloqueo_av:</strong>
                <ul>
                  <li>
                    <strong>grado:</strong>
                    {{ res.pph.bloqueo_av.grado }}
                  </li>
                  <li>
                    <strong>marcapaso:</strong>
                    {{ res.pph.bloqueo_av.marcapaso }}
                  </li>
                </ul>
              </li>
              <li v-if="res.pph.bloqueo_av">
                <strong>cancer:</strong>
                <ul>
                  <li>
                    <strong>tipo:</strong>
                    {{ res.pph.cancer.tipo}}
                  </li>
                  <li>
                    <strong>localizacion:</strong>
                    {{ res.pph.cancer.localizacion}}
                  </li>
                </ul>
              </li>
              <li>
                <strong>diabetes:</strong>
                {{ res.pph.diabetes}}
              </li>
              <li>
                <strong>enfermedad cerebro vascular:</strong>
                {{ res.pph.enfermedad_cerebro_vascular}}
              </li>
              <li v-if="res.pph.enfermedad_renal">
                <strong>enfermedad renal:</strong>
                <ul>
                  <li>
                    <strong>tipo:</strong>
                    {{res.pph.enfermedad_renal.tipo}}
                  </li>
                  <li>
                    <strong>estadio:</strong>
                    {{res.pph.enfermedad_renal.estadio }}
                  </li>
                  <li>
                    <strong>dialisis:</strong>
                    {{res.pph.enfermedad_renal.dialisis }}
                  </li>
                </ul>
              </li>
              <li>
                <strong>shock cardiogenico:</strong>
                <ul v-if="res.pph.shock_cardiogenico">
                  <li>
                    <strong>presente:</strong>
                    {{ res.pph.shock_cardiogenico.presente | btm}}
                  </li>
                  <li>
                    <strong>colocacion:</strong>
                    {{ res.pph.shock_cardiogenico.colocacion}}
                  </li>
                </ul>
              </li>
              <li>
                <strong>alcohol:</strong>
                {{ res.pph.alcohol | btm}}
              </li>
              <li>
                <strong>asma:</strong>
                {{ res.pph.asma | btm}}
              </li>
              <li>
                <strong>drogas:</strong>
                {{ res.pph.drogas | btm}}
              </li>
              <li>
                <strong>enfermedad arterial periferica:</strong>
                {{ res.pph.enfermedad_arterial_periferica | btm}}
              </li>
              <li>
                <strong>enfermedad carotidea:</strong>
                {{ res.pph.enfermedad_carotidea | btm}}
              </li>
              <li>
                <strong>enfermedad pulmonar obstructiva cronica:</strong>
                {{ res.pph.enfermedad_pulmonar_obstructiva_cronica | btm}}
              </li>
              <li>
                <strong>hipertencion:</strong>
                {{ res.pph.hipertencion | btm}}
              </li>
              <li>
                <strong>tabaquismo:</strong>
                {{ res.pph.tabaquismo | btm}}
              </li>
              <li>
                <strong>alergia medicamentos:</strong>
                {{ res.pph.alergia_medicamentos}}
              </li>
              <li>
                <strong>apnea del sueno:</strong>
                {{ res.pph.apnea_del_sueno | btm}}
              </li>
              <li>
                <strong>cirugias previas:</strong>
                {{ res.pph.cirugias_previas}}
              </li>
              <li>
                <strong>endocarditis:</strong>
                {{ res.pph.endocarditis}}
              </li>
              <li>
                <strong>enfermedad hepatica:</strong>
                {{ res.pph.enfermedad_hepatica | btm}}
              </li>
              <li>
                <strong>inmunosupresion:</strong>
                {{ res.pph.inmunosupresion | btm}}
              </li>
              <li>
                <strong>radiacion mediastinal:</strong>
                {{ res.pph.radiacion_mediastinal | btm }}
              </li>
              <li>
                <strong>arritmia ventriculares:</strong>
                {{ res.pph.arritmia_ventriculares}}
              </li>
              <li>
                <strong>clase funcional nyha:</strong>
                {{ res.pph.clase_funcional_nyha}}
              </li>
              <li>
                <strong>fibrilacion auricular:</strong>
                {{ res.pph.fibrilacion_auricular}}
              </li>
              <li>
                <strong>flutter auricular:</strong>
                {{ res.pph.flutter_auricular | btm }}
              </li>
              <li>
                <strong>infarto agudo miocardio:</strong>
                {{ res.pph.infarto_agudo_miocardio}}
              </li>
              <li>
                <strong>infarto agudo miocardio tratamiento:</strong>
                {{ res.pph.infarto_agudo_miocardio_tratamiento}}
              </li>
            </ul>
            <h3>Coronariografia</h3>
            <ul>
              <li>
                <strong>angioplastia:</strong>
                <ul v-if="res.coronaryAngiography.angioplastia">
                  <li>
                    <strong>Presente:</strong>
                    {{ res.coronaryAngiography.angioplastia.presente | btm }}
                  </li>
                  <li>
                    <strong>Pcta:</strong>
                    {{ res.coronaryAngiography.angioplastia.pcta }}
                  </li>
                </ul>
              </li>
              <li>
                <strong>clopidogrel:</strong>
                {{ res.coronaryAngiography.clopidogrel | btm}}
              </li>
              <li>
                <strong>fecha:</strong>
                {{ res.coronaryAngiography.fecha | df }}
              </li>
              <li>
                <strong>ticagrelor:</strong>
                {{ res.coronaryAngiography.ticagrelor | btm}}
              </li>
              <li>
                <strong>vasos enfermos:</strong>
                {{ res.coronaryAngiography.vasos_enfermos }}
              </li>
              <li>
                <strong>arterias revascularizadas:</strong>
                {{ res.coronaryAngiography.arterias_revascularizadas }}
              </li>
              <li>
                <strong>complicaciones:</strong>
                {{ res.coronaryAngiography.complicaciones }}
              </li>
              <li>
                <strong>nro coronariografias:</strong>
                {{ res.coronaryAngiography.nro_coronariografias }}
              </li>
              <li>
                <strong>ada proximal:</strong>
                {{ res.coronaryAngiography.ada_proximal }}
              </li>
              <li>
                <strong>enfermedad tci:</strong>
                {{ res.coronaryAngiography.enfermedad_tci }}
              </li>
            </ul>
            <h3>Ecocardiograma transtorácico</h3>
            <ul>
              <li>
                <strong>derrame pericardico</strong>
                <ul v-if="res.transthoracicEchocardiogram.derrame_pericardico">
                  <li>
                    <strong>tipo:</strong>
                    {{ res.transthoracicEchocardiogram.derrame_pericardico.tipo | btm }}
                  </li>
                </ul>
              </li>
              <li>
                <strong>estenosis mitral</strong>
                <ul v-if="res.transthoracicEchocardiogram.estenosis_mitral">
                  <li>
                    <strong>tipo:</strong>
                    {{ res.transthoracicEchocardiogram.estenosis_mitral.tipo }}
                  </li>
                  <li>
                    <strong>valor:</strong>
                    {{ res.transthoracicEchocardiogram.estenosis_mitral.valor | ats }}
                  </li>
                  <li>
                    <strong>AVA:</strong>
                    {{ res.transthoracicEchocardiogram.estenosis_mitral.AVA }}
                  </li>
                  <li>
                    <strong>GMED:</strong>
                    {{ res.transthoracicEchocardiogram.estenosis_mitral.GMED }}
                  </li>
                </ul>
              </li>
              <li>
                <strong>estenosis valvula pulmonar</strong>
                <ul v-if="res.transthoracicEchocardiogram.estenosis_valvula_pulmonar">
                  <li>
                    <strong>tipo:</strong>
                    {{ res.transthoracicEchocardiogram.estenosis_valvula_pulmonar.tipo }}
                  </li>
                  <li>
                    <strong>valor:</strong>
                    {{ res.transthoracicEchocardiogram.estenosis_valvula_pulmonar.valor | ats }}
                  </li>
                </ul>
              </li>
              <li>
                <strong>estenosis valvula tricuspide</strong>
                <ul v-if="res.transthoracicEchocardiogram.estenosis_valvula_tricuspide">
                  <li>
                    <strong>tipo:</strong>
                    {{ res.transthoracicEchocardiogram.estenosis_valvula_tricuspide.tipo }}
                  </li>
                  <li>
                    <strong>valor:</strong>
                    {{ res.transthoracicEchocardiogram.estenosis_valvula_tricuspide.valor | ats }}
                  </li>
                </ul>
              </li>
              <li>
                <strong>esternosis aortica</strong>
                <ul v-if="res.transthoracicEchocardiogram.esternosis_aortica">
                  <li>
                    <strong>tipo:</strong>
                    {{ res.transthoracicEchocardiogram.esternosis_aortica.tipo }}
                  </li>
                  <li>
                    <strong>vmax:</strong>
                    {{ res.transthoracicEchocardiogram.esternosis_aortica.vmax }}
                  </li>
                  <li>
                    <strong>ava:</strong>
                    {{ res.transthoracicEchocardiogram.esternosis_aortica.ava }}
                  </li>
                  <li>
                    <strong>gmed:</strong>
                    {{ res.transthoracicEchocardiogram.esternosis_aortica.gmed }}
                  </li>
                </ul>
              </li>
              <li>
                <strong>insuficiencia aortica:</strong>
                <ul v-if="res.transthoracicEchocardiogram.insuficiencia_aortica">
                  <li>
                    <strong>tipo:</strong>
                    {{ res.transthoracicEchocardiogram.insuficiencia_aortica.tipo }}
                  </li>
                  <li>
                    <strong>dilatacion anular:</strong>
                    {{ res.transthoracicEchocardiogram.insuficiencia_aortica.dilatacion_anular }}
                  </li>
                  <li>
                    <strong>prolapso velo:</strong>
                    {{ res.transthoracicEchocardiogram.insuficiencia_aortica.prolapso_velo }}
                  </li>
                  <li>
                    <strong>perforacion velo:</strong>
                    {{ res.transthoracicEchocardiogram.insuficiencia_aortica.perforacion_velo }}
                  </li>
                  <li>
                    <strong>vena contracta:</strong>
                    {{ res.transthoracicEchocardiogram.insuficiencia_aortica.vena_contracta }}
                  </li>
                  <li>
                    <strong>vol regurgitante:</strong>
                    {{ res.transthoracicEchocardiogram.insuficiencia_aortica.vol_regurgitante }}
                  </li>
                  <li>
                    <strong>ore:</strong>
                    {{ res.transthoracicEchocardiogram.insuficiencia_aortica.ore }}
                  </li>
                </ul>
              </li>
              <li>
                <strong>insuficiencia mitral:</strong>
                <ul v-if="res.transthoracicEchocardiogram.insuficiencia_mitral">
                  <li>
                    <strong>tipo:</strong>
                    {{ res.transthoracicEchocardiogram.insuficiencia_mitral.tipo }}
                  </li>
                  <li>
                    <strong>valor:</strong>
                    {{ res.transthoracicEchocardiogram.insuficiencia_mitral.valor | ats }}
                  </li>
                </ul>
              </li>
              <li>
                <strong>insuficiencia valvula pulmonar:</strong>
                <ul v-if="res.transthoracicEchocardiogram.insuficiencia_valvula_pulmonar">
                  <strong>tipo:</strong>
                  {{ res.transthoracicEchocardiogram.insuficiencia_valvula_pulmonar.tipo }}
                </ul>
              </li>
              <li>
                <strong>insuficiencia valvula tricuspide:</strong>
                <ul v-if="res.transthoracicEchocardiogram.insuficiencia_valvula_tricuspide">
                  <li>
                    <strong>tipo:</strong>
                    {{ res.transthoracicEchocardiogram.insuficiencia_valvula_tricuspide.tipo }}
                  </li>
                  <li>
                    <strong>valor:</strong>
                    {{ res.transthoracicEchocardiogram.insuficiencia_valvula_tricuspide.valor | ats }}
                  </li>
                </ul>
              </li>
              <li>
                <strong>resonancia cardiaca:</strong>
                <ul v-if="res.transthoracicEchocardiogram.resonancia_cardiaca">
                  <li>
                    <strong>fevi:</strong>
                    {{ res.transthoracicEchocardiogram.resonancia_cardiaca.fevi }}
                  </li>
                  <li>
                    <strong>septum ventricular:</strong>
                    {{ res.transthoracicEchocardiogram.resonancia_cardiaca.septum_ventricular }}
                  </li>
                  <li>
                    <strong>viabilidad:</strong>
                    {{ res.transthoracicEchocardiogram.resonancia_cardiaca.viabilidad }}
                  </li>
                </ul>
              </li>
            </ul>
            <h3>Cirugía cardiaca</h3>
            <ul>
              <li>
                <strong>primera cirujia:</strong>
                {{ res.heartSurgery.primera_cirujia | btm}}
              </li>
              <li>
                <strong>redo:</strong>
                {{ res.heartSurgery.redo | btm}}
              </li>
              <li>
                <strong>programada:</strong>
                {{ res.heartSurgery.programada}}
              </li>
              <li>
                <strong>urgencia:</strong>
                {{ res.heartSurgery.urgencia | btm}}
              </li>
              <li>
                <strong>emergencia:</strong>
                {{ res.heartSurgery.emergencia | btm}}
              </li>
              <li>
                <strong>protesis biologica:</strong>
                {{ res.heartSurgery.protesis_biologica}}
              </li>
              <li>
                <strong>protesis mecanica:</strong>
                {{ res.heartSurgery.protesis_mecanica}}
              </li>
              <li>
                <strong>valvula mitral:</strong>
                <ul v-if="res.heartSurgery.valvula_mitral">
                  <li>
                    <strong>protesis biologica:</strong>
                    {{ res.heartSurgery.valvula_mitral.protesis_biologica }}
                  </li>
                  <li>
                    <strong>protesis mecanica:</strong>
                    {{ res.heartSurgery.valvula_mitral.protesis_mecanica }}
                  </li>
                  <li>
                    <strong>esternotomia:</strong>
                    {{ res.heartSurgery.valvula_mitral.esternotomia | btm }}
                  </li>
                  <li>
                    <strong>minimainvasiva:</strong>
                    {{ res.heartSurgery.valvula_mitral.minimainvasiva | btm}}
                  </li>
                  <li>
                    <strong>anuloplastia:</strong>
                    {{ res.heartSurgery.valvula_mitral.anuloplastia }}
                  </li>
                  <li>
                    <strong>reparacion:</strong>
                    {{ res.heartSurgery.valvula_mitral.reparacion }}
                  </li>
                </ul>
              </li>
              <li>
                <strong>revascularizacion coronaria:</strong>
                <ul v-if="res.heartSurgery.revascularizacion_coronaria">
                  <li>
                    <strong>presente:</strong>
                    {{ res.heartSurgery.revascularizacion_coronaria.presente | btm }}
                  </li>
                  <li>
                    <strong>conducto safena interna:</strong>
                    {{ res.heartSurgery.revascularizacion_coronaria.conducto_safena_interna}}
                  </li>
                  <li>
                    <strong>tecnica:</strong>
                    {{ res.heartSurgery.revascularizacion_coronaria.tecnica}}
                  </li>
                  <li>
                    <strong>arteria radial:</strong>
                    {{ res.heartSurgery.revascularizacion_coronaria.arteria_radial}}
                  </li>
                </ul>
              </li>
              <li>
                <strong>cirugia bentall:</strong>
                <ul v-if="res.heartSurgery.cirugia_bentall">
                  <li>
                    <strong>presente</strong>
                    {{ res.heartSurgery.cirugia_bentall.presente | btm }}
                  </li>
                  <li>
                    <strong>tipo</strong>
                    {{ res.heartSurgery.cirugia_bentall.tipo}}
                  </li>
                  <li>
                    <strong>numero</strong>
                    {{ res.heartSurgery.cirugia_bentall.numero}}
                  </li>
                  <li>
                    <strong>clase</strong>
                    {{ res.heartSurgery.cirugia_bentall.clase}}
                  </li>
                  <li>
                    <strong>nro</strong>
                    {{ res.heartSurgery.cirugia_bentall.nro}}
                  </li>
                </ul>
              </li>
              <li>
                <strong>conducto safena interna:</strong>
                <ul v-if="res.heartSurgery.conducto_safena_interna">
                  <li>
                    <strong>conducto safena interna:</strong>
                    {{ res.heartSurgery.conducto_safena_interna.conducto_safena_interna}}
                  </li>
                  <li>
                    <strong>tipo:</strong>
                    {{ res.heartSurgery.conducto_safena_interna.tipo}}
                  </li>
                  <li>
                    <strong>tecnica:</strong>
                    {{ res.heartSurgery.conducto_safena_interna.tecnica}}
                  </li>
                  <li>
                    <strong>arteria radial:</strong>
                    {{ res.heartSurgery.conducto_safena_interna.arteria_radial}}
                  </li>
                </ul>
              </li>
              <li>
                <strong>mixoma:</strong>
                {{ res.heartSurgery.mixoma}}
              </li>
              <li>
                <strong>cirugia arco aortico:</strong>
                <ul v-if="res.heartSurgery.cirugia_arco_aortico">
                  <li>
                    <strong>tubo dacron</strong>
                    {{ res.heartSurgery.cirugia_arco_aortico.tubo_dacron}}
                  </li>
                  <li>
                    <strong>thoraflex</strong>
                    {{ res.heartSurgery.cirugia_arco_aortico.thoraflex}}
                  </li>
                  <li>
                    <strong>nro</strong>
                    {{ res.heartSurgery.cirugia_arco_aortico.nro}}
                  </li>
                </ul>
              </li>
              <li>
                <strong>cierre comunicacion interauricular:</strong>
                <ul v-if="res.heartSurgery.cierre_comunicacion_interauricular">
                  <li>
                    <strong>tamano defecto auricular</strong>
                    {{ res.heartSurgery.cierre_comunicacion_interauricular.tamano_defecto_auricular}}
                  </li>
                  <li>
                    <strong>parche pericardio</strong>
                    {{ res.heartSurgery.cierre_comunicacion_interauricular.parche_pericardio}}
                  </li>
                  <li>
                    <strong>parche dacron</strong>
                    {{ res.heartSurgery.cierre_comunicacion_interauricular.parche_dacron}}
                  </li>
                </ul>
              </li>
              <li>
                <strong>cierre civ:</strong>
                <ul v-if="res.heartSurgery.cierre_civ">
                  <li>
                    <strong>clasificacion:</strong>
                    {{ res.heartSurgery.cierre_civ.clasificacion}}
                  </li>
                  <li>
                    <strong>tipo</strong>
                    {{ res.heartSurgery.cierre_civ.tipo}}
                  </li>
                  <li>
                    <strong>parche</strong>
                    {{ res.heartSurgery.cierre_civ.parche}}
                  </li>
                </ul>
              </li>
              <li>
                <strong>ventriculoseptoplastia:</strong>
                <ul v-if="res.heartSurgery.estenosis_valvula_tricuspide">
                  <li>
                    <strong>parche</strong>
                    {{ res.heartSurgery.ventriculoseptoplastia.parche}}
                  </li>
                </ul>
              </li>
              <li>
                <strong>pericardiectomia anterior:</strong>
                {{ res.heartSurgery.pericardiectomia_anterior | btm }}
              </li>
              <li>
                <strong>opciones quirurgicas:</strong>
                <ul v-if="res.heartSurgery.opciones_quirurgicas">
                  <li>
                    <strong>lima rima:</strong>
                    {{ res.heartSurgery.opciones_quirurgicas.lima_rima}}
                  </li>
                  <li>
                    <strong>opciones:</strong>
                    {{ res.heartSurgery.opciones_quirurgicas.opciones | ats }}
                  </li>
                </ul>
              </li>
              <li v-if="res.heartSurgery.complicaciones">
                <strong>complicaciones:</strong>
                <ul>
                  <li>
                    <strong>reintervencion:</strong>
                    <ul>
                      <li>
                        <strong>causa:</strong>
                        {{ res.heartSurgery.complicaciones.reintervencion.causa }}
                      </li>
                      <li>
                        <strong>tiempo despues</strong>
                        {{ res.heartSurgery.complicaciones.reintervencion.tiempo_despues }}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>derrame pericardico:</strong>
                    <ul>
                      <li>
                        <strong>tipo:</strong>
                        {{ res.heartSurgery.complicaciones.derrame_pericardico.tipo}}
                      </li>
                      <li>
                        <strong>neumotorax:</strong>
                        {{ res.heartSurgery.complicaciones.derrame_pericardico.neumotorax | btm }}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>accidente vascular cerebra:</strong>
                    {{ res.heartSurgery.complicaciones.accidente_vascular_cerebra }}
                  </li>
                  <li>
                    <strong>delirio alucinaciones:</strong>
                    {{ res.heartSurgery.complicaciones.delirio_alucinaciones | btm }}
                  </li>
                  <li>
                    <strong>arritmias:</strong>
                    {{ res.heartSurgery.complicaciones.arritmias }}
                  </li>
                  <li>
                    <strong>bloqueo av:</strong>
                    <ul>
                      <li>
                        <strong>tipo</strong>
                        {{ res.heartSurgery.complicaciones.bloqueo_av.tipo }}
                      </li>
                      <li>
                        <strong>marcapaso</strong>
                        {{ res.heartSurgery.complicaciones.bloqueo_av.marcapaso }}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>infeccion herida operatoria superficial:</strong>
                    <ul>
                      <li>
                        <strong>cultivo:</strong>
                        {{ res.heartSurgery.complicaciones.infeccion_herida_operatoria_superficial.cultivo }}
                      </li>
                      <li>
                        <strong>tiempo desde cirugia:</strong>
                        {{ res.heartSurgery.complicaciones.infeccion_herida_operatoria_superficial.tiempo_desde_cirugia }}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>infenccion herida operatoria profunda:</strong>
                    <ul>
                      <li>
                        <strong>cultivo</strong>
                        {{ res.heartSurgery.complicaciones.infenccion_herida_operatoria_profunda.cultivo }}
                      </li>
                      <li>
                        <strong>tiempo desde cirugia</strong>
                        {{ res.heartSurgery.complicaciones.infenccion_herida_operatoria_profunda.tiempo_desde_cirugia }}
                      </li>
                      <li>
                        <strong>hospitalizacion</strong>
                        {{ res.heartSurgery.complicaciones.infenccion_herida_operatoria_profunda.hospitalizacion }}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>dehiscencia esternal:</strong>
                    <ul>
                      <li>
                        <strong>presente:</strong>
                        {{res.heartSurgery.complicaciones.dehiscencia_esternal.presente | btm }}
                      </li>
                      <li>
                        <strong>tratamiento:</strong>
                        {{res.heartSurgery.complicaciones.dehiscencia_esternal.tratamiento}}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>derrame pleural:</strong>
                    <ul>
                      <li>
                        <strong>presente:</strong>
                        {{res.heartSurgery.complicaciones.derrame_pleural.presente | btm }}
                      </li>
                      <li>
                        <strong>tipo:</strong>
                        {{res.heartSurgery.complicaciones.derrame_pleural.tipo}}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>mediastinitis:</strong>
                    <ul>
                      <li>
                        <strong>presente:</strong>
                        {{res.heartSurgery.complicaciones.mediastinitis.presente | btm }}
                      </li>
                      <li>
                        <strong>cultivo:</strong>
                        {{res.heartSurgery.complicaciones.mediastinitis.cultivo}}
                      </li>
                      <li>
                        <strong>hospitalizacion:</strong>
                        {{res.heartSurgery.complicaciones.mediastinitis.hospitalizacion}}
                      </li>
                      <li>
                        <strong>tratamiento:</strong>
                        {{res.heartSurgery.complicaciones.mediastinitis.tratamiento}}
                      </li>
                      <li>
                        <strong>tiempo desde cirugia:</strong>
                        {{res.heartSurgery.complicaciones.mediastinitis.tiempo_desde_cirugia}}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>endocarditis valvula protesica:</strong>
                    <ul>
                      <li>
                        <strong>presente</strong>
                        {{ res.heartSurgery.complicaciones.endocarditis_valvula_protesica.presente | btm }}
                      </li>
                      <li>
                        <strong>precoz tardia</strong>
                        {{ res.heartSurgery.complicaciones.endocarditis_valvula_protesica.precoz_tardia }}
                      </li>
                      <li>
                        <strong>tratamiento</strong>
                        {{ res.heartSurgery.complicaciones.endocarditis_valvula_protesica.tratamiento }}
                      </li>
                      <li>
                        <strong>cultivo</strong>
                        {{ res.heartSurgery.complicaciones.endocarditis_valvula_protesica.cultivo }}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>muerte:</strong>
                    <ul>
                      <li>
                        <strong>presente:</strong>
                        {{ res.heartSurgery.complicaciones.muerte.presente | btm }}
                      </li>
                      <li>
                        <strong>causa:</strong>
                        {{ res.heartSurgery.complicaciones.muerte.causa }}
                      </li>
                      <li>
                        <strong>quirofano:</strong>
                        {{ res.heartSurgery.complicaciones.muerte.quirofano }}
                      </li>
                      <li>
                        <strong>uco:</strong>
                        {{ res.heartSurgery.complicaciones.muerte.uco }}
                      </li>
                      <li>
                        <strong>hospitalización:</strong>
                        {{ res.heartSurgery.complicaciones.muerte.hospitalizacion }}
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <h3>Circulación extracorporea</h3>
            <ul v-if="res.extracorporealCirculation">
              <li>
                <strong>hora inicio cirugia:</strong>
                {{ res.extracorporealCirculation.hora_inicio_cirugia }}
              </li>
              <li>
                <strong>hora fin cirugia:</strong>
                {{ res.extracorporealCirculation.hora_fin_cirugia }}
              </li>
              <li>
                <strong>hora inicio cec:</strong>
                {{ res.extracorporealCirculation.hora_inicio_cec }}
              </li>
              <li>
                <strong>tiempo clamp:</strong>
                {{ res.extracorporealCirculation.tiempo_clamp }}
              </li>
              <li>
                <strong>tiempo cec total:</strong>
                {{ res.extracorporealCirculation.tiempo_cec_total }}
              </li>
              <li>
                <strong>cardioplegia:</strong>
                <ul v-if="res.extracorporealCirculation.cardioplegia">
                  <li>
                    <strong>type</strong>
                    {{ res.extracorporealCirculation.cardioplegia.type }}
                  </li>
                  <li>
                    <strong>class</strong>
                    {{ res.extracorporealCirculation.cardioplegia.class }}
                  </li>
                  <li>
                    <strong>method</strong>
                    {{ res.extracorporealCirculation.cardioplegia.method }}
                  </li>
                </ul>
              </li>
              <li>
                <strong>asistencia ventricular izquierda postoperatoria:</strong>
                {{ res.extracorporealCirculation.asistencia_ventricular_izquierda_postoperatoria }}
              </li>
              <li>
                <strong>canulación:</strong>
                <ul v-if="res.extracorporealCirculation.canulacion">
                  <li>
                    <strong>arterial</strong>
                    {{ res.extracorporealCirculation.canulacion.arterial }}
                  </li>
                  <li>
                    <strong>venosa</strong>
                    {{ res.extracorporealCirculation.canulacion.venosa }}
                  </li>
                </ul>
              </li>
              <li>
                <strong>tiempo arresto circulatorio:</strong>
                <ul v-if="res.extracorporealCirculation.tiempo_arresto_circulatorio">
                  <li>
                    <strong>tecnica correción ph:</strong>
                    {{ res.extracorporealCirculation.tiempo_arresto_circulatorio.tecnica_correcion_ph }}
                  </li>
                  <li>
                    <strong>temperatura descenso:</strong>
                    {{ res.extracorporealCirculation.tiempo_arresto_circulatorio.temperatura_descenso }}
                  </li>
                  <li>
                    <strong>tiempo descenso:</strong>
                    {{ res.extracorporealCirculation.tiempo_arresto_circulatorio.tiempo_descenso }}
                  </li>
                  <li>
                    <strong>recalentamiento:</strong>
                    {{ res.extracorporealCirculation.tiempo_arresto_circulatorio.recalentamiento }}
                  </li>
                  <li>
                    <strong>tiempo recalentamiento:</strong>
                    {{ res.extracorporealCirculation.tiempo_arresto_circulatorio.tiempo_recalentamiento }}
                  </li>
                  <li>
                    <strong>tiempo total arresto circulatorio:</strong>
                    {{ res.extracorporealCirculation.tiempo_arresto_circulatorio.tiempo_total_arresto_circulatorio }}
                  </li>
                </ul>
              </li>
              <li>
                <strong>perfusion cerebral:</strong>
                <ul v-if="res.extracorporealCirculation.perfusion_cerebral">
                  <li>
                    <strong>anterograda</strong>
                    {{ res.extracorporealCirculation.perfusion_cerebral.anterograda }}
                  </li>
                  <li>
                    <strong>retrograda</strong>
                    {{ res.extracorporealCirculation.perfusion_cerebral.retrograda }}
                  </li>
                </ul>
              </li>
            </ul>
            <h3>Otros</h3>
            <ul>
              <li>
                <strong>dias uci:</strong>
                {{res.others.dias_uci}}
              </li>
              <li>
                <strong>dias uti:</strong>
                {{res.others.dias_uti}}
              </li>
              <li>
                <strong>dias totales hospitalización:</strong>
                {{res.others.dias_totales_hospitalizacion}}
              </li>
              <li>
                <strong>dias intubacion:</strong>
                {{res.others.dias_intubacion}}
              </li>
              <li>
                <strong>drogras vasoactivas:</strong>
                <ul v-if="res.others.drogras_vasoactivas">
                  <li>
                    <strong>tiene:</strong>
                    {{res.others.drogras_vasoactivas.tiene | btm }}
                  </li>
                  <li>
                    <strong>tipo:</strong>
                    {{res.others.drogras_vasoactivas.tipo}}
                  </li>
                </ul>
              </li>
              <li>
                <strong>ecocardiograma postoperatorio:</strong>
                <ul v-if="res.others.ecocardiograma_postoperatorio">
                  <li>
                    <strong>fevi</strong>
                    {{res.others.ecocardiograma_postoperatorio.fevi}}
                  </li>
                  <li>
                    <strong>cinesia ventricular</strong>
                    {{res.others.ecocardiograma_postoperatorio.cinesia_ventricular}}
                  </li>
                  <li>
                    <strong>protesis valvular</strong>
                    {{res.others.ecocardiograma_postoperatorio.protesis_valvular }}
                  </li>
                </ul>
              </li>
              <li>
                <strong>control postoperatorio:</strong>
                <ul v-if="res.others.control_postoperatorio">
                  <li>
                    <strong>dias 15:</strong>
                    {{res.others.control_postoperatorio.dias_15}}
                  </li>
                  <li>
                    <strong>mes 1:</strong>
                    {{res.others.control_postoperatorio.mes_1}}
                  </li>
                  <li>
                    <strong>mes 3:</strong>
                    {{res.others.control_postoperatorio.mes_3}}
                  </li>
                </ul>
              </li>
            </ul>
            <h3>Protocolos Quirurgicos</h3>
            <r-surgical-protocols :id="id"></r-surgical-protocols>
          </small>
        </div>
        <hr />
        <b-button type="is-primary" class="is-small" @click="edit">Editar</b-button>
        <b-button type="is-danger" class="is-small ml-10" @click="remove">Eliminar</b-button>
      </div>
    </div>
  </form>
</template>

<script>
import Rest from "@/services/rest";
import RSurgicalProtocols from "@/components/SurgicalProtocols.vue";
import RQuestionModal from "@/components/modals/QuestionModal.vue";
export default {
  components: {
    RSurgicalProtocols
  },
  props: {
    id: {
      default: null,
      type: String
    }
  },
  data() {
    return {
      res: null
    };
  },
  methods: {
    edit() {
      this.$router.push(`form/${this.id}/basic`);
      this.$parent.close();
    },
    async getData() {
      const loading = this.$buefy.loading.open();
      try {
        const res = await Rest.get(`patients/${this.id}/?all=true`);
        this.res = res.data.data;
        loading.close();
      } catch ({ response: res }) {
        this.$danger(res && res.data ? res.data.message : "Server Error");
        loading.close();
      }
    },
    remove() {
      const question = {
        title: "¿Desea Eliminar ?",
        message: `¿Desea eliminar toda la informacion del paciente ${this.res.rut}?, ¡esta acción es permanente!`
      };
      this.$buefy.modal.open({
        parent: this,
        component: RQuestionModal,
        hasModalCard: true,
        props: { question }
      });
    },
    async acceptModal() {
      const loading = this.$buefy.loading.open();
      try {
        await Rest.delete(`patients/${this.id}`);
        this.$success("Paciente eliminado");
        this.$emit("patientdeleted");
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