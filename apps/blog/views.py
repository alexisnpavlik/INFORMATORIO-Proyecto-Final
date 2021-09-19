from apps.appPrincipal.models import Pregunta
from django.shortcuts import render
from django.http import HttpResponse
import random

# Create your views here.
def jugar(request):
    context = {}
    listaIds = Pregunta.objects.filter(descripcion__isnull = False).values_list('id', flat = True)
    listaIdsRandom = random.sample(list(listaIds), 4)
    preguntasRandom = Pregunta.objects.filter(id__in = listaIdsRandom).values()
    preguntas = []
    for i, item in enumerate(preguntasRandom, start=1):
        pregunta = {}
        pregunta['descripcion'] = item['descripcion']
        pregunta['categoria'] = item['categoria']
        pregunta['respuestas'] = []
        rtas = [item['respuestaCorrecta'], item['incorrecta1'], item['incorrecta2'], item['incorrecta3']]
        rtas2 = list(enumerate(rtas, start=1))
        random.shuffle(rtas2)
        for valor in rtas2:
            respuesta = {}
            respuesta['texto'] = valor[1]
            if valor[0] != 1:
                respuesta['correcto'] = False
            else:
                respuesta['correcto'] = True
            respuesta['inputTagname'] = 'q_answer' + str(i)
            pregunta['respuestas'].append(respuesta)
        preguntas.append(pregunta)
    context['preguntas'] = preguntas
    return render(request, 'jugar.html', context)

def login(request):
    return render(request, 'login.html',{})

def create(request):
    return render(request, 'create.html',{})

def nosotros(request):
    return render(request, 'nosotros.html',{})

def menu(request):
    return render(request, 'menu.html',{})

def resultados(request):
    if request.method == 'POST':
        return render(request, 'resultados.html',{})