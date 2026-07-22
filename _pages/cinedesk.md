---
title: CineDesk
layout: post
permalink: /projects/cinedesk
classes:
  - project-case-study
---

<span class="case-study__status">Accepted poster · SIGGRAPH 2026</span>

<p class="case-study__lede"><strong>CineDesk</strong> is a collaborative virtual-production interface that combines multi-touch staging with precise 6DoF SpaceMouse control. The research, <em>Touching the Virtual: Multi-Touch Tangible Interfaces for Virtual Production</em>, was accepted to the SIGGRAPH 2026 Posters program.</p>

<div class="case-study__actions">
  <a class="btn" href="https://dl.acm.org/doi/10.1145/3799825.3818775" target="_blank" rel="noopener">View ACM publication ↗</a>
  <a class="btn" href="{{ '/assets/files/CineDesk_SIGGRAPH_2026_Poster.pdf' | relative_url }}" target="_blank" rel="noopener">View poster ↗</a>
</div>

<dl class="case-study__meta">
  <div><dt>My role</dt><dd>Unreal developer · Interaction systems</dd></div>
  <div><dt>Research group</dt><dd>Soft Interaction Lab · Texas A&amp;M</dd></div>
  <div><dt>Technology</dt><dd>Unreal Engine · UMG · SpaceMouse · Spout</dd></div>
  <div><dt>Recognition</dt><dd>SIGGRAPH 2026 Posters</dd></div>
</dl>

<figure class="case-study__hero">
  <img src="{{ '/assets/images/projects/cinedesk/cinedesk.webp' | relative_url }}" alt="Two collaborators using the CineDesk touch-table interface">
  <figcaption>CineDesk supports collaborative scene layout on a shared touch display.</figcaption>
</figure>

<section class="case-study__section">
  <h2>The research question</h2>
  <p>Previsualization often separates fast layout decisions from precise camera control. CineDesk investigates whether a shared interface can make both tasks accessible in one workflow: direct touch for broad staging and a tangible controller for fine camera adjustments.</p>

  <div class="case-study__grid">
    <article class="case-study__card">
      <span>01 · Accessible</span>
      <h3>Direct scene manipulation</h3>
      <p>A top-down touch interface lets non-technical collaborators position actors, inspect properties, and plan a scene without navigating a traditional editor.</p>
    </article>
    <article class="case-study__card">
      <span>02 · Precise</span>
      <h3>Tangible 6DoF control</h3>
      <p>The SpaceMouse provides smooth translation, rotation, and camera navigation when touch alone is not precise enough.</p>
    </article>
    <article class="case-study__card">
      <span>03 · Collaborative</span>
      <h3>Immediate visual feedback</h3>
      <p>Top-down layout and a live 3D camera preview remain visible together, helping teams discuss and iterate on staging in real time.</p>
    </article>
  </div>
</section>

<section class="case-study__section">
  <h2>My contribution</h2>
  <p>I developed the Unreal-side interaction framework and delivered twelve core features for staging and camera setup. The work focused on making runtime scene editing predictable for users who do not normally work inside Unreal Engine.</p>

  <div class="case-study__grid">
    <article class="case-study__card">
      <span>Runtime UI</span>
      <h3>Actor-to-widget workflow</h3>
      <p>CineDesk components generate movable widgets at runtime and expose actor transforms and relevant controls through the touch interface.</p>
    </article>
    <article class="case-study__card">
      <span>Input integration</span>
      <h3>Touch + SpaceMouse</h3>
      <p>I connected broad touch gestures with precise 6DoF control so users can move between layout and camera work without changing tools.</p>
    </article>
    <article class="case-study__card">
      <span>Virtual camera</span>
      <h3>Live camera tooling</h3>
      <p>Camera components and the widget subsystem expose lens and transform controls while Off World Live streams CineCamera views through Spout.</p>
    </article>
  </div>
</section>

<section class="case-study__section">
  <div class="case-study__split">
    <div>
      <h2>Three-layer interface</h2>
      <p>The system separates the 3D world from touch representations and detailed controls. This keeps scene actors authoritative while allowing the tabletop UI to remain lightweight and context-sensitive.</p>
      <div class="case-study__callout">
        <p><strong>3D Scene Layer:</strong> cameras, lights, characters, and set objects.<br><strong>Movable Widgets Layer:</strong> runtime representations used for selection and transforms.<br><strong>Widget Detail Layer:</strong> camera, actor, and property controls for the current selection.</p>
      </div>
    </div>
    <figure class="case-study__figure">
      <img src="{{ '/assets/images/projects/cinedesk/system-overview.png' | relative_url }}" alt="Diagram of the three-layer CineDesk interface architecture">
      <figcaption>The touch UI mirrors selected scene actors without replacing Unreal’s underlying scene state.</figcaption>
    </figure>
  </div>
</section>

<section class="case-study__section">
  <h2>Hybrid interaction workflow</h2>
  <figure class="case-study__figure">
    <img src="{{ '/assets/images/projects/cinedesk/cinedesk-spacemouse-control.gif' | relative_url }}" alt="CineDesk touch and SpaceMouse camera interaction">
    <figcaption>Users combine fast top-down staging with continuous 6DoF camera navigation.</figcaption>
  </figure>
  <p>The poster’s early findings indicate that the dual-input workflow helped participants complete layout tasks faster, improved perceived camera control and ease of use, and supported more fluid team iteration. These results position tangible input as a complement to touch—not a replacement for it.</p>
</section>

<section class="case-study__section">
  <h2>Research publication</h2>
  <div class="case-study__citation">
    <strong>Touching the Virtual: Multi-Touch Tangible Interfaces for Virtual Production</strong>
    <p>Jinsil Hwaryoung Seo, Caleb Kicklighter, Seung Kim, Mayet Andreassen, Hadeel Ramadan, and Chengyan Tsai. SIGGRAPH 2026 Posters. DOI: 10.1145/3799825.3818775.</p>
  </div>
  <p>The project expands the original cineDESK system developed by the Zurich University of the Arts and acknowledges the wider cineDESK network, including HKAPA and FilmEU.</p>
</section>
