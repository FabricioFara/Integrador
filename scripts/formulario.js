let textnombre = document.getElementById("iname");
let textapellido = document.getElementById("iapell");
let numero = document.getElementById("inum");
let error = document.getElementById("mostrar-error");
let datos = document.getElementById("mostrar-dato");
function validar() {
    error.innerHTML=" ";
    datos.innerHTML=" ";
    textnombre.classList.remove("error");
    textapellido.classList.remove("error");
    numero.classList.remove("error");
    let errores=[];
    let tel = /^[1-9]\d{9}$/;
    let nombreRegex = /^[A-Za-z\s]+$/;
    let nbr=textnombre.value.trim();
    let apell=textapellido.value.trim();
    let num = numero.value.trim();
    
    if(nbr.length==0) {
        errores.push("falta tu nombre");
        textnombre.classList.add("error");
        textnombre.value = "";

    } else if(nbr.length>15) {
        errores.push("nombre muy largo");
        textnombre.classList.add("error");
        textnombre.value = "";

    }else if (!nombreRegex.test(nbr)) {
        errores.push("El nombre no puede contener números ni caracteres especiales");
        textnombre.classList.add("error");
        textnombre.value = "";
    }
    
    if(apell.length==0) {
        errores.push("falta tu apellido");
        textapellido.classList.add("error");
        textapellido.value = "";

    } else if(apell.length>9) {
        errores.push("apellido muy largo");
        textapellido.classList.add("error");
        textapellido.value = "";
    }else if (!nombreRegex.test(apell)) {
        errores.push("El apellido no puede contener números ni caracteres especiales");
        textapellido.classList.add("error");
        textapellido.value = "";
    }

    if(num.length==0){
    errores.push("falta el telefono");
    numero.classList.add("error");
    numero.value = "";
    
    }else if (!tel.test(num)) {
        errores.push("Número inválido (No debe contener caracteres, no comenzar con 0 y debe tener 10 digitos)");
        numero.classList.add("error");
        numero.value = "";
    }


for(let err of errores){
    let li = document.createElement("li");
    error.appendChild(li);
    li.textContent= err;
    

}
if(errores.length == 0){
    let li = document.createElement("li")
    if(numero.value.length>0){

            li.innerHTML = `Bienvenido/a ${nbr} ${apell}, te estaremos llamando al numero ${numero.value}`
    }
    datos.appendChild(li)
    document.forms[0].reset();

}
return false;

}