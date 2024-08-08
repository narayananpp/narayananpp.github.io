---
layout: page
title: StochBullet
description: An end-to-end RL based quadruped locomotion using PyBullet
img: assets/img/stoch3.png
importance: 7
category: Completed
related_publications: false
---
Recent advances in employing Deep Reinforcement Learning (DRL) for quadruped locomotion ([RMA](https://arxiv.org/abs/2107.04034), [DreamWaQ](https://arxiv.org/abs/2301.10602)) have proven to be remarkably robust
and promising. This work presents an _end-to-end RL framework_ that enables quadruped locomotion on flat terrains using **PyBullet simulation platform**. 
Trained on flat surfaces with fractal noise in simulation, our approach relies on **proprioceptive** inputs, eliminating the need
for cameras or exteroception sensors. The framework exhibits robustness against external pushes and friction changes.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/stoch3_ppo.gif" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

For our training, we employed the **Proximal Policy Optimization (PPO)** algorithm. Our robot's movement is confined to the
x-direction. We follow the **teacher-student training paradigm** as adopted in [RMA](https://arxiv.org/abs/2107.04034),
wherein a teacher policy has access to privileged data such as terrain friction, contact forces, etc, from the simulation
engine, apart from receiving the robot's states. This privileged data is separately encoded by an encoder and serves as a ground-truth to train
a student policy via **supervised learning**. The student policy accepts a **history of observations** and tries to estimate the 
encoded privileged information. The output of the policy is 12-dim target joint angles, perturbed relative to the default 
joint angles of the robot during stand-still position. 

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/rma_teacher_student.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Architecture diagram of the "teacher-student" paradigm proposed in RMA.
</div>

We adopt the reward functions employed by [Rapid Motor Adaptation (RMA)](https://arxiv.org/abs/2107.04034) for our training, which is formulated
as follows:

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/rma_rewards.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

To guide our learning process, we used a **Fixed Curriculum strategy** to adjust reward coefficients,
manage responses to external forces, and handle friction changes. We follow the strategy adopted in [RMA](https://arxiv.org/abs/2107.04034),
wherein the negative reward coefficients are initialized with very low values and are gradually increased as the training progresses. This
is done because, during the initial stages of training, the robot abandons its task or chooses an early
termination when the task reward is overwhelmed by penalties from the auxiliary objectives such
as energy minimization term, action rate term, z velocity term, etc.  

All our policy evaluations are performed on our custom quadrupedal model, **"Stoch3"**
which is a **medium-sized quadruped**. The integration of direction tracking capabilities is reserved
for our future work.

**All code will be made publically available soon at [StochLab Github](https://github.com/StochLab)**


