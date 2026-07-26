---
title: Forensic Nursing Testimony Education
layout: post
permalink: /projects/mock-trial
classes:
  - project-case-study
---

<div class="case-study__tags" aria-label="Project technologies and focus">
  <span class="case-study__tag">UE</span>
  <span class="case-study__tag">C++</span>
  <span class="case-study__tag">TTS</span>
  <span class="case-study__tag">Simulation</span>
</div>

<p class="case-study__summary">An immersive courtroom simulation for forensic nurses to practice expert-witness testimony. Role-specific AI agents conduct direct, cross, redirect, and re-cross examination inside an Unreal Engine courtroom.</p>

<div class="case-study__video">
  <iframe loading="lazy"
    src="https://www.youtube-nocookie.com/embed/i2OFY43f7sU?rel=0&modestbranding=1"
    title="Forensic Nursing Testimony Education short demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
  <img loading="lazy" decoding="async" src="{{ '/assets/images/projects/mock_trial/courtroom-simulation.webp' | relative_url }}" alt="Unreal Engine courtroom simulation with judge, prosecutors, defense, and jury">
  <p class="media-caption">The Unreal client places the learner in an interactive courtroom with AI-driven legal roles.</p>
</div>

## Contribution

The Unreal interaction layer turns AI-generated courtroom exchanges into clear gameplay states, audible dialogue, and synchronized MetaHuman performances.

### Gameplay and Interaction Logic

- Implemented courtroom phases for direct, cross, redirect, and re-cross examination.
- Built speaker-turn, learner-input, response, and UI state logic in Unreal.
- Routed backend events to the correct courtroom character and gameplay state.

### C++ Networking and Runtime Data

- Built custom C++ WebSocket components for asynchronous communication with the orchestration service.
- Parsed structured responses and routed dialogue data to gameplay, UI, audio, and character systems.
- Preserved a clear interaction state while waiting for AI-generated responses.

### TTS and MetaHuman Lip Sync

- Integrated text-to-speech playback for generated courtroom dialogue.
- Developed runtime audio handling for the active speaker.
- Connected speech timing and viseme data to MetaHuman lip-sync components.

## System Architecture

The Unreal client handles interaction and presentation, while the backend manages dialogue context, case evidence, and role-specific agent behavior.

**Learner response → Unreal gameplay event → C++ WebSocket client → agent orchestration → generated response → TTS audio → MetaHuman lip sync and UI feedback**

<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
  <img loading="lazy" decoding="async" src="{{ '/assets/images/projects/mock_trial/system-architecture.webp' | relative_url }}" alt="System architecture connecting the Unreal client, WebSocket gateway, orchestration service, and case data">
  <p class="media-caption">The Unreal client presents the session while the backend maintains evidence, dialogue context, and agent orchestration.</p>
</div>

## Adaptive Courtroom Behavior

Role-specific agents share case facts and session memory while a phase manager controls the examination sequence. Incomplete or contradictory testimony can prompt clarification and adaptive follow-up questions.

<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
  <img loading="lazy" decoding="async" src="{{ '/assets/images/projects/mock_trial/agent-orchestration.webp' | relative_url }}" alt="Multi-agent courtroom orchestration workflow">
  <p class="media-caption">The phase manager coordinates role-specific agents across each stage of testimony.</p>
</div>

## Project Context

The project was developed by a five-person team in collaboration with forensic nursing researchers at Texas A&amp;M University. Domain experts guided the courtroom language, evidence handling, and training workflow.

## Full Demo

<div class="case-study__video">
  <iframe loading="lazy"
    src="https://www.youtube-nocookie.com/embed/-8kz4-X3Bak?rel=0&modestbranding=1"
    title="Forensic Nursing Testimony Education full demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>
