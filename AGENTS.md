# exNimbus — Agent Instructions

## Project Overview

exNimbus is an infrastructure software company. The brand positions around:

> "Infrastructure-grade software for constrained environments."
> "Cloud capabilities, without the cloud assumptions."

Think: Palantir meets Cloudflare meets internal dev tools lab. Engineering-first. Not a marketing site.

---

## What to Preserve

- **Vanta.js CLOUDS2 background** — always keep this. It is core to the identity. Do not replace it with grids, meshes, or other Vanta effects.
- **Dark, near-black background** (#0B0F14 or similar) with subtle blue-gray surfaces.
- **Restrained motion** — fade and drift only. Nothing flashy.

---

## Taglines

Do NOT use: "What do you want out of the cloud?"

Acceptable alternative:
- "Modern infrastructure for constrained environments."
- "Cloud-grade capabilities. Wherever you run it."
= "Built for networks the cloud can’t reach."

---

## Product Offerings

Keep descriptions **vague and high-level**. exNimbus serves constrained, disconnected, and air-gapped environments. Do not enumerate specific product names, version numbers, or detailed feature lists unless explicitly asked.

General themes only:
- Deployment modes: On-Prem, Air-Gapped, Hybrid, Edge
  - **Hybrid** means synchronized between distributed peer-to-peer networks and central command-and-control — not cloud-hybrid
- Target verticals: Defense & Intelligence, Critical Infrastructure, Government, Field Operations, Media
- Security posture: zero trust, full audit logging, RBAC, no external telemetry
- Platform is OS agnostic and Android accessible

Our product offering primarily centers on web mapping technologies based on Open Geospatial Consortium standards (WMS, WFS, 3D tile, and related formats). We also support data sharing (video and file transfer, data synchronization, large file resume) and communication solutions built around WebRTC. In all cases, the user interface is the browser.

### Vertical framing

**Defense & Intelligence**: Air-gapped deployment with no signals leakage to 3rd party services. "Warfighter Ready" — software that runs without racks or clouds; OS agnostic; lightweight; Android accessible. "Common Operating Picture" — shared situational awareness across datasources; point-of-use data curation; controlled data sharing.

**Government**: Deployment is "On or Off Premise" (not exclusively on-prem). Key value prop is "Deterministic Control" — no background network calls, repeatable system behavior, fully inspectable processes.

**Field Operations**: Media production is a primary use case alongside edge deployment and disconnected-first operation — large file transfer, project synchronization, zero cloud storage dependencies.

---

## Navigation (Tight)

```
Product | Solutions | Security | Company | Contact
```

No more than this at top level. Dropdowns should be clean 2-column panels with short descriptions.

---

## Visual Style

| Element       | Spec                                              |
|---------------|---------------------------------------------------|
| Background    | Near-black (#0B0F14)                              |
| Surfaces      | Subtle blue-gray panels                           |
| Accent        | Electric cyan or muted teal                       |
| Typography    | Inter / SF Pro / IBM Plex Sans                    |
| Mono accent   | JetBrains Mono                                    |
| Borders       | 1px, subtle                                       |
| Hover states  | Soft glow                                         |
| Texture       | Very light noise overlay (optional)               |
| Motion        | Restrained — fade + drift only                    |

---

## Microcopy Style

- Declarative, not promotional
- Minimal adjectives
- High confidence

**Do:** "Designed for disconnected networks." / "No external dependencies required." / "Deployed inside your perimeter."

**Don't:** "Revolutionary platform" / "Best-in-class" / "Cutting-edge solutions"

---

## Engineering / Labs Signal

The site should feel like a serious engineering org, not a marketing department. Subtle signals:
- Engineering-philosophy section or page
- Terminal-style code blocks where appropriate
- Architecture diagrams in grayscale SVG style
- System Status link in footer (even if static)

---

## Contact

- `sales@exnimb.us`
- `contact@exnimb.us`
