---
title: Mock Trial
layout: post
permalink: /projects/mock-trial
classes:
  - project-case-study
---

<span class="case-study__status">Research collaboration · Forensic nursing education</span>

<p class="case-study__lede"><strong>Mock Trial</strong> is an immersive courtroom simulation that helps forensic nurses practice expert-witness testimony in a repeatable and psychologically safe environment. Role-specific AI agents conduct direct, cross, redirect, and re-cross examination inside an Unreal Engine courtroom.</p>

<dl class="case-study__meta">
  <div><dt>My role</dt><dd>Unreal gameplay &amp; systems developer</dd></div>
  <div><dt>Collaborators</dt><dd>Texas A&amp;M forensic nursing researchers</dd></div>
  <div><dt>Technology</dt><dd>Unreal Engine · C++ · WebSockets · MetaHuman</dd></div>
  <div><dt>Focus</dt><dd>Gameplay logic · TTS · Real-time lip sync</dd></div>
</dl>

<figure class="case-study__hero">
  <img src="{{ '/assets/images/projects/mock_trial/courtroom-simulation.png' | relative_url }}" alt="Unreal Engine courtroom simulation with judge, prosecutors, defense, and jury">
  <figcaption>The Unreal frontend places the learner in an interactive courtroom with AI-driven legal roles.</figcaption>
</figure>

<section class="case-study__section">
  <h2>The training problem</h2>
  <p>Sexual Assault Nurse Examiners must explain complex medical and forensic evidence accurately under adversarial questioning. Traditional mock court sessions are valuable, but they depend on expert facilitators and are difficult to repeat consistently at scale.</p>
  <p>The research team designed a multi-agent simulation in which a judge, prosecutor, and defense attorney share case evidence, remember prior testimony, raise context-aware objections, and adapt their questions to the nurse’s answers.</p>
</section>

<section class="case-study__section">
  <h2>What I built</h2>
  <p>My work centered on the Unreal client and the real-time path from an AI response to an embodied courtroom character. I translated backend events into understandable gameplay states, audible dialogue, and synchronized MetaHuman performance.</p>

  <div class="case-study__grid">
    <article class="case-study__card">
      <span>01 · Gameplay</span>
      <h3>Trial state and interaction logic</h3>
      <p>I implemented Unreal gameplay logic for courtroom roles, examination phases, speaker turns, UI state, and the flow between learner input and agent responses.</p>
    </article>
    <article class="case-study__card">
      <span>02 · Networking</span>
      <h3>Custom C++ socket API</h3>
      <p>I built C++ components that exchange structured events with the orchestration backend over WebSockets and route responses to the appropriate Unreal systems.</p>
    </article>
    <article class="case-study__card">
      <span>03 · Character performance</span>
      <h3>TTS and MetaHuman lip sync</h3>
      <p>I developed TTS and lip-sync components that receive generated speech, load audio at runtime, and map timing and viseme data onto MetaHuman characters.</p>
    </article>
  </div>
</section>

<section class="case-study__section">
  <div class="case-study__split">
    <div>
      <h2>Unreal-to-AI pipeline</h2>
      <p>The frontend communicates with a custom orchestration service through a WebSocket gateway. The service preserves the session transcript and case facts while routing each turn to the correct agent.</p>
      <div class="case-study__callout">
        <p><strong>Interaction flow:</strong> learner response → Unreal gameplay event → C++ socket client → agent orchestration → generated response → TTS audio → runtime playback and MetaHuman lip sync.</p>
      </div>
    </div>
    <figure class="case-study__figure">
      <img src="{{ '/assets/images/projects/mock_trial/system-architecture.png' | relative_url }}" alt="System architecture connecting the client, WebSocket gateway, orchestration service, and case data">
      <figcaption>The client remains focused on interaction and presentation while the backend owns dialogue context, evidence, and agent orchestration.</figcaption>
    </figure>
  </div>
</section>

<section class="case-study__section">
  <h2>Adaptive courtroom behavior</h2>
  <figure class="case-study__figure">
    <img src="{{ '/assets/images/projects/mock_trial/agent-orchestration.png' | relative_url }}" alt="Multi-agent courtroom orchestration workflow">
    <figcaption>Role-specific agents share memory and case facts while the phase manager controls direct, cross, redirect, and re-cross examination.</figcaption>
  </figure>
  <p>Consistent testimony can produce coherent follow-up questions, while incomplete or contradictory answers prompt clarification and adaptive cross-examination. The Unreal layer makes those backend decisions legible through speaker focus, pacing, audio, and character performance.</p>
</section>

<section class="case-study__section">
  <h2>Collaboration and outcome</h2>
  <p>The five-person development effort was created with forensic nursing researchers at Texas A&amp;M. Domain experts helped ensure that the simulation’s language, evidence handling, and courtroom behavior remained appropriate for professional training. Formal evaluation is ongoing; the current work demonstrates the technical feasibility of scalable, case-grounded testimony practice.</p>
</section>
