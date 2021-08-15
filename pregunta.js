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


}