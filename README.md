# WorldModel Data Atlas

_A task-first, evidence-aware catalog of open datasets for world-model research._

[![Live catalog](https://img.shields.io/badge/explore-live_catalog-2563eb)](https://worldopendata.github.io/world-model-dataset/)
[![Datasets](https://img.shields.io/badge/datasets-45-16a34a)](./datasets.json)
[![Primary tasks](https://img.shields.io/badge/primary_tasks-6-7c3aed)](#taxonomy)

---

## Overview

WorldModel Data Atlas helps researchers answer a practical question:

> Which dataset should I use to train or evaluate the world-model capability I care about?

Instead of mixing application domains, data modalities, and research objectives in one flat list, the catalog assigns every dataset one **primary task** and describes it with additional domain, modality, structure, and source tags. Entries include concise bilingual summaries, resource links, access and license notes, and an editorial assessment of their usefulness for world-model research.

**[Explore the interactive catalog](https://worldopendata.github.io/world-model-dataset/)**

## Why this catalog

- **Task-first organization** — browse by the capability a dataset can train or evaluate
- **Research-oriented metadata** — compare modalities, scale, structure, source, access, and licensing
- **Bilingual content** — switch between English and Chinese in the catalog
- **Curated resource links** — entries link only to a homepage, paper, or code repository
- **Evidence-aware notes** — editorial guidance highlights both useful properties and limitations
- **Reproducible maintenance** — canonical records are validated and compiled into the browser catalog

This is a curated research resource, not a ranking. The written assessment on each card is more informative than a single aggregate score.

## Taxonomy

Each dataset has exactly one primary task. Secondary uses and cross-cutting properties are represented as tags, preventing the same dataset from being duplicated across unrelated sections.

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

The classification rule is simple: if only one use could be retained, the dataset's most distinctive world-model use becomes its primary task.

## Inclusion criteria

A dataset is in scope when it is publicly documented and directly supports at least one of the following:

- temporal state or observation modeling
- action-to-environment transition modeling
- agent trajectories for planning or control
- spatial or spatiotemporal world representation
- physical or causal reasoning
- world-model evaluation or diagnostics

General-purpose static classification datasets, model-only repositories, and resources with no identifiable data access path are out of scope. “Open” does not necessarily mean unrestricted: some datasets require registration, an application, or acceptance of non-commercial terms. Always verify the official license before use.

## Dataset records

The canonical records live in [`data/datasets/`](./data/datasets/), one JSON file per dataset. Each record contains:

- name, year, and bilingual summary
- primary and secondary tasks
- domain, modality, structure, and source tags
- scale and participating organizations
- access and license notes
- homepage, paper, and code links when available
- bilingual editorial verdict and world-model suitability note

[`datasets.json`](./datasets.json) is generated for the website and should not be edited by hand.

## Contributing

Dataset suggestions, corrections, and link updates are welcome through GitHub issues or pull requests.

Before adding a dataset:

1. Confirm that it meets the inclusion criteria
2. Check for an existing record with the same dataset or predecessor name
3. Choose exactly one primary task
4. Verify resource links against official sources
5. Record access and license restrictions without assuming that downloadable means unrestricted
6. Provide both English and Chinese content fields

After adding or editing a record, rebuild and validate the catalog:

```bash
npm run check
```

Audit external links separately:

```bash
npm run check:links
```

The link auditor treats explicit HTTP errors as failures. Network timeouts are reported as unverified so that temporary connectivity problems do not automatically remove legitimate resources.

## Local development

The catalog is a dependency-free static site. Build the generated catalog and start any local static server:

```bash
npm run build
python -m http.server 8080
```

Then open `http://localhost:8080`.

The repository also includes a small deployment helper for Linux environments:

```bash
./deploy.sh 18080
```

## Repository structure

```text
.
├── data/datasets/          # Canonical dataset records
├── scripts/
│   ├── build-catalog.mjs   # Validation and catalog generation
│   └── check-links.mjs     # External resource audit
├── app.js                  # Catalog behavior and localization
├── datasets.json           # Generated browser data
├── index.html              # Static site entry point
└── styles.css              # Site presentation
```

## Maintenance principles

- Prefer official project, paper, and code links
- Remove links confirmed to be missing or incorrectly targeted
- Keep uncertain facts explicit instead of filling gaps with guesses
- Preserve one primary task per dataset
- Treat access conditions and licenses as separate concerns
- Review candidates before adding them to the published catalog

Sources may change after verification. If you find stale metadata, a broken link, or a classification that should be reconsidered, please open an issue with the relevant official source.

## Acknowledgments

The project was inspired by community-maintained world-model resources, especially [Awesome World Models](https://github.com/knightnemo/Awesome-World-Models), while focusing specifically on dataset discovery, comparison, and selection.
1
