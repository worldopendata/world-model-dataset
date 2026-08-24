# WorldModel Data Atlas

[English](./README.md) | [简体中文](./README.zh-CN.md)

_A task-first, evidence-aware catalog of open datasets for world-model research._

[![Live catalog](https://img.shields.io/badge/explore-live_catalog-2563eb)](https://worldopendata.github.io/world-model-dataset/)
[![Datasets](https://img.shields.io/badge/datasets-52-16a34a)](#dataset-catalog)
[![Primary tasks](https://img.shields.io/badge/primary_tasks-6-7c3aed)](#taxonomy)

[![website](https://github.com/worldopendata/world-model-dataset/blob/main/images/cover.jpg)](https://worldopendata.github.io/world-model-dataset)

[Explore the website](https://worldopendata.github.io/world-model-dataset/) · [Browse datasets](#dataset-catalog) · [Contribute](#contributing-and-corrections)

---

## Overview

WorldModel Data Atlas helps researchers answer a practical question:

> Which dataset should I use to train or evaluate the world-model capability I care about?

Unlike chronological paper lists, this catalog organizes datasets by the world-model capability they primarily support. Domain, modality, structure, source, access, and licensing metadata provide additional context without duplicating datasets across sections.

The GitHub README is the browsable community catalog. The [interactive website](https://worldopendata.github.io/world-model-dataset/) adds search, filtering, bilingual display, and detailed comparisons.

## Why this catalog

- **Task-first organization** — start from the capability you want to train or evaluate
- **Research-oriented metadata** — compare modalities, scale, structure, source, access, and licensing
- **Bilingual content** — use the English or Chinese README and switch languages on the website
- **Curated resource links** — follow official homepages, papers, and code repositories
- **Evidence-aware notes** — understand both useful properties and important limitations
- **Reproducible maintenance** — generate the website and both README catalogs from one data source

This is a curated research resource, not a ranking. Detailed suitability notes on the website are more informative than a single aggregate score.

## Catalog snapshot

| Datasets | Primary tasks | Domains | Modalities |
| ---: | ---: | ---: | ---: |
| 52 | 6 | 6 | 42 |

## Taxonomy

Each dataset has exactly one primary task. Secondary uses and cross-cutting properties are represented as tags.

| Dimension | Question it answers | Examples |
| --- | --- | --- |
| **Primary task** | What capability does it mainly train or evaluate? | Prediction, action-conditioned dynamics, decision-making |
| **Domain** | In what kind of world was it collected? | Robotics, driving, games, physics |
| **Modality** | What signals are available? | Video, action, robot state, LiDAR, language |
| **Structure** | How are samples organized? | Temporal sequences, trajectories, interaction episodes |
| **Source** | How was the data produced? | Real-world, simulation, teleoperation, synthetic |

The six primary tasks are:

1. **Predictive & Generative Dynamics** — future observation or state prediction, video prediction, and long-horizon generation
2. **Action-Conditioned Dynamics** — learning how the world changes in response to an action
3. **Decision-Making & Agent Trajectories** — planning, control, imitation learning, offline RL, and agent behavior
4. **Spatial & Spatiotemporal World Modeling** — 3D/4D reconstruction, occupancy, scene flow, and dynamic spatial representations
5. **Physical & Causal Reasoning** — physical properties, interactions, interventions, and counterfactual reasoning
6. **World Model Evaluation & Diagnostics** — datasets primarily designed to measure model capabilities and failure modes

If only one use could be retained, the dataset's most distinctive world-model use becomes its primary task.

## Dataset catalog

Entries are grouped by primary task and sorted by year within each group. The README shows discovery-oriented metadata; the website provides scale, organizations, license notes, secondary tasks, data structure, source, and editorial guidance.

<!-- DATASET_CATALOG_START -->

### Predictive & Generative Dynamics (11)

- **Ego4D** · 2022
  A large first-person video dataset of real human activities collected by Meta AI and an international academic consortium, with benchmarks for object interaction anticipation and long-term action forecasting.
  `Egocentric / Human` · `RGB Video` · `Audio` · `3D Mesh` · `Gaze` · `IMU`
  [Homepage](https://ego4d-data.org/) · [Paper](https://arxiv.org/abs/2110.07058) · [Code](https://github.com/facebookresearch/Ego4d) · Access: Application required

- **EPIC-KITCHENS-100** · 2022
  A large first-person kitchen activity dataset with continuous video, action segments, verb-noun labels, and anticipation benchmarks for hand-object interaction.
  `Egocentric / Human` · `RGB Video` · `Audio` · `Action Labels` · `Language`
  [Homepage](https://epic-kitchens.github.io/2021) · [Paper](https://arxiv.org/abs/2006.13256) · [Code](https://github.com/epic-kitchens/epic-kitchens-100-annotations) · Access: Application / agreement required

- **BDD100K** · 2020
  A large driving-video dataset spanning cities, weather, and time of day, with annotations for detection, lanes, drivable areas, and tracking.
  `Autonomous Driving` · `RGB Video` · `2D Boxes` · `Segmentation` · `Lane Markings`
  [Homepage](https://bdd-data.berkeley.edu/) · [Paper](https://arxiv.org/abs/1805.04687) · [Code](https://github.com/bdd100k/bdd100k) · Access: Registration required

- **Argoverse 1** · 2019
  An autonomous-driving dataset for 3D tracking and motion forecasting, combining trajectories, sensor logs, and HD maps for map-conditioned future prediction.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `Maps` · `Trajectories` · `3D Boxes`
  [Homepage](https://www.argoverse.org/av1.html) · [Paper](https://arxiv.org/abs/1911.02620) · [Code](https://github.com/argoverse/argoverse-api) · Access: Open download

- **INTERACTION Dataset** · 2019
  A trajectory dataset focused on highly interactive driving scenarios such as intersections, roundabouts, and merging across multiple countries.
  `Autonomous Driving` · `Trajectories` · `Maps` · `Agent Pose`
  [Homepage](https://interaction-dataset.com/) · [Paper](https://arxiv.org/abs/1910.03088) · [Code](https://github.com/interaction-dataset/interaction-dataset) · Access: Open download

- **Charades-Ego** · 2018
  Pairs first- and third-person videos of the same indoor activities with multi-label temporal actions for cross-view behavior representation.
  `Egocentric / Human` · `Multi-view RGB Video` · `Action Labels`
  [Homepage](https://prior.allenai.org/projects/charades-ego) · [Paper](https://arxiv.org/abs/1804.09626) · Access: Open / agreement-dependent

- **EPIC-KITCHENS-55** · 2018
  The first large EPIC-KITCHENS release, capturing continuous first-person activities in participants' own kitchens with action, verb, noun, and narration labels.
  `Egocentric / Human` · `RGB Video` · `Audio` · `Action Labels` · `Language`
  [Homepage](https://epic-kitchens.github.io/2018) · [Paper](https://arxiv.org/abs/1804.02748) · [Code](https://github.com/epic-kitchens/epic-kitchens-55-annotations) · Access: Application / agreement required

- **Something-Something V2** · 2018
  A large collection of short human-object interaction videos whose fine-grained labels depend on temporal changes such as pushing, placing, and occluding.
  `Egocentric / Human` · `RGB Video` · `Action Labels` · `Text Templates`
  [Paper](https://arxiv.org/abs/1706.04261) · Access: Registration required

- **Moving MNIST** · 2015
  A classic video-prediction benchmark generated by moving MNIST digits across a canvas with boundary collisions, widely used for temporal representation and uncertain-future modeling.
  `Physics / Science` · `Synthetic Video` · `Object State` · `Trajectory`
  [Homepage](https://www.tensorflow.org/datasets/catalog/moving_mnist) · [Paper](https://arxiv.org/abs/1502.04681) · [Code](https://github.com/tensorflow/datasets) · Access: Open generation toolkit

- **Human3.6M** · 2014
  A large multi-view human motion dataset with synchronized video, 3D joints, camera parameters, and action labels, foundational for future-pose prediction.
  `Egocentric / Human` · `Multi-view RGB Video` · `3D State` · `Action Labels` · `Camera Pose`
  [Homepage](http://vision.imar.ro/human3.6m/description.php) · [Paper](https://ieeexplore.ieee.org/document/6682899) · Access: Registration / agreement required

- **KTH Human Actions** · 2004
  An early real-video benchmark widely reused for video prediction, with six continuous human actions under controlled backgrounds and scale variation.
  `Egocentric / Human` · `RGB Video` · `Action Labels`
  [Homepage](https://www.csc.kth.se/cvap/actions/) · Access: Open download

### Action-Conditioned Dynamics (5)

- **RoboCasa** · 2024
  A large-scale simulation environment and task suite for household robot learning, with diverse kitchens, objects, language tasks, and generated visual-action trajectories.
  `Robotics / Embodied AI` · `RGB Video` · `Depth` · `Action` · `Robot State` · `Language`
  [Homepage](https://robocasa.ai/) · [Paper](https://arxiv.org/abs/2406.02523) · [Code](https://github.com/robocasa/robocasa) · Access: Open generation toolkit

- **MineDojo** · 2022
  A large multimodal knowledge and interaction platform built around Minecraft, combining player videos, text knowledge, community discussions, and a live simulation environment for open-world agents.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Audio` · `Text` · `Game State`
  [Homepage](https://minedojo.org/) · [Paper](https://arxiv.org/abs/2206.01356) · [Code](https://github.com/MineDojo/MineDojo) · Access: Open / source-dependent

- **RoboNet** · 2020
  A cross-platform robot interaction video dataset collected across multiple laboratories, robot arms, viewpoints, and objects for visual dynamics and control generalization.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.robonet.wiki/) · [Paper](https://arxiv.org/abs/1910.11215) · [Code](https://github.com/SudeepDasari/RoboNet) · Access: Open download

- **OmniPush** · 2019
  A real-robot pushing-dynamics dataset with RGB-D video and state changes across objects, surfaces, and pushing actions for transferable visual dynamics learning.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Object State` · `Trajectory`
  [Paper](https://arxiv.org/abs/1910.00618) · [Code](https://github.com/MIT-Omnipush/video-prediction) · Access: Open project access

- **BAIR Robot Pushing** · 2016
  A classic action-conditioned video dataset of a robot pushing objects on a tabletop, widely used for stochastic future prediction and visual dynamics baselines.
  `Robotics / Embodied AI` · `RGB Video` · `Action`
  [Homepage](https://www.tensorflow.org/datasets/catalog/bair_robot_pushing_small) · [Paper](https://arxiv.org/abs/1605.07157) · [Code](https://github.com/tensorflow/datasets) · Access: Open download

### Decision-Making & Agent Trajectories (12)

- **DROID** · 2024
  A large real-world robot manipulation dataset spanning many sites, operators, and everyday scenes, with synchronized vision, actions, language, and robot state.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://droid-dataset.github.io/) · [Paper](https://arxiv.org/abs/2403.12945) · [Code](https://github.com/droid-dataset/droid) · Access: Open download

- **BridgeData V2** · 2023
  A large multi-task robot manipulation dataset collected in real kitchens and workspaces, with diverse trajectories and language labels for imitation and generalist policy learning.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://rail-berkeley.github.io/bridgedata/) · [Paper](https://arxiv.org/abs/2308.12952) · [Code](https://github.com/rail-berkeley/bridge_data_v2) · Access: Open download

- **LIBERO** · 2023
  A benchmark for lifelong and language-conditioned robot manipulation with multi-task demonstrations, visual observations, actions, and task descriptions.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://libero-project.github.io/) · [Paper](https://arxiv.org/abs/2306.14877) · [Code](https://github.com/Lifelong-Robot-Learning/LIBERO) · Access: Open generation toolkit

- **MimicGen** · 2023
  A framework that generates diverse robot manipulation demonstrations by replaying and composing a small number of human demonstrations in simulation.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://mimicgen.github.io/) · [Paper](https://arxiv.org/abs/2310.17596) · [Code](https://github.com/NVlabs/mimicgen) · Access: Open generation toolkit

- **Open X-Embodiment** · 2023
  A large cross-embodiment collection assembled by Google DeepMind and more than 30 research institutions. It unifies real robot interactions across platforms, tasks, and environments for generalist embodied learning.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://robotics-transformer-x.github.io/) · [Paper](https://arxiv.org/abs/2310.08864) · [Code](https://github.com/google-deepmind/open_x_embodiment) · Access: Open / component-dependent

- **CALVIN** · 2022
  A long-horizon language-conditioned robot benchmark in a controlled tabletop environment, with continuous interaction trajectories and compositional task sequences.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State` · `Language`
  [Homepage](https://calvin.cs.uni-freiburg.de/) · [Paper](https://arxiv.org/abs/2112.03227) · [Code](https://github.com/mees/calvin) · Access: Open download

- **nuPlan** · 2021
  A large-scale real-world planning dataset and benchmark with sensor logs, maps, trajectories, and closed-loop evaluation tools for autonomous driving.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `Maps` · `Trajectories` · `GPS / IMU`
  [Homepage](https://www.nuscenes.org/nuplan) · [Paper](https://arxiv.org/abs/2106.11810) · [Code](https://github.com/motional/nuplan-devkit) · Access: Registration required

- **RLBench** · 2020
  A programmable robot manipulation suite built on CoppeliaSim, offering many tasks, demonstrations, and multi-view observations for reinforcement learning, imitation, and controllable simulation.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State` · `Language`
  [Homepage](https://sites.google.com/view/rlbench) · [Paper](https://arxiv.org/abs/1909.12271) · [Code](https://github.com/stepjam/RLBench) · Access: Open generation toolkit

- **Meta-World** · 2019
  A robot manipulation benchmark for multi-task and meta reinforcement learning, with a shared embodiment and programmable tasks for generated trajectories.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Reward`
  [Homepage](https://meta-world.github.io/) · [Paper](https://arxiv.org/abs/1910.10897) · [Code](https://github.com/Farama-Foundation/Metaworld) · Access: Open generation toolkit

- **MineRL** · 2019
  A Minecraft dataset of human demonstrations with long videos, keyboard and mouse actions, game state, and rewards for sample-efficient learning and open-world planning.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Game State` · `Reward`
  [Homepage](https://minerl.io/) · [Paper](https://arxiv.org/abs/1907.13440) · [Code](https://github.com/minerllabs/minerl) · Access: Open download

- **RoboTurk** · 2018
  A real-robot demonstration dataset collected through crowdsourced teleoperation, with vision, actions, and robot state for scalable imitation learning.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://roboturk.stanford.edu/) · [Paper](https://arxiv.org/abs/1811.02790) · Access: Open project access

- **VirtualHome** · 2018
  Represents household activities as executable programs in 3D homes, linking language, action sequences, object states, and rendered video.
  `Games / Virtual Environments` · `Robotics / Embodied AI` · `Text` · `Action` · `Simulation State` · `Synthetic Video`
  [Homepage](http://virtual-home.org/) · [Paper](https://arxiv.org/abs/1806.07011) · [Code](https://github.com/xavierpuigf/virtualhome) · Access: Open generation toolkit

### Spatial & Spatiotemporal World Modeling (17)

- **Ego-Exo4D** · 2024
  A synchronized first- and third-person dataset of human skills across sports, music, and cooking, with 3D, language, and camera information.
  `Egocentric / Human` · `Multi-view RGB Video` · `Audio` · `Language` · `Camera Pose` · `3D Annotations`
  [Homepage](https://ego-exo4d-data.org/) · [Paper](https://arxiv.org/abs/2311.18259) · [Code](https://github.com/facebookresearch/Ego4d) · Access: Application required

- **Argoverse 2** · 2023
  A multimodal autonomous-driving collection for perception, motion forecasting, and map understanding, with sensor logs, HD maps, and diverse urban motion scenarios.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `Maps` · `Trajectories` · `3D Boxes`
  [Homepage](https://www.argoverse.org/av2.html) · [Paper](https://arxiv.org/abs/2301.00493) · [Code](https://github.com/argoverse/av2-api) · Access: Open download

- **MOVi** · 2022
  A family of Kubric-generated multi-object videos with instance masks, depth, optical flow, and 3D attributes for object discovery and interpretable dynamics.
  `Physics / Science` · `Synthetic Video` · `Depth` · `Optical Flow` · `Segmentation` · `3D State`
  [Paper](https://arxiv.org/abs/2203.12602) · [Code](https://github.com/google-research/kubric) · Access: Open download

- **Habitat-Matterport 3D** · 2021
  A collection of high-quality building-scale 3D scans for embodied navigation and indoor simulation, supporting generated RGB-D, semantic, and agent trajectories through Habitat.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `3D Mesh` · `RGB-D` · `Semantic Labels` · `Agent Pose`
  [Homepage](https://aihabitat.org/datasets/hm3d/) · [Paper](https://arxiv.org/abs/2109.08238) · [Code](https://github.com/facebookresearch/habitat-sim) · Access: Application required

- **PandaSet** · 2020
  A multi-sensor autonomous-driving dataset with cameras, LiDAR, GPS/IMU, and 3D annotations across urban traffic scenes.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `GPS / IMU` · `3D Boxes` · `Maps`
  [Paper](https://arxiv.org/abs/2102.02684) · [Code](https://github.com/scaleapi/pandaset-devkit) · Access: Open download

- **nuScenes** · 2019
  A multi-sensor autonomous-driving dataset covering urban roads in Boston and Singapore, with synchronized cameras, LiDAR, radar, localization, and 3D annotations for spatiotemporal modeling.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `RADAR` · `IMU / GPS` · `3D Boxes`
  [Homepage](https://www.nuscenes.org/) · [Paper](https://arxiv.org/abs/1903.11027) · [Code](https://github.com/nutonomy/nuscenes-devkit) · Access: Registration required

- **Replica** · 2019
  A set of high-quality reconstructed indoor scenes with textured meshes, semantics, and photorealistic assets for embodied navigation and neural scene representations.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `3D Mesh` · `Semantic Labels` · `Camera Pose`
  [Paper](https://arxiv.org/abs/1906.05797) · [Code](https://github.com/facebookresearch/Replica-Dataset) · Access: Open download / agreement required

- **Waymo Open Dataset** · 2019
  A high-quality autonomous-driving collection with cameras, LiDAR, maps, 3D detection labels, and motion scenarios for dynamic occupancy and trajectory prediction.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `Maps` · `3D Boxes` · `Trajectories`
  [Homepage](https://waymo.com/open/) · [Paper](https://arxiv.org/abs/1912.04838) · [Code](https://github.com/waymo-research/waymo-open-dataset) · Access: Registration required

- **ApolloScape** · 2018
  A multi-task autonomous-driving dataset with street-view video, stereo images, depth, 3D vehicles, and high-definition maps for urban spatiotemporal modeling.
  `Autonomous Driving` · `Urban / 3D Scene` · `RGB Video` · `Depth` · `Maps` · `3D Boxes` · `Semantic Labels`
  [Homepage](https://apolloscape.auto/) · [Paper](https://arxiv.org/abs/1803.06184) · [Code](https://github.com/ApolloScapeAuto/dataset-api) · Access: Registration required

- **Gibson Environment Dataset** · 2018
  A collection of navigable 3D environments reconstructed from real scans, used with Gibson to generate RGB, depth, semantics, and agent trajectories.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `3D Mesh` · `RGB-D` · `Agent Pose` · `Semantic Labels`
  [Homepage](http://gibsonenv.stanford.edu/database/) · [Paper](https://arxiv.org/abs/1808.10654) · [Code](https://github.com/StanfordVL/GibsonEnv) · Access: Request / agreement required

- **Matterport3D** · 2017
  A building-scale RGB-D panorama dataset for indoor scene understanding and embodied navigation, with meshes, camera poses, semantics, and regions.
  `Urban / 3D Scene` · `Robotics / Embodied AI` · `RGB-D` · `3D Mesh` · `Camera Pose` · `Semantic Labels`
  [Homepage](https://niessner.github.io/Matterport/) · [Paper](https://arxiv.org/abs/1709.06158) · [Code](https://github.com/niessner/Matterport) · Access: Application / agreement required

- **ScanNet** · 2017
  A large collection of handheld RGB-D indoor scan sequences with camera poses, reconstructed meshes, semantic labels, and instances.
  `Urban / 3D Scene` · `Robotics / Embodied AI` · `RGB-D` · `Camera Pose` · `3D Mesh` · `Semantic Labels`
  [Homepage](http://www.scan-net.org/) · [Paper](https://arxiv.org/abs/1702.04405) · [Code](https://github.com/ScanNet/ScanNet) · Access: Agreement required

- **Cityscapes** · 2016
  An urban-driving dataset from European cities with short sequences and fine semantic and instance annotations, widely used for future semantic prediction.
  `Autonomous Driving` · `Urban / 3D Scene` · `RGB Video` · `Semantic Labels` · `Segmentation` · `Depth`
  [Homepage](https://www.cityscapes-dataset.com/) · [Paper](https://openaccess.thecvf.com/content_cvpr_2016/html/Cordts_The_Cityscapes_Dataset_CVPR_2016_paper.html) · [Code](https://github.com/mcordts/cityscapesScripts) · Access: Registration required

- **Oxford RobotCar** · 2016
  An autonomous-driving dataset repeatedly collected along the same route for over a year, with cameras, LiDAR, radar, and localization for long-term environmental change.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `RADAR` · `GPS / IMU`
  [Homepage](https://robotcar-dataset.robots.ox.ac.uk/) · [Paper](https://arxiv.org/abs/1610.08265) · [Code](https://github.com/ori-mrg/robotcar-dataset-sdk) · Access: Open download

- **SYNTHIA** · 2016
  A synthetic urban-driving dataset with multi-season, multi-weather, and multi-view sequences plus pixel-level semantics and depth.
  `Autonomous Driving` · `Urban / 3D Scene` · `Synthetic Video` · `Depth` · `Semantic Labels` · `Camera Pose`
  [Homepage](https://synthia-dataset.net/) · [Paper](https://openaccess.thecvf.com/content_cvpr_2016/html/Ros_The_SYNTHIA_Dataset_CVPR_2016_paper.html) · Access: Request / agreement required

- **Virtual KITTI** · 2016
  A synthetic driving-video counterpart to KITTI with depth, optical flow, instance, semantic, and camera ground truth for controlled dynamics and domain transfer.
  `Autonomous Driving` · `Synthetic Video` · `Depth` · `Optical Flow` · `Segmentation` · `Camera Pose`
  [Homepage](https://europe.naverlabs.com/research/computer-vision/proxy-virtual-worlds-vkitti-1/) · [Paper](https://arxiv.org/abs/1605.06457) · Access: Open download

- **KITTI** · 2012
  A foundational autonomous-driving dataset with stereo cameras, LiDAR, GPS/IMU, and established benchmarks for depth, scene flow, odometry, and 3D perception.
  `Autonomous Driving` · `Stereo RGB` · `LiDAR` · `GPS / IMU` · `3D Boxes`
  [Homepage](https://www.cvlibs.net/datasets/kitti/) · [Paper](https://www.cvlibs.net/publications/Geiger2013IJRR.pdf) · [Code](https://github.com/utiasSTARS/pykitti) · Access: Open download

### Physical & Causal Reasoning (6)

- **Physion** · 2021
  A synthetic intuitive-physics dataset covering collisions, support, containment, and deformation, designed to test whether models can predict object contact and dynamics.
  `Physics / Science` · `Synthetic Video` · `Depth` · `Segmentation` · `Object State`
  [Homepage](https://physion-benchmark.github.io/) · [Paper](https://arxiv.org/abs/2106.08261) · [Code](https://github.com/cogtoolslab/physics-benchmarking-neurips2021) · Access: Open download

- **CATER** · 2020
  A synthetic video dataset with compositional object motions and precise metadata, emphasizing spatiotemporal relations, occlusion, and long-term object tracking.
  `Physics / Science` · `Synthetic Video` · `Object State` · `Action Labels` · `3D Metadata`
  [Homepage](https://rohitgirdhar.github.io/CATER/) · [Paper](https://arxiv.org/abs/1910.04744) · [Code](https://github.com/rohitgirdhar/CATER) · Access: Open download

- **PHYRE** · 2019
  A 2D physical reasoning benchmark where agents place objects to achieve goals across generated task templates, testing intervention, trial efficiency, and generalization.
  `Physics / Science` · `Games / Virtual Environments` · `Simulation State` · `Action` · `Synthetic Video`
  [Homepage](https://phyre.ai/) · [Paper](https://arxiv.org/abs/1908.05656) · [Code](https://github.com/facebookresearch/phyre) · Access: Open generation toolkit

- **IntPhys** · 2018
  A synthetic visual-physics benchmark contrasting possible and impossible scenes to test object permanence, occlusion, shape, and support reasoning.
  `Physics / Science` · `Synthetic Video` · `Depth` · `Segmentation` · `Scene Metadata`
  [Homepage](https://intphys.cognitive-ml.fr/) · [Paper](https://arxiv.org/abs/1803.07616) · [Code](https://github.com/rronan/IntPhys) · Access: Open download

- **ShapeStacks** · 2018
  A procedurally generated dataset and toolkit of stacked shapes for reasoning about stability, support relations, and 3D physical structure from images.
  `Physics / Science` · `Synthetic Video` · `3D State` · `Object Metadata` · `Simulation State`
  [Paper](https://arxiv.org/abs/1804.08018) · [Code](https://github.com/ogroth/shapestacks) · Access: Open generation toolkit

- **Physics 101** · 2016
  A real-video dataset of objects moving on inclined surfaces with material, mass, angle, and motion information for estimating physical properties and dynamics.
  `Physics / Science` · `RGB Video` · `Object Metadata` · `Trajectory`
  [Homepage](https://phys101.csail.mit.edu/) · [Paper](https://arxiv.org/abs/1511.07439) · Access: Open project access

### World Model Evaluation & Diagnostics (1)

- **CLEVRER** · 2020
  A synthetic benchmark for video-based physical and causal reasoning. Collision scenarios test descriptive, explanatory, predictive, and counterfactual reasoning with structured annotations.
  `Physics / Science` · `Synthetic Video` · `Object Metadata` · `Trajectory` · `Logic Program` · `QA`
  [Homepage](https://clevrer.csail.mit.edu/) · [Paper](https://arxiv.org/abs/1910.01442) · Access: Open download

<!-- DATASET_CATALOG_END -->

## Contributing and corrections

Please use GitHub Issues for all contributions and corrections. You can suggest a new dataset, report inaccurate metadata or broken links, question a classification, or share an update from an official source. When opening an issue, include the relevant official links, access and license information, primary task, and English and Chinese descriptions when available.

## Acknowledgments

The project was inspired by community-maintained world-model resources, especially [Awesome World Models](https://github.com/knightnemo/Awesome-World-Models), while focusing specifically on dataset discovery, comparison, and selection.
