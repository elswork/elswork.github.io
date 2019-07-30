+++
date = "2015-02-23T02:09:17+02:00"
draft = false
title= "Experimentando con OpenVSP, Three.js y WebVR Boilerplate"
tags = ["aeronaves","aviones","Cardboard","diseño","Oculus Rift","OpenVSP","Project Wing","Realidad Virtual","Threejs","WebGl","WebVR"]
categories = ["Aprendizaje", "Tecnología"]
# aliases = ["/?p=156"]
comments = true	# set false to hide Disqus
share = true	# set false to hide share buttons
author = "Eloy López"
featured = false
description = "Desde hace tiempo, posiblemente desde que tengo uso de razón, me apasionan los aviones"
# image ="/static/deftwork.png"
+++

Desde hace tiempo, posiblemente desde que tengo uso de razón, me apasionan los aviones, no para volar en ellos, me pone nervioso, sino para verlos volar e incluso pilotarlos remotamente. A pesar de lo que pueda parecer no esta todo inventando en aeronáutica, de hecho, continuamente se están explorando nuevas formas de vuelo, concretamente me llama la atención los progresos que se han realizado con el <a title="Project Wing de Google" href="http://www.xataka.com/otros/google-presenta-project-wing-sus-drones-para-entregas" target="_blank">Project Wing de Google</a> que combina el vuelo estático y el despegue horizontal de los helicópteros, con la eficiencia del planeo de los aviones convencionales.

Este proyecto me gusto tanto que inconscientemente me puse a imaginar diseños de aviones similares, la imaginación es la herramienta más potente y rápida de diseño que tenemos, pero tiene varios inconvenientes, es difícil de transmitir, para ello hay que plasmar lo que imaginamos de alguna manera, la imaginación no te da los detalles técnicos de lo que imaginas, es decir, o tienes mucha experiencia en aeronáutica o difícilmente puedes deducir las características de vuelo de lo que imaginas. Por todo esto me propuse buscar un programa para plasmar el diseño, casualmente hacia cuestión de días había salido una actualización de <a title="OpenVsp" href="http://www.openvsp.org/" target="_blank">OpenVSP</a>, lo cual creo que contribuyo a que encontrase este proyecto en la maraña de Internet.

OpenVSP es una herramienta de geometría paramétrica de aeronaves, que permite al usuario crear un modelo 3D de una aeronave definido por parámetros de ingeniería comunes. Sobre el modelo generado se puede obtener información técnica mediante el análisis de los parámetros más comunes de la ingeniería aeronáutica. Cabe destacar que  es un proyecto de la NASA que nació a principio de los 90&#8217;s (quien sabe que míticas aeronaves habrán sido diseñadas con este programa), que fue abierto a la comunidad en 2012 al declararlo proyecto Open Source bajo la NASA Open Source Agreement (NOSA). Esta disponible para Windows, Mac y Linux.

La instalación en Ubuntu 14.04, no fue un camino de rosas, pero gracias a las <a title="Instrucciones de la Web" href="http://www.openvsp.org/wiki/doku.php?id=installation_on_ubuntu_11.10" target="_blank">Instrucciones de la Web</a> y la <a title="ayuda de Rob McDonald en el foro" href="https://groups.google.com/forum/#!topic/openvsp/YF64iqoFDFs" target="_blank">ayuda de Rob McDonald en el foro</a> logré instalarlo.

Casualmente en ese mismo tiempo también estaba bastante impresionado con el proyecto de Brian Peris <a title="RiftSketch" href="https://github.com/brianpeiris/RiftSketch" target="_blank">RiftSketch</a>

<div class="jetpack-video-wrapper">
  <span class='embed-youtube' style='text-align:center; display: block;'></span>
</div>

Se trata de un proyecto  de programación &#8220;en vivo&#8221; en un entorno de  realidad virtual basado en <a title="Three.js" href="http://threejs.org/" target="_blank">Three.js</a>, que es una librería JavaScript que simplifica la creación de objetos, escenarios, luces, efectos y animaciones en WebGL &#8211; 3D. Lamentablemente RiftSketch solo funciona con las gafas de realidad virtual Oculus Rift, y yo no las tengo, por lo que decidí investigar si se podría crear algo similar pero para la <a title="CardBoard de Google" href="https://www.google.com/get/cardboard/ " target="_blank">CardBoard de Google</a> (que es infinitamente más asequible).

En la búsqueda encontré el proyecto <a title="WebVR boilerplate" href="http://smus.com/responsive-vr/" target="_blank">WebVR boilerplate</a> de Boris Smus, que si bien no aborda la programación en vivo, es un excelente punto de partida para cualquier proyecto WebVR, ya que, los proyectos resultantes no solo son compatibles con Oculus Rift y Cardboard, sino que también sirve para PC, móvil, &#8230; e incluso es capaz de detectar que tipo de dispositivo y su características para la realidad virtual, aprovechando al máximo las capacidades del dispositivo, como por ejemplo el uso de los giroscopos del Smartphone para controlar la orientación de la escena, sobra decir que me encantó, así que me puse a experimentar con el ejemplo, lo combine con el <a title="Ejemplo Web Cardboard" href="http://vr.chromeexperiments.com/" target="_blank">ejemplo Web para Cardboard *</a> y por último, se me ocurrió intentar meter en ese espacio de realidad virtual, una boceto básico generado con OpenVSP y este fue <a title="Ejemplo WebVR Boilerplate" href="http://deft.work/webvrbp/" target="_blank">el resultado</a>:<figure id="attachment_158" style="width: 689px" class="wp-caption aligncenter">

<a title="Prueba WebVR Boilerplate" href="http://deft.work/webvrbp/" target="_blank"><img class="size-full wp-image-158" src="/images/webvrbp_020.png" alt="Ejemplo combinado" width="689" height="420" srcset="/images/webvrbp_020-300x183.png 300w, /images/webvrbp_020.png 689w" sizes="(max-width: 689px) 100vw, 689px" /></a><figcaption class="wp-caption-text">Ejemplo WebVR Boilerplate con modelo generado en OpenVSP </figcaption></figure>

Se podría decir que esta prueba no tiene una utilidad concreta, pero a mi me ha servido para ir aprendiendo sobre la marcha algunos conceptos de estos apasionantes mundillos, espero poder seguir avanzando hacia el ejemplo de Brian Peris o hacia donde me lleve la marea&#8230;  (continuará)

* Me llama la atención que en la Web de Cardboard y en la de desarrolladores, apenas se le da relevancia a esta otra vía de programación, se centran en el desarrollo para Android y Unity, lo cual me parece un error.
