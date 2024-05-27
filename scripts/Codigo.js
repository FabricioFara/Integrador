const imagenes = [
    'imagenes carrousel/ima1.jpg', 
    'imagenes carrousel/ima2.jpg', 
    'imagenes carrousel/ima3.jpg', 
    'imagenes carrousel/ima4.jpg', 
    'imagenes carrousel/ima5.jpg', 
    'imagenes carrousel/ima6.jpg'
];

let indiceActual = 0;

function mostrarImagen(indice) {
    const imgElement = document.getElementById('inicio');
    imgElement.src = imagenes[indice];
}

function izquierda() {
    if (indiceActual > 0) {
        indiceActual--;
    } else {
        indiceActual = imagenes.length - 1;
    }
    mostrarImagen(indiceActual);
}

function derecha() {
    if (indiceActual < imagenes.length - 1) {
        indiceActual++;
    } else {
        indiceActual = 0;
    }
    mostrarImagen(indiceActual);
}

document.addEventListener('DOMContentLoaded', function() {
    mostrarImagen(indiceActual);
});