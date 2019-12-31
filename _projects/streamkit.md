---
title: Streamkit
layout: project
order: 2
repository: https://github.com/DamourYouKnow/Streamkit
built_with:
    - C#
    - ASP.NET Core
    - Razor
    - MySQL
    - Web Sockets
link: gogomic.co
---

Built in collaboration with twitch.tv user 
[GoGoMic](https://www.twitch.tv/gogomic), this application provides 
an interface for users to create stream overlays that respond to events in real 
time. Currently, users are able to securely log into a dashboard using their 
[twitch.tv](https://twitch.tv) account where they can upload a custom image to 
use as a progress bar to track "cheer" events in their stream chat.

This application was written in C# using the ASP.NET Core web framework. Data 
is stored using an instance of a MySQL database. The Razor templating engine is 
used to handle rendering of the application's webpages.