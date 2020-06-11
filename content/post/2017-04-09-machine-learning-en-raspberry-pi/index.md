+++
date = "2017-04-09T10:07:06+02:00"
draft = false
title= "Contenedor Docker para Raspberry y otros dispositivos ARM para experimentar con el aprendizaje automático"
tags = ["ARMv7","Docker","Contenedores","Raspberry", "Machine Learnig", "aprendizaje automático", "Tensorflow", "Python", "Numpy", "Scipy", "Matplotlib", "Pandas", "Scikit-learn", "Jupyter Notebook"]
categories = ["Aprendizaje", "Tecnología"]
aliases = ["/tensorflow_for_raspberry"]
comments = true	# set false to hide Disqus
share = true	# set false to hide share buttons
author = "Eloy López"
featured = true
description = "Continuando con el artículo anterior busco la forma práctica de experimentar Machine Learning en la Raspberry ..."
#image ="/images/Raspberry_Docker.png"
+++

¿Quién dijo que solo se puede experimentar con *Machine Learning* si cuentas con grandes recursos? Esto no es del todo cierto, dependerá del grado de dificultad, la extensión de los datos y el enfoque del problema que abordemos. Cualquiera que tenga una modesta Raspberry puede comenzar a experimentar y aprender los fundamentos del [aprendizaje automático](https://es.wikipedia.org/wiki/Aprendizaje_autom%C3%A1tico) de forma rápida y sencilla.

[{{< amp-img width="640" height="480" layout="responsive" src="images/RaspiTensorDocker3.png" alt="Raspberry Pi 3 + Docker + Machine Learning" >}}](https://hub.docker.com/r/elswork/rpi-tensorflow/)

Partiendo de las premisas del [anterior artículo](https://deft.work/mis_primeros_contenedores), traté de encontrar un contenedor Docker compatible con la arquitectura ARM de Raspberry, concretamente uno que me permitiese utilizar la  biblioteca de código abierto [Tensorflow](https://www.tensorflow.org/) de Google. Investigando por la red me encontré con el [estupendo trabajo](https://github.com/romilly/rpi-docker-tensorflow) de [Romilly Cocking](https://twitter.com/romillyc), que permite experimentar las técnicas de Machine Learning en los prácticos notebooks de Jupyter (iPython). el cual modifique para utilizar la reciente versión Tensorflow 1.0 y añadir varias librerías, obteniendo un contenedor que incluye los siguientes elementos:

* [Python](https://www.python.org/): Un lenguaje de programación multiparadigma, ya que soporta orientación a objetos, programación imperativa y, en menor medida, programación funcional. Es un lenguaje interpretado, usa tipado dinámico y es multiplataforma.

* [Numpy](http://www.numpy.org/): Paquete fundamental para la computación científica con Python.

* [Scipy](https://www.scipy.org/): Software de código abierto para la computación científica en Python.

* [Matplotlib](http://matplotlib.org/): Una biblioteca para la generación de gráficos a partir de datos contenidos en listas o arrays en el lenguaje de programación Python.

* [Pandas](http://pandas.pydata.org/): Una biblioteca de código abierto, con licencia BSD que proporciona estructuras de datos de alto rendimiento y fácil de usar y herramientas de análisis de datos para Python.

* [Scikit-learn](http://scikit-learn.org/): Una biblioteca de Machine Learning de software libre para el lenguaje de programación Python.

* [Tensorflow](https://www.tensorflow.org/): Otra biblioteca de Machine Learning de software libre desarrollado por Google para satisfacer sus necesidades de sistemas capaces de construir y entrenar redes neuronales para detectar y descifrar patrones y correlaciones análogas al aprendizaje y razonamiento que usan los humanos.

* [Jupyter](http://jupyter.org/): El proyecto Jupyter es un proyecto de código abierto que nació del Proyecto IPython en 2014 a medida que evolucionó para apoyar la ciencia de datos interactivos y la computación científica en todos los lenguajes de programación, hace uso de la shell y el kernel de iPython ([ipykernel](https://github.com/ipython/ipykernel)), mientras que el notebook y otras partes de IPython pasaron a formar parte del proyecto Jupyter.

Un completo arsenal con el experimentar una gran parte de los ejemplos que encontrará en las webs anteriores y con sus propios proyectos, una solución versátil que permite agilizar las pruebas y ajustes de pequeñas porciones de código o programas más complejos. También puede ser utilizado para elaborar guías, tutoriales y otros tipos de documentación en la que se puede ilustrar paso a paso las partes del proceso con un amplio abanico de recursos multimedia (texto enriquecido, imágenes, videos, gráficos, ...).

[{{< amp-img width="782" height="357" layout="responsive" src="images/Panda.gif" alt="Docker + Jupyter + Panda" >}}](images/Panda.gif)

A continuación os dejo los enlaces a [GitHub](https://github.com/DeftWork/rpi-tensorflow) y el [Repositorio de Docker](https://hub.docker.com/r/elswork/rpi-tensorflow/), con los que podréis empezar a utilizar directamente el contenedor o construir el vuestro ajustándolo a vuestras necesidades.
