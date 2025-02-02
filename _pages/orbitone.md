---
title: Orbitone 
layout: post
permalink: /projects/orbitone
---

**Orbitone** is a VR rhythm game developed by a 5-person team. We tried to explore the possibility of extending the rhythm game from 2D surface to 3D VR space. Our innovative approach earned us second place among 15 teams in a VR competition.
<br><br>
In this project, I was primarily responsible for design and testing, while also contributing to programming tasks.
<br><br>
[Watch Demo](https://youtu.be/KIr_CQgP_Xo)

---
## I. Main Idea

Most of the rhythm game use a *"Waterfall"* style note generation: notes will first appear from
far away, and then fall down along the tracks. This is also true even for the popular VR rhythm game *Beat Saber*.

<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/orbitone/DJMax.gif' | relative_url }}" alt="DJMax">
    <p style="text-align: center; font-style: italic;">Waterfall Style Rhythm Game<br>(DJMax)</p>
</div>

<div style="text-align: center; 1.5rem; margin-bottom: 1.5rem; ">
    <img src="{{ '/assets/images/projects/orbitone/Beatsaber.jpg' | relative_url }}" alt="Beat Saber" style="width: 70%;">
    <p style="text-align: center; font-style: italic;">Beat Saber</p>
</div>

However, with VR headset, we can take full advantage of the 3D space. Thus, we tried to design a new note generation style which is only possible in VR games. 

---

## II. Prototype

We first came up with a grid-based method that requires players to tap and swipe notes according to the patterns displayed on the grids. 
<br><br>
This design introduced several *challenges*:
+ Transparent grid material significantly impacts performance.
+ Without certain guidance, players may struggle to locate notes, which is  critical in rhythm games
+ Designing colliders for notes appearing on a curved screen is difficult.

<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/orbitone/DesignDoc01.png' | relative_url }}" alt="Prototype" style="width: 90%;">
    <p style="text-align: center; font-style: italic;">Design Prototype</p>
</div>

---

## III. Orbit Design

To address these challenges, we introduced three orbits in our second design iteration. These orbits provide clear visual guidance, as notes now only appear along them, enabling players to easily track and locate notes in 3D space. <br><br>
*Solution:*
+ We eliminated the need for transparent grid materials, which significantly impacted performance.
+ The orbits now offer the necessary guidance, ensuring players can effortlessly identify note positions.
+ By treating notes as individual 3D models, we simplified the collider design, overcoming the challenges of a curved screen.

<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/orbitone/DesignDoc02.png' | relative_url }}" alt="Prototype" style="width: 90%;">
    <p style="text-align: center; font-style: italic;">Final Design</p>
</div>