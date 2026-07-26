---
title: Hotel HR Training Simulation
layout: post
permalink: /projects/hotel-conversation
classes:
  - project-case-study
---

<div class="case-study__tags" aria-label="Project technologies and focus">
  <span class="case-study__tag">UE</span>
  <span class="case-study__tag">TTS</span>
  <span class="case-study__tag">LLM</span>
  <span class="case-study__tag">Simulation</span>
</div>

<p class="case-study__summary">An AI-powered practice environment for professional workplace conversations. Students take the role of a new HR specialist, clarify a vague data task with an AI manager, and receive structured feedback on how they communicate.</p>

<div class="case-study__video">
  <iframe loading="lazy"
    src="https://www.youtube-nocookie.com/embed/eeqtXLV4lYw?rel=0&modestbranding=1"
    title="Hotel HR Training Simulation demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

## Contribution

The Unreal-facing interaction layer turns a live AI conversation into a playable character experience. It connects player input, interface state, network responses, audio playback, and character performance into one continuous interaction loop.

<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
  <img loading="lazy" decoding="async" src="{{ '/assets/images/projects/hotel_hr/Hotel_Training.webp' | relative_url }}" alt="Conversation interface of the hotel HR training simulation">
  <p class="media-caption">Conversation Interface of the Simulation</p>
</div>

### Interaction Logic and UI

- Implemented the conversation flow, speaker turns, input states, and session reset logic in Unreal.
- Built UI behavior for prompts, messages, loading states, feedback, and the current conversation phase.
- Connected gameplay events to the appropriate character and interface responses.

### TTS and Lip Sync

- Integrated text-to-speech responses so Taylor can speak generated dialogue in real time.
- Developed the runtime audio path from the returned response to playback in Unreal.
- Created lip-sync components that synchronize Taylor’s facial performance with the generated voice.

### API and System Integration

- Implemented custom C++ socket components for communication between Unreal and the conversation service.
- Routed structured responses from the backend into gameplay, UI, TTS, and lip-sync systems.
- Handled the asynchronous nature of AI responses while keeping the interaction state clear to the user.

## Technical Flow

The core interaction path is:

**Player input → Unreal gameplay event → custom C++ socket API → LLM response → TTS audio → lip sync and UI feedback**

The result is a reusable Unreal interaction framework for AI-driven characters, rather than a scripted dialogue sequence.

## Project Context

The simulation was created with the Texas A&amp;M Soft Interaction Lab for workplace communication training. Students practice clarifying an ambiguous HR task with an adaptive AI manager and receive feedback after the conversation.
