funtion proceso() {
    var question1 = cuestionario.pregunta1.value;
    var question2 = cuestionario.pregunta2.value;
    var question3 = cuestionario.pregunta3.value;
    var question4 = cuestionario.pregunta4.value;
    var resultado = 0;

    if (question1 == 'good1') {
        resultado++;
        document.getElementById('buenas').style.background = 'green';
        document.getElementById('malas').style.background = 'red';
    } else if (question1 == 'bad1') {
        document.getElementById('buenas').style.background = 'green';
        document.getElementById('malas').style.background = 'red';
    } else if (question1 == 'bad2') {
        document.getElementById('buenas').style.background = 'green';
        document.getElementById('malas').style.background = 'red';
    }

    if (question2 == 'good2') {
        resultado++;
        document.getElementById('buenas').style.background = 'green';
        document.getElementById('malas').style.background = 'red';
    } else if (question2 == 'bad12') {
        document.getElementById('buenas').style.background = 'green';
        document.getElementById('malas').style.background = 'red';
    } else if (question2 == 'bad22') {
        document.getElementById('buenas').style.background = 'green';
        document.getElementById('malas').style.background = 'red';
    }

    if (question3 == 'good3') {
        resultado++;
        document.getElementById('buenas').style.background = 'green';
        document.getElementById('malas').style.background = 'red';
    } else if (question1 == 'bad13') {
        document.getElementById('buenas').style.background = 'green';
        document.getElementById('malas').style.background = 'red';
    } else if (question1 == 'bad23') {
        document.getElementById('buenas').style.background = 'green';
        document.getElementById('malas').style.background = 'red';
    }

    if (question4 == 'good4') {
        resultado++;
        document.getElementById('buenas').style.background = 'green';
        document.getElementById('malas').style.background = 'red';
    } else if (question1 == 'bad14') {
        document.getElementById('buenas').style.background = 'green';
        document.getElementById('malas').style.background = 'red';
    } else if (question1 == 'bad24') {
        document.getElementById('buenas').style.background = 'green';
        document.getElementById('malas').style.background = 'red';
    }

    var mensaje = ['felicidades!', 'muy bien', 'mejor la proxima', 'esto fue malo'];
    var rango;

    if (resultado <= 1) {
        rango = 3;
    }
    if (resultado = 2) {
        rango = 2;
    }
    if (resultado = 3) {
        rango = 1;
    }
    if (resultado = 4) {
        rango = 0;
    }

    document.getElementById('hola').style.visibility = 'visible';
    document.getElementById('mensaje').innerHTML = mensaje[rango];
    Hola.innerHTML = '<label> su resultado es:' + resultado + '/4</label>';
    document.getElementById('leyenda').style.visibility = 'visible';
    document.getElementById('leyenda2').style.visibility = 'visible';
    document.getElementById('rojo').style.visibility = 'visible';
    document.getElementById('verde').style.visibility = 'visible';

}