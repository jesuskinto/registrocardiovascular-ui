<template>
  <form action>
    <div class>
      <div class="notification">
        <div class="content" v-if="res">
          <b-button type="is-primary" class="is-small is-pulled-right ml-10" @click="edit">Editar</b-button>
          <b-button type="is-danger" class="is-small is-pulled-right" @click="remove">Eliminar</b-button>
          <small>
            <hr />
            <h3>Basico</h3>
            <ul>
              <li>
                <strong>rut:</strong>
                {{ res.rut }}
              </li>
              <li>
                <strong>firstname:</strong>
                {{ res.firstname }}
              </li>
              <li>
                <strong>lastname:</strong>
                {{ res.lastname }}
              </li>
              <li>
                <strong>birthdate:</strong>
                {{ res.birthdate }}
              </li>
              <li>
                <strong>age:</strong>
                <span v-show="res.birthdate">{{ res.birthdate | age }}</span>
              </li>
              <li>
                <strong>account:</strong>
                {{ res.account }}
              </li>
              <li>
                <strong>phone:</strong>
                {{ res.phone }}
              </li>
              <li>
                <strong>weight:</strong>
                {{ res.weight }}
              </li>
              <li>
                <strong>size:</strong>
                {{ res.size }}
              </li>
              <li>
                <strong>address:</strong>
                {{ res.address }}
              </li>
              <li>
                <strong>imc:</strong>
                {{ res.imc }}
              </li>
            </ul>
            <h3>Antecedentes personales patologicos</h3>
            <ul>
              <li>
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
              <li>
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
                <strong>enfermedad_cerebro_vascular:</strong>
                {{ res.pph.enfermedad_cerebro_vascular}}
              </li>
              <li>
                <strong>enfermedad_renal:</strong>
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
                <strong>shock_cardiogenico:</strong>
                <ul>
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
                <strong>enfermedad_arterial_periferica:</strong>
                {{ res.pph.enfermedad_arterial_periferica | btm}}
              </li>
              <li>
                <strong>enfermedad_carotidea:</strong>
                {{ res.pph.enfermedad_carotidea | btm}}
              </li>
              <li>
                <strong>enfermedad_pulmonar_obstructiva_cronica:</strong>
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
                <strong>alergia_medicamentos:</strong>
                {{ res.pph.alergia_medicamentos}}
              </li>
              <li>
                <strong>apnea_del_sueno:</strong>
                {{ res.pph.apnea_del_sueno | btm}}
              </li>
              <li>
                <strong>cirugias_previas:</strong>
                {{ res.pph.cirugias_previas}}
              </li>
              <li>
                <strong>endocarditis:</strong>
                {{ res.pph.endocarditis}}
              </li>
              <li>
                <strong>enfermedad_hepatica:</strong>
                {{ res.pph.enfermedad_hepatica | btm}}
              </li>
              <li>
                <strong>inmunosupresion:</strong>
                {{ res.pph.inmunosupresion | btm}}
              </li>
              <li>
                <strong>radiacion_mediastinal:</strong>
                {{ res.pph.radiacion_mediastinal | btm }}
              </li>
              <li>
                <strong>arritmia_ventriculares:</strong>
                {{ res.pph.arritmia_ventriculares}}
              </li>
              <li>
                <strong>clase_funcional_nyha:</strong>
                {{ res.pph.clase_funcional_nyha}}
              </li>
              <li>
                <strong>fibrilacion_auricular:</strong>
                {{ res.pph.fibrilacion_auricular}}
              </li>
              <li>
                <strong>flutter_auricular:</strong>
                {{ res.pph.flutter_auricular | btm }}
              </li>
              <li>
                <strong>infarto_agudo_miocardio:</strong>
                {{ res.pph.infarto_agudo_miocardio}}
              </li>
              <li>
                <strong>infarto_agudo_miocardio_tratamiento:</strong>
                {{ res.pph.infarto_agudo_miocardio_tratamiento}}
              </li>
            </ul>
            <h3>Coronariografia</h3>
            <ul>
              <li>
                <strong>angioplastia:</strong>
                <ul>
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
                {{ res.coronaryAngiography.fecha }}
              </li>
              <li>
                <strong>ticagrelor:</strong>
                {{ res.coronaryAngiography.ticagrelor | btm}}
              </li>
              <li>
                <strong>vasos_enfermos:</strong>
                {{ res.coronaryAngiography.vasos_enfermos }}
              </li>
              <li>
                <strong>arterias_revascularizadas:</strong>
                {{ res.coronaryAngiography.arterias_revascularizadas }}
              </li>
              <li>
                <strong>complicaciones:</strong>
                {{ res.coronaryAngiography.complicaciones }}
              </li>
              <li>
                <strong>nro_coronariografias:</strong>
                {{ res.coronaryAngiography.nro_coronariografias }}
              </li>
              <li>
                <strong>ada_proximal:</strong>
                {{ res.coronaryAngiography.ada_proximal }}
              </li>
              <li>
                <strong>enfermedad_tci:</strong>
                {{ res.coronaryAngiography.enfermedad_tci }}
              </li>
            </ul>
            <h3>Ecocardiograma transtorácico</h3>
            <ul>
              <li>
                <strong>derrame_pericardico</strong>
                <ul>
                  <li>
                    <strong>tipo:</strong>
                    {{ res.transthoracicEchocardiogram.derrame_pericardico.tipo | btm }}
                  </li>
                </ul>
              </li>
              <li>
                <strong>estenosis_mitral</strong>
                <ul>
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
                <strong>estenosis_valvula_pulmonar</strong>
                <ul>
                  <li>
                    <strong>tipo:</strong>
                    {{ res.transthoracicEchocardiogram.estenosis_valvula_pulmonar.tipo }}
                  </li>
                  <li>
                    <strong>valor:</strong>
                    {{ res.transthoracicEchocardiogram.estenosis_valvula_pulmonar.valor | ast }}
                  </li>
                </ul>
              </li>
              <li>
                <strong>estenosis_valvula_tricuspide</strong>
                <ul>
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
                <strong>esternosis_aortica</strong>
                <ul>
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
                <strong>insuficiencia_aortica:</strong>
                <ul>
                  <li>
                    <strong>tipo:</strong>
                    {{ res.transthoracicEchocardiogram.insuficiencia_aortica.tipo }}
                  </li>
                  <li>
                    <strong>dilatacion_anular:</strong>
                    {{ res.transthoracicEchocardiogram.insuficiencia_aortica.dilatacion_anular }}
                  </li>
                  <li>
                    <strong>prolapso_velo:</strong>
                    {{ res.transthoracicEchocardiogram.insuficiencia_aortica.prolapso_velo }}
                  </li>
                  <li>
                    <strong>perforacion_velo:</strong>
                    {{ res.transthoracicEchocardiogram.insuficiencia_aortica.perforacion_velo }}
                  </li>
                  <li>
                    <strong>vena_contracta:</strong>
                    {{ res.transthoracicEchocardiogram.insuficiencia_aortica.vena_contracta }}
                  </li>
                  <li>
                    <strong>vol_regurgitante:</strong>
                    {{ res.transthoracicEchocardiogram.insuficiencia_aortica.vol_regurgitante }}
                  </li>
                  <li>
                    <strong>ore:</strong>
                    {{ res.transthoracicEchocardiogram.insuficiencia_aortica.ore }}
                  </li>
                </ul>
              </li>
              <li>
                <strong>insuficiencia_mitral:</strong>

                <ul>
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
                <strong>insuficiencia_valvula_pulmonar:</strong>
                <ul>
                  <strong>tipo:</strong>
                  {{ res.transthoracicEchocardiogram.insuficiencia_valvula_pulmonar.tipo }}
                </ul>
              </li>
              <li>
                <strong>insuficiencia_valvula_tricuspide:</strong>
                <ul>
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
                <strong>resonancia_cardiaca:</strong>
                <ul>
                  <li>
                    <strong>fevi:</strong>
                    {{ res.transthoracicEchocardiogram.resonancia_cardiaca.fevi }}
                  </li>
                  <li>
                    <strong>septum_ventricular:</strong>
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
                <strong>primera_cirujia:</strong>
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
                <strong>protesis_biologica:</strong>
                {{ res.heartSurgery.protesis_biologica}}
              </li>
              <li>
                <strong>protesis_mecanica:</strong>
                {{ res.heartSurgery.protesis_mecanica}}
              </li>
              <li>
                <strong>valvula_mitral:</strong>
                <ul>
                  <li>
                    <strong>protesis_biologica:</strong>
                    {{ res.heartSurgery.valvula_mitral.protesis_biologica }}
                  </li>
                  <li>
                    <strong>protesis_mecanica:</strong>
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
                <strong>revascularizacion_coronaria:</strong>
                <ul>
                  <li>
                    <strong>presente:</strong>
                    {{ res.heartSurgery.revascularizacion_coronaria.presente | btm }}
                  </li>
                  <li>
                    <strong>conducto_safena_interna:</strong>
                    {{ res.heartSurgery.revascularizacion_coronaria.conducto_safena_interna}}
                  </li>
                  <li>
                    <strong>tecnica:</strong>
                    {{ res.heartSurgery.revascularizacion_coronaria.tecnica}}
                  </li>
                  <li>
                    <strong>arteria_radial:</strong>
                    {{ res.heartSurgery.revascularizacion_coronaria.arteria_radial}}
                  </li>
                </ul>
              </li>
              <li>
                <strong>cirugia_bentall:</strong>
                <ul>
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
                <strong>conducto_safena_interna:</strong>
                <ul>
                  <li>
                    <strong>conducto_safena_interna:</strong>
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
                    <strong>arteria_radial:</strong>
                    {{ res.heartSurgery.conducto_safena_interna.arteria_radial}}
                  </li>
                </ul>
              </li>
              <li>
                <strong>mixoma:</strong>
                {{ res.heartSurgery.mixoma}}
              </li>
              <li>
                <strong>cirugia_arco_aortico:</strong>
                <ul>
                  <li>
                    <strong>tubo_dacron</strong>
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
                <strong>cierre_comunicacion_interauricular:</strong>
                <ul>
                  <li>
                    <strong>tamano_defecto_auricular</strong>
                    {{ res.heartSurgery.cierre_comunicacion_interauricular.tamano_defecto_auricular}}
                  </li>
                  <li>
                    <strong>parche_pericardio</strong>
                    {{ res.heartSurgery.cierre_comunicacion_interauricular.parche_pericardio}}
                  </li>
                  <li>
                    <strong>parche_dacron</strong>
                    {{ res.heartSurgery.cierre_comunicacion_interauricular.parche_dacron}}
                  </li>
                </ul>
              </li>
              <li>
                <strong>cierre_civ:</strong>
                <ul>
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
                <ul>
                  <li>
                    <strong>parche</strong>
                    {{ res.heartSurgery.ventriculoseptoplastia.parche}}
                  </li>
                </ul>
              </li>
              <li>
                <strong>pericardiectomia_anterior:</strong>
                {{ res.heartSurgery.pericardiectomia_anterior | btm }}
              </li>
              <li>
                <strong>opciones_quirurgicas:</strong>
                <ul>
                  <li>
                    <strong>lima_rima:</strong>
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
                        <strong>tiempo_despues</strong>
                        {{ res.heartSurgery.complicaciones.reintervencion.tiempo_despues }}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>derrame_pericardico:</strong>
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
                    <strong>accidente_vascular_cerebra:</strong>
                    {{ res.heartSurgery.complicaciones.accidente_vascular_cerebra }}
                  </li>
                  <li>
                    <strong>delirio_alucinaciones:</strong>
                    {{ res.heartSurgery.complicaciones.delirio_alucinaciones | btm }}
                  </li>
                  <li>
                    <strong>arritmias:</strong>
                    {{ res.heartSurgery.complicaciones.arritmias }}
                  </li>
                  <li>
                    <strong>bloqueo_av:</strong>
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
                    <strong>infeccion_herida_operatoria_superficial:</strong>
                    <ul>
                      <li>
                        <strong>cultivo:</strong>
                        {{ res.heartSurgery.complicaciones.infeccion_herida_operatoria_superficial.cultivo }}
                      </li>
                      <li>
                        <strong>tiempo_desde_cirugia:</strong>
                        {{ res.heartSurgery.complicaciones.infeccion_herida_operatoria_superficial.tiempo_desde_cirugia }}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>infenccion_herida_operatoria_profunda:</strong>
                    <ul>
                      <li>
                        <strong>cultivo</strong>
                        {{ res.heartSurgery.complicaciones.infenccion_herida_operatoria_profunda.cultivo }}
                      </li>
                      <li>
                        <strong>tiempo_desde_cirugia</strong>
                        {{ res.heartSurgery.complicaciones.infenccion_herida_operatoria_profunda.tiempo_desde_cirugia }}
                      </li>
                      <li>
                        <strong>hospitalizacion</strong>
                        {{ res.heartSurgery.complicaciones.infenccion_herida_operatoria_profunda.hospitalizacion }}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>dehiscencia_esternal:</strong>
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
                    <strong>derrame_pleural:</strong>
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
                        <strong>tiempo_desde_cirugia:</strong>
                        {{res.heartSurgery.complicaciones.mediastinitis.tiempo_desde_cirugia}}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>endocarditis_valvula_protesica:</strong>
                    <ul>
                      <li>
                        <strong>presente</strong>
                        {{ res.heartSurgery.complicaciones.endocarditis_valvula_protesica.presente | btm }}
                      </li>
                      <li>
                        <strong>precoz_tardia</strong>
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
                        <strong>hospitalizacion:</strong>
                        {{ res.heartSurgery.complicaciones.muerte.hospitalizacion }}
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <h3>Circulación extracorporea</h3>
            <ul>
              <li>
                <strong>hora_inicio_cirugia:</strong>
                {{ res.extracorporealCirculation.hora_inicio_cirugia }}
              </li>
              <li>
                <strong>hora_fin_cirugia:</strong>
                {{ res.extracorporealCirculation.hora_fin_cirugia }}
              </li>
              <li>
                <strong>hora_inicio_cec:</strong>
                {{ res.extracorporealCirculation.hora_inicio_cec }}
              </li>
              <li>
                <strong>tiempo_clamp:</strong>
                {{ res.extracorporealCirculation.tiempo_clamp }}
              </li>
              <li>
                <strong>tiempo_cec_total:</strong>
                {{ res.extracorporealCirculation.tiempo_cec_total }}
              </li>
              <li>
                <strong>cardioplegia:</strong>
                <ul>
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
                <strong>asistencia_ventricular_izquierda_postoperatoria:</strong>
                {{ res.extracorporealCirculation.asistencia_ventricular_izquierda_postoperatoria }}
              </li>
              <li>
                <strong>canulacion:</strong>
                <ul>
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
                <strong>tiempo_arresto_circulatorio:</strong>
                <ul>
                  <li>
                    <strong>tecnica_correcion_ph:</strong>
                    {{ res.extracorporealCirculation.tiempo_arresto_circulatorio.tecnica_correcion_ph }}
                  </li>
                  <li>
                    <strong>temperatura_descenso:</strong>
                    {{ res.extracorporealCirculation.tiempo_arresto_circulatorio.temperatura_descenso }}
                  </li>
                  <li>
                    <strong>tiempo_descenso:</strong>
                    {{ res.extracorporealCirculation.tiempo_arresto_circulatorio.tiempo_descenso }}
                  </li>
                  <li>
                    <strong>recalentamiento:</strong>
                    {{ res.extracorporealCirculation.tiempo_arresto_circulatorio.recalentamiento }}
                  </li>
                  <li>
                    <strong>tiempo_recalentamiento:</strong>
                    {{ res.extracorporealCirculation.tiempo_arresto_circulatorio.tiempo_recalentamiento }}
                  </li>
                  <li>
                    <strong>tiempo_total_arresto_circulatorio:</strong>
                    {{ res.extracorporealCirculation.tiempo_arresto_circulatorio.tiempo_total_arresto_circulatorio }}
                  </li>
                </ul>
              </li>
              <li>
                <strong>perfusion_cerebral:</strong>
                <ul>
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
                <strong>dias_uci:</strong>
                {{res.others.dias_uci}}
              </li>
              <li>
                <strong>dias_uti:</strong>
                {{res.others.dias_uti}}
              </li>
              <li>
                <strong>dias_totales_hospitalizacion:</strong>
                {{res.others.dias_totales_hospitalizacion}}
              </li>
              <li>
                <strong>dias_intubacion:</strong>
                {{res.others.dias_intubacion}}
              </li>
              <li>
                <strong>drogras_vasoactivas:</strong>
                <ul>
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
                <strong>ecocardiograma_postoperatorio:</strong>
                <ul>
                  <li>
                    <strong>fevi</strong>
                    {{res.others.ecocardiograma_postoperatorio.fevi}}
                  </li>
                  <li>
                    <strong>cinesia_ventricular</strong>
                    {{res.others.ecocardiograma_postoperatorio.cinesia_ventricular}}
                  </li>
                  <li>
                    <strong>protesis_valvular</strong>
                    {{res.others.ecocardiograma_postoperatorio.protesis_valvular }}
                  </li>
                </ul>
              </li>
              <li>
                <strong>control_postoperatorio:</strong>
                <ul>
                  <li>
                    <strong>dias_15:</strong>
                    {{res.others.control_postoperatorio.dias_15}}
                  </li>
                  <li>
                    <strong>mes_1:</strong>
                    {{res.others.control_postoperatorio.mes_1}}
                  </li>
                  <li>
                    <strong>mes_3:</strong>
                    {{res.others.control_postoperatorio.mes_3}}
                  </li>
                </ul>
              </li>
            </ul>
            <h3>Protocolos Quirurgicos</h3>
            <r-surgical-protocols :data="res.surgicalProtocols"></r-surgical-protocols>
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