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
    <img src="{{ '/assets/images/projects/cinedesk/cinedesk.webp' | relative_url }}" alt="Two collaborators using the CineDesk touch-table interface">
  </div>
  <p style="text-align: center; font-style: italic; font-size: 0.85rem;">CineDesk supports collaborative scene layout on a shared touch display.</p>
</div>

## Contribution

The Unreal-side interaction framework connects touch input, tangible camera control, runtime UI, and live scene feedback into one workflow for virtual production.

### Runtime UI

CineDesk components generate movable widgets at runtime and expose actor transforms and relevant controls through the touch interface. The UI keeps scene selection and property editing accessible to collaborators who do not normally work inside Unreal Editor.

### Touch and SpaceMouse interaction

Touch gestures support fast top-down staging, while the SpaceMouse provides continuous 6DoF translation and rotation for precise camera adjustments. The two input methods work together without forcing users to change tools or modes.

### Virtual camera tooling

Camera components and the widget subsystem expose lens and transform controls for the current selection. Off World Live streams CineCamera views through Spout so the team can see the result while arranging the scene.

## System architecture

The system keeps the 3D scene authoritative while presenting lightweight runtime representations for interaction:

**Touch or SpaceMouse input &#8594; runtime widget &#8594; scene actor transform &#8594; CineCamera preview &#8594; Spout output**

<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
  <img src="{{ '/assets/images/projects/cinedesk/system-overview.webp' | relative_url }}" alt="Diagram of the three-layer CineDesk interface architecture">
  <p style="text-align: center; font-style: italic; font-size: 0.85rem;">The touch UI mirrors selected scene actors without replacing Unreal's underlying scene state.</p>
</div>

## Hybrid interaction workflow

<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
  <img src="{{ '/assets/images/projects/cinedesk/cinedesk-spacemouse-control.gif' | relative_url }}" alt="CineDesk touch and SpaceMouse camera interaction">
  <p style="text-align: center; font-style: italic; font-size: 0.85rem;">Users combine fast top-down staging with continuous 6DoF camera navigation.</p>
</div>

The dual-input workflow supports faster layout decisions, more precise camera control, and more fluid collaboration during previsualization.

## Recognition and publication

The project was developed with the Soft Interaction Lab at Texas A&amp;M University. The research paper was accepted to the SIGGRAPH 2026 Posters program.

**Touching the Virtual: Multi-Touch Tangible Interfaces for Virtual Production**  
Jinsil Hwaryoung Seo, Caleb Kicklighter, Seung Kim, Mayet Andreassen, Hadeel Ramadan, and Chengyan Tsai.
