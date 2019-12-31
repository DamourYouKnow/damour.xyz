---
title: HAHA NO UR
layout: project
order: 3
repository: https://github.com/DamourYouKnow/HAHA-NO-UR
built_with:
    - Python
    - MongoDB
link: github.com/DamourYouKnow/HAHA-NO-UR
---

A Discord bot designed to emulate the gacha mechanics in the mobile rhythm game 
Love Live! School Idol Festival. HAHA NO UR allows users to build up and manage 
their card album.

Game metadata is periodically collected using the 
[School Idol Tomodachi](https://schoolido.lu) API and is stored in a MongoDB 
database instance. The interactions within Discord are implemented using the 
[discord.py](https://github.com/Rapptz/discord.py) wrapper for the Discord API. 
Gacha summary images are stitched together using the 
[Pillow](https://pypi.org/project/Pillow/) Python library.
