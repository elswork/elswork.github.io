+++
date = "2019-08-30T22:24:53+02:00"
draft = false
title= "Imagen Docker de triple arquitectura - OpenVPN"
tags = ["ARMv7","ARMv8","ARM64","AMD64","Docker","Contenedores","VPN","OpenVPN","Multiple-Arquitectura"]
categories = ["Aprendizaje", "Tecnología"]
aliases = ["/openvpn"]
comments = true	# set false to hide Disqus
share = true	# set false to hide share buttons
author = "Eloy López"
featured = true
description = "Crea tu propia conexión VPN segura de forma rápida y sencilla con OpenVPN ..."
cover = "/images/openvpn.svg"
+++

[OpenVPN](https://openvpn.net/), es una de las más populares implementaciones Open Source de una VPN [(Virtual Private Network / Red Privada Virtual)](https://es.wikipedia.org/wiki/Red_privada_virtual). Nos permite crear una conexión segura a otra red a través de Internet. y tiene múltiples aplicaciones que han ido variando a lo largo del tiempo:

 - Originalmente eran sólo una forma de conectar redes empresariales de forma segura a través de Internet.
 - También se utilizan con frecuencia para que los empleados puedan acceder a la red de la empresa desde cualquier lugar y utilizar todos los recursos de su red local (Carpetas compartidas, impresoras, …). Sin tener que estar expuestos directamente a Internet.
 - Del mismo modo también podemos configurar nuestra propia VPN para acceder a nuestra red doméstica de forma segura mientras viajamos. Esto nos permitirá interactuar como si estuviéramos en la misma LAN (red de área local).
 - Se pueden utilizar para eludir las restricciones a la hora de descargar determinados tipos de archivos o bloqueos de paginas web, dominios, IP, por parte de un Firewall, UTM o nuestro ISP.
 - Para eludir las restricciones geográficas como el Gran Cortafuegos de China o acceder a ofertas de productos más competitivas en otros países en los que se aplican distintas condiciones como: precio más económico, distinto catálogo, …
 - Cuando se utilizan redes Wi-Fi públicas, se esta expuesto a que terceros intercepten nuestras comunicaciones [Man in the middle](https://es.wikipedia.org/wiki/Ataque_de_intermediario), la conexión VPN nos permite cifrar nuestro trafico de modo que resulte muy complicado descifrarlo, esto sirve para proteger nuestra actividad de navegación de miradas indiscretas. 


[{{< amp-img width="900" height="600" layout="responsive" src="images/OpenVPNCollage.svg" alt="OpenVPN" >}}](https://openvpn.net)

Queda probado por tanto que las conexiones VPN pueden resultar útiles en múltiples circunstancias, por eso me decidí a modificar el excelente trabajo de [Kyle Manna](https://github.com/kylemanna/docker-openvpn) con su versión Docker del servidor [OpenVPN](https://openvpn.net/) para arquitectura amd64 (la arquitectura más común de los PC) para adaptarla a dos nuevas arquitecturas arm y arm64 y para simplificar un poco su uso.

Despliega tu propia VPN de cero en pocos minutos y securiza tus comunicaciones de forma rápida y sencilla.

| GitHub | Docker Hub |
| --- | --- |
| [OpenVPN](https://github.com/DeftWork/openvpn) | [OpenVPN](https://hub.docker.com/r/elswork/openvpn "elswork/openvpn on Docker Hub") |

| Docker Pulls | Docker Stars | Size/Layers |
| --- | --- | --- |
| [{{< amp-img width="120" height="20" src="https://img.shields.io/docker/pulls/elswork/openvpn.svg" alt="Pulls" >}}](https://hub.docker.com/r/elswork/openvpn "openvpn on Docker Hub") | [{{< amp-img width="120" height="20" src="https://img.shields.io/docker/stars/elswork/openvpn.svg" alt="Stars" >}}](https://hub.docker.com/r/elswork/openvpn "OpenVPN on Docker Hub") | [{{< amp-img width="120" height="20" src="https://images.microbadger.com/badges/image/elswork/openvpn.svg" alt="Badges" >}}](https://microbadger.com/images/elswork/openvpn "OpenVPN on microbadger.com") |


Espero os resulte tan útil como a mí.
