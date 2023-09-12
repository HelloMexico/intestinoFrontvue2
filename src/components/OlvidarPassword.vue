<template>
    <!-- <h1 class="text-center">Aqui se esta usando el componente de Crear plan</h1> -->
    <div class="container" style="width: 500px;">
        <br><br><br><br><br>
        <div class="row">
            <div class="col">
                <h1 class="tituloRecuperar">Recuperar contraseña</h1>
            </div>
        </div>
        <br><br>
        <div class="row" v-if="!shoChangePassword">
            <div class="col">
                <p class="text-center" style="font-family: 'OpenSans-Bold';">Ingresa tu número asociado</p>
            </div>
        </div>
        <br>
        <div class="row justify-content-center" v-if="!shoChangePassword">
            <div class="col" style="margin: 0 auto;">
                <input  v-model="recoverPassword" class="form-control" type="number" style="font-family: 'OpenSans-Bold';" placeholder="Número telefónico">
            </div>
        </div>
        <br><br>
        <div class="row" v-if="!shoChangePassword"> 
            <div class="col" style="  display: flex; justify-content: center; align-items: center;">
                <!-- <router-link class="btnEnvioCorreo rounded text-center" to="/nuevo">Enviar número de recuperación</router-link > -->
                    <button
                        @click="sendRecoverPassword()"
                        class="btnCrearPlan rounded collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo">
                            Enviar número de recuperación
                    </button>

                    <div class="spinner-border text-primary" role="status" v-if="showLoading"></div>
            </div>
        </div>

        <div v-if="shoChangePassword">
            <div class="row justify-content-center">
                <div class="col" style="margin: 0 auto;">
                    <input class="form-control" type="text" v-model="otp" style="font-family: 'OpenSans-Bold';" placeholder="OTP">
                </div>
            </div>
            <br><br>
            <div class="row justify-content-center">
                <div class="col" style="margin: 0 auto;">
                    <input class="form-control" type="password" v-model="newPassword" style="font-family: 'OpenSans-Bold';" placeholder="Nueva contraseña">
                </div>
            </div>
            <br><br>
            <div class="row"> 
                <div class="col" style="  display: flex; justify-content: center; align-items: center;">
                    <button class="btnEnvioCorreo rounded" @click="changePassword()">Cambiar contraseña</button>
                </div>
            </div>
        </div>

    <div
      class="modal fade" 
      id="changePasswordModal"
      tabindex="-1"
      aria-labelledby="example"
      aria-hidden="true">

        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">

                <div class="modal-body" style="border: none;">
                <p class="parrafoEstasSeguro text-center">
                  Su contraseña se cambio satisfactoriamente
                </p>
                </div>
                <div class="modal-footer" style="border: none;">
                    <div class="container text-center">
                      <div class="row">
                            <div class="col-md-4 offset-md-4">
                                <button 
                                  @click="goToLogin()"
                                  type="button" 
                                  class="rounded btnGuardarModalPlan"
                                  data-bs-dismiss="modal"> Aceptar </button>
                            </div>
                            <!-- <div class="col-md-4 offset-md-4">
                                <button
                                @click="postUserNew( true )"
                                  type="button" 
                                  class="rounded btnCancelarModalPlan"
                                  data-bs-dismiss="modal"> Activar notificaciones </button>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
        
        <br><br><br><br><br><br><br><br><br><br>

        <div class="row filaDosPermisos">
          <div class="col text-center columnaParrafos">
              <p class="parrafoIntestinoAño">Intestino Limpio 2023.</p>
              <p class="parrafoAviso">AVISO COFEPRIS</p>
              <p class="parrafoNumeroReg">No. REG. MEX: 2315052002C00837</p>
          </div>
      </div>
    </div>
</template>

<!-- <script type="text/javascript" src="../js/jspdf.min.js"></script> -->

<script>
import moment from 'moment';
import axios from "axios";
import BaseUrl from "./apis/base_url";

export default {
    name: 'OlvidarPassword',
    props: {
        msg: String,
    },
    data() {
        return {
            recoverPassword: "",
            baseUrl:{},
            shoChangePassword:false,
            showLoading:false,
            otp:"",
            newPassword:"",
        };
    },
    methods: {
        async sendRecoverPassword() {

            try {

                if( this.recoverPassword.length != 10 ) return;
                
                this.showLoading = true;
                const resp = await axios.post(this.baseUrl.baseUrl + '/user/otp', { phone: this.recoverPassword });

                if( resp.data.status == 200 ) {
                    this.shoChangePassword = true;
                    this.showLoading = false;
                    this.otp = resp.data.data;
                }
                
            } catch (error) {
                console.log(error);
                this.showLoading = false;
            }
        },

        async changePassword() {

            try {
                this.showLoading = true;
                const resp = await axios.post(this.baseUrl.baseUrl + '/user/validateOtp', { 
                    phone   : this.recoverPassword,
                    otp     : this.otp,
                    password: this.newPassword,
                });

                if( resp.data.status == 200 ) {
                    $('#changePasswordModal').modal('show');
                    this.showLoading = false;
                }
                
            } catch (error) {
                this.showLoading = false;
                console.log(error);
            }
        },

        goToLogin() {
            this.$router.push("/");
        },
    },
    computed: {
        // Obtener la fecha mínima para el campo fecha dos
        minDate() {
            // Si la fecha uno está vacía o no es válida, devolver null
            if (!this.fecha1 || !moment(this.fecha1, "YYYY-MM-DD", true).isValid()) {
                return null;
            }
            // Si la fecha uno es válida, devolver el día siguiente de la fecha uno formateado como YYYY-MM-DD
            else {
                return moment(this.fecha1).add(1, "days").format("YYYY-MM-DD");
            }
        },
        // Obtener la hora mínima para el campo hora dos
        minTime() {
            // Si la hora uno está vacía o no es válida, devolver null

            if (!this.hora1 || !moment(this.hora1, "HH:mm", true).isValid()) {
                return null;
            }
            // Si la hora uno es válida, devolver la hora uno formateada como HH:mm
            else {
                return moment(this.hora1, "HH:mm").format("HH:mm");
            }
        },
    },
    mounted () {
        this.baseUrl = new BaseUrl();
    }
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
.btnEnvioCorreo {
    font-family: 'Segoe-UI-Semibold';
    font-size: 20px;
    width: 70%;
    /* height: 50px; */
    color: #FFFFFF;
    border: none;
    background-color: #FF9900;
    text-decoration: none;
}

.btnEnvioCorreo:hover {
    font-family: 'Segoe-UI-Semibold';
    font-size: 20px;
    width: 70%;
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

    .tituloRecuperar {
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
