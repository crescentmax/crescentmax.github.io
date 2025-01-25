---
title: Physically Based Simulation
layout: post
permalink: /projects/simulations
---

The following showcases were completed as part of the **CSCE 649: Physically Based Modeling** course, taught by Professor **John Keyser**. 
His excellent teaching helped me gain valuable insights into implementing and optimizing simulation algorithms. 
All simulations were implemented using either **OpenGL** or **Unreal Engine 5 (Niagara and GLSL)**.

---
## I. Bouncing Ball
This project features a simple bouncing ball simulation. The simulation and rendering steps are decoupled, ensuring the frame rate remains unaffected when adjusting the simulation step.<br><br>
**Key Features:**
+ Continuous collision detection
+ Rest state detection
+ Decoupled simulation step and rendering step
+ External forces like gravity, air resistance, and wind force
+ Constant energy loss
<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/simulations/BouncingBall.gif' | relative_url }}" alt="Bouncing Ball">
    <p style="text-align: center; font-style: italic;">Bouncing Ball in a Box</p>
</div>

---
## II. Particle System
This project demonstrates a flame simulation powered by a robust particle system. The simulation ran smoothly on my laptop 
*(RTX 3060, i5-11300H, 8GB RAM)* with up to 5,000 particles, handling thousands of particles and a mesh with approximately a thousand faces.
<br><br>
**Key Features:**
+ Collision detection for particles
+ Particles with initial attributes including position, velocity, lifespan, and color based on temprature
+ Initial attributes drawn from a probability distribution
<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/simulations/ParticleSystem01.gif' | relative_url }}" alt="Particle System 01">
    <p style="text-align: center; font-style: italic;">Flame Particle Collision with Simple Cube </p>
</div>
<div style="text-align: center; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/simulations/ParticleSystem02.gif' | relative_url }}" alt="Particle System 02">
    <p style="text-align: center; font-style: italic;">Flame Particle Collision with Complex Mesh</p>
</div>

---
### III. Flocking System / Boid
This project showcases a flocking simulation implemented in Unreal Engine using the Niagara system. By leveraging the **NeighborGrid3D**, each particle queries the states of its neighbors, enabling behavior influenced only by nearby particles while ignoring distant ones. The system emulates natural flocking dynamics with rules such as separation, alignment, cohesion, and obstacle avoidance.
<br><br>
**Key Features:**
+ Spatial subdivision with NeighborGrid3D
+ Particles that make their own independent decisions 
+ Rules that produce a flocking behavior (Separation, Alignment, Cohesion)
+ Obstacle avoidance with Signed Distance Fields
<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/simulations/Boid01.gif' | relative_url }}" alt="Flocking System 01">
    <p style="text-align: center; font-style: italic;">Spatial Subdivision</p>
</div>
<div style="text-align: center; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/simulations/Boid02.gif' | relative_url }}" alt="Flocking System 02">
    <p style="text-align: center; font-style: italic;">Flocking System with High Cohesion Factor</p>
</div>
<div style="text-align: center; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/simulations/Boid03.gif' | relative_url }}" alt="Flocking System 03">
    <p style="text-align: center; font-style: italic;">Flocking System with High Avoidance Factor</p>
</div>
<div style="text-align: center; margin-bottom: 1.5rem;">
    <video controls autoplay loop muted playsinline style="width: 100%; max-width: 800px;">
        <source src="{{ '/assets/images/projects/simulations/Boid04.webm' | relative_url }}" type="video/webm">
        <p>Your browser does not support the video tag. <a href="{{ '/assets/videos/projects/simulations/Boid04.webm' | relative_url }}">Download the video</a>.</p>
    </video>
    <p style="text-align: center; font-style: italic;">General Fish Behavior Showcase</p>
</div>

---
### IV. Softbody
This project demonstrates a softbody simulation using pendulum constraint. The vertices are colored based the external forces acting on them. Elasticity is acheived by spawning particles on the surface of a mesh and constraining them with a pendulum system. This approach establishes springs between each particle and the pendulum center, forming a mass-spring-damper system. The physics calculations are resolved and used to deform the mesh via world position offsets, resulting in a springy, flexible structure.
<br><br>
**Key Features:**
+ Object defined using particles with mass
+ Mass-spring-damper system
+ Supports both simple Euler integration and 4th order Runge-Kutta (RK4)
<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/simulations/Softbody.gif' | relative_url }}" alt="Softbody">
    <p style="text-align: center; font-style: italic;">Softbody Simulation with Pendulum Constraint</p>
</div>

---
### V. Rigidbody Simulation
This project features a rigidbody simulation with realistic collision handling. 
Both face-vertex and edge-edge collision cases are supported, along with precise 
responses that incorporate velocity and inertia for accurate physical interactions. 
The system supports multiple objects and complex interactions, making it versatile 
for diverse scenarios. 
<br><br>
**Key Features:**
+ Continuous collision detection
+ Rest state detection
+ Supports face-vertex, edge-edge collision detection and collision response
+ Supports multiple objects and interactions between them
+ Supports both simple Euler integration and 4th order Runge-Kutta (RK4)
<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/simulations/RigidbodyCollision01.gif' | relative_url }}" alt="Rigidbody Collision 01">
    <p style="text-align: center; font-style: italic;">Rigidbody Comeing to Rest</p>
</div>
<div style="text-align: center; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/simulations/RigidbodyCollision02.gif' | relative_url }}" alt="Rigidbody Collision 02">
    <p style="text-align: center; font-style: italic;">Multiple Objects Collision</p>
</div>
<div style="text-align: center; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/simulations/RigidbodyCollision03.gif' | relative_url }}" alt="Rigidbody Collision 03">
    <p style="text-align: center; font-style: italic;">Collision Against Non-Axis-Aligned Planes</p>
</div>
<div style="text-align: center; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/simulations/RigidbodyCollision04.gif' | relative_url }}" alt="Rigidbody Collision 04">
    <p style="text-align: center; font-style: italic;">Edge-Edge Collision Showcase</p>
</div>

---
### VI. Smoothed Particle Hydrodynamics
The goal of this project is to create real-time realistic fluid simulation with smooth particle hydrodynamics (SPH). The system uses spatial partition to accelerate the simulation. There are 40 cells along each axis, and the size is close to 2-3 times of the particle size to achieve the best performance. The smoothing length, which is the range of kernel function is also 2-3 times of the particle size.
<br><br>
**Key Features:**
+ Implemented with Unreal Niagara System and hlsl
+ Symmetric pressure Contribution
+ Collision detection with any static meshes in the scene
+ Supports user interactions
+ Supports both simple Euler integration and 4th order Runge-Kutta (RK4)
+ Post Processing for better rendering result
<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/simulations/SPH20000.webp' | relative_url }}" alt="SPH20000">
    <p style="text-align: center; font-style: italic;">Simulation with 20000 Particles <br> Each frame will only cost 0.5ms</p>
</div>
<div style="text-align: center; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/simulations/SPHEuler.webp' | relative_url }}" alt="SPHEuler">
    <p style="text-align: center; font-style: italic;">Euler Integration (Unstable)</p>
</div>
<div style="text-align: center; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/simulations/SPHRK4.webp' | relative_url }}" alt="SPHRK4">
    <p style="text-align: center; font-style: italic;">RK4 Integration (Stable)</p>
</div>
<div style="text-align: center; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/simulations/SPHInteract.webp' | relative_url }}" alt="SPHInteract">
    <p style="text-align: center; font-style: italic;">Interact with Particles</p>
</div>

In order to improve the rendering result, the water material combines 3 passes
to get the final result.
<div style="text-align: center; margin-top: 1.5rem; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/simulations/SPHPostProcessing.png' | relative_url }}" alt="SPHPostProcessing">
    <p style="text-align: center; font-style: italic;">Post Processing Process</p>
</div>
<div style="text-align: center; margin-bottom: 1.5rem;">
    <img src="{{ '/assets/images/projects/simulations/SPHWater.webp' | relative_url }}" alt="SPHWater">
    <p style="text-align: center; font-style: italic;">Result after Post Processing</p>
</div>