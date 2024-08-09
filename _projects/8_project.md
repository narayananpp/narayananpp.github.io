---
layout: page
title: JoyPilot
description: Development of dataset generation interfaces for autonomous navigation of wheeled robots
img: assets/img/wheeled_robot.png
importance: 2
category: Completed
giscus_comments: false
---
The goal of this work is to create a general purpose user-interface that helps to acquire labeled datasets for
performing AI tasks such as Autonomous Navigation, by navigating a real world wheeled robot in an
indoor environment. This comprehensive dataset, collected from the robot's sensors and actuators, can be utilized for offline reinforcement learning or supervised learning tasks. 
Our robot is a lab version of a service robot. It is built as a general platform for
experimentation and can be customized for a number of applications.

<div style="display: flex; justify-content: center; margin-top: 20px;">
    <iframe src="https://www.youtube.com/embed/l8ZkpbIXRls" style="width: 80%; height: 450px; max-width: 100%;" frameborder="0" allowfullscreen></iframe>
</div>
<div class="caption">
    Demo of Joystick control interface to control a service robot
</div>
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sensors_list.png" title="" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Fig. displaying the list of sensors and actuators present in the robot, categorized into a) Navigation control, b) Vision, c) Audio
</div>

We use a Joystick as our general purpose user-interface for facilitating data acquisition. Joystick provides 
high flexibility and easy-to-use user interface for controlling the robot as it acts as a single super controller enabling control of various sensors and
actuators present in the robot. 




