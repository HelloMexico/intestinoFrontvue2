<template>
    <div class="container">
        <div class="row">
            <div class="col-xl-6 col-sm-6 col-md-6">
            </div>
            <div class="col-xl-6 col-sm-6 col-md-6">
                <h1 class="tituloPrincipal text-center">Intestino Limpio</h1>
            </div>
        </div>
        <div class="row">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-sm-6 col-md-6 text-center">
                        <img src="../assets/img/web/Enmascarar grupo 2.png" class="img-fluid" alt="no hay imagen">
                    </div>
                    <div class="col-xl-6 col-sm-6 col-md-6">
                        <!-- eslint-disable-next-line max-len -->
                        <p class="m-2 parrafoUno">Mantenga un <span>intestino limpio,</span> previo a los estudios de
                            Rayos X, colonoscopia o cirugías..</p>
                        <!-- eslint-disable-next-line max-len -->
                        <p id="" class="m-2 parrafoNuestra">Con el sitio de Intestino Limpio usted podrá
                            programar el horario del estudio y recibir
                            notificaciones cuando sea la hora de toma del
                            medicamento o de hidratación. Facilitando el apego
                            al tratamiento.</p>
                        <!-- eslint-disable-next-line max-len -->
                        <p class="m-2 parrafoGenera">Para generar tu programación de toma de medicamento, llena los
                            siguientes campos: <span>(Todos los campos son obligatorios)</span></p>
                        <!-- eslint-disable-next-line max-len -->
                        <p class="m-2 parrafoCreaPlanToma">Si ya creó su plan antes, dé clic en iniciar sesión.
                        </p>
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <!-- eslint-disable-next-line max-len -->
                                    <div class="accordion accordion-flush" id="accordionFlushExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingOne">
                                                <!-- eslint-disable-next-line max-len -->
                                                <button class="btnInicia rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    INICIAR SESIÓN
                                                </button>
                                            </h2>
                                            <!-- eslint-disable-next-line max-len -->
                                            <div id="flush-collapseOne" class="accordion-collapse collapse"
                                                aria-labelledby="flush-headingOne"
                                                data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">
                                                    <!-- eslint-disable-next-line max-len -->
                                                    <form name="formulario" id="formulario" action="crearPlan.html" method="post">
                                                        <div class="col-12 col-md-12">
                                                            <!-- eslint-disable-next-line max-len -->
                                                            <label for="telefono">
                                                            <input type="tel" class="form-control" name="telefono" id="telefono" onkeypress="return validateKey(event);" placeholder="Número de celular">
                                                            <p class="mensajes mt-2" id="mensajes" style="color:red;"></p>
                                                        </label>
                                                        </div>
                                                        <div class="col-xl-12 col-md-6">
                                                            <div class="main">
                                                                <div class="password-container">
                                                                    <!-- eslint-disable-next-line max-len -->
                                                                    <div class="password form-group" id="password3">
                                                                        <label for="claveAcceso">
                                                                        <input type="password" class="form-control" id="claveAcceso" placeholder="Clave de acceso" name="password">
                                                                        <span class="span"></span>
                                                                        <p class="mensajeses mt-2" id="mensajeses" style="color:red;"></p>
                                                                        <p class="mensajesesver mt-2" id="mensajesesver" style="color: green;"></p>
                                                                    </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-12 col-md-6">
                                                            <div style="display: flex; flex-direction: row-reverse;">
                                                                <a href="" target="_blank"
                                                                    style="font-family: 'OpenSans-Bold'; color: #1155CC;">
                                                                    <u>Olvidé mi
                                                                        contraseña</u></a>
                                                            </div>
                                                        </div>
                                                        <br>
                                                        <div class="col-xl-12 col-md-6">
                                                            <div class="contenidoCentrado">
                                                                <div
                                                                    style="display: flex; flex-direction: row-reverse;">
                                                                    <input type="submit" value="CONTINUAR"
                                                                        class="btnContinuar rounded">
                                                                </div>
                                                                <br>
                                                            </div>
                                                        </div>
                                                        <br>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <p id="parrafoGeneraProgramacion" class="parrafoGeneraProgramacion">Para crear
                                            un plan de tomas por primera vez:</p>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="flush-headingTwo">
                                                <button class=" btnCrearPlan rounded collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                                    aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    CREAR PLAN POR PRIMERA VEZ
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                                aria-labelledby="flush-headingTwo"
                                                data-bs-parent="#accordionFlushExample">
                                                <div class="accordion-body">
                                                    <div class="container">
                                                        <form name="formulario2" id="formulario2"
                                                            action="crearPlan.html" method="post">
                                                            <div class="row">
                                                                <div class="col-md-12 mb-3">
                                                                    <select class="form-select" id="select_pais"
                                                                        aria-label="Default select example">
                                                                        <option value="" selected="selected">Seleccione
                                                                            un país</option>
                                                                        <option value="mx">Mexico</option>
                                                                        <option value="cr">Costa rica</option>
                                                                    </select>
                                                                    <p class="mensaje_pais mt-2" id="mensaje_pais"
                                                                        style="color:red;">
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-4 mb-3">
                                                                    <select class="form-select" id="select_lada"
                                                                        aria-label="Default select example">
                                                                        <option value="" selected="selected">Lada
                                                                        </option>
                                                                        <option id="optionMX" value="1">+52</option>
                                                                        <option id="optionCR" value="2">+506</option>
                                                                    </select>
                                                                    <p class="mensaje_lada mt-2" id="mensaje_lada"
                                                                        style="color:red;"></p>
                                                                </div>
                                                                <div class="col-8 mb-3">
                                                                    <label for="telefonoCel">
                                                                    <input type="text" class="form-control"
                                                                        name="telefono" id="telefonoCel"
                                                                        onkeypress="return validateKey(event);"
                                                                        placeholder="Telefono celular">
                                                                    <p class="mensaje_telfono mt-2" id="mensaje_telfono"
                                                                        style="color:red;">
                                                                    </p>
                                                                </label>
                                                                </div>
                                                            </div>
                                                            <div class="col-12 mb-3">
                                                                <label for="select_estad">
                                                                <select class="form-select" id="select_estado"
                                                                    name="select_estado">
                                                                    <option value="#">Seleccione un
                                                                        estado</option>
                                                                </select>
                                                                <p class="mensaje_estado mt-2" id="mensaje_estado"
                                                                    style="color:red;">
                                                                </p>
                                                            </label>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-5 mb-3">
                                                                    <label for="input_ciudad">
                                                                    <input type="text" class="form-control" name=""
                                                                        id="input_ciudad" placeholder="Ciudad">
                                                                    <p class="mensaje_ciudad mt-2" id="mensaje_ciudad"
                                                                        style="color:red;"></p>
                                                                    </label>
                                                                </div>
                                                                <div class="col-7">
                                                                    <div class="row ms-1">
                                                                        <div class="col-6 col-md-7">
                                                                            <label for="input_edad"
                                                                                class=" col-sm-8 col-form-label mb-1 labelEdad">Edad
                                                                                del paciente: </label>
                                                                        </div>
                                                                        <div class="col-6 col-md-5">
                                                                            <input name="edad" class="form-control"
                                                                                id="input_edad"
                                                                                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                                                                type="number" maxlength="3">
                                                                            <p class="mensaje_edad mt-2"
                                                                                id="mensaje_edad" style="color:red;"></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-12 mb-3">
                                                                    <label for="input_peso">
                                                                    <input name="peso" class="form-control"
                                                                        id="input_peso" placeholder="Peso del paciente"
                                                                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                                                        type="number" maxlength="3">
                                                                    <p class="mensaje_peso mt-2" id="mensaje_peso"
                                                                        style="color:red;"></p>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-12 mb-3">
                                                                <label for="inputNomMedTrat">
                                                                    <input type="text" width="" class="form-control"
                                                                        id="inputNomMedTrat"
                                                                        placeholder="Nombre de tu médico tratante"
                                                                        maxlength="90" minlength="80">
                                                                    <p class="mensaje_nomMedTrat mt-2" id="mensaje_nomMedTrat"
                                                                        style="color:red;"></p>
                                                                    </label>
                                                                </div>
                                                            </div>

                                                            <div class="col-12 mb-3">
                                                                <label for="inputApeMedTrat">
                                                                <input type="text" width="" class="form-control"
                                                                    id="inputApeMedTrat" name="inputApeMedTrat"
                                                                    placeholder="Apellido de tu médico tratante"
                                                                    maxlength="90" minlength="80">
                                                                <p class="mensaje_apeMedTrat mt-2" id="mensaje_apeMedTrat"
                                                                    style="color:red;"></p>
                                                                </label>
                                                            </div>

                                                            <div class="col-12 mb-3">
                                                                <div class="main">
                                                                    <div class="password-container">
                                                                        <div class="password form-group" id="password1">
                                                                            <label for="pswd">
                                                                            <input class="form-control" type="password"
                                                                                name="pswd" value="" id="pswd"
                                                                                placeholder="Escriba una clave de acceso">
                                                                            <span class="span"></span>
                                                                            <p id="message" style="color:red"></p>
                                                                            <p class="mensaje_clave mt-2"
                                                                                id="mensaje_clave" style="color:red;">
                                                                            </p>
                                                                        </label>
                                                                        </div>
                                                                        <div class="password form-group" id="password2">
                                                                            <label for="conpsw">
                                                                            <input class="form-control" type="password"
                                                                                name="conpsw" value="" id="conpsw"
                                                                                placeholder="Confirma su clave de acceso">
                                                                            <span class="span"></span>
                                                                            <p class="mensaje_confirClave mt-2"
                                                                                id="mensaje_confirClave"
                                                                                style="color:red"></p>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col">
                                                                <p class="parrafoRecordaViaWhat">Para recibir
                                                                    recordatorios
                                                                    <span>vía whatsapp</span> sobre la toma
                                                                    de medicamento y la hidratación, es importante
                                                                    autorizar la recepción de los recordatorios por este
                                                                    medio, dando clic en la casilla de abajo.
                                                                </p>
                                                            </div>

                                                            <div class="form-check form-switch">
                                                                <label for="flexSwitchCheckDefault">
                                                                <input class="form-check-input" type="checkbox"
                                                                    role="switch" id="flexSwitchCheckDefault" checked aria-checked="">
                                                                <label class="form-check-label textoSwitchAcepto"
                                                                    for="fkyu">Acepto
                                                                    recibir recordatorios
                                                                    vía
                                                                    WhatsApp
                                                                </label>
                                                            </label>
                                                            </div>
                                                            <div class="form-check">
                                                                <label for="flexRadioDefault">
                                                                    <input class="form-check-input" type="checkbox"
                                                                    name="flexRadioDefault" id="flexRadioDefault1"
                                                                    checked>
                                                                </label>
                                                                <label class="form-check-label parrafoCheckLeido">He leído y acepto los <a href=""> términos,condiciones</a> y
                                                                    el <a href="">aviso de privacidad</a>
                                                                </label>
                                                            </div>
                                                            <div class="contenidoCentrado">
                                                                <a style="cursor: pointer;" id="btnContinuarForm" class="btnContinuar rounded">Continuar</a>
                                                                <!-- eslint-disable-next-line max-len -->
                                                                <input class="btnContinuar rounded" type="submit" value="CONTINUAR">
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
export default {
  name: 'NavBar',
  props: {
    msg: String,
  },
};
</script>



  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
