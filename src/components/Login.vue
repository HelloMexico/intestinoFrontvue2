<template>
  <div class="container">
    <br /><!-- <br> -->
    <div class="row">
      <div class="col-xl-6 col-sm-6 col-md-6"></div>
      <div class="col-xl-6 col-sm-6 col-md-6">
        <h1 class="tituloPrincipal text-center">Intestino Limpio</h1>
      </div>
    </div>
    <div class="row">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 col-sm-6 col-md-6 text-center">
            <img
              src="../assets/img/web/Enmascarar grupo 2.png"
              class="imgNaranjin"
              alt="no hay imagen"
            />
          </div>
          <div class="col-xl-6 col-sm-6 col-md-6">
            <!-- eslint-disable-next-line max-len -->
            <p class="ms-3 me-4 parrafoUno">
              Mantenga un <span>intestino limpio,</span> previo a los estudios
              de Rayos X, colonoscopia o cirugías.
            </p>
            <!-- eslint-disable-next-line max-len -->
            <p id="" class="ms-3 me-4 parrafoNuestra">
              Con el sitio de <span>Intestino Limpio </span>usted podrá
              programar el horario del estudio y recibir notificaciones cuando
              sea la hora de toma del medicamento o de hidratación. Facilitando
              el apego al tratamiento.
            </p>
            <!-- eslint-disable-next-line max-len -->
            <p class="ms-3 me-4 parrafoGenera">
              Para generar tu programación de toma de medicamento, llena los
              siguientes campos:
              <span>(Todos los campos son obligatorios)</span>
            </p>
            <!-- eslint-disable-next-line max-len -->
            <p class="m-3 parrafoCreaPlanToma">
              Si ya creó su plan antes, dé clic en iniciar sesión.
            </p>
            <div class="container" style="margin: 0; padding: 0">
              <div class="row">
                <div class="col">
                  <!-- eslint-disable-next-line max-len -->
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingOne">
                        <!-- eslint-disable-next-line max-len -->
                        <button
                          class="btnInicia rounded collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          INICIAR SESIÓN
                        </button>
                      </h2>
                      <!-- eslint-disable-next-line max-len -->
                      <div
                        id="flush-collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div
                          class="accordion-body"
                          style="margin: 0; padding: 0"
                        >
                          <!-- <form @submit.prevent="submitForm">
                                                        <label>
                                                            Nombre:
                                                            <input type="text" v-model="nombre"
                                                                v-on:input="validateNombre" />
                                                        </label>
                                                        <span v-if="nombreError" style="color: red;">{{ nombreError
                                                        }}</span>

                                                        <label>
                                                            Correo electrónico:
                                                            <input type="email" v-model="correoElectronico"
                                                                v-on:input="validateCorreoElectronico" />
                                                        </label>
                                                        <span v-if="correoElectronicoError" style="color: red;">{{
                                                            correoElectronicoError }}</span>

                                                        <button type="submit">Enviar</button>
                                                    </form> -->
                          <!-- eslint-disable-next-line max-len -->
                          <br />
                          <div class="container">
                            <form @submit.prevent="submitForm()">
                              <div class="col-12 col-md-12">
                                <!-- <input type="tel" class="form-control" id="nombre"
                                                                placeholder="Número de celular" required
                                                                pattern="[0-9]{7,12}" minlength="7" maxlength="10"
                                                                title="El campo número celular es obligatorio">
                                                            <input type="submit" value="Enviar"> -->
                                <!-- eslint-disable-next-line max-len -->
                                <input
                                  type="tel"
                                  class="form-control"
                                  v-model="telefono"
                                  @input="validateTelefono"
                                  placeholder="Número de celular"
                                  pattern="^[0-9]+"
                                  minlength="7"
                                  maxlength="14"
                                />
                                <span
                                  class="error"
                                  style="color: red"
                                  v-if="errors.telefono"
                                  >{{ errors.telefono }}</span
                                >
                                <!-- <span class="error" v-else style="color: green"></span> -->
                                <!-- <span class="correct" style="color: green;" v-else>Telefono
                                                                valido</span> -->
                                <!-- <p class="mensajes mt-2" id="mensajes" style="color:red;">
                                                            </p> -->
                              </div>
                              <br />
                              <div class="col-xl-12 col-md-6">
                                <div class="input-group input-group-md">
                                  <input
                                    :type="inputTypeIcon"
                                    class="form-control"
                                    v-model="claveAcceso"
                                    @input="validateClaveAcceso"
                                    placeholder="Escriba una clave de acceso"
                                    maxlength="11"
                                  />
                                  <button
                                    class="input-group-text"
                                    @click.prevent="ToggleInputIcon"
                                  >
                                    <span v-if="inputTypeIcon === 'password'">
                                      <i class="fas fa-eye"></i>
                                    </span>
                                    <span v-else>
                                      <i class="fas fa-eye-slash"></i>
                                    </span>
                                  </button>
                                </div>
                                <span
                                  class="error mt-3"
                                  style="color: red; margin-top: 3px"
                                  v-if="errors.claveAcceso"
                                  >{{ errors.claveAcceso }}</span
                                >
                                <span
                                  class="error"
                                  v-else
                                  style="color: green"
                                ></span>
                              </div>
                              <br />
                              <div class="col-xl-12 col-md-6">
                                <div
                                  style="
                                    display: flex;
                                    flex-direction: row-reverse;
                                  "
                                >
                                  <router-link
                                    href=""
                                    to="/olvidar"
                                    style="
                                      font-family: 'OpenSans-Bold';
                                      color: #1155cc;
                                    "
                                  >
                                    <u>Olvidé mi contraseña</u></router-link
                                  >
                                </div>
                              </div>
                              <br />
                              <div class="col-xl-12 col-md-6">
                                <div class="contenidoCentrado">
                                  <div
                                    style="
                                      display: flex;
                                      flex-direction: row-reverse;
                                    "
                                  >
                                    <!--  <input type="submit" value="CONTINUAR"
                                                                        class="btnContinuar rounded"> -->
                                    <!-- <router-link class="btnContinuar rounded" to="/crear"
                                                                        tag="button">CONTINUAR</router-link> -->
                                    <button
                                      type="submit"
                                      class="btnContinuar rounded"
                                    >
                                      CONTINUAR
                                    </button>
                                    <!-- <button :disabled="bloquear"
                                                                    class=" rounded">CONTINUAR</button> -->
                                    <!-- <router-link class="btnContinuar rounded" to="/crear"
                                                                        tag="button" type="submit">CONTINUAR</router-link> -->
                                    <!-- <button  v-on:click="submitForm">continuar e ir a vista crear</button> -->
                                  </div>
                                  <br />
                                </div>
                              </div>
                              <br />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p
                      id="parrafoGeneraProgramacion"
                      class="parrafoGeneraProgramacion"
                    >
                      Para crear un plan de tomas por primera vez:
                    </p>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingTwo">
                        <button
                          class="btnCrearPlan rounded collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          CREAR PLAN POR PRIMERA VEZ
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div
                          class="accordion-body"
                          style="margin: 0; padding: 0"
                        >
                          <div class="container">
                            <br />
                            <form @submit.prevent="submitFormCrearPlan()">
                            <!-- <form> -->
                              <div class="row">
                                <div class="col-md-12 mb-3">
                                  <select
                                    class="form-select"
                                    id="select_pais"
                                    v-model="selectedCountry"
                                    @change="updateLada"
                                  >
                                    <option value="" disabled selected>
                                      Seleccione un país
                                    </option>
                                    <option value="Mexico">México</option>
                                    <option value="Costa Rica">
                                      Costa Rica
                                    </option>
                                  </select>
                                  <p
                                    class="mensaje_pais mt-2"
                                    id="mensaje_pais"
                                    style="color: red"
                                  ></p>
                                  <span
                                    class="error"
                                    style="color: red"
                                    v-if="errors.selectedCountry"
                                    >{{ errors.selectedCountry }}</span
                                  >
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6 mb-3">
                                  <select
                                    id="lada"
                                    class="form-select"
                                    v-model="selectedLada"
                                  >
                                    <option value="" disabled selected>
                                      Seleccione una lada
                                    </option>
                                    <option
                                      v-if="selectedCountry === 'Mexico'"
                                      value="+52"
                                    >
                                      +52
                                    </option>
                                    <option
                                      v-if="selectedCountry === 'Costa Rica'"
                                      value="+506"
                                    >
                                      +506
                                    </option>
                                    <option value="52">+52</option>
                                    <option value="506">+506</option>
                                  </select>
                                  <p
                                    class="mensaje_lada mt-2"
                                    id="mensaje_lada"
                                    style="color: red"
                                  ></p>
                                  <span
                                    class="error"
                                    style="color: red"
                                    v-if="errors.selectedLada"
                                    >{{ errors.selectedLada }}</span
                                  >
                                </div>
                                <div class="col-md-6 mb-3">
                                  <input
                                    type="text"
                                    class="form-control"
                                    name="telefono"
                                    id="telefonoCel"
                                    placeholder="Teléfono celular"
                                    v-model="telefonoCelular"
                                    @input="validarTelefonoCelular"
                                    minlength="7"
                                    maxlength="14"
                                  />
                                  <p
                                    class="mensaje_telfono mt-2"
                                    id="mensaje_telfono"
                                    style="color: red"
                                  ></p>
                                  <span
                                    class="error"
                                    style="color: red"
                                    v-if="errors.telefonoCelular"
                                    >{{ errors.telefonoCelular }}</span
                                  >
                                  <!-- <span v-else style="color: green;">{{
                                                                        errors.telefonoCelular }}</span> -->
                                </div>
                              </div>
                              <div class="col-12 mb-3">
                                <select
                                  v-model="estado"
                                  id="select_estado"
                                  class="form-select"
                                  @change="validarEstado($event)"
                                >
                                  <option value="" disabled selected>
                                    Seleccione un estado
                                  </option>
                                  <option
                                    v-for="option in options"
                                    :key="option.value"
                                  >
                                    {{ option.text }}
                                  </option>
                                </select>
                                <p
                                  class="mensaje_estado mt-2"
                                  id="mensaje_estado"
                                  style="color: red"
                                ></p>
                                <span
                                  class="error"
                                  style="color: red"
                                  v-if="errors.estado"
                                  >{{ errors.estado }}</span
                                >
                              </div>
                              <div class="row">
                                <div class="col-5 mb-3">
                                  <select
                                    v-model="ciudad"
                                    id=""
                                    class="form-select"
                                    @change="validarCiudad"
                                  >
                                    <option value="" disabled selected>
                                      Seleccione una Ciudad
                                    </option>
                                    <option
                                      v-for="option in optionsCiudad"
                                      :key="option.value"
                                    >
                                      {{ option.text }}
                                    </option>
                                  </select>
                                  <!-- <input type="text" class="form-control" name=""
                                                                        id="input_ciudad" placeholder="Ciudad"
                                                                        v-model="ciudad" @input="validarCiudad"> -->
                                  <p
                                    class="mensaje_ciudad mt-2"
                                    id="mensaje_ciudad"
                                    style="color: red"
                                  ></p>
                                  <span
                                    class="error"
                                    style="color: red"
                                    v-if="errors.ciudad"
                                    >{{ errors.ciudad }}</span
                                  >
                                </div>
                                <div class="col-7">
                                  <div class="row ms-1">
                                    <div class="col-6 col-md-7">
                                      <label
                                        for="input_edad"
                                        class="col-sm-8 col-form-label mb-1 labelEdad"
                                        >Edad del paciente:
                                      </label>
                                    </div>
                                    <div class="col-6 col-md-5">
                                      <input
                                        name="edad"
                                        class="form-control"
                                        id="input_edad"
                                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                        type="number"
                                        maxlength="3"
                                        v-model="edad"
                                        @input="validarEdad"
                                      />
                                      <p
                                        class="mensaje_edad mt-2"
                                        id="mensaje_edad"
                                        style="color: red"
                                      ></p>
                                      <span
                                        class="error"
                                        style="color: red"
                                        v-if="errors.edad"
                                        >{{ errors.edad }}</span
                                      >
                                      <span
                                        class="correct"
                                        style="color: green"
                                        v-if="correct.edad"
                                        >{{ correct.edad }}</span
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-12 mb-3">
                                  <input
                                    name="peso"
                                    class="form-control"
                                    id="input_peso"
                                    placeholder="Peso del paciente"
                                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                    type="number"
                                    maxlength="3"
                                    v-model="peso"
                                    @input="validarPeso"
                                  />
                                  <p
                                    class="mensaje_peso mt-2"
                                    id="mensaje_peso"
                                    style="color: red"
                                  ></p>
                                  <span
                                    class="error"
                                    style="color: red"
                                    v-if="errors.peso"
                                    >{{ errors.peso }}</span
                                  >
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-12 mb-3">
                                  <input
                                    type="text"
                                    width=""
                                    class="form-control"
                                    id="inputNomMedTrat"
                                    placeholder="Nombre de tu médico tratante"
                                    v-model="nomMedTrat"
                                    @input="validarNomMedTrat"
                                  />
                                  <p
                                    class="mensaje_nomMedTrat mt-2"
                                    id="mensaje_nomMedTrat"
                                    style="color: red"
                                  ></p>
                                  <span
                                    class="error"
                                    style="color: red"
                                    v-if="errors.nomMedTrat"
                                    >{{ errors.nomMedTrat }}</span
                                  >
                                </div>
                              </div>

                              <div class="col-12 mb-3">
                                <input
                                  type="text"
                                  width=""
                                  class="form-control"
                                  id="inputApeMedTrat"
                                  name="inputApeMedTrat"
                                  placeholder="Apellido de tu médico tratante"
                                  v-model="apeMedTrat"
                                  @input="validarApeMedTrat"
                                />
                                <p
                                  class="mensaje_apeMedTrat mt-2"
                                  id="mensaje_apeMedTrat"
                                  style="color: red"
                                ></p>
                                <span
                                  class="error"
                                  style="color: red"
                                  v-if="errors.apeMedTrat"
                                  >{{ errors.apeMedTrat }}</span
                                >
                              </div>
                              <div class="col-12 mb-3">
                                <div class="input-group input-group-md">
                                  <input
                                    :type="inputTypeIcon"
                                    class="form-control"
                                    placeholder="Escriba una clave de acceso"
                                    v-model="claveAccesos"
                                    @input="validarClaveAccessos"
                                  />
                                  <button
                                    class="input-group-text"
                                    @click.prevent="ToggleInputIcon"
                                  >
                                    <span v-if="inputTypeIcon === 'password'">
                                      <i class="fas fa-eye"></i>
                                    </span>
                                    <span v-else>
                                      <i class="fas fa-eye-slash"></i>
                                    </span>
                                  </button>
                                </div>
                                <span
                                  class="error"
                                  style="color: red"
                                  v-if="errors.claveAccesos"
                                  >{{ errors.claveAccesos }}</span
                                >
                              </div>
                              <div class="col-12 mb-3">
                                <div class="input-group input-group-md">
                                  <input
                                    :type="inputTypeIcon"
                                    class="form-control"
                                    placeholder="Confirma clave de acceso"
                                    v-model="confClaveAccesos"
                                    @input="validarConfiClaveAccessos"
                                  />
                                  <button
                                    class="input-group-text"
                                    @click.prevent="ToggleInputIcon"
                                  >
                                    <span v-if="inputTypeIcon === 'password'">
                                      <i class="fas fa-eye"></i>
                                    </span>
                                    <span v-else>
                                      <i class="fas fa-eye-slash"></i>
                                    </span>
                                  </button>
                                </div>
                                <span
                                  class="error"
                                  style="color: red"
                                  v-if="errors.confClaveAccesos"
                                  >{{ errors.confClaveAccesos }}</span
                                >
                              </div>
                              <div class="col">
                                <p class="parrafoRecordaViaWhat">
                                  Para recibir recordatorios
                                  <span>vía whatsapp</span> sobre la toma de
                                  medicamento y la hidratación, es importante
                                  autorizar la recepción de los recordatorios
                                  por este medio, dando clic en la casilla de
                                  abajo.
                                </p>
                              </div>

                              <div class="form-check form-switch">
                                <label for="flexSwitchCheckDefault">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault"
                                    aria-checked=""
                                    required
                                  />
                                  <label
                                    class="form-check-label textoSwitchAcepto"
                                    for="fkyu"
                                    >Acepto recibir recordatorios vía WhatsApp
                                  </label>
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                  required
                                />

                                <label
                                  class="form-check-label parrafoCheckLeido"
                                  >He leído y acepto el
                                  <a
                                    style="cursor: pointer"
                                    class="textoSwitchAcepto"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    >aviso de privacidad</a
                                  >
                                  <!-- Button trigger modal -->
                                  <!-- Modal -->
                                  <div
                                    class="modal fade"
                                    id="exampleModal"
                                    tabindex="-1"
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                  >
                                    <div class="modal-dialog modal-lg">
                                      <div class="modal-content">
                                        <div
                                          class="modal-header"
                                          style="border: none"
                                        >
                                          <div class="contenidoCentrado">
                                            <h1
                                              class="tituloPrincipal text-center"
                                            >
                                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aviso
                                              de Privacidad
                                            </h1>
                                          </div>

                                          <button
                                            type="button"
                                            class="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          ></button>
                                        </div>
                                        <div
                                          class="modal-body"
                                          style="border: none"
                                        >
                                          <div class="container">
                                            <div class="row">
                                              <div class="col">
                                                <p class="parraffoJustificado">
                                                  FERRING S.A. DE C.V. con
                                                  domicilio en la ciudad de
                                                  México en adelante "FERRING”,
                                                  informa la existencia de una
                                                  Política de Tratamiento de la
                                                  Información.
                                                </p>
                                                <p class="">
                                                  <b>Aviso de Privacidad</b>
                                                </p>
                                                <p class="parraffoJustificado">
                                                  Gracias por visitar el sitio
                                                  web. En Ferring, su privacidad
                                                  es importante para nosotros y
                                                  nuestras prácticas de
                                                  protección de datos se apegan
                                                  a lo dictado por las
                                                  regulaciones europeas y
                                                  nacionales/locales aplicables
                                                  de protección de datos.
                                                </p>
                                                <p class="parraffoJustificado">
                                                  Este Aviso de Privacidad le
                                                  brindará información sobre
                                                  cómo Ferring reúne, mantiene y
                                                  procesa sus datos personales y
                                                  describirá la manera en la
                                                  cual nos aseguramos de que sus
                                                  datos personales se vean
                                                  protegidos de acuerdo con las
                                                  regulaciones aplicables.
                                                </p>
                                                <p class="parraffoJustificado">
                                                  Este Aviso de Privacidad
                                                  solamente se vincula con este
                                                  sitio web; por lo tanto, si
                                                  visita otro sitio web
                                                  relacionado o recomendado por
                                                  Ferring consulte el aviso de
                                                  privacidad del sitio web
                                                  respectivo.
                                                </p>
                                                <p>
                                                  ¿Qué son los datos personales?
                                                </p>
                                                <p>
                                                  ¿Quién puede considerarse un
                                                  interesado?
                                                </p>
                                                <p>
                                                  ¿Cómo utiliza Ferring sus
                                                  datos personales?
                                                </p>
                                                <p>Cookies</p>
                                                <p>
                                                  Retención de datos personales
                                                </p>
                                                <p>Sus derechos</p>
                                                <p>
                                                  ¿Cómo puede Ferring compartir
                                                  o transferir sus datos
                                                  personales?
                                                </p>
                                                <p>
                                                  Vínculos con otros sitios web
                                                </p>
                                                <p>Información de seguridad</p>
                                                <p>
                                                  Menores de edad Modificaciones
                                                </p>
                                                <p>Información de contacto</p>
                                                <p>
                                                  ¿Qué son los datos personales?
                                                </p>
                                                <p class="parraffoJustificado">
                                                  Los datos personales son toda
                                                  aquella información
                                                  relacionada con un individuo
                                                  que lo identifica o lo hace
                                                  identificable. Entre estos se
                                                  encuentra: nombre, domicilio,
                                                  número telefónico o correo
                                                  electrónico o cualquier otra
                                                  información que pueda ser
                                                  usada para identificar su
                                                  individualidad.
                                                </p>
                                                <p>
                                                  ¿Quién puede considerarse un
                                                  interesado?
                                                </p>
                                                <p class="parraffoJustificado">
                                                  Un interesado es cualquier
                                                  individuo identificado o
                                                  identificable sobre quien son
                                                  procesados los datos
                                                  personales. Si usted no es un
                                                  interesado de Ferring tiene la
                                                  oportunidad de serlo al
                                                  visitar este sitio web y
                                                  proporcionar sus datos
                                                  personales de manera
                                                  voluntaria y así volverse un
                                                  interesado. Ferring solamente
                                                  reunirá sus datos personales
                                                  durante su visita en el sitio
                                                  web en caso de y cuando los
                                                  proporcione voluntariamente.
                                                </p>
                                                <hr />
                                                <p>
                                                  Categorías de datos personales
                                                  recabados y procesados.
                                                </p>
                                                <hr />
                                                <div class="table-responsive">
                                                  <table
                                                    class="table table-bordered"
                                                  >
                                                    <thead>
                                                      <tr>
                                                        <th scope="col">
                                                          Interesados
                                                        </th>
                                                        <th scope="row">
                                                          Categorías de Datos
                                                          Personales
                                                        </th>
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      <tr>
                                                        <td scope="col">
                                                          Visitantes sitio web
                                                        </td>
                                                        <td>
                                                          <ul>
                                                            <li
                                                              class="parraffoJustificado"
                                                            >
                                                              Datos Generales:
                                                              nombre, domicilio,
                                                              fecha y lugar de
                                                              nacimiento,
                                                              nacionalidad,
                                                              estado civil,
                                                              sexo, profesión,
                                                              ocupación, número
                                                              de Registro
                                                              Federal de
                                                              Contribuyentes
                                                              (RFC), copia de la
                                                              Clave Única de
                                                              Registro de
                                                              Población (CURP),
                                                              datos o copia de
                                                              identificación con
                                                              fotografía.
                                                            </li>
                                                            <li
                                                              class="parraffoJustificado"
                                                            >
                                                              Datos para
                                                              contactarlo:
                                                              dirección,
                                                              dirección de
                                                              correo
                                                              electrónico,
                                                              número de
                                                              teléfono, número
                                                              de whatsapp y de
                                                              fax.
                                                            </li>
                                                            <li
                                                              class="parraffoJustificado"
                                                            >
                                                              Preferencias de
                                                              consumo, hábitos
                                                              de consumo de
                                                              productos o
                                                              servicios.
                                                            </li>
                                                            <li
                                                              class="parraffoJustificado"
                                                            >
                                                              Educación y
                                                              habilidades:
                                                              Títulos
                                                              educativos.
                                                            </li>
                                                            <li
                                                              class="parraffoJustificado"
                                                            >
                                                              Información de la
                                                              cuenta de usuario:
                                                              Contraseña de la
                                                              cuenta.
                                                            </li>
                                                            <li
                                                              class="parraffoJustificado"
                                                            >
                                                              Información de
                                                              navegación: tiempo
                                                              de navegación,
                                                              información de
                                                              cookies, dirección
                                                              IP, historial de
                                                              interacción de
                                                              red, historial del
                                                              sitio web.
                                                            </li>
                                                          </ul>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td
                                                          scope="col"
                                                          class="parraffoJustificado"
                                                        >
                                                          Profesionales de la
                                                          Salud
                                                        </td>
                                                        <td>
                                                          <ul>
                                                            <li
                                                              class="parraffoJustificado"
                                                            >
                                                              Datos Generales:
                                                              nombre, domicilio,
                                                              fecha y lugar de
                                                              nacimiento,
                                                              nacionalidad,
                                                              estado civil,
                                                              sexo, profesión,
                                                              ocupación, número
                                                              de Registro
                                                              Federal de
                                                              Contribuyentes
                                                              (RFC), copia de la
                                                              Clave Única de
                                                              Registro de
                                                              Población (CURP),
                                                              datos o copia de
                                                              identificación con
                                                              fotografía
                                                            </li>
                                                            <li
                                                              class="parraffoJustificado"
                                                            >
                                                              Datos para
                                                              contactarlo:
                                                              dirección,
                                                              dirección de
                                                              correo
                                                              electrónico,
                                                              número de
                                                              teléfono, número
                                                              de whatsapp y de
                                                              fax.
                                                            </li>
                                                            <li
                                                              class="parraffoJustificado"
                                                            >
                                                              Preferencias de
                                                              consumo, hábitos
                                                              de consumo de
                                                              productos o
                                                              servicios.
                                                            </li>
                                                            <li
                                                              class="parraffoJustificado"
                                                            >
                                                              Educación y
                                                              habilidades:
                                                              Títulos educativos
                                                            </li>
                                                            <li
                                                              class="parraffoJustificado"
                                                            >
                                                              Información de
                                                              empleo: división
                                                              de la unidad de
                                                              negocios, entidad
                                                              de la empresa,
                                                              puesto/función,
                                                              ubicación de la
                                                              oficina
                                                            </li>
                                                            <li
                                                              class="parraffoJustificado"
                                                            >
                                                              Información de la
                                                              cuenta de usuario:
                                                              Contraseña de la
                                                              cuenta.
                                                            </li>
                                                            <li
                                                              class="parraffoJustificado"
                                                            >
                                                              Información de
                                                              navegación: tiempo
                                                              de navegación,
                                                              información de
                                                              cookies, dirección
                                                              IP, historial de
                                                              interacción de
                                                              red, historial del
                                                              sitio web.
                                                            </li>
                                                          </ul>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td scope="col">
                                                          Clientes
                                                        </td>
                                                        <td>
                                                          <ul>
                                                            <li
                                                              class="parraffoJustificado"
                                                            >
                                                              Datos Generales:
                                                              nombre, domicilio,
                                                              fecha y lugar de
                                                              nacimiento,
                                                              nacionalidad,
                                                              estado civil,
                                                              sexo, profesión,
                                                              ocupación, número
                                                              de Registro
                                                              Federal de
                                                              Contribuyentes
                                                              (RFC), copia de la
                                                              Clave Única de
                                                              Registro de
                                                              Población (CURP),
                                                              datos o copia de
                                                              identificación con
                                                              fotografía.
                                                            </li>
                                                            <li
                                                              class="parraffoJustificado"
                                                            >
                                                              Datos para
                                                              contactarlo:
                                                              dirección,
                                                              dirección de
                                                              correo
                                                              electrónico,
                                                              número de
                                                              teléfono, número
                                                              de whatsapp y de
                                                              fax.
                                                            </li>
                                                            <li
                                                              class="parraffoJustificado"
                                                            >
                                                              Datos financieros:
                                                              cuenta bancaria.
                                                            </li>
                                                            <li
                                                              class="parraffoJustificado"
                                                            >
                                                              Datos fiscales:
                                                              Cédula de
                                                              identificación del
                                                              Sistema de
                                                              Administración
                                                              Tributaria (SAT).
                                                            </li>
                                                            <li>
                                                              Preferencias de
                                                              consumo, hábitos
                                                              de consumo de
                                                              productos o
                                                              servicios.
                                                            </li>
                                                            <li>
                                                              Información de la
                                                              cuenta de usuario:
                                                              Contraseña de la
                                                              cuenta.
                                                            </li>
                                                            <li>
                                                              Información de
                                                              navegación: tiempo
                                                              de navegación,
                                                              información de
                                                              cookies, dirección
                                                              IP, historial de
                                                              interacción de
                                                              red, historial del
                                                              sitio web.
                                                            </li>
                                                          </ul>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td scope="col">
                                                          Empleados
                                                        </td>
                                                        <td>
                                                          <ul>
                                                            <li>
                                                              Datos de
                                                              identificación:
                                                              Nombre completo,
                                                              domicilio, fecha
                                                              de nacimiento,
                                                              imagen(, historia,
                                                              semejanza, sonido
                                                              de la voz, video
                                                              que puede ser
                                                              grabada en cintas
                                                              de audio o video,
                                                              preferencias
                                                              alimenticias,
                                                              copia de
                                                              identificación
                                                              oficial con
                                                              fotografía
                                                              (pasaporte,
                                                              credencial de
                                                              elector, cédula
                                                              profesional) copia
                                                              de acta de
                                                              nacimiento,) copia
                                                              del Registro
                                                              Federal de
                                                              Contribuyentes
                                                              (RFC), copia de la
                                                              Clave Única de
                                                              Registro de
                                                              Población (CURP),
                                                              documento que
                                                              acredite
                                                              afiliación al
                                                              Instituto Mexicano
                                                              del Seguro Social
                                                              (IMSS), número de
                                                              seguridad social
                                                              (NSS), firma.
                                                            </li>
                                                            <li>
                                                              Datos de contacto:
                                                              teléfono, correo
                                                              electrónico,
                                                              correo físico,
                                                              comprobante de
                                                              domicilio (recibos
                                                              de luz, teléfono o
                                                              predial).
                                                            </li>
                                                            <li>
                                                              Datos laborales:
                                                              lugar de empleo,
                                                              cargo y
                                                              currículum,
                                                              visa/permiso de
                                                              trabajo,
                                                              referencias
                                                              laborales, cartas
                                                              de recomendación,
                                                              puesto y sueldo de
                                                              anteriores
                                                              trabajos,
                                                              historial laboral.
                                                            </li>
                                                            <li>
                                                              Datos académicos:
                                                              Historia
                                                              académica,
                                                              certificados y
                                                              comprobantes de
                                                              estudio,
                                                              certificados y
                                                              constancias de
                                                              dominio de idiomas
                                                              y computación,
                                                              escolaridad,
                                                              título, cédula
                                                              profesional.
                                                            </li>
                                                            <li>
                                                              Datos relacionados
                                                              con su
                                                              personalidad,
                                                              capacidades
                                                              habilidades y
                                                              aptitudes: esta
                                                              información es
                                                              resultante de los
                                                              cuestionarios,
                                                              exámenes y
                                                              entrevistas
                                                              aplicados durante
                                                              el proceso de
                                                              reclutamiento y
                                                              selección; así
                                                              como de las
                                                              referencias
                                                              personales que
                                                              obtengamos sobre
                                                              ti.
                                                            </li>
                                                            <li>
                                                              Datos
                                                              patrimoniales:
                                                              sueldo y
                                                              prestaciones;
                                                              percepciones y
                                                              deducciones; copia
                                                              de la constancia
                                                              de baja o
                                                              modificación de
                                                              sueldo del
                                                              Instituto Mexicano
                                                              del Seguro Social;
                                                              copia de la
                                                              constancia de
                                                              percepciones del
                                                              último empleo;
                                                              información sobre
                                                              su cuenta de
                                                              INFONAVIT y
                                                              FONACOT resultados
                                                              de los estudios
                                                              socioeconómicos
                                                              que se lleven a
                                                              cabo durante el
                                                              proceso de
                                                              reclutamiento y
                                                              selección.
                                                            </li>
                                                            <li>
                                                              Datos de
                                                              identificación y
                                                              contacto de
                                                              terceros: datos de
                                                              identificación y
                                                              contacto de sus
                                                              beneficiarios o
                                                              dependientes
                                                              económicos, así
                                                              como de las
                                                              personas que
                                                              designe para ser
                                                              contactados en
                                                              caso de
                                                              emergencia, lo
                                                              cual puede incluir
                                                              nombre completo,
                                                              fecha de
                                                              nacimiento y otros
                                                              datos de
                                                              identificación,
                                                              tales como copias
                                                              de las actas de
                                                              nacimiento de
                                                              dependientes
                                                              económicos. Antes
                                                              de proporcionarnos
                                                              datos personales
                                                              de terceros,
                                                              asegúrese de
                                                              contar con su
                                                              consentimiento,
                                                              salvo en el caso
                                                              de aquellas
                                                              personas sobre las
                                                              que ejerza la
                                                              patria potestad o
                                                              tutela.
                                                            </li>
                                                            <li>
                                                              Datos financieros:
                                                              cuenta bancaria.
                                                            </li>
                                                          </ul>
                                                          <p>
                                                            Ferring puede tratar
                                                            los siguientes datos
                                                            personales que se
                                                            consideran datos
                                                            personales
                                                            sensibles:
                                                          </p>
                                                          <ul>
                                                            <li>
                                                              Datos de salud:
                                                              Historia clínica,
                                                              estudios,
                                                              exámenes,
                                                              consultas,
                                                              tratamientos y
                                                              pruebas médicas,
                                                              así como los
                                                              resultados de las
                                                              mismas, estado de
                                                              salud presente y
                                                              pasado.
                                                            </li>
                                                            <li>
                                                              Afiliación
                                                              sindical.
                                                            </li>
                                                          </ul>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                  <p class="parrafoJustificado">
                                                    ¿Cómo utiliza Ferring sus
                                                    datos personales?
                                                  </p>
                                                  <p>
                                                    Ferring International Center
                                                    S.A. (“Ferring”), como
                                                    auditor de datos en nombre
                                                    de las subsidiarias de
                                                    Ferring Group, solamente
                                                    procesará sus datos
                                                    personales cuando exista una
                                                    base legal para hacerlo y
                                                    cuando sea necesario cumplir
                                                    con el propósito para el
                                                    cual fueron recabados. La
                                                    base legal para el
                                                    procesamiento de sus datos
                                                    personales dependerá del
                                                    propósito para el cual
                                                    fueron recabados, como se
                                                    describe a continuación:
                                                  </p>
                                                  <ul>
                                                    <li
                                                      style="
                                                        list-style-type: upper-latin;
                                                      "
                                                    >
                                                      Los datos personales
                                                      pueden ser procesados si
                                                      es necesario para nuestros
                                                      intereses legítimos de
                                                      cumplir con los siguientes
                                                      objetivos (y bajo su
                                                      consentimiento o bien sea
                                                      necesario para mantener la
                                                      relación jurídica que
                                                      sostenemos con usted,
                                                      respectivamente y según
                                                      resulte aplicable en
                                                      términos de la ley local
                                                      ):
                                                      <ul>
                                                        <li
                                                          style="
                                                            list-style-type: disc;
                                                          "
                                                        >
                                                          Responder a su
                                                          consulta en las
                                                          siguientes categorías:
                                                          medios; asociaciones;
                                                          desarrollo de
                                                          relaciones
                                                          comerciales; y
                                                          cualquier otra
                                                          consulta general.
                                                        </li>
                                                        <li
                                                          style="
                                                            list-style-type: disc;
                                                          "
                                                        >
                                                          Procesar y responder a
                                                          consultas sobre
                                                          privacidad de datos y
                                                          sus derechos de
                                                          privacidad.
                                                        </li>
                                                        <li
                                                          style="
                                                            list-style-type: disc;
                                                          "
                                                        >
                                                          Procesar y evaluar los
                                                          casos reportados de
                                                          mala conducta
                                                          potencial y/o
                                                          violación de la
                                                          Filosofía de Ferring,
                                                          así como otras
                                                          políticas aplicables y
                                                          PNOs.
                                                        </li>
                                                        <li
                                                          style="
                                                            list-style-type: disc;
                                                          "
                                                        >
                                                          Procesar solicitudes
                                                          de vacantes actuales
                                                          y/o aceptar
                                                          solicitudes de empleo
                                                          no requeridas.
                                                        </li>
                                                        <li>
                                                          Procesar y responder a
                                                          una solicitud de
                                                          colaboración.
                                                        </li>
                                                        <li>
                                                          Cualquier otro
                                                          propósito de negocio
                                                          legítimo, tales como
                                                          análisis de datos,
                                                          auditoría, servicios
                                                          de mejoramiento y
                                                          expansión de nuestras
                                                          actividades
                                                          comerciales.
                                                        </li>
                                                      </ul>
                                                    </li>
                                                  </ul>
                                                  <p>
                                                    Ferring considera necesario
                                                    procesar los datos
                                                    personales con los fines
                                                    antes mencionados con base
                                                    en intereses legítimos, su
                                                    consentimiento o en la
                                                    relación jurídica que
                                                    mantenemos con Usted, para
                                                    asegurar que las consultas,
                                                    peticiones, solicitudes e
                                                    informes sean procesados a
                                                    tiempo y convengan a los
                                                    intereses de los usuarios,
                                                    políticas y leyes
                                                    aplicables, mientras que al
                                                    mismo tiempo se consideren
                                                    adecuadamente sus derechos.
                                                    Además, puede obtener más
                                                    información sobre la
                                                    doctrina jurisprudencial de
                                                    intereses legítimos que ha
                                                    ejecutado Ferring
                                                  </p>
                                                  <ul>
                                                    <li
                                                      style="
                                                        list-style-type: none;
                                                        margin: 0;
                                                      "
                                                    >
                                                      B. Los datos personales
                                                      pueden ser procesados
                                                      cuando sea necesario
                                                      cumplir con las leyes y
                                                      regulaciones aplicables,
                                                      tales como:
                                                      <ul>
                                                        <li>
                                                          Leyes dentro y fuera
                                                          de su país de
                                                          residencia.
                                                        </li>
                                                        <li>
                                                          Procesos legales o en
                                                          respuesta a un mandato
                                                          judicial para producir
                                                          ciertos datos
                                                          personales.
                                                        </li>
                                                      </ul>
                                                    </li>
                                                  </ul>

                                                  <p>
                                                    Los datos personales pueden
                                                    ser recabados y procesados
                                                    si es necesario para los
                                                    intereses vitales y para
                                                    cumplir con las obligaciones
                                                    de seguridad aplicables
                                                    dentro del sector
                                                    farmacéutico, tales como:
                                                  </p>
                                                  <ul>
                                                    <li>
                                                      Procesar un informe sobre
                                                      los efectos secundarios,
                                                      reacciones adversas al
                                                      fármaco, eventos adversos
                                                      u otra información de
                                                      seguridad en relación con
                                                      un fármaco/producto de
                                                      Ferring. Para obtener
                                                      información sobre el
                                                      procesamiento de datos de
                                                      categoría especial con
                                                      esta finalidad, véase el
                                                      Aviso de Privacidad de
                                                      Farmacovigilancia –
                                                      Pharmacovigilance Privacy
                                                      Notice.
                                                    </li>
                                                  </ul>
                                                  <li>
                                                    Los datos personales pueden
                                                    ser recabados y procesados
                                                    durante nuestras actividades
                                                    comerciales y educativas con
                                                    usted como Profesional
                                                    Sanitario. Refiérase a
                                                    nuestro Aviso de Privacidad
                                                    de Gestión de la Relación
                                                    con los Clientes sobre
                                                    aquellas actividades.
                                                  </li>
                                                  <p>
                                                    1.1 Destinatarios de
                                                    Campañas Educativas
                                                  </p>
                                                  <p>
                                                    A. Almacenar las historias
                                                    clínicas enviadas por los
                                                    profesionales de la salud
                                                    para dar cumplimento a las
                                                    normas sobre
                                                    farmacovigilancia y demás
                                                    normas aplicables en la
                                                    materia.
                                                  </p>
                                                  <p>
                                                    B. Transferir, bajo su
                                                    consentimiento, los Datos
                                                    Personales a terceras
                                                    personas en México y en el
                                                    exterior para su uso
                                                    comercial, en especial a los
                                                    aliados de FERRING que
                                                    otorgarán las Condiciones a
                                                    usuarios de Plan M u otras
                                                    campañas educativas, así
                                                    como para el agendamiento de
                                                    citas, llamadas y el
                                                    cumplimiento de las mismas.
                                                  </p>
                                                  <p>
                                                    C. Elaborar estudios de
                                                    analítica y estadística con
                                                    el fin de compartirlos con
                                                    subsidiarias, matrices,
                                                    empresas del grupo
                                                    empresarial o socios
                                                    vinculados al negocio de
                                                    FERRING.
                                                  </p>
                                                  <p>
                                                    D. Para publicarlos en las
                                                    cuentas de redes sociales
                                                    (Facebook, Twitter,
                                                    LinkedIn, Instagram, Tiktok,
                                                    Youtube, y cualesquiera
                                                    otras plataformas y/o red
                                                    social que de tiempo en
                                                    tiempo las partes consideren
                                                    oportunas) de FERRING, así
                                                    como asociadas al proyecto.
                                                  </p>
                                                  <p>
                                                    E. Para publicarlos en los
                                                    sitios web internos y
                                                    externos (Commsite/página
                                                    web de la compañía o el
                                                    proyecto) de FERRING o
                                                    asociados al proyecto.
                                                  </p>

                                                  <p>1.2 Usuarios</p>
                                                  <p>
                                                    A. Ser contactado
                                                    periódicamente mediante
                                                    mensajes de texto, correo
                                                    electrónico, correo físico,
                                                    vía telefónica, y cualquier
                                                    otro medio idóneo de
                                                    comunicación para brindarle
                                                    información y educación
                                                    general acerca de temas de
                                                    salud y calidad de vida e
                                                    invitarlo(a) a reuniones y
                                                    charlas educativas.
                                                  </p>
                                                  <p>
                                                    B. Contactarlos con el fin
                                                    de dar cumplimiento a las
                                                    normas aplicables en la
                                                    materia para productos
                                                    farmacéuticos, en especial
                                                    sobre farmacovigilancia.
                                                  </p>
                                                  <p>
                                                    C. Transmitir los datos
                                                    personales, a Encargados del
                                                    Tratamiento en México y en
                                                    el exterior cuando ello sea
                                                    necesario para dar
                                                    cumplimiento a las normas
                                                    sobre farmacovigilancia
                                                    aplicables en la materia.
                                                  </p>
                                                  <p>
                                                    D. Para publicarlos en las
                                                    cuentas de redes sociales
                                                    (Facebook, Twitter,
                                                    LinkedIn, Instagram, Tiktok,
                                                    Youtube, y cualesquiera
                                                    otras plataformas y/o red
                                                    social que de tiempo en
                                                    tiempo las partes consideren
                                                    oportunas) de FERRING, así
                                                    como asociadas al proyecto.
                                                  </p>
                                                  <p>
                                                    E. Para publicarlos en los
                                                    sitios web internos y
                                                    externos (Commsite/página
                                                    web de la compañía o el
                                                    proyecto) de FERRING o
                                                    asociados al proyecto.
                                                  </p>

                                                  <p>
                                                    1.3. Profesionales de la
                                                    Salud / Clínicas de
                                                    Fertilidad
                                                  </p>
                                                  <p>
                                                    A. Enviar información dar
                                                    cumplimento a las normas
                                                    sobre farmacovigilancia y
                                                    demás normas aplicables en
                                                    la materia.
                                                  </p>
                                                  <p>
                                                    B. Contactarlos con el fin
                                                    de dar cumplimiento a las
                                                    normas aplicables en la
                                                    materia para productos
                                                    farmacéuticos, en especial
                                                    sobre farmacovigilancia.
                                                  </p>
                                                  <p>
                                                    C. Transmitir los datos
                                                    personales, a Encargados del
                                                    Tratamiento en México y en
                                                    el exterior cuando ello sea
                                                    necesario para dar
                                                    cumplimiento a las normas
                                                    sobre farmacovigilancia
                                                    aplicables en la materia.
                                                  </p>
                                                  <p>
                                                    D. Ferring (o las empresas
                                                    que trabajan en nombre de
                                                    Ferring) utilizarán mi
                                                    información para comunicarse
                                                    con los profesionales de la
                                                    salud y/o clínicas de
                                                    fertilidad por teléfono,
                                                    correo electrónico o correo
                                                    postal para proporcionarme
                                                    información que pueda ser de
                                                    mi interés o para invitarme
                                                    a participar en una
                                                    investigación, iniciativas
                                                    educativas y de marketing,
                                                    esta es una finalidad
                                                    secundaria.
                                                  </p>
                                                  E. ingresar la información que
                                                  ha proporcionado en un base de
                                                  datos. Que esta información no
                                                  se mantendrá confidencial. Se
                                                  mostrará en uno o más sitios
                                                  web controlados por Ferring,
                                                  como parte del buscador de
                                                  clínicas para pacientes que
                                                  posiblemente busquen
                                                  tratamiento para la
                                                  infertilidad.
                                                  <p>
                                                    F. Para publicarlos en las
                                                    cuentas de redes sociales
                                                    (Facebook, Twitter,
                                                    LinkedIn, Instagram, Tiktok,
                                                    Youtube, y cualesquiera
                                                    otras plataformas y/o red
                                                    social que de tiempo en
                                                    tiempo las partes consideren
                                                    oportunas) de FERRING, así
                                                    como asociadas al proyecto.
                                                  </p>
                                                  <p>
                                                    G. Para publicarlos en los
                                                    sitios web internos y
                                                    externos (Commsite/página
                                                    web de la compañía o el
                                                    proyecto) de FERRING o
                                                    asociados al proyecto.
                                                  </p>

                                                  <p>
                                                    1.4 Proveedores/Prestadores
                                                    de Servicios
                                                  </p>
                                                  <p>
                                                    A. Para ejecutar los
                                                    contratos con los
                                                    proveedores de FERRING y
                                                    prestadores de servicios
                                                    contratados por FERRING.
                                                  </p>
                                                  <p>
                                                    B. Para llevar a cabo
                                                    operaciones de negocios.
                                                  </p>
                                                  <p>
                                                    C. Para referenciarlos y
                                                    compartir información con
                                                    otras personas naturales o
                                                    jurídicas.
                                                  </p>
                                                  <p>
                                                    D. Para publicarlos en las
                                                    cuentas de redes sociales
                                                    (Facebook, Twitter,
                                                    LinkedIn, Instagram, Tiktok,
                                                    Youtube, y cualesquiera
                                                    otras plataformas y/o red
                                                    social que de tiempo en
                                                    tiempo las partes consideren
                                                    oportunas) de FERRING, así
                                                    como asociadas al proyecto.
                                                  </p>
                                                  <p>
                                                    E. Para publicarlos en los
                                                    sitios web internos y
                                                    externos (Commsite/página
                                                    web de la compañía o el
                                                    proyecto) de FERRING o
                                                    asociados al proyecto.
                                                  </p>

                                                  <p>1.5 Clientes</p>
                                                  <p>Finalidades necesarias:</p>
                                                  <p>
                                                    Cumplir las obligaciones
                                                    contraídas por FERRING con
                                                    sus clientes y usuarios.
                                                  </p>
                                                  <p>
                                                    A. Enviar información sobre
                                                    cambios en las condiciones
                                                    de los Productos ofrecidos
                                                    por FERRING.
                                                  </p>
                                                  <p>
                                                    B. Tratar los datos de los
                                                    clientes y usuarios de
                                                    FERRING. suministrados por
                                                    terceros para las
                                                    finalidades aquí señaladas.
                                                  </p>
                                                  <p>
                                                    C. Transmitir los datos
                                                    personales, de los clientes
                                                    y usuarios de FERRING, a
                                                    Encargados del Tratamiento
                                                    en México y en el exterior
                                                    cuando ello sea necesario
                                                    para la ejecución de los
                                                    contratos con los clientes
                                                    por FERRING.
                                                  </p>
                                                  <p>
                                                    D. Los demás fines
                                                    necesarios para dar
                                                    cumplimiento a los contratos
                                                    suscritos con los clientes y
                                                    usuarios de FERRING.
                                                  </p>
                                                  <p>
                                                    Finalidades secundarias:
                                                  </p>
                                                  <p>
                                                    Enviar información sobre los
                                                    Productos que ofrece
                                                    FERRING.
                                                  </p>
                                                  <p>
                                                    Enviar al correo físico,
                                                    electrónico, celular o
                                                    dispositivo móvil, vía
                                                    mensajes de texto (SMS y/o
                                                    MMS) o a través de cualquier
                                                    otro medio análogo y/o
                                                    digital de comunicación
                                                    creado o por crearse,
                                                    información comercial,
                                                    publicitaria o promocional
                                                    sobre los Productos de
                                                    FERRING, eventos y/o
                                                    promociones de tipo
                                                    comercial o no de estas, con
                                                    el fin de impulsar, invitar,
                                                    dirigir, ejecutar, informar
                                                    y de manera general, llevar
                                                    a cabo campañas, promociones
                                                    o concursos de carácter
                                                    comercial o publicitario,
                                                    adelantados por FERRING y/o
                                                    por terceras personas.
                                                  </p>
                                                  <p>
                                                    Transferir, bajo su
                                                    consentimiento, los Datos
                                                    Personales a terceras
                                                    personas en México y en el
                                                    exterior a título gratuito u
                                                    oneroso para su uso
                                                    comercial.
                                                  </p>
                                                  <p>
                                                    Elaborar estudios de
                                                    analítica que incluyan
                                                    cualquier detalle
                                                    relacionado con los
                                                    Productos ofrecidos por
                                                    FERRING con el fin de
                                                    compartirlos con
                                                    subsidiarias, matrices,
                                                    empresas del grupo
                                                    empresarial o socios
                                                    vinculados al negocio de
                                                    FERRING
                                                  </p>
                                                  <p>1.6 Empleados</p>
                                                  <p>Finalidades necesarias:</p>
                                                  <p>
                                                    A. Para elaborar las hojas
                                                    de vida.
                                                  </p>
                                                  <p>
                                                    B. Para ejecutar y cumplir
                                                    con el contrato de trabajo y
                                                    demás obligaciones que como
                                                    empleador le corresponden
                                                    por ley.
                                                  </p>
                                                  <p>
                                                    C. Administrar y operar,
                                                    directamente o por conducto
                                                    de terceros, los procesos de
                                                    selección y vinculación de
                                                    personal, incluyendo la
                                                    evaluación y calificación de
                                                    los participantes y la
                                                    verificación de referencias
                                                    laborales y personales, y la
                                                    realización de estudios de
                                                    seguridad.
                                                  </p>
                                                  <p>
                                                    D. Desarrollar las
                                                    actividades propias de la
                                                    gestión de recursos humanos
                                                    tales como nómina,
                                                    afiliaciones a entidades del
                                                    sistema general de seguridad
                                                    social, actividades de
                                                    bienestar y salud
                                                    ocupacional, ejercicio de la
                                                    potestad sancionatoria del
                                                    empleador, entre otras.
                                                  </p>
                                                  <p>
                                                    E. Formar y preservar
                                                    expedientes médicos de
                                                    empleados para brindar
                                                    atención médica en el
                                                    entorno laboral.
                                                  </p>
                                                  <p>
                                                    F. Realizar los pagos
                                                    necesarios derivados de la
                                                    ejecución del contrato de
                                                    trabajo y/o su terminación,
                                                    y las demás prestaciones
                                                    sociales a que haya lugar de
                                                    conformidad con la ley
                                                    aplicable.
                                                  </p>
                                                  <p>
                                                    G. Contratar beneficios
                                                    laborales con terceros,
                                                    tales como seguros de vida,
                                                    gastos médicos, entre otros.
                                                  </p>
                                                  <p>
                                                    H. Notificar a contactos
                                                    autorizados en caso de
                                                    emergencias durante el
                                                    horario de trabajo o con
                                                    ocasión del desarrollo del
                                                    mismo.
                                                  </p>
                                                  <p>
                                                    I. Coordinar el desarrollo
                                                    profesional de los
                                                    empleados, el acceso de los
                                                    empleados a los recursos
                                                    informáticos y asistir en su
                                                    utilización.
                                                  </p>
                                                  <p>
                                                    J. Transmitir la información
                                                    de los empleados a
                                                    Encargados del Tratamiento
                                                    en México y en el exterior
                                                    cuando ello sea necesario
                                                    para el desarrollo de sus
                                                    operaciones y gestión de
                                                    nómina.
                                                  </p>
                                                  K. En los casos en que resulte
                                                  necesario, como, por ejemplo,
                                                  en caso de una emergencia
                                                  sanitaria (como una pandemia),
                                                  adoptar medidas de apoyo y
                                                  prevención sanitaria, así como
                                                  adoptar medidas de seguridad
                                                  sanitaria en el entorno
                                                  laboral, en cumplimiento a las
                                                  instrucciones de las
                                                  autoridades competentes, entre
                                                  ellas solicitar acudir a
                                                  atención médica e implementar
                                                  un protocolo de confinamiento,
                                                  según sea aplicable.
                                                  <p>
                                                    L. Con motivo de alguna
                                                    emergencia sanitaria,
                                                    detectar casos de
                                                    trabajadores considerados en
                                                    situación vulnerable para
                                                    tomar decisiones que atañen
                                                    al entorno laboral.
                                                  </p>
                                                  <p>
                                                    M. Implementar políticas
                                                    internas, de conformidad con
                                                    las leyes aplicables,
                                                    incluyendo sin limitar
                                                    políticas de seguridad de la
                                                    información, protocolos para
                                                    prevenir la discriminación y
                                                    atender casos de violencia,
                                                    acoso u hostigamiento
                                                    sexual, políticas para
                                                    proteger la salud mental de
                                                    los trabajadores, entre
                                                    otras.
                                                  </p>
                                                  <p>
                                                    N. Llevar a cabo
                                                    investigaciones de
                                                    violaciones a la ley y/o
                                                    supervisar el cumplimiento
                                                    de las políticas internas de
                                                    Ferring.
                                                  </p>
                                                  <p>
                                                    1.7 Finalidades aplicables a
                                                    todos
                                                  </p>
                                                  <p>Finalidades necesarias:</p>
                                                  <p>
                                                    A. Para el fortalecimiento
                                                    de las relaciones con sus
                                                    clientes y proveedores,
                                                    mediante el envío de
                                                    información relevante, la
                                                    toma de pedidos y evaluación
                                                    de la calidad de los
                                                    Productos de FERRING.
                                                  </p>
                                                  <p>
                                                    B. Para la determinación de
                                                    obligaciones pendientes, la
                                                    consulta de información
                                                    financiera e historia
                                                    crediticia y el reporte a
                                                    centrales de información de
                                                    obligaciones incumplidas,
                                                    respecto de sus deudores en
                                                    los términos de la ley
                                                    aplicable.
                                                  </p>
                                                  <p>
                                                    C. Controlar el acceso a las
                                                    oficinas de FERRING y
                                                    establecer medidas de
                                                    seguridad, incluyendo el
                                                    establecimiento de zonas
                                                    videovigiladas.
                                                  </p>
                                                  <p>
                                                    D. Para procurar la
                                                    integridad y seguridad de
                                                    nuestro personal, e
                                                    información.
                                                  </p>
                                                  <p>
                                                    E. Dar respuesta a
                                                    consultas, peticiones,
                                                    quejas y reclamos que sean
                                                    realizadas por los titulares
                                                    y transferir los Datos
                                                    Personales a organismos de
                                                    control y demás autoridades
                                                    que en virtud de la ley
                                                    aplicable deban recibir los
                                                    Datos Personales.
                                                  </p>
                                                  <p>
                                                    F. Registrar los datos
                                                    personales en los sistemas
                                                    de información de FERRING y
                                                    en sus bases de datos
                                                    comerciales y operativas.
                                                  </p>
                                                  <p>
                                                    G. Suministrar, compartir,
                                                    enviar o entregar sus datos
                                                    personales a empresas
                                                    matrices, filiales,
                                                    vinculadas, o subordinadas
                                                    de FERRING ubicadas en
                                                    México o en el extranjero en
                                                    el evento que dichas
                                                    compañías requieran la
                                                    información para los fines
                                                    aquí indicados.
                                                  </p>
                                                  <p>
                                                    H. Cumplir con las
                                                    obligaciones estatutarias y
                                                    voluntarias según la ley los
                                                    códigos de la industria; así
                                                    como ejercer o defender
                                                    nuestros derechos, incluso
                                                    ante las autoridades
                                                    competentes.
                                                  </p>
                                                  <p>
                                                    I. Notificarte sobre cambios
                                                    sustanciales a este aviso de
                                                    privacidad
                                                  </p>
                                                  <p>
                                                    Asimismo, podremos tratar
                                                    sus datos personales para
                                                    las siguientes finalidades
                                                    voluntarias, que no son
                                                    necesarias, pero nos
                                                    permiten y facilitan
                                                    brindarle una mejor
                                                    atención, si no se opone a
                                                    éstas a través de los medios
                                                    disponibles para ello y que
                                                    se describen más adelante en
                                                    la sección “Derechos ARCO y
                                                    Otros Derechos”:
                                                  </p>
                                                  <p>
                                                    A. Realizar encuestas sobre
                                                    nuestros servicios; entre
                                                    ellas, realizar encuestas
                                                    para el desarrollo de
                                                    estudios e investigaciones
                                                    de economía conductual.
                                                  </p>
                                                  <p>
                                                    B. Comunicarle nuestras
                                                    promociones y eventos,
                                                    mercadotecnia y publicidad.
                                                  </p>
                                                  <p>
                                                    C. Suscribirse a nuestro
                                                    boletín.
                                                  </p>

                                                  <p>
                                                    Sus datos personales
                                                    solamente serán usados para
                                                    la finalidad específica para
                                                    la cual fueron recabados y
                                                    no serán utilizados para
                                                    ningún otro propósito sin
                                                    notificarle anticipadamente
                                                    y/o obtener el
                                                    consentimiento apropiado.
                                                  </p>

                                                  <p>Cookies</p>

                                                  <p>
                                                    Cuando visite este sitio web
                                                    los datos sobre su uso, así
                                                    como datos que pueden ser
                                                    personales, podrían ser
                                                    recabados mediante Google
                                                    Analytics. Esta tecnología
                                                    de rastreo utiliza cookies
                                                    para reunir los datos sobre
                                                    el uso y actividad del sitio
                                                    web; por ejemplo: cuántos
                                                    usuarios visitan la página y
                                                    qué tan seguido. Estos datos
                                                    se pueden compartir con un
                                                    prestador de servicios
                                                    externo para mejorar
                                                    nuestros servicios.. El uso
                                                    de este tipo de tecnología
                                                    cumplirá con las
                                                    regulaciones aplicables de
                                                    protección de datos y con la
                                                    actual Regulación de
                                                    Privacidad electrónica.
                                                  </p>

                                                  <p>
                                                    Retención de datos
                                                    personales
                                                  </p>

                                                  <p>
                                                    Ferring implementará las
                                                    acciones apropiadas para
                                                    asegurar que sus datos
                                                    personales sean retenidos
                                                    solamente por el periodo
                                                    requerido para cumplir con
                                                    los propósitos señalados en
                                                    este Aviso de Privacidad.
                                                    Ferring solamente mantendrá
                                                    los datos personales por un
                                                    periodo más prolongado en
                                                    caso de ser requerido o
                                                    permitido por la
                                                    ley/regulación aplicable
                                                    dentro de la industria
                                                    farmacéutica. Es posible
                                                    deshabilitar las cookies en
                                                    cualquier navegador, a
                                                    través de las opciones de
                                                    configuración. A modo de
                                                    ejemplo, para deshabilitar
                                                    las cookies en ‘Google
                                                    Chrome’, debe ir a Menú –
                                                    Más herramientas – Borrar
                                                    datos de navegación – Borrar
                                                    todo – Aceptar. Tenga en
                                                    cuenta que al bloquear o
                                                    eliminar las cookies,
                                                    algunas funciones del sitio
                                                    pueden no funcionar
                                                    correctamente.
                                                  </p>

                                                  <p>Sus derechos</p>
                                                  <p>
                                                    En caso de y cuando sus
                                                    datos personales sean
                                                    recabados, conservados y
                                                    procesados, usted será
                                                    acreedor de derechos
                                                    específicos como interesado.
                                                    Ferring hará cumplir estos
                                                    derechos de conformidad con
                                                    las leyes europeas y
                                                    nacionales/locales
                                                    aplicables de protección de
                                                    datos y cuando las leyes de
                                                    farmacovigilancia lo
                                                    permitan. Sus derechos como
                                                    interesado serán los
                                                    siguientes:
                                                  </p>
                                                  <ul>
                                                    <li>
                                                      Derecho al acceso y
                                                      rectificación: tiene
                                                      derecho a solicitar una
                                                      copia de la información
                                                      que conservamos de usted,
                                                      así como a solicitar
                                                      correcciones de los datos
                                                      personales que conservamos
                                                      en caso de ser inexactos.
                                                    </li>
                                                    <li>
                                                      Derecho a eliminar y
                                                      restringir su
                                                      procesamiento: tiene
                                                      derecho a solicitar la
                                                      eliminación de sus datos
                                                      personales o a restringir
                                                      su procesamiento. Estos
                                                      derechos están limitados y
                                                      solamente serán
                                                      ejecutables en ciertas
                                                      circunstancias donde no se
                                                      aplican excepciones.
                                                    </li>
                                                    <li>
                                                      Derecho a la portabilidad
                                                      de datos: tiene derecho a
                                                      solicitar una copia de los
                                                      datos personales que
                                                      conservamos, así como el
                                                      derecho a solicitar que
                                                      estos datos sean
                                                      transferidos a otro
                                                      auditor. Este derecho está
                                                      sujeto a ciertas
                                                      condiciones y podría no
                                                      ser ejecutable; por
                                                      ejemplo, si no está
                                                      permitido por razones de
                                                      interés público o no es
                                                      técnicamente factible.
                                                    </li>
                                                    <li>
                                                      Derecho a objetar: tiene
                                                      derecho a objetar el
                                                      procesamiento de sus datos
                                                      personales. Si los datos
                                                      son procesados por razones
                                                      de interés público, con
                                                      fines científicos o
                                                      estadísticos usted todavía
                                                      puede objetar y será
                                                      nuestra responsabilidad
                                                      demostrar la legitimidad
                                                      del procesamiento de
                                                      datos.
                                                    </li>
                                                    <li>
                                                      Tiene derecho a solicitar
                                                      la limitación al uso o
                                                      divulgación de sus datos
                                                      personales, manifestar su
                                                      negativa a las finalidades
                                                      accesorias de datos
                                                      personales o bien, revocar
                                                      el consentimiento que nos
                                                      haya otorgado para el
                                                      tratamiento de estos.
                                                    </li>
                                                    <li>
                                                      Tiene derecho a contactar
                                                      o presentar una queja ante
                                                      su autoridad local
                                                      supervisora de protección
                                                      de datos.
                                                    </li>
                                                  </ul>
                                                  <p>
                                                    En caso de que desee
                                                    presentar una solicitud en
                                                    relación con los derechos
                                                    del interesado haga uso del
                                                    Formulario de Contacto del
                                                    Interesado –
                                                    <a
                                                      href="https://ferring.ethicspoint.eu/custom/ferring/forms/data/form_data.asp"
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                    ></a>
                                                    Data Subject Contact Form.
                                                  </p>
                                                  <p>
                                                    ¿Cómo puede Ferring
                                                    compartir o transferir sus
                                                    datos personales?
                                                  </p>

                                                  <p>
                                                    Sus datos personales pueden
                                                    ser transferidos a otras
                                                    instalaciones de Ferring
                                                    (entre ellas, subsidiarias
                                                    de Ferring, contratistas,
                                                    socios o agentes), con las
                                                    bases legitimas para dicha
                                                    transferencia, como puede
                                                    ser una razón comercial
                                                    válida. Dichas ubicaciones
                                                    pueden incluir países fuera
                                                    del Espacio Económico
                                                    Europeo (EEE). Y cualquier
                                                    transferencia será
                                                    salvaguardada por los
                                                    acuerdos internacionales de
                                                    transferencia de datos para
                                                    asegurar que sus datos
                                                    personales estén protegidos
                                                    de conformidad con las leyes
                                                    europeas y
                                                    nacionales/locales
                                                    aplicables de protección de
                                                    datos.
                                                  </p>
                                                  <p>
                                                    En casos específicos Ferring
                                                    puede compartir sus datos
                                                    personales con terceros
                                                    (como proveedores,
                                                    contratistas, socios o
                                                    agentes) si es necesario
                                                    para cumplir con los
                                                    propósitos anunciados o si
                                                    dichos terceros asisten a
                                                    Ferring con el procesamiento
                                                    de datos. Ferring solamente
                                                    divulgará sus datos
                                                    personales a un tercero bajo
                                                    las siguientes
                                                    circunstancias:
                                                  </p>
                                                  <ul>
                                                    <li>
                                                      Usted ha proporcionado su
                                                      consentimiento pertinente.
                                                    </li>
                                                    <li>
                                                      Si aplica, como resultado
                                                      de su propia solicitud
                                                      como interesado.
                                                    </li>
                                                    <li>
                                                      Cuando exista un
                                                      fundamento legal para la
                                                      divulgación de datos y
                                                      usted ha recibido una
                                                      notificación apropiada al
                                                      respecto.
                                                    </li>
                                                    <li>
                                                      Cuando requerimos hacerlo
                                                      de conformidad con las
                                                      leyes aplicables o como
                                                      resultado de un fallo del
                                                      tribunal.
                                                    </li>
                                                    <li>
                                                      O bien, con su
                                                      consentimiento, cuando
                                                      Ferring decida vender,
                                                      comprar o fusionarse o de
                                                      otra manera reorganizar su
                                                      estructura comercial.
                                                    </li>
                                                  </ul>
                                                  <p>
                                                    Ferring de ningún modo
                                                    venderá su información a
                                                    ningún tercero.
                                                  </p>

                                                  <p>
                                                    Vínculos con otros sitios
                                                    web
                                                  </p>

                                                  <p>
                                                    Este sitio web puede
                                                    proporcionar vínculos con
                                                    sitios web relacionados o
                                                    externos. Ferring no se hace
                                                    responsable por el
                                                    contenido, calidad,
                                                    actividades de procesamiento
                                                    de datos o prácticas de
                                                    protección de datos de
                                                    cualquier otro sitio web. Si
                                                    usted visita otro sitio web
                                                    consulte el aviso de
                                                    privacidad y configuración
                                                    del sitio respectivo.
                                                  </p>

                                                  <p>
                                                    Información de seguridad
                                                  </p>

                                                  <p>
                                                    Ferring implementa
                                                    apropiadas medidas técnicas,
                                                    físicas y de seguridad
                                                    organizacional para
                                                    salvaguardar sus datos
                                                    personales del acceso no
                                                    autorizado, uso,
                                                    divulgación, destrucción o
                                                    pérdida accidental. Por
                                                    ejemplo, cuando es apropiado
                                                    Ferring hace uso de la
                                                    encriptación, anonimización
                                                    o seudonimización de datos
                                                    personales para conservarlos
                                                    con seguridad en un sistema
                                                    designado. Nuestras
                                                    políticas internas y
                                                    procedimientos están
                                                    diseñados para priorizar y
                                                    promover la protección de
                                                    datos personales.
                                                  </p>

                                                  <p>
                                                    Mientras que nuestras
                                                    medidas de seguridad de
                                                    datos son evaluadas y
                                                    actualizadas continuamente,
                                                    no puede garantizarse la
                                                    seguridad de los datos que
                                                    son transferidos por
                                                    internet desde una
                                                    computadora u otro
                                                    dispositivo y se le
                                                    recomienda seguir ciertos
                                                    pasos para protegerse en la
                                                    red y contra el uso no
                                                    autorizado de sus
                                                    contraseñas y dispositivos
                                                    móviles, así como la
                                                    instalación de un sistema
                                                    firewall apropiado,
                                                    antivirus y antispyware para
                                                    su computadora.
                                                  </p>

                                                  <p>
                                                    Posibles incidentes que
                                                    pueden ocurrir en relación
                                                    con los datos personales:
                                                  </p>

                                                  <ul>
                                                    <li>
                                                      La pérdida/robo de la
                                                      computadora personal.
                                                    </li>
                                                    <li>Hacker externo.</li>
                                                    <li>
                                                      Un correo electrónico con
                                                      datos personales enviado
                                                      por error.
                                                    </li>
                                                    <li>
                                                      Pérdida de información en
                                                      tránsito.
                                                    </li>
                                                    <li>
                                                      Documentos en un área no
                                                      asegurada.
                                                    </li>
                                                  </ul>
                                                  <p>
                                                    Si sospecha que la seguridad
                                                    está comprometida o detecta
                                                    vulnerabilidades, es
                                                    esencial reportarlo
                                                    inmediatamente mediante el
                                                    Formulario de Contacto del
                                                    Interesado –
                                                    <a
                                                      href="http://https://ferring.ethicspoint.eu/custom/ferring/forms/data/"
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      >Data Subject Contact
                                                      Form.</a
                                                    >
                                                  </p>

                                                  <p>Menores de edad</p>

                                                  <p>
                                                    Ferring está comprometido
                                                    con proteger la privacidad
                                                    de los niños. En caso de que
                                                    los datos personales
                                                    pertenezcan a un interesado
                                                    menor de 18 años (niños
                                                    pequeños según la ley
                                                    nacional aplicable) será
                                                    requerido el consentimiento
                                                    a su representante legal.
                                                    Ferring hará todo lo que
                                                    esté a su alcance por
                                                    verificar que haya sido
                                                    obtenido el consentimiento
                                                    necesario en dichos casos.
                                                  </p>

                                                  <p>Modificaciones</p>

                                                  <p>
                                                    Cualquier cambio
                                                    implementado en este Aviso
                                                    de Privacidad le será
                                                    comunicado en este lugar. Le
                                                    recomendamos revisar nuestro
                                                    Aviso de Privacidad cuando
                                                    visite nuestro sitio web
                                                    para estar al pendiente de
                                                    cualquier cambio y se
                                                    mantenga informado sobre
                                                    nuestro actual compromiso
                                                    con respetar el derecho a la
                                                    privacidad y brindar el más
                                                    alto nivel posible de
                                                    protección de datos.
                                                  </p>

                                                  <p>Información de contacto</p>

                                                  <p>
                                                    (i) Si desea optar por salir
                                                    o si tiene alguna pregunta o
                                                    comentario sobre este Aviso
                                                    de Privacidad no dude en
                                                    contactar con la entidad
                                                    jurídica de Ferring y al
                                                    buzón de Ferring.
                                                  </p>
                                                  <p>(ii) En caso de:</p>
                                                  <ul>
                                                    <li>
                                                      Reportar un incidente
                                                      ocurrido con los datos o
                                                      de sospechar de una
                                                      violación de datos
                                                      personales.
                                                    </li>
                                                    <li>
                                                      Presentar una solicitud
                                                      para ejercer sus derechos
                                                      como interesado.
                                                    </li>
                                                    <li>
                                                      Contactar con el Oficial
                                                      de Protección de Datos con
                                                      una consulta general.
                                                    </li>
                                                  </ul>
                                                  <p>
                                                    Favor de utilizar el
                                                    Formulario de Contacto del
                                                    Interesado –
                                                    <a
                                                      href="https://ferring.ethicspoint.eu/custom/ferring/forms/data/form_data.asp"
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      >Data Subject Contact
                                                      Form.</a
                                                    >
                                                  </p>
                                                  <p>
                                                    Como alternativa envíenos un
                                                    correo a la siguiente
                                                    dirección:
                                                  </p>
                                                  <p>
                                                    (Atención: Oficial de
                                                    Protección de Datos)
                                                  </p>
                                                  <p>
                                                    Ferring International Center
                                                    S.A.
                                                  </p>
                                                  <p>
                                                    Chemin De la Vergognausaz 50
                                                  </p>
                                                  <p>1162 St Prex</p>
                                                  <p>Switzerland (Suiza)</p>

                                                  <p>
                                                    O con el Representante de la
                                                    UE de la GDPR,
                                                  </p>
                                                  <p>
                                                    (Atención: Oficial de
                                                    Protección de Datos)
                                                  </p>
                                                  <p>
                                                    Ferring International
                                                    PharmaScience Center (IPC)
                                                  </p>
                                                  <p>Amager Strandvej 405</p>
                                                  <p>2770 Kastrup</p>
                                                  <p>Denmark (Dinamarca)</p>

                                                  <p>
                                                    Con fundamento en la Ley
                                                    Federal de Protección de
                                                    Datos Personales, de su
                                                    Reglamento y de los
                                                    Lineamientos del Aviso de
                                                    Privacidad, se hace de su
                                                    conocimiento:
                                                  </p>
                                                  <p>
                                                    Nombre y domicilio del
                                                    Responsable: Ferring, S.A.
                                                    de C.V. (en adelante llamada
                                                    Ferring), con domicilio en
                                                    Av. Nemesio Diez Riega,
                                                    Manzana 2, Lote 15, No. 15,
                                                    Colonia Parque Industrial
                                                    Cerrillo II, C.P. 52000,
                                                    Lerma, Estado de México,
                                                    correo electrónico:
                                                    datos.personales@ferring.com
                                                  </p>

                                                  <p>
                                                    Este Aviso de Privacidad fue
                                                    actualizado el 21/03/2023
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          class="modal-footer"
                                          style="border: none"
                                        >
                                          <div class="container">
                                            <div class="row">
                                              <div
                                                class="col align-self-center"
                                              >
                                                <div class="contenidoCentrado">
                                                  <button
                                                    class="btnCerrarAviso rounded"
                                                    data-bs-dismiss="modal"
                                                  >
                                                    CERRAR
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </label>
                              </div>
                              <br />
                              <div class="contenidoCentrado">
                                <!-- <a style="cursor: pointer;" id="btnContinuarForm"
                                                                    class="btnContinuar rounded">Continuar</a> -->
                                <!-- eslint-disable-next-line max-len -->
                                <!-- <input class="btnContinuar rounded" type="submit"
                                                                    value="CONTINUAR"> -->

                                <button
                                  type="submit"
                                  class="btnContinuar rounded"
                                >
                                  CONTINUAR
                                </button>
                                <!-- <router-link to="/crear" type="submit"
                                                                    class="btnContinuar rounded">Go to
                                                                    Home</router-link> -->

                                <!-- <button to="/crear">Form validado ir a crear</button> -->
                                <!-- <a to="/crear" class="btnContinuar rounded" type="submit">CREAR</a> -->
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


  
<script>
import axios from "axios";

export default {
  name: "Login",
  props: {
    msg: String,
  },
  data() {
    return {
      nombre: "",
      apellido: "",
      edad: "",
      celular: "",
      contraseña: "",
      confirmar: "",
      pais: [],
      paises: "",
      errors: {},
      correct: {},
      options: [],
      optionsCiudad: [],
      seleccionaOpcion: null,
      formularioValidado: false,
      showPassword: false,
      inputTypeIcon: "password",

      pais: "",
      lada: "",
      telefonoCelular: "",
      estado: "",
      ciudad: "",
      edad: "",
      peso: "",
      nomMedTrat: "",
      apeMedTrat: "",
      claveAccesos: "",
      confClaveAccesos: "",

      selected: "",
      options: [],
      selectedCountry: "",
      selectedLada: "",

      /** */
      nombre: "",
      correoElectronico: "",
      nombreError: "",
      correoElectronicoError: "",
      /** */

      /** form de articulo digital */
      name: "",
      email: "",
      username: "",
      password: "",
      password_confirmation: "",
      /** form de articulo digital */
      telefono: "",
      claveAcceso: "",
      inputTypeIcon: "password",
      errors: {},

      formularioIniciar: {
        telefono: "",
        claveAcceso: "",
        inputTypeIcon: "password",
        errors: {},
      },

      tarea: {
        nombre: "",
        categorias: [],
        estado: "",
        numero: 0,
      },

      inputUno: "",
      inputDos: "",
      inputTres: "",
      municipio: "",
    };
  },
  /* created() {
        axios.get('https://intestinolimpio.onrender.com/api/v1/data/estados')
            .then((response) => {
                this.options = response.data;
                console.log(this.options);
            })
            .catch((error) => {
                console.log(error);
            });
    }, */
    computed: {
        bloquear() {
            return this.formularioIniciar.telefono.trim() === "" ? true : false
        }
    },
    mounted() {
        // Consumir una API 
        axios
            /* .get("https://intestinolimpio.onrender.com/api/v1/data/estados") */
            .get("http://127.0.0.1:3000/api/v1/data/estados")
            .then((response) => {
                this.options = response.data.data.map((estado) => ({
                    text: estado.nombre,
                    value: estado.clave,
                }));
            })
            .catch((error) => {
                console.log(error);
            });
        /* axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (this.info = response.data.bpi)) */
    /* axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            this.options = response.data.map((user) => ({
                text: user.name,
                value: user.id,
            }));
        }); */
    axios
      .get("https://intestinolimpio.onrender.com/api/v1/data/estados")
      /* .get("http://127.0.0.1:3000/api/v1/data/estados") */
      .then((response) => {
        this.options = response.data.data.map((estado) => ({
          text: estado.nombre,
          value: estado.clave,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    async crearUsuario() {
      try {
        const response = await axios.post(
          "https://intestinolimpio.onrender.com/api/v1/user",
          {
            lada: this.lada,
            telefono: this.telefono,
            estado: this.estado,
            ciudad: this.ciudad,
            edad: this.edad,
            peso: this.peso,
            nombre_medico: this.nombre_medico,
            apellido_medico: this.apellido_medico,
            pass: this.pass,
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    irVistaCrear() {
      this.$router.push({ path: "/crear" });
    },
    validateTelefono() {
      this.errors.telefono = "";
      /* const code = (evt.wich) ? evt.whitch : evt.keyCode;
            if (code == 8) {
                return true;
            } else if (code >= 48 && code <= 57) {
                return true;
            }  */
      this.telefono = this.telefono.replace(/[^0-9]/g, "");
      if (!this.telefono) {
        this.errors.telefono = "El número celular es obligatorio";
        valida = false;
      } else if (!/^([0-9])*$/.test(this.telefono)) {
        this.errors.telefono = "El número celular solo debe contener números";
        valida = false;
      } else if (this.telefono.length < 7) {
        this.errors.telefono = "El número celular debe tener minimo 7 numeros";
        valida = false;
      } else if (this.telefono.length > 10) {
        this.errors.telefono =
          "El número celular no debe exceder de 10 números";
        valida = false;
      } else {
        delete this.errors["telefono"];
      }
    },
    validateClaveAcceso() {
      this.errors.claveAcceso = "";

      if (!this.claveAcceso) {
        this.errors.claveAcceso = "La clave de acceso es obligatoria";
        valida = false;
      } else if (this.claveAcceso.length < 4) {
        this.errors.claveAcceso =
          "La clave de acceso debe tener por lo menos 4 caracteres";
        valida = false;
      } else if (this.claveAcceso.length > 10) {
        this.errors.claveAcceso =
          "La clave de acceso no debe exceder de 10 caracteres";
        valida = false;
      } else {
        delete this.errors["claveAcceso"];
      }
    },
    ToggleInput() {
      this.inputType = this.inputType === "password" ? "text" : "password";
    },
    ToggleInputIcon() {
      this.inputTypeIcon =
        this.inputTypeIcon === "password" ? "text" : "password";
    },
    submitForm() {
      this.errors = {};
      this.validateTelefono();
      this.validateClaveAcceso();
      // Comprobar si hay errores
      if (Object.keys(this.errors).length > 0) {
        return;
      } else {
        /* this.$router.push('/crear'); */
        this.$router.push("/consultar");
      }
    },
    // Funcion para almacenar temporalmente el id_user
    login(){

    },
    validarPaisLada() {
      let valida = true;
      // Validar los campos del formulario
      this.errors.selectedCountry = "";
      this.errors.selectedLada = "";
      // Validar que el campo pais
      if (!this.selectedCountry) {
        this.errors.selectedCountry = "El país es obligatorio";
        valida = false;
      } else {
        delete this.errors["selectedCountry"];
      }
      // Validar los campos del formulario
      this.errors.selectedLada = "";
      // Validar que el campo lada
      if (!this.selectedLada) {
        this.errors.selectedLada = "La lada es obligatoria";
        valida = false;
      } else {
        delete this.errors["selectedLada"];
      }
    },
    /* validarPais() {

            updateLada();

        }, */
    /* validarLada() {
            
        }, */
    validarTelefonoCelular() {
      let valida = true;
      // Validar los campos del formulario
      this.errors.telefonoCelular = "";
      this.telefonoCelular = this.telefonoCelular.replace(/[^0-9]/g, "");

      if (!this.telefonoCelular) {
        this.errors.telefonoCelular = "El teléfono celular es obligatorio";
        valida = false;
      } else if (isNaN(this.telefonoCelular)) {
        this.errors.telefonoCelular =
          "El teléfono celular solo debe contener números";
        valida = false;
      } else if (this.telefonoCelular.length < 7) {
        this.errors.telefonoCelular =
          "El teléfono celular no debe ser menor a 7 números";
        valida = false;
      } else if (this.telefonoCelular.length > 10) {
        this.errors.telefonoCelular =
          "El teléfono celular no debe exceder 10 números";
        valida = false;
      } else {
        delete this.errors["telefonoCelular"];
      }
      /* this.validarPais();
            this.formularioValidado = this.validarEdad && validarPeso; */
    },
    validarEstado() {
      /* this.estado =
        event.target.options[event.target.options.selectedIndex].text; */
      this.errors.estado = "";
      /* console.log(this.estado);
      console.log(event.target.value); */
      let valida = true;
      // Validar que el campo edad no esté vacío y sea un número positivo
      if (!this.estado) {
        this.errors.estado = "El estado es obligatorio";
        valida = false;
      } else {
        axios
          .post("https://intestinolimpio.onrender.com/api/v1/data/municipios", {
            /* estado: 'Aguascalientes' */
            /* estado: this.ciudad, */
            estado: this.estado,
          })
          .then((response) => {
            this.optionsCiudad = response.data.data.map((municipio) => ({
              text: municipio,
              value: municipio,
            }));
            console.log(response.data);
            /* console.log(`Respuesta de back💾: ${response.data}`); */
          })
          .catch((error) => {
            console.log(error);
          });
        delete this.errors["estado"];
      }
    },

    validarCiudad() {
      // Validar los campos del formulario
      this.errors.ciudad = "";
      let valida = true;
      /** Expresion regular para solo letras */
      /* const regex = /^[a-zA-Z]+$/; */
      this.nomMedTrat = this.nomMedTrat.replace(
        /[^A-Za-záéíóúÁÉÍÓÚñÑüÜ\s]/g,
        ""
      );

      // Validar que el campo edad no esté vacío y sea un número positivo
      if (!this.ciudad) {
        this.errors.ciudad = "La ciudad es obligatoria";
        valida = false;
      } /* else if (!/^[a-zA-Z]+$/.test(this.ciudad)) {
                this.errors.ciudad = 'El nombre del médico tratante solo debe contener solo letras';
                valida = false;
            } */ else if (this.ciudad.length > 80) {
        this.errors.ciudad = "La ciudad debe tener máximo 80 caracteres";
        valida = false;
      } else {
        delete this.errors["ciudad"];
      }
    },

    validarEdad() {
      // Validar los campos del formulario
      this.errors.edad = "";
      let valida = true;
      // Validar que el campo edad no esté vacío y sea un número positivo
      if (!this.edad) {
        this.errors.edad = "La edad es obligatoria";
        valida = false;
      } else if (this.edad <= 0) {
        this.errors.edad = "La edad debe ser un número positivo";
        valida = false;
      } else {
        delete this.errors["edad"];
      }
    },
    validarPeso() {
      // Validar los campos del formulario
      this.errors.peso = "";
      let valida = true;
      // Validar que el campo peso no esté vacío y sea un número positivo
      if (!this.peso) {
        this.errors.peso = "El peso es obligatorio";
        valida = false;
      } else if (this.peso <= 0) {
        this.errors.peso = "El peso debe ser un número positivo";
        valida = false;
      } else {
        delete this.errors["peso"];
      }
    },
    validarNomMedTrat() {
      // Validar los campos del formulario
      this.errors.nomMedTrat = "";
      let valida = true;
      /* this.nomMedTrat = this.nomMedTrat.replace(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]/g,""); */
      /** Expresion regular para solo letras */
      /* const regex = /^[a-zA-Z]+$/; */
      this.nomMedTrat = this.nomMedTrat.replace(
        /[^A-Za-záéíóúÁÉÍÓÚñÑüÜ\s]/g,
        ""
      );
      // Validar que el campo nombre de medico tratante no este vaciO y tenaga minimo 70 y maximo 80 caracteres
      if (!this.nomMedTrat) {
        this.errors.nomMedTrat = "El nombre del médico tratante es obligatorio";
        valida = false;
        /* else if (!/^([0-9])*$/.test(this.telefono)) { */
      } /* else if (/^[ a-zA-Z]+$/.test(this.nomMedTrat)) {
                this.errors.nomMedTrat = 'El nombre del médico tratante solo debe contener solo letras';
                valida = false;
            } */ /* else if (this.nomMedTrat.length < 50) {
                this.errors.nomMedTraT =
                    "El nombre del médico tratante debe tener al menos 50 caracteres";
            } */ else if (this.nomMedTrat.length > 80) {
        this.errors.nomMedTrat =
          "El nombre del médico tratante debe tener máximo 80 caracteres";
        valida = false;
      } else {
        delete this.errors["nomMedTrat"];
      }
    },
    validarApeMedTrat() {
      // Validar los campos del formulario
      this.errors.apeMedTrat = "";
      let valida = true;
      this.apeMedTrat = this.apeMedTrat.replace(
        /[^A-Za-záéíóúÁÉÍÓÚñÑüÜ\s]/g,
        ""
      );

      // Validar que el campo apellido de medico tratante no este vaci y tenaga minimo 70 y maximo 80 caracteres
      if (!this.apeMedTrat) {
        this.errors.apeMedTrat =
          "El apellido del médico tratante es obligatorio";
        valida = false;
      } /* else if (this.apeMedTrat.length < 50) {
                this.errors.apeMedTrat =
                    "El apellido del médico tratante debe tener al menos 50 caracteres";
                valida = false;
            } */ else if (this.apeMedTrat.length > 80) {
        this.errors.apeMedTrat =
          "El apellido del médico tratante debe tener máximo 80 caracteres";
        valida = false;
      } else {
        delete this.errors["apeMedTrat"];
      }
    },
    validarClaveAccessos() {
      // Validar los campos del formulario;
      this.errors.claveAccesos = "";
      let valida = true;

      // Validar que el campo contraseña no esté vacío y tenga al menos 4 caracteres
      if (!this.claveAccesos) {
        this.errors.claveAccesos = "La clave de acceso es obligatoria";
        valida = false;
      } else if (this.claveAccesos.length < 4) {
        this.errors.claveAccesos =
          "La clave de acceso debe tener por lo menos 4 caracteres";
        valida = false;
      } else if (this.claveAccesos.length > 10) {
        this.errors.claveAccesos =
          "La clave de acceso no debe exceder de 10 caracteres";
        valida = false;
      } else {
        delete this.errors["claveAccesos"];
      }
    },
    validarConfiClaveAccessos() {
      // Validar los campos del formulario;
      this.errors.confClaveAccesos = "";
      let valida = true;

      // Validar que el campo confirmar no esté vacío y coincida con la contraseña
      if (!this.confClaveAccesos) {
        this.errors.confClaveAccesos =
          "La confirmación de la clave acceso es obligatoria";
        valida = false;
      } else if (this.confClaveAccesos !== this.claveAccesos) {
        this.errors.confClaveAccesos =
          "La confirmación de la contraseña no coincide con la contraseña";
        valida = false;
      } else {
        delete this.errors["confClaveAccesos"];
      }
    },
    // Funcion pata actualizar la lada dependiendo de país seleccionado
    updateLada() {
      let valida = true;
      if (this.selectedCountry === "Mexico") {
        this.selectedLada = "+52";
        valida = false;
      } else if (this.selectedCountry === "Costa Rica") {
        this.selectedLada = "+506";
        valida = false;
      } else {
        delete this.errors["selectedCountry"];
      }
    },
    submitFormCrearPlan() {
      this.errors = {};
      const valida = true;
      // Validar los campos antes de enviar el formulario
      this.validarPaisLada();
      /* this.validarLada(); */
      this.validarTelefonoCelular();
      this.validarEstado();
      this.validarCiudad();
      this.validarEdad();
      this.validarPeso();
      this.validarNomMedTrat();
      this.validarApeMedTrat();
      this.validarClaveAccessos();
      this.validarConfiClaveAccessos();
      const data = {
        lada: this.selectedLada,
        telefono: this.telefonoCelular,
        estado: this.estado,
        ciudad: this.ciudad,
        edad: this.edad,
        peso: this.peso,
        nombre_medico: this.nomMedTrat,
        apellido_medico: this.apeMedTrat,
        pass: this.claveAccesos,
      };
      console.table(data);
      // Emviando los datos del formulario Crear plan de tomas a la API Methodo: Post
      axios
        .post("https://intestinolimpio.onrender.com/api/v1/user", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      // Comprobar si hay errores
      if (Object.keys(this.errors).length > 0) {
        return;
      } else {
        /* this.$router.push('/crear'); */
        this.$router.push("/consultar");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: "OpenSans-Bold";
  src: url("../fonts/OpenSans-Bold.ttf") format("woff");
}

@font-face {
  font-family: "OpenSans-BoldItalic";
  src: url("../fonts/OpenSans-BoldItalic.ttf") format("woff");
}

@font-face {
  font-family: "OpenSans-ExtraBold";
  src: url("../fonts/OpenSans-ExtraBold.ttf") format("woff");
}

@font-face {
  font-family: "OpenSans-ExtraBoldItalic";
  src: url("../fonts/OpenSans-ExtraBoldItalic.ttf") format("woff");
}

@font-face {
  font-family: "OpenSans-Italic";
  src: url("../fonts/OpenSans-Italic.ttf") format("woff");
}

@font-face {
  font-family: "OpenSans-Light";
  src: url("../fonts/OpenSans-Light.ttf") format("woff");
}

@font-face {
  font-family: "OpenSans-LightItalic";
  src: url("../fonts/OpenSans-LightItalic.ttf") format("woff");
}

@font-face {
  font-family: "OpenSans-Medium";
  src: url("../fonts/OpenSans-Medium.ttf") format("woff");
}

@font-face {
  font-family: "OpenSans-MediumItalic";
  src: url("../fonts/OpenSans-MediumItalic.ttf") format("woff");
}

@font-face {
  font-family: "OpenSans-Regular";
  src: url("../fonts/OpenSans-Regular.ttf") format("woff");
}

@font-face {
  font-family: "OpenSans-SemiBold";
  src: url("../fonts/OpenSans-SemiBold.ttf") format("woff");
}

@font-face {
  font-family: "OpenSans-SemiBoldItalic";
  src: url("../fonts/OpenSans-SemiBoldItalic.ttf") format("woff");
}

@font-face {
  font-family: "Segoe-UI";
  src: url("../fonts/Segoe-UI.ttf") format("woff");
}

@font-face {
  font-family: "Segoe-UI-Bold";
  src: url("../fonts/Segoe-UI-Bold.ttf") format("woff");
}

@font-face {
  font-family: "Segoe-UI-Semibold";
  src: url("../fonts/Segoe-UI-Semibold.ttf") format("woff");
}

.vr {
  display: none;
}

/*pruebas*/
.form1 {
  /* width: 90%;
    height: 80px;
    margin: 0 auto; */
  background-color: #444444;
  background-color: #ffffff;
  /* display: flex;
    flex-flow: row wrap;
    justify-content: center; */
  /* margin-top: 100px; */
}

/* .form1 button{
    width: 300px;
    height: 30px;
    margin-top: 20px;
  } */
.form2 {
  /* width: 90%;
    height: 320px;
    margin: 0 auto; */
  background-color: #555555;
  background-color: #ffffff;
  display: none;
  /* flex-flow: column wrap;
    justify-content: center;*/
  margin-top: 30px;
}

.form3 {
  /* width: 100%;
    height: 820px;
    margin: 0 auto; */
  background-color: #cf1414;
  background-color: #ffffff;
  display: none;
  /*  flex-flow: column wrap;
    justify-content: center;*/
  margin-top: 30px;
}

.form4 {
  /* width: 100%;
    height: 820px;
    margin: 0 auto; */
  background-color: #cf1414;
  background-color: #ffffff;
  display: none;
  /*  flex-flow: column wrap;
    justify-content: center;*/
  margin-top: 30px;
}

.contact {
  display: none;
  margin-top: 30px;
}

/*pruebas fin*/
.tituloPrincipal {
  color: orange;
  color: #ff9900;
  font-family: "OpenSans-Bold";
  font-size: 40px;
}

.parrafoUno {
  font-family: "OpenSans-Regular";
  font-size: 20px;
  color: #707070;
  text-align: left;
  text-align: justify;
}

.parrafoUno span {
  font-family: "OpenSans-Bold";
  font-size: 20px;
  color: #707070;
  text-align: left;
  text-align: justify;
}

.parrafoNuestra {
  font-family: "OpenSans-Regular";
  font-size: 20px;
  color: #707070;
  text-align: justify;
}

.parrafoGenera {
  font-family: "OpenSans-Regular";
  font-size: 20px;
  color: #707070;
  text-align: justify;
}

.parrafoGenera span {
  font-family: "OpenSans-Bold";
  font-size: 20px;
  color: #ff9900;
}

.parrafoCreastePlanAntes {
  font-family: "OpenSans-Bold";
  font-size: 20px;
  color: #707070;
}

.parrafoGeneraProgramacion {
  font-family: "Segoe-UI-Bold";
  font-size: 20px;
  color: #4e4e4e;
  text-align: center;
}

.parrafoCreaPlanToma {
  font-family: "Segoe-UI-Bold";
  font-size: 20px;
  color: #4e4e4e;
  text-align: center;
}

/* .btnInicia {
    background-image: url("../assets/img/mobile/Iniciar\ sesion_blanco.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 349px;
    width: 100%;
    height: 45px;
}

.btnInicia:hover {
    background-image: url("../assets/img/mobile/Iniciar\ sesion_Azul.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 349px;
    width: 100%;
    height: 45px;
} */
.btnInicia {
  font-family: "Segoe-UI-Semibold";
  /* font-family: 'Segoe-UI-Bold'; */

  font-size: 20px;
  color: #1155cc;
  background-color: #ffffff;
  width: 100%;
  border: 1px solid #1155cc;
}

.btnInicia:hover {
  font-family: "Segoe-UI-Semibold";
  font-size: 20px;
  color: #ffffff;
  background-color: #1155cc;
  width: 100%;
  border: 1px solid #ffffff;
}

/* .btnCrearPlan {
    width: 100%;
    height: 50px;
    color: #FFFFFF;
    border: none;
    background-color: #FF9900;
}

.btnCrearPlan {
    background-image: url("../assets/img/mobile/Grupo\ 25.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 349px;
    width: 100%;
    height: 45px;
} */
.btnCrearPlan {
  font-family: "Segoe-UI-Semibold";
  font-size: 20px;
  width: 100%;
  /* height: 50px; */
  color: #ffffff;
  border: none;
  background-color: #ff9900;
  text-decoration: none;
}

.btnCrearPlan:hover {
  font-family: "Segoe-UI-Semibold";
  font-size: 20px;
  width: 100%;
  /* height: 50px; */
  color: #ff9900;
  border: none;
  background-color: #ffffff;
  border: 1px solid #ff9900;
}

.contenidoCentrado {
  text-align: center;
}

.contenidoCentradoItems {
  /* text-align: center; */
  /* display: grid; */
  /* place-items: center; */
  /* place-content: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.contenidoDerecha {
  text-align: right;
}

/* .btnContinuar {
    background-image: url("../assets/img/mobile/Grupo\ 175.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 349px;
    width: 100%;
    height: 45px;
}

.btnContinuar:hover {
    background-image: url("../assets/img/mobile/Grupo\ 234.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 349px;
    width: 100%;
    height: 45px;
} */
.btnContinuar {
  font-family: "OpenSans-Semibold";
  color: #ffffff;
  font-size: 20px;
  width: 100%;
  background-color: #2392cb;
  text-decoration: none;
  border: 1px #2392cb solid;
}

.btnContinuar:hover {
  font-family: "OpenSans-Semibold";
  color: #2392cb;
  font-size: 20px;
  width: 100%;
  background-color: #ffffff;
  text-decoration: none;
  border: 1px #2392cb solid;
}

.btnCerrarAviso {
  font-family: "OpenSans-Semibold";
  font-size: 20px;
  background-color: #1155cc;
  border: 1px solid #1155cc;
  color: #ffffff;
  width: 250px;
  width: 25%;
  height: 30px;
}

.btnCerrarAviso:hover {
  font-family: "OpenSans-Semibold";
  color: #2392cb;
  font-size: 20px;
  width: 25%;
  background-color: #ffffff;
  text-decoration: none;
  border: 1px #2392cb solid;
}

.parrafoRecordaViaWhat {
  font-family: "OpenSans-Regular";
  color: #ff7700;
  font-size: 14px;
}

.parrafoRecordaViaWhat span {
  font-family: "OpenSans-Bold";
  color: #ff7700;
  font-size: 14px;
}

.textoSwitchAcepto {
  font-family: "OpenSans-SemiBold";
  color: #1155cc;
  font-size: 14px;
}

.parrafoCheckLeido {
  font-family: "OpenSans-Regular";
  color: #474747;
  font-size: 14px;
}

.labelEdad {
  font-size: 12px;
  /* font-weight: bold; */
}

footer {
  background-color: #d2d2d2;
  height: 340px;
  width: 100%;
}

.columnaBtnDudas {
  /*  display: flex; */
  text-align: center;
}

.btnDudas {
  font-family: "Segoe-UI-Bold";
  font-size: 18px;
  /* height: 40px; */
  background-color: #1155cc;
  border: 1px solid #1155cc;
  color: #ffffff;
  width: 250px;
  height: 60px;
}

/* .nav-item{
    width: 25%;
}
.nav-item.dropdown{
    width: 20%;
} */
.btnDudas span {
  font-family: "Segoe-UI-Bold";
  font-size: 18px;
  /* height: 40px; */
  background-color: #1155cc;
  color: #ffffff;
}

.imgWhatsBlanco {
  width: 30px;
  height: 30px;
  padding-bottom: 7px;
  /* gap: 15px; */
}

.filaDosPermisos {
  padding-top: 100px;
}

.columnaParrafos {
  line-height: 0.5rem;
}

.parrafoIntestinoAño {
  font-family: "Segoe-UI-Semibold";
  font-size: 18px;
  color: #4e4e4e;
}

.parrafoAviso {
  font-family: "Segoe-UI";
  font-size: 18px;
  color: #4e4e4e;
}

.parrafoNumeroReg {
  font-family: "Segoe-UI-Semibold";
  font-size: 18px;
  color: #4e4e4e;
}

.btnDudass {
  background-image: url("../assets/img/mobile/Grupo\ 23.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 10vh;
  width: 288px;
  height: 51px;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.tituloNav {
  color: #ff9900;
  font-family: "OpenSans-Bold";
  font-size: 20px;
  margin-bottom: 20px;
}

.parraffoJustificado {
  font-family: "OpenSans-Regular";
  font-size: 15px;
  color: #707070;
  text-align: left;
  text-align: justify;
}

.nav {
  background-color: #ffff;
}

.hamburgueicon {
  background-image: url("../assets/img/mobile/alinear-justificar\ 1.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  width: 32px;
  height: 32px;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.nav-item a.nav-link {
  font-family: "OpenSans-Bold";
  font-size: 15px;
  color: #565757;
}

.nav-item a.nav-link:hover {
  font-family: "OpenSans-Bold";
  font-size: 15px;
  color: #1155cc;
}

.nav-item img.imgCreaNuevoPlan {
  background-image: url("../assets/img/web/lista-de-tareas-1.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 12px;
  height: 16px;
  border: none;
  margin-right: 10px;
  margin-top: 3px;
  /*  padding: 10px; */
}

.nav-item img.imgCreaNuevoPlan:hover {
  background-image: url("../assets/img/web/lista-de-tareas.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 12px;
  height: 16px;
  margin-right: 10px;
}

.nav-item img.imgConsultaPlan {
  background-image: url("../assets/img/web/lista-de-tareas\ 2.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 12px;
  height: 16px;
  margin-right: 10px;
}

.nav-item img.imgConsultaPlan:hover {
  background-image: url("../assets/img/web/lista-de-tareas-2.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 12px;
  height: 16px;
  margin-right: 10px;
}

.nav-item img.imgPregFrec {
  background-image: url("../assets/img/web/signo-de-interrogacion_gris.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  margin-right: 10px;
}

.nav-item img.imgPregFrec:hover {
  background-image: url("../assets/img/web/signo-de-interrogacion.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  margin-right: 10px;
}

.nav-item img.imgProtecDatos {
  background-image: url("../assets/img/web/proteccion\ 2.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  margin-right: 10px;
}

.nav-item img.imgProtecDatos:hover {
  background-image: url("../assets/img/web/protección\ 1.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  margin-right: 10px;
}

.nav-item img.imgContactaVia {
  background-image: url("../assets/img/web/whatsapp\ \(1\).png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  margin-right: 7px;
}

.nav-item img.imgContactaVia:hover {
  background-image: url("../assets/img/web/whatsapp\ \(3\).png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  margin-right: 7px;
}

.nav-item img.imgAjustes {
  /* background-image: url("../assets/img/web/ajustes.png");
    background-image: url("../img/ajustes.png"); */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  margin-right: 10px;
  border: none;
}

.nav-item img.imgAjustes:hover {
  background-image: url("../assets/img/web/ajustes\ 2.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  margin-right: 10px;
}

.nav-item img.imgPerfil {
  background-image: url("../assets/img/web/usuario\ \(1\).png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  margin-right: 10px;
}

.nav-item img.imgPerfil:hover {
  background-image: url("../assets/img/web/usuario\ \(2\).png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  margin-right: 10px;
}

.nav-item img.imgCerrar {
  background-image: url("../assets/img/web/opcion-de-cerrar-sesion.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  /* gap: 30px; */
  /* border: none; */
  margin-right: 10px;
}

.nav-item img.imgCerrar:hover {
  background-image: url("../assets/img/web/opcion-de-cerrar-sesion\ 2.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  margin-right: 10px;
  /*  gap: 30px; */
  /* border: none; */
}

a {
  /* border: none; */
  text-decoration: none;
}

.accordion-item {
  border-radius: 3px;
  /* border: 1px black solid; */
  /* padding-bottom: 5px; */
  margin-bottom: 20px;
}

/* .nav-link{
    gap: 30px;
} */
/* .parraffo{
    font-family: 'OpenSans-Semibold';
    font-size: 15px;
    gap: 12px;
    display: flex;
    align-items: baseline;
    color: #565757;
}
.imgCreaNuevoPlan{
    position: relative;
    top: 4px;
}
.imgConsultaPlan{
    position: relative;
    top: 4px;
}
{
    position: relative;
    top: 4px;
}
.imgContactaVia{
    position: relative;
    top: 4px;
} */

/* eeeeeeeeee         */

/*celular*/
/* .nav-link {
    font-family: 'OpenSans-Bold';
    font-size: 14px;
    color: #565757;
}
.nav-link:hover{
    font-family: 'OpenSans-Bold';
    font-size: 14px;
    color: #1155CC;
}
.imgCreaNuevoPlan{
    background-image: url("../assets/img/web/lista-de-tareas-1.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 12px;
    height: 16px;
}
.imgCreaNuevoPlan:hover{
    background-image: url("../assets/img/web/lista-de-tareas.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 12px;
    height: 16px;
} */

/* Inician Estilos para input Fecha de estudio */
input.inputFechaEstudioCrear[type="date"] {
  font-family: "OpenSans-Regular";
  color: #8b8a8a;
}

input.inputFechaEstudioCrear[type="date"]:before {
  content: "Fecha de estudio: ";
  font-family: "OpenSans-Regular";
  line-break: normal;
  margin-right: 2rem;
  color: #8b8a8a;
}

input.inputFechaEstudioCrear[type="date"]::-webkit-calendar-picker-indicator {
  /* display: block; */
  background: url("../assets/img/web/herramienta-de-simbolo-de-interfaz-de-calendario\ 2.png")
    no-repeat;
  background: none;
  width: 20px;
  height: 22px;
  color: #8b8a8a;
}

input.inputFechaEstudioCrear[type="date"]::-webkit-calendar-picker-indicator:hover {
  /* display: block; */
  background: url("../assets/img/web/herramienta-de-simbolo-de-interfaz-de-calendario.png")
    no-repeat;
  background: none;
  width: 20px;
  height: 22px;
  color: #8b8a8a;
}

/* Terminan Estilos para input Fecha de estudio */

/* Inician Estilos para input Hora de la colonoscopía o estudio */
input.inputHoraColos[type="time"]:before {
  content: "Hora de la colonoscopía o estudio: ";
  font-family: "OpenSans-Regular";
  line-break: normal;
  margin-right: 2rem;
  color: #8b8a8a;
  cursor: pointer;
}

input.inputHoraColos[type="time"]::-webkit-calendar-picker-indicator {
  /* display: block; */
  /* background: url("../assets/img/web/reloj-de-pared\ 2.png") no-repeat; */
  background: none;
  width: 20px;
  height: 20px;
  color: #8b8a8a;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  /* display: block; */
  /* background: url("../assets/img/web/reloj-de-pared\ 2.png") no-repeat; */
  background: none;
  width: 20px;
  height: 20px;
  color: #8b8a8a;
}

/* Terminan Estilos para input Hora de la colonoscopía o estudio */

/* Inician Estilos para input "Fecha de la primera toma de Picoprep®️" */
input.inputFecPriToma[type="date"]:before {
  content: "Fecha de la primera toma de Picoprep®️: ";
  font-family: "OpenSans-Regular";
  line-break: normal;
  margin-right: 2rem;
  color: #8b8a8a;
}

input.inputFecPriToma[type="date"]::-webkit-calendar-picker-indicator {
  /* display: block; */
  background: url("../assets/img/web/herramienta-de-simbolo-de-interfaz-de-calendario\ 2.png")
    no-repeat;
  background: none;
  width: 20px;
  height: 20px;
  color: #8b8a8a;
}

input.inputFecPriToma[type="date"]::-webkit-calendar-picker-indicator:hover {
  /* display: block; */
  background: url("../assets/img/web/herramienta-de-simbolo-de-interfaz-de-calendario.png")
    no-repeat;
  background: none;
  width: 20px;
  height: 20px;
  color: #8b8a8a;
}

/* Terminan Estilos para input "Fecha de la primera toma de Picoprep®️" */

/* Inician Estilos para input "Hora de la primera toma de Picoprep®️" */
input.inputHoraPriToma[type="time"]:before {
  content: "Hora de la primera toma de Picoprep®️: ";
  font-family: "OpenSans-Regular";
  line-break: normal;
  margin-right: 2rem;
  color: #8b8a8a;
}

input.inputHoraPriToma[type="time"]::-webkit-calendar-picker-indicator {
  /* display: block; */
  background: url("../assets/img/web/reloj-de-pared\ 2.png") no-repeat;
  background: none;
  width: 20px;
  height: 20px;
  color: #8b8a8a;
}

input.inputHoraPriToma[type="time"]::-webkit-calendar-picker-indicator:hover {
  /* display: block; */
  background: url("../assets/img/web/reloj-de-pared.png") no-repeat;
  background: none;
  width: 20px;
  height: 20px;
  color: #8b8a8a;
}

/* Terminan Estilos para input "Hora de la primera toma de Picoprep®️" */

/* Inician Estilos para input "Fecha de la primera toma de Picoprep®️" */
input.inputFecSegToma[type="date"]:before {
  content: "Fecha de la segunda toma de Picoprep®️: ";
  font-family: "OpenSans-Regular";
  line-break: normal;
  margin-right: 2rem;
  color: #8b8a8a;
}

input.inputFecSegToma[type="date"]::-webkit-calendar-picker-indicator {
  /* display: block; */
  background: url("../assets/img/web/herramienta-de-simbolo-de-interfaz-de-calendario\ 2.png")
    no-repeat;
  background: none;
  width: 20px;
  height: 20px;
  color: #8b8a8a;
}

input.inputFecSegToma[type="date"]::-webkit-calendar-picker-indicator:hover {
  /* display: block; */
  background: url("../assets/img/web/herramienta-de-simbolo-de-interfaz-de-calendario.png")
    no-repeat;
  background: none;
  width: 20px;
  height: 20px;
  color: #8b8a8a;
}

/* Terminan Estilos para input "Fecha de la primera toma de Picoprep®️" */

/* Inician Estilos para input "Hora de la segunda toma de Picoprep®️" */
input.inputHoraSegToma[type="time"]:before {
  content: "Hora de la segunda toma de Picoprep®️: ";
  font-family: "OpenSans-Regular";
  line-break: normal;
  margin-right: 2rem;
  color: #8b8a8a;
}

input.inputHoraSegToma[type="time"]::-webkit-calendar-picker-indicator {
  /* display: block; */
  background: url("../assets/img/web/reloj-de-pared\ 2.png") no-repeat;
  background: none;
  width: 20px;
  height: 20px;
  color: #8b8a8a;
}

input.inputHoraSegToma[type="time"]::-webkit-calendar-picker-indicator:hover {
  /* display: block; */
  background: url("../assets/img/web/reloj-de-pared.png") no-repeat;
  width: 20px;
  height: 20px;
  color: #8b8a8a;
}

/* Terminan Estilos para input "Hora de la segunda toma de Picoprep®️" */

/* Inicia estilos para Plan de tomas e hidratacion */

.btnFlecha {
  background-image: url("../assets/img/mobile/flecha-hacia-abajo-para-navegar.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /*ancho*/
  width: 11px;
  /*altura*/
  height: 19px;
  /*  margin: 0 auto; */
  margin-top: 20px;
  margin-left: 20px;
  /* margin: 0 auto; */
  /* display: block;
    margin-left: auto;
    margin-right: auto; */
}

.contenedorMovil {
}

.fila {
  display: none;
}

.filaTabla {
  display: flex;
  flex-direction: row;
  /* margin: 0 auto; */
}

.tituloPlanToma {
  color: #ff9900;
  font-family: "OpenSans-Bold";
  font-size: 25px;
  text-align: left;
  /* display: inline-flex; */
}

/* escritorio web*/
/* .tituloPlanToma{
    color: #FF9900;
    font-family: 'OpenSans-Bold';
    font-size: 40px;
} */
.imgNaranjinPlan {
  width: 100%;
  height: 100vh;
  width: 135px;
  height: 158px;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.parrafoEstudioProgramado {
  font-family: "OpenSans-Bold";
  font-size: 12px;
  color: #707070;
}

.parrafoFechaEstudio {
  font-family: "OpenSans-Bold";
  font-size: 12px;
  color: #707070;
}

.parrafoFechaEstudio span {
  font-family: "OpenSans-Regular";
  font-size: 12px;
  color: #707070;
}

.parrafoHoraEstudio {
  font-family: "OpenSans-Bold";
  font-size: 12px;
  color: #707070;
}

.parrafoHoraEstudio span {
  font-family: "OpenSans-Regular";
  font-size: 12px;
  color: #707070;
}

.parrafoPrimerToma {
  font-family: "OpenSans-Bold";
  font-size: 12px;
  color: #707070;
}

.parrafoFechaPrimerToma {
  font-family: "OpenSans-Bold";
  font-size: 12px;
  color: #707070;
}

.parrafoFechaPrimerToma span {
  font-family: "OpenSans-Regular";
  font-size: 12px;
  color: #707070;
}

.parrafoHoraPrimerToma {
  font-family: "OpenSans-Bold";
  font-size: 12px;
  color: #707070;
}

.parrafoHoraPrimerToma span {
  font-family: "OpenSans-Regular";
  font-size: 12px;
  color: #707070;
}

.parrafoSegundaToma {
  font-family: "OpenSans-Bold";
  font-size: 12px;
  color: #707070;
}

.parrafoFechaSegundaToma {
  font-family: "OpenSans-Bold";
  font-size: 12px;
  color: #707070;
}

.parrafoFechaSegundaToma span {
  font-family: "OpenSans-Regular";
  font-size: 12px;
  color: #707070;
}

.parrafoHoraSegundaToma {
  font-family: "OpenSans-Bold";
  font-size: 12px;
  color: #707070;
}

.parrafoHoraSegundaToma span {
  font-family: "OpenSans-Regular";
  font-size: 12px;
  color: #707070;
}

.btnEditarPlan {
  background-image: url("../assets/img/web/editar\ \(2\).png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  width: 23px;
  height: 23px;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.btnEditarPlan:hover {
  background-image: url("../assets/img/web/editar\ \(3\).png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  width: 23px;
  height: 23px;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.btnCerrarModal {
  background-image: url("../assets/img/mobile/X.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 14px;
  height: 27px;
}

.tituloModal {
  color: #ff9900;
  font-family: "OpenSans-Bold";
  font-size: 25px;
  text-align: center;
}

.columnaUno {
  width: 40%;
}

.columnaDos {
  width: 60%;
}

.imgMediPicoprep {
  width: 100px;
  height: 100px;
  /* margin: 0 auto; */
  margin-top: 25px;
  /* width: 130px;
    height: 150px; */
}

.imgVasoAgua {
  width: 75px;
  height: 76px;
  /* margin: 0 auto; */
  margin-top: 25px;
  /* width: 130px;
    height: 150px; */
}

.btnDescargaPlan {
  font-family: "Segoe-UI-Semibold";
  font-size: 20px;
  width: 100%;
  /* width: 600px;
    width: 60%; */
  /* height: 50px; */
  color: #ffffff;
  border: none;
  background-color: #ff9900;
  text-decoration: none;
}

.btnDescargaPlan:hover {
  font-family: "Segoe-UI-Semibold";
  font-size: 20px;
  width: 100%;
  /* width: 600px;
    width: 60%; */
  /* height: 50px; */
  color: #ff9900;
  border: none;
  background-color: #ffffff;
  border: 1px solid #ff9900;
}

.btnVerReferenciaMedica {
  font-family: "Segoe-UI-Semibold";
  font-size: 20px;
  width: 100%;
  /* width: 600px;
    width: 60%; */
  /* height: 50px; */
  color: #ffffff;
  border: none;
  background-color: #ff9900;
  text-decoration: none;
}

.btnVerReferenciaMedica:hover {
  font-family: "Segoe-UI-Semibold";
  font-size: 20px;
  width: 100%;
  /* width: 600px;
    width: 60%; */
  /* height: 50px; */
  color: #ffffff;
  border: none;
  background-color: #ff9900;
  text-decoration: none;
}

/* Termina estilos para Plan de tomas e hidratacion */

/* Inician estilos para Modal boton Editar Plan de Tomas */
/* Inician Estilos label Fecha de estudio */
.labelModalEditarFechaEstu {
  font-family: "OpenSans-Regular";
  color: #515151;
  font-size: 16px;
}

/* Terminan Estilos label Fecha de estudio */
/* Inician Estilos label Fecha de estudio */
.labelModalEditarHoraColonos {
  font-family: "OpenSans-Regular";
  color: #515151;
  font-size: 16px;
}

/* Terminan Estilos label Fecha de estudio */

/* Inician Estilos para botón Guardar de Modal - Editar Plan*/
.btnGuardarModalPlan {
  font-family: "Segoe-UI-Semibold";
  font-size: 20px;
  width: 100%;
  height: 50px;
  color: #ffffff;
  border: none;
  background-color: #ff9900;
  text-decoration: none;
  /* margin-left: 90px;
    margin-right: 90px; */
}

.btnGuardarModalPlan:hover {
  font-family: "Segoe-UI-Semibold";
  font-size: 20px;
  width: 100%;
  height: 50px;
  color: #ff9900;
  border: none;
  background-color: #ffffff;
  border: 1px solid #ff9900;
  /* margin-left: 90px;
    margin-right: 90px; */
}

/* Termina Estilos para botón Guardar de Modal - Editar Plan*/

/* Inician Estilos para botón Guardar de Modal - Editar Plan*/
.btnCancelarModalPlan {
  font-family: "OpenSans-SemiBold";
  font-size: 20px;
  width: 100%;
  height: 50px;
  color: #ffffff;
  border: none;
  background-color: #1155cc;
  text-decoration: none;
  /* margin-left: 90px;
    margin-right: 90px; */
}

.btnCancelarModalPlan:hover {
  font-family: "OpenSans-SemiBold";
  font-size: 20px;
  width: 100%;
  height: 50px;
  color: #1155cc;
  border: none;
  background-color: #ffffff;
  border: 1px solid #1155cc;
  /* margin-left: 90px;
    margin-right: 90px; */
}

/* Termina Estilos para botón Guardar de Modal - Editar Plan*/
/* Termina estilos para Modal boton Editar Plan de Tomas */

/* Inician Estilos para Perfil*/

.btnGuardar {
  font-family: "Segoe-UI-Semibold";
  font-size: 20px;
  width: 100%;
  /* height: 50px; */
  color: #ffffff;
  border: none;
  background-color: #ff9900;
  text-decoration: none;
}

.btnGuardar:hover {
  font-family: "Segoe-UI-Semibold";
  font-size: 20px;
  width: 100%;
  /* height: 50px; */
  color: #ff9900;
  border: none;
  background-color: #ffffff;
  border: 1px solid #ff9900;
}

/**/

/*Estilos para modal Modficar*/

.contenidoDerecha {
  text-align: center;
  align-items: center;
  justify-content: center;
}

.modalHeaderModificar {
  border: none;
  margin-right: 30px;
  margin-top: 30px;
}

.btnCerrarModalModificar {
  background-image: url("../assets/img/mobile/x\(1\).png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 15px;
  height: 15px;
  border: none;
  /*     position:absolute;
    top:0;
    right:0;
    z-index: 3;
    padding:1.25rem 1rem; */
}

/* Inician Estilos para el parrafo de Modificar información */
.parrafoVaModificarInfor {
  font-family: "OpenSans-Regular";
  font-size: 20px;
  font-size: 18px;
  color: #616161;
}

/* Estilos para el parrafo de Modificar información */
/* Inician Estilos para el parrafo de ¿Estas seguro? */
.parrafoEstasSeguro {
  font-family: "OpenSans-Bold";
  font-size: 20px;
  font-size: 18px;
  /* line-height: 70px; */
  color: #616161;
  /* margin-bottom: 10px; */
}

/* Estilos para el parrafo de ¿Estas seguro? */
/**/
.btnAceptarModalModifica {
  font-family: "Segoe-UI-Semibold";
  font-size: 20px;
  width: 100%;
  height: 40px;
  color: #ffffff;
  border: none;
  background-color: #ff9900;
  text-decoration: none;
  margin-left: 30px;
  margin-right: 30px;
  /* margin: 90px auto; */
}

.btnAceptarModalModifica:hover {
  font-family: "Segoe-UI-Semibold";
  font-size: 20px;
  width: 100%;
  height: 40px;
  color: #ff9900;
  border: none;
  background-color: #ffffff;
  border: 1px solid #ff9900;
  margin-left: 30px;
  margin-right: 30px;
}

/**/

/**/
.btnCancelarModalModifica {
  font-family: "OpenSans-SemiBold";
  font-size: 20px;
  width: 100%;
  height: 40px;
  color: #ffffff;
  border: none;
  background-color: #1155cc;
  text-decoration: none;
  margin-left: 30px;
  margin-right: 30px;
}

.btnCancelarModalModifica:hover {
  font-family: "OpenSans-SemiBold";
  font-size: 20px;
  width: 100%;
  height: 40px;
  color: #1155cc;
  border: none;
  background-color: #ffffff;
  border: 1px solid #1155cc;
  margin-left: 30px;
  margin-right: 30px;
}

/**/

/* Termina Estilos para Perfil*/

/* Inician estilos para vista Peguntas frecuentes */
.colPreg {
  padding-top: 10px;
}

/* Inician estilos para Titulo preguntas frecuentes*/
.tituloPregFrecu {
  color: #ff9900;
  font-family: "OpenSans-Bold";
  font-size: 40px;
  text-align: left;
}

/* termina estilos para Titulo preguntas frecuentes*/

/* Inician estilos para parrafo Nos interesa saber */
.parrafoPregFrecInteresaSaber {
  font-family: "OpenSans-Regular";
  font-size: 20px;
  text-align: justify;
  /*  margin: 10px 10px 10px 10px; */
  /* padding: 10px 10px; */
}

/* Termina estilos para parrafo Nos interesa saber */

/* Inician Estilos para botón Guardar de vista Preguntas frecuentes*/
.btnGuardarPregFrec {
  font-family: "OpenSans-SemiBold";
  font-size: 20px;
  width: 100%;
  /* height: 50px; */
  color: #ffffff;
  border: none;
  background-color: #ff9900;
  text-decoration: none;
}

.btnGuardarPregFrec:hover {
  font-family: "OpenSans-SemiBold";
  font-size: 20px;
  width: 100%;
  /* height: 50px; */
  color: #ff9900;
  border: none;
  background-color: #ffffff;
  border: 1px solid #ff9900;
}

/* Termina Estilos para botón Guardar de vista Preguntas frecuentes */
/* Termina estilos para vista Peguntas frecuentes */

/* } */
@media screen and (max-width: 767px) {
  /** */
  .tituloPrincipal {
    color: #ff9900;
    font-family: "OpenSans-Bold";
    font-size: 28px;
    /*  font-size: 100%; */
  }

  .imgNaranjin {
    background-image: url("../assets/img/mobile/Naranjin.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 372px;
    height: 347px;
    width: 260px;
    height: 260px;
    /* margin-top: 50px; */
    margin-bottom: 0;
  }

  /*Estilos plam*/
  /* inicia estilos para ventana modal editar */
  .tituloModal {
    color: #ff9900;
    font-family: "OpenSans-Bold";
    font-size: 30px;
    text-align: center;
    /* fin de estilos para ventana modal editar */
  }

  .parrafoUno {
    margin-top: -30px;
    font-family: "OpenSans-Regular";
    font-size: 14px;
    color: #707070;
    text-align: left;
    text-align: justify;
  }

  .parrafoUno span {
    font-family: "OpenSans-Bold";
    font-size: 14px;
    color: #707070;
    text-align: left;
    text-align: justify;
  }

  .parrafoNuestra {
    font-family: "OpenSans-Regular";
    font-size: 14px;
    color: #707070;
    text-align: justify;
  }

  .parrafoNuestra span {
    font-family: "OpenSans-Bold";
    font-size: 14px;
    color: #707070;
    text-align: left;
    text-align: justify;
  }

  .parrafoGenera {
    font-family: "OpenSans-Regular";
    font-size: 14px;
    color: #707070;
    text-align: justify;
  }

  .parrafoGenera span {
    font-family: "OpenSans-Bold";
    font-size: 14px;
    color: #ff9900;
  }

  .parrafoCreastePlanAntes {
    font-family: "OpenSans-Bold";
    font-size: 14px;
    color: #707070;
  }

  .parrafoGeneraProgramacion {
    font-family: "Segoe-UI-Bold";
    font-size: 14px;
    color: #4e4e4e;
    text-align: center;
  }

  .parrafoCreaPlanToma {
    font-family: "Segoe-UI-Bold";
    font-size: 14px;
    color: #4e4e4e;
    text-align: center;
  }

  .columnaUno {
    width: 20%;
  }

  .columnaDos {
    width: 30%;
  }

  .card-title {
    font-family: "OpenSans-Bold";
    font-size: 15px;
    color: #707070;
  }

  .card-text {
    font-family: "OpenSans-Bold";
    font-size: 15px;
    color: #707070;
  }

  .card-text small.text-muted {
    font-family: "OpenSans-Bold";
    font-size: 15px;
    color: #707070;
  }

  .card {
    max-width: 640px;
  }

  /*Estilos plam*/
}

@media (min-width: 1200px) {
  .btnDudas {
    font-family: "Segoe-UI-Bold";
    font-size: 30px;
    /* height: 40px; */
    background-color: #1155cc;
    color: #ffffff;
    width: 700px;
    height: 60px;
  }

  .btnDudas span {
    font-family: "Segoe-UI-Bold";
    font-size: 30px;
    /* height: 40px; */
    background-color: #1155cc;
    color: #ffffff;
  }

  .columnaBtnDudas {
    /*  display: flex; */
    text-align: right;
  }

  .filaDosPermisos {
    padding-top: 150px;
  }

  .parrafoDevice {
    content: "aplicación movil";
  }

  /* Inician Estilo pára la vista Plan de tomas e hidrataciones */
  .btnFlecha {
    display: none;
  }

  /* .columnaUno{
        width: 10%;
    }
    .columnaDos{
        width: 30%;
    } */
  /* Termina Estilo pára la vista Plan de tomas e hidrataciones */
}

@media (min-width: 1400px) {
  .navbar-nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .navItemUno {
    width: 15%;
  }

  .navItemDos {
    width: 15%;
  }

  .navItemTres {
    width: 10%;
  }

  .navItemCuatro {
    width: 10%;
  }

  .navItemCinco {
    width: 10%;
  }

  .navItemSeis {
    width: 25%;
  }

  .vr {
    display: block;
  }

  /* .parrafoOculMovil {
        display: none;
      } */
  /* .parrafoDevice {
        content: "aplicación movil";
        color: black;
        display: block;
    } */

  .parrafoRecordaViaWhat {
    font-family: "OpenSans-Regular";
    color: #ff7700;
    font-size: 20px;
  }

  .parrafoRecordaViaWhat span {
    font-family: "OpenSans-Bold";
    color: #ff7700;
    font-size: 20px;
  }

  .textoSwitchAcepto {
    font-family: "OpenSans-SemiBold";
    color: #1155cc;
    font-size: 20px;
  }

  .parrafoCheckLeido {
    font-family: "OpenSans-Regular";
    color: #474747;
    font-size: 20px;
  }

  .labelEdad {
    /*podria quedar con esta medida en web*/
    font-size: 15px;
    /* font-size: 11px; */

    /* font-weight: bold; */
  }

  .parraffo {
    font-size: 15px;
    font-size: 13px;
    /*  margin-left: 20px; */
    /* margin-bottom: 20px; */
    /* margin: 20px; */
    /* padding: 10px; */
    /* gap: 10px;
        gap: 10px; */
    /* display: flex;
        align-items: baseline; */
  }

  .imgCreaNuevoPlan {
    position: relative;
    top: 4px;
  }

  .imgConsultaPlan {
    position: relative;
    top: 4px;
  }

  .btnDudass {
    background-image: url("../assets/img/web/Grupo\ 102.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 10vh;
    width: 523px;
    height: 50px;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;
    /* align-items: center;
        justify-content: center; */
  }

  .btnDudas {
    font-family: "Segoe-UI-Bold";
    font-size: 30px;
    /* height: 40px; */
    background-color: #1155cc;
    color: #ffffff;
    width: 700px;
    height: 60px;
  }

  .btnDudas span {
    font-family: "Segoe-UI-Bold";
    font-size: 30px;
    /* height: 40px; */
    background-color: #1155cc;
    color: #ffffff;
  }

  /* footer div.container.p-4 div.row div.col button {
        text-align: right;
        justify-content: flex-end;
    } */
  .columnaBtnDudas {
    /*  display: flex; */
    text-align: right;
  }

  /* Inician Estilo pára la vista Plan de tomas e hidrataciones */
  .contenedorMovil {
    display: none;
  }

  .fila {
    display: inline-flex;
  }

  .filaTabla {
    display: none;
  }

  .filaPlan {
    margin-left: 200px;
  }

  .filaPlanTabla {
    display: flex;
    /* flex-direction: column;  */
    justify-content: center;
    align-items: center;
  }

  .tituloPlanToma {
    color: #ff9900;
    font-family: "OpenSans-Bold";
    font-size: 40px;
    /*  text-align: left;
        text-align: center; */
    /* display: inline-flex; */
  }

  .imgNaranjinPlan {
    display: none;
  }

  .btnFlecha {
    display: none;
  }

  .columnaUno {
    width: 10%;
  }

  .columnaDos {
    width: 40%;
  }

  .card {
    max-width: 640px;
  }

  .parrafoEstudioProgramado {
    font-family: "OpenSans-Bold";
    font-size: 20px;
    color: #707070;
  }

  .parrafoFechaEstudio {
    font-family: "OpenSans-Bold";
    font-size: 20px;
    color: #707070;
  }

  .parrafoFechaEstudio span {
    font-family: "OpenSans-Regular";
    font-size: 20px;
    color: #707070;
  }

  .parrafoHoraEstudio {
    font-family: "OpenSans-Bold";
    font-size: 20px;
    color: #707070;
  }

  .parrafoHoraEstudio span {
    font-family: "OpenSans-Regular";
    font-size: 20px;
    color: #707070;
  }

  .parrafoPrimerToma {
    font-family: "OpenSans-Bold";
    font-size: 20px;
    color: #707070;
  }

  .parrafoFechaPrimerToma {
    font-family: "OpenSans-Bold";
    font-size: 20px;
    color: #707070;
  }

  .parrafoFechaPrimerToma span {
    font-family: "OpenSans-Regular";
    font-size: 20px;
    color: #707070;
  }

  .parrafoHoraPrimerToma {
    font-family: "OpenSans-Bold";
    font-size: 20px;
    color: #707070;
  }

  .parrafoHoraPrimerToma span {
    font-family: "OpenSans-Regular";
    font-size: 20px;
    color: #707070;
  }

  .parrafoSegundaToma {
    font-family: "OpenSans-Bold";
    font-size: 20px;
    color: #707070;
  }

  .parrafoFechaSegundaToma {
    font-family: "OpenSans-Bold";
    font-size: 20px;
    color: #707070;
  }

  .parrafoFechaSegundaToma span {
    font-family: "OpenSans-Regular";
    font-size: 20px;
    color: #707070;
  }

  .parrafoHoraSegundaToma {
    font-family: "OpenSans-Bold";
    font-size: 20px;
    color: #707070;
  }

  .parrafoHoraSegundaToma span {
    font-family: "OpenSans-Regular";
    font-size: 20px;
    color: #707070;
  }

  .btnEditarPlan {
    background-image: url("../assets/img/web/editar\ \(2\).png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    width: 23px;
    height: 23px;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .btnEditarPlan:hover {
    background-image: url("../assets/img/web/editar\ \(3\).png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    width: 23px;
    height: 23px;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  /* Termina Estilo pára la vista Plan de tomas e hidrataciones */
  /* Inician estilos para vista Peguntas frecuentes */
  /* Inician estilos para Titulo preguntas frecuentes*/
  .tituloPregFrecu {
    color: #ff9900;
    font-family: "OpenSans-Bold";
    font-size: 40px;
    /* display: flex;
    flex-direction: column; */
    margin-left: 220px;
    /* width: 100%; */
    /*  margin-right: 60px; */
    /* text-align: center; */
    /* margin-right: 400px; */
  }

  /* Inician estilos para Titulo preguntas frecuentes*/

  /* Inician estilos para parrafo Nos interesa saber */
  .parrafoPregFrecInteresaSaber {
    font-family: "OpenSans-Regular";
    font-size: 20px;
    text-align: justify;
    /*  margin: 10px 10px 10px 10px; */
    /* padding: 10px 10px; */
  }

  /* Termina estilos para parrafo Nos interesa saber */

  /* Inician Estilos para botón Guardar de vista Preguntas frecuentes*/
  .btnGuardarPregFrec {
    font-family: "OpenSans-SemiBold";
    font-size: 20px;
    width: 100%;
    /* height: 50px; */
    color: #ffffff;
    border: none;
    background-color: #ff9900;
    text-decoration: none;
  }

  .btnGuardarPregFrec:hover {
    font-family: "OpenSans-SemiBold";
    font-size: 20px;
    width: 100%;
    /* height: 50px; */
    color: #ff9900;
    border: none;
    background-color: #ffffff;
    border: 1px solid #ff9900;
  }

  /* Termina Estilos para botón Guardar de vista Preguntas frecuentes */
  /* Termina estilos para vista Peguntas frecuentes */
}

/**/
body .main .password-container .password {
  margin: 1rem 0;
  position: relative;
}

body .main .password-container .password input {
  /* width: calc(100% - (5px + 0.4rem)); */
  /* padding: 0.7rem; */
  /* border: 5px groove #c2c2c2; */
  /* border: 1px solid #c2c2c2; */
  /* border-radius: 5px; */
  font-family: "OpenSans-Regular";
  /* font-size: 16px; */
  color: #333;
}

body .main .password-container .password input:focus {
  outline: none;
}

body .main .password-container .password input::placeholder {
  color: rgba(0, 0, 0, 0.75);
}

body .main .password-container .password span {
  position: absolute;
  right: 20px;
  top: 30%;
  top: 25px;
  top: 20px;
  width: 24px;
  height: 24px;
  transform: translateY(-50%);
  cursor: pointer;
  background: url("/img/show.svg");
  background-repeat: no-repeat;
  /* font-size: 4px; */
}

/**/
/* Cierre seccion DIGITAL EXPERIENCES*/
@media screen and (max-height: 500px) {
}
</style>
