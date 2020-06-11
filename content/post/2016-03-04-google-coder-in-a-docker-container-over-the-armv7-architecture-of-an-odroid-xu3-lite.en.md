+++
date = "2016-03-04T02:09:17+02:00"
draft = true
title= "Google Coder in a Docker container over the ARMv7 architecture of an ODROID-XU3 Lite"
tags = ["ARMv7","Docker","Google Coder","Odroid"]
categories = ["Aprendizaje", "Tecnología"]
aliases = ["/google_coder_docker_arm"]
comments = true	# set false to hide Disqus
share = true	# set false to hide share buttons
author = "Eloy López"
featured = false
description = "I admit, I'm of those who have the syndrome of the latest version and I update everything, even when it's risky to update..."
# image ="/static/deftwork.png"
+++

<figure id="attachment_332" style="width: 672px" class="wp-caption aligncenter"><a href="/images/Odroid_Docker.png" rel="attachment wp-att-332"><img class="size-full wp-image-332" src="/images/Odroid_Docker.png" alt="Odroid-xu3 lite" width="672" height="201" srcset="/images/Odroid_Docker-300x90.png 300w, /images/Odroid_Docker.png 672w" sizes="(max-width: 672px) 100vw, 672px" /></a><figcaption class="wp-caption-text">Odroid-xu3 lite</figcaption></figure>

I admit, I'm of those who have the syndrome of the latest version and I update everything, even when it's risky to update, which usually brings many headaches and extra work , like, back to start from scratch to set everything up . I can not avoid , so , when I saw that was available last updated version of the Ubuntu for Odroid-xu3 I couldn't resist.

Luckily there are times worth trying , since many of the problems of the previous version are resolved and other issues, such as, Docker installation, than in previous versions was quite tedious, because, among other things you must to recompile the kernel.

In the current version just follow <a href="https://github.com/umiddelb/armhf/wiki/Installing,-running,-using-docker-on-armhf-(ARMv7)-devices" target="_blank">these instructions</a>, once is all set, lift the containers is almost as easy as in any Docker over a normal PC, you just have to keep in mind that only can use those images prepared for architecture ARMv7.

If like me, you like tinkering and testing all projects circulating on the Internet, encapsulate these applications is an advantage because it helps keep your base system clean, since you don't have to install anything over it, but about the containers.

<a href="/images/Coder.png" rel="attachment wp-att-333"><img class="aligncenter size-full wp-image-333" src="/images/Coder.png" alt="Google Coder" width="672" height="201" srcset="/images/Coder-300x90.png 300w, /images/Coder.png 672w" sizes="(max-width: 672px) 100vw, 672px" /></a>

Google coder is a learning tool focused in education, for anyone who wants to start programming, it was designed to be executed in an economic hardware such as the Raspberry Pi, but is perfectly compatible with ODROID because they share architecture.

To prove, just run a single command line:

> sudo docker run -d -p 8080:8080 -p 8081:8081 hypriot/rpi-google-coder

And open the browser on the specified port:

<a href="http://localhost:8080" target="_blank">localhost:8080</a>
