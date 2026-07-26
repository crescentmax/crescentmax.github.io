---
title: "Chengyan Tsai / Max"
layout: splash
date: 2024-10-15T20:27:00-05:00
permalink: /
hero_kicker: "Software engineer · Game developer · Technical artist"
header:
  overlay_color: "#080b12"
  overlay_filter: "linear-gradient(90deg, rgba(8, 11, 18, 0.96) 0%, rgba(8, 11, 18, 0.72) 48%, rgba(8, 11, 18, 0.24) 100%)"
  overlay_image: /assets/images/home/Landing.webp
  overlay_text_shadow: false
  min_height: 68vh
  background_position: "center 30%"
  actions:
excerpt: "I build real-time tools, interactive systems, and visual experiences at the intersection of code and art."

selected_work:
  - image_path: "/assets/images/projects/cinedesk/cinedesk.webp"
    alt: "CineDesk virtual production interface"
    title: "CineDesk"
    excerpt: "An Unreal Engine pre-visualization tool that makes virtual camera work faster and more tactile."
    meta: "Unreal Engine · C++ · UX"
    url: "/projects/cinedesk"
  - image_path: "/assets/images/projects/mock_trial/courtroom-simulation.webp"
    alt: "AI-driven courtroom simulation for forensic nursing testimony training"
    title: "Forensic Nursing Testimony Education"
    excerpt: "An Unreal Engine courtroom where AI agents help forensic nurses practice expert-witness testimony."
    meta: "Unreal Engine · C++ · WebSockets"
    url: "/projects/mock-trial"
  - image_path: "/assets/images/projects/simulations/thumbnail.webp"
    alt: "Physically based simulation experiments"
    title: "Physically Based Simulations"
    excerpt: "GPU-driven simulation studies led by an interactive SPH fluid system built in Unreal Engine."
    meta: "UE5 · Niagara · HLSL"
    url: "/projects/simulations"
  - image_path: "/assets/images/projects/AAA/ue.jpg"
    alt: "Unreal Engine prototype from an unannounced AAA project"
    title: "AAA Prototype"
    excerpt: "Gameplay systems and production tools developed for an unannounced UE5 project."
    meta: "UE5 · C++ · Gameplay"
    url: "/projects/AAA"
---

<a class="news-strip" href="{{ '/projects/cinedesk' | relative_url }}" aria-label="View CineDesk SIGGRAPH 2026 project"><span class="news-strip__label"><span></span>Latest</span><span class="news-strip__copy"><strong>CineDesk accepted to<br>SIGGRAPH 2026</strong><span>Our tangible virtual-production interface will be presented in the Posters program.</span></span><span class="news-strip__action">View more <span aria-hidden="true">→</span></span></a>

<a class="portfolio-cue" href="#selected-work" aria-label="Scroll to portfolio overview"><span class="portfolio-cue__arrows" aria-hidden="true"><span>v</span><span>v</span></span><span class="portfolio-cue__label">Portfolio Overview</span><span class="portfolio-cue__arrows" aria-hidden="true"><span>v</span><span>v</span></span></a>

<section id="selected-work" class="landing-section landing-section--work">
  <div class="section-heading">
    <h2>Selected Work</h2>
  </div>
  {% include feature_row id="selected_work" variant="work" %}
  <a class="text-link" href="{{ '/projects' | relative_url }}">View more projects <span aria-hidden="true">→</span></a>
</section>

<section id="experience" class="landing-section experience-section">
  <div class="section-heading">
    <h2>Experience</h2>
  </div>

  <div class="experience-list">
    {% for experience in site.data.experience %}
      <article class="experience-item" tabindex="0">
        <div class="experience-item__logo experience-item__logo--{{ experience.logo_theme | default: 'surface' }}">
          <img src="{{ experience.logo | relative_url }}" alt="{{ experience.organization }} logo" width="160" height="160" loading="lazy" decoding="async">
        </div>
        <div class="experience-item__identity">
          <h3>{{ experience.role }}</h3>
          <p>{{ experience.organization }}</p>
          <time>{{ experience.period }}</time>
        </div>
        <div class="experience-item__description">
          <p>{{ experience.summary }}</p>
        </div>
      </article>
    {% endfor %}
  </div>
</section>
