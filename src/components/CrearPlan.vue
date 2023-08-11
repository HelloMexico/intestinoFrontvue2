<template>
  <!-- <h1 class="text-center">Aqui se esta usando el componente de Crear plan</h1> -->
  <div class="container">
    <br /><br />
    <div class="row align-items-end">
      <div class="col">
        <!-- <h1 class="tituloPrincipal text-end">Crear nuevo plan de tomas</h1> -->
      </div>
      <div class="col-xl-6 col-sm-6 col-md-6">
        <h1 class="tituloPrincipal text-center">Crear nuevo plan de tomas</h1>
      </div>
    </div>
    <br />
    <div class="row">
      <!-- <form v-on:submit="validarHora1">
        <label>Hora ingresada:</label>
        <input type="time" name="hora" v-model="hora" />
        <input type="submit" value="Enviar" />
      </form> -->
      <!-- <input type="time" id="time" name="time" v-model="time" @blur="validateTime"> -->
      <form name="formulario" id="formulario" v-on:submit="validarHora">
      <!-- <form name="formulario" id="formulario" v-on:submit="enviarFormCrearPlan"> -->
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-sm-6 col-md-6 text-center">
              <img src="../assets/img/web/Enmascarar grupo 2.png" alt="" class="img-fluid imgNaranjin" />
            </div>
            <div class="col-xl-6 col-sm-6 col-md-6">
              <div class="container" style="margin: 0; padding: 0;">
                <div class="row">
                  <div class="col mb-3">
                    <p>
                      Por favor coloque la fecha y hora de las tomas indicadas
                      por tu médico.
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col mb-3">
                    <div class="input-group">
                      <input type="date" class="form-control inputFechaEstudioCrear" v-model="fechaEstudioColonos" />
                    </div>

                    <span class="error" style="color: red" v-if="errors2.fechaEstudioColonos">{{errors2.fechaEstudioColonos }}</span>

                  </div>
                </div>
                <div class="row">
                  <div class="col mb-3">
                    <!-- <input type="time" class="form-control" name="" id="emailInput"
                      placeholder="Hora de la colonoscopía o estudio"> -->
                    <div class="input-group">
                      <input type="time" class="form-control inputHoraColos" v-model="horaColonoscopia" />
                    </div>
                    <span class="error" style="color: red" v-if="errors2.horaColonoscopia">{{ errors2.horaColonoscopia }}</span>
                    <!--  --><!-- <p>Hora ingresada colonoscopia: {{ horaIngresada }}</p> -->
                    <!-- <p>Hora actual: {{ this.horaActual }}</p> -->
                  </div>
                </div>
                <div class="row">
                  <div class="col mb-3">
                    <!-- <input type="date" class="form-control inputFecPriToma" name="" id="emailInput" placeholder=""> -->
                    <div class="input-group">
                      <input type="date" class="form-control inputFecPriToma" v-model="fechaPrimerToma" />
                      <!-- <span class="input-group-text" id="basic-addon1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-calendar" viewBox="0 0 16 16">
                          <path
                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z">
                          </path>
                        </svg>
                      </span> -->
                    </div>
                    <span class="error" style="color: red" v-if="errors2.fechaPrimerToma">{{ errors2.fechaPrimerToma
                    }}</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col mb-3">
                    <!--  <input type="time" class="form-control inputHoraPriToma" name="" id="emailInput"
                      placeholder="Hora de la primera toma de Picoprep®️"> -->
                    <div class="input-group">
                      <input type="time" class="form-control inputHoraPriToma" v-model="horaPrimerToma" />
                      <!-- <span class="input-group-text" id="basic-addon1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-alarm" viewBox="0 0 16 16">
                          <path
                            d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                          <path
                            d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                        </svg>
                      </span> -->
                    </div>
                    <span class="error" style="color: red" v-if="errors2.horaPrimerToma">{{ errors2.horaPrimerToma
                    }}</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col mb-3">
                    <!-- <input type="date" class="form-control inputFecSegToma" name="" id="emailInput"
                      placeholder="Fecha de la segunda toma de Picoprep®️"> -->
                    <div class="input-group">
                      <input type="date" class="form-control inputFecSegToma" v-model="fechaSegundaToma" />
                      <!-- <span class="input-group-text" id="basic-addon1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-calendar" viewBox="0 0 16 16">
                          <path
                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z">
                          </path>
                        </svg>
                      </span> -->
                    </div>
                    <span class="error" style="color: red" v-if="errors2.fechaSegundaToma">{{ errors2.fechaSegundaToma }}</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col mb-3">
                    <!-- <input type="time" class="form-control inputHoraSegToma" name="" id="emailInput"
                      placeholder="Hora de la segunda toma de Picoprep®️"> -->
                    <div class="input-group">
                      <input type="time" class="form-control inputHoraSegToma" v-model="horaSegundaToma" />
                      <!-- <span class="input-group-text" id="basic-addon1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                          class="bi bi-alarm" viewBox="0 0 16 16">
                          <path
                            d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                          <path
                            d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                        </svg>
                      </span> -->
                    </div>
                    <span class="error" style="color: red" v-if="errors2.horaSegundaToma">{{ errors2.horaSegundaToma }}</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col mb-3">
                    <div class="contenidoCentrado">
                      <!-- <a type="submit" class="btnCrearPlan rounded" href="">CREAR PLAN DE TOMAS</a> -->
                      <!-- <input class="btnCrearPlan  rounded" value="CREAR PLAN DE TOMAS"> -->
                      <button class="btnCrearPlan rounded">
                        CREAR PLAN DE TOMAS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div
        class="modal fade" 
        id="resultRequest" 
        tabindex="-1"
        aria-labelledby="exampleModalLabelQuiero" 
        aria-hidden="true">
          <CustomModal :message="'Se creó el plan de tomas correctamente'"/>
      </div>

      <div
        class="modal fade" 
        id="errorRequest"
        tabindex="-1"
        aria-labelledby="exampleModalLabelQuiero" 
        aria-hidden="true">

        <CustomModal :message="errorMessage"/>
      </div>

    </div>
    <br /><br />
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
import CustomModal from "../components/modals/ShowCustomModal.vue";

export default {
  name: "CrearPlan",
  props: {
    msg: String,
  },
  components: {
    CustomModal
  },
  data() {
    return {
      fecha1: "",
      fecha2: "",
      hora1: "",
      hora2: "",
      errors2: {},
      errorMessage:'',

      /* fechaActual: "", */
      fechaEstudioColonos: "",
      horaColonoscopia: "",
      fechaPrimerToma: "",
      horaPrimerToma: "",
      fechaSegundaToma: "",
      horaSegundaToma: "",

      date: "",

      hora: "", // la hora ingresada en el input
      horaActual: "", // la hora actual obtenida con moment.js
      fechaActual: "",

      time: ''
    };
  },
  methods: {
    validateTime() {
      var now = moment();
      var inputTime = moment(this.time, 'HH:mm');

      if (inputTime.isBefore(now)) {
        alert('La hora seleccionada es anterior a la hora actual.');
        this.time = '';
      }
    },
    validarHora: function (event) {

      // Aquí irá el código para validar la hora ingresada y la hora actual
      this.errors2 = {};
      event.preventDefault();
      let validForm = false;
      const horaIngresada = this.hora ? moment(this.hora, "HH:mm") : '';
      const horaActual = this.horaActual ? moment(this.horaActual, "HH:mm") : '';

      if (!this.fechaEstudioColonos) {
        this.errors2.fechaEstudioColonos = "La fecha de la colonoscopia es obligatoria";
        return;
      } else {
        delete this.errors2['fechaEstudioColonos'];
      }

      if (this.horaColonoscopia === '') {
        this.errors2.this.horaColonoscopia = "La hora de la colonoscopia es obligatoria";
        return;
      }
      else {
        delete this.errors2['this.horaColonoscopia'];
      }

      if (!this.fechaPrimerToma) {
        this.errors2.fechaPrimerToma = "La fecha de la primer toma es obligatoria";
        return;
      } else if (!moment(this.fechaPrimerToma, "YYYY-MM-DD", true).isValid()) {
        this.errors2.fechaPrimerToma = "La fecha de la primer toma no es válida";
        return;
      }
      else {
        delete this.errors2['fechaPrimerToma'];
      }

      if (!this.fechaSegundaToma) {
        this.errors2.fechaSegundaToma = "La fecha de la segunda toma es obligatoria";
        return;
      } else if (!moment(this.fechaSegundaToma, "YYYY-MM-DD", true).isValid()) {
        this.errors2.fechaSegundaToma = "La fecha de la segunda toma no es válida";
        return;
      }
      else {
        delete this.errors2['fechaSegundaToma'];
      }

      if (!this.horaPrimerToma) {
        this.errors2.horaPrimerToma = "La hora de la primer toma es obligatoria";
        return;
      } else if (!moment(this.horaPrimerToma, "HH:mm", true).isValid() ) {
        this.errors2.horaPrimerToma = "La hora de la primer toma no es válida";
        return;
      }
      else {
        delete this.errors2['horaPrimerToma'];
      }

      // Validar que el campo hora dos no esté vacío y sea una hora válida
      if (!this.horaSegundaToma) {
        this.errors2.horaSegundaToma = "La hora de la segunda toma es obligatoria";
        return;
      } else if (!moment(this.horaSegundaToma, "HH:mm", true).isValid()) {
        res.data.horaSegundaToma = "La hora de la segunda toma no es válida";
        return;
      }
      else {
        delete this.errors2['horaSegundaToma'];
      }

      const id_prescription = localStorage.getItem( 'id_prescription' );

      if( id_prescription != undefined ) {
        this.updatePlanDeTomas();
        return;
      }

      this.crearPlanDeTomas();      
    },
    showModal() {
      $('#resultRequest').modal('show');
    },
    showModalError() {
      $('#errorRequest').modal('show');
    },
    validateDate() {
      const ahora = moment();
      const seleccionFecha = moment(this.date);
      if (seleccionFecha.isBefore(ahora)) {
        alert("La fecha debe ser posterior a la fecha y hora actual.");
      }
    },
    submitFormCrearNuevoPlan() {
      // Validar los campos del segundo formulario
      this.errors2 = {};
      let valid2 = true;
      const fechaActual = moment().format("L");
      // moment().format('LTS');  // 4:43:55 PM
      /* const horaActual  = moment().format('LTS'); */
      // moment().format('LT');   // 4:44 PM
      const horaActual = moment().format("LT");
      const horaFormateada = Date.parse(horaActual);
      /* const fechaPrimerToma = this.fechaPrimerToma; */
      console.log(fechaActual);
      console.log(horaActual);
      console.log(horaFormateada);
      /* console.log(this.fechaEstudioColonos); */

      //Valida que el campo fecha colonoscopia no este vació y sea una fechs
      if (!this.fechaEstudioColonos) {
        this.errors2.fechaEstudioColonos =
          "La fecha de la colonoscopia es obligatoria";
        valid2 = false;
      } else if (moment(this.fechaEstudioColonos).isAfter(fechaActual)) {
        this.errors2.fechaEstudioColonos =
          "La fecha de la colonoscopia debe ser posterior ala fecha actual y hora actual";
        valid2 = false;
      }

      // Valida que el campo hora de colonoscopia no este vacia y sea una hora valida
      if (!this.horaColonoscopia) {
        this.errors2.horaColonoscopia =
          "La hora de la colonoscopia es obligatoria";
        valid2 = false;
      } else if (
        moment(this.horaColonoscopia, "HH:mm").isAfter(horaActual, "HH:mm")
      ) {
        this.errors2.horaColonoscopia =
          "La hora de la colonoscopia debe ser posterior ala fecha actual y hora actual";
        valid2 = false;
      }

      // Validar que el campo fecha de la primer toma no esté vacío y sea una fecha válida
      if (!this.fechaPrimerToma) {
        this.errors2.fechaPrimerToma =
          "La fecha de la primer toma es obligatoria";
      } else if (!moment(this.fechaPrimerToma, "YYYY-MM-DD", true).isValid()) {
        this.errors2.fechaPrimerToma =
          "La fecha de la primer toma no es válida";
      } else if (
        moment(this.fechaEstudioColonos).isBefore(this.fechaPrimerToma)
      ) {
        this.errors2.fechaPrimerToma =
          "La fecha de la primer toma debe ser antes a la fecha de la colonoscopia";
      } /* else if (moment(fechaActual).isAfter(this.fechaPrimerToma)) {
                this.errors2.fechaPrimerToma = "La fecha de la primer toma debe ser posterior a la fecha y hora actual";
            } */

      // Validar que el campo fecha de la segunda toma no esté vacío y sea una fecha válida
      if (!this.fechaSegundaToma) {
        this.errors2.fechaSegundaToma =
          "La fecha de la segunda toma es obligatoria";
        valid2 = false;
      } else if (!moment(this.fechaSegundaToma, "YYYY-MM-DD", true).isValid()) {
        this.errors2.fechaSegundaToma =
          "La fecha de la segunda toma no es válida";
        valid2 = false;
      } else if (moment(this.fechaPrimerToma).isBefore(this.fechaSegundaToma)) {
        this.errors2.fechaSegundaToma =
          "La fecha de la segunda toma  debe ser antes a la fecha de la primer toma";
      }

      // Validar que el campo fecha dos sea posterior al campo fecha uno
      // Usando el método isAfter de moment.js para comparar las fechas
      // https://momentjs.com/docs/#/query/is-after/
      else if (moment(this.fechaSegundaToma).isAfter(this.fechaPrimerToma)) {
        this.errors2.fechaSegundaToma =
          "La fecha de la segunda toma debe ser posterior a la fecha de la primer toma";
        valid2 = false;
      }
      /* else if (moment(this.fechaPrimerToma).isBefore(this.fechaEstudioColonos)) {
                this.errors2.fechaSegundaToma =
                    "La fecha de la segunda toma debe ser antes a fecha estudio y hora colonoscopia";
                valid2 = false;
            } */
      // Validar que el campo hora uno no esté vacío y sea una hora válida
      if (!this.horaPrimerToma) {
        this.errors2.horaPrimerToma =
          "La hora de la primer toma es obligatoria";
        valid2 = false;
      } else if (!moment(this.horaPrimerToma, "HH:mm", true).isValid()) {
        this.errors2.horaPrimerToma = "La hora de la primer toma no es válida";
        valid2 = false;
      } else if (
        moment(!this.horaColonoscopia, "HH:mm").isBefore(
          this.horaPrimerToma,
          "HH:mm"
        )
      ) {
        this.errors2.horaSegundaToma =
          "La hora de la primer toma debe ser posterior a la hora colonoscopia";
        valid2 = false;
      }

      // Validar que el campo hora dos no esté vacío y sea una hora válida
      if (!this.horaSegundaToma) {
        this.errors2.horaSegundaToma =
          "La hora de la segunda toma es obligatoria";
        valid2 = false;
      } else if (!moment(this.horaSegundaToma, "HH:mm", true).isValid()) {
        this.errors2.horaSegundaToma =
          "La hora de la segunda toma no es válida";
        valid2 = false;
      }

      // Validar que el campo hora segunda sea posterior al campo hora uno
      // Usando el método isAfter de moment.js para comparar las horas
      // https://momentjs.com/docs/#/query/is-after/
      /* else if (moment(this.horaSegundaToma, "HH:mm").isAfter(this.horaPrimerToma, "HH:mm")) {
                this.errors2.horaSegundaToma =
                    "hora de la segunda toma debe ser posterior a la hora de la primer toma";
                valid2 = false;
            } */
      // Validar que el campo hora segunda toma sea antesr al campo hora colonoscopia
      // Usando el método isAfter de moment.js para comparar las horas
      // https://momentjs.com/docs/#/query/is-before/
      /* else if (moment(this.horaSegundaToma, "HH:mm").isBefore(this.horaColonoscopia, "HH:mm")) {
                this.errors2.horaSegundaToma =
                    "La hora de la segunda toma debe ser antes a la hora estudio colonoscopia";
                valid2 = false;
            } */
      else if (
        moment(this.horaPrimerToma, "HH:mm").isAfter(
          this.horaSegundaToma,
          "HH:mm"
        )
      ) {
        this.errors2.horaSegundaToma =
          "La hora dos debe ser posterior a la hora uno";
        valid2 = false;
      }
      // Si todos los campos son válidos, enviar el formulario
      if (valid2) {
        alert("Los datoa del formulario se enviaron correctamente");
        // Aquí puedes hacer lo que quieras con los datos del formulario, como enviarlos a una base de datos o a una API
      }
    },
    submitForm2() {
      // Validar los campos del segundo formulario
      this.errors2 = {};
      let valid2 = true;

      // Validar que el campo fecha uno no esté vacío y sea una fecha válida
      if (!this.fecha1) {
        this.errors2.fecha1 = "La fecha uno es obligatoria";
        valid2 = false;
      } else if (!moment(this.fecha1, "YYYY-MM-DD", true).isValid()) {
        this.errors2.fecha1 = "La fecha uno no es válida";
        valid2 = false;
      }

      // Validar que el campo fecha dos no esté vacío y sea una fecha válida
      if (!this.fecha2) {
        this.errors2.fecha2 = "La fecha dos es obligatoria";
        valid2 = false;
      } else if (!moment(this.fecha2, "YYYY-MM-DD", true).isValid()) {
        this.errors2.fecha2 = "La fecha dos no es válida";
        valid2 = false;
      }

      // Validar que el campo fecha dos sea posterior al campo fecha uno
      // Usando el método isAfter de moment.js para comparar las fechas
      // https://momentjs.com/docs/#/query/is-after/
      else if (moment(this.fecha1).isAfter(this.fecha2)) {
        this.errors2.fecha2 = "La fecha dos debe ser posterior a la fecha uno";
        valid2 = false;
      }

      // Validar que el campo hora uno no esté vacío y sea una hora válida
      if (!this.hora1) {
        this.errors2.hora1 = "La hora uno es obligatoria";
        valid2 = false;
      } else if (!moment(this.hora1, "HH:mm", true).isValid()) {
        this.errors2.hora1 = "La hora uno no es válida";
        valid2 = false;
      }

      // Validar que el campo hora dos no esté vacío y sea una hora válida
      if (!this.hora2) {
        this.errors2.hora2 = "La hora dos es obligatoria";
        valid2 = false;
      } else if (!moment(this.hora2, "HH:mm", true).isValid()) {
        this.errors2.hora2 = "La hora dos no es válida";
        valid2 = false;
      }

      // Validar que el campo hora dos sea posterior al campo hora uno
      // Usando el método isAfter de moment.js para comparar las horas
      // https://momentjs.com/docs/#/query/is-after/
      else if (moment(this.hora1, "HH:mm").isAfter(this.hora2, "HH:mm")) {
        this.errors2.hora2 = "La hora dos debe ser posterior a la hora uno";
        valid2 = false;
      }

      // Si todos los campos son válidos, enviar el formulario
      if (valid2) {
        alert("Los datoa del formulario se enviaron correctamente");
        // Aquí puedes hacer lo que quieras con los datos del formulario, como enviarlos a una base de datos o a una API
      }
    },
    validarfechaEstudio(){
      if (!this.fechaEstudioColonos) {
        this.errors2.fechaEstudioColonos =
          "La fecha de la colonoscopia es obligatoria";
        valida = false;
      } /* else if (!moment(this.fechaEstudioColonos).isSameOrAfter(fechaActual)) {
        this.errors2.fechaEstudioColonos =
          "La fecha de la colonoscopia debe ser posterior ala fecha actual y hora actual";
          valida = false;
      } */
      else {
        delete this.errors2['fechaEstudioColonos'];
        /* this.errors2.horaIngresada = "La hora es obligatoria"; */
      }
    },
    validarhoraColonos(){
      const horaIngresada = this.hora ? moment(this.hora, "HH:mm") : '';
      if (horaIngresada === '') {
        this.errors2.horaIngresada = "La hora de la colonoscopia es obligatoria";
        valida = false;

      } /* else if (horaIngresada.isBefore(horaActual, 'hour')) {
        this.errors2.horaIngresada = "La hora de la colonoscopia debe ser posterior a la hora actual";
        valida = false;
      } */
      else {
        delete this.errors2['horaIngresada'];
        /* this.errors2.horaIngresada = "La hora es obligatoria"; */
      }
    },
    validarfechaPrimerToma(){
      // Validar que el campo fecha de la primer toma no esté vacío y sea una fecha válida
      if (!this.fechaPrimerToma) {
        this.errors2.fechaPrimerToma =
          "La fecha de la primer toma es obligatoria";
        valida = false;
      } else if (!moment(this.fechaPrimerToma, "YYYY-MM-DD", true).isValid()) {
        this.errors2.fechaPrimerToma =
          "La fecha de la primer toma no es válida";
        valida = false;
      }/*  else if (moment(this.fechaPrimerToma).isAfter(this.fechaEstudioColonos)) {
        this.errors2.fechaPrimerToma =
          "La fecha de la primer toma debe ser antes a la fecha de la colonoscopia";
        valida = false;
      } */

      /* else if (moment(this.fechaPrimerToma).isSame(this.fechaEstudioColonos)) {
        this.errors2.fechaPrimerToma =
          "La fecha de la primer toma debe ser antes a la fecha de la colonoscopia";
        valida = false;
      } else if (moment(this.fechaPrimerToma).isAfter(fechaActual)) {
        this.errors2.fechaPrimerToma =
          "La fecha de la primer toma debe ser posterior a la fecha actual";
        valida = false;
      } */

      /* else if (moment(fechaActual).isAfter(this.fechaPrimerToma)) {
                this.errors2.fechaPrimerToma = "La fecha de la primer toma debe ser posterior a la fecha y hora actual";
            } */
      else {
        delete this.errors2['fechaPrimerToma'];

      }
    },
    validarhoraPrimerToma(){
      // Validar que el campo hora uno no esté vacío y sea una hora válida
      const horaActual = this.horaActual ? moment(this.horaActual, "HH:mm") : '';
      let horaIng = moment(horaIngresada, "HH:mm")
      let horaAct = moment(horaActual, "HH:mm") // 22:00
      if (!this.horaPrimerToma) {
        this.errors2.horaPrimerToma =
          "La hora de la primer toma es obligatoria";
        valida = false;

      } else if (!moment(this.horaPrimerToma, "HH:mm", true).isValid()) {
        this.errors2.horaPrimerToma = "La hora de la primer toma no es válida";
        valida = false;
      } /*  else if (moment(this.horaPrimerToma, "HH:mm").isSameOrAfter(horaIng)) {
        this.errors2.horaPrimerToma = "La hora de la primer toma debe ser antes a la hora colonoscopia";
        valida = false;

        alert("La hora ingresada es posterior a la hora actual");
      } else if (moment(this.horaPrimerToma, "HH:mm").isBefore(horaAct)) {
        this.errors2.horaPrimerToma = "La hora de la primer toma debe ser posterior a la hora actual";
        valida = false;

        alert("La hora ingresada es posterior a la hora actual");
      } */
      else {
        delete this.errors2['horaPrimerToma'];
      }

    },
    validarfechaSegundaToma(){
      // Validar que el campo fecha de la segunda toma no esté vacío y sea una fecha válida
      if (!this.fechaSegundaToma) {
        this.errors2.fechaSegundaToma =
          "La fecha de la segunda toma es obligatoria";
        valida = false;
      } else if (!moment(this.fechaSegundaToma, "YYYY-MM-DD", true).isValid()) {
        this.errors2.fechaSegundaToma =
          "La fecha de la segunda toma no es válida";
        valida = false;
      } /* else if (moment(this.fechaPrimerToma).isSameOrAfter(this.fechaSegundaToma)) {
        this.errors2.fechaSegundaToma =
          "La fecha de la segunda toma  debe ser posterior a la fecha de la primer toma";
        valida = false;
      } */
      else {
        delete this.errors2['fechaSegundaToma'];
      }

      // Validar que el campo fecha dos sea posterior al campo fecha uno
      // Usando el método isAfter de moment.js para comparar las fechas
      // https://momentjs.com/docs/#/query/is-after/
      /*else if (moment(this.fechaSegundaToma).isAfter(this.fechaPrimerToma)) {
        this.errors2.fechaSegundaToma =
          "La fecha de la segunda toma debe ser posterior a la fecha de la primer toma";
        valida = false;
      }*/
      /* else if (moment(this.fechaPrimerToma).isBefore(this.fechaEstudioColonos)) {
                this.errors2.fechaSegundaToma =
                    "La fecha de la segunda toma debe ser antes a fecha estudio y hora colonoscopia";
                valid2 = false;
            } */
      /* else {
        delete this.errors2['fechaSegundaToma'];
      } */
    },
    validarhoraSegundaToma(){
      // Validar que el campo hora dos no esté vacío y sea una hora válida
      if (!this.horaSegundaToma) {
        this.errors2.horaSegundaToma =
          "La hora de la segunda toma es obligatoria";
        valida = false;

      } else if (!moment(this.horaSegundaToma, "HH:mm", true).isValid()) {
        this.errors2.horaSegundaToma =
          "La hora de la segunda toma no es válida";
        valida = false;

      } /* else if (moment(this.horaSegundaToma, "HH:mm").isAfter(horaAct)) {
        this.errors2.horaSegundaToma = "La hora de la segunda toma debe ser antes de la fecha y hora actual";
        valida = false;

        alert("La hora ingresada es posterior a la hora actual");
      } else if (moment(this.horaSegundaToma, "HH:mm").isSameOrBefore(moment(this.horaPrimerToma, "HH:mm"))) {
        this.errors2.horaSegundaToma = "La hora de la segunda toma debe ser posterior a la hora de la primer toma";
        valida = false;
      } */
      else {
        delete this.errors2['horaSegundaToma'];

      }
    },
    enviarFormCrearPlan(event){
      this.errors = {};
      const valida = true;
      // Validar los campos antes de enviar el formulario
      this.validarfechaEstudio();
      this.validarhoraColonos();
      this.validarfechaPrimerToma();
      this.validarhoraPrimerToma();
      this.validarfechaSegundaToma();
      this.validarhoraSegundaToma();
      this.errors2 = {};
      // Aquí irá el código para validar la hora ingresada y la hora actual
      event.preventDefault();
      const fechaActual = this.fechaActual ? moment(this.fechaActual, 'YYYY-MM-DD') : '';
      //Valida que el campo fecha colonoscopia no este vació y sea una fechs
      console.log(moment(this.fechaEstudioColonos).isSame(fechaActual));
      const dataPrescription = { 
        fecha_estudio : this.fechaEstudioColonos, 
        hora_estudio : this.horaColonoscopia, 
        fecha_prim_toma : this.fechaPrimerToma, 
        hora_prim_toma : this.horaPrimerToma, 
        fecha_seg_toma : this.fechaSegundaToma, 
        hora_seg_toma : this.horaSegundaToma
      };
      // console.table(dataPrescription);
      // Emviando los datos del formulario Crear plan de tomas a la API Methodo: Post
      // axios
      //   .post("https://intestinolimpio.onrender.com/api/v1/prescription", dataPrescription)
      //   .then((res) => {
      //     console.log(`Respuesta de back💾: ${res}`);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
    async crearPlanDeTomas() {

      const idUser = localStorage.getItem('userId');

      const data = {
        id_user         : idUser,
        fecha_estudio   : this.fechaEstudioColonos, 
        hora_estudio    : this.horaColonoscopia, 
        fecha_prim_toma : this.fechaPrimerToma, 
        hora_prim_toma  : this.horaPrimerToma, 
        fecha_seg_toma  : this.fechaSegundaToma, 
        hora_seg_toma   : this.horaSegundaToma
      };

      axios.post("https://intestinolimpio.onrender.com/api/v1/prescription", data).then((res) => {
          

          if( res.data?.status == undefined ) {
            this.errorMessage = res.data;
            this.showModalError();
          }

          if( res.data?.status == 200 ) {
            
            localStorage.setItem( 'id_prescription', res.data?.data.id_prescription );
            this.showModal();

            this.fechaEstudioColonos = '';
            this.horaColonoscopia = '';
            this.fechaPrimerToma = '';
            this.horaPrimerToma = '';
            this.fechaSegundaToma = '';
            this.horaSegundaToma = '';
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async updatePlanDeTomas() {
      try {
          const id_prescription = localStorage.getItem( 'id_prescription' );

          const resp = await axios.put("https://intestinolimpio.onrender.com/api/v1/prescription", {
              id_prescription   : id_prescription,
              fecha_estudio     : this.fechaEstudioColonos,
              hora_estudio      : this.horaColonoscopia,
              fecha_prim_toma   : this.fechaPrimerToma,
              hora_prim_toma    : this.horaPrimerToma,
              fecha_seg_toma    : this.fechaSegundaToma,
              hora_seg_toma     : this.horaSegundaToma
          });

          if( resp.data?.status == undefined ) {
            this.errorMessage = resp.data;
            this.showModalError();
          }

          if( resp.data.status == 200 ) {
            this.errorMessage = 'Se edito plan de tomas correctamente';
            this.showModalError();
          }
          
      } catch (error) {
          console.log( error.message );
          this.showModalError();
      }
    },
    async getInfoPrescription() {

      try {

          const id_prescription = localStorage.getItem( 'id_prescription' );

          console.log(id_prescription);

          if( id_prescription == null ) return;

          const resp = await axios.post("https://intestinolimpio.onrender.com/api/v1/prescription/me", { id_prescription });

          if( resp.data.status == 200 ) {

            this.fechaEstudioColonos = resp.data.data.id_prescription[0].fecha_estudio;
            this.horaColonoscopia = resp.data.data.id_prescription[0].hora_estudio;
            this.fechaPrimerToma = resp.data.data.id_prescription[0].fecha_prim_toma;
            this.horaPrimerToma = resp.data.data.id_prescription[0].hora_prim_toma;
            this.fechaSegundaToma = resp.data.data.id_prescription[0].fecha_seg_toma;
            this.horaSegundaToma = resp.data.data.id_prescription[0].hora_seg_toma;
          }
          
      } catch (error) {
          console.log( error );
      }
    },
  },
  computed: {
    // Obtener la fecha mínima para el campo fecha dos
    minDate() {
      // Si la fecha uno está vacía o no es válida, devolver null
      /*if (
        !this.fechaEstudioColonos ||
        !moment(this.fechaEstudioColonos, "YYYY-MM-DD", true).isValid()
      ) {
        return null;
      }
      // Si la fecha uno es válida, devolver el día siguiente de la fecha uno formateado como YYYY-MM-DD
      else {
        return moment(this.fechaEstudioColonos)
          .add(1, "days")
          .format("YYYY-MM-DD");
      }*/
    },
    // Obtener la hora mínima para el campo hora dos
    minTime() {
      // Si la hora uno está vacía o no es válida, devolver null

      if (
        !this.horaColonoscopia ||
        !moment(this.horaColonoscopia, "HH:mm", true).isValid()
      ) {
        return null;
      }
      // Si la hora uno es válida, devolver la hora uno formateada como HH:mm
      else {
        return moment(this.horaColonoscopia, "HH:mm").format("HH:mm");
      }
    },
  },
  mounted: function () {
    this.horaActual = moment().format("HH:mm");
    this.fechaActual = moment().format("YYYY-MM-DD");
    this.getInfoPrescription();
  },
};
</script>

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
  content: "Fecha de estudio:  ";
  font-family: "OpenSans-Regular";
  /* font-size: 40px; */
  /* margin: 0 auto;
    text-align: center; */
  /* line-break: normal; */
  /* margin-right: 2rem; */
  line-height: normal;
  color: #8b8a8a;
  margin-right: 2rem;
  /* width: 200px;
  height: 20px; */
  /* text-align: center;
  justify-content: center;
  align-items: center; */
  /*  margin-left: 10px; */
}

input.inputFechaEstudioCrear[type="date"]::-webkit-calendar-picker-indicator {
  /* display: block; */
  /* background: url("../assets/img/web/herramienta-de-simbolo-de-interfaz-de-calendario\ 2.png") no-repeat;
  background: none; */
  width: 20px;
  height: 22px;
  color: #8b8a8a;
}

input.inputFechaEstudioCrear[type="date"]::-webkit-calendar-picker-indicator:hover {
  /* display: block; */
  /* background: url("../assets/img/web/herramienta-de-simbolo-de-interfaz-de-calendario.png") no-repeat;
  background: none; */
  width: 20px;
  height: 22px;
  color: #8b8a8a;
}

/* Terminan Estilos para input Fecha de estudio */

/* Inician Estilos para input Hora de la colonoscopía o estudio */
input.inputHoraColos[type="time"]:before {
  content: "Hora de la colonoscopia o estudio: ";
  font-family: "OpenSans-Regular";
  /* line-break: normal; */
  margin-right: 2rem;
  color: #8b8a8a;
  cursor: pointer;
}

input.inputHoraColos[type="time"]::-webkit-calendar-picker-indicator {
  /* display: block; */
  /* background: url("../assets/img/web/reloj-de-pared\ 2.png") no-repeat; */
  /* background: none; */
  width: 20px;
  height: 20px;
  color: #8b8a8a;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  /* display: block; */
  /* background: url("../assets/img/web/reloj-de-pared\ 2.png") no-repeat; */
  /* background: none; */
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
  cursor: pointer;
}

input.inputFecPriToma[type="date"]::-webkit-calendar-picker-indicator {
  /* display: block; */
  /* background: url("../assets/img/web/herramienta-de-simbolo-de-interfaz-de-calendario\ 2.png") no-repeat;
  background: none; */
  width: 20px;
  height: 20px;
  color: #8b8a8a;
  cursor: pointer;
}

input.inputFecPriToma[type="date"]::-webkit-calendar-picker-indicator:hover {
  /* display: block; */
  /* background: url("../assets/img/web/herramienta-de-simbolo-de-interfaz-de-calendario.png") no-repeat;
  background: none; */
  width: 20px;
  height: 20px;
  color: #8b8a8a;
  cursor: pointer;
}

/* Terminan Estilos para input "Fecha de la primera toma de Picoprep®️" */

/* Inician Estilos para input "Hora de la primera toma de Picoprep®️" */
input.inputHoraPriToma[type="time"]:before {
  content: "Hora de la primera toma de Picoprep®️: ";
  font-family: "OpenSans-Regular";
  line-break: normal;
  margin-right: 2rem;
  color: #8b8a8a;
  cursor: pointer;
}

input.inputHoraPriToma[type="time"]::-webkit-calendar-picker-indicator {
  /* display: block; */
  /* background: url("../assets/img/web/reloj-de-pared\ 2.png") no-repeat;
  background: none; */
  width: 20px;
  height: 20px;
  color: #8b8a8a;
  cursor: pointer;
}

input.inputHoraPriToma[type="time"]::-webkit-calendar-picker-indicator:hover {
  /* display: block; */
  /* background: url("../assets/img/web/reloj-de-pared.png") no-repeat; */
  /* background: none; */
  width: 20px;
  height: 20px;
  color: #8b8a8a;
  cursor: pointer;
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
  /* background: url("../assets/img/web/herramienta-de-simbolo-de-interfaz-de-calendario\ 2.png") no-repeat;
  background: none; */
  width: 20px;
  height: 20px;
  color: #8b8a8a;
  cursor: pointer;
}

input.inputFecSegToma[type="date"]::-webkit-calendar-picker-indicator:hover {
  /* display: block; */
  /* background: url("../assets/img/web/herramienta-de-simbolo-de-interfaz-de-calendario.png") no-repeat;
  background: none; */
  width: 20px;
  height: 20px;
  color: #8b8a8a;
  cursor: pointer;
}

/* Terminan Estilos para input "Fecha de la primera toma de Picoprep®️" */

/* Inician Estilos para input "Hora de la segunda toma de Picoprep®️" */
input.inputHoraSegToma[type="time"]:before {
  content: "Hora de la segunda toma de Picoprep®️: ";
  font-family: "OpenSans-Regular";
  line-break: normal;
  margin-right: 2rem;
  color: #8b8a8a;
  cursor: pointer;
}

input.inputHoraSegToma[type="time"]::-webkit-calendar-picker-indicator {
  /* display: block; */
  /* background: url("../assets/img/web/reloj-de-pared\ 2.png") no-repeat;
  background: none; */
  width: 20px;
  height: 20px;
  color: #8b8a8a;
  cursor: pointer;
}

input.inputHoraSegToma[type="time"]::-webkit-calendar-picker-indicator:hover {
  /* display: block; */
  /* background: url("../assets/img/web/reloj-de-pared.png") no-repeat; */
  width: 20px;
  height: 20px;
  color: #8b8a8a;
  cursor: pointer;
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

.contenedorMovil {}

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

  /*Estilos plam*/
  /* inicia estilos para ventana modal editar */
  .tituloModal {
    color: #ff9900;
    font-family: "OpenSans-Bold";
    font-size: 30px;
    text-align: center;
    /* fin de estilos para ventana modal editar */
  }

  .tituloPrincipal {
    color: #FF9900;
    font-family: 'OpenSans-Bold';
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
@media screen and (max-height: 500px) {}
</style>
