---
layout: page
title: DepthForge  
description: Monocular Image-based Depth estimation - A Classification Approach 
img: assets/img/project2_pic.png
importance: 2
category: work
giscus_comments: false # true
---

Effective real-time distance estimation is critical for robotic navigation, especially in dynamic and complex environments. 
This research presents a novel method for estimating the **distance to the nearest object** from the camera using a sequence of monocular images.
It also features a unique **data-collection approach** that leverages robotic simulation platforms to rapidly create varied and comprehensive datasets.
By analyzing a sequence of five images, our approach classifies the distance to the nearest object into predefined distance classes and demonstrates high accuracy across 
various simulated indoor environments.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dist_archi.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Architecture diagram depicting our method
</div>

We deploy our **custom wheeled-robot platform** in the **Webots robotic simulation** containing realistic indoor environments, for the purpose of data-collection. We place _monocular cameras_ in the front and rear 
sides of the robot and stack _multiple 2D LIDARs_ along the robot’s vertical axis to capture depth information from various angles.
We obtain the distance to the nearest obstacle using these 2d LIDARs and assign classes such as **"very near", "near", "average", "far"** based on predefined distance ranges.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/near.jpeg" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    "near"
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/average.jpeg" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    "average"
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/far.jpeg" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    "far"
</div>

We randomize the robot's trajectory by applying differential speeds to the wheels and record a history of five images. The images are captured at regular intervels of 100ms along with their corresponding class labels to obtain the training dataset.
To ensure diversity in the training dataset and adaptability to real-world settings, we collect data at different indoor settings such as **"Apartment", "Factory Hall", "Office" and "Kitchen"** with varying levels of **lighting** **and** **camera FOV**.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>


