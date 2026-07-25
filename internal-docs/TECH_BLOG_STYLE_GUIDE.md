# Technical Blog Style Guide

Internal documentation for creating and revising Chengyan Tsai / Max’s technical blog posts.

This folder is excluded from the Jekyll build. Do not link to it from the website or move these files into `_posts` or `_pages`.

To start the local site, run `scripts/start-local-site.ps1` from PowerShell. The script builds the site, starts Jekyll with live reload and Windows file polling, and keeps the server attached to the current terminal so it remains available while that terminal is open.

## 1. Editorial goal

Each post should feel like a compact technical note written by a game programmer and technical artist:

- Explain one clear idea, workflow, system, or problem.
- Prefer practical understanding over broad introductions.
- Connect concepts to Unreal Engine, rendering, UI, gameplay, tools, or real-time graphics when relevant.
- Show the reasoning behind a choice, not only a list of definitions.
- Keep the page visually calm and easy to scan.

The reader should be able to understand the topic, recognize the important terms, and apply the technique after reading the post.

## 2. File name and front matter

Create posts inside `_posts/` using this format:

`YYYY-MM-DD-short-topic-name.md`

Use lowercase words separated by hyphens. Keep the slug short and stable.

Every new post should begin with front matter. The title in front matter becomes the page title, so do not add a second top-level `#` title in the body.

```yaml
---
title: "Understanding Unreal Engine Pointer Types"
layout: post
tags: [Unreal, C++, Programming]
---
```

Use a small, accurate tag list. Prefer three to five tags from the existing vocabulary, such as `Unreal`, `C++`, `UI`, `Rendering`, `Programming`, `Gameplay`, or `Technical Art`.

## 3. Recommended post structure

Start with a short lead paragraph immediately after the front matter. It should explain what the post covers and why the topic matters.

```markdown
Unreal Engine provides several pointer types for managing object references,
garbage collection, and asset loading. Choosing the right type affects safety,
ownership, and when an asset is loaded.
```

Then organize the article using this hierarchy:

```markdown
---

## 1. Core concept

Explain the idea in plain language.

### When to use it

Describe the practical decision.

## 2. Implementation

Show the relevant code or editor setup.

## 3. Common mistakes

Explain failure cases and how to avoid them.

## Summary

End with the most important takeaway.

## References

- [Official documentation](https://example.com)
```

Use `##` for main sections and `###` for subsections. Number sections only when the order is meaningful or when the post is a step-by-step guide. Do not use multiple `#` headings in the body; the front-matter title is the page’s only top-level title.

## 4. Markdown conventions

Use pure Markdown for normal writing whenever possible.

### Paragraphs and empty space

- Put one blank line between paragraphs.
- Put one blank line before and after lists, code blocks, quotes, images, and headings.
- Use `---` only to separate major phases of an article; do not add it after every subsection.
- Do not use repeated `<br>` tags or empty HTML elements to create vertical space.
- Keep paragraphs short: usually two to five sentences.
- Break up a long explanation with a heading, list, example, table, or image when it becomes difficult to scan.

Good spacing:

```markdown
The system receives an input event and routes it to the active widget.

The widget then updates its state and reports the result to the controller.

## Input routing

The viewport determines which widget receives focus.
```

Avoid placing several paragraphs, headings, or images directly against each other without a blank line.

### Lists

Use `-` for unordered lists and `1.` for ordered steps. Keep list items grammatically parallel and concise.

```markdown
- Enable the plugin.
- Add the module dependency.
- Set the viewport client.
```

Use nested lists only when the relationship is important. Avoid more than two levels of nesting.

### Bold text for keywords and concepts

Use bold for a key concept when it is introduced or when it is the conclusion of a paragraph:

```markdown
**Input Routing** determines which widget receives controller or keyboard input.
```

Use bold sparingly. Do not bold every technical noun, complete paragraphs, or entire list items. A reader should be able to scan the bold text and understand the structure of the explanation.

### Inline code

Use backticks for exact technical identifiers, API names, file names, paths, commands, values, and short expressions:

```markdown
Use `TObjectPtr<T>` for a normal UE5 member reference.

Add `UMG` and `Common UI` to the module dependencies in `Build.cs`.

Check the result with `IsValid()` before using a weak reference.
```

Use inline code for:

- C++ types, functions, macros, and members: `UObject*`, `UPROPERTY()`, `IsValid()`
- Unreal classes and nodes: `UCommonButtonBase`, `CommonActivatableWidget`
- File names and paths: `CommonButtonBase.h`, `Content/UI/`
- Commands and configuration values: `GenerateProjectFiles`, `NM_DedicatedServer`
- Short snippets that should be copied exactly

Do not use inline code for a general concept such as **garbage collection**, **authority**, or **input routing** unless the exact identifier is being discussed.

### Italic text

Use italics for light emphasis, a term being defined, or a publication/title reference. Do not use italics as a substitute for inline code.

```markdown
The *autonomous proxy* represents a client-controlled actor.
```

### Links

Use descriptive link text instead of displaying a bare URL:

```markdown
Read the [Unreal Engine networking documentation](https://dev.epicgames.com/documentation/).
```

Place references in a final `## References` section when the sources are important to the article. Use official Unreal documentation or primary technical sources whenever possible.

## 5. Code examples

Use fenced code blocks for anything longer than a short expression. Always include a language identifier when possible.

```cpp
if (ObjectPtr.IsValid())
{
    ObjectPtr->Activate();
}
```

```bash
git status
```

Rules for code examples:

- Introduce the purpose of the snippet before showing it.
- Show only the lines needed to explain the idea.
- Keep the example internally consistent with the surrounding text.
- Use the correct language fence: `cpp`, `csharp`, `python`, `bash`, `json`, or `text`.
- Explain important lines after the snippet instead of commenting every line.
- Never put a multi-line code sample in inline backticks.

## 6. Images and captions

### Asset rules

Store blog images under:

`assets/images/posts/<topic>/`

Prefer WebP files with descriptive names. Use the same file name and extension in the Markdown reference. Do not use names such as `image.png`, `Untitled`, or `Screenshot 1` when a meaningful name is available.

### Image without a visible caption

Use pure Markdown for a normal image:

```markdown
![Common UI input routing diagram](/assets/images/posts/common_ui/Common_UI_1.webp)
```

The alt text must describe the meaningful content of the image. It is used by screen readers and shown when the image cannot load; it is not a caption placeholder.

### Image with a visible caption

Pure Markdown does not provide a reliable visible caption. For a caption, use the same centered HTML wrapper used by the Digital Twin and project pages:

```html
<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
  <img src="{{ '/assets/images/posts/common_ui/Common_UI_1.webp' | relative_url }}" alt="Common UI input routing diagram">
  <p style="text-align: center; font-style: italic; font-size: 0.85rem;">Common UI input routing through the viewport.</p>
</div>
```

Caption rules:

- Center the image and caption.
- Keep the caption short and factual.
- Use sentence case and end with a period when it is a complete sentence.
- Describe what the reader should notice, not merely the file name.
- Add a caption only when it provides context; do not caption every decorative image.
- Keep `margin-top` and `margin-bottom` so the image does not collide with nearby text.

### Image placement

Place an image immediately after the paragraph or list that introduces it. Follow it with one short explanation when the image needs interpretation. Avoid stacking many images without text; the reader should understand why each image is present.

## 7. Technical writing style

- Define an unfamiliar term the first time it appears.
- Use the full name first, then an abbreviation: `Unreal Motion Graphics (UMG)`, followed by `UMG`.
- Distinguish engine concepts, APIs, classes, assets, and editor settings precisely.
- Prefer active voice: “The viewport routes input to the active widget.”
- Use present tense for stable behavior and past tense for project-specific work.
- Explain trade-offs: performance, memory, ownership, flexibility, workflow, or debugging cost.
- State uncertainty instead of inventing details.
- Do not claim a feature, benchmark, or result unless it is supported by the project material.
- Correct spelling and terminology before publishing: Unreal Engine, Blueprint, Blueprint Interface, Event Dispatcher, C++, `Build.cs`, `UPROPERTY()`.

## 8. Suggested templates

### Concept note

```markdown
---
title: "A Clear Technical Title"
layout: post
tags: [Unreal, Programming]
---

One short paragraph explaining the concept and why it matters.

## 1. What it is

Define the concept in plain language.

## 2. When to use it

Explain the decision and trade-offs.

## 3. Example

Introduce a short code or editor example.

```cpp
// Focused example
```

## Summary

State the main takeaway in two or three sentences.

## References

- [Official documentation](https://example.com)
```

### Tutorial or setup note

```markdown
---
title: "Set Up a Feature in Unreal Engine"
layout: post
tags: [Unreal, Programming, Tools]
---

State the expected result and prerequisites.

## 1. Prerequisites

- Engine version
- Plugin or module dependency
- Required project settings

## 2. Setup

1. Enable the plugin.
2. Add the dependency.
3. Configure the project.

## 3. Verify the result

Describe a small test that confirms the setup works.

## Common problems

Explain likely failures and fixes.
```

## 9. Pre-publish checklist

- [ ] File name follows `YYYY-MM-DD-short-topic-name.md`.
- [ ] Front matter includes `title`, `layout: post`, and relevant tags.
- [ ] The opening paragraph states the topic and value.
- [ ] The body uses `##` and `###` headings consistently.
- [ ] Technical identifiers use inline code.
- [ ] Important concepts use bold selectively.
- [ ] Multi-line code uses a language-specific fenced block.
- [ ] Every local image has useful alt text.
- [ ] Captions use the centered image wrapper when a visible caption is needed.
- [ ] Images use local WebP assets when available.
- [ ] Paragraphs, lists, code, and images have balanced empty space.
- [ ] Links use descriptive text and work correctly.
- [ ] Claims, benchmarks, and references are accurate.
- [ ] The page builds successfully with the local Jekyll configuration.
