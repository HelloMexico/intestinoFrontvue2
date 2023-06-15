<template>
    <!-- <h1 class="text-center">Aqui se esta usando el componente de Crear plan</h1> -->
    <div class="container">
        <div class="row">
            <!-- <div class="col-xl-6 col-sm-3 col-md-3"> -->
            <div class="col-4 col-md-6 col-sm-6">
                <!-- <a type="button" class="btnFlecha" href="index.html">
                </a> -->
            </div>
            <!-- <div class="col-xl-6 col-sm-3 col-md-3"> -->
            <div class="col-8 col-md-6 col-sm-6 pt-3 ps-5">
                <h1 class="tituloPregFrecu tituloPerfil">Perfil</h1>
            </div>
            <!-- <div class="col-auto border">
                <p></p>
            </div> -->
        </div>
        <br>
        <div class="row p-2">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-sm-6 col-md-6 text-center">
                        <img src="../assets/img/web/Enmascarar grupo 2.png" alt="" class="img-fluid">
                    </div>
                    <div class="col-xl-6 col-sm-6 col-md-6">
                        <form ref="formPerfil" class="row mb-3" @submit.prevent="enviarDatos">
                            <!-- <div class="col-12 mb-3 ms-3">  
                                <input type="text" v-model="info" />
                            </div> -->
                            <div class="col-12 mb-3 ms-3">
                                <label for="formGroupExampleInput" class="form-label">Teléfono celular</label>
                            </div>
                            <div class="col-3 mb-3">
                                <!-- <input class="form-control" type="text" maxlength="10" name="" id="inputNumeroCel"
                                    placeholder="Lada" :disabled="!inputLadaEnabled" v-model="inputLadaEnabled"
                                    @input="validarLada"> -->
                                <input type="tel" maxlength="5" class="form-control" placeholder="Lada" id="lada"
                                    v-model="inputLadaEnabled" :disabled="!editMode" @input="validarLada"
                                    :class="{ 'error': submitted && !inputLadaEnabled }" required>
                                <span class="error" style="color: red;" v-if="errors.inputLadaEnabled">{{
                                    errors.inputLadaEnabled
                                }}</span>
                                <!-- <input type="tel" maxlength="5" class="form-control" placeholder="Lada"  id="lada"
                                    v-model="inputLadaEnabled" :disabled="!editMode" 
                                    @input="validarLada"
                                    :class="{ 'in-inavalid': submitted && !inputLadaEnabled}"
                                    required>
                                <div class="invalid-feedback">Lada es obligfatoria</div> -->
                            </div>
                            <div class="col-8 mb-3">
                                <!-- <input class="form-control" type="text" maxlength="4" id="inputLadaperfil"
                                    placeholder="Escriba su número celular" v-bind:disabled="!inputTelPerfilEnabled"
                                    v-model="inputTelPerfilEnabled" @input="validarTelefonoCelular"> -->
                                <input class="form-control" type="tel" maxlength="10" id="inputLadaperfil"
                                    placeholder="Escriba su número celular" v-model="inputTelPerfilEnabled"
                                    :disabled="!editMode" @input="validarTelefonoCelular"
                                    :class="{ 'error': submitted && !inputTelPerfilEnabled }" required>
                                <span class="error" style="color: red;" v-if="errors.inputTelPerfilEnabled">{{
                                    errors.inputTelPerfilEnabled
                                }}</span>
                                <!-- <div class="invalid-feedback">Lada es obligfatoria</div> -->
                            </div>
                            <div class="col-1 mb-3 g-2">
                                <!-- <a type="button" id="btnEdiInpEstado" class="btnEditarPlan"
                                    v-on:click.prevent="enableInputLadaNumero"></a> -->
                                <a type="button" class="btnEditarPlan" @click="editMode = !editMode">{{ editMode ?
                                    '' : '' }}</a>
                            </div>
                            <div class="col-12 mb-3 ms-3">
                                <label for="staticEmail" class="col-sm-2 col-form-label">Estado</label>
                                <!-- <input type="email" class="form-control" name="" id="emailInput" placeholder="Ciudad"> -->
                            </div>
                            <div class="col-11 mb-3">
                                <select id="selectEstadoPerfil" class="form-select" v-model="selectEstadoEnabled"
                                    v-bind:disabled="!selectEstado" @checked="validarEstado"
                                    :class="{ 'error': submitted && !selectEstadoEnabled }" required>
                                    <option value="" disabled selected>Estado</option>
                                    <option v-for="option in options" :key="option.value">
                                        {{ option.text }}
                                    </option>
                                </select>
                                <span class="error" style="color: red;" v-if="errors.selectEstadoEnabled">{{
                                    errors.selectEstadoEnabled
                                }}</span>
                                <!-- <div class="invalid-feedback">El estado es obligatorio</div> -->
                            </div>
                            <div class="col-1 mb-3 g-2">
                                <a type="button" id="btnEdiInpEstado" class="btnEditarPlan"
                                    @click.prevent="selectEstado = !selectEstado"></a>
                            </div>
                            <div class="col-12 mb-3 ms-3">
                                <label for="staticEmail" class="col-sm-2 col-form-label">Ciudad</label>
                                <!-- <input type="email" class="form-control" name="" id="emailInput" placeholder="Ciudad"> -->
                            </div>
                            <div class="col-11 mb-3">
                                <input type="text" class="form-control" name="" id="inputCiudadPerfil"
                                    placeholder="Ejemplo: Mexicali" v-model="inputCiudadEnabled"
                                    v-bind:disabled="!inputCiudad" @input="validarCiudad"
                                    :class="{ 'error': submitted && !inputCiudadEnabled }" required>
                                <span class="error" style="color: red;" v-if="errors.inputCiudadEnabled">{{
                                    errors.inputCiudadEnabled
                                }}</span>
                                <!-- <div class="invalid-feedback">Ciudad es obligatoria</div> -->
                            </div>
                            <div class="col-1 mb-3 g-2">
                                <a type="button" class="btnEditarPlan" @click.prevent="inputCiudad = !inputCiudad"></a>
                            </div>
                            <div class="col-12 mb-3 ms-3">
                                <label for="staticEmail" class="col-sm-2 col-form-label">Edad</label>
                                <!-- <input type="email" class="form-control" name="" id="emailInput" placeholder="Ciudad"> -->
                            </div>
                            <div class="col-11 mb-3">
                                <input name="edad" class="form-control"
                                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                    type="number" maxlength="3" id="inputEdad" placeholder="Ejemplo: 18"
                                    v-model="inputEdadEnabled" v-bind:disabled="!inputEdad" @input="validarEdad"
                                    :class="{ 'error': submitted && !inputEdadEnabled }" required>
                                <span class="error" style="color: red;" v-if="errors.inputEdadEnabled">{{
                                    errors.inputEdadEnabled
                                }}</span>
                                <!-- <div class="invalid-feedback">Lada es obligfatoria</div> -->

                            </div>
                            <div class="col-1 mb-3 g-2">
                                <a type="button" id="btnEdiInpEdad" class="btnEditarPlan"
                                    @click.prevent="inputEdad = !inputEdad"></a>
                            </div>
                            <div class="col-12 mb-3 ms-3">
                                <label for="staticEmail" class="col-sm-4 col-form-label">Nombre del médico
                                    tratante</label>
                                <!-- <input type="email" class="form-control" name="" id="emailInput" placeholder="Ciudad"> -->
                            </div>
                            <div class="col-11 mb-3">
                                <input type="text" class="form-control" name="" id="inputNombMedTrat"
                                    placeholder="Ejemplo: Juan Andrés" v-model="inputNomMedTratEnabled"
                                    v-bind:disabled="!inputNomMedTrat" @input="validarNomMedTrat"
                                    :class="{ 'error': submitted && !inputNomMedTratEnabled }" required>
                                <span class="error" style="color: red;" v-if="errors.inputNomMedTratEnabled">{{
                                    errors.inputNomMedTratEnabled
                                }}</span>
                                <!-- <div class="invalid-feedback">Lada es obligfatoria</div> -->

                            </div>
                            <div class="col-1 mb-3 g-2">
                                <a type="button" id="btnEdiInpEdad" class="btnEditarPlan"
                                    @click.prevent="inputNomMedTrat = !inputNomMedTrat"></a>
                            </div>
                            <div class="col-12 mb-3 ms-3">
                                <label for="staticEmail" class="col-sm-4 col-form-label"> Apellidos del médico
                                    tratante</label>
                                <!-- <input type="email" class="form-control" name="" id="emailInput" placeholder="Ciudad"> -->
                            </div>
                            <div class="col-11 mb-3">
                                <input type="text" class="form-control" name="" id="inputApellMedTra"
                                    placeholder="Ejemplo: Márquez Luria" v-model="inputApeMedTratEnabled"
                                    v-bind:disabled="!inputApeMedTrat" @input="validarApeMedTrat"
                                    :class="{ 'error': submitted && !inputApeMedTratEnabled }" required>
                                <span class="error" style="color: red;" v-if="errors.inputApeMedTratEnabled">{{
                                    errors.inputApeMedTratEnabled
                                }}</span>
                                <!-- <div class="invalid-feedback">Apellido es obligfatoria</div> -->

                            </div>
                            <div class="col-1 mb-3 g-2">
                                <a type="button" class="btnEditarPlan"
                                    @click.prevent="inputApeMedTrat = !inputApeMedTrat"></a>
                            </div>
                            <div class="col-12 mb-3 ms-3">
                                <label for="staticEmail" class="col-sm-3 col-form-label"> Clave de acceso</label>
                                <!-- <input type="email" class="form-control" name="" id="emailInput" placeholder="Ciudad"> -->
                            </div>
                            <div class="col-11 mb-3">
                                <input type="password" id="inputClaAcceso" class="form-control" name="" placeholder="****"
                                    v-model="inputClaveAccesoEnabled" v-bind:disabled="!inputClaveAcceso"
                                    @input="validarClaveAccessos"
                                    :class="{ 'error': submitted && !inputClaveAccesoEnabled }" required>
                                <span class="error" style="color: red;" v-if="errors.inputClaveAccesoEnabled">{{
                                    errors.inputClaveAccesoEnabled
                                }}</span>
                                <!-- <div class="invalid-feedback">Lada es obligfatoria</div> -->

                            </div>
                            <div class="col-1 mb-3 g-2">
                                <a type="button" id="btnEdiInpClaAcceso" class="btnEditarPlan"
                                    @click.prevent="inputClaveAcceso = !inputClaveAcceso"></a>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                            checked>
                                        <label class="form-check-label" for="flexCheckDefault">
                                            He leído el aviso de
                                            privacidad.
                                            <p>*El uso de esta plataforma no sustituye bajo ninguna
                                                circunstancia la recomendación de su médico tratante.</p>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <!-- <button type="submit" class="btnGuardar rounded">GUARDAR</button> -->
                                    <button type="submit" class="btnGuardar rounded text-center">GUARDAR</button>

                                </div>

                            </div>
                        </form>
                        <div class="modal fade" id="successModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header modalHeaderModificar">
                                        <!-- <div class="contenidoDerecha"> -->
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                        <!-- </div> -->

                                    </div>
                                    <div class="modal-body" style="border: none;">
                                        <p class="text-center parrafoVaModificarInfor">Va a modificar la
                                            información de ingreso, esto
                                            podría afectar las alertas vía WhatsApp</p>
                                        <p class="parrafoEstasSeguro text-center">¿Está seguro de que quiere
                                            continuar?</p>

                                    </div>
                                    <div class="modal-footer" style="border: none;">

                                        <!-- <button type="submit" class="rounded btnAceptarModalModifica"
                                            data-bs-dismiss="modal">ACEPTAR</button> -->
                                        <button type="submit" class="rounded btnAceptarModalModifica"
                                            data-bs-dismiss="modal">ACEPTAR</button>
                                        <br><!-- <br> -->
                                        <button type="button" class="rounded btnCancelarModalModifica"
                                            data-bs-dismiss="modal">CANCELAR</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- <form ref="formPruebas" @submit.prevent="submitForm2">
                            <div class="form__group">
                                <label class="form__label">Nombre:</label>
                                <input class="form__input form-control" type="text" v-model="name"
                                    :class="{ 'is-invalid': submitted && !name }" />
                                <div class="invalid-feedback">El nombre es requerido</div>
                            </div>
                            <div class="form__group">
                                <label class="form__label">Correo electrónico:</label>
                                <input class="form__input form-control" type="email" v-model="email"
                                    :class="{ 'is-invalid': submitted && !email }"  />
                                <div class="invalid-feedback">El correo electrónico es requerido</div>
                            </div>
                            <button class="form__button btn btn-primary" type="submit">Enviar</button>
                        </form> -->

                        <!-- <div class="modal fade" id="successModal2" tabindex="-1" aria-labelledby="successModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="successModalLabel">
                                            ¡Formulario enviado!
                                        </h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p>
                                            Gracias por contactarnos. Nos pondremos en contacto contigo lo
                                            antes posible.
                                        </p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                            Close
                                        </button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div> -->

                        <!-- <form @submit.prevent="onSubmit">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" v-model="email"
                                    aria-describedby="emailHelp">
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword2" class="form-label">Confirm Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword2"
                                    v-model="passwordConfirm">
                            </div>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </form> -->

                        <!-- Modal -->

                    </div>
                </div>
            </div>
        </div>
        <br>
    </div>
</template>
<script>
import axios from "axios";


export default {
    name: 'Perfil',
    props: {
        msg: String,
    },
    data() {
        return {
            errors: {},
            inputLadaEnabled: "",
            inputTelPerfilEnabled: "",
            selectEstadoEnabled: "",
            inputCiudadEnabled: "",
            inputEdadEnabled: "",
            inputNomMedTratEnabled: "",
            inputApeMedTratEnabled: "",
            inputClaveAccesoEnabled: "",

            selected: "",
            options: [],
            selectedCountry: "",
            selectedLada: "",

            inputLada: null,
            inputTelPerfil: null,
            selectEstado: null,
            inputCiudad: null,
            inputEdad: null,
            inputNomMedTrat: null,
            inputApeMedTrat: null,
            inputClaveAcceso: null,

            info: null,
            options: [],

            id_user: '',
            userData: null,
            error: null,

            meal_id: '',
            mealData: null,
            error: null,

            email: '',
            password: '',
            passwordConfirm: '',

            lada: '',
            numero: '',
            editMode: false,

            name: '',
            email: '',
            submitted: false,
        };
    },
    mounted() {
        // Consumir una API 
        axios
            .get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then((response) => (this.info = response.data.bpi.USD.rate));
        axios
            .get("https://intestinolimpio.onrender.com/api/v1/data/estados")
            .then((response) => {
                this.options = response.data.data.map((estado) => ({
                    text: estado.nombre,
                    value: estado.clave,
                }));
            });
    },
    methods: {
        validateLada() {
            /* const regex = /^(\+){0,5}(52){0,5}$/;
            const regex = /^(\+){0,4}{0,1}$/; */
            const regex = /^[0-9\+]+$/;
            if (!regex.test(this.lada)) {
                this.lada = '';
            }
            if (this.lada.length > 5) {
                this.lada = this.lada.slice(0, 5);
            }
        },
        validateNumero() {
            if (this.numero.length > 10) {
                this.numero = this.numero.slice(0, 10);
            }
        },
        getUserData() {
            axios.get('https://intestinolimpio.onrender.com/api/v1/data/estados', {
                params: {
                    id_user: this.id_user,
                },
            })
                .then(response => {
                    if (response.data.length === 0) {
                        // La API no contiene datos
                        this.error = 'La API no contiene datos';
                    } else {
                        // La API contiene datos
                        this.userData = response.data;
                    }
                })
                .catch(error => {
                    // Se produjo un error durante la solicitud
                    this.error = error.message;
                });
        },
        getMealData() {
            axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.meal_id}`)
                .then(response => {
                    if (response.data.meals === null) {
                        // La API no contiene datos
                        this.error = 'La API no contiene datos';
                    } else {
                        // La API contiene datos
                        this.mealData = response.data.meals[0];
                    }
                })
                .catch(error => {
                    // Se produjo un error durante la solicitud
                    this.error = error.message;
                });
        },
        /* enableInputLadaNumero() {
            this.inputLadaEnabled = true;
            this.inputTelPerfilEnabled = true;
        }, */
        /* onSubmit() {
            if (this.validateForm()) { */
        // Show modal window with Bootstrap 5
        /* $('#exampleModal').modal('show');
    }

}, */
        /* validateForm() {
            if (!this.email) {
                alert('Please enter an email address.');
                return false;
            }
            if (!this.password) {
                alert('Please enter a password.');
                return false;
            }
            if (this.password !== this.passwordConfirm) {
                alert('Password and password confirmation do not match.');
                return false;
            }
            return true;

        }, */

        validarLada() {
            let valida = true;
            // Validar los campos del formulario
            this.errors.inputLadaEnabled = '';

            // Validar los campos del formulario
            this.errors.inputLadaEnabled = '';
            this.inputLadaEnabled = this.inputLadaEnabled.replace(/[^0-9\+]/g, "");
            /* this.inputLadaEnabled = this.inputLadaEnabled.replace(/^[0-9\+]+$/, ""); */
            /* const regex = /^[0-9\+]+$/; */
            // Validar que el campo lada
            if (!this.inputLadaEnabled) {
                this.errors.inputLadaEnabled = "La lada es obligatoria";
                valida = false;
            }
            /* if (!regex.test(this.inputLadaEnabled)) {
                this.errors.inputLadaEnabled = "La lada es obligatoria";
                valida = false;
            } */
            /* else if (isNaN(this.inputLadaEnabled)) {
                this.errors.inputLadaEnabled = 'La lada solo debe contener numero y signo +';
                valida = false;
            } */ else if (this.inputLadaEnabled.length < 3) {
                this.errors.inputLadaEnabled = 'La lada  no debe ser menor a 3 caracteres';
                valida = false;
            } else if (this.inputLadaEnabled.length > 5) {
                this.errors.inputLadaEnabled = 'La lada no debe exceder 5 caracteres';
                valida = false;
            } else {
                delete this.errors['inputLadaEnabled'];
            }
        },
        validarTelefonoCelular() {
            let valida = true;
            // Validar los campos del formulario
            this.errors.inputTelPerfilEnabled = '';
            this.inputTelPerfilEnabled = this.inputTelPerfilEnabled.replace(/[^0-9]/g, "");

            if (!this.inputTelPerfilEnabled) {
                this.errors.inputTelPerfilEnabled = 'El teléfono celular es obligatorio';
                valida = false;
            } else if (isNaN(this.inputTelPerfilEnabled)) {
                this.errors.inputTelPerfilEnabled = 'El teléfono celular solo debe contener números';
                valida = false;
            } else if (this.inputTelPerfilEnabled.length < 7) {
                this.errors.inputTelPerfilEnabled = 'El teléfono celular no debe ser menor a 7 números';
                valida = false;
            } else if (this.inputTelPerfilEnabled.length > 10) {
                this.errors.inputTelPerfilEnabled = 'El teléfono celular no debe exceder 10 números';
                valida = false;
            } else {
                delete this.errors['inputTelPerfilEnabled '];
            }
            /* this.validarPais();
            this.formularioValidado = this.validarEdad && validarPeso; */
        },
        validarEstado() {
            this.errors.selectEstadoEnabled = '';
            let valida = true;
            // Validar que el campo edad no esté vacío y sea un número positivo
            if (!this.selectEstadoEnabled) {
                this.errors.selectEstadoEnabled = "El estado es obligatorio";
                valida = false;
            } else {
                delete this.errors['selectEstadoEnabled'];
            }

        },

        validarCiudad() {
            // Validar los campos del formulario
            this.errors.inputCiudadEnabled = '';
            let valida = true;
            /** Expresion regular para solo letras */
            /* const regex = /^[a-zA-Z]+$/; */
            this.inputCiudadEnabled = this.inputCiudadEnabled.replace(/[^A-Za-záéíóúÁÉÍÓÚñÑüÜ\s]/g, '');


            // Validar que el campo edad no esté vacío y sea un número positivo
            if (!this.inputCiudadEnabled) {
                this.errors.inputCiudadEnabled = "La ciudad es obligatoria";
                valida = false;
            } /* else if (!/^[a-zA-Z]+$/.test(this.ciudad)) {
                this.errors.ciudad = 'El nombre del médico tratante solo debe contener solo letras';
                valida = false;
            } */ else if (this.inputCiudadEnabled.length > 80) {
                this.errors.inputCiudadEnabled =
                    "La ciudad debe tener máximo 80 caracteres";
                valida = false;
            }
            else {
                delete this.errors['inputCiudadEnabled'];
            }
        },

        validarEdad() {
            // Validar los campos del formulario
            this.errors.inputEdadEnabled = '';
            let valida = true;
            // Validar que el campo edad no esté vacío y sea un número positivo
            if (!this.inputEdadEnabled) {
                this.errors.inputEdadEnabled = "La edad es obligatoria";
                valida = false;
            } else if (this.inputEdadEnabled <= 0) {
                this.errors.inputEdadEnabled = "La edad debe ser un número positivo";
                valida = false;
            } else {
                delete this.errors['inputEdadEnabled'];
            }
        },

        validarNomMedTrat() {
            // Validar los campos del formulario
            this.errors.inputNomMedTratEnabled = '';
            let valida = true;
            /* this.inputNomMedTratEnabled = this.inputNomMedTratEnabledt.replace(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]/g,""); */
            /** Expresion regular para solo letras */
            /* const regex = /^[a-zA-Z]+$/; */
            this.inputNomMedTratEnabled = this.inputNomMedTratEnabled.replace(/[^A-Za-záéíóúÁÉÍÓÚñÑüÜ\s]/g, '');
            // Validar que el campo nombre de medico tratante no este vaciO y tenaga minimo 70 y maximo 80 caracteres
            if (!this.inputNomMedTratEnabled) {
                this.errors.inputNomMedTratEnabled = "El nombre del médico tratante es obligatorio";
                valida = false;
                /* else if (!/^([0-9])*$/.test(this.telefono)) { */
            } /* else if (/^[ a-zA-Z]+$/.test(this.inputNomMedTratEnabled)) {
                this.errors.inputNomMedTratEnabled = 'El nombre del médico tratante solo debe contener solo letras';
                valida = false;
            } *//* else if (this.inputNomMedTratEnabled.length < 50) {
                this.errors.inputNomMedTratEnabled =
                    "El nombre del médico tratante debe tener al menos 50 caracteres";
            } */
            else if (this.inputNomMedTratEnabled.length > 80) {
                this.errors.inputNomMedTratEnabled =
                    "El nombre del médico tratante debe tener máximo 80 caracteres";
                valida = false;
            } else {
                delete this.errors['inputNomMedTratEnabled'];
            }
        },
        validarApeMedTrat() {
            // Validar los campos del formulario
            this.errors.inputApeMedTratEnabled = '';
            let valida = true;
            this.inputApeMedTratEnabled = this.inputApeMedTratEnabled.replace(/[^A-Za-záéíóúÁÉÍÓÚñÑüÜ\s]/g, '');

            // Validar que el campo apellido de medico tratante no este vaci y tenaga minimo 70 y maximo 80 caracteres
            if (!this.inputApeMedTratEnabled) {
                this.errors.inputApeMedTratEnabled = "El apellido del médico tratante es obligatorio";
                valida = false;
            } /* else if (this.inputApeMedTratEnabled.length < 50) {
                this.errors.inputApeMedTratEnabled =
                    "El apellido del médico tratante debe tener al menos 50 caracteres";
                valida = false;
            } */
            else if (this.inputApeMedTratEnabled.length > 80) {
                this.errors.inputApeMedTratEnabled =
                    "El apellido del médico tratante debe tener máximo 80 caracteres";
                valida = false;
            } else {
                delete this.errors['inputApeMedTratEnabled'];
            }
        },
        validarClaveAccessos() {
            // Validar los campos del formulario;
            this.errors.inputClaveAccesoEnabled = '';
            let valida = true;

            // Validar que el campo contraseña no esté vacío y tenga al menos 4 caracteres
            if (!this.inputClaveAccesoEnabled) {
                this.errors.inputClaveAccesoEnabled = 'La clave de acceso es obligatoria';
                valida = false;
            } else if (this.inputClaveAccesoEnabled.length < 4) {
                this.errors.inputClaveAccesoEnabled = 'La clave de acceso debe tener por lo menos 4 caracteres';
                valida = false;
            } else if (this.inputClaveAccesoEnabled.length > 10) {
                this.errors.inputClaveAccesoEnabled = 'La clave de acceso no debe exceder de 10 caracteres';
                valida = false;
            } else {
                delete this.errors['inputClaveAccesoEnabled'];
            }
        },

        submitForm2() {
            this.submitted = true;

            // Validamos el formulario
            if (!this.name || !this.email) {
                return;
            }

            // Si el formulario es válido, mostramos la ventana modal
            const successModal = new bootstrap.Modal(
                document.getElementById('successModal')
            );
            successModal.show();
            /* this.$refs.formPruebas.reset(); */
        },

        enviarDatos() {
            this.errors = {};
            const valida = true;
            this.submitted = true;
            // Validar los campos antes de enviar el formulario
            /* this.validarPaisLada(); */

            this.validarLada();
            this.validarTelefonoCelular();
            this.validarEstado();
            this.validarCiudad();
            this.validarEdad();

            /* this.validarPeso(); */

            this.validarNomMedTrat();
            this.validarApeMedTrat();
            this.validarClaveAccessos();

            /* this.validarConfiClaveAccessos(); */

            //validamos el formulario
            /* if (!this.validarLada || !this.validarTelefonoCelular || !this.validarEstado || !this.validarCiudad || !this.validarEdad || !this.validarNomMedTrat || !this.validarApeMedTrat || !this.validarClaveAccessos) {
                return;
            } */
            // Validación del formulario de Perfil
            if (!this.inputLadaEnabled || !this.inputTelPerfilEnabled || !this.selectEstadoEnabled || !this.inputCiudadEnabled || !this.inputEdadEnabled || !this.inputNomMedTratEnabled || !this.inputApeMedTratEnabled || !this.inputClaveAccesoEnabled) {
                return;
            }
            else {
                // Si el formulario es valido, se muestra ventana modal
                const successModal = new bootstrap.Modal(
                    document.getElementById('successModal')
                );
                successModal.show();
                this.$refs.formPerfil.reset();
            }


            /* axios.get('https://intestinolimpio.onrender.com/api/v1/user', {
                params: {
                    id_user: 'your_id_user'
                }
            })
                .then(response => {
                    if (response.data.length === 0) { */
            // La API no contiene datos
            /* console.log('La API no contiene datos');
        } else { */
            // La API contiene datos
            /* console.log(response.data);
        }
    }) */
            /* .catch(error => { */
            // Se produjo un error durante la solicitud
            /* console.log(error); */
            /* }); */
            /* const data = {
                inputLadaEnabled: this.inputLadaEnabled,
                inputTelPerfilEnabled: this.inputTelPerfilEnabled,
                selectEstadoEnabled: this.selectEstadoEnabled,
                inputCiudadEnabled: this.inputCiudadEnabled,
                inputEdadEnabled: this.inputEdadEnabled,
                inputNomMedTratEnabled: this.inputNomMedTratEnabled,
                inputApeMedTratEnabled: this.inputApeMedTratEnabled,
                inputClaveAccesoEnabled: this.inputClaveAccesoEnabled,

            }; */
            /* console.log(data); */
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
                selectedCountry: this.selectedCountry,
                selectedLada: this.selectedLada,
                telefonoCelular: this.telefonoCelular,
                estado: this.estado,
                ciudad: this.ciudad,
                edad: this.edad,
                peso: this.peso,
                nomMedTrat: this.nomMedTrat,
                apeMedTrat: this.apeMedTrat,
                claveAccesos: this.claveAccesos,
                confClaveAccesos: this.confClaveAccesos,
            };
            console.table(data);
            // Emviando los datos del formulario Crear plan de tomas a la API Methodo: Post
            axios.post('https://intestinolimpio.onrender.com/api/v1/user', data)
                .then(
                    res => {
                        console.log(res)
                    }
                ).catch(
                    err => {
                        console.log(err)
                    }
                )
            // Comprobar si hay errores
            if (Object.keys(this.errors).length > 0) {
                return
            } else {

                /* this.$router.push('/crear'); */
                this.$router.push('/');

            }
        },

    },
};
</script>

<style scoped>
@font-face {
    font-family: 'OpenSans-Bold';
    src: url('../fonts/OpenSans-Bold.ttf') format('woff');
}

@font-face {
    font-family: 'OpenSans-BoldItalic';
    src: url('../fonts/OpenSans-BoldItalic.ttf') format('woff');
}

@font-face {
    font-family: 'OpenSans-ExtraBold';
    src: url('../fonts/OpenSans-ExtraBold.ttf') format('woff');
}

@font-face {
    font-family: 'OpenSans-ExtraBoldItalic';
    src: url('../fonts/OpenSans-ExtraBoldItalic.ttf') format('woff');
}

@font-face {
    font-family: 'OpenSans-Italic';
    src: url('../fonts/OpenSans-Italic.ttf') format('woff');
}

@font-face {
    font-family: 'OpenSans-Light';
    src: url('../fonts/OpenSans-Light.ttf') format('woff');
}

@font-face {
    font-family: 'OpenSans-LightItalic';
    src: url('../fonts/OpenSans-LightItalic.ttf') format('woff');
}

@font-face {
    font-family: 'OpenSans-Medium';
    src: url('../fonts/OpenSans-Medium.ttf') format('woff');
}

@font-face {
    font-family: 'OpenSans-MediumItalic';
    src: url('../fonts/OpenSans-MediumItalic.ttf') format('woff');
}

@font-face {
    font-family: 'OpenSans-Regular';
    src: url('../fonts/OpenSans-Regular.ttf') format('woff');
}

@font-face {
    font-family: 'OpenSans-SemiBold';
    src: url('../fonts/OpenSans-SemiBold.ttf') format('woff');
}

@font-face {
    font-family: 'OpenSans-SemiBoldItalic';
    src: url('../fonts/OpenSans-SemiBoldItalic.ttf') format('woff');
}

@font-face {
    font-family: 'Segoe-UI';
    src: url('../fonts/Segoe-UI.ttf') format('woff');
}

@font-face {
    font-family: 'Segoe-UI-Bold';
    src: url('../fonts/Segoe-UI-Bold.ttf') format('woff');
}

@font-face {
    font-family: 'Segoe-UI-Semibold';
    src: url('../fonts/Segoe-UI-Semibold.ttf') format('woff');
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
    background-color: #FFFFFF;
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
    background-color: #FFFFFF;
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
    background-color: #FFFFFF;
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
    background-color: #FFFFFF;
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
    color: #FF9900;
    font-family: 'OpenSans-Bold';
    font-size: 40px;
}

.parrafoUno {
    font-family: 'OpenSans-Regular';
    font-size: 20px;
    color: #707070;
    text-align: left;
    text-align: justify;
}

.parrafoUno span {
    font-family: 'OpenSans-Bold';
    font-size: 20px;
    color: #707070;
    text-align: left;
    text-align: justify;
}

.parrafoNuestra {
    font-family: 'OpenSans-Regular';
    font-size: 20px;
    color: #707070;
    text-align: justify;
}

.parrafoGenera {
    font-family: 'OpenSans-Regular';
    font-size: 20px;
    color: #707070;
    text-align: justify;

}

.parrafoGenera span {
    font-family: 'OpenSans-Bold';
    font-size: 20px;
    color: #FF9900;
}

.parrafoCreastePlanAntes {
    font-family: 'OpenSans-Bold';
    font-size: 20px;
    color: #707070;
}

.parrafoGeneraProgramacion {
    font-family: 'Segoe-UI-Bold';
    font-size: 20px;
    color: #4E4E4E;
    text-align: center;
}

.parrafoCreaPlanToma {
    font-family: 'Segoe-UI-Bold';
    font-size: 20px;
    color: #4E4E4E;
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
    font-family: 'Segoe-UI-Semibold';
    /* font-family: 'Segoe-UI-Bold'; */

    font-size: 20px;
    color: #1155CC;
    background-color: #FFFFFF;
    width: 100%;
    border: 1px solid #1155CC;
}

.btnInicia:hover {
    font-family: 'Segoe-UI-Semibold';
    font-size: 20px;
    color: #FFFFFF;
    background-color: #1155CC;
    width: 100%;
    border: 1px solid #FFFFFF;
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
    font-family: 'Segoe-UI-Semibold';
    font-size: 20px;
    width: 100%;
    /* height: 50px; */
    color: #FFFFFF;
    border: none;
    background-color: #FF9900;
    text-decoration: none;
}

.btnCrearPlan:hover {
    font-family: 'Segoe-UI-Semibold';
    font-size: 20px;
    width: 100%;
    /* height: 50px; */
    color: #FF9900;
    border: none;
    background-color: #FFFFFF;
    border: 1px solid #FF9900;
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
    font-family: 'OpenSans-Semibold';
    color: #FFFFFF;
    font-size: 20px;
    width: 100%;
    background-color: #2392CB;
    text-decoration: none;
    border: 1px #2392CB solid;
}

.btnContinuar:hover {
    font-family: 'OpenSans-Semibold';
    color: #2392CB;
    font-size: 20px;
    width: 100%;
    background-color: #FFFFFF;
    text-decoration: none;
    border: 1px #2392CB solid;
}

.parrafoRecordaViaWhat {
    font-family: 'OpenSans-Regular';
    color: #FF7700;
    font-size: 14px;
}

.parrafoRecordaViaWhat span {
    font-family: 'OpenSans-Bold';
    color: #FF7700;
    font-size: 14px;
}

.textoSwitchAcepto {
    font-family: 'OpenSans-SemiBold';
    color: #1155CC;
    font-size: 14px;
}

.parrafoCheckLeido {
    font-family: 'OpenSans-Regular';
    color: #474747;
    font-size: 14px;
}

.labelEdad {
    font-size: 12px;
    /* font-weight: bold; */
}

footer {
    background-color: #D2D2D2;
    height: 340px;
    width: 100%;
}

.columnaBtnDudas {
    /*  display: flex; */
    text-align: center;
}

.btnDudas {
    font-family: 'Segoe-UI-Bold';
    font-size: 18px;
    /* height: 40px; */
    background-color: #1155CC;
    border: 1px solid #1155CC;
    color: #FFFFFF;
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
    font-family: 'Segoe-UI-Bold';
    font-size: 18px;
    /* height: 40px; */
    background-color: #1155CC;
    color: #FFFFFF;
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
    font-family: 'Segoe-UI-Semibold';
    font-size: 18px;
    color: #4E4E4E;
}

.parrafoAviso {
    font-family: 'Segoe-UI';
    font-size: 18px;
    color: #4E4E4E;
}

.parrafoNumeroReg {
    font-family: 'Segoe-UI-Semibold';
    font-size: 18px;
    color: #4E4E4E;
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
    color: #FF9900;
    font-family: 'OpenSans-Bold';
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
    font-family: 'OpenSans-Bold';
    font-size: 15px;
    color: #565757;
}

.nav-item a.nav-link:hover {
    font-family: 'OpenSans-Bold';
    font-size: 15px;
    color: #1155CC;
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
    font-family: 'OpenSans-Regular';
    color: #8B8A8A;
}

input.inputFechaEstudioCrear[type="date"]:before {
    content: 'Fecha de estudio: ';
    font-family: 'OpenSans-Regular';
    line-break: normal;
    margin-right: 2rem;
    color: #8B8A8A;
}

input.inputFechaEstudioCrear[type="date"]::-webkit-calendar-picker-indicator {
    /* display: block; */
    background: url("../assets/img/web/herramienta-de-simbolo-de-interfaz-de-calendario\ 2.png") no-repeat;
    background: none;
    width: 20px;
    height: 22px;
    color: #8B8A8A;
}

input.inputFechaEstudioCrear[type="date"]::-webkit-calendar-picker-indicator:hover {
    /* display: block; */
    background: url("../assets/img/web/herramienta-de-simbolo-de-interfaz-de-calendario.png") no-repeat;
    background: none;
    width: 20px;
    height: 22px;
    color: #8B8A8A;
}

/* Terminan Estilos para input Fecha de estudio */


/* Inician Estilos para input Hora de la colonoscopía o estudio */
input.inputHoraColos[type="time"]:before {
    content: 'Hora de la colonoscopía o estudio: ';
    font-family: 'OpenSans-Regular';
    line-break: normal;
    margin-right: 2rem;
    color: #8B8A8A;
    cursor: pointer;
}

input.inputHoraColos[type="time"]::-webkit-calendar-picker-indicator {
    /* display: block; */
    /* background: url("../assets/img/web/reloj-de-pared\ 2.png") no-repeat; */
    background: none;
    width: 20px;
    height: 20px;
    color: #8B8A8A;

}

input[type="date"]::-webkit-calendar-picker-indicator {
    /* display: block; */
    /* background: url("../assets/img/web/reloj-de-pared\ 2.png") no-repeat; */
    background: none;
    width: 20px;
    height: 20px;
    color: #8B8A8A;

}



/* Terminan Estilos para input Hora de la colonoscopía o estudio */

/* Inician Estilos para input "Fecha de la primera toma de Picoprep®️" */
input.inputFecPriToma[type="date"]:before {
    content: 'Fecha de la primera toma de Picoprep®️: ';
    font-family: 'OpenSans-Regular';
    line-break: normal;
    margin-right: 2rem;
    color: #8B8A8A;
}

input.inputFecPriToma[type="date"]::-webkit-calendar-picker-indicator {
    /* display: block; */
    background: url("../assets/img/web/herramienta-de-simbolo-de-interfaz-de-calendario\ 2.png") no-repeat;
    background: none;
    width: 20px;
    height: 20px;
    color: #8B8A8A;

}

input.inputFecPriToma[type="date"]::-webkit-calendar-picker-indicator:hover {
    /* display: block; */
    background: url("../assets/img/web/herramienta-de-simbolo-de-interfaz-de-calendario.png") no-repeat;
    background: none;
    width: 20px;
    height: 20px;
    color: #8B8A8A;
}

/* Terminan Estilos para input "Fecha de la primera toma de Picoprep®️" */

/* Inician Estilos para input "Hora de la primera toma de Picoprep®️" */
input.inputHoraPriToma[type="time"]:before {
    content: 'Hora de la primera toma de Picoprep®️: ';
    font-family: 'OpenSans-Regular';
    line-break: normal;
    margin-right: 2rem;
    color: #8B8A8A;
}

input.inputHoraPriToma[type="time"]::-webkit-calendar-picker-indicator {
    /* display: block; */
    background: url("../assets/img/web/reloj-de-pared\ 2.png") no-repeat;
    background: none;
    width: 20px;
    height: 20px;
    color: #8B8A8A;

}

input.inputHoraPriToma[type="time"]::-webkit-calendar-picker-indicator:hover {
    /* display: block; */
    background: url("../assets/img/web/reloj-de-pared.png") no-repeat;
    background: none;
    width: 20px;
    height: 20px;
    color: #8B8A8A;
}

/* Terminan Estilos para input "Hora de la primera toma de Picoprep®️" */

/* Inician Estilos para input "Fecha de la primera toma de Picoprep®️" */
input.inputFecSegToma[type="date"]:before {
    content: 'Fecha de la segunda toma de Picoprep®️: ';
    font-family: 'OpenSans-Regular';
    line-break: normal;
    margin-right: 2rem;
    color: #8B8A8A;
}

input.inputFecSegToma[type="date"]::-webkit-calendar-picker-indicator {
    /* display: block; */
    background: url("../assets/img/web/herramienta-de-simbolo-de-interfaz-de-calendario\ 2.png") no-repeat;
    background: none;
    width: 20px;
    height: 20px;
    color: #8B8A8A;

}

input.inputFecSegToma[type="date"]::-webkit-calendar-picker-indicator:hover {
    /* display: block; */
    background: url("../assets/img/web/herramienta-de-simbolo-de-interfaz-de-calendario.png") no-repeat;
    background: none;
    width: 20px;
    height: 20px;
    color: #8B8A8A;
}

/* Terminan Estilos para input "Fecha de la primera toma de Picoprep®️" */

/* Inician Estilos para input "Hora de la segunda toma de Picoprep®️" */
input.inputHoraSegToma[type="time"]:before {
    content: 'Hora de la segunda toma de Picoprep®️: ';
    font-family: 'OpenSans-Regular';
    line-break: normal;
    margin-right: 2rem;
    color: #8B8A8A;
}

input.inputHoraSegToma[type="time"]::-webkit-calendar-picker-indicator {
    /* display: block; */
    background: url("../assets/img/web/reloj-de-pared\ 2.png") no-repeat;
    background: none;
    width: 20px;
    height: 20px;
    color: #8B8A8A;

}

input.inputHoraSegToma[type="time"]::-webkit-calendar-picker-indicator:hover {
    /* display: block; */
    background: url("../assets/img/web/reloj-de-pared.png") no-repeat;
    width: 20px;
    height: 20px;
    color: #8B8A8A;
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
    color: #FF9900;
    font-family: 'OpenSans-Bold';
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
    font-family: 'OpenSans-Bold';
    font-size: 12px;
    color: #707070;
}

.parrafoFechaEstudio {
    font-family: 'OpenSans-Bold';
    font-size: 12px;
    color: #707070;
}

.parrafoFechaEstudio span {
    font-family: 'OpenSans-Regular';
    font-size: 12px;
    color: #707070;
}

.parrafoHoraEstudio {
    font-family: 'OpenSans-Bold';
    font-size: 12px;
    color: #707070;
}

.parrafoHoraEstudio span {
    font-family: 'OpenSans-Regular';
    font-size: 12px;
    color: #707070;
}

.parrafoPrimerToma {
    font-family: 'OpenSans-Bold';
    font-size: 12px;
    color: #707070;
}

.parrafoFechaPrimerToma {
    font-family: 'OpenSans-Bold';
    font-size: 12px;
    color: #707070;
}

.parrafoFechaPrimerToma span {
    font-family: 'OpenSans-Regular';
    font-size: 12px;
    color: #707070;
}

.parrafoHoraPrimerToma {
    font-family: 'OpenSans-Bold';
    font-size: 12px;
    color: #707070;
}

.parrafoHoraPrimerToma span {
    font-family: 'OpenSans-Regular';
    font-size: 12px;
    color: #707070;
}

.parrafoSegundaToma {
    font-family: 'OpenSans-Bold';
    font-size: 12px;
    color: #707070;
}

.parrafoFechaSegundaToma {
    font-family: 'OpenSans-Bold';
    font-size: 12px;
    color: #707070;
}

.parrafoFechaSegundaToma span {
    font-family: 'OpenSans-Regular';
    font-size: 12px;
    color: #707070;
}

.parrafoHoraSegundaToma {
    font-family: 'OpenSans-Bold';
    font-size: 12px;
    color: #707070;
}

.parrafoHoraSegundaToma span {
    font-family: 'OpenSans-Regular';
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
    color: #FF9900;
    font-family: 'OpenSans-Bold';
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
    font-family: 'Segoe-UI-Semibold';
    font-size: 20px;
    width: 100%;
    /* width: 600px;
    width: 60%; */
    /* height: 50px; */
    color: #FFFFFF;
    border: none;
    background-color: #FF9900;
    text-decoration: none;
}

.btnDescargaPlan:hover {
    font-family: 'Segoe-UI-Semibold';
    font-size: 20px;
    width: 100%;
    /* width: 600px;
    width: 60%; */
    /* height: 50px; */
    color: #FF9900;
    border: none;
    background-color: #FFFFFF;
    border: 1px solid #FF9900;
}

.btnVerReferenciaMedica {
    font-family: 'Segoe-UI-Semibold';
    font-size: 20px;
    width: 100%;
    /* width: 600px;
    width: 60%; */
    /* height: 50px; */
    color: #FFFFFF;
    border: none;
    background-color: #FF9900;
    text-decoration: none;
}

.btnVerReferenciaMedica:hover {
    font-family: 'Segoe-UI-Semibold';
    font-size: 20px;
    width: 100%;
    /* width: 600px;
    width: 60%; */
    /* height: 50px; */
    color: #FFFFFF;
    border: none;
    background-color: #FF9900;
    text-decoration: none;
}

/* Termina estilos para Plan de tomas e hidratacion */

/* Inician estilos para Modal boton Editar Plan de Tomas */
/* Inician Estilos label Fecha de estudio */
.labelModalEditarFechaEstu {
    font-family: 'OpenSans-Regular';
    color: #515151;
    font-size: 16px;
}

/* Terminan Estilos label Fecha de estudio */
/* Inician Estilos label Fecha de estudio */
.labelModalEditarHoraColonos {
    font-family: 'OpenSans-Regular';
    color: #515151;
    font-size: 16px;
}

/* Terminan Estilos label Fecha de estudio */



/* Inician Estilos para botón Guardar de Modal - Editar Plan*/
.btnGuardarModalPlan {
    font-family: 'Segoe-UI-Semibold';
    font-size: 20px;
    width: 100%;
    height: 50px;
    color: #FFFFFF;
    border: none;
    background-color: #FF9900;
    text-decoration: none;
    /* margin-left: 90px;
    margin-right: 90px; */
}

.btnGuardarModalPlan:hover {
    font-family: 'Segoe-UI-Semibold';
    font-size: 20px;
    width: 100%;
    height: 50px;
    color: #FF9900;
    border: none;
    background-color: #FFFFFF;
    border: 1px solid #FF9900;
    /* margin-left: 90px;
    margin-right: 90px; */
}

/* Termina Estilos para botón Guardar de Modal - Editar Plan*/

/* Inician Estilos para botón Guardar de Modal - Editar Plan*/
.btnCancelarModalPlan {
    font-family: 'OpenSans-SemiBold';
    font-size: 20px;
    width: 100%;
    height: 50px;
    color: #FFFFFF;
    border: none;
    background-color: #1155CC;
    text-decoration: none;
    /* margin-left: 90px;
    margin-right: 90px; */
}

.btnCancelarModalPlan:hover {
    font-family: 'OpenSans-SemiBold';
    font-size: 20px;
    width: 100%;
    height: 50px;
    color: #1155CC;
    border: none;
    background-color: #FFFFFF;
    border: 1px solid #1155CC;
    /* margin-left: 90px;
    margin-right: 90px; */
}

/* Termina Estilos para botón Guardar de Modal - Editar Plan*/
/* Termina estilos para Modal boton Editar Plan de Tomas */

/* Inician Estilos para Perfil*/

.btnGuardar {
    font-family: 'Segoe-UI-Semibold';
    font-size: 20px;
    width: 100%;
    /* height: 50px; */
    color: #FFFFFF;
    border: none;
    background-color: #FF9900;
    text-decoration: none;
}

.btnGuardar:hover {
    font-family: 'Segoe-UI-Semibold';
    font-size: 20px;
    width: 100%;
    /* height: 50px; */
    color: #FF9900;
    border: none;
    background-color: #FFFFFF;
    border: 1px solid #FF9900;
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
    font-family: 'OpenSans-Regular';
    font-size: 20px;
    font-size: 18px;
    color: #616161;
}

/* Estilos para el parrafo de Modificar información */
/* Inician Estilos para el parrafo de ¿Estas seguro? */
.parrafoEstasSeguro {
    font-family: 'OpenSans-Bold';
    font-size: 20px;
    font-size: 18px;
    /* line-height: 70px; */
    color: #616161;
    /* margin-bottom: 10px; */
}

/* Estilos para el parrafo de ¿Estas seguro? */
/**/
.btnAceptarModalModifica {
    font-family: 'Segoe-UI-Semibold';
    font-size: 20px;
    width: 100%;
    height: 40px;
    color: #FFFFFF;
    border: none;
    background-color: #FF9900;
    text-decoration: none;
    margin-left: 30px;
    margin-right: 30px;
    /* margin: 90px auto; */
}

.btnAceptarModalModifica:hover {
    font-family: 'Segoe-UI-Semibold';
    font-size: 20px;
    width: 100%;
    height: 40px;
    color: #FF9900;
    border: none;
    background-color: #FFFFFF;
    border: 1px solid #FF9900;
    margin-left: 30px;
    margin-right: 30px;
}

/**/

/**/
.btnCancelarModalModifica {
    font-family: 'OpenSans-SemiBold';
    font-size: 20px;
    width: 100%;
    height: 40px;
    color: #FFFFFF;
    border: none;
    background-color: #1155CC;
    text-decoration: none;
    margin-left: 30px;
    margin-right: 30px;
}

.btnCancelarModalModifica:hover {
    font-family: 'OpenSans-SemiBold';
    font-size: 20px;
    width: 100%;
    height: 40px;
    color: #1155CC;
    border: none;
    background-color: #FFFFFF;
    border: 1px solid #1155CC;
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
    color: #FF9900;
    font-family: 'OpenSans-Bold';
    font-size: 40px;
    text-align: left;
}

/* termina estilos para Titulo preguntas frecuentes*/

/* Inician estilos para parrafo Nos interesa saber */
.parrafoPregFrecInteresaSaber {
    font-family: 'OpenSans-Regular';
    font-size: 20px;
    text-align: justify;
    /*  margin: 10px 10px 10px 10px; */
    /* padding: 10px 10px; */
}

/* Termina estilos para parrafo Nos interesa saber */

/* Inician Estilos para botón Guardar de vista Preguntas frecuentes*/
.btnGuardarPregFrec {
    font-family: 'OpenSans-SemiBold';
    font-size: 20px;
    width: 100%;
    /* height: 50px; */
    color: #FFFFFF;
    border: none;
    background-color: #FF9900;
    text-decoration: none;
}

.btnGuardarPregFrec:hover {
    font-family: 'OpenSans-SemiBold';
    font-size: 20px;
    width: 100%;
    /* height: 50px; */
    color: #FF9900;
    border: none;
    background-color: #FFFFFF;
    border: 1px solid #FF9900;
}

/* Termina Estilos para botón Guardar de vista Preguntas frecuentes */
/* Termina estilos para vista Peguntas frecuentes */

/* } */
@media (min-width: 768px) {

    /*Estilos plam*/
    /* inicia estilos para ventana modal editar */
    .tituloModal {
        color: #FF9900;
        font-family: 'OpenSans-Bold';
        font-size: 30px;
        text-align: center;
        /* fin de estilos para ventana modal editar */
    }

    .columnaUno {
        width: 20%;
    }

    .columnaDos {
        width: 30%;
    }

    .card-title {
        font-family: 'OpenSans-Bold';
        font-size: 15px;
        Color: #707070;
    }

    .card-text {
        font-family: 'OpenSans-Bold';
        font-size: 15px;
        Color: #707070;
    }

    .card-text small.text-muted {
        font-family: 'OpenSans-Bold';
        font-size: 15px;
        Color: #707070;
    }

    .card {
        max-width: 640px;
    }

    /*Estilos plam*/
}

@media (min-width: 1200px) {
    .btnDudas {
        font-family: 'Segoe-UI-Bold';
        font-size: 30px;
        /* height: 40px; */
        background-color: #1155CC;
        color: #FFFFFF;
        width: 700px;
        height: 60px;
    }

    .btnDudas span {
        font-family: 'Segoe-UI-Bold';
        font-size: 30px;
        /* height: 40px; */
        background-color: #1155CC;
        color: #FFFFFF;
    }

    .columnaBtnDudas {
        /*  display: flex; */
        text-align: right;
    }

    .filaDosPermisos {
        padding-top: 150px;
    }

    .parrafoDevice {
        content: 'aplicación movil';
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
        font-family: 'OpenSans-Regular';
        color: #FF7700;
        font-size: 20px;
    }

    .parrafoRecordaViaWhat span {
        font-family: 'OpenSans-Bold';
        color: #FF7700;
        font-size: 20px;
    }

    .textoSwitchAcepto {
        font-family: 'OpenSans-SemiBold';
        color: #1155CC;
        font-size: 20px;
    }

    .parrafoCheckLeido {
        font-family: 'OpenSans-Regular';
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
        font-family: 'Segoe-UI-Bold';
        font-size: 30px;
        /* height: 40px; */
        background-color: #1155CC;
        color: #FFFFFF;
        width: 700px;
        height: 60px;
    }

    .btnDudas span {
        font-family: 'Segoe-UI-Bold';
        font-size: 30px;
        /* height: 40px; */
        background-color: #1155CC;
        color: #FFFFFF;
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
        color: #FF9900;
        font-family: 'OpenSans-Bold';
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
        font-family: 'OpenSans-Bold';
        font-size: 20px;
        color: #707070;
    }

    .parrafoFechaEstudio {
        font-family: 'OpenSans-Bold';
        font-size: 20px;
        color: #707070;
    }

    .parrafoFechaEstudio span {
        font-family: 'OpenSans-Regular';
        font-size: 20px;
        color: #707070;
    }

    .parrafoHoraEstudio {
        font-family: 'OpenSans-Bold';
        font-size: 20px;
        color: #707070;
    }

    .parrafoHoraEstudio span {
        font-family: 'OpenSans-Regular';
        font-size: 20px;
        color: #707070;
    }

    .parrafoPrimerToma {
        font-family: 'OpenSans-Bold';
        font-size: 20px;
        color: #707070;
    }

    .parrafoFechaPrimerToma {
        font-family: 'OpenSans-Bold';
        font-size: 20px;
        color: #707070;
    }

    .parrafoFechaPrimerToma span {
        font-family: 'OpenSans-Regular';
        font-size: 20px;
        color: #707070;
    }

    .parrafoHoraPrimerToma {
        font-family: 'OpenSans-Bold';
        font-size: 20px;
        color: #707070;
    }

    .parrafoHoraPrimerToma span {
        font-family: 'OpenSans-Regular';
        font-size: 20px;
        color: #707070;
    }

    .parrafoSegundaToma {
        font-family: 'OpenSans-Bold';
        font-size: 20px;
        color: #707070;
    }

    .parrafoFechaSegundaToma {
        font-family: 'OpenSans-Bold';
        font-size: 20px;
        color: #707070;
    }

    .parrafoFechaSegundaToma span {
        font-family: 'OpenSans-Regular';
        font-size: 20px;
        color: #707070;
    }

    .parrafoHoraSegundaToma {
        font-family: 'OpenSans-Bold';
        font-size: 20px;
        color: #707070;
    }

    .parrafoHoraSegundaToma span {
        font-family: 'OpenSans-Regular';
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
        color: #FF9900;
        font-family: 'OpenSans-Bold';
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
        font-family: 'OpenSans-Regular';
        font-size: 20px;
        text-align: justify;
        /*  margin: 10px 10px 10px 10px; */
        /* padding: 10px 10px; */
    }

    /* Termina estilos para parrafo Nos interesa saber */

    /* Inician Estilos para botón Guardar de vista Preguntas frecuentes*/
    .btnGuardarPregFrec {
        font-family: 'OpenSans-SemiBold';
        font-size: 20px;
        width: 100%;
        /* height: 50px; */
        color: #FFFFFF;
        border: none;
        background-color: #FF9900;
        text-decoration: none;
    }

    .btnGuardarPregFrec:hover {
        font-family: 'OpenSans-SemiBold';
        font-size: 20px;
        width: 100%;
        /* height: 50px; */
        color: #FF9900;
        border: none;
        background-color: #FFFFFF;
        border: 1px solid #FF9900;
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
    font-family: 'OpenSans-Regular';
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
