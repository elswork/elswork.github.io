+++
date = "2014-10-22T02:09:17+02:00"
draft = false
title= "Livebox 2.1 - Usar la linea fija en los smartphones"
tags = ["CSipSimple","Livebox","LivePhone","SIP","smartphone","softphone","VOIP"]
categories = ["Telefonía", "Tecnología"]
# aliases = ["/?p=92"]
comments = true	# set false to hide Disqus
share = true	# set false to hide share buttons
author = "Eloy López"
featured = false
description = "Las instrucciones de esta entrada van dirigidas a aquellos que tengáis el ADSL y el teléfono con Orange y dispongáis de un router Livebox 2.1..."
# image ="/static/deftwork.png"
+++
Las instrucciones de esta entrada van dirigidas a aquellos que tengáis el ADSL y el teléfono con Orange y dispongáis de un router Livebox 2.1, que a diferencia del Livebox 2.0 no tiene el botón redondo WPS en el frontal, sino que lo tiene en un lateral, es rectangular y más pequeño.

Existe una nueva versión de firmware 00.96.315 (11.09.2014-15:05:12), que se esta actualizando de forma remota, desatendida y progresiva en los routers de Orange, yo particularmente estuve 2 semanas &#8220;suplicando&#8221; mediante privados a personal de Orange en el foro http://comunidad.orange.es/ que me lo actualizaran, hasta que me lo pusieron, no se si por mis peticiones o porque realmente ya me tocaba. El caso es que, dicho firmware trae nuevas funcionalidades al Livebox 2.1, la más destacada para mi es la posibilidad de configurar nuestros smartphones como softphones para realizar y recibir llamadas por la linea fija, aunque no es la única funcionalidad, en mi caso al aplicar el nuevo firmware se solucionó el bug que no me permitía restaurar el router a partir de una copia de la configuración, en la versión anterior del firmware 00.96.114 (08.02.2013-21:33:12) cuando restauraba una de estas copias de la configuración, la linea telefónica dejaba de funcionar, aparentemente en la nueva versión esta resuelto.

La cuestión es que para aprovechar este servicio se debe instalar en teléfonos android una app que existe en Google Play Store, pero que por algún oscuro motivo no esta disponible en España,  mientras que en Francia llevan años usándola.

<a title="Livebox Phone - NO DISPONIBLE" href="https://play.google.com/store/apps/details?id=com.orange.livephoneapplication" target="_blank">https://play.google.com/store/apps/details?id=com.orange.livephoneapplication</a>

Pero tranquilos, en esta vida hay solución para todo, o casi &#8230;

Os recomiendo una excelente y gratuita app que podréis reutilizar con multitud de servicios Sip.

<a title="CSipSimple en Google Play" href="https://play.google.com/store/apps/details?id=com.csipsimple" target="_blank">https://play.google.com/store/apps/details?id=com.csipsimple</a>

Más adelante os diré como configurarla, de momento debéis entrar en vuestro Livebox, típicamente en <a title="Página de Gestión Router Livebox" href="http://192.168.1.1" target="_blank">http://192.168.1.1</a> y rellenar con los datos que queráis tal como aparece en la imagen, usuario, contraseña y habilitar proxy SIP para softphones genéricos:<figure id="attachment_95" style="width: 604px" class="wp-caption aligncenter">

[<img class="wp-image-95 size-large" src="/images/ConfigSoftphoneLivebox-1024x559.png" alt="" width="604" height="329" srcset="/images/ConfigSoftphoneLivebox-300x164.png 300w, /images/ConfigSoftphoneLivebox-1024x559.png 1024w, /images/ConfigSoftphoneLivebox.png 1028w" sizes="(max-width: 604px) 100vw, 604px" />][1]<figcaption class="wp-caption-text">Parámetros a configurar</figcaption></figure>

A continuación abrir csipsimple en el smartphone, añadir una cuenta, bajar hasta la rueda dentada (Advanced) y poner los siguientes datos (con el usuario y password configurados previamente en el Livebox).<figure id="attachment_94" style="width: 576px" class="wp-caption aligncenter">

[<img class="wp-image-94 size-large" src="/images/ConfigCSipSimple-576x1024.png" alt="" width="576" height="1024" srcset="/images/ConfigCSipSimple-576x1024.png 576w, /images/ConfigCSipSimple.png 1080w" sizes="(max-width: 576px) 100vw, 576px" />][2]<figcaption class="wp-caption-text">Configuracion CSipSimple Livebox2.1</figcaption></figure>

Al darle a guardar se queda en estado &#8220;Registrando&#8230;&#8221; de color naranja, en este momento debéis pulsar el botón WPS del livebox (hasta que parpadea el wifi), acto seguido si todo va bien pasa a color verde y ya podéis utilizarlo, cada vez que marques en el móvil te preguntara por donde quieres sacar la llamada y cuando alguien te llame al fijo también te sonará el móvil y podrás responder directamente.

Si todavía os habéis quedado con ganas de más os dejo un enlace para conocer [Las interesantes opciones de llamada][3].

 [1]: /images/ConfigSoftphoneLivebox.png
 [2]: /images/ConfigCSipSimple.png
 [3]: http://comunidad.orange.es/t5/Livebox/Telefon%C3%ADa-VOIP-en-Livebox-de-Orange-Todos-los-secretos-y-trucos/m-p/290417/highlight/true#M246
