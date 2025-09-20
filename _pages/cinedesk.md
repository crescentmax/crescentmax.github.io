---
title: CineDesk
layout: post
permalink: /projects/cinedesk
---

**CineDesk** is an ongoing project that serves as a virtual production tool for rapid pre-visualization in collaborative environments. Designers and animators can use this interface to effortlessly **plan the staging**, **improve the layout**, and **generate storyboard**. 

The system supports **two input methods** simultaneously: direct touch interaction from the touchscreen and 6-Degrees-of-Freedom (6DoF) navigation using a ***Spacemouse***.

By combining intuitive controls with flexible visualization capabilities, CineDesk aims to streamline the pre-viz process, reduce iteration time, and enhance creative collaboration across teams.

<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/cinedesk/cinedesk.webp' | relative_url }}" alt="Prototype" style="width: 80%; height: auto;">
    <p style="text-align: center; font-style: italic;">Use Case</p>
</div>

---
## Touch Input

The system provides an intuitive interface that allows even non-technical users to modify scene layouts and set up cameras quickly. Using a top-down view, users can manipulate actors in the scene with simple gestures.

<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/cinedesk/cinedesk-spacemouse-control.gif' | relative_url }}" alt="Prototype" style="width: 100%; height: auto;">
    <p style="text-align: center; font-style: italic;">Camera navigation with the touch input interface</p>
</div>

CineDesk is structured into three primary layers:
+ **3D Scene Layer** – Cameras, lights, metahumans, and other actors in the 3D level.
+ **Movable Widgets Layer** – Actors with CineDesk components generate widgets at runtime, enabling configuration and transformation via the touchscreen.
+ **Widget Detail Layer** – Contains functional UI elements such as the control panel and detail viewer.

<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/cinedesk/system-overview.png' | relative_url }}" alt="Prototype" style="width: 80%; height: auto;">
    <p style="text-align: center; font-style: italic;">System Overview</p>
</div>

---
## Tangible Object Input
In addition to touchscreen interaction, CineDesk integrates a tangible input device — the ***Spacemouse***. With its 6-Degrees-of-Freedom (6DoF) sensor, users can intuitively and precisely manipulate actors and cameras within the scene. 

Much like a joystick, the Spacemouse enables smooth translation, rotation, and navigation, allowing designers to adjust staging and spatial relationships with a high degree of control and immediacy.


<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/cinedesk/spacemouse.webp' | relative_url }}" alt="Prototype" style="width: 80%; height: auto;">
    <p style="text-align: center; font-style: italic;">User Input with the Tangible Object (Spacemouse)</p>
</div>

---
## Easy Camera Setup

The system provide real-time camera preview with *off world live* plugin. It enables CineCameras to seamlessly stream their views via Spout output, enhancing the overall virtual production workflow.

<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/cinedesk/camera-view.webp' | relative_url }}" alt="Prototype" style="width: 80%; height: auto;">
    <p style="text-align: center; font-style: italic;">Camera Preview <br> The system supports multiple inputs simultaneously</p>
</div>

With `DeskCameraComponent` and `DeskWidgetSubsystem`, users can easily configure camera settings via touch input.

<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/cinedesk/cinedesk-camera.gif' | relative_url }}" alt="Prototype" style="width: 100%; height: auto;">
    <p style="text-align: center; font-style: italic;">Adjust camera settings with the touch input interface</p>
</div>