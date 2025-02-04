---
title: Unannounced AAA Project
layout: post
permalink: /projects/AAA
---

Due to NDA restrictions, I am unable to share demos or visuals for this project.
## I. Dialogue System
#### Highlights
+ Added automation tools to read csv files and convert them to DataTable in editor, integrating the text files perfectly into Unreal.
+ Leveraged the [Dialogue Tree](https://unraed.github.io/DialogueTree/) plugin to optimize the dialogue workflow, accelerating narrative iteration speed by 35%.
+ Collaborated closely with designers and writers to enhance the functionality and usability of the dialogue editor, ensuring it met the team’s creative needs.
<br>

#### Challenges
1. **Ensuring that editing and implementing dialogues remains easy and intuitive for writers and designers, especially when coordinating multiple branching routes in a story-rich game.**
  + *Solution: Utilize the Dialogue Tree plugin to introduce a dialogue graph editor and create custom nodes to enhance the workflow.*
  + While exploring key concepts for designing the dialogue system, I found this talk from CD Projekt Red extremely helpful: [Behind the Scenes of the Cinematic Dialogues in The Witcher 3: Wild Hunt](https://www.youtube.com/watch?v=chf3REzAjgI) It provided a comprehensive overview of dialogue pipelines, event handling, quest integration, and managing story flows.
2. **Managing multilingual scripts presents a significant challenge for the team.**
  + *Solution: Introducing an automatic import pipeline to classify scripts by language and convert .csv files to DataTables in Unreal.*
  + We decided to separate scripts with different language to individual files, simplifying editing and permission management for each script.

---
## II. Interaction System
#### Highlights
+ Built a general interaction system for an early-stage AAA game, with designer-friendly interface and flexible codebase.
+ Integrated the interaction system with other core system like dialogue, cutscene, and battle system, etc.
<br>

#### Challenges
1. **Determining Interaction Priority and Input Handling (e.g., Talk, Environment, Pickup).**
  + *Solution: Added distinct tags to interactable items, allowing designers to assign higher priority to specific interactions (e.g. quest-related).*
  + *I Conducted research on how popular 3D games manage complex interactions, then discussed my findings with designers to ensure our approach met their requirements. After confirming alignment, I developed a prototype based on a player-centric design.*
2. **Efficiently handling a large number of objects within the player's interaction range.**
  + *Solution: Keep a interactable item queue on the interaction manager.*
  + *Since player interactions occur frequently, the system's performance is critical. I collaborated with a colleague to identify the optimal data structure, ensuring we delivered a robust and maintainable system.*


---
## III. PCG (Procedural Content Generation)
#### Highlights
+ Utilized the PCG Node Graph to create procedural buildings and biomes, streamlining content generation.
+ Collaborated closely with artists to develop custom PCG nodes using Blueprints, tailoring tools to meet specific artistic requirements.
<br>

#### Challenges
1. **The PCG system was still under development, which limited the availability of certain nodes needed for specific environments.**
  + *Solution: To address this, I collaborated with artists to understand their vision and environmental requirements, ensuring alignment with project goals.*
  + *Despite the initial complexity of the PCG system, I gained a solid understanding of how it generates assets and integrates scene information, which enabled smooth and effective development.*
