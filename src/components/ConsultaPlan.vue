<template>
    <!-- <h1 class="text-center">Aqui se esta usando el componente de Crear plan</h1> -->
    <div class="container">
        <div class="container-fluid" id="element-to-converte">
            <br><br>
            <div class="row filaPlan">
                <div class="col-2 col-md-2">
                    <!-- <a type="button" class="btnFlecha" href="index.html">
                    </a> -->
                </div>
                <div class="col-10 col-md-10">
                    <h1 class="tituloPlanToma" id="tituloPlan">Plan de tomas e hidrataciones</h1>
                </div>
            </div>
            <div class="row filaPlanTabla">
                <div class="col-12 col-md-12 col-sm-12 text-center">
                    <img src="../assets/img/mobile/Recurso 23x.png" class="imgNaranjinPlan" alt="...">
                </div>
            </div>
            <br>
            <!-- <div class="filaPlanTabla"> -->
            <div class="container contenedorMovil">
                <div class="row">
                    <div class="col" style="border: 1px solid #FF9900;">
                        <p class="parrafoEstudioProgramado">Estudio programado para: </p>
                        <p class="parrafoFechaEstudio">Fecha: <span> {{ fechaEstudioColonos == '' ? 'Sin datos' : fechaEstudioColonos }} </span></p>
                        <p class="parrafoHoraEstudio">Hora: <span> {{ horaColonoscopia == '' ? 'Sin datos' : horaColonoscopia }} </span></p>

                        <p class="parrafoPrimerToma">Primera toma de Picoprep: </p>
                        <p class="parrafoFechaPrimerToma">Fecha: <span>{{ fechaPrimerToma == '' ? 'Sin datos' : fechaPrimerToma }}</span> </p>
                        <p class="parrafoHoraPrimerToma">Hora: <span> {{ horaPrimerToma == '' ? 'Sin datos' : horaPrimerToma }} </span></p>

                        <p class="parrafoSegundaToma">Segunda toma de Picoprep: </p>
                        <p class="parrafoFechaSegundaToma">Fecha: <span>{{ fechaPrimerToma == '' ? 'Sin datos' : fechaPrimerToma }}</span> </p>
                        <p class="parrafoHoraSegundaToma">Hora: <span> {{ horaSegundaToma == '' ? 'Sin datos' : horaSegundaToma }} </span></p>
                    </div>
                    <div class="col-2 col-md-4 col-sm-3"
                        style="display: flex; flex-direction: row; justify-content: center; align-items: center; background-color:  #FF9900; width: 50px;">
                        <a 
                            type="button" 
                            class="btnEditarPlan" 
                            style="background-color: ;"
                            @click="showEditModalMovil">
                        </a>
                        <!-- Modal -->
                        <div 
                            class="modal fade" 
                            id="openModal" 
                            tabindex="-1"
                            aria-labelledby="openModal" 
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header" style="border: none;">

                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body" style="border: none;">
                                        <h1 class="modal-title tituloModal" id="exampleModalLabelUno">Editar plan de tomas e hidrataciones</h1>
                                        <form ref="" name="formulario3" id="formulario3" v-on:submit="validarHora">
                                            <div class="mb-3">
                                                <label for="" class="form-label labelModalEditarFechaEstu">Fecha de estudio</label>
                                                <div class="input-group">
                                                    <input type="date" class="form-control inputLabelFechaModalEditarPlan" aria-label="Input group example"
                                                        aria-describedby="basic-addon1" id="inputLabelFechaModalEditarPlan"
                                                        v-model="dataPrescripcion.fechaEstudioColonos">
                                                </div>
                                                <span class="error" style="color: red" v-if="errors2.fechaEstudioColonos">{{ errors2.fechaEstudioColonos }}</span>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1 labelModalEditarHoraColonos"
                                                    class="form-label">Hora de la colonoscopia o estudio</label>
                                                <div class="input-group">
                                                    <input type="time" class="form-control" placeholder="18:00 Hrs"
                                                        aria-label="Input group example" aria-describedby="basic-addon1"
                                                        v-model="dataPrescripcion.horaColonoscopia">
                                                </div>
                                                <span class="error" style="color: red" v-if="errors2.horaColonoscopia">{{ errors2.horaColonoscopia }}</span>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">Fecha de la primera
                                                    toma de Picoprep</label>
                                                <div class="input-group">
                                                    <input type="date" class="form-control" placeholder="18:00 Hrs"
                                                        aria-label="Input group example" aria-describedby="basic-addon1"
                                                        v-model="dataPrescripcion.fechaPrimerToma">
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
                                                        v-model="dataPrescripcion.horaPrimerToma">
                                                    <!-- <span class="input-group-text" id="basic-addon1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                                                            <path
                                                                d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                                            <path
                                                                d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                                                        </svg>
                                                    </span> -->
                                                </div>
                                                <span class="error" style="color: red" v-if="errors2.horaPrimerToma">{{
                                                    errors2.horaPrimerToma
                                                }}</span>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">Fecha de la segunda
                                                    toma de Picoprep</label>
                                                <div class="input-group">
                                                    <input type="date" class="form-control" placeholder="18:00 Hrs"
                                                        aria-label="Input group example" aria-describedby="basic-addon1"
                                                        v-model="dataPrescripcion.fechaSegundaToma">
                                                    <!-- <span class="input-group-text" id="basic-addon1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                                                            <path
                                                                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z">
                                                            </path>
                                                        </svg>
                                                    </span> -->
                                                </div>
                                                <span class="error" style="color: red" v-if="errors2.fechaSegundaToma">{{
                                                    errors2.fechaSegundaToma
                                                }}</span>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">Hora de la segunda
                                                    toma de Picoprep</label>
                                                <!-- <input type="time" class="form-control" id="exampleInputPassword1" placeholder="22:00 Hrs"> -->
                                                <div class="input-group">
                                                    <input type="time" class="form-control" placeholder="18:00 Hrs"
                                                        aria-label="Input group example" aria-describedby="basic-addon1"
                                                        v-model="dataPrescripcion.horaSegundaToma">
                                                    <!-- <span class="input-group-text" id="basic-addon1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
                                                            <path
                                                                d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                                                            <path
                                                                d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                                                        </svg>
                                                    </span> -->
                                                </div>
                                                <span class="error" style="color: red" v-if="errors2.horaSegundaToma">{{ errors2.horaSegundaToma }}</span>
                                                <span class="error" style="color: red" v-if="errors2.errRequest">{{ errors2.errRequest }}</span>
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

            <div class="row fila tamanyo">
                <!-- <div class="col-1 col-md-3 col-sm-5 text-center columnaUno">

                </div> -->
                <div class="col-3 col-md-2 col-sm-3 columnaTabla" style="  border: 1px solid #FF9900;">
                    <div class="card mb-3" style="  border: none;">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card-body" id="cardUnoTabla">
                                    <p class="parrafoEstudioProgramado">Estudio programado para:</p>
                                    <p class="parrafoFechaEstudio">Fecha: <span> {{ fechaEstudioColonos == '' ? 'Sin datos' : fechaEstudioColonos }} </span></p>
                                    <p class="parrafoHoraEstudio">Hora: <span>
                                        {{ horaColonoscopia == '' ? 'Sin datos' : horaColonoscopia }}
                                    </span> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-1 col-md-3 col-sm-5 text-center columnaUno">
                    
                </div> -->
                <div class="col-3 col-md-2 col-sm-5 columnaTabla" style="  border: 1px solid #FF9900;">
                    <div class="card mb-3" style="  border: none;">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card-body" id="cardUnoTabla">
                                    <p class="parrafoPrimerToma">Primera toma de Picoprep :</p>
                                    <p class="parrafoFechaPrimerToma">Fecha: <span>{{ fechaPrimerToma == '' ? 'Sin datos' : fechaPrimerToma }} </span></p>
                                    <p class="parrafoHoraPrimerToma">Hora: <span>{{ horaPrimerToma == '' ? 'Sin datos' : horaPrimerToma }} </span> </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-3 col-md-2 col-sm-5 columnaTabla" style="  border: 1px solid #FF9900;">
                    <div class="card mb-3" style="  border: none;">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card-body" id="cardUnoTabla">
                                    <p class="parrafoSegundaToma">Segunda toma de Picoprep:</p>
                                    <p class="parrafoFechaSegundaToma">Fecha: <span>{{ fechaSegundaToma == '' ? 'Sin datos' : fechaSegundaToma }}</span></p>
                                    <p class="parrafoHoraSegundaToma">Hora: <span>{{ horaSegundaToma == '' ? 'Sin datos' : horaSegundaToma }}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-1 col-md-3 col-sm-2 columnaBotonEditarTabla"
                    style="border: 1px solid #FF9900; background-color:  #FF9900; display: flex; flex-direction: row; justify-content: center; align-items: center;">
                    <a 
                        type="button" 
                        class="btnEditarPlan" 
                        style="background-color: ;"
                        @click="showEditModal">
                    </a>
                    <!-- Modal -->
                    <div class="modal fade" id="modalEditTomas" tabindex="-1" role="dialog" :class="{ 'show': showModal }">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-content">
                                    <div class="modal-header" style="border: none;">

                                        <button 
                                            type="button" 
                                            class="btn-close" 
                                            data-bs-dismiss="modal" 
                                            aria-label="Close"
                                            @click="showModal = false">
                                        </button>
                                    </div>
                                    <div class="modal-body" style="border: none;">
                                        <h1 class="modal-title tituloModal" id="exampleModalLabelUno">Editar plan de tomas e hidrataciones</h1>
                                        <form ref="formEditar" name="formulario" id="formularioEditar" v-on:submit.prevent="validarHora">
                                            <div class="mb-3">
                                                <label for="" class="form-label labelModalEditarFechaEstu">Fecha de estudio</label>
                                                <div class="input-group">
                                                    <input type="date" class="form-control inputLabelFechaModalEditarPlan"
                                                        placeholder="18:00 Hrs" aria-label="Input group example"
                                                        v-model="dataPrescripcion.fechaEstudioColonos" aria-describedby="basic-addon1"
                                                        id="inputLabelFechaModalEditarPlan">
                                                </div>
                                                <span class="error" style="color: red" v-if="errors2.fechaEstudioColonos">{{errors2.fechaEstudioColonos }}</span>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1 labelModalEditarHoraColonos"
                                                    class="form-label">Hora de la
                                                    colonoscopia o estudio</label>
                                                <div class="input-group">
                                                    <input type="time" class="form-control" placeholder="18:00 Hrs"
                                                        aria-label="Input group example" aria-describedby="basic-addon1"
                                                        v-model="dataPrescripcion.horaColonoscopia">
                                                </div>
                                                <span class="error" style="color: red" v-if="errors2.horaColonoscopia">{{ errors2.horaColonoscopia }}</span>

                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">Fecha de la
                                                    primera
                                                    toma de Picoprep</label>
                                                <!-- <input type="date" class="form-control" id="exampleInputPassword1" placeholder="23/11/2022"> -->
                                                <div class="input-group">
                                                    <input type="date" class="form-control" placeholder="18:00 Hrs"
                                                        aria-label="Input group example" aria-describedby="basic-addon1"
                                                        v-model="dataPrescripcion.fechaPrimerToma">
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
                                                        v-model="dataPrescripcion.horaPrimerToma">
                                                </div>
                                                <span class="error" style="color: red" v-if="errors2.horaPrimerToma">{{
                                                    errors2.horaPrimerToma
                                                }}</span>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">Fecha de la
                                                    segunda
                                                    toma de Picoprep</label>
                                                <!-- <input type="date" class="form-control" id="exampleInputPassword1" placeholder="23/11/2022"> -->
                                                <div class="input-group">
                                                    <input type="date" class="form-control" placeholder="18:00 Hrs"
                                                        aria-label="Input group example" aria-describedby="basic-addon1"
                                                        v-model="dataPrescripcion.fechaSegundaToma">
                                                </div>
                                                <span class="error" style="color: red" v-if="errors2.fechaSegundaToma">{{
                                                    errors2.fechaSegundaToma
                                                }}</span>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">Hora de la segunda
                                                    toma de Picoprep</label>
                                                <div class="input-group">
                                                    <input type="time" class="form-control" placeholder="18:00 Hrs"
                                                        aria-label="Input group example" aria-describedby="basic-addon1"
                                                        v-model="dataPrescripcion.horaSegundaToma">
                                                </div>

                                                <span class="error" style="color: red" v-if="errors2.horaSegundaToma">{{ errors2.horaSegundaToma }}</span>
                                                
                                                <br>
                                                <br>
                                                <span class="error" style="color: red" v-if="errors2.errRequest">{{ errors2.errRequest }}</span>
                                            </div>

                                            <div class="modal-footer" style="border: none;">
                                                <div class="container text-center">
                                                    <div class="row">
                                                        <div class="col-md-4 pb-4">
                                                            
                                                            <button 
                                                                type="submit"
                                                                class="rounded btnGuardarModalPlan">
                                                                GUARDAR
                                                            </button>
                                                            
                                                        </div>
                                                        <div class="col-md-4 offset-md-4">
                                                            <button 
                                                                type="button" 
                                                                class="rounded btnCancelarModalPlan"
                                                                data-bs-dismiss="modal">
                                                                CANCELAR
                                                            </button>
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
            <br><br>
            <div class="row">
                <div class="col-1 col-md-3 col-sm-5 text-center columnaUno">
                    <img src="../assets/img/web/681332-300-300 1_2.png" alt="..." width="">
                </div>
                <div class="col-6 col-md-3 col-sm-5 columnaDos">
                    <!-- <div class="card mb-3" style="max-width: 640px;"> -->
                    <div class="card mb-3">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card-body" id="cardUno">
                                    <h5 class="card-title">Primera toma de PICOPREP®:</h5>
                                    <p class="card-text">Fecha <span>{{ fechaPrimerToma == '' ? 'Sin datos' : fechaPrimerToma }} </span> </p>
                                    <p class="card-text">Hora: <span>{{ horaPrimerToma == '' ? 'Sin datos' : horaPrimerToma }} </span> </p>
                                    <p class="card-text"><small class="text-muted"> {{ dosis1 }}</small></p>
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
                                    <p class="card-text">Fecha: <span>{{ hidratacion?.h4?.split(' ')[0] ?? 'Sin datos' }}</span> </p>
                                    <p class="card-text"><small class="text-muted">Hora: <span> {{ hidratacion?.h4?.split(' ')[1] ?? 'Sin datos' }} </span> </small></p>
                                    <p class="card-text"><small class="text-muted"> {{ hidratacion2 }} </small></p>
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
                                    <p class="card-text">Fecha: <span>{{ hidratacion?.h1?.split(' ')[0] ?? 'Sin datos' }}</span> </p>
                                    <p class="card-text"><small class="text-muted">Hora: <span> {{ hidratacion?.h1?.split(' ')[1] ?? 'Sin datos' }} </span> </small></p>
                                    <p class="card-text"><small class="text-muted"> {{ hidratacion1 }} </small></p>
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
                                    <p class="card-text">Fecha: <span>{{ hidratacion?.h5?.split(' ')[0] ?? 'Sin datos' }}</span> </p>
                                    <p class="card-text"><small class="text-muted">Hora: <span> {{ hidratacion?.h5?.split(' ')[1] ?? 'Sin datos' }} </span> </small></p>
                                    <p class="card-text"><small class="text-muted"> {{ hidratacion2 }} </small></p>
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
                                    <p class="card-text">Fecha: <span>{{ hidratacion?.h2?.split(' ')[0] ?? 'Sin datos' }}</span> </p>
                                    <p class="card-text"><small class="text-muted">Hora: <span> {{ hidratacion?.h2?.split(' ')[1] ?? 'Sin datos' }} </span> </small></p>
                                    <p class="card-text"><small class="text-muted"> {{ hidratacion1 }} </small></p>
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
                                    <p class="card-text">Fecha: <span>{{ hidratacion?.h6?.split(' ')[0] ?? 'Sin datos' }}</span> </p>
                                    <p class="card-text"><small class="text-muted">Hora: <span> {{ hidratacion?.h6?.split(' ')[1] ?? 'Sin datos' }} </span> </small></p>
                                    <p class="card-text"><small class="text-muted"> {{ hidratacion2 }} </small></p>
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
                                    <p class="card-text">Fecha: <span>{{ fechaSegundaToma == '' ? 'Sin datos' : fechaSegundaToma }}</span> </p>
                                    <p class="card-text">Hora: <span>{{ horaSegundaToma == '' ? 'Sin datos' : horaSegundaToma }} </span> </p>
                                    <p class="card-text"><small class="text-muted"> {{ dosis2 }} </small></p>
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
                                    <p class="card-text">Fecha: <span>{{ hidratacion?.h7?.split(' ')[0] ?? 'Sin datos'}}</span> </p>
                                    <p class="card-text"><small class="text-muted">Hora: <span> {{ hidratacion?.h7?.split(' ')[1] ?? 'Sin datos' }} </span> </small></p>
                                    <p class="card-text"><small class="text-muted"> {{ hidratacion2 }} </small></p>
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
                                    <p class="card-text">Fecha: <span>{{ hidratacion?.h3?.split(' ')[0] ?? 'Sin datos'}}</span> </p>
                                    <p class="card-text"><small class="text-muted">Hora: <span> {{ hidratacion?.h3?.split(' ')[1] ?? 'Sin datos' }} </span> </small></p>
                                    <p class="card-text"><small class="text-muted"> {{ hidratacion2 }} </small></p>
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
                                    <p class="card-text">Fecha: <span>{{ hidratacion?.h8?.split(' ')[0] ?? 'Sin datos' }}</span> </p>
                                    <p class="card-text"><small class="text-muted">Hora: <span> {{ hidratacion?.h8?.split(' ')[1] ?? 'Sin datos' }} </span> </small></p>
                                    <p class="card-text"><small class="text-muted"> {{ hidratacion2 }} </small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <!-- </div> -->
        </div>
        <!-- </div> -->

        <br>

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
                    <br>
                    <div class="">
                        <!-- Button trigger modal -->
                        <button type="button" class="btnVerReferenciaMedica rounded" data-bs-toggle="modal"
                            data-bs-target="#exampleModalVer">
                            REFERENCIA MÉDICA
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalVer" tabindex="-1" aria-labelledby="exampleModalLabelVer"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header" style="border: none;">
                                        <!-- <h1 class="modal-title fs-5"
                                            style="color: #FF9900; font-family: 'OpenSans-Bold'; font-size: 25px; align-items: center;"
                                            id="exampleModalLabelVer">Referencia Médica</h1> -->
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <!-- <div class="modal-body" style="overflow: scroll;"> -->
                                    <div class="modal-body">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col">
                                                    <h1>INFORMACIÓN PARA PRESCRIBIR AMPLIA (IPP-A)</h1>
                                                    <p class="tituloModalNegrita">1. DENOMINACIÓN DISTINTIVA: </p>
                                                    <p class="text-center">PICOPREP®</p>

                                                    <p class="tituloModalNegrita">2. DENOMINACIÓN GENÉRICA: </p>
                                                    <p class="text-center">Picosulfato sódico/Óxido de
                                                        magnesio/Ácido
                                                        cítrico</p>

                                                    <p class="tituloModalNegrita">3. FORMA FARMACÉUTICA Y FORMULACIÓN: </p>
                                                    <p class="text-center">Polvo para solución
                                                        oral en
                                                        sobre</p>
                                                    <div class="table-responsive">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Fórmula:</th>
                                                                    <th scope="row">Cada sobre con polvo contiene:</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td scope="col">Picosulfato de sodio</td>
                                                                    <td>10.0 mg</td>

                                                                </tr>
                                                                <tr>
                                                                    <td scope="col">Óxido de magnesio, ligero</td>
                                                                    <td>3.5 g</td>
                                                                </tr>
                                                                <tr>
                                                                    <td scope="col">Ácido cítrico, anhidro</td>
                                                                    <td>12.0 g</td>
                                                                </tr>
                                                                <tr>
                                                                    <td scope="col">Excipiente cbp</td>
                                                                    <td>1 Sobre</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <p class="tituloModalNegrita">4. INDICACIONES TERAPÉUTICAS:</p>
                                                    <p class="parraffoJustificado">Para la limpieza del intestino previo a
                                                        un examen de Rayos-X o una
                                                        endoscopía.</p>
                                                    <p class="parraffoJustificado">Para la limpieza del intestino previo a
                                                        una cirugía cuando se
                                                        considere clínicamente necesario (véase PRECAUCIONES GENERALES, en
                                                        relación con cirugía colorrectal abierta).</p>

                                                    <p class="tituloModalNegrita">5. FARMACOCINÉTICA Y FARMACODINAMIA:</p>
                                                    <p class="tituloModalNegrita">5.1 Propiedades Farmacodinámicas</p>
                                                    <p class="parraffoJustificado">Grupo Fármaco terapéutico: Laxantes de
                                                        contacto.</p>
                                                    <p class="parraffoJustificado">Código del Sistema de Calificación
                                                        Anatómica (ATC): A06A B58</p>

                                                    <p class="parraffoJustificado">Los principios activos de PICOPREP son el
                                                        picosulfato de sodio y el
                                                        citrato de magnesio. El picosulfato de sodio es un catártico
                                                        estimulante que actúa localmente, el cual después de la
                                                        fragmentación bacteriana en el colon forma el compuesto laxante
                                                        activo, bis(p-hidroxifenil)-pyridyl-2-metano (BHPM), el cual tiene
                                                        una doble acción, estimulando la mucosa tanto del colon como la del
                                                        recto.</p>
                                                    <p class="parraffoJustificado">El óxido de magnesio y el ácido cítrico
                                                        interactúan para
                                                        formar el citrato de magnesio, al momento que el producto se
                                                        dispersa en agua. El citrato de magnesio actúa como laxante osmótico
                                                        reteniendo la humedad del colon. Se piensa que la acción catártica
                                                        es causada debido a la retención del agua relacionada con ósmosis,
                                                        lo cual estimula los movimientos peristálticos. También se ha
                                                        sugerido que el magnesio que contiene laxantes estimula la
                                                        liberación de colecistoquinina, dando como resultado la acumulación
                                                        de líquido intraluminal y electrolitos y provocando un incremento en
                                                        la motilidad del intestino.</p>

                                                    <p class="parraffoJustificado">La acción combinada de las dos sustancias
                                                        es un efecto de 'lavado'
                                                        combinado con una estimulación peristáltica para limpiar el
                                                        intestino.</p>

                                                    <p class="parraffoJustificado">Este producto no está concebido para
                                                        utilizarse como laxante de
                                                        rutina.</p>
                                                    <p class="tituloModalNegrita">5.2 Propiedades Farmacocinéticas</p>
                                                    <p class="parraffoJustificado">Ambos principios activos se encuentran
                                                        localmente activos en el
                                                        colon, y ninguno se absorbe en cantidades detectables.</p>

                                                    <p class="parraffoJustificado">Después de la administración de PICOPREP
                                                        (2 sobres administrados con
                                                        diferencia de 6 horas), picosulfato de sodio alcanza concentraciones
                                                        promedio de 2.3 a 3.2 ng/mL. (Cmáx), con un promedio de 2 y 8 hrs
                                                        (Tmáx), después del primero y segundo sobre respectivamente. Los
                                                        valores correspondientes para el magnesio fueron 0,90 y 0,95 mmol /
                                                        L a las 4 y 10 horas, respectivamente. El nivel basal fue de 0,75
                                                        mmol /L.</p>

                                                    <p class="parraffoJustificado">El promedio de vida media terminal para
                                                        picosulfato fue de 7.4 horas.
                                                        La fracción de la dosis de picosulfato de sodio excretada en forma
                                                        inalterada en la orina fue de 0.11% Los niveles plasmáticos de BHPM
                                                        fueron consistentemente bajos o indetectables y las muestras de
                                                        orina mostraron que la mayor parte de BHPM excretada fue la forma
                                                        glucurónida conjugada.</p>

                                                    <p class="parraffoJustificado">Los estudios clínicos en limpieza del
                                                        intestino antes de la colonoscopía demuestran un incremento en la
                                                        concentración sérica de
                                                        magnesio sérico de aproximadamente 0:11 mmol/L (de 0.86 a 0.97 mmol
                                                        /L) desde la línea basal. Todos los cambios en el magnesio sérico
                                                        fueron transitorios y dentro de los límites normales, incluso
                                                        parientes con insuficiencia renal leve a moderada.</p>

                                                    <p class="tituloModalNegrita">6. CONTRAINDICACIONES:</p>
                                                    <ul style="list-style: none;">
                                                        <li>- Hipersensibilidad a cualquiera de los ingredientes del
                                                            producto
                                                        </li>
                                                        <li>- Insuficiencia cardiaca crónica</li>
                                                        <li>- Retención gástrica</li>
                                                        <li>- Ulcera gastrointestinal</li>
                                                        <li>- Colitis tóxica</li>
                                                        <li>- Megacolon tóxico</li>
                                                        <li>- Íleo</li>
                                                        <li>- Náusea y vómito graves</li>
                                                        <li>- Abdomen agudo quirúrgico, como apendicitis aguda</li>
                                                        <li>- Sospecha o confirmación de una obstrucción o perforación
                                                            gastrointestinal</li>
                                                        <li>- Deshidratación severa</li>
                                                        <li>- Rabdomiolisis</li>
                                                        <li>- Hipermagnesemia,</li>
                                                        <li>- Enfermedad inflamatoria intestinal activa</li>
                                                        <li>- En pacientes con función renal severamente disminuida, ya que
                                                            puede presentarse una acumulación de magnesio en plasma. Se
                                                            puede
                                                            utilizar alguna otra preparación en estos casos.</li>
                                                        <li>- Embarazo y lactancia</li>
                                                    </ul>


                                                    <p class="tituloModalNegrita">7. PRECAUCIONES GENERALES:</p>
                                                    <p class="parraffoJustificado">Debido a que no se puede probar que se
                                                        obtiene un beneficio
                                                        clínicamente relevante en la limpieza del intestino previo a una
                                                        cirugía colorrectal abierta, electiva, se deben administrar
                                                        limpiadores del intestino previo a una cirugía del colon, solamente
                                                        si es necesario. Se deben evaluar de manera cuidadosa los riesgos
                                                        del tratamiento versus los posibles beneficios y necesidades
                                                        dependiendo de los procedimientos quirúrgicos que se llevarían a
                                                        cabo.</p>

                                                    <p class="parraffoJustificado">Una ingesta oral inadecuada de agua y
                                                        electrolitos puede provocar
                                                        deficiencias clínicamente significativas, particularmente en
                                                        pacientes propensos. En este aspecto, pueden requerir atención
                                                        especial, los niños, los adultos mayores, individuos debilitados y
                                                        pacientes en riesgo de hipokalemia o hiponatremia. Se deben llevar a
                                                        cabo acciones correctivas rápidas para restaurar el balance de
                                                        fluidos/hidro-electrolítico en pacientes con signos o síntomas de
                                                        hipokalemia o hiponatremia. Beber solamente agua para reemplazar la
                                                        pérdida de líquidos puede afectar el balance de electrolitos.</p>

                                                    <p class="parraffoJustificado">Se debe tener cuidado en los pacientes
                                                        con: cirugía gastrointestinal
                                                        reciente, insuficiencia renal, enfermedad del corazón o enfermedad
                                                        inflamatoria intestinal.</p>

                                                    <p class="parraffoJustificado">Utilizarse con precaución en pacientes
                                                        que toman medicamentos que
                                                        pueden afectar el balance hídrico o de electrolitos, por ejemplo,
                                                        diuréticos, corticosteroides, litio (Véase INTERACCIONES
                                                        MEDICAMENTOSAS Y DE OTRO GÉNERO).</p>

                                                    <p class="parraffoJustificado">PICOPREP puede modificar la absorción de
                                                        medicamentos orales
                                                        prescritos de manera regular y debe utilizarse con precaución, por
                                                        ejemplo, se ha presentado reportes aislados de convulsiones en
                                                        pacientes con antiepilépticos, previamente controlados por,
                                                        epilepsia (Véase INTERACCIONES MEDICAMENTOSAS Y DE OTRO GÉNERO, así
                                                        como EVENTOS SECUNDARIOS Y ADVERSOS).</p>

                                                    <p class="parraffoJustificado">El periodo de limpieza intestinal no debe
                                                        exceder 24 horas debido a
                                                        que una preparación mayor puede incrementar el riesgo de un
                                                        desbalance de agua y de electrolitos.</p>

                                                    <p class="parraffoJustificado">Este medicamento contiene 5 mmol (ó
                                                        195/mg) de potasio por sobre. Lo
                                                        anterior debe considerarse en pacientes con reducción de la función
                                                        renal o en pacientes con una dieta controlada de potasio.</p>

                                                    <p class="parraffoJustificado">Este medicamento contiene lactosa como un
                                                        componente del saborizante.
                                                        Los pacientes con problemas hereditarios raros de intolerancia a la
                                                        lactosa, deficiencia de lactasa Lapp o mala absorción de
                                                        glucosa-galactosa, no deben utilizar este medicamento.</p>

                                                    <p class="parraffoJustificado">PICOPREP no debe ser utilizado como un
                                                        laxante de rutina.</p>

                                                    <p class="parraffoJustificado">Deberá tenerse cuidado en pacientes que
                                                        ya reciben medicamentos que
                                                        pueden asociarse con hipokalemia (por ejemplo, diuréticos o
                                                        corticoesteroides o medicamentos en donde la hipokalemia es un
                                                        riesgo muy particular, como es el caso de los glucósidos cardíacos).
                                                        También deberá tenerse cuidado en pacientes que consumen
                                                        antiinflamatorios no esteroideos (AINES) u otro tipo de medicamentos
                                                        que se conoce inducen al desarrollo de SIADH por ejemplo los
                                                        antidepresivos tricíclicos, los inhibidores selectivos de la
                                                        recaptura de serotonina, los medicamentos antipsicóticos y la
                                                        carbamazepina ya que estos medicamentos pueden incrementar el riesgo
                                                        de retención de agua y/o trastorno hidroelectrolítico.</p>

                                                    <p class="tituloModalNegrita">8. RESTRICCIONES DE USO DURANTE EL
                                                        EMBARAZO Y LA LACTANCIA:</p>
                                                    <p><b>Embarazo:</b></p>
                                                    <p class="parraffoJustificado">No existen datos clínicos disponibles
                                                        para PICOPREP, en relación a la
                                                        exposición durante el embarazo.</p>
                                                    <p class="parraffoJustificado">No usarse durante el embarazo ni la
                                                        lactancia.</p>

                                                    <p><b>Fertilidad:</b></p>
                                                    <p class="parraffoJustificado">Los resultados de los estudios
                                                        realizados con PICOPREP en animales no
                                                        mostraron trastornos de la fertilidad ni tampoco de toxicidad
                                                        embriofetal. Estudios realizados exclusivamente con picosulfato de
                                                        sodio en ratas y conejos a dosis muy elevadas, se observó toxicidad
                                                        embriofetal. Debido a que los estudios sobre reproducción animal no
                                                        siempre son predictivos de la respuesta en humanos, PICOPREP
                                                        solamente debe utilizarse durante el embarazo si fuera estrictamente
                                                        necesario. Debido a que el picosulfato es un laxante estimulante,
                                                        como medida de seguridad, es preferible evitar el uso de PICOPREP
                                                        durante el embarazo.</p>

                                                    <p><b>Lactancia:</b></p>
                                                    <p class="parraffoJustificado">No existe experiencia con el uso de
                                                        PICOPREP en madres lactantes. Sin
                                                        embargo, PICOPREP solamente debe utilizarse si fuera estrictamente
                                                        necesario.</p>

                                                    <p class="tituloModalNegrita">9. REACCIONES SECUNDARIAS Y ADVERSAS:</p>
                                                    <p class="parraffoJustificado">Las reacciones adversas más frecuentes
                                                        observadas durante los
                                                        estudios clínicos son náuseas, cefalea y vómito.</p>
                                                    <div class="table-responsive">
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Características del Órgano MedDRA</th>
                                                                    <th scope="col">Común (≥1/100 hasta ≤1/10)</th>
                                                                    <th scope="col">No común (≥1/1000 hasta ≤1/100)</th>
                                                                    <th scope="col">Desconocido (no se puede estimar con los
                                                                        datos disponibles)</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Trastornos del sistema inmune</td>
                                                                    <td></td>
                                                                    <td>Reacción anafiláctica, hipersensibilidad </td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Trastornos del Metabolismo y nutricionales</td>
                                                                    <td></td>
                                                                    <td>Hiponatremia e hipokalemia</td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Trastornos del sistema nervioso</td>
                                                                    <td>Cefalea</td>
                                                                    <td>Epilepsia, convulsión tipo gran mal, convulsiones,
                                                                        síndrome confusional</td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Trastornos gastrointestinales</td>
                                                                    <td>Náusea y proctalgia </td>
                                                                    <td>Vómito, dolor abdominal, úlceras ileales aftoides*
                                                                    </td>
                                                                    <td>Diarrea, e incontinencia fecal</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Trastornos de la piel o del tejido subcutáneo</td>
                                                                    <td></td>
                                                                    <td>Salpullido (incluyendo salpullido eritematoso y
                                                                        maculopapular, urticaria, púrpura)</td>
                                                                    <td></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <p class="parraffoJustificado">* Se han reportado casos aislados de
                                                        úlceras ileales aftoides leves
                                                        reversibles.</p>

                                                    <p class="parraffoJustificado">La frecuencia de los efectos secundarios
                                                        se encuentra basada en la
                                                        experiencia post-comercialización.</p>
                                                    <p class="parraffoJustificado">Los efectos clínicos principales de
                                                        PICOPREP son la diarrea y la
                                                        incontinencia fecal. Se han reportado casos aislados de diarrea
                                                        severa en estudios post-comercialización.</p>

                                                    <p class="parraffoJustificado">Se ha reportado hiponatremia con o sin
                                                        convulsiones asociadas. En
                                                        pacientes epilépticos, se han presentado reportes aislados de
                                                        ataques/convulsión gran mal sin una hiponatremia asociada.</p>
                                                    <p class="parraffoJustificado">Se han reportado casos aislados de
                                                        reacciones anafilácticas.</p>

                                                    <p class="tituloModalNegrita">10. INTERACCIONES MEDICAMENTOSAS Y DE OTRO
                                                        GÉNERO:</p>
                                                    <p class="parraffoJustificado">Como laxante, PICOPREP incrementa el
                                                        tránsito gastrointestinal. La
                                                        absorción de otros medicamentos administrados vía oral (por ejemplo,
                                                        antiepilépticos, anticonceptivos, antidiabéticos, antibióticos),
                                                        puede modificarse durante el periodo de tratamiento (Véase
                                                        PRECAUCIONES GENERALES).</p>
                                                    <p class="parraffoJustificado">La tetraciclina y los antibióticos
                                                        fluoroquinolonas, hierro,
                                                        digoxina, clorpromazina y penicilamina, deben administrarse al menos
                                                        2 horas antes y no menos de 6 horas después de administrar PICOPREP
                                                        para evitar una quelación con el magnesio.</p>

                                                    <p class="parraffoJustificado">La eficacia de PICOPREP es menor con
                                                        laxantes formadores de heces.
                                                    </p>
                                                    <p class="parraffoJustificado">Se debe tener precaución con los
                                                        pacientes que están recibiendo
                                                        medicamentos que puedan estar asociados con hipokalemia (tales como
                                                        diuréticos o corticosteroides, o medicamentos en los cuales la
                                                        hipokalemia es un riesgo particular, por ejemplo, glucósidos
                                                        cardíacos).</p>
                                                    <p class="parraffoJustificado">También se recomienda tener precaución
                                                        cuando se administra PICOPREP
                                                        en pacientes con medicamentos antiinflamatorios no esteroideos
                                                        (AINEs) o medicamentos para inducir el Síndrome de Secreción
                                                        Inadecuada de la Hormona Antidiurética (SIADH), por ejemplo,
                                                        antidepresivos tricíclicos, inhibidores selectivos de la recaptura
                                                        de serotonina, medicamentos antipsicóticos y carbamazepina, debido a
                                                        que estos pueden incrementar el riesgo de retención hídrica y/o el
                                                        desbalance electrolítico.</p>

                                                    <p class="tituloModalNegrita">11. ALTERACIONES EN LOS RESULTADOS DE
                                                        PRUEBAS DE LABORATORIO:</p>
                                                    <p class="parraffoJustificado">No se conocen hasta la fecha.</p>

                                                    <p class="tituloModalNegrita">12. PRECAUCIÓN EN RELACIÓN CON EFECTOS DE
                                                        CARCINOGÉNESIS,
                                                        MUTAGÉNESIS, TERATOGÉNESIS Y SOBRE LA FERTILIDAD:</p>
                                                    <p class="parraffoJustificado">Ningún dato clínico basado en estudios
                                                        convencionales de toxicidad
                                                        dosis repetitiva y genotoxicidad, revela riesgo especial para
                                                        humanos.</p>

                                                    <p class="parraffoJustificado">Estudios sobre reproducción han
                                                        demostrado que no existe potencial
                                                        sobre la fertilidad o afectación al feto por Picosulfato de sodio y
                                                        PICOPREP.</p>

                                                    <p class="parraffoJustificado">El Nivel de No Efectos Adversos (NOAEL)
                                                        es un estudio de desarrollo
                                                        pre y post natal en ratas fue la dosis media de 750 mg/kg dos veces
                                                        al día de PICOPREP el evento adverso que se observó en el grupo de
                                                        2000 mg/kg dos veces al día (aproximadamente 8 veces la dosis
                                                        recomendada en humanos), fue mortalidad de las crías, entre los días
                                                        2 a 4 de lactancia debido a la toxicidad materna.</p>
                                                    <p class="parraffoJustificado">Los estudios sobre efectos en toxicidad
                                                        reproductiva y del desarrollo
                                                        efectuados con picosulfato de sodio solo se observaron con
                                                        exposiciones considerablemente excesivas a la exposición mínima en
                                                        humanos, lo que indica poca relevancia para el uso clínico.</p>

                                                    <p class="tituloModalNegrita">13. DOSIS Y VÍA DE ADMINISTRACIÓN:</p>
                                                    <p class="parraffoJustificado">Vía de administración: Oral</p>

                                                    <p class="parraffoJustificado">Se recomienda una dieta baja en residuos
                                                        el día previo al
                                                        procedimiento. Una dieta de líquidos claros es recomendada durante
                                                        el día del procedimiento. Para evitar la deshidratación durante el
                                                        tratamiento con PICOPREP, se recomienda beber cantidades suficientes
                                                        de líquidos claros mientras persiste el efecto de lavado. Es
                                                        importante considerar la toma de líquidos claros provocada por sed,
                                                        adicional a la toma de líquidos establecida por el régimen de
                                                        tratamiento y líquidos adicionales. Entre los líquidos claros puede
                                                        consumirse agua, sopa clara, jugo de fruta sin pulpa, bebidas
                                                        ligeras, té y/o café sin leche.</p>

                                                    <p class="parraffoJustificado">Instructivo de reconstitución:</p>
                                                    <p class="parraffoJustificado">Reconstituir los contenidos de un sobre
                                                        en 150 ml de agua. Revolver
                                                        durante 2-3 minutos, la solución se convierte en un líquido turbio,
                                                        blanquecino con un leve olor a naranja. Beber la solución. Si se
                                                        calienta, esperar hasta que se enfríe lo suficiente para beber.</p>

                                                    <p class="parraffoJustificado">Adultos (incluyendo a los adultos
                                                        mayores):</p>
                                                    <p class="parraffoJustificado">Si el procedimiento está previsto para la
                                                        tarde, se recomienda el uso
                                                        de régimen de dosis dividido:</p>

                                                    <p class="parraffoJustificado">Régimen de dosis dividido (la tarde
                                                        anterior al procedimiento y el
                                                        día del procedimiento)</p>
                                                    <p class="parraffoJustificado">El primer sobre de PICOPREP se toma la
                                                        noche anterior al
                                                        procedimiento y el segundo se toma al siguiente día, en la mañana
                                                        previa al procedimiento.</p>

                                                    <p class="parraffoJustificado">El día anterior al procedimiento- 1
                                                        sobre:</p>
                                                    <p class="parraffoJustificado">El primer sobre reconstituido se toma en
                                                        la tarde (por ejemplo, entre
                                                        las 5:00 y las 9:00 P.M.), tomando al menos cinco bebidas de 250 ml
                                                        cada una, de líquidos claros durante las horas siguientes a la
                                                        ingesta del sobre.</p>
                                                    <p class="parraffoJustificado">El día del procedimiento 1 sobre:</p>
                                                    <p class="parraffoJustificado">El segundo sobre reconstituido se toma la
                                                        mañana del procedimiento
                                                        (5-9 horas antes del procedimiento), tomando por lo menos de 3
                                                        bebidas de 250 ml cada una, de líquidos claros durante las horas
                                                        siguientes a la ingesta del sobre.
                                                        Pueden consumirse líquidos claros hasta 2 hr. antes del
                                                        procedimiento.</p>
                                                    <p class="parraffoJustificado">O</p>
                                                    <p class="parraffoJustificado">Día anterior al procedimiento (tarde
                                                        anterior al procedimiento
                                                        únicamente) </p>
                                                    <p class="parraffoJustificado">El primer sobre de PICOPREP se toma la
                                                        tarde o al atardecer y el
                                                        segundo toma aproximadamente 6 horas después, durante la noche
                                                        anterior al procedimiento.</p>

                                                    <p class="parraffoJustificado">Un día antes del procedimiento-2 sobres
                                                    </p>
                                                    <p class="parraffoJustificado">El primer sobre reconstituido se toma en
                                                        la tarde o al atardecer (por
                                                        ejemplo, entre las 4:00 a las 6:00 PM), tomando durante las horas
                                                        posteriores, por lo menos cinco bebidas de 250 ml cada una, de
                                                        líquidos claros.</p>
                                                    <p class="parraffoJustificado">El segundo sobre reconstituido se toma
                                                        avanzada la noche (por
                                                        ejemplo, entre las 10:00 PM y las 12:00 AM), tomando durante las
                                                        horas posteriores por lo menos 3 bebidas de 250 ml cada una de
                                                        líquidos claros.</p>
                                                    <p class="parraffoJustificado">Pueden consumirse líquidos claros hasta 2
                                                        hr. antes del
                                                        procedimiento.</p>

                                                    <p class="parraffoJustificado">Niños:</p>
                                                    <p class="parraffoJustificado">1-2 años (8.5 a 10.5 kg): 1⁄4 de sachet
                                                        por la mañana, 1⁄4 de sachet
                                                        por la tarde. </p>
                                                    <p class="parraffoJustificado">2-4 años (10.6 a 14.7 kg): 1⁄2 sachet por
                                                        la mañana, 1⁄2 sachet por
                                                        la tarde.</p>
                                                    <p class="parraffoJustificado">4-9 años (14.8 a 28 kg): 1 sachet por la
                                                        mañana, 1⁄2 sachet por la
                                                        tarde.</p>
                                                    <p class="parraffoJustificado">9 años y mayores (> 28 kg): la dosis de
                                                        adulto.</p>

                                                    <p class="tituloModalNegrita">14. MANIFESTACIONES Y MANEJO DE LA
                                                        SOBREDOSIFICACIÓN O INGESTA
                                                        ACCIDENTAL:</p>
                                                    <p class="parraffoJustificado">Una sobredosis puede ocasionar una
                                                        diarrea profusa. En general, el
                                                        tratamiento debe realizarse con medidas de soporte y administración
                                                        de líquidos.</p>

                                                    <p class="tituloModalNegrita">15. PRESENTACIONES:</p>
                                                    <p class="parraffoJustificado">Presentación pediátrica (Niños menores de
                                                        9 años):</p>
                                                    <p class="parraffoJustificado">Caja con 1 ó 2 sobres con polvo para
                                                        solución oral, cuchara
                                                        dosificadora e instructivo anexo.</p>

                                                    <p class="parraffoJustificado">Presentación Adultos y niños mayores de 9
                                                        años:</p>
                                                    <p class="parraffoJustificado">Caja con 1 ó 2 sobres con polvo para
                                                        solución oral e instructivo
                                                        anexo.</p>
                                                    <p class="parraffoJustificado">Kit con caja con 1 ó 2 sobres con polvo
                                                        para solución oral, vaso
                                                        dosificador e instructivo anexo.</p>

                                                    <p class="tituloModalNegrita">16. RECOMENDACIONES SOBRE ALMACENAMIENTO:
                                                    </p>
                                                    <p class="parraffoJustificado">Condiciones de conservación y
                                                        almacenamiento</p>
                                                    <p class="parraffoJustificado">Consérvese a no más de 30° C.</p>
                                                    <p class="parraffoJustificado">Una vez que el sobre ha sido abierto,
                                                        utilizarse de manera inmediata
                                                        y desechar el polvo o la solución no utilizado.</p>

                                                    <p class="tituloModalNegrita">17. LEYENDAS DE PROTECCIÓN: </p>
                                                    <p class="parraffoJustificado">Literatura exclusiva para médicos.</p>
                                                    <p class="parraffoJustificado">Su venta requiere receta médica.</p>
                                                    <p class="parraffoJustificado">No se deje al alcance de los niños.</p>
                                                    <p class="parraffoJustificado">No se use durante el embarazo ni la
                                                        lactancia.</p>
                                                    <p class="parraffoJustificado">No deberá utilizarse como laxante de
                                                        rutina.</p>
                                                    <p class="parraffoJustificado">Reporte las sospechas de reacción adversa
                                                        al correo:
                                                        farmacovigilancia@cofepris.gob.mx y al correo:
                                                        safety.mailbox.mexico@ferring.com y al 8006241414.</p>

                                                    <p class="tituloModalNegrita">18. NOMBRE Y DOMICILIO DEL LABORATORIO:
                                                    </p>
                                                    <p class="parraffoJustificado">Hecho en China por:</p>
                                                    <p class="parraffoJustificado">Ferring Pharmaceuticals (China) Co., Ltd.
                                                        No. 6, Hui Ling Lu (Ferring Road), National Health Technology Park,
                                                        528437 Zhongshan City-Guangdong Province. China. </p>

                                                    <p class="parraffoJustificado">Para:</p>
                                                    <p class="parraffoJustificado">Ferring GmbH, Wittland 11, 24109 Kiel,
                                                        Alemania.</p>

                                                    <p class="parraffoJustificado">Representante Legal, Importado, y
                                                        Distribuido en México por:
                                                        Ferring S.A. de C.V.</p>
                                                    <p class="parraffoJustificado">Av. Nemesio Diez Riega, Mz. 2, Lote 15,
                                                        No. 15, Parque Industrial
                                                        Cerrillo II, C.P. 52000, Lerma, México, México.</p>

                                                    <p class="parraffoJustificado">Ó</p>

                                                    <p class="parraffoJustificado">Hecho en China por:</p>
                                                    <p class="parraffoJustificado">Ferring Pharmaceuticals (China) Co., Ltd.
                                                        No. 6, Hui Ling Lu (Ferring Road), National Health Technology Park,
                                                        528437 Zhongshan City- Guangdong Province. China.</p>

                                                    <p class="parraffoJustificado">Para:</p>
                                                    <p class="parraffoJustificado">Ferring GmbH, Wittland 11, 24109 Kiel,
                                                        Alemania.</p>

                                                    <p class="parraffoJustificado">Representante Legal, Importado,
                                                        Acondicionado secundario y
                                                        Distribuido en México por:</p>
                                                    <p class="parraffoJustificado">Ferring S.A. de C.V. Av. Nemesio Diez
                                                        Riega, Mz. 2, Lote 15, No. 15,
                                                        Parque Industrial Cerrillo II, C.P. 52000, Lerma, México, México.
                                                    </p>

                                                    <p class="tituloModalNegrita">19. NÚMERO DE REGISTRO DEL MEDICAMENTO</p>
                                                    <p class="parraffoJustificado">Reg. No.: 012M2013 SSA IV </p>
                                                    <pre class="parraffoJustificado">Clave IPP:
                CCDS 15346; Dec 2013 Ver. 2.0 _ ENC_AL                                                SEP 2019</pre>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="modal-footer" style="border: none;">
                                        <div class="container">
                                            <div class="row filaDosPermisos">
                                                <div class="col text-center columnaParrafos">
                                                    <p class="parrafoIntestinoAño">Ferring, S.A. de C.V.</p>
                                                    <p class="parrafoAviso">
                                                        Av. Nemesio Diez Riega, Mz. 2, Lote 15, No. 15, Parque Industrial
                                                        Cerrillo II Lerma, Estado de México, C P. 52000. Tel (01) 728 284
                                                        7104
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="button" data-bs-dismiss="modal" class="btn btn-primary" style="font-family: 'Segoe-UI-Bold';
                                    font-size: 18px;
                                    background-color: #1155CC;
                                    border: 1px solid #1155CC;
                                    color: #FFFFFF;">SALIR</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <br><br>
                    </div>

                    <div class="col-12 col-md-6 col-sm-12">
                        <!-- <div class="form-check m-auto">
                            <input class="form-check-input " type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Dejar de recibir notificaciones
                            </label>
                        </div> -->
                        <a href="" data-bs-toggle="modal" data-bs-target="#exampleModalQuiero" style="cursor: pointer;">
                            <img src="../assets/img/web/campana-web.png" alt=""><span class="ms-2"
                                style="font-family: 'Opensans-Semibold' ; text-decoration-line: underline;">Quiero dejar de
                                recibir notificaciones
                                por Whatsapp</span>
                        </a>
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalQuiero" tabindex="-1"
                            aria-labelledby="exampleModalLabelQuiero" aria-hidden="true">
                            <div class="modal-dialog modal-lg modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header modalHeaderModificar">
                                        <!-- <div class="contenidoDerecha"> -->
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                        <!-- </div> -->

                                    </div>
                                    <div class="modal-body" style="border: none;">

                                        <p class="parrafoEstasSeguro text-center">¿Está seguro que quieres dejar de recibir
                                            notificaciones?</p>

                                    </div>
                                    <div class="modal-footer" style="border: none;">
                                        <div class="container text-center">
                                            <div class="row">
                                                <div class="col-md-4 pb-4">
                                                    <button type="button" class="rounded btnGuardarModalPlan"
                                                        data-bs-dismiss="modal">ACEPTAR</button>
                                                </div>
                                                <div class="col-md-4 offset-md-4">
                                                    <button type="button" class="rounded btnCancelarModalPlan"
                                                        data-bs-dismiss="modal">CANCELAR</button>
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
            <br>
        </div>

        <div
        class="modal fade" 
        id="resultRequest" 
        tabindex="-1"
        aria-labelledby="example"
        aria-hidden="true">
            <CustomModal :message="'Se edito el plan de tomas correctamente'"/>
        </div>

        <div
        class="modal fade" 
        id="requestError" 
        tabindex="-1"
        aria-labelledby="example"
        aria-hidden="true">
            <CustomModal :message="errorMessage"/>
        </div>

    </div>
</template>
<!-- <script type="text/javascript" src="../js/jspdf.min.js"></script> -->
<script>
    import moment from 'moment';
    import html2pdf from 'html2pdf.js';
    import axios from "axios";
    import CustomModal from "../components/modals/ShowCustomModal.vue";

    export default {
        name : 'ConsultaPlan',
        props: {
            msg: String,
        },
        components: {
            CustomModal
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
                hidratacion:{},
                dataPrescripcion: {},

                dosis1: "",
                errorMessage: "",
                hidratacion1: "",
                dosis2: "",
                hidratacion2: "",

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

                showModal: false,
                name: '',
                email: '',
                password: '',
            };
        },
        computed: {
            // Obtener la fecha mínima para el campo fecha dos
            // minDate() {
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
            // },
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
            isValid() {
                return this.name !== '' && this.email !== '' && this.password !== '';
            },
        },
        methods: {
            validateForm() {
                if (this.input1 && this.input2 && this.input3) {
                    this.showModal = false;
                    alert('Formulario validado correctamente');
                } else {
                    alert('Por favor complete todos los campos obligatorios');
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
            submitForm() {
                // Aquí puedes agregar la lógica para enviar el formulario
                this.name = '';
                this.email = '';
                this.password = '';
                this.showModal = false;
            },
            closeModal() {


                $("#openModal").removeClass("in");
                $(".modal-backdrop").remove();
                $('#openModal').modal('hide');

                $("#modalEditTomas").removeClass("in");
                $(".modal-backdrop").remove();
                $('#modalEditTomas').modal('hide');

                $('#resultRequest').modal('show');

                this.getInfoPrescription();
            },
            showEditModal() {

                this.dataPrescripcion = {
                    fechaEstudioColonos : this.fechaEstudioColonos,
                    horaColonoscopia    : this.horaColonoscopia,
                    fechaPrimerToma     : this.fechaPrimerToma,
                    horaPrimerToma      : this.horaPrimerToma,
                    fechaSegundaToma    : this.fechaSegundaToma,
                    horaSegundaToma     : this.horaSegundaToma
                };

                $('#modalEditTomas').modal('show');
            },
            showEditModalMovil() {

                this.dataPrescripcion = {
                    fechaEstudioColonos : this.fechaEstudioColonos,
                    horaColonoscopia    : this.horaColonoscopia,
                    fechaPrimerToma     : this.fechaPrimerToma,
                    horaPrimerToma      : this.horaPrimerToma,
                    fechaSegundaToma    : this.fechaSegundaToma,
                    horaSegundaToma     : this.horaSegundaToma
                };

                $('#openModal').modal('show');
            },
            validarHora: async function (event) {

                this.errors2 = {};
                this.submitted = true;
                event.preventDefault();


                if (!this.fechaEstudioColonos) {
                    this.errors2.fechaEstudioColonos = "La fecha de la colonoscopia es obligatoria";
                    return;
                }
                else {
                    delete this.errors2['fechaEstudioColonos'];
                }

                if (this.horaColonoscopia === '') {
                    this.errors2.horaColonoscopia = "La hora de la colonoscopia es obligatoria";
                    return;
                }
                else {
                    delete this.errors2['horaColonoscopia'];
                }

                if (!this.fechaPrimerToma) {
                    this.errors2.fechaPrimerToma = "La fecha de la primer toma es obligatoria";
                    return;
                }
                else {
                    delete this.errors2['fechaPrimerToma'];
                }

                if (!this.fechaSegundaToma) {
                    this.errors2.fechaSegundaToma = "La fecha de la segunda toma es obligatoria";
                    return;
                }
                else {
                    delete this.errors2['fechaSegundaToma'];
                }

                if (!this.horaPrimerToma) {
                    this.errors2.horaPrimerToma = "La hora de la primer toma es obligatoria";
                    return;

                } else if (!moment(this.horaPrimerToma, "HH:mm", true).isValid()) {
                    this.errors2.horaPrimerToma = "La hora de la primer toma no es válida";
                    return;
                }
                else {
                    delete this.errors2['horaPrimerToma'];
                }

                if (!this.horaSegundaToma) {
                    this.errors2.horaSegundaToma = "La hora de la segunda toma es obligatoria";
                    return;

                } else if (!moment(this.horaSegundaToma, "HH:mm", true).isValid()) {
                    this.errors2.horaSegundaToma = "La hora de la segunda toma no es válida";
                    return;
                }
                else {
                    delete this.errors2['horaSegundaToma'];
                }

                try {
                    const id_prescription = localStorage.getItem( 'id_prescription' );
    
                    const resp = await axios.put("https://intestinolimpio.onrender.com/api/v1/prescription", {
                        id_prescription   : id_prescription,
                        fecha_estudio     : this.dataPrescripcion.fechaEstudioColonos,
                        hora_estudio      : this.dataPrescripcion.horaColonoscopia,
                        fecha_prim_toma   : this.dataPrescripcion.fechaPrimerToma,
                        hora_prim_toma    : this.dataPrescripcion.horaPrimerToma,
                        fecha_seg_toma    : this.dataPrescripcion.fechaSegundaToma,
                        hora_seg_toma     : this.dataPrescripcion.horaSegundaToma
                    });

                    if( resp.data?.status == undefined ) {
                        this.errorMessage = resp.data;
                        this.showModalError();
                    }

                    if( resp.data.status == 200 ) {
                        this.closeModal();
                    }
                    
                } catch (error) {
                    console.log( error.message );
                    this.showModalError();
                }

            },
            showModalError() {
                $('#requestError').modal('show');
            },
            descargarPdf() {

                html2pdf(document.getElementById('element-to-converte'), {
                    margin: 0,
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: 'in', format: 'A4', orientation: 'landscape' },
                    filename: 'Mi_Plan_De_Tomas.pdf',
                });

                // margin: 0,
                // html2canvas: { scale: 2 },
                // jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
                // filename: 'Mi_Plan_De_Tomas.pdf',
            },
            async prescriptionDetails() {

                const peso = localStorage.getItem('peso');

                if( peso == null ) return;

                const resp = await axios.post("https://intestinolimpio.onrender.com/api/v1/user/prescriptionDetails", { peso } );

                if( resp.data.status == 200 ) {
                    this.dosis1 = resp.data.data.dosis1.detalles;
                    this.hidratacion1 = resp.data.data.hidratacion1.detalles;
                    this.dosis2 = resp.data.data.dosis2.detalles;
                    this.hidratacion2 = resp.data.data.hidratacion2.detalles;
                }
            },
            async getInfoPrescription() {

                try {

                    const id_prescription = localStorage.getItem( 'id_prescription' );

                    if( id_prescription == null ) return;

                    const resp = await axios.post("https://intestinolimpio.onrender.com/api/v1/prescription/me", { id_prescription });

                    if( resp.data.status == 200 ) {

                        this.hidratacion = {};

                        this.fechaEstudioColonos = resp.data.data.id_prescription[0].fecha_estudio;
                        this.horaColonoscopia    = resp.data.data.id_prescription[0].hora_estudio;
                        this.fechaPrimerToma     = resp.data.data.id_prescription[0].fecha_prim_toma;
                        this.horaPrimerToma      = resp.data.data.id_prescription[0].hora_prim_toma;
                        this.fechaSegundaToma    = resp.data.data.id_prescription[0].fecha_seg_toma;
                        this.horaSegundaToma     = resp.data.data.id_prescription[0].hora_seg_toma;

                        this.hidratacion.h1 = moment(`${this.fechaPrimerToma} ${this.horaPrimerToma}`).add(1, 'hours').format('YYYY-MM-DD HH:mm');
                        this.hidratacion.h2 = moment(`${this.fechaPrimerToma} ${this.horaPrimerToma}`).add(2, 'hours').format('YYYY-MM-DD HH:mm');

                        this.hidratacion.h3 = moment(`${this.fechaSegundaToma} ${this.horaSegundaToma}`).add(1, 'hours').format('YYYY-MM-DD HH:mm');
                        this.hidratacion.h4 = moment(`${this.fechaSegundaToma} ${this.horaSegundaToma}`).add(2, 'hours').format('YYYY-MM-DD HH:mm');
                        this.hidratacion.h5 = moment(`${this.fechaSegundaToma} ${this.horaSegundaToma}`).add(3, 'hours').format('YYYY-MM-DD HH:mm');
                        this.hidratacion.h6 = moment(`${this.fechaSegundaToma} ${this.horaSegundaToma}`).add(4, 'hours').format('YYYY-MM-DD HH:mm');
                        this.hidratacion.h7 = moment(`${this.fechaSegundaToma} ${this.horaSegundaToma}`).add(5, 'hours').format('YYYY-MM-DD HH:mm');
                        this.hidratacion.h8 = moment(`${this.fechaSegundaToma} ${this.horaSegundaToma}`).add(6, 'hours').format('YYYY-MM-DD HH:mm');
                    }
                    
                } catch (error) {
                    console.log( error );
                }
            },
        },
        mounted: function () {

            this.horaActual = moment().format("HH:mm");
            this.fechaActual = moment().format("YYYY-MM-DD")
            this.getInfoPrescription();
            this.prescriptionDetails();
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

.tituloModalNegrita {
    color: #FF9900;
    font-family: 'OpenSans-Bold';
    font-size: 20px;

}

.parraffoJustificado {
    font-family: 'OpenSans-Regular';
    font-size: 15px;
    color: #707070;
    text-align: left;
    text-align: justify;
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

/* .filaDosPermisos {
    padding-top: 40px;
} */

/* .columnaParrafos {
    line-height: 0.1rem;
} */

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

/* .contenedorMovil {} */

.fila {
    display: none;
}

.tamanyo {
    width: 101%;
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
    background-image: url("../assets/img/web/Grupo\ 321.png");
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

.columnaTabla {
    /** No cambiar esta medida afectaria en la creación del pdf */
    width: 31.3%;
    /* width: 31.6%; */
}

.columnaDos {
    width: 60%;
}

.columnaUnoTablaEs {
    width: 10%;
    /** No cambiar esta medida afectaria en la creación del pdf */
    width: 8%;
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
    width: 70%;
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
    width: 70%;
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
    font-family: 'Segoe-UI-Bold';
    font-size: 18px;
    background-color: #1155CC;
    border: 1px solid #1155CC;
    color: #FFFFFF;
    width: 250px;
    width: 80%;
    height: 30px;
}

.btnVerReferenciaMedica:hover {
    font-family: 'Segoe-UI-Bold';
    font-size: 18px;
    background-color: #FFFFFF;
    border: 1px solid #1155CC;
    color: #1155CC;
    width: 250px;
    width: 80%;
    height: 30px;
}

/* Termina estilos para Plan de tomas e hidratacion */

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

    .columnaUnoTablaEs {
        width: 10%;
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

    .imgNaranjinPlan {
        width: 100%;
        height: 100vh;
        width: 135px;
        height: 135px;
        flex-direction: column;
        justify-content: center;
        position: relative;
        overflow: hidden;
    }

    .btnDescargaPlan {
        font-family: 'Segoe-UI-Semibold';
        font-size: 20px;
        width: 100%;
        width: 50%;
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
        width: 50%;
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
        font-family: 'Segoe-UI-Bold';
        font-size: 18px;
        background-color: #1155CC;
        border: 1px solid #1155CC;
        color: #FFFFFF;
        width: 250px;
        width: 25%;
        height: 30px;
    }

    .btnVerReferenciaMedica:hover {
        font-family: 'Segoe-UI-Bold';
        font-size: 18px;
        background-color: #FFFFFF;
        border: 1px solid #1155CC;
        color: #1155CC;
        width: 250px;
        width: 25%;
        height: 30px;
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
        /* padding-top: 150px; */
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

    .columnaUnoTablaEs {
        width: 400px;
    }

    .columnaDosTablaEs {
        width: 400px;
    }

    .columnaTresTablaEs {
        width: 400px;
    }

    .columnaBotonEditarTabla {
        width: 65px;
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