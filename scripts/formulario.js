let textnombre = document.getElementById("iname");
let textapellido = document.getElementById("iapell");
let numero = document.getElementById("inum");
let error = document.getElementById("mostrar-error");
let datos = document.getElementById("mostrar-dato");
function validar() {
    error.innerHTML=" ";
    textnombre.classList.remove("error")
    let errores=[];
    let tel = /^[1-9]\d{9}$/;
    let nbr=textnombre.value.trim();
    let apell=textapellido.value.trim();
    if(nbr.lenght==0) {
        errores.push("falta el nombre");
        textnombre.classList.add("error");

    } else if(nbr.lenght>9) {
        errores.push("nombre muy largo");
        textnombre.classList.add("error");
    }
    if(apell.lenght==0) {
        errores.push("falta el apellido");
        textapellido.classList.add("error");

    } else if(apell.lenght>9) {
        errores.push("apellido muy largo");
        textapellido.classList.add("error");
    }
if(numero.value.lenght>10) {
    errores.push("Numero muy largo");
    numero.classList.add("error");

}
if(numero.value.lenght>0 && !tel.test(numero.value) ) {
    errores.push("Numero invalido(no puede comenzar con 0 y no puede ser mayor que 10)");
    numero.classList.add("error");
}
}