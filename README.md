# WorldModel Data Atlas

[English](./README.md) | [简体中文](./README.zh-CN.md)

_A task-first, evidence-aware catalog of open datasets for world-model research._

[![Live catalog](https://img.shields.io/badge/explore-live_catalog-2563eb)](https://worldopendata.github.io/world-model-dataset/)
[![Datasets](https://img.shields.io/badge/datasets-143-16a34a)](#dataset-catalog)
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
| 143 | 6 | 6 | 45 |

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

[Predictive & Generative Dynamics (23)](#predictive-generative-dynamics) · [Action-Conditioned Dynamics (18)](#action-conditioned-dynamics) · [Decision-Making & Agent Trajectories (43)](#decision-making-agent-trajectories) · [Spatial & Spatiotemporal World Modeling (33)](#spatial-spatiotemporal-world-modeling) · [Physical & Causal Reasoning (15)](#physical-causal-reasoning) · [World Model Evaluation & Diagnostics (11)](#world-model-evaluation-diagnostics)

<a id="predictive-generative-dynamics"></a>

### Predictive & Generative Dynamics (23)

- **Ego4D** · 2022
  A large first-person video dataset of real human activities collected by Meta AI and an international academic consortium, with benchmarks for object interaction anticipation and long-term action forecasting.
  `Egocentric / Human` · `RGB Video` · `Audio` · `3D Mesh` · `Gaze` · `IMU`
  [Homepage](https://ego4d-data.org/) · [Paper](https://arxiv.org/abs/2110.07058) · [Code](https://github.com/facebookresearch/Ego4d) · Access: Application required

- **Ego4D Forecasting** · 2022
  An egocentric video benchmark for short-term future action forecasting.
  `Egocentric / Human` · `RGB Video` · `Action Labels` · `Language`
  [Homepage](https://ego4d-data.org/) · [Paper](https://arxiv.org/abs/2206.01641) · Access: Official challenge portal

- **EPIC-KITCHENS-100** · 2022
  A large first-person kitchen activity dataset with continuous video, action segments, verb-noun labels, and anticipation benchmarks for hand-object interaction.
  `Egocentric / Human` · `RGB Video` · `Audio` · `Action Labels` · `Language`
  [Homepage](https://epic-kitchens.github.io/2021) · [Paper](https://arxiv.org/abs/2006.13256) · [Code](https://github.com/epic-kitchens/epic-kitchens-100-annotations) · Access: Application / agreement required

- **Kubric** · 2022
  A pipeline for generating videos with exact 3D, optical-flow, depth, and segmentation annotations.
  `Physics / Science` · `Games / Virtual Environments` · `Synthetic Video` · `Depth` · `Optical Flow` · `Segmentation` · `3D State`
  [Homepage](https://kubric.readthedocs.io/) · [Paper](https://arxiv.org/abs/2203.03570) · [Code](https://github.com/google-research/kubric) · Access: Official generation toolkit

- **BDD100K** · 2020
  A large driving-video dataset spanning cities, weather, and time of day, with annotations for detection, lanes, drivable areas, and tracking.
  `Autonomous Driving` · `RGB Video` · `2D Boxes` · `Segmentation` · `Lane Markings`
  [Homepage](https://bdd-data.berkeley.edu/) · [Paper](https://arxiv.org/abs/1805.04687) · [Code](https://github.com/bdd100k/bdd100k) · Access: Registration required

- **Virtual KITTI 2** · 2020
  A photorealistic synthetic driving-video dataset with depth, optical flow, scene flow, and 3D annotations.
  `Autonomous Driving` · `Games / Virtual Environments` · `Synthetic Video` · `Depth` · `Optical Flow` · `3D Boxes` · `Segmentation`
  [Homepage](https://europe.naverlabs.com/proxy-virtual-worlds-vkitti-2/) · [Paper](https://arxiv.org/abs/2001.10773) · Access: Official download

- **AMASS** · 2019
  A unified 4D human-motion database combining 15 motion-capture datasets in a common SMPL representation for motion prediction, generation, and interaction modeling.
  `Egocentric / Human` · `3D State` · `Trajectories` · `Agent Pose`
  [Homepage](https://amass.is.tue.mpg.de/) · [Paper](https://arxiv.org/abs/1904.03278) · Access: Official project access; registration may be required

- **Argoverse 1** · 2019
  An autonomous-driving dataset for 3D tracking and motion forecasting, combining trajectories, sensor logs, and HD maps for map-conditioned future prediction.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `Maps` · `Trajectories` · `3D Boxes`
  [Homepage](https://www.argoverse.org/av1.html) · [Paper](https://arxiv.org/abs/1911.02620) · [Code](https://github.com/argoverse/argoverse-api) · Access: Open download

- **D²-City** · 2019
  A large-scale dashcam video dataset spanning diverse weather, roads, and traffic conditions for urban driving dynamics and distribution generalization.
  `Autonomous Driving` · `Urban / 3D Scene` · `RGB Video` · `Semantic Labels` · `Trajectories`
  [Paper](https://arxiv.org/abs/1904.01975) · Access: Paper entry; official access requires verification

- **INTERACTION Dataset** · 2019
  A trajectory dataset focused on highly interactive driving scenarios such as intersections, roundabouts, and merging across multiple countries.
  `Autonomous Driving` · `Trajectories` · `Maps` · `Agent Pose`
  [Paper](https://arxiv.org/abs/1910.03088) · [Code](https://github.com/interaction-dataset/interaction-dataset) · Access: Open download

- **Kinetics-700** · 2019
  A large human-action video dataset covering 700 daily and sports action classes.
  `Egocentric / Human` · `RGB Video` · `Action Labels`
  [Paper](https://arxiv.org/abs/1907.06987) · Access: Official annotations and download scripts

- **3DPW** · 2018
  A real-world 3D human pose and motion video dataset with SMPL parameters and camera information.
  `Egocentric / Human` · `RGB Video` · `Agent Pose` · `Camera Pose`
  [Homepage](https://virtualhumans.mpi-inf.mpg.de/3DPW/) · [Paper](https://arxiv.org/abs/1810.04558) · Access: Official download

- **Charades-Ego** · 2018
  Pairs first- and third-person videos of the same indoor activities with multi-label temporal actions for cross-view behavior representation.
  `Egocentric / Human` · `Multi-view RGB Video` · `Action Labels`
  [Homepage](https://prior.allenai.org/projects/charades-ego) · [Paper](https://arxiv.org/abs/1804.09626) · Access: Open / agreement-dependent

- **EPIC-KITCHENS-55** · 2018
  The first large EPIC-KITCHENS release, capturing continuous first-person activities in participants' own kitchens with action, verb, noun, and narration labels.
  `Egocentric / Human` · `RGB Video` · `Audio` · `Action Labels` · `Language`
  [Homepage](https://epic-kitchens.github.io/2018) · [Paper](https://arxiv.org/abs/1804.02748) · [Code](https://github.com/epic-kitchens/epic-kitchens-55-annotations) · Access: Application / agreement required

- **Kinetics-600** · 2018
  A large-scale video dataset covering 600 human action classes.
  `Egocentric / Human` · `RGB Video` · `Action Labels`
  [Paper](https://arxiv.org/abs/1808.01316) · Access: Official annotations

- **Something-Something V2** · 2018
  A large collection of short human-object interaction videos whose fine-grained labels depend on temporal changes such as pushing, placing, and occluding.
  `Egocentric / Human` · `RGB Video` · `Action Labels` · `Text Templates`
  [Paper](https://arxiv.org/abs/1706.04261) · Access: Registration required

- **YouTube-VOS** · 2018
  A large video object-segmentation dataset with cross-frame masks and long-term tracking scenes.
  `Egocentric / Human` · `RGB Video` · `Segmentation` · `Object Metadata`
  [Homepage](https://youtube-vos.org/) · [Paper](https://arxiv.org/abs/1809.03327) · Access: Official challenge website

- **DAVIS** · 2016
  A high-quality video object-segmentation and tracking dataset with dense frame-level masks.
  `Egocentric / Human` · `RGB Video` · `Segmentation`
  [Homepage](https://davischallenge.org/) · [Paper](https://arxiv.org/abs/1604.00675) · Access: Official dataset website

- **Moving MNIST** · 2015
  A classic video-prediction benchmark generated by moving MNIST digits across a canvas with boundary collisions, widely used for temporal representation and uncertain-future modeling.
  `Physics / Science` · `Synthetic Video` · `Object State` · `Trajectory`
  [Homepage](https://www.tensorflow.org/datasets/catalog/moving_mnist) · [Paper](https://arxiv.org/abs/1502.04681) · [Code](https://github.com/tensorflow/datasets) · Access: Open generation toolkit

- **Human3.6M** · 2014
  A large multi-view human motion dataset with synchronized video, 3D joints, camera parameters, and action labels, foundational for future-pose prediction.
  `Egocentric / Human` · `Multi-view RGB Video` · `3D State` · `Action Labels` · `Camera Pose`
  [Homepage](http://vision.imar.ro/human3.6m/description.php) · [Paper](https://ieeexplore.ieee.org/document/6682899) · Access: Registration / agreement required

- **UCF101** · 2012
  A public video dataset of 101 human action classes with temporal action clips.
  `Egocentric / Human` · `RGB Video` · `Action Labels`
  [Homepage](https://www.crcv.ucf.edu/data/UCF101.php) · [Paper](https://arxiv.org/abs/1212.0402) · Access: Official dataset page

- **HMDB51** · 2011
  A video dataset of 51 human action classes collected from films and public videos.
  `Egocentric / Human` · `RGB Video` · `Action Labels`
  [Homepage](https://serre-lab.clps.brown.edu/resource/hmdb-a-large-human-motion-database/) · Access: Official project page

- **KTH Human Actions** · 2004
  An early real-video benchmark widely reused for video prediction, with six continuous human actions under controlled backgrounds and scale variation.
  `Egocentric / Human` · `RGB Video` · `Action Labels`
  [Homepage](https://www.csc.kth.se/cvap/actions/) · Access: Open download

<a id="action-conditioned-dynamics"></a>

### Action-Conditioned Dynamics (18)

- **DrivingDojo** · 2024
  A video dataset tailored to interactive driving world models, covering driving maneuvers, multi-agent interplay, open-world knowledge, and an action-instruction-following benchmark.
  `Autonomous Driving` · `RGB Video` · `Action` · `Language` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2410.10738) · [Code](https://github.com/Robertwyq/Drivingdojo) · Access: Paper and official project repository available; dataset access terms require verification

- **RoboCasa** · 2024
  A large-scale simulation environment and task suite for household robot learning, with diverse kitchens, objects, language tasks, and generated visual-action trajectories.
  `Robotics / Embodied AI` · `RGB Video` · `Depth` · `Action` · `Robot State` · `Language`
  [Homepage](https://robocasa.ai/) · [Paper](https://arxiv.org/abs/2406.02523) · [Code](https://github.com/robocasa/robocasa) · Access: Open generation toolkit

- **ARMBench** · 2023
  A large object-centric benchmark captured during warehouse robotic pick-and-place, with images, videos, and metadata before picking, during transfer, and after placement.
  `Robotics / Embodied AI` · `RGB Video` · `Segmentation` · `Object Metadata` · `Action Labels`
  [Homepage](http://armbench.com) · [Paper](https://arxiv.org/abs/2303.16382) · [Code](https://github.com/amzn/armbench) · Access: Official dataset website and loading code available

- **RH20T** · 2023
  A real-world bimanual manipulation dataset with multiview RGB-D, force sensing, and robot state.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State`
  [Homepage](https://rh20t.github.io/) · [Paper](https://arxiv.org/abs/2307.00770) · [Code](https://github.com/rh20t/rh20t_api) · Access: Official project and download entry

- **H2O** · 2022
  An egocentric hand-object interaction dataset with 3D poses of both hands and objects.
  `Egocentric / Human` · `RGB Video` · `Depth` · `Hand Pose` · `Object State`
  [Paper](https://arxiv.org/abs/2206.13809) · Access: Official project page

- **HOI4D** · 2022
  A 4D human-object interaction video dataset with hand, object, and camera-motion annotations.
  `Egocentric / Human` · `Robotics / Embodied AI` · `RGB-D` · `Action Labels` · `Object State` · `Agent Pose`
  [Homepage](https://hoi4d.github.io/) · [Paper](https://arxiv.org/abs/2203.01577) · Access: Official project and data

- **ManiSkill** · 2022
  An efficient physics-simulation benchmark and trajectory-generating environment for robot manipulation learning.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB-D` · `Action` · `Simulation State` · `Object State`
  [Homepage](https://maniskill.ai/) · [Paper](https://arxiv.org/abs/2202.04057) · [Code](https://github.com/haosulab/ManiSkill) · Access: Official simulator and benchmark

- **MineDojo** · 2022
  A large multimodal knowledge and interaction platform built around Minecraft, combining player videos, text knowledge, community discussions, and a live simulation environment for open-world agents.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Audio` · `Text` · `Game State`
  [Homepage](https://minedojo.org/) · [Paper](https://arxiv.org/abs/2206.01356) · [Code](https://github.com/MineDojo/MineDojo) · Access: Open / source-dependent

- **RT-1 Data** · 2022
  Real-robot multitask language-conditioned manipulation trajectories used to train the Robotics Transformer.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Language` · `Robot State`
  [Paper](https://arxiv.org/abs/2212.06817) · [Code](https://github.com/google-research/robotics_transformer) · Access: Paper and project entry; access may be restricted

- **DexYCB** · 2021
  An RGB-D video dataset of hand-YCB object interactions with 3D hand and object poses.
  `Egocentric / Human` · `Robotics / Embodied AI` · `RGB-D` · `3D Mesh` · `Agent Pose` · `Object State`
  [Homepage](https://dex-ycb.github.io/) · [Paper](https://arxiv.org/abs/2104.04631) · [Code](https://github.com/NVlabs/dex-ycb-toolkit) · Access: Official download

- **iGibson** · 2021
  A high-fidelity interactive 3D simulator generating embodied navigation and manipulation trajectories.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB-D` · `Action` · `Simulation State` · `Object State`
  [Homepage](https://svl.stanford.edu/igibson/) · [Paper](https://arxiv.org/abs/2012.02924) · [Code](https://github.com/StanfordVL/iGibson) · Access: Official simulator

- **InterHand2.6M** · 2020
  A large 3D interacting-hand pose dataset with real and synthetic hand interaction sequences.
  `Egocentric / Human` · `Robotics / Embodied AI` · `RGB Video` · `Agent Pose` · `3D Mesh`
  [Homepage](https://mks.ue.tsinghua.edu.cn/InterHand2.6M/) · [Paper](https://arxiv.org/abs/2008.09309) · Access: Official project page

- **RoboNet** · 2020
  A cross-platform robot interaction video dataset collected across multiple laboratories, robot arms, viewpoints, and objects for visual dynamics and control generalization.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://www.robonet.wiki/) · [Paper](https://arxiv.org/abs/1910.11215) · [Code](https://github.com/SudeepDasari/RoboNet) · Access: Open download

- **robosuite Benchmark** · 2020
  A modular robot-manipulation simulation framework providing generated multitask trajectories, visual observations, and physical state.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB-D` · `Action` · `Simulation State` · `Robot State`
  [Homepage](https://robosuite.ai/) · [Paper](https://arxiv.org/abs/2009.08993) · [Code](https://github.com/ARISE-Initiative/robosuite) · Access: Official simulator and datasets

- **OmniPush** · 2019
  A real-robot pushing-dynamics dataset with RGB-D video and state changes across objects, surfaces, and pushing actions for transferable visual dynamics learning.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Object State` · `Trajectory`
  [Paper](https://arxiv.org/abs/1910.00618) · [Code](https://github.com/MIT-Omnipush/video-prediction) · Access: Open project access

- **AI2-THOR** · 2017
  An interactive indoor simulator generating navigation, manipulation, and state-change trajectories.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB-D` · `Action` · `Simulation State` · `Object State`
  [Homepage](https://ai2thor.allenai.org/) · [Paper](https://arxiv.org/abs/1712.05474) · [Code](https://github.com/allenai/ai2thor) · Access: Official simulator

- **CARLA** · 2017
  An open autonomous-driving simulator generating multisensor driving, traffic-agent, and control trajectories.
  `Autonomous Driving` · `Games / Virtual Environments` · `RGB Video` · `LiDAR` · `RADAR` · `Action` · `Simulation State`
  [Homepage](https://carla.org/) · [Paper](https://arxiv.org/abs/1711.03938) · [Code](https://github.com/carla-simulator/carla) · Access: Official simulator

- **BAIR Robot Pushing** · 2016
  A classic action-conditioned video dataset of a robot pushing objects on a tabletop, widely used for stochastic future prediction and visual dynamics baselines.
  `Robotics / Embodied AI` · `RGB Video` · `Action`
  [Homepage](https://www.tensorflow.org/datasets/catalog/bair_robot_pushing_small) · [Paper](https://arxiv.org/abs/1605.07157) · [Code](https://github.com/tensorflow/datasets) · Access: Open download

<a id="decision-making-agent-trajectories"></a>

### Decision-Making & Agent Trajectories (43)

- **BRMData** · 2024
  A bimanual-mobile robot manipulation dataset for household tasks spanning single- and dual-arm, tabletop and mobile, human-interactive, rigid, and flexible-object scenarios.
  `Robotics / Embodied AI` · `Multi-view RGB Video` · `Depth` · `Action` · `Robot State`
  [Homepage](https://embodiedrobot.github.io/) · [Paper](https://arxiv.org/abs/2405.18860) · Access: Official project page and paper available; access conditions require verification

- **DROID** · 2024
  A large real-world robot manipulation dataset spanning many sites, operators, and everyday scenes, with synchronized vision, actions, language, and robot state.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://droid-dataset.github.io/) · [Paper](https://arxiv.org/abs/2403.12945) · [Code](https://github.com/droid-dataset/droid) · Access: Open download

- **PARTNR** · 2024
  A large embodied benchmark for planning and reasoning in household human-robot collaboration, with simulation-grounded language tasks containing spatial, temporal, and heterogeneous-agent constraints.
  `Robotics / Embodied AI` · `Language` · `Action` · `Simulation State` · `Object State` · `Trajectory`
  [Paper](https://arxiv.org/abs/2411.00081) · [Code](https://github.com/facebookresearch/partnr-planner) · Access: Official benchmark planner and task resources available

- **RoboMIND** · 2024
  A large unified multi-embodiment manipulation dataset with successful and failed teleoperation trajectories, multiview observations, robot states, language descriptions, and a digital-twin environment.
  `Robotics / Embodied AI` · `Multi-view RGB Video` · `Action` · `Robot State` · `Language` · `Depth`
  [Homepage](https://x-humanoid-robomind.github.io/) · [Paper](https://arxiv.org/abs/2412.13877) · [Code](https://github.com/x-humanoid-robomind/x-humanoid-robomind.github.io) · Access: Official project provides dataset and tooling entry points

- **BridgeData V2** · 2023
  A large real-robot multitask manipulation dataset spanning diverse kitchen and tabletop scenes.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://rail-berkeley.github.io/bridgedata/) · [Paper](https://arxiv.org/abs/2305.08990) · Access: Official project and download

- **FurnitureBench** · 2023
  A real-and-simulated long-horizon furniture assembly robot benchmark with trajectories.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State` · `Object State`
  [Homepage](https://clvrai.github.io/furniture-bench/) · [Paper](https://arxiv.org/abs/2305.12821) · [Code](https://github.com/clvrai/furniture-bench) · Access: Official benchmark and code

- **LIBERO** · 2023
  A benchmark for lifelong and language-conditioned robot manipulation with multi-task demonstrations, visual observations, actions, and task descriptions.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://libero-project.github.io/) · [Paper](https://arxiv.org/abs/2306.14877) · [Code](https://github.com/Lifelong-Robot-Learning/LIBERO) · Access: Open generation toolkit

- **MimicGen** · 2023
  A framework that generates diverse robot manipulation demonstrations by replaying and composing a small number of human demonstrations in simulation.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://mimicgen.github.io/) · [Paper](https://arxiv.org/abs/2310.17596) · [Code](https://github.com/NVlabs/mimicgen) · Access: Open generation toolkit

- **Mini-BEHAVIOR** · 2023
  A procedural 3D gridworld benchmark for long-horizon embodied decision-making with household tasks, object states, interaction actions, and human-demonstration collection.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB Video` · `Action` · `Simulation State` · `Object State` · `Trajectory`
  [Paper](https://arxiv.org/abs/2310.01824) · [Code](https://github.com/StanfordVL/mini_behavior) · Access: Official environment code and demonstration collection tools available

- **Open X-Embodiment** · 2023
  A large cross-embodiment collection assembled by Google DeepMind and more than 30 research institutions. It unifies real robot interactions across platforms, tasks, and environments for generalist embodied learning.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://robotics-transformer-x.github.io/) · [Paper](https://arxiv.org/abs/2310.08864) · [Code](https://github.com/google-deepmind/open_x_embodiment) · Access: Open / component-dependent

- **RoboHive** · 2023
  A unified benchmark framework for real and simulated robot-learning tasks, trajectories, and hardware interfaces.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State` · `Simulation State`
  [Homepage](https://sites.google.com/view/robohive) · [Paper](https://arxiv.org/abs/2310.06828) · [Code](https://github.com/vikashplus/robohive) · Access: Official framework

- **UMI** · 2023
  A universal mobile-manipulation interface and dataset recording handheld vision, end-effector actions, and cross-robot trajectories.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://umi-gripper.github.io/) · [Paper](https://arxiv.org/abs/2402.10329) · Access: Open-source project and paper

- **Assembly101** · 2022
  A multiview egocentric and exocentric video dataset of procedural assembly actions.
  `Egocentric / Human` · `RGB Video` · `Action Labels` · `Hand Pose`
  [Homepage](https://assembly101.github.io/) · [Paper](https://arxiv.org/abs/2206.01063) · Access: Official benchmark

- **BEHAVIOR-1K** · 2022
  An embodied benchmark of 1,000 everyday household activities with tasks, scenes, and simulation.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Simulation State` · `Language`
  [Homepage](https://behavior.stanford.edu/) · [Paper](https://arxiv.org/abs/2403.09227) · [Code](https://github.com/StanfordVL/BEHAVIOR-1K) · Access: Official benchmark

- **BridgeData** · 2022
  Cross-scene robot manipulation demonstrations recording vision, actions, and state across diverse tabletop tasks.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://rail-berkeley.github.io/bridgedata/) · [Paper](https://arxiv.org/abs/2203.16897) · Access: Paper and project entry

- **CALVIN** · 2022
  A long-horizon language-conditioned robot benchmark in a controlled tabletop environment, with continuous interaction trajectories and compositional task sequences.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State` · `Language`
  [Homepage](https://calvin.cs.uni-freiburg.de/) · [Paper](https://arxiv.org/abs/2112.03227) · [Code](https://github.com/mees/calvin) · Access: Open download

- **Ego4D v2** · 2022
  A large egocentric daily-life video dataset with hand, object, action, and natural-language temporal annotations.
  `Egocentric / Human` · `RGB Video` · `Language` · `Action Labels` · `Object Metadata`
  [Homepage](https://ego4d-data.org/) · [Paper](https://arxiv.org/abs/2110.07058) · Access: Official challenge portal

- **Language-Table** · 2022
  A language-conditioned tabletop robot dataset and environment with long-horizon free-form instructions.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Language` · `Robot State`
  [Paper](https://arxiv.org/abs/2210.06407) · [Code](https://github.com/google-research/language-table) · Access: Official dataset and code

- **ProcTHOR** · 2022
  A procedural framework for generating arbitrarily large, diverse, customizable interactive environments for embodied-agent training and evaluation, with an official 10,000-house sample.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB Video` · `Action` · `Simulation State` · `Scene Metadata`
  [Paper](https://arxiv.org/abs/2206.06994) · [Code](https://github.com/allenai/procthor) · Access: Official generator and ProcTHOR-10K sample available

- **TEACh** · 2022
  A dialogue-driven embodied-task dataset with language and action trajectories from human commander-follower interactions.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Language` · `Object State`
  [Homepage](https://teachingalfred.github.io/) · [Paper](https://arxiv.org/abs/2110.00534) · [Code](https://github.com/alexa/teach) · Access: Official benchmark and code

- **nuPlan** · 2021
  A large-scale real-world planning dataset and benchmark with sensor logs, maps, trajectories, and closed-loop evaluation tools for autonomous driving.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `Maps` · `Trajectories` · `GPS / IMU`
  [Homepage](https://www.nuscenes.org/nuplan) · [Paper](https://arxiv.org/abs/2106.11810) · [Code](https://github.com/motional/nuplan-devkit) · Access: Registration required

- **robomimic Datasets** · 2021
  Robot manipulation demonstration datasets and benchmarks for imitation learning across tasks, sources, and visual states.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State`
  [Homepage](https://robomimic.github.io/) · [Paper](https://arxiv.org/abs/2108.03298) · [Code](https://github.com/ARISE-Initiative/robomimic) · Access: Official benchmark and download

- **ThreeDWorld Transport Challenge** · 2021
  A visually guided task-and-motion planning benchmark in ThreeDWorld where a two-armed agent finds, grasps, and transports household objects under physical constraints.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB Video` · `Action` · `Simulation State` · `Object State`
  [Paper](https://arxiv.org/abs/2103.14025) · [Code](https://github.com/chuangg/tdw-transport-challenge-starter-code) · Access: Official paper and starter code available

- **ALFRED** · 2020
  A dataset and benchmark of language-guided indoor navigation and manipulation demonstrations.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Language` · `Object State`
  [Homepage](https://askforalfred.com/) · [Paper](https://arxiv.org/abs/1912.01734) · [Code](https://github.com/askforalfred/alfred) · Access: Official dataset and benchmark

- **Diving48** · 2020
  A video dataset of 48 fine-grained diving actions emphasizing temporal phase differences.
  `Egocentric / Human` · `RGB Video` · `Action Labels`
  [Paper](https://arxiv.org/abs/1903.11204) · Access: Official project and annotations

- **Ravens** · 2020
  A tabletop robot manipulation benchmark with procedural tasks and demonstration trajectories.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Simulation State`
  [Paper](https://arxiv.org/abs/2003.08927) · [Code](https://github.com/google-research/ravens) · Access: Official code and generation tools

- **RLBench** · 2020
  A programmable robot manipulation suite built on CoppeliaSim, offering many tasks, demonstrations, and multi-view observations for reinforcement learning, imitation, and controllable simulation.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Robot State` · `Language`
  [Homepage](https://sites.google.com/view/rlbench) · [Paper](https://arxiv.org/abs/1909.12271) · [Code](https://github.com/stepjam/RLBench) · Access: Open generation toolkit

- **RoboTHOR** · 2020
  An indoor robot environment and trajectory benchmark for sim-to-real navigation.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Agent Pose` · `Maps`
  [Homepage](https://ai2thor.allenai.org/robothor/) · [Paper](https://arxiv.org/abs/2004.06799) · Access: Official challenge and simulator

- **BabyAI** · 2019
  An embodied-learning platform generating language instructions, grid environments, and expert trajectories.
  `Robotics / Embodied AI` · `Games / Virtual Environments` · `RGB Video` · `Action` · `Language` · `Simulation State`
  [Paper](https://arxiv.org/abs/1810.08272) · [Code](https://github.com/mila-iqia/babyai) · Access: Official environment and generator

- **Franka Kitchen** · 2019
  A long-horizon kitchen robot manipulation environment with human demonstration trajectories.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Object State`
  [Paper](https://arxiv.org/abs/1910.11956) · [Code](https://github.com/Farama-Foundation/D4RL) · Access: Official environment and offline data

- **Honda Research Institute Driving Dataset** · 2019
  A real-road driving dataset for driver behavior, scene understanding, and causal explanations, combining driving video, vehicle state, and human advice.
  `Autonomous Driving` · `RGB Video` · `Action` · `Robot State` · `Language`
  [Homepage](https://usa.honda-ri.com/HAD) · [Paper](https://arxiv.org/abs/1811.02307) · Access: Official project page; access requires verification

- **Meta-World** · 2019
  A robot manipulation benchmark for multi-task and meta reinforcement learning, with a shared embodiment and programmable tasks for generated trajectories.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Reward`
  [Homepage](https://meta-world.github.io/) · [Paper](https://arxiv.org/abs/1910.10897) · [Code](https://github.com/Farama-Foundation/Metaworld) · Access: Open generation toolkit

- **MineRL** · 2019
  A Minecraft dataset of human demonstrations with long videos, keyboard and mouse actions, game state, and rewards for sample-efficient learning and open-world planning.
  `Games / Virtual Environments` · `RGB Video` · `Action` · `Game State` · `Reward`
  [Homepage](https://minerl.io/) · [Paper](https://arxiv.org/abs/1907.13440) · [Code](https://github.com/minerllabs/minerl) · Access: Open download

- **OffWorld Gym** · 2019
  An open physical robotics environment and benchmark for real-world reinforcement learning with sensor observations, actions, rewards, and interaction episodes.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Reward`
  [Paper](https://arxiv.org/abs/1910.08639) · [Code](https://github.com/offworld-projects/offworld-gym) · Access: Official repository available

- **SocNav1** · 2019
  A dataset for learning and benchmarking social-navigation conventions with human positions, orientations, groups, and obstacle relations in shared spaces.
  `Robotics / Embodied AI` · `Egocentric / Human` · `Agent Pose` · `Trajectories` · `Maps` · `Object State`
  [Paper](https://arxiv.org/abs/1909.02993) · [Code](https://github.com/gnns4hri/SocNav1) · Access: Official repository available

- **THÖR** · 2019
  A human-motion dataset for shared indoor spaces with accurate trajectories, head orientation, gaze, social groups, obstacle maps, and mobile-robot sensor data.
  `Robotics / Embodied AI` · `Egocentric / Human` · `Trajectories` · `Gaze` · `Agent Pose` · `LiDAR` · `Maps`
  [Paper](https://arxiv.org/abs/1909.04403) · Access: Paper entry; official access requires verification

- **40K Robotic Grasp Demonstrations** · 2018
  A dataset of roughly 40,000 naturalistic 6-DoF robotic grasp demonstrations with visual observations, end-effector poses, and grasp outcomes.
  `Robotics / Embodied AI` · `RGB Video` · `Depth` · `Action` · `Robot State` · `Trajectory`
  [Paper](https://arxiv.org/abs/1812.11683) · Access: Paper entry only; data access unverified

- **CoSTAR Block Stacking** · 2018
  A robot block-stacking demonstration dataset with visual observations, actions, and workspace constraints for compositional skill learning.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State` · `Object State`
  [Paper](https://arxiv.org/abs/1810.11714) · Access: Paper entry only; data access unverified

- **RoboTurk** · 2018
  A real-robot demonstration dataset collected through crowdsourced teleoperation, with vision, actions, and robot state for scalable imitation learning.
  `Robotics / Embodied AI` · `RGB Video` · `Action` · `Robot State`
  [Homepage](https://roboturk.stanford.edu/) · [Paper](https://arxiv.org/abs/1811.02790) · Access: Open project access

- **TrajNet** · 2018
  A benchmark for pedestrian and multi-agent trajectory prediction that standardizes future-location forecasting, social interaction, and multimodal uncertainty evaluation.
  `Egocentric / Human` · `Autonomous Driving` · `Trajectories` · `Agent Pose` · `Maps`
  [Paper](https://arxiv.org/abs/1805.07663) · [Code](https://github.com/vita-epfl/trajnetplusplusbaselines) · Access: Official benchmark repository available

- **VirtualHome** · 2018
  Represents household activities as executable programs in 3D homes, linking language, action sequences, object states, and rendered video.
  `Games / Virtual Environments` · `Robotics / Embodied AI` · `Text` · `Action` · `Simulation State` · `Synthetic Video`
  [Homepage](http://virtual-home.org/) · [Paper](https://arxiv.org/abs/1806.07011) · [Code](https://github.com/xavierpuigf/virtualhome) · Access: Open generation toolkit

- **PoseTrack** · 2017
  A multi-person pose estimation and tracking benchmark with temporally consistent keypoints and tracks in video.
  `Egocentric / Human` · `RGB Video` · `Agent Pose` · `Action Labels`
  [Homepage](https://posetrack.net/) · [Paper](https://arxiv.org/abs/1611.07727) · Access: Official challenge portal

- **NGSIM** · 2006
  A public naturalistic driving trajectory collection with continuous vehicle positions, speeds, and lane information on highways and urban roads for behavior forecasting.
  `Autonomous Driving` · `Trajectories` · `Maps` · `Agent Pose`
  [Homepage](https://ops.fhwa.dot.gov/trafficanalysistools/ngsim.htm) · Access: Official public data page

<a id="spatial-spatiotemporal-world-modeling"></a>

### Spatial & Spatiotemporal World Modeling (33)

- **Ego-Exo4D** · 2024
  A synchronized first- and third-person dataset of human skills across sports, music, and cooking, with 3D, language, and camera information.
  `Egocentric / Human` · `Multi-view RGB Video` · `Audio` · `Language` · `Camera Pose` · `3D Annotations`
  [Homepage](https://ego-exo4d-data.org/) · [Paper](https://arxiv.org/abs/2311.18259) · [Code](https://github.com/facebookresearch/Ego4d) · Access: Application required

- **Argoverse 2** · 2023
  A multimodal autonomous-driving collection for perception, motion forecasting, and map understanding, with sensor logs, HD maps, and diverse urban motion scenarios.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `Maps` · `Trajectories` · `3D Boxes`
  [Homepage](https://www.argoverse.org/av2.html) · [Paper](https://arxiv.org/abs/2301.00493) · [Code](https://github.com/argoverse/av2-api) · Access: Open download

- **EmbodiedScan** · 2023
  A multimodal egocentric dataset and benchmark for holistic embodied 3D scene understanding, combining RGB-D views, language prompts, oriented 3D boxes, and dense semantic occupancy.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `RGB-D` · `Language` · `3D Boxes` · `Semantic Labels` · `Camera Pose`
  [Paper](https://arxiv.org/abs/2312.16170) · [Code](https://github.com/OpenRobotLab/EmbodiedScan) · Access: Official code, annotations, and benchmark resources available

- **Objaverse** · 2023
  A large collection of 3D object assets for open-world 3D understanding and generation.
  `Urban / 3D Scene` · `Games / Virtual Environments` · `3D Mesh` · `Object Metadata` · `Text`
  [Homepage](https://objaverse.allenai.org/) · [Paper](https://arxiv.org/abs/2212.08051) · Access: Official dataset tooling

- **Robo360** · 2023
  An omnispective robotic manipulation dataset with dense multiview coverage and objects spanning varied material and optical properties for 3D physical-world modeling.
  `Robotics / Embodied AI` · `Physics / Science` · `Multi-view RGB Video` · `Camera Pose` · `Action` · `Object Metadata`
  [Homepage](https://robo360dataset.github.io/) · [Paper](https://arxiv.org/abs/2312.06686) · [Code](https://github.com/robo360dataset/robo360dataset.github.io) · Access: Official project repository and paper entry available; dataset terms require verification

- **ScanNet++** · 2023
  A high-fidelity indoor 3D scanning dataset with neural-rendering captures and dense semantic annotations.
  `Urban / 3D Scene` · `RGB-D` · `3D Mesh` · `Semantic Labels` · `Camera Pose`
  [Homepage](https://scannetpp.ml/) · [Paper](https://arxiv.org/abs/2308.11417) · Access: Official project page

- **MOVi** · 2022
  A family of Kubric-generated multi-object videos with instance masks, depth, optical flow, and 3D attributes for object discovery and interpretable dynamics.
  `Physics / Science` · `Synthetic Video` · `Depth` · `Optical Flow` · `Segmentation` · `3D State`
  [Paper](https://arxiv.org/abs/2203.12602) · [Code](https://github.com/google-research/kubric) · Access: Open download

- **ARKitScenes** · 2021
  An indoor RGB-D scanning and 3D reconstruction dataset captured with mobile devices.
  `Urban / 3D Scene` · `RGB-D` · `3D Mesh` · `Camera Pose`
  [Homepage](https://github.com/apple/ARKitScenes) · [Paper](https://arxiv.org/abs/2111.08853) · Access: Official download

- **Habitat-Matterport 3D** · 2021
  A collection of high-quality building-scale 3D scans for embodied navigation and indoor simulation, supporting generated RGB-D, semantic, and agent trajectories through Habitat.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `3D Mesh` · `RGB-D` · `Semantic Labels` · `Agent Pose`
  [Homepage](https://aihabitat.org/datasets/hm3d/) · [Paper](https://arxiv.org/abs/2109.08238) · [Code](https://github.com/facebookresearch/habitat-sim) · Access: Application required

- **Habitat-Matterport 3D (HM3D)** · 2021
  A high-quality collection of real indoor 3D scenes for embodied navigation and interaction simulation.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `3D Mesh` · `RGB Video` · `Maps`
  [Homepage](https://aihabitat.org/datasets/hm3d/) · [Paper](https://arxiv.org/abs/2109.08238) · Access: Official Habitat download

- **Audi Autonomous Driving Dataset** · 2020
  Audi's open autonomous-driving multisensor dataset with cameras, LiDAR, semantic labels, and vehicle state.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `Semantic Labels` · `GPS / IMU`
  [Paper](https://arxiv.org/abs/2004.06320) · Access: Official download portal

- **HOPE Object Pose Dataset** · 2020
  An RGB-D dataset for 6D pose estimation of household objects in cluttered scenes.
  `Robotics / Embodied AI` · `RGB-D` · `3D Mesh` · `Camera Pose`
  [Paper](https://arxiv.org/abs/2003.09111) · Access: Official project page and code

- **KITTI-360** · 2020
  A multimodal 3D dataset for long-range urban driving with panoramic images, LiDAR, trajectories, and scene annotations.
  `Autonomous Driving` · `Urban / 3D Scene` · `LiDAR` · `RGB Video` · `3D Boxes` · `Maps` · `GPS / IMU`
  [Homepage](https://www.cvlibs.net/datasets/kitti-360/) · [Paper](https://arxiv.org/abs/2012.06268) · Access: Official benchmark download

- **PandaSet** · 2020
  A multi-sensor autonomous-driving dataset with cameras, LiDAR, GPS/IMU, and 3D annotations across urban traffic scenes.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `GPS / IMU` · `3D Boxes` · `Maps`
  [Paper](https://arxiv.org/abs/2102.02684) · [Code](https://github.com/scaleapi/pandaset-devkit) · Access: Open download

- **BLVD** · 2019
  A large-scale 5D semantic autonomous-driving benchmark combining video, 3D objects, trajectories, maps, and time for dynamic traffic-scene modeling.
  `Autonomous Driving` · `Urban / 3D Scene` · `RGB Video` · `3D Boxes` · `Trajectories` · `Maps` · `Semantic Labels`
  [Paper](https://arxiv.org/abs/1903.06405) · [Code](https://github.com/VCCIV/BLVD) · Access: Official repository available

- **Lyft Level 5 Dataset** · 2019
  A multimodal autonomous-driving dataset with LiDAR, cameras, maps, and trajectory annotations.
  `Autonomous Driving` · `LiDAR` · `RGB Video` · `Maps` · `Trajectories` · `GPS / IMU`
  [Paper](https://arxiv.org/abs/2006.14480) · Access: Official download portal

- **nuScenes** · 2019
  A multi-sensor autonomous-driving dataset covering urban roads in Boston and Singapore, with synchronized cameras, LiDAR, radar, localization, and 3D annotations for spatiotemporal modeling.
  `Autonomous Driving` · `RGB Video` · `LiDAR` · `RADAR` · `IMU / GPS` · `3D Boxes`
  [Homepage](https://www.nuscenes.org/) · [Paper](https://arxiv.org/abs/1903.11027) · [Code](https://github.com/nutonomy/nuscenes-devkit) · Access: Registration required

- **Oxford Radar RobotCar Dataset** · 2019
  A long-term repeated radar, LiDAR, and camera driving dataset for robust localization and dynamic-environment modeling.
  `Autonomous Driving` · `RADAR` · `LiDAR` · `RGB Video` · `GPS / IMU`
  [Homepage](https://oxford-robotics-institute.github.io/radar-robotcar-dataset/) · [Paper](https://arxiv.org/abs/1909.01384) · Access: Official download

- **Replica** · 2019
  A set of high-quality reconstructed indoor scenes with textured meshes, semantics, and photorealistic assets for embodied navigation and neural scene representations.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `3D Mesh` · `Semantic Labels` · `Camera Pose`
  [Paper](https://arxiv.org/abs/1906.05797) · [Code](https://github.com/facebookresearch/Replica-Dataset) · Access: Open download / agreement required

- **SoundSpaces** · 2019
  A 3D audio-visual navigation environment and dataset combining spatial audio, visual observations, actions, and position state for embodied agents.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `RGB Video` · `Audio` · `Action` · `Simulation State` · `Maps`
  [Paper](https://arxiv.org/abs/1912.11474) · [Code](https://github.com/facebookresearch/sound-spaces) · Access: Official project access; registration may be required

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

- **DDD17** · 2017
  An event-camera driving dataset for end-to-end driving research, recording asynchronous visual events and driving-state signals on real roads.
  `Autonomous Driving` · `Event Camera` · `GPS / IMU` · `Action` · `Trajectories`
  [Paper](https://arxiv.org/abs/1711.01458) · Access: Paper entry; data access requires verification

- **Matterport3D** · 2017
  A building-scale RGB-D panorama dataset for indoor scene understanding and embodied navigation, with meshes, camera poses, semantics, and regions.
  `Urban / 3D Scene` · `Robotics / Embodied AI` · `RGB-D` · `3D Mesh` · `Camera Pose` · `Semantic Labels`
  [Homepage](https://niessner.github.io/Matterport/) · [Paper](https://arxiv.org/abs/1709.06158) · [Code](https://github.com/niessner/Matterport) · Access: Application / agreement required

- **MPI-INF-3DHP** · 2017
  An indoor/outdoor 3D human-pose video dataset with multiview and green-screen synthetic sequences.
  `Egocentric / Human` · `RGB Video` · `Agent Pose` · `Camera Pose`
  [Homepage](https://vcai.mpi-inf.mpg.de/3dhp-dataset/) · [Paper](https://arxiv.org/abs/1611.09813) · Access: Official project page

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

- **YCB-Video** · 2016
  Video sequences of 21 YCB objects with frame-level 6D pose annotations for robotic vision and manipulation.
  `Robotics / Embodied AI` · `RGB-D` · `3D Mesh` · `Camera Pose`
  [Homepage](https://rse-lab.cs.washington.edu/projects/posecnn/) · [Paper](https://arxiv.org/abs/1711.00199) · Access: Official download available

- **KITTI** · 2012
  A foundational autonomous-driving dataset with stereo cameras, LiDAR, GPS/IMU, and established benchmarks for depth, scene flow, odometry, and 3D perception.
  `Autonomous Driving` · `Stereo RGB` · `LiDAR` · `GPS / IMU` · `3D Boxes`
  [Homepage](https://www.cvlibs.net/datasets/kitti/) · [Paper](https://www.cvlibs.net/publications/Geiger2013IJRR.pdf) · [Code](https://github.com/utiasSTARS/pykitti) · Access: Open download

<a id="physical-causal-reasoning"></a>

### Physical & Causal Reasoning (15)

- **PokeFlex** · 2024
  A real-world pilot dataset for deformable-object manipulation, capturing complete 360-degree 3D mesh deformations together with robot-applied forces and torques during poking.
  `Robotics / Embodied AI` · `Physics / Science` · `3D Mesh` · `Action` · `Robot State` · `Multi-view RGB Video`
  [Homepage](https://pokeflex-dataset.github.io/) · [Paper](https://arxiv.org/abs/2409.17124) · [Code](https://github.com/pokeflex-dataset/reconstruction) · Access: Official project page and reconstruction code available

- **Physion** · 2021
  A synthetic intuitive-physics dataset covering collisions, support, containment, and deformation, designed to test whether models can predict object contact and dynamics.
  `Physics / Science` · `Synthetic Video` · `Depth` · `Segmentation` · `Object State`
  [Homepage](https://physion-benchmark.github.io/) · [Paper](https://arxiv.org/abs/2106.08261) · [Code](https://github.com/cogtoolslab/physics-benchmarking-neurips2021) · Access: Open download

- **Physion** · 2021
  A physics-simulation video and question-answer dataset for visual physical reasoning.
  `Physics / Science` · `Games / Virtual Environments` · `RGB Video` · `QA` · `Simulation State`
  [Paper](https://arxiv.org/abs/2106.08261) · Access: Official benchmark code and data

- **CATER** · 2020
  A synthetic video dataset with compositional object motions and precise metadata, emphasizing spatiotemporal relations, occlusion, and long-term object tracking.
  `Physics / Science` · `Synthetic Video` · `Object State` · `Action Labels` · `3D Metadata`
  [Homepage](https://rohitgirdhar.github.io/CATER/) · [Paper](https://arxiv.org/abs/1910.04744) · [Code](https://github.com/rohitgirdhar/CATER) · Access: Open download

- **CausalWorld** · 2020
  An intervention-rich robot manipulation simulator for causal structure and generalization research.
  `Robotics / Embodied AI` · `Physics / Science` · `RGB Video` · `Action` · `Simulation State` · `Object State`
  [Homepage](https://sites.google.com/view/causal-world) · [Paper](https://arxiv.org/abs/2010.04296) · [Code](https://github.com/rr-learning/CausalWorld) · Access: Official environment

- **EGAD!** · 2020
  A procedurally generated robotic grasping dataset with over 2,000 objects spanning geometric complexity and grasp difficulty, plus 49 reproducible 3D-printable evaluation objects.
  `Robotics / Embodied AI` · `Physics / Science` · `3D Mesh` · `Object Metadata`
  [Homepage](https://dougsm.github.io/egad/) · [Paper](https://arxiv.org/abs/2003.01314) · [Code](https://github.com/dougsm/egad) · Access: Dataset download and generation code available from the official project

- **GraspNet-1Billion** · 2020
  A large 6D grasping benchmark with RGB-D cluttered scenes, object models, and billion-scale grasp annotations.
  `Robotics / Embodied AI` · `RGB-D` · `3D Mesh` · `Action Labels`
  [Homepage](https://graspnet.net/) · [Paper](https://arxiv.org/abs/1912.13470) · [Code](https://github.com/graspnet/graspnet-baseline) · Access: Official benchmark download

- **ContactDB** · 2019
  A dataset of human hand-object contact regions and force directions for tactile and visual interaction modeling.
  `Robotics / Embodied AI` · `Physics / Science` · `3D Mesh` · `Object State` · `Agent Pose`
  [Homepage](https://contactdb.cc.gatech.edu/) · [Paper](https://arxiv.org/abs/1904.03796) · Access: Official project page

- **PHYRE** · 2019
  A 2D physical reasoning benchmark where agents place objects to achieve goals across generated task templates, testing intervention, trial efficiency, and generalization.
  `Physics / Science` · `Games / Virtual Environments` · `Simulation State` · `Action` · `Synthetic Video`
  [Homepage](https://phyre.ai/) · [Paper](https://arxiv.org/abs/1908.05656) · [Code](https://github.com/facebookresearch/phyre) · Access: Open generation toolkit

- **BlockPuzzle** · 2018
  A MuJoCo and OpenAI Gym task framework for physical reasoning, using sparse-reward block puzzles to study rule learning, curriculum training, and transfer across tasks.
  `Robotics / Embodied AI` · `Physics / Science` · `Simulation State` · `Action` · `Reward` · `Object State`
  [Paper](https://arxiv.org/abs/1812.00091) · Access: Paper entry; environment access unverified

- **IntPhys** · 2018
  A synthetic visual-physics benchmark contrasting possible and impossible scenes to test object permanence, occlusion, shape, and support reasoning.
  `Physics / Science` · `Synthetic Video` · `Depth` · `Segmentation` · `Scene Metadata`
  [Homepage](https://intphys.cognitive-ml.fr/) · [Paper](https://arxiv.org/abs/1803.07616) · [Code](https://github.com/rronan/IntPhys) · Access: Open download

- **ShapeStacks** · 2018
  A procedurally generated dataset and toolkit of stacked shapes for reasoning about stability, support relations, and 3D physical structure from images.
  `Physics / Science` · `Synthetic Video` · `3D State` · `Object Metadata` · `Simulation State`
  [Paper](https://arxiv.org/abs/1804.08018) · [Code](https://github.com/ogroth/shapestacks) · Access: Open generation toolkit

- **MIT Planar Pushing Dataset** · 2016
  A high-fidelity planar pushing dataset recording actions and object motion across shapes, contacts, pushing directions, and friction conditions.
  `Robotics / Embodied AI` · `Physics / Science` · `Action` · `Object State` · `Trajectory` · `Robot State`
  [Paper](https://arxiv.org/abs/1604.04038) · [Code](https://github.com/mcubelab/pdproc) · Access: Official processing repository available

- **Physical Prediction Dataset** · 2016
  A synthetic dataset of collisions and motion sequences for video physical prediction.
  `Physics / Science` · `RGB Video` · `Simulation State`
  [Paper](https://arxiv.org/abs/1608.04239) · Access: Paper entry only; data access unverified

- **Physics 101** · 2016
  A real-video dataset of objects moving on inclined surfaces with material, mass, angle, and motion information for estimating physical properties and dynamics.
  `Physics / Science` · `RGB Video` · `Object Metadata` · `Trajectory`
  [Homepage](https://phys101.csail.mit.edu/) · [Paper](https://arxiv.org/abs/1511.07439) · Access: Open project access

<a id="world-model-evaluation-diagnostics"></a>

### World Model Evaluation & Diagnostics (11)

- **AeroVerse** · 2024
  A UAV embodied-world-model benchmark suite describing real and simulated pretraining data, five instruction-tuning datasets, and evaluation across perception, reasoning, navigation, planning, and action.
  `Robotics / Embodied AI` · `Urban / 3D Scene` · `RGB Video` · `Text` · `Agent Pose` · `Action` · `QA`
  [Paper](https://arxiv.org/abs/2408.15511) · Access: Paper entry only; dataset release and access status unverified

- **MMWorld** · 2024
  A human-annotated and synthetic benchmark for multidisciplinary, multifaceted world understanding in video, including explanation, counterfactual reasoning, and future prediction.
  `Physics / Science` · `Egocentric / Human` · `RGB Video` · `QA` · `Text`
  [Homepage](https://mmworld-bench.github.io/) · [Paper](https://arxiv.org/abs/2406.08407) · [Code](https://github.com/UCSB-AI/MMWorld) · Access: Official benchmark repository and project page available

- **Perception Test** · 2023
  A real-video benchmark for multimodal perception, memory, physics, and abstraction.
  `Egocentric / Human` · `Physics / Science` · `RGB Video` · `Audio` · `QA`
  [Homepage](https://github.com/deepmind/perception_test) · [Paper](https://arxiv.org/abs/2305.13786) · Access: Official benchmark

- **SceneReplica** · 2023
  A standardized benchmark for replicating real-world robot pick-and-place experiments, with YCB scenes, RGB-D metadata, grasp data, and sim-to-real setup tools.
  `Robotics / Embodied AI` · `RGB-D` · `3D Metadata` · `Object State` · `Action`
  [Homepage](https://irvlutd.github.io/SceneReplica/) · [Paper](https://arxiv.org/abs/2306.15620) · [Code](https://github.com/IRVLUTD/SceneReplica) · Access: Official repository links scene, grasp, and model files

- **SHIFT** · 2022
  A synthetic driving dataset for discrete and continuous domain shifts across weather, time, and traffic.
  `Autonomous Driving` · `RGB Video` · `Depth` · `Optical Flow` · `3D Boxes` · `Segmentation`
  [Homepage](https://www.vis.xyz/shift/) · [Paper](https://arxiv.org/abs/2206.08367) · [Code](https://github.com/SysCV/shift-dev) · Access: Official dataset and code

- **TAP-Vid** · 2022
  A benchmark for tracking arbitrary points through real, motion-capture, and synthetic videos.
  `Egocentric / Human` · `Physics / Science` · `RGB Video` · `Trajectory` · `Occlusion Labels`
  [Homepage](https://deepmind-tapir.github.io/) · [Paper](https://arxiv.org/abs/2211.03726) · [Code](https://github.com/google-deepmind/tapnet) · Access: Official benchmark code and data

- **VIMA-Bench** · 2022
  A procedurally generated robot-manipulation benchmark driven by multimodal prompts.
  `Robotics / Embodied AI` · `RGB-D` · `Action` · `Language` · `Object Metadata`
  [Homepage](https://vimalabs.github.io/) · [Paper](https://arxiv.org/abs/2210.03094) · [Code](https://github.com/vimalabs/VIMA) · Access: Official benchmark code

- **CLEVRER** · 2020
  A synthetic benchmark for video-based physical and causal reasoning. Collision scenarios test descriptive, explanatory, predictive, and counterfactual reasoning with structured annotations.
  `Physics / Science` · `Synthetic Video` · `Object Metadata` · `Trajectory` · `Logic Program` · `QA`
  [Homepage](https://clevrer.csail.mit.edu/) · [Paper](https://arxiv.org/abs/1910.01442) · Access: Open download

- **BOP Benchmark** · 2018
  A unified 6D object-pose benchmark integrating multiple industrial and household-object datasets.
  `Robotics / Embodied AI` · `RGB-D` · `3D Mesh` · `Camera Pose`
  [Homepage](https://bop.felk.cvut.cz/) · [Paper](https://arxiv.org/abs/1808.08319) · Access: Official benchmark portal

- **Moving Symbols** · 2018
  A parameterized synthetic dataset designed to evaluate representations learned by video-prediction models through controlled symbol motion and compositional variation.
  `Physics / Science` · `Synthetic Video` · `Object State` · `Trajectory`
  [Paper](https://arxiv.org/abs/1802.08936) · [Code](https://github.com/rszeto/moving-symbols) · Access: Official code and generation repository

- **UCF-Crime** · 2018
  A long-form surveillance video dataset of anomalous events.
  `Egocentric / Human` · `RGB Video` · `Action Labels`
  [Homepage](https://www.crcv.ucf.edu/projects/real-world/) · [Paper](https://arxiv.org/abs/1801.04264) · Access: Official project page

<!-- DATASET_CATALOG_END -->

## Contributing and corrections

Please use GitHub Issues for all contributions and corrections. You can suggest a new dataset, report inaccurate metadata or broken links, question a classification, or share an update from an official source. When opening an issue, include the relevant official links, access and license information, primary task, and English and Chinese descriptions when available.

## Acknowledgments

The project was inspired by community-maintained world-model resources, especially [Awesome World Models](https://github.com/knightnemo/Awesome-World-Models), while focusing specifically on dataset discovery, comparison, and selection.
