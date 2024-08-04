---
layout: page
title: QuadScape
description: Diverse quadruped locomotive behaviors on different terrains
img: assets/img/go1_pic.jpeg
importance: 1
category: work
related_publications: false
---

This work presents a novel approach to quadruped locomotion control across diverse
terrains, integrating reinforcement learning (RL) techniques with proprioceptive
observations. While existing literature focuses on enabling quadrupeds to follow various gait
patterns or employing trot gaits for challenging landscapes, little attention has been given to
controllers capable of demonstrating different gaits across varied terrain types. 

Our study introduces an RL-based methodology for controlling quadruped locomotion over a range of
terrains, leveraging multiple gaits including trotting, hopping and bounding.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/go1_wtw_pronk.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/go1_trot_wtw.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/go1_wtw_gallop.gif" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Go1 traversing different terrains with different gaits.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/wtw_uneven_arch1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/wtw_uneven_arch2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>

</div>
<div class="caption">
    Architecture diagram depicting our proposed method.
</div>

We leverage the **Asymmetric actor-critic** framework wherein the actor receives
partial state information (POMDP), while the critic has access to the full state, including
privileged information. This setup enhances the adaptability and robustness of the learning
process by simulating real-world partial observability scenarios. We propose an **Asymmetric
reward architecture** wherein robots navigating uneven terrain receive lesser coefficients of
negative auxiliary rewards compared to those on flat surfaces. This adaptation, based on the
**Isaac Gym** environment, optimizes locomotion strategies by balancing risk and performance
across different terrains. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/wtw_rewards.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    We utilize the above reward structure proposed in the paper "Walk-these-Ways" for training our Policy.
</div>

By implementing asymmetric rewards, our approach differentiates between robots navigating
flat surfaces and those traversing uneven terrain. On flat surfaces, the emphasis is placed on
learning and accurately tracking behavioral commands. Conversely, for robots navigating uneven terrain, the priority shifts to effectively tracking
velocity and successfully traversing the challenging landscape, with less strict adherence to
auxiliary commands.

Additionally, we integrate _Control Barrier Function-based rewards_ to imbue our controller
with less aggressive and more energy-efficient locomotion.

Looking ahead, we envision leveraging **Diffusion models** to further enhance our approach.

A detailed report of this work is available under "**Publications and Technical Reports**" subsection of this webpage.
