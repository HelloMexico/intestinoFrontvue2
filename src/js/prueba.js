
_claveAcceso.addEventListener("keyup", e =>{
  let string = e.target.value
  e.target.value = string.trim();
});

/* function calcularEdad(fecha_nacimiento) {
  var hoy = new Date();
  var cumpleanos = new Date(fecha_nacimiento);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
  }
  return edad;
}

var edad = calcularEdad("2005/08/10");
if(edad >= 18){
  alert("Eres mayor de edad :D ");
}else{
  alert("Eres menor de edad :( ");
} */
window.onload = function() {
  document.getElementById("enviar").onclick = function() {
    console.clear();
    /* var telef = new RegExp('^(\+34|0034|34)?[6789]\d{8}$');*/
    /* El error:                 ^                   ^        */
    var telef = new RegExp("^(\\+34|0034|34)?[6789]\\d{8}$");
    var valortelef = document.getElementById("c7").value;
    if (telef.test(valortelef)) {
      console.log("valor correcto");
    } else {
      console.log("INTRODUCE OTRO VALOR. EJ: +34666555444");
    }

    var nombre = new RegExp("(([A-Z][a-z]*)(\\s*)([A-Z][a-z]*)(\\s*)([A-Z][a-z]*)){1,30}");
    valornombre = document.getElementById("c1").value;
    if (nombre.test(valornombre)) {
      console.log("valor correcto");
    } else {
      console.log("INTRODUCE OTRO VALOR. EJ: John Doe Due");
    }
  };
};

/** Funcion para input solo numeros */
function validateKey(evt) {
  var code = (evt.wich) ? evt.whitch : evt.keyCode;
  
  if (code == 8) {
    return true;
  } else if (code>=48 && code<=57) {
    return true;
  } else{
    return false;
  }
}
/** */

/** */
function validaLetras(evt) {
  var code = (evt.wich) ? evt.whitch : evt.keyCode;
  
  if (code == 8) {
    return true;
  } else if (code>=64 && code<=91) {
    return true;
  } else if (code>=97 && code<=122) {
    return true;
  } else if (code == 32) {
    return true;
  } else {
    return false;
  }
}
/** */

/** Logica para las ladas de Mpexico y Costarica */
let numero = "50612345449666"

let arreglo = numero.split("");

console.log(arreglo.length)

let lada = `${arreglo[0]}${arreglo[1]}`
console.log(lada)

if(lada == "52"){
    
    if(lada == '52' && arreglo.length > 12)
    console.log('excede numeros méxico')
    
}else{
    lada = `${arreglo[0]}${arreglo[1]}${arreglo[2]}`
    
    if(lada == "506"){
        if(lada == '506' && arreglo.length > 11)
        console.log("Excede numeros de costa rica")
    }
    else{
        console.log("Lada no soportada")
    }
}
/** */

// Ejemplo de JavaScript inicial para deshabilitar el envío de formularios si hay campos no válidos
(function () {
  'use strict'

  // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
  var forms = document.querySelectorAll('.needs-validation')

  // Bucle sobre ellos y evitar el envío
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

/** Funcion para validar la longitud de contraseña */
function verifyPassword() {  
  var pw = document.getElementById("pswd").value;  
  var confpw = document.getElementById("conpsw").value;


  //check empty password field  
  if(pw == "" ) {  
    /* pw.style.fontSize = 4; */
    document.getElementById("message").innerHTML = "**Porfavor ingrese una clave de acceso"; 
    return false;  
  }  
 //minimum password length validation  
  if(pw.length < 10) {  
     document.getElementById("message").innerHTML = "**El tamaño de la contraseña debe tener al menos 10 caracteres";  
     return false;  
  }  
  
//maximum length of password validation  
  if(pw.length > 11) {  
     document.getElementById("message").innerHTML = "**La clave de acceso no debe exceder más de 10 caracteres";  
     return false;  
  } else {
     alert("Clave de acceso correcta..!");
     window.open("crearPlan.html");
  }
  /** confirmacion de clave acceso */
  //check empty password field  
  if(confpw == "") {  
    /* pw.style.fontSize = 4; */
    document.getElementById("messages").innerHTML = "**Porfavor ingrese una clave de acceso";  
    return false;  
  }  
   
 //minimum password length validation  
  if(confpw.length < 10) {  
     document.getElementById("messages").innerHTML = "**El tamaño de la contraseña debe tener al menos 10 caracteres";  
     return false;  
  }  
  
//maximum length of password validation  
  if(confpw.length > 11) {  
     document.getElementById("messages").innerHTML = "**La clave de acceso no debe exceder más de 10 caracteres";  
     return false;  
  } else {
     alert("Clave de acceso correcta..!");
     /* window.open("crearPlan.html"); */
  }  
  /** termina validacion confirma clave accesos */  
  
} 
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	const smalls = formControl.querySelector('p');
	formControl.className = 'form-control success';
    smalls.innerText = message;
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

/** FUNCION PARA VALIDAR COINCIDENCIA DE CONTRASEÑAS  */
window.addEventListener("load", function() {

  //icono para mostrar contraseña
  showPassword = document.querySelector('.show-password');
  showPassword.addEventListener('click', () => {

       //elementos input de tipo clave
      password1 = document.querySelector('.password1');
      password2 = document.querySelector('.password2');

      if ( password1.type === "text" ) {
          password1.type = "password"
          password2.type = "password"
          showPassword.classList.remove('fa-eye-slash');
      } else {
          password1.type = "text"
          password2.type = "text"
          showPassword.classList.toggle("fa-eye-slash");
      }

  })

});
/** */

/** inicio */
function getLength()
{
    /* var element = document.getElementById('inputPassword'); */
    var element = document.getElementById('inputPeso');
    var length = element.value.length;
    alert(length);
}

/** fin */


/** inicio */
function obtenerLongitud()
{
    /* var element = document.getElementById('inputPassword'); */
    var element = document.getElementById('inputNomMedTra');
    var length = element.value.length;
    alert(length);
}

/** fin */

/** inicio */
function obtenerLongitudApellidoMedTrata()
{
    /* var element = document.getElementById('inputPassword'); */
    var element = document.getElementById('inputApeMedTra');
    var length = element.value.length;
    alert(length);
}

/** fin */


/** Funcion para edad  */

/* si la longitud de la edad es igual a "3"
entonces enviar mensaje que edad es correcta
sino */ 
let edad =  document.getElementById('inputEdadPaciente');
if (edad.length == "3") {
  
}
/**Logica para deshabilitar edicion de inputs al momento de dar clic al boton editar */
/* const butonEditarPlan = document.querySelector('btnEditarPlan');
butonacordeon1.addEventListener('click', e=>{

  const butonEditarPlan = document.querySelector('#iconAcordion1');

  butonEditarPlan.style.transform = "rotate(180deg)";

  inputLadaperfil.readOnly = true;
  btnEditarPlan.addEventListener('click', e=>{

      if(inputLadaperfil.readOnly = true){

        inputLadaperfil.readOnly = false;
      }else{
          iconAcordion1.style.transform = "rotate(180deg)";
      }
  })
}) */
/** */

/** */
document.getElementById('btnEditarPlan').onclick = function() {
  var disabled = document.getElementById("inputLadaperfil").disabled;
  if (disabled) {
      document.getElementById("inputLadaperfil").disabled = false;
  }
  else {
      document.getElementById("inputLadaperfil").disabled = true;
  }
}


document.getElementById('submit').onclick = function() {
  var disabled = document.getElementById("name").disabled;
  if (disabled) {
      document.getElementById("name").disabled = false;
  }
  else {
      document.getElementById("name").disabled = true;
  }
}

/** si usuario selecciona  */

/** Fecha de estudio */

/** Fecha de estudio */
function bloquearNumero(evt) {
  var code = (evt.wich) ? evt.whitch : evt.keyCode;
  
  if (code == 8) {
    return true;
  } else if (code>=48 && code<=57) {
    return true;
  } else{
    return false;
  }
}