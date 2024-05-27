const imagenes = [
    'imagenes carrousel/ima1.jpg', 
    'imagenes carrousel/ima2.jpg', 
    'imagenes carrousel/ima3.jpg', 
    'imagenes carrousel/ima4.jpg', 
    'imagenes carrousel/ima5.jpg', 
    'imagenes carrousel/ima6.jpg'
];

let cont = 0;

function mostrarImagen(indice) {
    const imgElement = document.getElementById('inicio');
    imgElement.src = imagenes[indice];
}

function izquierda() {
    if (cont > 0) {
        cont--;
    } else {
        cont = imagenes.length - 1;
    }
    mostrarImagen(cont);
}

function derecha() {
    if (cont < imagenes.length - 1) {
        cont++;
    } else {
        cont = 0;
    }
    mostrarImagen(cont);
}

document.addEventListener('DOMContentLoaded', function() {
    mostrarImagen(cont);
});