---
layout: page
title: QuadScape
description: Diverse quadruped locomotive behaviors on different terrains
img: assets/img/go1_pic.jpeg
importance: 1
category: work
related_publications: true
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

We leverage the asymmetric actor-critic framework wherein the actor receives
partial state information (POMDP), while the critic has access to the full state, including
privileged information. This setup enhances the adaptability and robustness of the learning
process by simulating real-world partial observability scenarios. We propose an asymmetric
reward architecture wherein robots navigating uneven terrain receive lesser coefficients of
negative auxiliary rewards compared to those on flat surfaces. This adaptation, based on the
Isaac Gym environment, optimizes locomotion strategies by balancing risk and performance
across different terrains.

Additionally, we integrate Control Barrier Function-based rewards to imbue our controller
with less aggressive and more energy-efficient locomotion.

[//]: # (<div class="row justify-content-sm-center">)

[//]: # (    <div class="col-sm-8 mt-3 mt-md-0">)

[//]: # (        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %})

[//]: # (    </div>)

[//]: # (    <div class="col-sm-4 mt-3 mt-md-0">)

[//]: # (        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %})

[//]: # (    </div>)

[//]: # (</div>)

[//]: # (<div class="caption">)

[//]: # (    You can also have artistically styled 2/3 + 1/3 images, like these.)

[//]: # (</div>)

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
