---
title: Physically Based Simulations
layout: post
permalink: /projects/simulations
classes:
  - project-case-study
---

<div class="case-study__tags" aria-label="Project technologies and focus">
  <span class="case-study__tag">UE5</span>
  <span class="case-study__tag">Niagara</span>
  <span class="case-study__tag">HLSL</span>
  <span class="case-study__tag">OpenGL</span>
</div>

<p class="case-study__summary">A collection of real-time simulation systems exploring GPU particle computation, numerical integration, collision response, and procedural rendering. The featured work is an interactive Smoothed Particle Hydrodynamics fluid simulation implemented in Unreal Engine 5 with Niagara and custom HLSL.<span class="case-study__summary-topics"><strong>Featured topics:</strong> SPH fluid simulation, GPU flocking with spatial partitioning, and OpenGL rigid-body collision response.</span></p>

<div class="case-study__figure">
  <img decoding="async" fetchpriority="high" src="{{ '/assets/images/projects/simulations/SPH20000.webp' | relative_url }}" alt="Twenty-thousand-particle SPH fluid simulation running in Unreal Engine" width="600" height="338">
  <p class="media-caption">The Niagara SPH system simulates 20,000 particles in approximately 0.5 ms per frame on the test hardware.</p>
</div>

## I. SPH Implementation

The SPH system handles neighbor sampling, density and pressure evaluation, fluid forces, collision response, and integration inside Niagara HLSL nodes. Particle data is then projected onto a camera-aligned render target and composited into a smoother fluid surface.

**Spatial partition → neighbor query → density and pressure → pressure and viscosity forces → collision response → integration → render-target projection**

### Density and Pressure

Each particle queries nearby particles through a spatial grid. Neighbors within the smoothing radius contribute to the Poly6 density kernel; the resulting density is then converted into pressure relative to the rest density.

```hlsl
// Convert the Unreal-space distance from centimeters to meters.
float dist = length(InPos - NeighborPos) / 100.0;

// Accumulate the Poly6 kernel contribution from neighbors
// inside the smoothing radius.
if (dist < SmoothingLength)
{
    DensitySum += pow(
        SmoothingLength * SmoothingLength - dist * dist,
        3
    );
}

// Normalize the accumulated kernel and calculate particle density.
float poly6 =
    315.0 / (64.0 * PI * pow(SmoothingLength, 9));

OutDensity = InMass * poly6 * DensitySum;

// Convert the difference from rest density into pressure.
// The clamp prevents negative pressure in this implementation.
OutPressure = max(
    (OutDensity - InRestDensity) * InStiffness,
    0.0
);
```

### Pressure and Viscosity Forces

The force pass accumulates symmetric pressure contributions from each neighbor so the interaction remains balanced between particle pairs. A viscosity term reduces velocity differences and produces more coherent fluid motion.

```hlsl
// Pressure acts along the direction between each particle pair.
float3 direction = normalize(InPos - NeighborPos);

// Accumulate a symmetric pressure contribution so both particles
// use their own pressure and density states.
OutPressureForce +=
    InPressureFactor * NeighborMass *
    (
        InPressure / (InDensity * InDensity) +
        NeighborPressure /
        (NeighborDensity * NeighborDensity)
    ) *
    SpikyGradient * direction;

// Viscosity reduces the velocity difference between neighbors
// and produces more coherent fluid motion.
float3 velocityDiff = NeighborVelocity - InVelocity;

OutViscosityForce +=
    InViscosityFactor * NeighborMass *
    velocityDiff / NeighborDensity *
    ViscosityLaplacian;
```

The Niagara update also resolves particle collisions against static scene geometry and exposes interaction forces that can be applied at runtime.

<div class="case-study__figure">
  <img loading="lazy" decoding="async" src="{{ '/assets/images/projects/simulations/SPHInteract.webp' | relative_url }}" alt="SPH particles responding to interactive collision geometry" width="600" height="326">
  <p class="media-caption">Runtime collision geometry displaces the fluid while the Niagara simulation continues to resolve neighboring forces.</p>
</div>

## II. Integration Stability

The simulation supports both Euler and fourth-order Runge–Kutta integration. Euler is inexpensive but becomes unstable at larger time steps; RK4 requires additional evaluation while producing a visibly more stable particle volume.

<div class="case-study__media-grid">
  <figure>
    <img loading="lazy" decoding="async" src="{{ '/assets/images/projects/simulations/SPHEuler.webp' | relative_url }}" alt="Unstable SPH fluid behavior using Euler integration" width="600" height="338">
    <figcaption>Euler integration becomes unstable under the same simulation conditions.</figcaption>
  </figure>
  <figure>
    <img loading="lazy" decoding="async" src="{{ '/assets/images/projects/simulations/SPHRK4.webp' | relative_url }}" alt="Stable SPH fluid behavior using RK4 integration" width="600" height="338">
    <figcaption>RK4 maintains a more stable particle distribution.</figcaption>
  </figure>
</div>

## III. Camera-Aligned Fluid Rendering

The particles are projected onto a two-dimensional render target positioned in front of the camera. The projection plane is perpendicular to the camera direction vector, so its local right and up axes provide stable screen-space coordinates as the camera moves.

For each particle, the renderer measures its position relative to the plane, projects that offset onto the camera-right and camera-up vectors, and maps the result into render-target UV coordinates. The resulting particle layers provide the inputs for the fluid composite:

**Particle position → camera-aligned plane → render-target UV → diffuse and specular layer + opacity layer + background → final composite**

<div class="case-study__figure">
  <img loading="lazy" decoding="async" src="{{ '/assets/images/projects/simulations/SPHPostProcessing.webp' | relative_url }}" alt="Diffuse, opacity, background, and composite passes used for SPH fluid rendering" width="1257" height="692">
  <p class="media-caption">The rendering pipeline combines diffuse and specular information, opacity, and the scene background into the final fluid composite.</p>
</div>

<div class="case-study__figure">
  <img loading="lazy" decoding="async" src="{{ '/assets/images/projects/simulations/SPHWater.webp' | relative_url }}" alt="Final post-processed SPH water rendering in Unreal Engine" width="600" height="338">
  <p class="media-caption">Final Niagara particle output after the camera-aligned render-target composite.</p>
</div>

## IV. Supporting Simulation Studies

### GPU Flocking with Niagara

A flocking system uses Niagara's `NeighborGrid3D` for spatial subdivision so each particle evaluates only nearby agents. Separation, alignment, cohesion, and signed-distance-field obstacle avoidance produce coordinated movement without a centralized controller.

<div class="case-study__figure">
  <img loading="lazy" decoding="async" src="{{ '/assets/images/projects/simulations/Boid01.webp' | relative_url }}" alt="Niagara NeighborGrid3D spatial partition used by the GPU flocking system" width="600" height="505">
  <p class="media-caption">NeighborGrid3D partitions the simulation volume so each agent queries only nearby particles.</p>
</div>

<div class="case-study__figure">
  <img loading="lazy" decoding="async" src="{{ '/assets/images/projects/simulations/Boid03.webp' | relative_url }}" alt="GPU flocking system demonstrating a high avoidance parameter" width="600" height="373">
  <p class="media-caption">A high avoidance weighting demonstrates how parameter adjustment changes flock separation and obstacle response.</p>
</div>

### Rigid-Body Collision and Response in OpenGL

The OpenGL rigid-body study implements continuous collision detection, rest-state handling, and collision response for face–vertex and edge–edge cases. Velocity and inertia are resolved across multiple interacting objects, with both Euler and RK4 integration available.

<div class="case-study__media-grid">
  <figure>
    <img loading="lazy" decoding="async" src="{{ '/assets/images/projects/simulations/RigidbodyCollision02.webp' | relative_url }}" alt="Multiple rigid bodies colliding in the simulation" width="600" height="343">
    <figcaption>Collision response across multiple interacting rigid bodies.</figcaption>
  </figure>
  <figure>
    <img loading="lazy" decoding="async" src="{{ '/assets/images/projects/simulations/RigidbodyCollision04.webp' | relative_url }}" alt="Edge-to-edge rigid-body collision test" width="600" height="343">
    <figcaption>Edge–edge collision detection and response.</figcaption>
  </figure>
</div>

## V. Project Context

These systems were developed for **CSCE 649: Physically Based Modeling**, taught by Professor **John Keyser**. The work combines OpenGL simulation fundamentals with GPU-oriented Unreal Engine implementations in Niagara and HLSL.
