+++
date = "2019-06-16T16:03:26+02:00"
draft = false
title= "Mi primera imagen Docker de triple arquitectura - Samba"
tags = ["ARMv7","ARMv8","ARM64","AMD64","Docker","Contenedores","Samba","Multiple-Arquitecture"]
categories = ["Aprendizaje", "Tecnología"]
aliases = ["/Samba"]
comments = true	# set false to hide Disqus
share = true	# set false to hide share buttons
author = "Eloy López"
featured = true
description = "Uno de los contenedores que utilizo de forma habitual contiene Samba, lo uso para compartir archivos y carpetas entre diferentes dispositivos ..."
cover = "images/Samba_logo_2010.svg"
+++

Uno de los contenedores [Docker](https://www.docker.com/) que utilizo de forma habitual contiene [Samba](https://es.wikipedia.org/wiki/Samba_(software)), lo uso para compartir archivos y carpetas entre diferentes dispositivos, resulta muy práctico para infinidad de tareas, sobretodo cuando trabajas en remoto con servidores linux sin escritorio, te permite trabajar cómodamente desde tu PC personal en el que puedes utilizar todas las herramientas de edición habituales completamente configuradas a tu gusto. 

[{{< amp-img width="776" height="136" layout="responsive" src="images/Samba_logo_2010.svg" alt="Samba" >}}](https://www.samba.org/)

Normalmente estos archivos y directorios se trabajan en alguna carpeta local de tu PC y posteriormente se suben al servidor para probarlos, o se prueban en local con alguna herramienta equivalente, pero yo me he acostumbrado a trabajar de esta forma ya que me resulta muy cómoda y ágil.

Cuando trabajo en la edición de contenedores de Docker para múltiples arquitecturas, en muchas ocasiones debo hacer una serie de operaciones en diferentes máquinas, podría copiar los contenidos en cada unos de los sistemas o sincronizar con algún repositorio en cada una de las máquinas, pero me resulta mucho más practico compartir un directorio con los ficheros fuentes y conectar cada una de las máquinas a este, de esta forma, me ahorro mucho trabajo.

Conecto con mi ordenador personal a este recurso compartido como si fuera una máquina más y al realizar los cambios puedo probar o ejecutar en las máquinas remotas sin tener que sincronizar porque los cambios son inmediatos. Realizo el control de código con Git, pero no estoy limitado a la consola ya que puedo trabajar directamente con algún gestor de repositorios, que siempre resulta más visual e interactivo, concretamente utilizo [GitHub Desktop](https://desktop.github.com/), que es muy práctico, es multiplataforma y de código abierto. Otra de las herramientas a las que me he aficionado es [Visual Studio Code](https://code.visualstudio.com/), el mejor programa de Microsoft de todos los tiempos, también multiplataforma y de código abierto, se lo recomiendo a todo el mundo, incluso a usuarios que no tienen nada que ver con la programación, esta herramienta tiene infinidad de trucos que pueden ahorrarte horas de trabajo.

Curiosamente en [Visual Studio Code](https://code.visualstudio.com/) están lanzando nuevas funcionalidades que "reemplazarían" el uso que actualmente le estoy dando a Samba. Se trata de poder editar remotamente a través de ssh.
Por el momento estas nuevas funcionalidades se encuentran en fase de pruebas, por lo que seguiré utilizando mi método de trabajo, al menos por algún tiempo.

Recientemente compré la [Nvidia Jetson Nano](https://www.nvidia.com/es-es/autonomous-machines/embedded-systems/jetson-nano/). Desde que compré la primera Raspberry siempre he sido un fanático de este tipo de mini ordenadores o [SoCs](https://es.wikipedia.org/wiki/System_on_a_chip), por su reducido precio, ruido y espacio y por la gran versatilidad de este tipo de placas. He tenido las siguientes: Raspberry 2, Odroid XU3 lite, Raspberry 3, Odroid HC1 y ahora la Jetson Nano, todas han funcionado incansablemente noche y día de forma estable y robusta, he tenido muy pocas incidencias de las cuales la mayoría se podrían achacar a un accidente o mal uso.

A diferencia de las anteriores, la Jetson Nano viene con una nueva arquitectura arm8 o arm64, por lo que no podía utilizar los contenedores Docker que habitualmente utilizo para arquitectura arm7, los cuales tengo preparados para funcionar en mi portátil que tiene la tradicional arquitectura amd64 o x86_64, pero no es en absoluto un problema ya que la mayoría de software para arm7 también existe para arm8, por tanto solo tengo que hacer un poco de trabajo extra para que funcione en la nueva arquitectura.

Hace algún tiempo descubrí, que gracias a [	Multi-CPU Architecture Support](https://docs.docker.com/docker-for-mac/multi-arch/) podía crear contenedores que funcionasen para diferentes arquitecturas y almacenarlos en el mismo repositorio de tal forma que ya no tenia que crear uno separado por cada arquitectura, de tal forma que puedes utilizar el mismo comando para desplegarlo independientemente de la arquitectura del host, tan solo tienes que hacer "build" en la plataforma deseada y subirlo al repositorio.

Este es el primer contenedor Multi-arch (arm7, amd64) que he adaptado a la tercera arquitectura arm64.

| GitHub | Docker Hub |
| --- | --- |
| [Samba](https://github.com/DeftWork/samba) | [Samba](https://hub.docker.com/r/elswork/samba "elswork/samba on Docker Hub") |

| Docker Pulls | Docker Stars | Size/Layers |
| --- | --- | --- |
| [{{< amp-img width="120" height="20" layout="responsive" src="https://img.shields.io/docker/pulls/elswork/samba.svg" alt="Pulls" >}}](https://hub.docker.com/r/elswork/samba "elswork/samba on Docker Hub") | [{{< amp-img width="120" height="20" layout="responsive" src="https://img.shields.io/docker/stars/elswork/samba.svg" alt="Stars" >}}](https://hub.docker.com/r/elswork/samba "elswork/samba on Docker Hub") | [{{< amp-img width="120" height="20" layout="responsive" src="https://images.microbadger.com/badges/image/elswork/samba.svg" alt="Badges" >}}](https://microbadger.com/images/elswork/samba "elswork/samba on microbadger.com") |

Espero os resulte tan útil como a mí.
