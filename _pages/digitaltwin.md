---
title: Digital Twin Solution for Retail Stores
layout: post
permalink: /projects/retail
---

<div style="text-align:center;">
  <iframe
    src="https://www.youtube.com/embed/K-e6DO4BT6Y"
    title="Retail Digital Twin Demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>

> TL;DR: A digital twin system of convenience stores that analyzes item interest, purchasing history, and action durations via MQTT and rule-based AI simulation—so retailers can **optimize layouts**, **improve experiences**, and **scale operations**.

---

## Markers
**Markers** are checkpoints in the level, allowing AI to find the right location to proceed their actions. It provides:
+ Item Name
+ Item Type (Entrance, Exit, Item, etc)
+ Location
+ Direction

<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/digital_twin_retail/MarkerModel.png' | relative_url }}" alt="Marker Model">
    <p style="text-align: center; font-style: italic;">Marker in the Level</p>
</div>

<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/digital_twin_retail/MarkerDataTable.png' | relative_url }}" alt="Marker Data Table">
    <p style="text-align: center; font-style: italic;">Store Level Marker Information in Data Table</p>
</div>

<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/digital_twin_retail/MarkerCreator.png' | relative_url }}" alt="Marker Creator">
    <p style="text-align: center; font-style: italic;">Designer can create markers with editor utility</p>
</div>

---

## Customer Behavior

We use predefined actions to control customers. Designer can easily create new action in unreal with data assets.  
+ Entering
+ Walking
+ Searching
+ Considering
+ Grabbing
+ Purchasing
+ Leaving

<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/digital_twin_retail/CustomerBehavior.gif' | relative_url }}" alt="Customer Behaviors">
    <p style="text-align: center; font-style: italic;">Customer Behaviors</p>
</div>

---

## Customer AI

<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/digital_twin_retail/CustomerAI.png' | relative_url }}" alt="Customer AI Structure">
    <p style="text-align: center; font-style: italic;">Customer AI Structure</p>
</div>

---

## MQTT Handler

The system utilizes Unreal MQTT plugin to broadcast the real-time retail store data to a user specified topic. 

<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/digital_twin_retail/MQTT.png' | relative_url }}" alt="MQTT Scripts">
    <p style="text-align: center; font-style: italic;">MQTT Scripts</p>
</div>