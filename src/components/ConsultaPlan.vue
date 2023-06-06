<template>
    <!-- <h1 class="text-center">Aqui se esta usando el componente de Crear plan</h1> -->
    <div class="container">
        <div class="container" id="ignoreContent">
            <br><br>
            <div class="row filaPlan">
                <div class="col-2 col-md-2">
                    <a type="button" class="btnFlecha" href="index.html">
                    </a>
                </div>
                <div class="col-10 col-md-10">
                    <h1 class="tituloPlanToma" id="tituloPlan">Plan de tomas e hidrataciones</h1>
                </div>
            </div>
            <div class="row filaPlanTabla">
                <div class="col-12 col-md-12 col-sm-12 text-center">
                    <img src="../assets/img/mobile/Recurso 23x.png" class="img-fluid imgNaranjinPlan" alt="...">
                </div>
            </div>
            <br>
            <!-- <div class="filaPlanTabla"> -->
            <div class="container contenedorMovil">
                <div class="row">
                    <div class="col-10">
                        <div class="container border border-secondary border-1 border-end-0">
                            <div class="row">
                                <div class="col col-md-5">
                                    <p class="parrafoEstudioProgramado">Estudio programado para: <span>Sin datos</span></p>
                                    <p class="parrafoFechaEstudio">Fecha: <span>Sin datos</span></p>
                                    <p class="parrafoHoraEstudio">Hora: <span>Sin datos</span></p>
                                    <p class="parrafoHoraEstudio">Hora: <span>Sin datos</span></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <p class="parrafoPrimerToma">Primera toma de Picoprep: <span>Sin datos</span> </p>
                                    <!-- <p class="parrafoFechaPrimerToma">Fecha: <span>24/08/2023</span></p> -->
                                    <p class="parrafoHoraPrimerToma">Hora: <span>Sin datos</span></p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <p class="parrafoSegundaToma">Segunda toma de Picoprep: <span>Sin datos</span> </p>
                                    <!-- <p class="parrafoFechaSegundaToma">Fecha: <span>25/08/2023</span></p> -->
                                    <p class="parrafoHoraSegundaToma">Hora: <span>Sin datos</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-2 col-md-4 col-sm-3 border"
                        style="display: flex; flex-direction: row; justify-content: center; align-items: center; background-color:  #F2F2F2; width: 50px;">
                        <a href="" type="button" class="btnEditarPlan" data-bs-toggle="modal"
                            data-bs-target="#exampleModalDos"></a>
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalDos" tabindex="-1" aria-labelledby="exampleModalLabelDos"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header" style="border: none;">

                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body" style="border: none;">
                                        <h1 class="modal-title tituloModal" id="exampleModalLabelUno">Editar plan de tomas e
                                            hidrataciones</h1>
                                        <form name="formulario3" id="formulario3" v-on:submit="validarHora">
                                            <!-- <div class="p-fluid grid formgrid">
                                                <div class="field col-12 md:col-4">
                                                    <label for="icon">Fecha de
                                                        estudio</label>
                                                    <Calendar id="icon" :locale="es" v-model="date3" :showIcon="true" />
                                                    <span class="error" style="color: red"
                                                        v-if="errors2.fechaEstudioColonos">{{
                                                            errors2.fechaEstudioColonos }}</span>
                                                </div>
                                            </div> -->
                                            <div class="mb-3">
                                                <label for="" class="form-label labelModalEditarFechaEstu">Fecha de
                                                    estudio</label>
                                                <!-- <input type="date" class="form-control inputLabelFechaModalEditarPlan" id="exampleInputEmail1"
                        aria-describedby="emailHelp"> -->
                                                <!-- <input type="date" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"> -->
                                                <div class="input-group">
                                                    <input type="date" class="form-control inputLabelFechaModalEditarPlan"
                                                        placeholder="18:00 Hrs" aria-label="Input group example"
                                                        aria-describedby="basic-addon1" id="inputLabelFechaModalEditarPlan"
                                                        v-model="fechaEstudioColonos">
                                                    <span class="input-group-text" id="basic-addon1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                                            <path
                                                                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <span class="error" style="color: red" v-if="errors2.fechaEstudioColonos">{{
                                                    errors2.fechaEstudioColonos }}</span>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1 labelModalEditarHoraColonos"
                                                    class="form-label">Hora de la
                                                    colonoscopía o estudio</label>
                                                <!-- <input type="time" class="form-control" id="exampleInputPassword1" placeholder="18:00 Hrs"> -->
                                                <div class="input-group">
                                                    <input type="time" class="form-control" placeholder="18:00 Hrs"
                                                        aria-label="Input group example" aria-describedby="basic-addon1" v-model="hora">
                                                    <span class="input-group-text" id="basic-addon1" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                                                            <path
                                                                d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                                            <path
                                                                d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <span class="error" style="color: red" v-if="errors2.hora ">{{ errors2.hora }}</span>
                    <span class="error" style="color: red" v-if="errors2.horaIngresada ">{{ errors2.horaIngresada  }}</span>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">Fecha de la primera
                                                    toma de Picoprep</label>
                                                <!-- <input type="date" class="form-control" id="exampleInputPassword1" placeholder="23/11/2022"> -->
                                                <div class="input-group">
                                                    <input type="date" class="form-control" placeholder="18:00 Hrs"
                                                        aria-label="Input group example" aria-describedby="basic-addon1">
                                                    <span class="input-group-text" id="basic-addon1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                                            <path
                                                                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <span class="error" style="color: red" v-if="errors2.fechaPrimerToma">{{
                                                    errors2.fechaPrimerToma
                                                }}</span>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">Hora de la primera
                                                    toma de Picoprep</label>
                                                <!-- <input type="time" class="form-control" id="exampleInputPassword1" placeholder="18:00 Hrs"> -->
                                                <div class="input-group">
                                                    <input type="time" class="form-control" placeholder="18:00 Hrs"
                                                        aria-label="Input group example" aria-describedby="basic-addon1"
                                                        v-model="horaPrimerToma">
                                                    <span class="input-group-text" id="basic-addon1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                                                            <path
                                                                d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                                            <path
                                                                d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <span class="error" style="color: red" v-if="errors2.horaPrimerToma">{{
                                                    errors2.horaPrimerToma
                                                }}</span>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">Fecha de la segunda
                                                    toma de Picoprep</label>
                                                <!-- <input type="date" class="form-control" id="exampleInputPassword1" placeholder="23/11/2022"> -->
                                                <div class="input-group">
                                                    <input type="date" class="form-control" placeholder="18:00 Hrs"
                                                        aria-label="Input group example" aria-describedby="basic-addon1"
                                                        v-model="fechaSegundaToma">
                                                    <span class="input-group-text" id="basic-addon1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                                            <path
                                                                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <span class="error" style="color: red" v-if="errors2.fechaSegundaToma">{{
                                                    errors2.fechaSegundaToma
                                                }}</span>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">Hora de la segunda
                                                    toma de Picoprepp</label>
                                                <!-- <input type="time" class="form-control" id="exampleInputPassword1" placeholder="22:00 Hrs"> -->
                                                <div class="input-group">
                                                    <input type="time" class="form-control" placeholder="18:00 Hrs"
                                                        aria-label="Input group example" aria-describedby="basic-addon1"
                                                        v-model="horaSegundaToma">
                                                    <span class="input-group-text" id="basic-addon1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                                                            <path
                                                                d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                                            <path
                                                                d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <span class="error" style="color: red" v-if="errors2.horaSegundaToma">{{
                                                    errors2.horaSegundaToma
                                                }}</span>
                                            </div>
                                            <div class="modal-footer" style="border: none;">
                                                <div class="container text-center">
                                                    <div class="row">
                                                        <div class="col-md-4 pb-4">
                                                            <button class="rounded btnGuardarModalPlan">GUARDAR</button>
                                                        </div>
                                                        <div class="col-md-4 offset-md-4">
                                                            <button type="button" class="rounded btnCancelarModalPlan"
                                                                data-bs-dismiss="modal">CANCELAR</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="row fila">
                <div class="col-xl-3 col-md-3 col-sm-2 border border-dark border-end-0 rounded-start"
                    style=" width: 415px;">
                    <p class="parrafoEstudioProgramado">Estudio programado para:</p>
                    <!-- <br> -->
                    <p class="parrafoFechaEstudio">Fecha: <span>Sin datos</span></p>
                    <p class="parrafoHoraEstudio">Hora: <!-- <span>18:00 hrs</span> --><span>Sin datos</span></p>
                </div>
                <div class="col-xl-3 col-md-3 col-sm-3 border border-dark border-end-0" style=" width: 415px;">
                    <p class="parrafoPrimerToma">Primera toma de Picoprep :</p>
                    <!-- <br> -->
                    <p class="parrafoFechaPrimerToma">Fecha: <span>Sin datos</span></p>
                    <p class="parrafoHoraPrimerToma">Hora: <span>Sin datos</span></p>
                </div>
                <div class="col-3 col-md-3 col-sm-3 border border-dark border-end-0" style=" width: 390px;">
                    <p class="parrafoSegundaToma">Segunda toma de Picoprep : Sin datos</p>
                    <!-- <br> -->
                    <p class="parrafoFechaSegundaToma">Fecha: <span>Sin datos</span></p>
                    <p class="parrafoHoraSegundaToma">Hora: <span>Sin datos</span></p>
                </div>
                <div class="col-xl-1 col-md-3 col-sm-2 border border-dark rounded-end"
                    style="background-color:  #F2F2F2; display: flex; flex-direction: row; justify-content: center; align-items: center; width: 65px;">
                    <!-- <a href="" type="button" class="btnEditarPlan" style="margin-top: 60px;"></a> -->
                    <a href="" type="button" class="btnEditarPlan" data-bs-toggle="modal"
                        data-bs-target="#exampleModal"></a>
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-content">
                                    <div class="modal-header" style="border: none;">

                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body" style="border: none;">
                                        <h1 class="modal-title tituloModal" id="exampleModalLabelUno">Editar plan de tomas e
                                            hidrataciones</h1>
                                        <form name="formulario" id="formularioEditar" v-on:submit="validarHora">
                                            <!-- <div class="p-fluid grid formgrid">
                                                <div class="field col-12 md:col-4">
                                                    <label for="icon">Fecha de
                                                        estudio</label>
                                                    <Calendar id="icon" style="" v-model="fechaEstudioColonos"
                                                        dateFormat="dd/mm/yy" :showIcon="true" />
                                                    <span class="error" style="color: red"
                                                        v-if="errors2.fechaEstudioColonos">{{
                                                            errors2.fechaEstudioColonos }}</span>
                                                </div>
                                                <div class="field col-12 md:col-4">
                                                    <label for="icon">Hora de la
                                                        colonoscopía o estudio</label>
                                                    <Calendar  style="" v-model="hora"
                                                    :showTime="true" hourFormat="12"  :showIcon="true" />
                                                    <span class="error" style="color: red" v-if="errors2.hora">{{
                                                        errors2.hora
                                                    }}</span>
                                                </div>
                                            </div> -->
                                            <div class="mb-3">
                                                <label for="" class="form-label labelModalEditarFechaEstu">Fecha de
                                                    estudio</label>
                                                <!-- <input type="date" class="form-control inputLabelFechaModalEditarPlan" id="exampleInputEmail1"
                        aria-describedby="emailHelp"> -->
                                                <!-- <input type="date" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"> -->
                                                <div class="input-group">
                                                    <input type="date" class="form-control inputLabelFechaModalEditarPlan"
                                                        placeholder="18:00 Hrs" aria-label="Input group example"
                                                        v-model="fechaEstudioColonos" aria-describedby="basic-addon1"
                                                        id="inputLabelFechaModalEditarPlan">
                                                    <span class="input-group-text" id="basic-addon1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                                            <path
                                                                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <span class="error" style="color: red" v-if="errors2.fechaEstudioColonos">{{
                                                    errors2.fechaEstudioColonos }}</span>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1 labelModalEditarHoraColonos"
                                                    class="form-label">Hora de la
                                                    colonoscopía o estudio</label>
                                                <!-- <input type="time" class="form-control" id="exampleInputPassword1" placeholder="18:00 Hrs"> -->
                                                <div class="input-group">
                                                    <input type="time" class="form-control" placeholder="18:00 Hrs"
                                                        aria-label="Input group example" aria-describedby="basic-addon1"
                                                        v-model="hora">
                                                    <span class="input-group-text" id="basic-addon1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                                                            <path
                                                                d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                                            <path
                                                                d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <span class="error" style="color: red" v-if="errors2.hora">{{ errors2.hora
                                                }}</span>
                                                <span class="error" style="color: red" v-if="errors2.horaIngresada">{{
                                                    errors2.horaIngresada }}</span>
                                                <p>Hora actual: {{ this.horaActual }}</p>

                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">Fecha de la primera
                                                    toma de Picoprep</label>
                                                <!-- <input type="date" class="form-control" id="exampleInputPassword1" placeholder="23/11/2022"> -->
                                                <div class="input-group">
                                                    <input type="date" class="form-control" placeholder="18:00 Hrs"
                                                        aria-label="Input group example" aria-describedby="basic-addon1"
                                                        v-model="horaPrimerToma">
                                                    <span class="input-group-text" id="basic-addon1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                                            <path
                                                                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <span class="error" style="color: red" v-if="errors2.horaPrimerToma">{{
                                                    errors2.horaPrimerToma
                                                }}</span>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">Hora de la primera
                                                    toma de Picoprep</label>
                                                <!-- <input type="time" class="form-control" id="exampleInputPassword1" placeholder="18:00 Hrs"> -->
                                                <div class="input-group">
                                                    <input type="time" class="form-control" placeholder="18:00 Hrs"
                                                        aria-label="Input group example" aria-describedby="basic-addon1"
                                                        v-model="horaPrimerToma">
                                                    <span class="input-group-text" id="basic-addon1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                                                            <path
                                                                d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                                            <path
                                                                d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <span class="error" style="color: red" v-if="errors2.horaPrimerToma">{{
                                                    errors2.horaPrimerToma
                                                }}</span>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">Fecha de la segunda
                                                    toma de Picoprep</label>
                                                <!-- <input type="date" class="form-control" id="exampleInputPassword1" placeholder="23/11/2022"> -->
                                                <div class="input-group">
                                                    <input type="date" class="form-control" placeholder="18:00 Hrs"
                                                        aria-label="Input group example" aria-describedby="basic-addon1"
                                                        v-model="fechaSegundaToma">
                                                    <span class="input-group-text" id="basic-addon1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                                            <path
                                                                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <span class="error" style="color: red" v-if="errors2.fechaSegundaToma">{{
                                                    errors2.fechaSegundaToma
                                                }}</span>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">Hora de la segunda
                                                    toma de Picoprepp</label>
                                                <!-- <input type="time" class="form-control" id="exampleInputPassword1" placeholder="22:00 Hrs"> -->
                                                <div class="input-group">
                                                    <input type="time" class="form-control" placeholder="18:00 Hrs"
                                                        aria-label="Input group example" aria-describedby="basic-addon1"
                                                        v-model="horaSegundaToma">
                                                    <span class="input-group-text" id="basic-addon1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                                                            <path
                                                                d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                                            <path
                                                                d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <span class="error" style="color: red" v-if="errors2.horaSegundaToma">{{
                                                    errors2.horaSegundaToma
                                                }}</span>
                                            </div>
                                            <div class="modal-footer" style="border: none;">
                                                <div class="container text-center">
                                                    <div class="row">
                                                        <div class="col-md-4 pb-4">
                                                            <button class="rounded btnGuardarModalPlan">GUARDAR</button>
                                                        </div>
                                                        <div class="col-md-4 offset-md-4">
                                                            <button type="button" class="rounded btnCancelarModalPlan"
                                                                data-bs-dismiss="modal">CANCELAR</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1"
                        aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header" style="border: none;">

                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body" style="border: none;">
                                    <h1 class="modal-title tituloModal" id="exampleModalLabel1">Editar plan de tomas e
                                        hidrataciones</h1>
                                    <form>
                                        <div class="mb-3">
                                            <label for="" class="form-label labelModalEditarFechaEstu">Fecha de
                                                estudio</label>
                                            <input type="date" class="form-control inputLabelFechaModalEditarPlan"
                                                id="exampleInputEmail11" aria-describedby="emailHelp">
                                            <!-- <input type="date" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"> -->
                                        </div>
                                        <div class="mb-3">
                                            <label for="labelModalEditarHoraColonos" class="form-label">Hora de la
                                                colonoscopía o
                                                estudio</label>
                                            <input type="time" class="form-control inputLabelFechaModalEditarPlan"
                                                id="exampleInputPassword1" placeholder="18:00 Hrs">
                                        </div>
                                        <div class="mb-3">
                                            <label for="1" class="form-label">Fecha de la primera toma de Picoprep</label>
                                            <input type="date" class="form-control inputLabelFechaModalEditarPlan" id="">
                                        </div>
                                        <div class="mb-3">
                                            <label for="" class="form-label">Hora de la primera toma de Picoprep</label>
                                            <input type="submit" class="form-control inputLabelFechaModalEditarPlan" id="">
                                        </div>
                                        <div class="mb-3">
                                            <label for="" class="form-label">Fecha de la segunda toma de Picoprep</label>
                                            <input type="date" class="form-control" id="">
                                        </div>
                                        <div class="mb-3">
                                            <label for="" class="form-label">Hora de la segunda toma de Picoprep</label>
                                            <input type="time" class="form-control" id="">
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer" style="border: none;">
                                    <div class="container text-center">
                                        <div class="row">
                                            <div class="col-md-4 pb-4">
                                                <button type="button" class="rounded btnGuardarModalPlan"
                                                    data-bs-dismiss="modal">GUARDAR</button>
                                            </div>
                                            <div class="col-md-4 pb-4">
                                                <button type="button" class="rounded btnGuardarModalPlan"
                                                    data-bs-dismiss="modal">GUARDAR</button>
                                            </div>
                                            <div class="col-md-4 offset-md-4">
                                                <button type="button" class="rounded btnCancelarModalPlan">CANCELAR</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- </div> -->
        </div>
        <!-- </div> -->

        <br>
        <div class="container" id="element-to-convert">
            <div class="row">
                <div class="col-1 col-md-3 col-sm-5 text-center columnaUno">
                    <img src="../assets/img/web/681332-300-300 1_2.png" class="imgMediPicoprep" alt="..." width="">
                </div>
                <div class="col-6 col-md-3 col-sm-5 columnaDos">
                    <!-- <div class="card mb-3" style="max-width: 640px;"> -->
                    <div class="card mb-3">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card-body" id="cardUno">
                                    <h5 class="card-title">Primera toma de PICOPREP®️:</h5>
                                    <p class="card-text">Fecha: Sin datos</p>
                                    <p class="card-text">Hora: Sin datos</p>
                                    <p class="card-text"><small class="text-muted">Disolver en 150ml</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-1 col-md-3 col-sm-3 text-center columnaUno">
                    <img src="../assets/img/web/vaso-de-agua (2).png" class="imgVasoAgua" alt="..." width="">
                </div>
                <div class="col-5 col-md-3 col-sm-3 columnaDos">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-12">
                                <div class="card-body">
                                    <h5 class="card-title">Hidratación con 250 ml de agua:</h5>
                                    <p class="card-text">Fecha: Sin datos</p>
                                    <p class="card-text"><small class="text-muted">Hora: Sin datos</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-1 col-md-3 col-sm-3 text-center columnaUno">
                    <img src="../assets/img/web/vaso-de-agua (2).png" class="imgVasoAgua" alt="..." width="">
                </div>
                <div class="col-xl-5 col-md-3 col-sm-3 columnaDos">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-12">
                                <div class="card-body">
                                    <h5 class="card-title">Hidratación con 250 ml de agua:</h5>
                                    <p class="card-text">Fecha: Sin datos</p>
                                    <p class="card-text"><small class="text-muted">Hora: Sin datos</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-1 col-md-3 col-sm-3 text-center columnaUno">
                    <img src="../assets/img/web/vaso-de-agua (2).png" class="imgVasoAgua" alt="..." width="">
                </div>
                <div class="col-xl-5 col-md-3 col-sm-3 columnaDos">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-12">
                                <div class="card-body">
                                    <h5 class="card-title">Hidratación con 250 ml de agua:</h5>
                                    <p class="card-text">Fecha: Sin datos</p>
                                    <p class="card-text"><small class="text-muted">Hora: Sin datos</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-1 col-md-3 col-sm-3 text-center columnaUno">
                    <img src="../assets/img/web/vaso-de-agua (2).png" class="imgVasoAgua" alt="..." width="">
                </div>
                <div class="col-xl-5 col-md-3 col-sm-3 columnaDos">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-12">
                                <div class="card-body">
                                    <h5 class="card-title">Hidratación con 250 ml de agua:</h5>
                                    <p class="card-text">Fecha: Sin datos</p>
                                    <p class="card-text"><small class="text-muted">Hora: Sin datos</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-1 col-md-3 col-sm-3 text-center columnaUno">
                    <img src="../assets/img/web/vaso-de-agua (2).png" class="imgVasoAgua" alt="..." width="">
                </div>
                <div class="col-xl-5 col-md-3 col-sm-3 columnaDos">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-12">
                                <div class="card-body">
                                    <h5 class="card-title">Hidratación con 250 ml de agua:</h5>
                                    <p class="card-text">Fecha: Sin datos</p>
                                    <p class="card-text"><small class="text-muted">Hora: Sin datos</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-1 col-md-3 col-sm-3 text-center columnaUno">
                    <img src="../assets/img/web/681332-300-300 1_2.png" class="imgMediPicoprep" alt="..." width="">
                </div>
                <div class="col-xl-5 col-md-3 col-sm-2 columnaDos">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-12">
                                <div class="card-body">
                                    <h5 class="card-title">Segunda toma de PICOPREP®️:</h5>
                                    <p class="card-text">Fecha: Sin datos</p>
                                    <p class="card-text">Hora: Sin datos</p>
                                    <p class="card-text"><small class="text-muted">Disolver en 150ml</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-1 col-md-3 col-sm-3 text-center columnaUno">
                    <img src="../assets/img/web/vaso-de-agua (2).png" class="imgVasoAgua" alt="..." width="">
                </div>
                <div class="col-xl-5 col-md-3 col-sm-3 columnaDos">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-12">
                                <div class="card-body">
                                    <h5 class="card-title">Hidratación con 250 ml de agua:</h5>
                                    <p class="card-text">Fecha: Sin datos</p>
                                    <p class="card-text"><small class="text-muted">Hora: Sin datos</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-1 col-md-3 col-sm-3 text-center columnaUno">
                    <img src="../assets/img/web/vaso-de-agua (2).png" class="imgVasoAgua" alt="..." width="">
                </div>
                <div class="col-xl-5 col-md-3 col-sm-3 columnaDos">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-12">
                                <div class="card-body">
                                    <h5 class="card-title">Hidratación con 250 ml de agua:</h5>
                                    <p class="card-text">Fecha: Sin datos</p>
                                    <p class="card-text"><small class="text-muted">Hora: Sin datos</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-1 col-md-3 col-sm-3 text-center columnaUno">
                    <img src="../assets/img/web/vaso-de-agua (2).png" class="imgVasoAgua" alt="..." width="">
                </div>
                <div class="col-xl-5 col-md-3 col-sm-3 columnaDos">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-12">
                                <div class="card-body">
                                    <h5 class="card-title">Hidratación con 250 ml de agua:</h5>
                                    <p class="card-text">Fecha: Sin datos</p>
                                    <p class="card-text"><small class="text-muted">Hora: Sin datos</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
        </div>
        <div class="container">
            <div class="row">
                <div class="col align-self-center">
                    <div class="contenidoCentrado">
                        <!-- <a href="javascript:genPDF()">DESCARGAR PLAN</a>
          <button type="submit" class="btnDescargaPlan rounded" href="javascript:genPDF()">DESCARGAR PLAN</button> -->
                        <!-- <button class="btnDescargaPlan rounded" id="gpdf">DESCARGAR PLAN</button> -->
                        <button class="btnDescargaPlan rounded" @click="descargarPdf()">DESCARGAR PLAN</button>
                        <br><br>

                    </div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-7 col-md-3 col-sm-12">
                                <div class="form-check m-auto">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Dejar de recibir notificaciones
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="contenidoCentrado">
                        <!-- Button trigger modal -->
                        <button type="button" class="rounded" style="font-family: 'Segoe-UI-Bold';
                                    font-size: 18px;
                                    background-color: #1155CC;
                                    border: 1px solid #1155CC;
                                    color: #FFFFFF;
                                    width: 250px;
                                    width: 65%;
                                    height: 30px;" data-bs-toggle="modal" data-bs-target="#exampleModalVer">
                            REFERENCIA MÉDICA
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalVer" tabindex="-1" aria-labelledby="exampleModalLabelVer"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header" style="border: none;">
                                        <h1 class="modal-title fs-5"
                                            style="color: #FF9900; font-family: 'OpenSans-Bold'; font-size: 25px; align-items: center;"
                                            id="exampleModalLabelVer">Referencia Médica</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam est accusamus
                                        officia, delectus
                                        corrupti architecto, iure, repellendus vero praesentium quidem sed blanditiis saepe
                                        fugit perferendis
                                        velit quos incidunt et nisi?
                                        Aliquam rerum facilis temporibus perspiciatis ipsa, similique nostrum ullam
                                        dignissimos assumenda id
                                        quia numquam consequuntur voluptatum mollitia, corporis modi. Quis alias nostrum
                                        facere itaque
                                        molestiae, impedit quaerat cupiditate sunt iure?
                                        Temporibus, laboriosam. Error consequuntur, recusandae nesciunt illum inventore
                                        deserunt obcaecati
                                        officiis corrupti magni possimus velit, illo tempora, quaerat distinctio voluptate
                                        pariatur quas
                                        necessitatibus. Explicabo perspiciatis reprehenderit, iste perferendis distinctio
                                        consectetur.
                                        Deserunt pariatur facilis eius reprehenderit quasi voluptatibus temporibus velit aut
                                        nulla veniam
                                        harum vero eaque provident sint tenetur doloremque fugit, voluptate quisquam sunt
                                        neque unde quae
                                        deleniti ipsa dolores! Itaque.
                                        Pariatur molestiae atque facere, sunt cupiditate ad praesentium provident tenetur
                                        quas perspiciatis?
                                        Quam dignissimos sit similique facilis numquam quos suscipit dolore mollitia laborum
                                        accusamus.
                                        Ratione, optio! Deleniti a quam nostrum?
                                    </div>
                                    <div class="modal-footer" style="border: none;">
                                        <!-- <button type="button" class="btn btn-primary">GUARDAR</button>
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">CANCELAR</button> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br><br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- <script type="text/javascript" src="../js/jspdf.min.js"></script> -->
<script>
import moment from 'moment';

import html2pdf from 'html2pdf.js';

export default {
    name: 'ConsultaPlan',
    props: {
        msg: String,
    },
    created() {
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month - 1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);

        let invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);
        this.invalidDates = [today, invalidDate];
    },
    data() {
        return {
            fecha1: "",
            fecha2: "",
            hora1: "",
            hora2: "",
            errors2: {},

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

            time: '',
            es: {
                firstDayOfWeek: 1,
                dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
                dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
                dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
                monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                today: 'Hoy',
                clear: 'Borrar',
                weekHeader: 'Sm'
            },
        };
    },
    methods: {
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
                this.errors2.fecha2 =
                    "La fecha dos debe ser posterior a la fecha uno";
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
                this.errors2.hora2 =
                    "La hora dos debe ser posterior a la hora uno";
                valid2 = false;
            }

            // Si todos los campos son válidos, enviar el formulario
            if (valid2) {
                alert("Los datoa del formulario se enviaron correctamente");
                // Aquí puedes hacer lo que quieras con los datos del formulario, como enviarlos a una base de datos o a una API
            }
        },
        validarHora: function (event) {
            this.errors2 = {};
            // Aquí irá el código para validar la hora ingresada y la hora actual
            event.preventDefault();
            let valida = true;
            const fechaActual = this.fechaActual ? moment(this.fechaActual, 'YYYY-MM-DD') : '';
            const horaIngresada = this.hora ? moment(this.hora, "HH:mm") : '';
            const horaActual = this.horaActual ? moment(this.horaActual, "HH:mm") : '';
            //Valida que el campo fecha colonoscopia no este vació y sea una fechs
            console.log(moment(this.fechaEstudioColonos).isSame(fechaActual));


            if (!this.fechaEstudioColonos) {
                this.errors2.fechaEstudioColonos =
                    "La fecha de la colonoscopia es obligatoria";
                valida = false;
            } else if (!moment(this.fechaEstudioColonos).isSameOrAfter(fechaActual)) {
                this.errors2.fechaEstudioColonos =
                    "La fecha de la colonoscopia debe ser posterior ala fecha actual y hora actual";
                valida = false;
            }

            if (horaIngresada === '') {
                this.errors2.horaIngresada = "La hora de la colonoscopia es obligatoria";
                valida = false;

            } else if (horaIngresada.isBefore(horaActual, 'hour')) {
                this.errors2.horaIngresada = "La hora de la colonoscopia debe ser posterior a la hora actual";
                valida = false;
            }
            else {
                delete this.errors2['horaIngresada'];
                /* this.errors2.horaIngresada = "La hora es obligatoria"; */
            }

            // Validar que el campo fecha de la primer toma no esté vacío y sea una fecha válida
            if (!this.fechaPrimerToma) {
                this.errors2.fechaPrimerToma =
                    "La fecha de la primer toma es obligatoria";
                valida = false;
            } else if (!moment(this.fechaPrimerToma, "YYYY-MM-DD", true).isValid()) {
                this.errors2.fechaPrimerToma =
                    "La fecha de la primer toma no es válida";
                valida = false;
            } else if (moment(this.fechaPrimerToma).isAfter(this.fechaEstudioColonos)) {
                this.errors2.fechaPrimerToma =
                    "La fecha de la primer toma debe ser antes a la fecha de la colonoscopia";
                valida = false;
            }
            else if (moment(this.fechaPrimerToma).isSame(this.fechaEstudioColonos)) {
                this.errors2.fechaPrimerToma =
                    "La fecha de la primer toma debe ser antes a la fecha de la colonoscopia";
                valida = false;
            } else if (moment(this.fechaPrimerToma).isAfter(fechaActual)) {
                this.errors2.fechaPrimerToma =
                    "La fecha de la primer toma debe ser posterior a la fecha actual";
                valida = false;
            }/* else if (moment(fechaActual).isAfter(this.fechaPrimerToma)) {
                this.errors2.fechaPrimerToma = "La fecha de la primer toma debe ser posterior a la fecha y hora actual";
            } */
            /* else {
              delete this.errors2['fechaPrimerToma'];
      
            } */

            // Validar que el campo fecha de la segunda toma no esté vacío y sea una fecha válida
            if (!this.fechaSegundaToma) {
                this.errors2.fechaSegundaToma =
                    "La fecha de la segunda toma es obligatoria";
                valida = false;
            } else if (!moment(this.fechaSegundaToma, "YYYY-MM-DD", true).isValid()) {
                this.errors2.fechaSegundaToma =
                    "La fecha de la segunda toma no es válida";
                valida = false;
            } else if (moment(this.fechaPrimerToma).isSameOrAfter(this.fechaSegundaToma)) {
                this.errors2.fechaSegundaToma =
                    "La fecha de la segunda toma  debe ser posterior a la fecha de la primer toma";
                valida = false;
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
            // Validar que el campo hora uno no esté vacío y sea una hora válida
            let horaIng = moment(horaIngresada, "HH:mm")
            let horaAct = moment(horaActual, "HH:mm") // 22:00
            if (!this.horaPrimerToma) {
                this.errors2.horaPrimerToma =
                    "La hora de la primer toma es obligatoria";
                valida = false;

            } /* else if (!moment(this.horaPrimerToma, "HH:mm", true).isValid()) {
        this.errors2.horaPrimerToma = "La hora de la primer toma no es válida";
        valid2 = false;
      } */  else if (moment(this.horaPrimerToma, "HH:mm").isSameOrAfter(horaIng)) {
                this.errors2.horaPrimerToma = "La hora de la primer toma debe ser antes a la hora colonoscopia";
                valida = false;

                /* alert("La hora ingresada es posterior a la hora actual"); */
            } else if (moment(this.horaPrimerToma, "HH:mm").isBefore(horaAct)) {
                this.errors2.horaPrimerToma = "La hora de la primer toma debe ser posterior a la hora actual";
                valida = false;

                /* alert("La hora ingresada es posterior a la hora actual"); */
            }
            /* else {
              delete this.errors2['horaPrimerToma'];
            } */

            // Validar que el campo hora dos no esté vacío y sea una hora válida
            if (!this.horaSegundaToma) {
                this.errors2.horaSegundaToma =
                    "La hora de la segunda toma es obligatoria";
                valida = false;

            } else if (!moment(this.horaSegundaToma, "HH:mm", true).isValid()) {
                this.errors2.horaSegundaToma =
                    "La hora de la segunda toma no es válida";
                valida = false;

            } else if (moment(this.horaSegundaToma, "HH:mm").isAfter(horaAct)) {
                this.errors2.horaSegundaToma = "La hora de la segunda toma debe ser antes de la fecha y hora actual";
                valida = false;

                /* alert("La hora ingresada es posterior a la hora actual"); */
            } else if (moment(this.horaSegundaToma, "HH:mm").isSameOrBefore(moment(this.horaPrimerToma, "HH:mm"))) {
                this.errors2.horaSegundaToma = "La hora de la segunda toma debe ser posterior a la hora de la primer toma";
                valida = false;
            }

        },
        descargarPdf() {
            /* const doc = new jspdf();
            const html = this.$refs.content.innerHTML;

            doc.fromHTML(html,15,15,{
                width: 150,
            })

            doc.save("PlanTomas.pdf"); */
            html2pdf(document.getElementById('element-to-convert'), {
                margin: 0,
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
                filename: 'Mi_Plan_De_Tomas.pdf',
            });
        }
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
    /* mixins: [VueMoment], */
    mounted: function () {

        this.horaActual = moment().format("HH:mm");
        this.fechaActual = moment().format("YYYY-MM-DD")
        /* this.horaIngresada = moment().format("HH:mm"); */
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
    cursor: pointer;
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
    /* background: none; */
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
    /* font-size: 25px;
    font-size: 40px;
    text-align: left; */
}

.tituloRecuperar {
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
    width: 80%;
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
    width: 80%;
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

    .tituloPlanToma {
        color: #FF9900;
        font-family: 'OpenSans-Bold';
        font-size: 20px;
        /* font-size: 40px; */
        text-align: left;
        /* display: inline-flex; */
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

    /*     .imgNaranjinPlan {
    width: 100%;
    height: 100vh;
    width: 135px;
    height: 135px;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;
} */
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

    .tituloPlanToma {
        color: #FF9900;
        font-family: 'OpenSans-Bold';
        font-size: 40px;
        /* font-size: 40px; */
        text-align: left;
        /* display: inline-flex; */
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
@media screen and (max-height: 500px) {}</style>
