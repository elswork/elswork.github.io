+++
date = "2017-06-04T10:07:06+02:00"
draft = false
title= "Actualización de Tensorflow 1.1.0 en el contenedor Docker para Raspberry"
tags = ["ARMv7","Docker","Contenedores","Raspberry", "Machine Learnig", "aprendizaje automático", "TensorFlow", "Python", "Numpy", "Pillow", "Matplotlib", "Pandas", "H5py", "Jupyter Notebook", "TensorBoard"]
categories = ["Aprendizaje", "Tecnología"]
aliases = ["/tensorflow-1.1.0_for_raspberry"]
comments = true	# set false to hide Disqus
share = true	# set false to hide share buttons
author = "Eloy López"
featured = true
description = "Aprovechando la salida de la nueva versión estable de Tensorflow 1.1.0 he actualizado la imagen Docker para Raspberry ..."
#image ="/images/Raspberry_Docker.webp"
+++

Aprovechando la salida de la nueva versión estable de [Tensorflow 1.1.0](https://github.com/tensorflow/tensorflow/releases/tag/v1.1.0) he actualizado la imagen Docker para Raspberry de la que os hablé en el [anterior artículo](https://deft.work/tensorflow_for_raspberry).

Nuevos elementos:

* [Pillow](https://python-pillow.org/): Un fork de [PIL](https://en.wikipedia.org/wiki/Python_Imaging_Library) (Python Image Library) que nos permite hacer diabluras con los ficheros de imágenes.

* [H5py](http://www.h5py.org/): El paquete h5py es una interfaz Pythonic para el formato de datos binarios HDF5 que permite almacenar grandes cantidades de datos numéricos, y manipular fácilmente los datos de NumPy.

* [TensorBoard](https://www.tensorflow.org/get_started/summaries_and_tensorboard): Realmente ya estaba incluida en la versión anterior, pero es ahora cuando he aprendido a usarla, se trata de una suite de herramientas de visualización para nuestros desarrollos en TensorFlow.

Obviamente una humilde [Raspberry](https://www.raspberrypi.org/) no parece la mejor plataforma para ejecutar los últimos algoritmos de [aprendizaje automático](https://es.wikipedia.org/wiki/Aprendizaje_autom%C3%A1tico) (Machine Learning), una rama de la [Inteligencia Artificial](https://es.wikipedia.org/wiki/Inteligencia_artificial), que últimamente está teniendo gran repercusión y que está presente a dia de hoy en un gran número de las aplicaciones de uso cotidiano, pero no por ello quiere decir que no se pueda experimentar en esta plataforma, únicamente nos limitará en cuanto a tiempo de respuesta y capacidad de cómputo, pero por suerte la mayoría de los ejemplos que se utilizan para su aprendizaje son lo suficientemente sencillos para que con un poco de paciencia los podamos ejecutar.

[{{< amp-img width="600" height="238" layout="responsive" src="images/DeepDreamLiebre.webp" alt="Hare Deep Dream" >}}](https://dreamscopeapp.com/)

Gracias a los contenedores de Docker en apenas unos minutos podremos bajar el entorno de ejecución y las herramientas necesarias para su uso, de forma limpia, sin instalar nada directamente en el propio sistema de la Raspberry, lo cual nos libra de varias horas de tediosa instalación de decenas de librerías.

De forma similar, gracias a los Notebooks de Jupyter podremos compartir nuestros desarrollos y ejecutarlos en otras plataformas de forma transparente.

[{{< amp-img width="754" height="379" layout="responsive" src="./images/RPI-TensorBoard.webp" alt="TensorBoard Example in Raspberry" >}}](https://goo.gl/photos/CWHuarBu5p1F5asV8)

Todo esto es lo que me motiva para compartir este contenedor y poner así mi pequeño granito de arena, esperando que os resulte de utilidad al igual que a mi me ha resultado de utilidad todos los elementos que forman parte del mismo y que muchas otras personas han contribuido generosamente.

A continuación os dejo los enlaces a [GitHub](https://github.com/DeftWork/rpi-tensorflow) y el [Repositorio de Docker](https://hub.docker.com/r/elswork/rpi-tensorflow/), con los que podréis empezar a utilizar directamente el contenedor o construir el vuestro ajustándolo a vuestras necesidades.
