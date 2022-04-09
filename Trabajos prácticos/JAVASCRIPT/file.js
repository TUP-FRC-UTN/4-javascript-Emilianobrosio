var mail = document.getElementById("inputEmail4");
var pass = document.getElementById("inputPassword4");
var direccion = document.getElementById("inputAddress");
var ciudad = document.getElementById("inputCity");
var prov = document.getElementById("inputState");

function enviarFormulario() {
    if (mail.value === null || mail.value === "") {
        alert("INGRESE SU CORREO ELECTRÓNICO");
    }
    if (pass.value === null || pass.value === "") {
        alert("INGRESE SU PASSWORD");
    }
    if (direccion.value === null || direccion.value === "") {
        alert("INGRESE SU DIRECCIÓN");
    }
    if (ciudad.value === null || ciudad.value === "") {
        alert("INGRESE SU CIUDAD");
    }
    if (prov.value == 0 || prov.value == "") {
        alert("INGRESE UNA OPCIÓN DE PROVINCIA")
    }
}
