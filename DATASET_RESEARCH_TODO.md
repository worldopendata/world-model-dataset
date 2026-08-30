# Dataset Research TODO

Scope: a strict catalog of datasets first publicly released before or during 2026 that directly expose world-state evolution, action-conditioned transitions, future observations, or dedicated world-model evaluation protocols.

## Workflow

- [ ] Discover candidates from all available channels
- [ ] Normalize names, papers, URLs, and aliases
- [ ] Deduplicate against `data/datasets/`
- [ ] Verify at least one traceable paper, official homepage, repository, data page, or generation toolkit
- [ ] Classify by one Primary Task and supporting tags
- [ ] Record access, license, scale, and bilingual metadata
- [ ] Exclude weak candidates with a written reason
- [ ] Run catalog build and link audit
- [ ] Update the website and both README catalogs
- [ ] Commit and push each completed batch

## Sources

- [x] arXiv API: dataset, benchmark, video prediction, robotics, driving, physics, 3D/4D queries
- [ ] Semantic Scholar: related-paper and citation expansion
- [x] Hugging Face Datasets: official and high-confidence dataset repositories
- [x] Papers with Code / Hugging Face migration: task and benchmark cross-check
- [x] GitHub Search and Topics: official dataset repositories and download toolkits
- [ ] Awesome World Models and related curated lists
- [ ] Robotics laboratory and simulator project pages
- [ ] Autonomous-driving dataset catalogs and benchmark pages
- [ ] Physics and causal-reasoning benchmark pages

## Year batches

- [ ] 2025
- [ ] 2024
- [ ] 2023
- [ ] 2022
- [ ] 2021
- [ ] 2020
- [ ] 2019
- [ ] 2018
- [ ] 2017
- [ ] 2016 and earlier

## Review rules

- Include datasets, benchmark datasets, and official generation toolkits with an identifiable data path
- Require direct evidence of at least one strict criterion: (1) state/observation transitions over time, (2) actions or controls aligned to those transitions, (3) trajectories usable for world-state prediction, (4) counterfactual physical/causal rollouts, or (5) a benchmark explicitly designed to evaluate world models
- Domain datasets such as robotics, autonomous driving, video, 3D, or simulation are not sufficient by themselves; their record must document the strict criterion above
- Exclude ordinary static perception, classification, detection, segmentation, generic VQA, and model-only resources even when they are used by embodied systems
- Require at least one traceable entry point: paper, official homepage, official repository, data page, or generation toolkit
- A paper-only entry may be included, but its access status must remain unverified unless the paper identifies a data channel
- Keep uncertain license or access details explicit; do not infer openness from a paper alone
- Exclude model-only repositories, ordinary static perception datasets, personal mirrors without provenance, and duplicate releases
- Never claim exhaustive coverage until every source and year batch above has been processed

## Current status

- Formal catalog: 52 datasets
- Completed source checks: arXiv, GitHub Repository Search, Hugging Face Datasets, Papers with Code migration
- Current focus: pre-2020 historical datasets
- Known limitation: Semantic Scholar API and Parallel Search backend are not currently configured
