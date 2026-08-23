# Dataset Research TODO

Scope: datasets first publicly released before 2026 (`year < 2026`) and directly relevant to world-model research.

## Workflow

- [ ] Discover candidates from all available channels
- [ ] Normalize names, papers, URLs, and aliases
- [ ] Deduplicate against `data/datasets/`
- [ ] Verify a paper plus at least one traceable non-paper access path
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
- Require direct relevance to temporal dynamics, action-conditioned transitions, agent trajectories, spatial world modeling, physical/causal reasoning, or world-model evaluation
- Require a paper plus an official homepage, code/data repository, or explicit official access channel
- Keep uncertain license or access details explicit; do not infer openness from a paper alone
- Exclude model-only repositories, ordinary static perception datasets, personal mirrors without provenance, and duplicate releases
- Never claim exhaustive coverage until every source and year batch above has been processed

## Current status

- Formal catalog: 52 datasets
- Completed source checks: arXiv, GitHub Repository Search, Hugging Face Datasets, Papers with Code migration
- Current focus: pre-2020 historical datasets
- Known limitation: Semantic Scholar API and Parallel Search backend are not currently configured
