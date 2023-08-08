<template>
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header modalHeaderModificar">
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
            </div>

            <div class="modal-body" style="border: none;">
            <p class="parrafoEstasSeguro text-center">
                {{ message }}
            </p>
            </div>
            <div class="modal-footer" style="border: none;">
                <div class="container text-center">
                    <div class="row">
                    <div class="col-md-4 offset-md-4">
                        <button type="button" class="rounded btnCancelarModalPlan" data-bs-dismiss="modal">
                            Aceptar
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'CustomModal',
        props: {
            message:String,
        }

    }
</script>

<style scoped>

    .parrafoEstasSeguro {
        font-family: "OpenSans-Bold";
        font-size: 20px;
        font-size: 18px;
        color: #616161;
    }

    .btnCancelarModalPlan {
        font-family: "OpenSans-SemiBold";
        font-size: 20px;
        width: 100%;
        height: 50px;
        color: #ffffff;
        border: none;
        background-color: #1155cc;
        text-decoration: none;
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

    }
    
</style>