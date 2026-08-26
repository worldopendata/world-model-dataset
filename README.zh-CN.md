# WorldModel Data Atlas

[English](./README.md) | [简体中文](./README.zh-CN.md)

_一个以任务为核心、重视证据的世界模型开放数据集目录。_

[![在线目录](https://img.shields.io/badge/浏览-在线目录-2563eb)](https://worldopendata.github.io/world-model-dataset/)
[![数据集](https://img.shields.io/badge/数据集-118-16a34a)](#数据集目录)
[![一级任务](https://img.shields.io/badge/一级任务-6-7c3aed)](#分类体系)

[![website](https://github.com/worldopendata/world-model-dataset/blob/main/images/cover.jpg)](https://worldopendata.github.io/world-model-dataset)

[浏览网站](https://worldopendata.github.io/world-model-dataset/) · [查看数据集](#数据集目录) · [参与贡献](#贡献与修正)

---

## 项目简介

WorldModel Data Atlas 希望帮助研究者回答一个实际问题：

> 我应该使用哪个数据集来训练或评测自己关心的世界模型能力？

与按论文时间堆叠链接的列表不同，本目录按照数据集主要支持的世界模型能力进行组织，并通过领域、模态、结构、来源、访问方式和许可信息提供补充背景，避免同一数据集在多个章节重复出现。

GitHub README 是便于浏览、搜索和社区协作的数据目录；[交互式网站](https://worldopendata.github.io/world-model-dataset/)进一步提供搜索、筛选、中英文切换和详细比较。

## 项目特点

- **以任务为核心** — 从希望训练或评测的能力出发查找数据
- **面向科研的元数据** — 比较模态、规模、结构、来源、访问方式和许可条件
- **中英文支持** — 使用英文或中文 README，并可在网站中切换语言
- **经过整理的资源链接** — 提供官方主页、论文和代码仓库入口
- **重视证据的说明** — 同时指出数据集的价值和重要限制
- **可复现的维护方式** — 使用同一份数据生成网站和两个 README 目录

本项目是经过整理的研究资源，而不是数据集排行榜。网站中的详细适用建议比单一综合评分更有参考价值。

## 目录概览

| 数据集 | 一级任务 | 研究领域 | 数据模态 |
| ---: | ---: | ---: | ---: |
| 118 | 6 | 6 | 44 |

## 分类体系

每个数据集只能有一个一级任务，其他用途和跨维度属性通过标签表达。

| 维度 | 回答的问题 | 示例 |
| --- | --- | --- |
| **一级任务** | 主要训练或评测什么能力？ | 未来预测、动作条件动力学、决策 |
| **领域** | 数据来自什么类型的世界？ | 机器人、自动驾驶、游戏、物理 |
| **模态** | 数据提供哪些信号？ | 视频、动作、机器人状态、激光雷达、语言 |
| **结构** | 样本如何组织？ | 时序序列、轨迹、交互回合 |
| **来源** | 数据如何产生？ | 真实世界、仿真、遥操作、合成生成 |

六类一级任务包括：

1. **预测与生成式动力学** — 未来观测或状态预测、视频预测和长时生成
2. **动作条件动力学** — 学习世界如何响应智能体的动作
3. **决策与智能体轨迹** — 规划、控制、模仿学习、离线强化学习和智能体行为
4. **空间与时空世界建模** — 三维/四维重建、占据预测、场景流和动态空间表征
5. **物理与因果推理** — 物理属性、相互作用、干预和反事实推理
6. **世界模型评测与诊断** — 主要用于衡量模型能力和分析失效模式的数据集

判定原则是：如果只能保留一种用途，数据集对世界模型研究最独特、最不可替代的用途就是它的一级任务。

## 数据集目录

数据集按照一级任务分组，各组内按年份倒排。README 展示便于发现和快速判断的信息；网站进一步提供规模、机构、许可说明、次级任务、数据结构、来源和编辑评价。

<!-- DATASET_CATALOG_START -->

[预测与生成式动力学 (19)](#predictive-generative-dynamics) · [动作条件动力学 (15)](#action-conditioned-dynamics) · [决策与智能体轨迹 (33)](#decision-making-agent-trajectories) · [空间与时空世界建模 (32)](#spatial-spatiotemporal-world-modeling) · [物理与因果推理 (13)](#physical-causal-reasoning) · [世界模型评测与诊断 (6)](#world-model-evaluation-diagnostics)

<a id="predictive-generative-dynamics"></a>

### 预测与生成式动力学（19）

- **Ego4D** · 2022
  由 Meta AI 联合全球高校采集的大规模第一人称真实生活视频数据集，其短期物体交互预判与长期动作预测任务，为人类行为、手物交互和具身未来预测提供了重要基准。
  `第一人称 / 人类活动` · `RGB 视频` · `音频` · `三维网格` · `视线` · `惯性测量单元`
  [主页](https://ego4d-data.org/) · [论文](https://arxiv.org/abs/2110.07058) · [代码](https://github.com/facebookresearch/Ego4d) · 访问方式：需申请

- **EPIC-KITCHENS-100** · 2022
  大规模第一人称厨房活动数据集，提供连续视频、动作分段、名词与动词标注及多项预测任务，适合研究人类手物交互和下一动作预测。
  `第一人称 / 人类活动` · `RGB 视频` · `音频` · `动作标签` · `语言`
  [主页](https://epic-kitchens.github.io/2021) · [论文](https://arxiv.org/abs/2006.13256) · [代码](https://github.com/epic-kitchens/epic-kitchens-100-annotations) · 访问方式：需申请并同意协议

- **BDD100K** · 2020
  覆盖多城市、天气与时段的大规模驾驶视频数据集，提供目标检测、车道线、可行驶区域、跟踪等多任务标注，适合研究视觉动态表示和复杂道路分布泛化。
  `自动驾驶` · `RGB 视频` · `二维框` · `分割标注` · `车道线`
  [主页](https://bdd-data.berkeley.edu/) · [论文](https://arxiv.org/abs/1805.04687) · [代码](https://github.com/bdd100k/bdd100k) · 访问方式：需注册

- **AMASS** · 2019
  统一多个动作捕捉数据集的四维人体运动数据库，将不同参数化转换为一致的 SMPL 身体表示，支持长时人体运动预测、生成和交互建模。
  `第一人称 / 人类活动` · `三维状态` · `轨迹` · `智能体位姿`
  [主页](https://amass.is.tue.mpg.de/) · [论文](https://arxiv.org/abs/1904.03278) · 访问方式：官方项目访问；可能需要注册

- **Argoverse 1** · 2019
  面向三维跟踪与运动预测的自动驾驶数据集，结合车辆轨迹、传感器日志和高清地图，为地图条件未来预测建立了重要基准。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `地图` · `轨迹` · `三维框`
  [主页](https://www.argoverse.org/av1.html) · [论文](https://arxiv.org/abs/1911.02620) · [代码](https://github.com/argoverse/argoverse-api) · 访问方式：开放下载

- **D²-City** · 2019
  覆盖多种天气、道路和交通状况的大规模行车视频数据集，提供连续驾驶片段和场景标注，适合研究城市交通时序建模与分布泛化。
  `自动驾驶` · `城市 / 三维场景` · `RGB 视频` · `语义标签` · `轨迹`
  [论文](https://arxiv.org/abs/1904.01975) · 访问方式：论文入口；官方访问方式需核验

- **INTERACTION Dataset** · 2019
  聚焦路口、环岛和汇入等高交互驾驶场景的轨迹数据集，包含多国道路中的车辆与行人运动，适合多智能体预测和交互建模。
  `自动驾驶` · `轨迹` · `地图` · `智能体位姿`
  [论文](https://arxiv.org/abs/1910.03088) · [代码](https://github.com/interaction-dataset/interaction-dataset) · 访问方式：开放下载

- **Kinetics-700** · 2019
  大规模人类动作视频分类数据集，覆盖 700 类日常和体育动作。
  `第一人称 / 人类活动` · `RGB 视频` · `动作标签`
  [论文](https://arxiv.org/abs/1907.06987) · 访问方式：官方标注和下载脚本

- **3DPW** · 2018
  真实环境中采集的三维人体姿态与运动视频数据集，包含 SMPL 参数和相机信息。
  `第一人称 / 人类活动` · `RGB 视频` · `智能体位姿` · `相机位姿`
  [主页](https://virtualhumans.mpi-inf.mpg.de/3DPW/) · [论文](https://arxiv.org/abs/1810.04558) · 访问方式：官方下载

- **Charades-Ego** · 2018
  将同一室内活动的第一人称和第三人称视频配对，提供多标签动作和时间区间标注，用于跨视角行为理解与未来状态表示。
  `第一人称 / 人类活动` · `多视角 RGB 视频` · `动作标签`
  [主页](https://prior.allenai.org/projects/charades-ego) · [论文](https://arxiv.org/abs/1804.09626) · 访问方式：开放获取，具体取决于协议要求

- **EPIC-KITCHENS-55** · 2018
  EPIC-KITCHENS 的首个大规模版本，记录参与者在自家厨房中的连续第一人称活动，包含动作分段、动词、名词和叙述标注。
  `第一人称 / 人类活动` · `RGB 视频` · `音频` · `动作标签` · `语言`
  [主页](https://epic-kitchens.github.io/2018) · [论文](https://arxiv.org/abs/1804.02748) · [代码](https://github.com/epic-kitchens/epic-kitchens-55-annotations) · 访问方式：需申请并同意协议

- **Something-Something V2** · 2018
  由人类执行日常物体交互构成的大规模短视频数据集，类别强调推动、放置、遮挡等细粒度时间变化，是学习动作结果与时序因果线索的常用资源。
  `第一人称 / 人类活动` · `RGB 视频` · `动作标签` · `文本模板`
  [论文](https://arxiv.org/abs/1706.04261) · 访问方式：需注册

- **YouTube-VOS** · 2018
  大规模视频目标分割数据集，提供跨帧目标掩码和长时跟踪场景。
  `第一人称 / 人类活动` · `RGB 视频` · `分割标注` · `物体元数据`
  [主页](https://youtube-vos.org/) · [论文](https://arxiv.org/abs/1809.03327) · 访问方式：官方挑战赛网站

- **DAVIS** · 2016
  高质量视频目标分割与跟踪数据集，提供密集逐帧像素标注。
  `第一人称 / 人类活动` · `RGB 视频` · `分割标注`
  [主页](https://davischallenge.org/) · [论文](https://arxiv.org/abs/1604.00675) · 访问方式：官方数据网站

- **Moving MNIST** · 2015
  将 MNIST 数字在画布中按速度移动并反弹生成的经典视频预测基准，可按需生成确定或随机轨迹，长期用于验证时序表征、外推和不确定未来建模。
  `物理 / 科学` · `合成视频` · `物体状态` · `轨迹`
  [主页](https://www.tensorflow.org/datasets/catalog/moving_mnist) · [论文](https://arxiv.org/abs/1502.04681) · [代码](https://github.com/tensorflow/datasets) · 访问方式：开放生成工具

- **Human3.6M** · 2014
  面向人体姿态与运动建模的大规模多视角数据集，提供同步视频、三维关节、相机参数和动作类别，是人类未来姿态预测的重要历史基准。
  `第一人称 / 人类活动` · `多视角 RGB 视频` · `三维状态` · `动作标签` · `相机位姿`
  [主页](http://vision.imar.ro/human3.6m/description.php) · [论文](https://ieeexplore.ieee.org/document/6682899) · 访问方式：需注册并同意协议

- **UCF101** · 2012
  包含 101 类人类动作的公开视频数据集，提供动作类别和时序片段。
  `第一人称 / 人类活动` · `RGB 视频` · `动作标签`
  [主页](https://www.crcv.ucf.edu/data/UCF101.php) · [论文](https://arxiv.org/abs/1212.0402) · 访问方式：官方数据页

- **HMDB51** · 2011
  从电影和公开视频整理的 51 类人类动作视频数据集。
  `第一人称 / 人类活动` · `RGB 视频` · `动作标签`
  [主页](https://serre-lab.clps.brown.edu/resource/hmdb-a-large-human-motion-database/) · [论文](https://www.di.ens.fr/~laptev/hmdb51.html) · 访问方式：官方项目页

- **KTH Human Actions** · 2004
  最早被广泛用于视频预测的真实人物动作数据之一，包含固定背景及尺度变化下的六类连续动作，为长期预测和人体运动动态提供轻量基准。
  `第一人称 / 人类活动` · `RGB 视频` · `动作标签`
  [主页](https://www.csc.kth.se/cvap/actions/) · 访问方式：开放下载

<a id="action-conditioned-dynamics"></a>

### 动作条件动力学（15）

- **DrivingDojo** · 2024
  专为交互式驾驶世界模型构建的视频数据集，覆盖完整驾驶操作、多智能体交互和开放世界驾驶知识，并提供动作指令跟随评测。
  `自动驾驶` · `RGB 视频` · `动作` · `语言` · `场景元数据`
  [论文](https://arxiv.org/abs/2410.10738) · [代码](https://github.com/Robertwyq/Drivingdojo) · 访问方式：提供论文和官方项目仓库；数据访问条款待核验

- **RoboCasa** · 2024
  面向家庭厨房机器人学习的大规模仿真环境和任务套件，提供多样化场景、物体、语言任务及可生成的视觉动作轨迹。
  `机器人 / 具身智能` · `RGB 视频` · `深度` · `动作` · `机器人状态` · `语言`
  [主页](https://robocasa.ai/) · [论文](https://arxiv.org/abs/2406.02523) · [代码](https://github.com/robocasa/robocasa) · 访问方式：开放生成工具

- **ARMBench** · 2023
  在亚马逊仓库机器人拣放流程中采集的大规模物体中心基准，覆盖操作前、转运中和放置后的图像、视频与元数据，并提供分割、识别和缺陷检测标注。
  `机器人 / 具身智能` · `RGB 视频` · `分割标注` · `物体元数据` · `动作标签`
  [主页](http://armbench.com) · [论文](https://arxiv.org/abs/2303.16382) · [代码](https://github.com/amzn/armbench) · 访问方式：提供官方数据网站和加载代码

- **RH20T** · 2023
  真实机器人双臂操作数据集，包含多视角 RGB-D、力觉和机器人状态。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `机器人状态`
  [主页](https://rh20t.github.io/) · [论文](https://arxiv.org/abs/2307.00770) · [代码](https://github.com/rh20t/rh20t_api) · 访问方式：官方项目和下载入口

- **H2O** · 2022
  第一人称手-物交互数据集，提供双手和物体的三维姿态。
  `第一人称 / 人类活动` · `RGB 视频` · `深度` · `Hand Pose` · `物体状态`
  [主页](https://h2o-release.github.io/) · [论文](https://arxiv.org/abs/2206.13809) · 访问方式：官方项目页

- **HOI4D** · 2022
  四维人-物交互视频数据集，包含手部、物体和相机运动标注。
  `第一人称 / 人类活动` · `机器人 / 具身智能` · `RGB-D` · `动作标签` · `物体状态` · `智能体位姿`
  [主页](https://hoi4d.github.io/) · [论文](https://arxiv.org/abs/2203.01577) · 访问方式：官方项目和数据

- **ManiSkill** · 2022
  面向机器人操作学习的高效物理仿真基准和可生成轨迹环境。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB-D` · `动作` · `仿真状态` · `物体状态`
  [主页](https://maniskill.ai/) · [论文](https://arxiv.org/abs/2202.04057) · [代码](https://github.com/haosulab/ManiSkill) · 访问方式：官方仿真器和基准

- **MineDojo** · 2022
  围绕 Minecraft 开放世界构建的大规模多模态知识与交互平台，结合玩家视频、文本知识、社区讨论及可实时交互的仿真环境，适合长期探索和开放域智能体研究。
  `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `音频` · `文本` · `游戏状态`
  [主页](https://minedojo.org/) · [论文](https://arxiv.org/abs/2206.01356) · [代码](https://github.com/MineDojo/MineDojo) · 访问方式：开放获取，具体取决于数据来源

- **RT-1 Data** · 2022
  真实机器人多任务语言条件操作轨迹数据，用于训练 Robotics Transformer 策略。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `语言` · `机器人状态`
  [论文](https://arxiv.org/abs/2212.06817) · [代码](https://github.com/google-research/robotics_transformer) · 访问方式：论文和项目入口；访问可能受限

- **DexYCB** · 2021
  手部与 YCB 物体交互的 RGB-D 视频数据集，包含三维手部姿态和物体姿态。
  `第一人称 / 人类活动` · `机器人 / 具身智能` · `RGB-D` · `三维网格` · `智能体位姿` · `物体状态`
  [主页](https://dex-ycb.github.io/) · [论文](https://arxiv.org/abs/2104.04631) · [代码](https://github.com/NVlabs/dex-ycb-toolkit) · 访问方式：官方下载

- **InterHand2.6M** · 2020
  大规模双手三维姿态数据集，包含真实和合成的手部交互序列。
  `第一人称 / 人类活动` · `机器人 / 具身智能` · `RGB 视频` · `智能体位姿` · `三维网格`
  [主页](https://mks.ue.tsinghua.edu.cn/InterHand2.6M/) · [论文](https://arxiv.org/abs/2008.09309) · 访问方式：官方项目页

- **RoboNet** · 2020
  汇集多所实验室机器人交互视频的跨平台数据集，通过不同机械臂、视角、物体和实验设置提供视觉动力学训练信号，重点考察视频预测与控制的跨机器人泛化。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://www.robonet.wiki/) · [论文](https://arxiv.org/abs/1910.11215) · [代码](https://github.com/SudeepDasari/RoboNet) · 访问方式：开放下载

- **robosuite Benchmark** · 2020
  模块化机器人操作仿真框架，提供可生成的多任务轨迹、视觉观测和物理状态。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB-D` · `动作` · `仿真状态` · `机器人状态`
  [主页](https://robosuite.ai/) · [论文](https://arxiv.org/abs/2009.08993) · [代码](https://github.com/ARISE-Initiative/robosuite) · 访问方式：官方仿真器和数据

- **OmniPush** · 2019
  真实机器人推动动力学数据集，记录不同物体、桌面环境和推动动作下的 RGB-D 视频及状态变化，用于学习可迁移的视觉动力学。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `物体状态` · `轨迹`
  [论文](https://arxiv.org/abs/1910.00618) · [代码](https://github.com/MIT-Omnipush/video-prediction) · 访问方式：开放项目访问

- **BAIR Robot Pushing** · 2016
  经典机器人推物视频数据集，记录机械臂在桌面环境中执行随机推动动作的连续图像与控制信号，长期作为动作条件视频预测和随机未来建模的基础基准。
  `机器人 / 具身智能` · `RGB 视频` · `动作`
  [主页](https://www.tensorflow.org/datasets/catalog/bair_robot_pushing_small) · [论文](https://arxiv.org/abs/1605.07157) · [代码](https://github.com/tensorflow/datasets) · 访问方式：开放下载

<a id="decision-making-agent-trajectories"></a>

### 决策与智能体轨迹（33）

- **BRMData** · 2024
  面向家庭任务的双臂移动机器人操作数据集，覆盖单臂与双臂、桌面与移动操作、人机互动以及刚性和柔性物体，并提供多视角和深度观测。
  `机器人 / 具身智能` · `多视角 RGB 视频` · `深度` · `动作` · `机器人状态`
  [主页](https://embodiedrobot.github.io/) · [论文](https://arxiv.org/abs/2405.18860) · 访问方式：提供官方项目页和论文；访问条件待核验

- **DROID** · 2024
  大规模真实机器人操作数据集，覆盖多地点、多操作者和多种日常场景，提供同步视觉、动作、语言与机器人状态，适合研究真实世界中的通用操作策略和动作条件世界模型。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `语言`
  [主页](https://droid-dataset.github.io/) · [论文](https://arxiv.org/abs/2403.12945) · [代码](https://github.com/droid-dataset/droid) · 访问方式：开放下载

- **PARTNR** · 2024
  面向家庭场景人机协作规划与推理的大规模具身基准，通过仿真闭环生成并验证具有空间、时间和异构智能体能力约束的自然语言任务。
  `机器人 / 具身智能` · `语言` · `动作` · `仿真状态` · `物体状态` · `轨迹`
  [论文](https://arxiv.org/abs/2411.00081) · [代码](https://github.com/facebookresearch/partnr-planner) · 访问方式：提供官方基准规划器和任务资源

- **RoboMIND** · 2024
  统一采集平台上的大规模多本体机器人操作数据集，包含成功与失败遥操作轨迹、多视角观测、机器人状态、语言任务描述和对应数字孪生环境。
  `机器人 / 具身智能` · `多视角 RGB 视频` · `动作` · `机器人状态` · `语言` · `深度`
  [主页](https://x-humanoid-robomind.github.io/) · [论文](https://arxiv.org/abs/2412.13877) · [代码](https://github.com/x-humanoid-robomind/x-humanoid-robomind.github.io) · 访问方式：官方项目提供数据和工具入口

- **BridgeData V2** · 2023
  大规模多任务真实机器人操作数据集，覆盖多种厨房和桌面场景。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `语言`
  [主页](https://rail-berkeley.github.io/bridgedata/) · [论文](https://arxiv.org/abs/2305.08990) · 访问方式：官方项目和下载

- **LIBERO** · 2023
  面向终身学习和语言条件机器人操作的基准，包含多任务示范轨迹、视觉观测、动作和任务描述，用于研究跨任务知识迁移。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `语言`
  [主页](https://libero-project.github.io/) · [论文](https://arxiv.org/abs/2306.14877) · [代码](https://github.com/Lifelong-Robot-Learning/LIBERO) · 访问方式：开放生成工具

- **MimicGen** · 2023
  通过在仿真环境中重放和组合少量人类示范，自动生成多样化机器人操作轨迹的数据生成框架，支持模仿学习和世界模型训练。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `语言`
  [主页](https://mimicgen.github.io/) · [论文](https://arxiv.org/abs/2310.17596) · [代码](https://github.com/NVlabs/mimicgen) · 访问方式：开放生成工具

- **Mini-BEHAVIOR** · 2023
  用于具身智能长时决策的程序化三维网格世界基准，实现日常家务任务、对象状态和交互动作，并支持生成大量任务变体及收集人类演示。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `仿真状态` · `物体状态` · `轨迹`
  [论文](https://arxiv.org/abs/2310.01824) · [代码](https://github.com/StanfordVL/mini_behavior) · 访问方式：提供官方环境代码和演示收集工具

- **Open X-Embodiment** · 2023
  由 Google DeepMind 与全球 30 余家研究机构联合构建的跨机器人真实交互数据集合，统一汇集多种机器人形态、任务与操作轨迹，是研究跨实体泛化和通用具身世界模型的重要基础。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `语言`
  [主页](https://robotics-transformer-x.github.io/) · [论文](https://arxiv.org/abs/2310.08864) · [代码](https://github.com/google-deepmind/open_x_embodiment) · 访问方式：开放获取，具体取决于组成数据集

- **UMI** · 2023
  通用移动操作接口与数据集，记录手持相机、末端动作和跨机器人操作轨迹。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://umi-gripper.github.io/) · [论文](https://arxiv.org/abs/2402.10329) · [代码](https://github.com/umi-gripper/umi) · 访问方式：开源项目和论文

- **Assembly101** · 2022
  多视角第一人称与第三人称装配动作视频数据集。
  `第一人称 / 人类活动` · `RGB 视频` · `动作标签` · `Hand Pose`
  [主页](https://assembly101.github.io/) · [论文](https://arxiv.org/abs/2206.01063) · 访问方式：官方基准

- **BridgeData** · 2022
  跨场景机器人操作演示数据集，记录多样桌面任务的视觉、动作和状态。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://rail-berkeley.github.io/bridgedata/) · [论文](https://arxiv.org/abs/2203.16897) · 访问方式：论文和项目入口

- **CALVIN** · 2022
  在可控桌面环境中构建的长时程语言条件机器人基准，提供连续交互轨迹和组合任务序列，重点评估智能体能否依据语言完成多个连续操作。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `机器人状态` · `语言`
  [主页](https://calvin.cs.uni-freiburg.de/) · [论文](https://arxiv.org/abs/2112.03227) · [代码](https://github.com/mees/calvin) · 访问方式：开放下载

- **Ego4D v2** · 2022
  大规模第一人称生活视频数据集，提供手部、物体、动作和自然语言时间标注。
  `第一人称 / 人类活动` · `RGB 视频` · `语言` · `动作标签` · `物体元数据`
  [主页](https://ego4d-data.org/) · [论文](https://arxiv.org/abs/2110.07058) · 访问方式：官方挑战赛门户

- **ProcTHOR** · 2022
  用于具身智能训练与评测的程序化交互环境框架，可生成任意规模、多样且可定制的虚拟室内场景，官方样本包含 1 万套房屋。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `仿真状态` · `场景元数据`
  [论文](https://arxiv.org/abs/2206.06994) · [代码](https://github.com/allenai/procthor) · 访问方式：提供官方生成器和 ProcTHOR-10K 样本

- **nuPlan** · 2021
  面向自动驾驶规划的真实世界数据集与基准，提供多传感器日志、地图、轨迹和规划评测工具，支持闭环驾驶策略研究。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `地图` · `轨迹` · `GPS / 惯性测量单元`
  [主页](https://www.nuscenes.org/nuplan) · [论文](https://arxiv.org/abs/2106.11810) · [代码](https://github.com/motional/nuplan-devkit) · 访问方式：需要注册

- **robomimic Datasets** · 2021
  面向模仿学习的机器人操作演示数据集与基准，包含多种任务、示范来源和视觉状态。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `机器人状态`
  [主页](https://robomimic.github.io/) · [论文](https://arxiv.org/abs/2108.03298) · [代码](https://github.com/ARISE-Initiative/robomimic) · 访问方式：官方基准和下载

- **ThreeDWorld Transport Challenge** · 2021
  基于 ThreeDWorld 物理仿真的视觉任务与运动规划基准，要求双臂智能体在住宅中寻找、抓取并运输物体，同时利用容器等工具提高效率。
  `机器人 / 具身智能` · `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `仿真状态` · `物体状态`
  [论文](https://arxiv.org/abs/2103.14025) · [代码](https://github.com/chuangg/tdw-transport-challenge-starter-code) · 访问方式：提供官方论文和入门代码

- **Diving48** · 2020
  包含 48 类细粒度跳水动作的视频数据集，强调动作阶段和时序差异。
  `第一人称 / 人类活动` · `RGB 视频` · `动作标签`
  [论文](https://arxiv.org/abs/1903.11204) · 访问方式：官方项目和标注

- **RLBench** · 2020
  基于 CoppeliaSim 的大规模机器人操作学习套件，提供大量可程序化任务、示范轨迹和多视角视觉观测，可用于强化学习、模仿学习以及可控世界模型评测。
  `机器人 / 具身智能` · `RGB-D` · `动作` · `机器人状态` · `语言`
  [主页](https://sites.google.com/view/rlbench) · [论文](https://arxiv.org/abs/1909.12271) · [代码](https://github.com/stepjam/RLBench) · 访问方式：开放生成工具

- **Honda Research Institute Driving Dataset** · 2019
  面向驾驶员行为、场景理解和因果解释的真实道路数据集，结合驾驶视频、车辆状态与人类建议，支持研究驾驶决策和可解释世界状态。
  `自动驾驶` · `RGB 视频` · `动作` · `机器人状态` · `语言`
  [主页](https://usa.honda-ri.com/HAD) · [论文](https://arxiv.org/abs/1811.02307) · 访问方式：官方项目页面；访问方式需核验

- **Meta-World** · 2019
  面向多任务和元强化学习的机器人操作基准，提供统一机械臂、可程序化任务和可生成轨迹，用于测试跨任务动力学与策略泛化。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `奖励`
  [主页](https://meta-world.github.io/) · [论文](https://arxiv.org/abs/1910.10897) · [代码](https://github.com/Farama-Foundation/Metaworld) · 访问方式：开放生成工具

- **MineRL** · 2019
  基于 Minecraft 的人类示范与交互数据集，记录长时视频、键鼠动作和游戏状态，最初用于样本高效强化学习竞赛，也适合开放世界动作模型和长程规划研究。
  `游戏 / 虚拟环境` · `RGB 视频` · `动作` · `游戏状态` · `奖励`
  [主页](https://minerl.io/) · [论文](https://arxiv.org/abs/1907.13440) · [代码](https://github.com/minerllabs/minerl) · 访问方式：开放下载

- **OffWorld Gym** · 2019
  用于真实机器人强化学习的开放物理环境与基准，通过统一接口提供传感器观测、动作、奖励和真实交互回合。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `奖励`
  [论文](https://arxiv.org/abs/1910.08639) · [代码](https://github.com/offworld-projects/offworld-gym) · 访问方式：提供官方代码仓库

- **SocNav1** · 2019
  用于学习和评测社交导航约定的数据集，包含人类在共享空间中的位置、朝向、群组和障碍物关系，支持人机交互轨迹预测。
  `机器人 / 具身智能` · `第一人称 / 人类活动` · `智能体位姿` · `轨迹` · `地图` · `物体状态`
  [论文](https://arxiv.org/abs/1909.02993) · [代码](https://github.com/gnns4hri/SocNav1) · 访问方式：提供官方代码仓库

- **THÖR** · 2019
  面向人机共享室内空间的人类运动数据集，提供高精度位置、头部朝向、视线、社交群组、障碍物地图和移动机器人传感器数据。
  `机器人 / 具身智能` · `第一人称 / 人类活动` · `轨迹` · `视线` · `智能体位姿` · `激光雷达` · `地图`
  [论文](https://arxiv.org/abs/1909.04403) · 访问方式：论文入口；官方访问方式需核验

- **40K Robotic Grasp Demonstrations** · 2018
  包含约四万条自然场景六自由度机器人抓取示范的数据集，记录视觉观测、末端位姿和抓取结果，用于学习从视觉到动作的操作策略。
  `机器人 / 具身智能` · `RGB 视频` · `深度` · `动作` · `机器人状态` · `轨迹`
  [论文](https://arxiv.org/abs/1812.11683) · 访问方式：仅有论文入口；数据访问待核验

- **CoSTAR Block Stacking** · 2018
  面向机器人积木堆叠的示范数据集，包含视觉观测、动作和工作空间约束信息，用于研究从示范中学习可组合的操作技能。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态` · `物体状态`
  [论文](https://arxiv.org/abs/1810.11714) · 访问方式：仅有论文入口；数据访问待核验

- **RoboTurk** · 2018
  通过众包远程操作收集的真实机器人示范数据，展示低成本扩展人类操作轨迹的方式，并提供视觉、动作和机器人状态。
  `机器人 / 具身智能` · `RGB 视频` · `动作` · `机器人状态`
  [主页](https://roboturk.stanford.edu/) · [论文](https://arxiv.org/abs/1811.02790) · 访问方式：开放项目访问

- **TrajNet** · 2018
  面向行人和多智能体轨迹预测的基准，汇集多个真实场景轨迹并统一评测未来位置预测、社会交互和多模态不确定性。
  `第一人称 / 人类活动` · `自动驾驶` · `轨迹` · `智能体位姿` · `地图`
  [论文](https://arxiv.org/abs/1805.07663) · [代码](https://github.com/vita-epfl/trajnetplusplusbaselines) · 访问方式：提供官方基准代码仓库

- **VirtualHome** · 2018
  将家庭活动表示为可执行程序并在三维室内环境中模拟，连接自然语言、动作序列、物体状态和视频，可用于长时任务与因果状态转移研究。
  `游戏 / 虚拟环境` · `机器人 / 具身智能` · `文本` · `动作` · `仿真状态` · `合成视频`
  [主页](http://virtual-home.org/) · [论文](https://arxiv.org/abs/1806.07011) · [代码](https://github.com/xavierpuigf/virtualhome) · 访问方式：开放生成工具

- **PoseTrack** · 2017
  视频中的多人姿态估计与跟踪基准，提供连续人体关键点和轨迹标注。
  `第一人称 / 人类活动` · `RGB 视频` · `智能体位姿` · `动作标签`
  [主页](https://posetrack.net/) · [论文](https://arxiv.org/abs/1611.07727) · 访问方式：官方挑战赛门户

- **NGSIM** · 2006
  美国公路交通管理部门发布的自然驾驶轨迹数据集，记录高速公路和城市道路中车辆的连续位置、速度与车道信息，用于交通行为预测和多智能体建模。
  `自动驾驶` · `轨迹` · `地图` · `智能体位姿`
  [主页](https://ops.fhwa.dot.gov/trafficanalysistools/ngsim.htm) · 访问方式：官方公共数据页面

<a id="spatial-spatiotemporal-world-modeling"></a>

### 空间与时空世界建模（32）

- **Ego-Exo4D** · 2024
  同步采集第一人称与第三人称视角的人类技能数据集，覆盖体育、音乐、烹饪等活动，并提供三维、语言和相机信息，支持跨视角世界状态理解与技能学习。
  `第一人称 / 人类活动` · `多视角 RGB 视频` · `音频` · `语言` · `相机位姿` · `三维标注`
  [主页](https://ego-exo4d-data.org/) · [论文](https://arxiv.org/abs/2311.18259) · [代码](https://github.com/facebookresearch/Ego4d) · 访问方式：需申请

- **Argoverse 2** · 2023
  面向自动驾驶感知、运动预测和地图理解的多任务数据集合，包含传感器序列、丰富高清地图及大量运动场景，强调复杂城市中的长尾行为与轨迹预测。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `地图` · `轨迹` · `三维框`
  [主页](https://www.argoverse.org/av2.html) · [论文](https://arxiv.org/abs/2301.00493) · [代码](https://github.com/argoverse/av2-api) · 访问方式：开放下载

- **EmbodiedScan** · 2023
  面向具身智能整体三维场景理解的多模态第一人称数据集与基准，结合大规模 RGB-D 视图、语言提示、三维框和稠密语义占据标注。
  `机器人 / 具身智能` · `城市 / 三维场景` · `RGB-D` · `语言` · `三维框` · `语义标签` · `相机位姿`
  [论文](https://arxiv.org/abs/2312.16170) · [代码](https://github.com/OpenRobotLab/EmbodiedScan) · 访问方式：提供官方代码、标注和基准资源

- **Objaverse** · 2023
  大规模三维物体资产集合，支持开放世界三维理解与生成。
  `城市 / 三维场景` · `游戏 / 虚拟环境` · `三维网格` · `物体元数据` · `文本`
  [主页](https://objaverse.allenai.org/) · [论文](https://arxiv.org/abs/2212.08051) · [代码](https://github.com/allenai/objaverse) · 访问方式：官方数据工具

- **Robo360** · 2023
  面向三维物理世界建模的全视角机器人操作数据集，以密集多视角记录不同材料和光学性质物体的操作过程，支持动态神经场与多视角策略研究。
  `机器人 / 具身智能` · `物理 / 科学` · `多视角 RGB 视频` · `相机位姿` · `动作` · `物体元数据`
  [主页](https://robo360dataset.github.io/) · [论文](https://arxiv.org/abs/2312.06686) · [代码](https://github.com/robo360dataset/robo360dataset.github.io) · 访问方式：提供官方项目仓库和论文入口；数据条款待核验

- **MOVi** · 2022
  使用 Kubric 生成的多对象视频系列，提供精确实例分割、深度、光流和三维属性，覆盖不同复杂度设置，适合对象发现、跟踪与可解释动态建模。
  `物理 / 科学` · `合成视频` · `深度` · `光流` · `分割标注` · `三维状态`
  [论文](https://arxiv.org/abs/2203.12602) · [代码](https://github.com/google-research/kubric) · 访问方式：开放下载

- **ARKitScenes** · 2021
  室内移动设备 RGB-D 扫描与三维重建数据集。
  `城市 / 三维场景` · `RGB-D` · `三维网格` · `相机位姿`
  [主页](https://github.com/apple/ARKitScenes) · [论文](https://arxiv.org/abs/2111.08853) · 访问方式：官方下载

- **Habitat-Matterport 3D** · 2021
  面向具身导航与室内模拟的高质量三维场景数据，结合 Habitat 平台可生成视觉、深度、语义和智能体轨迹，用于空间记忆、导航规划与交互式世界建模。
  `机器人 / 具身智能` · `城市 / 三维场景` · `三维网格` · `RGB-D` · `语义标签` · `智能体位姿`
  [主页](https://aihabitat.org/datasets/hm3d/) · [论文](https://arxiv.org/abs/2109.08238) · [代码](https://github.com/facebookresearch/habitat-sim) · 访问方式：需申请

- **Habitat-Matterport 3D (HM3D)** · 2021
  高质量真实室内三维场景集合，用于具身导航和交互仿真。
  `机器人 / 具身智能` · `城市 / 三维场景` · `三维网格` · `RGB 视频` · `地图`
  [主页](https://aihabitat.org/datasets/hm3d/) · [论文](https://arxiv.org/abs/2109.08238) · 访问方式：官方 Habitat 下载

- **Audi Autonomous Driving Dataset** · 2020
  奥迪公开的自动驾驶多传感器数据集，包含相机、激光雷达、语义标注和车辆状态。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `语义标签` · `GPS / 惯性测量单元`
  [论文](https://arxiv.org/abs/2004.06320) · 访问方式：官方下载门户

- **HOPE Object Pose Dataset** · 2020
  面向家庭物体六维姿态估计的 RGB-D 数据集，包含杂乱场景和真实物体模型。
  `机器人 / 具身智能` · `RGB-D` · `三维网格` · `相机位姿`
  [主页](https://hope-dataset.github.io/) · [论文](https://arxiv.org/abs/2003.09111) · [代码](https://github.com/swatyam/hope-dataset) · 访问方式：官方项目页和代码

- **KITTI-360** · 2020
  面向长期城市驾驶的多模态三维数据集，提供全景图像、激光雷达、轨迹和三维场景标注。
  `自动驾驶` · `城市 / 三维场景` · `激光雷达` · `RGB 视频` · `三维框` · `地图` · `GPS / 惯性测量单元`
  [主页](https://www.cvlibs.net/datasets/kitti-360/) · [论文](https://arxiv.org/abs/2012.06268) · 访问方式：官方基准下载

- **PandaSet** · 2020
  面向自动驾驶研究的多传感器数据集，提供相机、激光雷达、GPS/IMU 和三维标注，覆盖城市道路中的车辆、行人和交通场景。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `GPS / 惯性测量单元` · `三维框` · `地图`
  [论文](https://arxiv.org/abs/2102.02684) · [代码](https://github.com/scaleapi/pandaset-devkit) · 访问方式：开放下载

- **BLVD** · 2019
  面向自动驾驶的大规模 5D 语义数据集，结合视频、三维目标、轨迹、地图和时间信息，支持动态交通场景理解与未来状态建模。
  `自动驾驶` · `城市 / 三维场景` · `RGB 视频` · `三维框` · `轨迹` · `地图` · `语义标签`
  [论文](https://arxiv.org/abs/1903.06405) · [代码](https://github.com/VCCIV/BLVD) · 访问方式：提供官方代码仓库

- **Lyft Level 5 Dataset** · 2019
  自动驾驶多传感器数据集，包含激光雷达、相机、地图和轨迹标注。
  `自动驾驶` · `激光雷达` · `RGB 视频` · `地图` · `轨迹` · `GPS / 惯性测量单元`
  [论文](https://arxiv.org/abs/2006.14480) · 访问方式：官方下载门户

- **nuScenes** · 2019
  覆盖波士顿与新加坡城市道路的多传感器自动驾驶数据集，提供同步环视相机、LiDAR、RADAR、定位和三维标注，适合多视角时空建模、占用预测与驾驶世界模型研究。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `毫米波雷达` · `惯性测量单元 / GPS` · `三维框`
  [主页](https://www.nuscenes.org/) · [论文](https://arxiv.org/abs/1903.11027) · [代码](https://github.com/nutonomy/nuscenes-devkit) · 访问方式：需注册

- **Oxford Radar RobotCar Dataset** · 2019
  长期重复采集的雷达、激光雷达和相机驾驶数据集，用于鲁棒定位与动态环境建模。
  `自动驾驶` · `毫米波雷达` · `激光雷达` · `RGB 视频` · `GPS / 惯性测量单元`
  [主页](https://oxford-robotics-institute.github.io/radar-robotcar-dataset/) · [论文](https://arxiv.org/abs/1909.01384) · 访问方式：官方下载

- **Replica** · 2019
  由高质量真实室内重建组成的三维场景数据集，提供纹理网格、语义和高保真渲染资产，常用于具身导航与神经场景表示。
  `机器人 / 具身智能` · `城市 / 三维场景` · `三维网格` · `语义标签` · `相机位姿`
  [论文](https://arxiv.org/abs/1906.05797) · [代码](https://github.com/facebookresearch/Replica-Dataset) · 访问方式：开放下载，需同意协议

- **SoundSpaces** · 2019
  面向三维环境音频-视觉导航的仿真数据集和环境，将空间音频、视觉观测、动作和位置状态结合起来，支持具身智能体的多模态世界建模。
  `机器人 / 具身智能` · `城市 / 三维场景` · `RGB 视频` · `音频` · `动作` · `仿真状态` · `地图`
  [论文](https://arxiv.org/abs/1912.11474) · [代码](https://github.com/facebookresearch/sound-spaces) · 访问方式：官方项目访问；可能需要注册

- **Waymo Open Dataset** · 2019
  高质量自动驾驶多传感器数据集，覆盖摄像头、LiDAR、地图、三维检测和运动预测场景，能够支持动态占用、未来轨迹以及闭环驾驶世界表示研究。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `地图` · `三维框` · `轨迹`
  [主页](https://waymo.com/open/) · [论文](https://arxiv.org/abs/1912.04838) · [代码](https://github.com/waymo-research/waymo-open-dataset) · 访问方式：需注册

- **ApolloScape** · 2018
  面向自动驾驶的多任务数据集，提供街景视频、立体图像、深度、三维车辆和高精地图等信息，支持城市时空场景建模。
  `自动驾驶` · `城市 / 三维场景` · `RGB 视频` · `深度` · `地图` · `三维框` · `语义标签`
  [主页](https://apolloscape.auto/) · [论文](https://arxiv.org/abs/1803.06184) · [代码](https://github.com/ApolloScapeAuto/dataset-api) · 访问方式：需要注册

- **Gibson Environment Dataset** · 2018
  由真实空间扫描构建的可导航三维环境集合，配合 Gibson 模拟器生成 RGB、深度、语义和智能体轨迹，面向具身感知与导航。
  `机器人 / 具身智能` · `城市 / 三维场景` · `三维网格` · `RGB-D` · `智能体位姿` · `语义标签`
  [主页](http://gibsonenv.stanford.edu/database/) · [论文](https://arxiv.org/abs/1808.10654) · [代码](https://github.com/StanfordVL/GibsonEnv) · 访问方式：需申请并同意协议

- **DDD17** · 2017
  面向端到端驾驶研究的事件相机数据集，记录真实道路中的异步视觉事件、驾驶状态和控制相关信息，用于动态场景理解与驾驶行为建模。
  `自动驾驶` · `Event Camera` · `GPS / 惯性测量单元` · `动作` · `轨迹`
  [论文](https://arxiv.org/abs/1711.01458) · 访问方式：论文入口；数据访问需核验

- **Matterport3D** · 2017
  面向室内场景理解和具身导航的建筑级 RGB-D 全景数据集，提供精细网格、相机位姿、语义及区域标注。
  `城市 / 三维场景` · `机器人 / 具身智能` · `RGB-D` · `三维网格` · `相机位姿` · `语义标签`
  [主页](https://niessner.github.io/Matterport/) · [论文](https://arxiv.org/abs/1709.06158) · [代码](https://github.com/niessner/Matterport) · 访问方式：需申请并同意协议

- **MPI-INF-3DHP** · 2017
  室内外三维人体姿态视频数据集，包含多视角和绿幕合成序列。
  `第一人称 / 人类活动` · `RGB 视频` · `智能体位姿` · `相机位姿`
  [主页](https://vcai.mpi-inf.mpg.de/3dhp-dataset/) · [论文](https://arxiv.org/abs/1611.09813) · 访问方式：官方项目页

- **ScanNet** · 2017
  由手持 RGB-D 设备采集的大规模室内扫描序列，提供相机位姿、重建网格、语义和实例标注，是室内三维世界表示与导航的重要数据源。
  `城市 / 三维场景` · `机器人 / 具身智能` · `RGB-D` · `相机位姿` · `三维网格` · `语义标签`
  [主页](http://www.scan-net.org/) · [论文](https://arxiv.org/abs/1702.04405) · [代码](https://github.com/ScanNet/ScanNet) · 访问方式：需同意协议

- **Cityscapes** · 2016
  覆盖欧洲城市街景的驾驶图像与短时序数据集，提供精细像素语义、实例及深度相关信息，广泛用于未来语义预测和城市视觉世界建模。
  `自动驾驶` · `城市 / 三维场景` · `RGB 视频` · `语义标签` · `分割标注` · `深度`
  [主页](https://www.cityscapes-dataset.com/) · [论文](https://openaccess.thecvf.com/content_cvpr_2016/html/Cordts_The_Cityscapes_Dataset_CVPR_2016_paper.html) · [代码](https://github.com/mcordts/cityscapesScripts) · 访问方式：需注册

- **Oxford RobotCar** · 2016
  同一路线跨越一年多次重复采集的自动驾驶数据集，包含相机、激光雷达、雷达和定位信号，特别适合长期环境变化和世界状态鲁棒性研究。
  `自动驾驶` · `RGB 视频` · `激光雷达` · `毫米波雷达` · `GPS / 惯性测量单元`
  [主页](https://robotcar-dataset.robots.ox.ac.uk/) · [论文](https://arxiv.org/abs/1610.08265) · [代码](https://github.com/ori-mrg/robotcar-dataset-sdk) · 访问方式：开放下载

- **SYNTHIA** · 2016
  面向城市场景理解的合成驾驶数据集，通过虚拟城市生成多季节、多天气和多视角图像序列，并提供像素级语义及深度真值。
  `自动驾驶` · `城市 / 三维场景` · `合成视频` · `深度` · `语义标签` · `相机位姿`
  [主页](https://synthia-dataset.net/) · [论文](https://openaccess.thecvf.com/content_cvpr_2016/html/Ros_The_SYNTHIA_Dataset_CVPR_2016_paper.html) · 访问方式：需申请并同意协议

- **Virtual KITTI** · 2016
  与 KITTI 真实序列对应的合成驾驶视频数据，提供深度、光流、实例、语义和相机真值，可用于可控条件下的场景动态及域迁移实验。
  `自动驾驶` · `合成视频` · `深度` · `光流` · `分割标注` · `相机位姿`
  [主页](https://europe.naverlabs.com/research/computer-vision/proxy-virtual-worlds-vkitti-1/) · [论文](https://arxiv.org/abs/1605.06457) · 访问方式：开放下载

- **YCB-Video** · 2016
  包含 21 个 YCB 物体视频序列及逐帧六维姿态标注，用于机器人视觉与操作。
  `机器人 / 具身智能` · `RGB-D` · `三维网格` · `相机位姿`
  [主页](https://rse-lab.cs.washington.edu/projects/posecnn/) · [论文](https://arxiv.org/abs/1711.00199) · 访问方式：提供官方下载

- **KITTI** · 2012
  自动驾驶领域最经典的多传感器数据集之一，提供双目相机、LiDAR、GPS/IMU 和多类评测任务，适合建立深度、场景流、里程计与三维动态建模的可比基线。
  `自动驾驶` · `双目 RGB` · `激光雷达` · `GPS / 惯性测量单元` · `三维框`
  [主页](https://www.cvlibs.net/datasets/kitti/) · [论文](https://www.cvlibs.net/publications/Geiger2013IJRR.pdf) · [代码](https://github.com/utiasSTARS/pykitti) · 访问方式：开放下载

<a id="physical-causal-reasoning"></a>

### 物理与因果推理（13）

- **PokeFlex** · 2024
  面向可变形物体机器人操作的真实世界试验数据集，通过机器人戳动采集完整 360 度三维网格形变及对应力和力矩。
  `机器人 / 具身智能` · `物理 / 科学` · `三维网格` · `动作` · `机器人状态` · `多视角 RGB 视频`
  [主页](https://pokeflex-dataset.github.io/) · [论文](https://arxiv.org/abs/2409.17124) · [代码](https://github.com/pokeflex-dataset/reconstruction) · 访问方式：提供官方项目页和重建代码

- **Physion** · 2021
  用于直觉物理学习和评测的合成视频数据集，通过碰撞、支撑、包含和形变等场景测试模型能否预测物体间接触及后续动态。
  `物理 / 科学` · `合成视频` · `深度` · `分割标注` · `物体状态`
  [主页](https://physion-benchmark.github.io/) · [论文](https://arxiv.org/abs/2106.08261) · [代码](https://github.com/cogtoolslab/physics-benchmarking-neurips2021) · 访问方式：开放下载

- **Physion** · 2021
  通过物理仿真视频和问答评测视觉物理推理的数据集。
  `物理 / 科学` · `游戏 / 虚拟环境` · `RGB 视频` · `问答` · `仿真状态`
  [论文](https://arxiv.org/abs/2106.08261) · [代码](https://github.com/cognitive-ai-lab/Physion) · 访问方式：官方基准代码和数据

- **CATER** · 2020
  由可组合物体运动生成的合成视频数据集，强调时空关系、动作组合和被遮挡目标的定位，适合研究对象中心的动态表示及长期状态追踪。
  `物理 / 科学` · `合成视频` · `物体状态` · `动作标签` · `三维元数据`
  [主页](https://rohitgirdhar.github.io/CATER/) · [论文](https://arxiv.org/abs/1910.04744) · [代码](https://github.com/rohitgirdhar/CATER) · 访问方式：开放下载

- **EGAD!** · 2020
  面向机器人抓取训练与可复现评测的程序化物体数据集，包含 2000 余个覆盖不同几何复杂度和抓取难度的生成物体，以及 49 个可三维打印的评测物体。
  `机器人 / 具身智能` · `物理 / 科学` · `三维网格` · `物体元数据`
  [主页](https://dougsm.github.io/egad/) · [论文](https://arxiv.org/abs/2003.01314) · [代码](https://github.com/dougsm/egad) · 访问方式：官方项目提供数据下载和生成代码

- **GraspNet-1Billion** · 2020
  大规模杂乱场景六维抓取基准，提供 RGB-D 场景、物体模型和十亿级抓取标注。
  `机器人 / 具身智能` · `RGB-D` · `三维网格` · `动作标签`
  [主页](https://graspnet.net/) · [论文](https://arxiv.org/abs/1912.13470) · [代码](https://github.com/graspnet/graspnet-baseline) · 访问方式：官方基准下载

- **ContactDB** · 2019
  人手与物体接触区域和力方向数据集，支持触觉与视觉交互建模。
  `机器人 / 具身智能` · `物理 / 科学` · `三维网格` · `物体状态` · `智能体位姿`
  [主页](https://contactdb.cc.gatech.edu/) · [论文](https://arxiv.org/abs/1904.03796) · 访问方式：官方项目页

- **PHYRE** · 2019
  二维物理推理基准，要求智能体通过放置物体完成目标，并在大量模板化关卡中测试跨任务泛化、试错效率和因果干预能力。
  `物理 / 科学` · `游戏 / 虚拟环境` · `仿真状态` · `动作` · `合成视频`
  [主页](https://phyre.ai/) · [论文](https://arxiv.org/abs/1908.05656) · [代码](https://github.com/facebookresearch/phyre) · 访问方式：开放生成工具

- **BlockPuzzle** · 2018
  基于 MuJoCo 和 OpenAI Gym 的物理推理任务框架，通过积木拼图和稀疏奖励环境研究智能体对物理规则的学习、课程训练和跨任务迁移。
  `机器人 / 具身智能` · `物理 / 科学` · `仿真状态` · `动作` · `奖励` · `物体状态`
  [论文](https://arxiv.org/abs/1812.00091) · 访问方式：论文入口；环境访问待核验

- **IntPhys** · 2018
  面向视觉直觉物理评测的合成数据集，通过可能与不可能的场景测试物体恒存、遮挡和支撑关系，避免模型只依赖单帧外观线索。
  `物理 / 科学` · `合成视频` · `深度` · `分割标注` · `场景元数据`
  [主页](https://intphys.cognitive-ml.fr/) · [论文](https://arxiv.org/abs/1803.07616) · [代码](https://github.com/rronan/IntPhys) · 访问方式：开放下载

- **ShapeStacks** · 2018
  通过程序化堆叠不同形状物体生成的合成数据和工具，重点研究稳定性、支撑关系及从图像推断三维物理结构。
  `物理 / 科学` · `合成视频` · `三维状态` · `物体元数据` · `仿真状态`
  [论文](https://arxiv.org/abs/1804.08018) · [代码](https://github.com/ogroth/shapestacks) · 访问方式：开放生成工具

- **MIT Planar Pushing Dataset** · 2016
  高精度平面推动实验数据集，系统记录不同物体、接触位置、推动方向和摩擦条件下的动作与物体运动，用于学习接触动力学。
  `机器人 / 具身智能` · `物理 / 科学` · `动作` · `物体状态` · `轨迹` · `机器人状态`
  [论文](https://arxiv.org/abs/1604.04038) · [代码](https://github.com/mcubelab/pdproc) · 访问方式：提供官方处理代码仓库

- **Physics 101** · 2016
  通过真实视频记录物体在斜面上的运动，并提供材料、质量、角度和运动信息，用于从视觉估计物理属性及预测动力学。
  `物理 / 科学` · `RGB 视频` · `物体元数据` · `轨迹`
  [主页](https://phys101.csail.mit.edu/) · [论文](https://arxiv.org/abs/1511.07439) · 访问方式：开放项目访问

<a id="world-model-evaluation-diagnostics"></a>

### 世界模型评测与诊断（6）

- **AeroVerse** · 2024
  面向无人机具身世界模型的综合基准套件，论文描述了真实与仿真的预训练数据、五类指令微调数据以及覆盖感知、推理、导航、规划和动作的评测。
  `机器人 / 具身智能` · `城市 / 三维场景` · `RGB 视频` · `文本` · `智能体位姿` · `动作` · `问答`
  [论文](https://arxiv.org/abs/2408.15511) · 访问方式：仅有论文入口；数据发布和访问状态待核验

- **MMWorld** · 2024
  用于多学科、多维度视频世界理解评测的人工标注与合成数据集，覆盖解释、反事实思考和未来预测等能力。
  `物理 / 科学` · `第一人称 / 人类活动` · `RGB 视频` · `问答` · `文本`
  [主页](https://mmworld-bench.github.io/) · [论文](https://arxiv.org/abs/2406.08407) · [代码](https://github.com/UCSB-AI/MMWorld) · 访问方式：提供官方基准仓库和项目页

- **SceneReplica** · 2023
  用于复现真实机器人抓取与放置实验的标准化场景基准，提供 YCB 物体场景、RGB-D 元数据、抓取数据和仿真到真实环境的搭建工具。
  `机器人 / 具身智能` · `RGB-D` · `三维元数据` · `物体状态` · `动作`
  [主页](https://irvlutd.github.io/SceneReplica/) · [论文](https://arxiv.org/abs/2306.15620) · [代码](https://github.com/IRVLUTD/SceneReplica) · 访问方式：官方仓库提供场景、抓取和模型文件入口

- **CLEVRER** · 2020
  面向视频物理与因果推理的合成基准，通过碰撞和运动事件考察描述、解释、预测与反事实推理能力，尤其适合诊断模型是否学习到可组合的物理因果机制。
  `物理 / 科学` · `合成视频` · `物体元数据` · `轨迹` · `逻辑程序` · `问答`
  [主页](https://clevrer.csail.mit.edu/) · [论文](https://arxiv.org/abs/1910.01442) · 访问方式：开放下载

- **BOP Benchmark** · 2018
  统一的六维物体姿态估计基准，整合多个工业和日常物体数据集。
  `机器人 / 具身智能` · `RGB-D` · `三维网格` · `相机位姿`
  [主页](https://bop.felk.cvut.cz/) · [论文](https://arxiv.org/abs/1808.08319) · 访问方式：官方基准门户

- **Moving Symbols** · 2018
  专为评估视频预测模型表征能力设计的参数化合成数据集，通过可控的符号运动和组合变化检验模型是否学习到有语义的时序表示。
  `物理 / 科学` · `合成视频` · `物体状态` · `轨迹`
  [论文](https://arxiv.org/abs/1802.08936) · [代码](https://github.com/rszeto/moving-symbols) · 访问方式：官方代码和生成工具仓库

<!-- DATASET_CATALOG_END -->

## 贡献与修正

所有新增建议、资料修正和数据更新都请通过 GitHub Issue 提出。你可以推荐新数据集、报告元数据或链接错误、提出重新分类的建议，并附上相关官方来源。提交 Issue 时，请尽量提供官方链接、访问和许可信息、一级任务，以及中英文简介。

## 致谢

本项目参考了社区维护的世界模型资源，尤其是 [Awesome World Models](https://github.com/knightnemo/Awesome-World-Models)，并将重点放在数据集的发现、比较和选择上。
