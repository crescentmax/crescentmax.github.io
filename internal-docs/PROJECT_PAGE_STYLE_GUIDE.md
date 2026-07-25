# Project Page Style Guide

Internal documentation for creating and revising project showcase pages in Chengyan Tsai / Max’s portfolio.

Use the Digital Twin page and Hotel HR Training Simulation page as the main references. The Digital Twin page is a simple Markdown-first project page with media and captions. The Hotel HR page is the preferred showcase format when the page needs to emphasize personal technical contribution.

This folder is excluded from the Jekyll build. Do not link to this guide from the website or move it into `_pages`.

## 1. Purpose of a project page

A project page is a portfolio showcase, not a product requirements document or a complete research report.

The page should answer these questions quickly:

- What is the project?
- What did Chengyan contribute?
- Which technical systems or artistic decisions are worth showing?
- What evidence demonstrates the work?

Keep project context short. Spend most of the page on the actual work: gameplay logic, tools, UI, rendering, networking, technical art, interaction design, or other concrete contributions.

## 2. File location and front matter

Project pages belong in `_pages/` and use a descriptive Markdown filename:

`_pages/project-name.md`

Use this front matter:

```yaml
---
title: Hotel HR Training Simulation
layout: post
permalink: /projects/hotel-conversation
classes:
  - project-case-study
---
```

Rules:

- `title` is the visible page title and must be copyable text.
- Use `layout: post` for long-form project pages.
- Use a stable permalink that matches the project data entry.
- Add `project-case-study` when the page uses the showcase header, tags, summary, and case-study styling.
- Do not add a second `#` title in the body; the front-matter title already renders the page title.

For simpler pages such as Digital Twin, the `project-case-study` class may be omitted, but the content should still follow the same structure and spacing rules whenever possible.

## 3. Add the project card

Every internal project page should have a matching entry in `_data/projects.yml`:

```yaml
- title: "Hotel HR Training Simulation"
  image: "/assets/images/projects/hotel_hr/Hotel_Training.webp"
  description: "AI-powered workplace conversation simulation <br> for professional communication training"
  url: "/projects/hotel-conversation"
  type: work
  tags: [UE, TTS, LLM, Simulation]
```

Use the same title and URL as the page front matter.

Card rules:

- Always use a real thumbnail when one is available.
- Prefer local WebP assets under `assets/images/projects/<project-folder>/`.
- Use a short two-line description. The existing `<br>` is intentional for card balance.
- Use three to five concise tags.
- Tags should describe technologies, disciplines, or project form: `UE`, `C++`, `UI`, `TTS`, `LLM`, `Rendering`, `Simulation`.
- Do not put a paragraph or a full sentence into a tag.
- Use `type: work`, `highlight`, or `personal` according to the project’s place in the Projects page.

## 4. Preferred page structure

The Hotel HR page is the preferred format for a technical portfolio showcase:

```markdown
---
title: Project Title
layout: post
permalink: /projects/project-slug
classes:
  - project-case-study
---

<div class="case-study__tags" aria-label="Project technologies and focus">
  <span class="case-study__tag">UE</span>
  <span class="case-study__tag">C++</span>
  <span class="case-study__tag">UI/UX</span>
</div>

<p class="case-study__summary">One short paragraph explaining the project and its purpose.</p>

<!-- Optional demo video or hero media. -->

## Contribution

One concise paragraph describing the work in professional, concrete language.

<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
  <img src="{{ '/assets/images/projects/project-folder/overview.webp' | relative_url }}" alt="Descriptive image alt text">
  <p style="text-align: center; font-style: italic; font-size: 0.85rem;">Short centered caption.</p>
</div>

### Technical area

- Concrete responsibility
- Important system or decision
- Result or behavior enabled by the work

## System architecture

Explain the relationship between systems in one short paragraph, architecture diagram, or flow line. Use this section when the way systems connect is important to understanding the contribution.

**Input → gameplay logic → tool or API → output**

## Project context

One short paragraph with collaboration, research, client, or project context.
```

The page does not need every section. Use only the sections that help show the work.

## 5. Header: tags and summary

### Tags

Place tags immediately under the title using the existing card-style markup:

```html
<div class="case-study__tags" aria-label="Project technologies and focus">
  <span class="case-study__tag">UE</span>
  <span class="case-study__tag">TTS</span>
  <span class="case-study__tag">LLM</span>
  <span class="case-study__tag">Simulation</span>
</div>
```

Keep tags short and visually consistent with the project cards. Do not add a second status pill such as “AI simulation · workplace communication training” unless it communicates a genuinely important status, such as publication acceptance.

### Summary

Use one normal-sized paragraph directly below the tags:

```html
<p class="case-study__summary">An AI-powered practice environment for professional workplace conversations.</p>
```

The summary should state what the project is and what it enables. It should not repeat the title, become a large hero statement, or contain the full project history.

Good summary pattern:

> [Project] is a [type of system] that [main purpose]. It uses [important technical idea] to [result].

## 6. Contribution-focused writing

The most important section should be titled `## Contribution`.

Describe work with specific responsibilities and observable outcomes:

- Implemented Unreal gameplay flow and interaction states.
- Built UI behavior for prompts, loading states, feedback, and session reset.
- Integrated TTS playback and runtime audio handling.
- Created lip-sync components that synchronize facial animation with generated speech.
- Implemented a C++ socket client for asynchronous service communication.
- Built editor tools that allow designers to create and configure content.

Avoid vague or unprofessional phrasing:

- “I helped with some programming.”
- “I was responsible for everything.”
- “This amazing system solves all problems.”

Use factual, portfolio-ready language. Prefer “Implemented,” “Built,” “Integrated,” “Designed,” “Optimized,” and “Connected” when the claim is accurate.

Do not claim personal ownership of work that was created by a team. Separate personal contribution from project context.

## 7. Organize technical areas

Use `###` subsections under Contribution for distinct systems. Good sections for this portfolio include:

- `### Gameplay and interaction logic`
- `### UI and tools`
- `### TTS and lip sync`
- `### Rendering and shaders`
- `### Networking and API integration`
- `### Procedural content`
- `### Optimization and profiling`

Each subsection should contain three to five bullets or one short paragraph plus bullets. Every bullet should describe an action, system, decision, or result.

## 8. System architecture

Use a system architecture section when the project contains connected systems. A short flow line is appropriate when a full diagram would add unnecessary weight:

```markdown
**Player input → Unreal gameplay event → C++ socket API → LLM response → TTS audio → lip sync and UI feedback**
```

Use bold for the stages because the flow is a visual summary. Use inline code only when an exact class, function, or API name is being referenced:

```markdown
The `UConversationComponent` receives the response and updates the active widget.
```

Do not add a large architecture explanation unless the page has a diagram or the architecture is central to the contribution.

## 9. Images and captions

### Asset placement

Store project media under:

`assets/images/projects/<project-folder>/`

Use WebP for still images when possible. Use GIF, WebM, or MP4 only when motion is necessary. Use descriptive file names such as `Hotel_Training.webp`, `system-overview.webp`, or `camera-view.webp`.

### Centered image and caption

Use the same centered wrapper as Digital Twin and Hotel HR:

```html
<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
  <img src="{{ '/assets/images/projects/project-folder/system-overview.webp' | relative_url }}" alt="Diagram showing the project system layers">
  <p style="text-align: center; font-style: italic; font-size: 0.85rem;">System layers connecting the runtime client and service.</p>
</div>
```

Caption rules:

- Center both image and caption.
- Use a larger readable caption, not the tiny default `figcaption` style.
- Keep the caption factual and short.
- Use sentence case.
- Describe what the reader should notice.
- Use useful alt text that describes the image independently of the caption.
- Add margin above and below the media block.

### Video embeds

Place a demo near the top when it is the strongest evidence of the project. Keep the summary before the video. Use the privacy-enhanced YouTube host when appropriate and limit related recommendations:

```html
<div class="case-study__video">
  <iframe
    src="https://www.youtube-nocookie.com/embed/VIDEO_ID?rel=0&modestbranding=1"
    title="Project demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>
```

Do not embed unrelated videos. The title must describe the video content.

## 10. Context versus showcase

Keep context short and place it after the technical contribution when possible.

Useful context includes:

- The collaborator, lab, course, or client
- The user problem the project addresses
- A publication, acceptance, or public release
- A short description of the intended audience

Avoid long sections about:

- Generic industry background
- Complete user workflows that do not show your work
- Full product roadmaps
- Every feature in the system
- Repeating the same technology list from the tags

For a research project, keep the research question and recognition visible, but make the technical contribution the center of the page.

## 11. Spacing and visual balance

- Put one blank line between Markdown blocks.
- Use `margin-top: 1.5rem` and `margin-bottom: 1.5rem` around standalone media.
- Do not stack several images with no explanatory text.
- Do not put a heading directly against a video, image, or list.
- Use `---` only for major transitions; the case-study CSS already provides section spacing for structured pages.
- Keep paragraphs around two to five sentences.
- Keep the readable text width near the existing 70% project-page measure.
- Prefer two or three strong media examples over a gallery of every intermediate screenshot.
- Check mobile wrapping for tags, buttons, captions, and long titles.

## 12. Digital Twin versus Hotel HR

### Digital Twin format

Use the Digital Twin style for a straightforward technical study with several independent systems:

- Short TL;DR blockquote
- Section per system or feature
- Media after the relevant explanation
- Centered image captions
- Simple Markdown headings and lists

This format works well for markers, customer behavior, customer AI, and MQTT.

### Hotel HR format

Use the Hotel HR style when personal contribution is the main reason to view the page:

- Tags directly under the title
- Normal-sized summary
- Demo near the top
- `## Contribution` as the main section
- Technical area subsections
- A short system architecture flow
- Brief project context at the end

Do not combine both formats into a long product introduction. Choose the structure that best showcases the work.

## 13. Pre-publish checklist

- [ ] Page is in `_pages/` with valid front matter.
- [ ] Title, permalink, and project-card URL match.
- [ ] Project entry exists in `_data/projects.yml`.
- [ ] Card has a real thumbnail when available.
- [ ] Tags are short and consistent with the card.
- [ ] Summary is one normal-sized paragraph.
- [ ] Contribution is specific and focuses on Chengyan’s work.
- [ ] Context is shorter than the technical showcase.
- [ ] Images use local assets and descriptive WebP names when possible.
- [ ] Alt text is meaningful.
- [ ] Captions use centered wrappers and readable text.
- [ ] Video embeds have descriptive titles and `rel=0` when appropriate.
- [ ] Spacing is balanced on desktop and mobile.
- [ ] No unsupported claims or invented responsibilities were added.
- [ ] Jekyll build succeeds with `local/_config.yml`.
