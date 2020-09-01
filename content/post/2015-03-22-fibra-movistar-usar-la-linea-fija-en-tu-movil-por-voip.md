+++
date = "2015-03-22T02:09:17+02:00"
draft = false
title= "Fibra Movistar - Usar la linea fija en tu móvil por voip"
tags = ["Movistar","SIP","VOIP"]
categories = ["De interés general", "Sin Clasificar"]
# aliases = ["/?p=170"]
comments = true	# set false to hide Disqus
share = true	# set false to hide share buttons
author = "Eloy López"
featured = false
description = "Además de la linea fija habitual puedes realizar llamadas voip como si de la linea fijas se tratase..."

+++
Recientemente descubrí que si dispones de una conexión de fibra <a title="Wikipedia -Fibra hasta la casa" href="http://es.wikipedia.org/wiki/Fibra_hasta_la_casa" target="_blank">FTTH</a> de Movistar además de la linea fija habitual puedes realizar llamadas voip como si de la linea fijas se tratase, es decir, con llamadas al mismo precio (fijos nacionales gratis). Puedes mantener hasta 4 llamadas concurrentemente y puedes realizarlas o responderlas desde el propio smartphone.

La forma más fácil de utilizarlo es instalando la aplicación &#8220;[Mi Fijo][1]&#8221; de Movistar desde Google Play, únicamente hace falta que pongas tu numero fijo y el nombre de la red wifi, a continuación, una vez que se registra correctamente (se queda un circulo verde en la barra de notificaciones) cada llamada que realices te preguntará si la quieres sacar por el movil o el fijo y cuando te llamen, ademas del fijo tu movil también sonará. Según he leído es posible que en un futuro puedas realizar llamadas por tu fijo desde fuera de casa.

Si eres de los que te gusta rizar el rizo podrás configurar este nuevo canal SIP en multitud de aplicaciones e incluso PBX, a continuación os paso el ejemplo de configuración en [CSipSimple][2] mi aplicación voip preferiada:

Nombre de Cuenta, Identificador de llamada, nombre de usuario, contraseña: 9XXXXXXXX (los nueve digitos de tu telefono fijo).

Servidor: telefonica.net:5060

Servidor proxy: 10.31.255.134:5070
{{< amp-img width="576" height="1024" layout="responsive" src="/images/Screenshot_2015-03-20-19-17-35.webp" alt="Configuración CSipSimple" >}}

 [1]: https://play.google.com/store/apps/details?id=com.telefonica&hl=es
 [2]: https://play.google.com/store/apps/details?id=com.csipsimple&hl=es
