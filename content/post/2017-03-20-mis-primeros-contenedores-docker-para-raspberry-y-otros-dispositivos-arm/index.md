+++
date = "2017-03-20T02:09:17+02:00"
draft = false
title= "Mis primeros contenedores Docker para Raspberry y otros dispositivos ARM"
tags = ["ARMv7","Docker","Contenedores","Raspberry"]
categories = ["Aprendizaje", "Tecnología"]
aliases = ["/mis_primeros_contenedores"]
comments = true	# set false to hide Disqus
share = true	# set false to hide share buttons
author = "Eloy López"
featured = false
description = "Como el uso de Raspberry y Docker me ha permitido experimentar nuevas tecnologías y formas de trabajo que han cambiado para siempre mi percepción de la informática ..."
#image ="/images/Raspberry_Docker.png"
+++

Tecnológicamente hablando tengo la percepción que nos encontramos ante un punto de inflexión, aunque mi opinión es completamente subjetiva, en realidad se trata de un paso más del proceso conocido desde hace décadas como la [Miniaturización](https://es.wikipedia.org/wiki/Miniaturizaci%C3%B3n), proceso tecnológico mediante el cual se reduce el tamaño de los dispositivos electrónicos y por extensión los ordenadores, los cuales en un espacio de tiempo relativamente corto han pasado de ocupar habitaciones a caber en la palma de la mano, al mismo tiempo que su capacidad de cómputo ha aumentado, haciendo cumplir las predicciones de la [Ley de Moore](https://es.wikipedia.org/wiki/Ley_de_Moore).

[{{< amp-img width="672" height="201" layout="responsive" src="images/Raspberry_Docker.png" alt="Raspberry Pi 3 + Docker" >}}](images/Raspberry_Docker.png)

Como decía, tan solo se trata de mi percepción, que con el uso de la [Rasberry](https://www.raspberrypi.org/) 3 ha cambiado, en el futuro mis ordenadores domésticos serán cada vez más pequeños, quizás para algunos aún es demasiado pronto para que caigan en la misma cuenta, pero para mi y para el uso que habitualmente hago, estos ordenadores son más que suficiente para casi cualquier tipo de tarea. Quizás el factor más determinante que ha propiciado el cambio de mi concepción ha sido la posibilidad de emplear la contenerización o virtualización ligera gracias a [Docker](https://www.docker.com/) y más concretamente al sistema operativo [HypriotOS](https://blog.hypriot.com/) (aunque recientemente también está disponible en los repositorios oficiales de muchas distribuciones para Raspberry como Raspbian) que simplifica y agiliza el máximo la puesta en marcha. Todo esto me ha permitido sacar el máximo partido a  esta tecnología rápidamente en las Raspberry, lo cual me ha permitido explorar y experimentar con la [arquitectura de microservicios](https://es.wikipedia.org/wiki/Arquitectura_de_microservicios) y lo que es más importante, incorporar la posibilidad de *unir* el poder de cómputo de varios dispositivos de forma rápida y sencilla gracias a [Docker Swarm](https://docs.docker.com/engine/swarm/#feature-highlights), algo así como un cluster de ordenadores que se manejan como una sola entidad, de esta forma la pequeña Raspberry se ha convertido en mi unidad de computación de referencia.

En este proceso de reaprendizaje, he utilizado las *recetas* o contenedores que otros antes que yo han contribuido generosamente, pero también he llegado al punto de querer diseñar  contenedores específicamente adaptados a mis necesidades, se puede decir que he creado contenedores modificando ligeramente las *recetas* de otros, añadiendo nuevos elementos, combinando otras *recetas* y en ocasiones cambiando la forma de construirlas, contenedores que quizás pueden resultar de utilidad o inspiración para otros.

Esta nueva forma de trabajar permite, poner en marcha nuevos servicios de forma rápida y fácilmente reproducible, lo que a la práctica supone un mayor margen de maniobras para experimentar nuevas tecnologías y formas de hacer las cosas.

[{{< amp-img width="800" height="560" layout="responsive" src="images/Raspberry-Docker-Caddy-Lypt.jpg" alt="Raspberry + Docker + Caddy + LetsEncrypt" >}}](images/Raspberry-Docker-Caddy-Lypt.jpg)

Uno de los primeros servicios con los que experimenté fue el servicio web, lo más habitual hubiera sido utilizar apache o nginx, pero me decidí por probar [Caddy](http://caddyserver.com/) un servidor web mucho más reciente que ofrece una serie de características muy atractivas:

* Rápido, ligero y fácil de configurar.

* Multiplataforma, libre de dependencias, portable, modular y expandible.

* Desarrollado el asombroso y eficiente lenguaje [Go](https://golang.org/).

* Soporte de serie para el nuevo protocolo [HTTP/2](https://es.wikipedia.org/wiki/HTTP/2).

* HTTPS automático con [Let’s Encrypt](https://letsencrypt.org/).

* Y muchas más …

Hubiera podido utilizarlo directamente en la Raspberry de forma muy sencilla, pero conseguir contenerizar un servicio así te proporciona todas las ventajas del uso de los contenedores de Docker:

* Aislamiento: Permite ejecutar el servicio de forma limpia, autosuficiente y aislada del sistema host.

* Portabilidad: Permite empaquetar y distribuir en cualquier otra plataforma no solo la aplicación sino todo el entorno de producción de forma fiable.

* Despliegue: Permite incluso automatizar el despliegue de los servicios y su escalado.

Al no encontrar ninguna imagen Docker específica para la arquitectura ARM de la Raspberry, decidí adaptar una imagen para arquitectura x86 (la más común en equipos de escritorio), simplemente sustituyendo la imagen base por una compatible con ARM, obteniendo una imágen de apenas 40 Mb podéis encontrar la *receta* en [Github](https://github.com/DeftWork/caddy-docker) y el [repositorio de Docker](https://hub.docker.com/r/elswork/arm-caddy/).

Basandome en la imagen anterior decidí añadir soporte para servir ficheros php, obteniendo una imágen de apenas 80 Mb que también hice pública en [Github](https://github.com/DeftWork/caddyphp-docker) y el [repositorio de Docker](https://hub.docker.com/r/elswork/arm-caddyphp/).
