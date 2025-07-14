---
layout: page
title: DepthForge  
description: Monocular Image-based Depth estimation - A Classification Approach 
img: assets/img/depthforge.jpg
importance: 2
category: Completed
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

To evaluate our model, we collect test dataset from a new indoor "**Classroom**" setting using the same data collection procedure used for training. We report **>90% accuracy** in the test data, thus validating the efficacy of our novel approach.
Further, we collect a minimalistic test dataset from the real world and evaluate our model. While there is a substantial shift in the real world RGB distributions compared to the simulation distribution, our model fares well for **"Very Near" and "Near"** class labels.
We hypothesize that by fine-tuning the model with a minimalistic real-world dataset, our model can adapt to the real-world settings. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/very_near_real.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Real world image with the class label: "Very_near"
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/average_real.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Real world image with the class label: "Near"
</div>


