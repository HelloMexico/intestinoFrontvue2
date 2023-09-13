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
                        <button
                          class="btnInicia rounded collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne">
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
                                      gap: 14px;
                                      width: 100%;
                                      flex-direction: row-reverse;">

                                      <div class="spinner-border text-primary" role="status" v-if="showLoading"></div>

                                    <button
                                      type="submit"
                                      class="btnContinuar rounded">
                                      CONTINUAR
                                    </button>

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
                                    Seleccione un estado o provincia
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
                                    step="any"
                                    maxlength="6"
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
                                    v-model="recibirNotificaciones"
                                    id="flexSwitchCheckDefault"
                                    aria-checked=""
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
                                    data-bs-target="#exampleModal">
                                    aviso de privacidad
                                  </a>
                                  <!-- Button trigger modal -->
                                  <!-- Modal -->
                                  <div
                                    class="modal fade"
                                    id="exampleModal"
                                    tabindex="-1"
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <AvisoPrivacidad/>
                                  </div>
                                </label>
                              </div>
                              <br />
                              
                              <div class="contenidoCentrado">

                                <button
                                  type="submit"
                                  class="btnContinuar rounded">
                                  CONTINUAR
                                </button>

                                <!-- <div class="spinner-border text-primary" role="status" v-if="showLoading"></div> -->

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

    <div
      class="modal fade" 
      id="resultRequest" 
      tabindex="-1"
      aria-labelledby="example"
      aria-hidden="true">
          <CustomModal :message="'Usuario no econtrado. Verifique que su número celular y contraseñas sean correctas o esté registrado'"/>
    </div>

    <div
      class="modal fade" 
      id="activarNotificaciones"
      tabindex="-1"
      aria-labelledby="example"
      aria-hidden="true">

        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">

                <div class="modal-body" style="border: none;">
                <p class="parrafoEstasSeguro text-center">
                  Las alertas solo durarán el tiempo que dure su proceso de limpieza intestinal, por lo que le recomendamos activarlas para poder acompañarle.
                </p>
                </div>
                <div class="modal-footer" style="border: none;">
                    <div class="container text-center">
                      <div class="row">
                            <div class="col-md-4 pb-4">
                                <button 
                                  @click="postUserNew( false )"
                                  type="button" 
                                  class="rounded btnGuardarModalPlan"
                                  data-bs-dismiss="modal"> Continuar sin activar </button>
                            </div>
                            <div class="col-md-4 offset-md-4">
                                <button
                                @click="postUserNew( true )"
                                  type="button" 
                                  class="rounded btnCancelarModalPlan"
                                  data-bs-dismiss="modal"> Activar notificaciones </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div class="row filaDosPermisos">
          <div class="col text-center columnaParrafos">
            <p class="parrafoIntestinoAño">Intestino Limpio 2023.</p>
              <p class="parrafoNumeroReg">No. de aviso: 2315052002C00837</p>
              <p class="parrafoNumeroReg">No. Reg. Mex: 012M2013 SSA</p>
          </div>
      </div>

  </div>

  
</template>
  
<script>
import axios from "axios";
import AvisoPrivacidad from "../components/modals/AvisoPrivacidad.vue";
import CustomModal from "../components/modals/ShowCustomModal.vue";
import BaseUrl from "./apis/base_url";

export default {
  name : "Login",
  components: {
    AvisoPrivacidad,
    CustomModal
  },
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
      provinciasFormated: [],
      seleccionaOpcion: null,
      formularioValidado: false,
      showPassword: false,
      recibirNotificaciones: false,
      inputTypeIcon: "password",

      baseUrl:{},
      
      showLoading: false,

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
  computed: {
      bloquear() {
          return this.formularioIniciar.telefono.trim() === "" ? true : false
      }
  },
  methods: {
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
        this.valida = false;
      } else if (!/^([0-9])*$/.test(this.telefono)) {
        this.errors.telefono = "El número celular solo debe contener números";
        this.valida = false;
      } else if (this.telefono.length < 7) {
        this.errors.telefono = "El número celular debe tener mínimo 7 números";
        this.valida = false;
      } else if (this.telefono.length > 10) {
        this.errors.telefono =
          "El número celular no debe exceder de 10 números";
        this.valida = false;
      } else {
        delete this.errors["telefono"];
      }
    },
    validateClaveAcceso() {
      this.errors.claveAcceso = "";

      if (!this.claveAcceso) {
        this.errors.claveAcceso = "La clave de acceso es obligatoria";
        this.valida = false;
      } else if (this.claveAcceso.length < 4) {
        this.errors.claveAcceso =
          "La clave de acceso debe tener por lo menos 4 caracteres";
        this.valida = false;
      } else if (this.claveAcceso.length > 10) {
        this.errors.claveAcceso =
          "La clave de acceso no debe exceder de 10 caracteres";
        this.valida = false;
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
    async submitForm() {

      this.errors = {};

      // Comprobar si hay errores
      this.validateTelefono();
      this.validateClaveAcceso();
      
      if ( Object.keys(this.errors).length > 0 ) return;

      this.showLoading = true;
      // const response = await axios.post('https://intestinolimpio.onrender.com/api/v1/user/login', {

        try {

          const response = await axios.post(this.baseUrl.baseUrl + '/user/login', {
            phone    : this.telefono, 
            password : this.claveAcceso
          });

          if( response.data.status == 400 && response.data.data.rows.length == 0 ) {
            this.showModal();
            this.showLoading = false;
          }

          if( response?.data.status == 200 && response?.data.data.rows.length > 0 ) {

            localStorage.setItem('userId', response?.data.data.rows[0].id );
            localStorage.setItem('peso', response?.data.data.rows[0].peso );
            localStorage.setItem('phone', this.telefono );

            if( response?.data.prescription.status == 200 && response?.data?.prescription?.data ) {
              localStorage.setItem('id_prescription', response?.data?.prescription?.data?.id );
            }

            this.showLoading = false;
            this.$router.push("/consultar");
          }
          
        } catch (error) {
          this.showModal();
          this.showLoading = false;
        }

    },
    showModal() {
      $('#resultRequest').modal('show');
    },
    validarPaisLada() {
      let valida = true;
      // Validar los campos del formulario
      this.errors.selectedCountry = "";
      this.errors.selectedLada = "";
      // Validar que el campo pais
      if (!this.selectedCountry) {
        this.errors.selectedCountry = "El país es obligatorio";
        this.valida = false;
      } else {
        delete this.errors["selectedCountry"];
      }
      // Validar los campos del formulario
      this.errors.selectedLada = "";
      // Validar que el campo lada
      if (!this.selectedLada) {
        this.errors.selectedLada = "La lada es obligatoria";
        this.valida = false;
      } else {
        delete this.errors["selectedLada"];
      }
    },
    validarTelefonoCelular() {
      let valida = true;
      // Validar los campos del formulario
      this.errors.telefonoCelular = "";
      this.telefonoCelular = this.telefonoCelular.replace(/[^0-9]/g, "");

      if (!this.telefonoCelular) {
        this.errors.telefonoCelular = "El teléfono celular es obligatorio";
        this.valida = false;
      } else if (isNaN(this.telefonoCelular)) {
        this.errors.telefonoCelular =
          "El teléfono celular solo debe contener números";
        this.valida = false;
      } else if (this.telefonoCelular.length < 7) {
        this.errors.telefonoCelular =
          "El teléfono celular no debe ser menor a 7 números";
        this.valida = false;
      } else if (this.telefonoCelular.length > 10) {
        this.errors.telefonoCelular =
          "El teléfono celular no debe exceder 10 números";
        this.valida = false;
      } else {
        delete this.errors["telefonoCelular"];
      }
      /* this.validarPais();
            this.formularioValidado = this.validarEdad && validarPeso; */
    },
    validarEstado() {

      this.errors.estado = "";

      if (!this.estado) {
        this.errors.estado = "El estado es obligatorio";
        this.valida = false;
      } else {

        delete this.errors["estado"];

        if( this.selectedCountry === "Mexico" ) {
          this.getMunicipios();
          return;
        }

        if( this.selectedCountry === "Costa Rica" ) {
          this.getCantones();
          return;
        }
      }
    },
    getMunicipios() {

      // axios.post("https://intestinolimpio.onrender.com/api/v1/data/municipios", {
      axios.post(this.baseUrl.baseUrl + "/data/municipios", {
        estado: this.estado,
      })
      .then((response) => {
        this.optionsCiudad = [];
        this.optionsCiudad = response.data.data.map((municipio) => ({
          text  : municipio,
          value : municipio,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
    },
    getCantones() {

      const index = this.provinciasFormated.find( p => p.nombre == this.estado ).clave;
      
      // axios.post("https://intestinolimpio.onrender.com/api/v1/data/canton", {
      axios.post(this.baseUrl.baseUrl + "/data/canton", {
        provincia: index,
      })
      .then((response) => {
        this.optionsCiudad = [];
        this.optionsCiudad = Object.values(response.data.data).map((canton) => ({
          text  : canton,
          value : canton,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
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
        this.valida = false;
      } /* else if (!/^[a-zA-Z]+$/.test(this.ciudad)) {
                this.errors.ciudad = 'El nombre del médico tratante solo debe contener solo letras';
                this.valida = false;
            } */ else if (this.ciudad.length > 80) {
        this.errors.ciudad = "La ciudad debe tener máximo 80 caracteres";
        this.valida = false;
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
        this.valida = false;
      } else if (this.edad <= 0) {
        this.errors.edad = "La edad debe ser un número positivo";
        this.valida = false;
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
        this.valida = false;
      } else if (this.peso <= 0) {
        this.errors.peso = "El peso debe ser un número positivo";
        this.valida = false;
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
        this.valida = false;
        /* else if (!/^([0-9])*$/.test(this.telefono)) { */
      } /* else if (/^[ a-zA-Z]+$/.test(this.nomMedTrat)) {
                this.errors.nomMedTrat = 'El nombre del médico tratante solo debe contener solo letras';
                this.valida = false;
            } */ /* else if (this.nomMedTrat.length < 50) {
                this.errors.nomMedTraT =
                    "El nombre del médico tratante debe tener al menos 50 caracteres";
            } */ else if (this.nomMedTrat.length > 80) {
        this.errors.nomMedTrat =
          "El nombre del médico tratante debe tener máximo 80 caracteres";
        this.valida = false;
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
        this.valida = false;
      } /* else if (this.apeMedTrat.length < 50) {
                this.errors.apeMedTrat =
                    "El apellido del médico tratante debe tener al menos 50 caracteres";
                this.valida = false;
            } */ else if (this.apeMedTrat.length > 80) {
        this.errors.apeMedTrat =
          "El apellido del médico tratante debe tener máximo 80 caracteres";
        this.valida = false;
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
        this.valida = false;
      } else if (this.claveAccesos.length < 4) {
        this.errors.claveAccesos =
          "La clave de acceso debe tener por lo menos 4 caracteres";
        this.valida = false;
      } else if (this.claveAccesos.length > 10) {
        this.errors.claveAccesos =
          "La clave de acceso no debe exceder de 10 caracteres";
        this.valida = false;
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
        this.valida = false;
      } else if (this.confClaveAccesos !== this.claveAccesos) {
        this.errors.confClaveAccesos =
          "La confirmación de la contraseña no coincide con la contraseña";
        this.valida = false;
      } else {
        delete this.errors["confClaveAccesos"];
      }
    },
    // Funcion pata actualizar la lada dependiendo de país seleccionado
    updateLada() {
      let valida = true;
      if (this.selectedCountry === "Mexico") {
        this.selectedLada = "+52";
        this.valida = false;
        this.getEstadoMexico();
      } else if (this.selectedCountry === "Costa Rica") {
        this.selectedLada = "+506";
        this.valida = false;
        this.getProvinciaCostaRica();
      } else {
        delete this.errors["selectedCountry"];
      }
    },
    getEstadoMexico() {
      // axios.get("https://intestinolimpio.onrender.com/api/v1/data/estados").then((response) => {
      axios.get( this.baseUrl.baseUrl +  "/data/estados" ).then((response) => {

        this.options = [];
        this.options = response.data.data.map((estado) => ({
          text  : estado.nombre,
          value : estado.clave,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
    },
    getProvinciaCostaRica() {
      // axios.get("https://intestinolimpio.onrender.com/api/v1/data/provincia").then((response) => {
      axios.get( this.baseUrl.baseUrl + "/data/provincia" ).then((response) => {

        this.provinciasFormated = [];

        Object.values(response.data.data).map( (name, index) => {
          this.provinciasFormated.push({
            clave : Object.keys(response.data.data)[index],
            nombre: name
          });
        });
        
        this.options = [];

        this.options = this.provinciasFormated.map((provincia) => ({
          text  : provincia.nombre,
          value : provincia.clave
        }));

      })
      .catch((error) => {
        console.log(error);
      });
    },
    async submitFormCrearPlan() {

      this.errors = {};

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

      
      if (Object.keys(this.errors).length == 0) {

        if( !this.recibirNotificaciones ) {
          $('#activarNotificaciones').modal('show');
          return;
        };

        this.postUserNew( true );
      }
      
    },
    async postUserNew( activarNotificaciones ) {

      this.showLoading = true;

      const data = {
        country         : this.selectedCountry,
        lada            : this.selectedLada,
        telefono        : this.telefonoCelular,
        estado          : this.estado,
        ciudad          : this.ciudad,
        edad            : this.edad,
        peso            : this.peso,
        nombre_medico   : this.nomMedTrat,
        apellido_medico : this.apeMedTrat,
        pass            : this.claveAccesos,
        recordatorio    : activarNotificaciones
      };

      // const res = await axios.post("https://intestinolimpio.onrender.com/api/v1/user", data);
      const res = await axios.post( this.baseUrl.baseUrl + "/user", data);
  
        if( res.data.status == 200 ) {
          localStorage.setItem('userId', res.data.data.id_user );
          localStorage.setItem('peso', this.peso );
          localStorage.setItem('phone', this.telefonoCelular );
          this.$router.push("/crear");

          this.showLoading = false;
        }
    }
  },
  mounted() {
    this.baseUrl = new BaseUrl();
  }
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
  display: flex;
  gap: 14px;
  width: 100%;
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
  padding-top: 45%;
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
    margin-top: 10px;
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

</style>
