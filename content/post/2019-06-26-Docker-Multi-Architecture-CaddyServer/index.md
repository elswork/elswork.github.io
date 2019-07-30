+++
date = "2019-06-26T18:10:26+02:00"
draft = false
title= "Imagen Docker de triple arquitectura - CaddyServer"
tags = ["ARMv7","ARMv8","ARM64","AMD64","Docker","Contenedores","Caddy","Caddyserver","Letsencrypt","HTTPS","HTTP/2","Webserver","Multiple-Arquitectura"]
categories = ["Aprendizaje", "Tecnología"]
aliases = ["/caddy-docker"]
comments = true	# set false to hide Disqus
share = true	# set false to hide share buttons
author = "Eloy López"
featured = true
description = "Otro de los contenedores que utilizo de forma habitual es con el que sirvo las páginas de mi blog y otros recursos, también lo uso para redirigir trafico web a otros recursos externos a Caddy ..."
images =["images/CaddyCollage.png"]
+++

Otro de los contenedores que utilizo de forma habitual es con el que sirvo las páginas de mi blog y otros recursos, también lo uso para redirigir trafico web a otros recursos externos a [Caddy](https://caddyserver.com/), un novedoso servidor web multiplataforma, capaz de servir HTTP/2, libre de dependencias, seguro por defecto, fácil de usar y apto para poner en producción gracias a su robustez. Sin duda su capacidad de servir en HTTPS mediante Let's Encrypt y la sencillez a la hora de implementarlo es el punto fuerte de este servidor web.


[![Caddy](images/Caddy2.png)](https://caddyserver.com/)

Desde que lo descubrí hace más de dos años, lo utilizo como servidor web principal, tiempo en el que ha tenido un desempeño brillante, con cero interrupciones y problemas, fue uno de [mis primeros contenedores](https://deft.work/blog/2017/03/20/mis-primeros-contenedores-docker-para-raspberry-y-otros-dispositivos-arm/) con los que empecé a experimentar en Docker, añadir esa capa de abstracción hace que esta extraordinaria herramienta sea aun mejor.

Por estos y muchos otros motivos decidí adaptarlo a la arquitectura arm8 o arm64 de mi última adquisición la [Nvidia Jetson Nano](https://www.nvidia.com/es-es/autonomous-machines/embedded-systems/jetson-nano/).

Durante este tiempo he ido actualizando la imágen adaptándola a la nuevas versiones de Caddyserver que han ido surgiendo. Al principio mantenía dos versiones de la imágen, con soporte para servir PHP y sin él, con el paso de las nuevas versiones de Caddy la versión con PHP dejo de funcionar, por suerte en esta última versión he podido recuperar esa funcionalidad y además sin tener que crear una versión paralela, es decir, la misma versión puede incorporar o no esa funcionalidad y esto es gracias al uso de [Docker Compose](https://docs.docker.com/compose/), después de darle unas cuantas vueltas me di cuenta que no era necesario incluir esa funcionalidad en la mismo contenedor, siendo fiel al concepto de [arquitectura de microservicios](https://es.wikipedia.org/wiki/Arquitectura_de_microservicios) tiene todo el sentido que el servicio "motor PHP" tenga su propio contenedor y que ambos puedan ser invocados mediante Docker Compose como un supracontenedor o "Pod" en el que ambos contenedores están configurados para trabajar conjuntamente.  

- [GitHub](https://github.com/DeftWork/caddy-docker)

| Docker Hub | Docker Pulls | Docker Stars | Size/Layers |
| --- | --- | --- | --- |
| [Caddy](https://hub.docker.com/r/elswork/arm-caddy "elswork/arm-caddy on Docker Hub") | [![](https://img.shields.io/docker/pulls/elswork/arm-caddy.svg)](https://hub.docker.com/r/elswork/arm-caddy "elswork/arm-caddy on Docker Hub") | [![](https://img.shields.io/docker/stars/elswork/arm-caddy.svg)](https://hub.docker.com/r/elswork/arm-caddy "elswork/arm-caddy on Docker Hub") | [![](https://images.microbadger.com/badges/image/elswork/arm-caddy.svg)](https://microbadger.com/images/elswork/arm-caddy "elswork/arm-caddy on microbadger.com") |

Espero os resulte tan útil como a mí.
