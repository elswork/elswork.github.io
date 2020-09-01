+++
date = "2015-01-15T02:09:17+02:00"
draft = false
title= "Odroid XU3-Lite, pequeña pero potente."
tags = ["ARMv7","Docker","Arduino","Odroid","Espruino","Hardkernel","Raspberry","Ubuntu","XBMC"]
categories = ["Tecnología"]
# aliases = ["/?p=137"]
comments = true	# set false to hide Disqus
share = true	# set false to hide share buttons
author = "Eloy López"
featured = false
description = "Tengo una gran afición por el cacharreo tecnológico, he probado varias plataformas de aprendizaje electrónico, experimentación y prototipado..."

+++
Tengo una gran afición por el cacharreo tecnológico, he probado varias plataformas de aprendizaje electrónico, experimentación y prototipado como <a title="Arduino" href="http://www.arduino.cc/" target="_blank">Arduino</a>,  <a title="Espruino" href="http://www.espruino.com/" target="_blank">Espruino</a>, &#8230;

Había escuchado hablar muy bien de las famosas <a title="Raspberry" href="http://www.raspberrypi.org/" target="_blank">Raspberry</a>, por lo que me decidí a probar el último modelo, Raspberry B+, la cual me sorprendió gratamente tras comprobar, que a pesar de su reducido precio es una plataforma con unas posibilidades maravillosas, una magnifica herramienta para el ocio, aprendizaje, &#8230;

A pesar de todo ello se queda un poco corta en cuanto a capacidad de proceso, por lo que casi sin planteármelo me puse a analizar otras plataformas de similares características, es en este punto donde acabé enamorándome de las especificaciones de la <a title="Odroid" href="http://www.hardkernel.com/main/main.php" target="_blank">Odroid</a> <a title="Odroid XU3-Lite" href="http://www.hardkernel.com/main/products/prdt_info.php?g_code=G141351880955" target="_blank">XU3-Lite</a>, que con un coste algo más elevado pero razonable, esta en las antípodas respecto a la capacidad de procesamiento de la Raspberry.

A pesar de su reducido tamaño es un ordenador completo y muy potente, mezcla entre HTPC (Home Theater Personal Computer) y placa para proyectos electrónicos tipo Arduino o Raspberry.

Desarrollado con la tecnología ARM ® <a title="Big.little" href="http://www.arm.com/products/processors/technologies/biglittleprocessing.php" target="_blank">Big.little</a> ™, forma una solución heterogénea Multi-Processing (HMP)  de 8 núcleos, con una gestión muy eficiente de recursos.

Compatible con multitud de SO  Linux , incluyendo la última Ubuntu 14.04 y el Android 4.4

Yo la he usado principalmente con Ubuntu al que he tenido que modificar ligeramente para que pudiese ejecutar Docker (plataforma abierta para aplicaciones distribuidas), aunque principalmente la he utilizado para <a title="XBMC KODI" href="http://kodi.tv/" target="_blank">XBMC</a>, programa que al contrario que la Raspberry mueve sin problemas.

Estas son sus especificaciones:

* Samsung Exynos 5422 Cortex ™ -A15 1.8GHz quad core y CPUs de cuatro núcleos Cortex ™ -A7

* MP6 Mali- T628 ( OpenGL ES 3.0 / 2.0 / 1.1 y OpenCL 1.1 Perfil completo)

* RAM 2GByte LPDDR3 a 933MHz (ancho de banda de memoria 14.9GB/s)

* eMMC 5.0 HS400, almacenamiento Flash

* USB 3.0 Host x 1 , USB 3.0 OTG de x 1 , USB 2.0 Host x 4

* HDMI 1.4a

* Puerto Ethernet

En general estoy muy contento con ella aunque la experiencia con el envío fue penosa, tardo un mes en llegar y al venir de Corea del Sur, me toco pagar el impuesto de la aduana.

Recientemente han lanzado un nuevo modelo muy competitivo en cuanto a precio y recursos, la <a title="Odroid C1" href="http://www.hardkernel.com/main/products/prdt_info.php?g_code=G141578608433" target="_blank">Odroid C1</a> una magnifica alternativa que sin duda dará para todo tipo de proyectos locos.

Gracias al magnífico artículo de Robologs <a title="Primeros pasos con Odroid" href="http://robologs.net/2014/07/24/primeros-pasos-odroid/" target="_blank">Primeros pasos con Odroid</a> descubrí que para trabajar con ella lo primero que hay que hacer es expandir el SO.

Por último me gustaría destacar el <a title="Odroid Magazine" href="http://magazine.odroid.com/" target="_blank">magazine sobre Odroid</a> que la marca publica de forma gratuita mensualmente con artículos y tutoriales muy interesantes.<figure id="attachment_138" style="width: 557px" class="wp-caption aligncenter">

[<img class="size-full wp-image-138" src="/images/EsquemaXU3-Lite2.webp" alt="Esquema Odroid XU3-Lite" width="557" height="350" srcset="/images/EsquemaXU3-Lite2-300x189.webp 300w, /images/EsquemaXU3-Lite2.webp 557w" sizes="(max-width: 557px) 100vw, 557px" />][1]<figcaption class="wp-caption-text">Esquema Odroid XU3-Lite</figcaption></figure>

 [1]: /images/EsquemaXU3-Lite2.webp
