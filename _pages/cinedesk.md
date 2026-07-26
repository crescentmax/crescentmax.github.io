---
title: CineDesk
layout: post
permalink: /projects/cinedesk
classes:
  - project-case-study
---

<div class="case-study__tags" aria-label="Project technologies and focus">
  <span class="case-study__tag">UE</span>
  <span class="case-study__tag">UI/UX</span>
  <span class="case-study__tag">Interaction</span>
  <span class="case-study__tag">Research</span>
</div>

<p class="case-study__summary"><strong>CineDesk</strong> is a collaborative virtual-production interface that combines multi-touch staging with precise 6DoF SpaceMouse control. The research, <em>Touching the Virtual: Multi-Touch Tangible Interfaces for Virtual Production</em>, was accepted to the SIGGRAPH 2026 Posters program.</p>

<div class="case-study__actions" style="justify-content: center;">
  <a class="btn" href="https://dl.acm.org/doi/10.1145/3799825.3818775" target="_blank" rel="noopener">View publication &#8599;</a>
  <a class="btn" href="https://stories.tamu.edu/stories/texas-am-professor-uses-immersive-technology-to-push-the-limits-of-teaching/" target="_blank" rel="noopener">View story &#8599;</a>
</div>

<div style="text-align: center; margin-top: 0.75rem; margin-bottom: 1.5rem;">
  <div class="cinedesk-hero-media">
    <img loading="lazy" decoding="async" src="{{ '/assets/images/projects/cinedesk/cinedesk.webp' | relative_url }}" alt="Two collaborators using the CineDesk touch-table interface" width="1000" height="667">
  </div>
  <p class="media-caption">CineDesk supports collaborative scene layout on a shared touch display with a live camera preview.</p>
</div>

## Contribution

The Unreal-side interaction framework connects touch input, tangible camera control, runtime UI, and live scene feedback into one workflow for virtual production.

### Runtime UI

CineDesk components generate movable widgets at runtime and expose actor transforms and relevant controls through the touch interface. The UI keeps scene selection and property editing accessible to collaborators who do not normally work inside Unreal Editor.

### Multi-Touch Staging

Touch gestures support direct top-down staging on a shared display. Multiple collaborators can select scene elements, adjust layouts, and review the resulting camera view without working inside Unreal Editor.

### Tangible SpaceMouse Control

The SpaceMouse sits directly on the touch surface and acts as a physical controller for the selected virtual camera. Its continuous 6DoF input supports precise translation and rotation while keeping the controller within the same shared workspace as the scene UI.

<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
  <img loading="lazy" decoding="async" src="{{ '/assets/images/projects/cinedesk/spacemouse.webp' | relative_url }}" alt="A SpaceMouse placed directly on the CineDesk touch display" width="1000" height="667">
  <p class="media-caption">The SpaceMouse is placed on the touch display and used as a tangible 6DoF camera controller.</p>
</div>

### Simultaneous Collaborative Input

Touch and SpaceMouse events remain active at the same time. One collaborator can manipulate scene elements through touch while another controls the camera, supporting parallel decisions instead of requiring the team to alternate between input modes.

<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
  <img loading="lazy" decoding="async" src="{{ '/assets/images/projects/cinedesk/control.webp' | relative_url }}" alt="Two collaborators simultaneously using touch input and the SpaceMouse on CineDesk" width="4032" height="2268">
  <p class="media-caption">Touch input and SpaceMouse control work simultaneously, allowing collaborators to stage the scene and refine the camera together.</p>
</div>

### Virtual Camera Tooling

Camera components and the widget subsystem expose lens and transform controls for the current selection. Off World Live streams CineCamera views through Spout so the team can see the result while arranging the scene.

## System Architecture

The system keeps the 3D scene authoritative while presenting lightweight runtime representations for interaction:

**Touch or SpaceMouse input &#8594; runtime widget &#8594; scene actor transform &#8594; CineCamera preview &#8594; Spout output**

<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
  <img loading="lazy" decoding="async" src="{{ '/assets/images/projects/cinedesk/system-overview.webp' | relative_url }}" alt="Diagram of the three-layer CineDesk interface architecture">
  <p class="media-caption">The touch UI mirrors selected scene actors without replacing Unreal's underlying scene state.</p>
</div>

## Recognition and Publication

The project was developed with the Soft Interaction Lab at Texas A&amp;M University. The research paper was accepted to the SIGGRAPH 2026 Posters program.

**Touching the Virtual: Multi-Touch Tangible Interfaces for Virtual Production**  
Jinsil Hwaryoung Seo, Caleb Kicklighter, Seung Kim, Mayet Andreassen, Hadeel Ramadan, and Chengyan Tsai.
