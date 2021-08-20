var s = document.getElementById('botonsi');
var n = document.getElementById('botonno');

s.addEventListener('click', responderCuestionario);
n.addEventListener('click', cerrarPagina);

function responderCuestionario(evento) {
    console.log(evento)
    alert('responderas el cuestionario');


}

function cerrarPagina(evento) {
    alert('Hasta la próxima!')
}