---
title: Physically Based Simulation
layout: post
permalink: /projects/simulations
---

The following showcases were completed as part of the **CSCE 649: Physically Based Modeling** course, taught by Professor **John Keyser**. His excellent teaching helped me gain valuable insights into implementing and optimizing simulation algorithms. All simulations were implemented using either **OpenGL** or **Unreal Engine 5 (Niagara and GLSL)**.

## I. Bouncing Ball
This project features a simple bouncing ball simulation. The simulation and rendering steps are decoupled, ensuring the frame rate remains unaffected when adjusting the simulation step.<br><br>
**Key features:**
+ Continuous collision detection
+ Rest state detection
+ Decoupled simulation step and rendering step
+ External forces like gravity, air resistance, and wind force
+ Constant energy loss
<div style="text-align: center; margin-top: 1rem; margin-bottom: 2rem;">
    <img src="{{ '/assets/images/projects/simulations/BouncingBall.gif' | relative_url }}" alt="Bouncing Ball">
    <p style="text-align: center; font-style: italic;">Bouncing ball with the sphere collider</p>
</div>

## II. Particle System
This project demonstrates a flame simulation powered by a robust particle system. The simulation ran smoothly on my laptop (RTX 3060, i5-11300H, 8GB RAM) with up to 5,000 particles, handling thousands of particles and a mesh with approximately a thousand faces.
**Key features:**
+ Collision detection for particles
+ Particles with initial attributes including position, velocity, lifespan, and color based on temprature
+ Initial attributes drawn from a probability distribution
<div style="text-align: center; margin-top: 1rem; margin-bottom: 2rem;">
    <img src="{{ '/assets/images/projects/simulations/ParticleSystem01.gif' | relative_url }}" alt="Particle System 01">
    <p style="text-align: center; font-style: italic;">Simple flame simulation</p>
</div>
<div style="text-align: center; margin-bottom: 2rem;">
    <img src="{{ '/assets/images/projects/simulations/ParticleSystem02.gif' | relative_url }}" alt="Particle System 02">
    <p style="text-align: center; font-style: italic;">Simple flame simulation</p>
</div>


### III. Flocking System / Boid
<div style="text-align: center; margin-top: 1rem; margin-bottom: 2rem;">
    <img src="{{ '/assets/images/projects/simulations/Boid01.gif' | relative_url }}" alt="Flocking System 01">
    <p style="text-align: center; font-style: italic;">Flocking System</p>
</div>
<div style="text-align: center; margin-bottom: 2rem;">
    <img src="{{ '/assets/images/projects/simulations/Boid02.gif' | relative_url }}" alt="Flocking System 02">
    <p style="text-align: center; font-style: italic;">Flocking System</p>
</div>
<div style="text-align: center; margin-bottom: 2rem;">
    <img src="{{ '/assets/images/projects/simulations/Boid03.gif' | relative_url }}" alt="Flocking System 03">
    <p style="text-align: center; font-style: italic;">Flocking System</p>
</div>
<div style="text-align: center; margin-bottom: 2rem;">
    <video controls autoplay loop muted style="width: 100%; max-width: 800px;">
        <source src="{{ '/assets/images/projects/simulations/Boid04.mp4' | relative_url }}" type="video/mp4">
        <p>Your browser does not support the video tag. <a href="{{ '/assets/videos/projects/simulations/Boid04.mp4' | relative_url }}">Download the video</a>.</p>
    </video>
    <p style="text-align: center; font-style: italic;">Flocking System</p>
</div>


### IV. Softbody
<div style="text-align: center; margin-top: 1rem; margin-bottom: 2rem;">
    <img src="{{ '/assets/images/projects/simulations/Softbody.gif' | relative_url }}" alt="Softbody">
    <p style="text-align: center; font-style: italic;">Softbody</p>
</div>

### V. Rigidbody Simulation
<div style="text-align: center; margin-top: 1rem; margin-bottom: 2rem;">
    <img src="{{ '/assets/images/projects/simulations/RigidbodyCollision01.gif' | relative_url }}" alt="Rigidbody Collision 01">
    <p style="text-align: center; font-style: italic;">Rigidbody Collision</p>
</div>
<div style="text-align: center; margin-bottom: 2rem;">
    <img src="{{ '/assets/images/projects/simulations/RigidbodyCollision02.gif' | relative_url }}" alt="Rigidbody Collision 02">
    <p style="text-align: center; font-style: italic;">Rigidbody Collision</p>
</div>
<div style="text-align: center; margin-bottom: 2rem;">
    <img src="{{ '/assets/images/projects/simulations/RigidbodyCollision03.gif' | relative_url }}" alt="Rigidbody Collision 03">
    <p style="text-align: center; font-style: italic;">Rigidbody Collision</p>
</div>
<div style="text-align: center; margin-bottom: 2rem;">
    <img src="{{ '/assets/images/projects/simulations/RigidbodyCollision04.gif' | relative_url }}" alt="Rigidbody Collision 04">
    <p style="text-align: center; font-style: italic;">Rigidbody Collision</p>
</div>