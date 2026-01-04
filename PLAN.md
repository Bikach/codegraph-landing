# CodeGraph Landing Site - Implementation Plan

## Project Structure

```
codegraph-landing/
├── src/
│   ├── pages/
│   │   ├── index.astro                    # Landing page
│   │   └── docs/
│   │       ├── index.astro                # Redirect to getting-started
│   │       ├── getting-started.astro
│   │       ├── installation.astro
│   │       ├── commands/
│   │       │   ├── setup.astro
│   │       │   ├── index-cmd.astro
│   │       │   └── status.astro
│   │       ├── tools/
│   │       │   ├── search-nodes.astro
│   │       │   ├── get-callees.astro
│   │       │   ├── get-neighbors.astro
│   │       │   ├── get-impact.astro
│   │       │   ├── find-path.astro
│   │       │   └── get-file-symbols.astro
│   │       ├── lsp/
│   │       │   ├── incoming-calls.astro
│   │       │   └── go-to-implementation.astro
│   │       ├── languages/
│   │       │   ├── kotlin.astro
│   │       │   └── java.astro
│   │       └── benchmark.astro
│   ├── components/
│   │   ├── landing/
│   │   │   ├── Hero.astro
│   │   │   ├── Problem.astro
│   │   │   ├── Solution.astro
│   │   │   ├── DualEngine.astro
│   │   │   ├── Features.astro
│   │   │   ├── Benchmark.astro
│   │   │   ├── Languages.astro
│   │   │   ├── QuickStart.astro
│   │   │   ├── FAQ.astro
│   │   │   └── Footer.astro
│   │   └── docs/
│   │       ├── Sidebar.astro
│   │       ├── Screenshot.astro
│   │       ├── CodeBlock.astro
│   │       ├── Callout.astro
│   │       └── PrevNext.astro
│   ├── layouts/
│   │   ├── Landing.astro
│   │   └── Docs.astro
│   └── styles/
│       └── global.css
├── public/
│   ├── screenshots/
│   │   ├── setup/
│   │   ├── index/
│   │   ├── status/
│   │   ├── tools/
│   │   └── lsp/
│   └── images/
│       ├── logo.svg
│       ├── architecture.svg
│       └── dual-engine.svg
└── package.json
```

---

## Tasks

### Phase 1: Foundation
| # | Task | Status | Agent |
|---|------|--------|-------|
| 1.1 | Create layouts (Landing.astro, Docs.astro) | ✅ Completed | a2d1dca, a746ca9 |
| 1.2 | Create global.css with Tailwind base styles | ✅ Completed | a62b173 |
| 1.3 | Create docs components (Sidebar, Screenshot, CodeBlock, Callout, PrevNext) | ✅ Completed | a9bf9ed, a9ea177 |

### Phase 2: Landing Page
| # | Task | Status | Agent |
|---|------|--------|-------|
| 2.1 | Hero section | ✅ Completed | aca3b79 |
| 2.2 | Problem section | ✅ Completed | a09e8da |
| 2.3 | Solution section | ✅ Completed | ac4253e |
| 2.4 | DualEngine section (Graph + LSP) | ✅ Completed | af89a0d |
| 2.5 | Features section | ✅ Completed | a16ef74 |
| 2.6 | Benchmark section | ✅ Completed | ac240bf |
| 2.7 | Languages section | ✅ Completed | a79e495 |
| 2.8 | QuickStart section | ✅ Completed | a747391 |
| 2.9 | FAQ section | ✅ Completed | acc8416 |
| 2.10 | Footer | ✅ Completed | a53f182 |
| 2.11 | Assemble index.astro | ✅ Completed | manual |

### Phase 3: Documentation Pages
| # | Task | Status | Agent |
|---|------|--------|-------|
| 3.1 | Getting Started page | ✅ Completed | ae7d8ed |
| 3.2 | Installation page | ✅ Completed | ae7d8ed |
| 3.3 | Commands: setup, index, status | ✅ Completed | a497810 |
| 3.4 | Tools: search-nodes, get-callees, get-neighbors | ✅ Completed | ae51b0e |
| 3.5 | Tools: get-impact, find-path, get-file-symbols | ✅ Completed | ae51b0e |
| 3.6 | LSP: incoming-calls, go-to-implementation | ✅ Completed | ab8975d |
| 3.7 | Languages: kotlin, java | ✅ Completed | ab8975d |
| 3.8 | Benchmark page | ✅ Completed | af52cc5 |

### Phase 4: Assets & Polish
| # | Task | Status | Agent |
|---|------|--------|-------|
| 4.1 | Create SVG assets (logo, architecture, dual-engine) | ✅ Completed | af52cc5 |
| 4.2 | Add screenshot placeholders | ✅ Completed | manual |
| 4.3 | Mobile responsiveness check | ⏳ Pending | - |
| 4.4 | Final review and fixes | ⏳ Pending | - |

---

## Status Legend

- ⏳ Pending
- 🔄 In Progress
- ✅ Completed
- ❌ Blocked

---

## Benchmark Data (Reference)

**Overall:**
- 45% fewer LLM calls
- 46% fewer tokens
- 41% cost reduction
- 51% faster

**By Scenario:**
| Scenario | With MCP | Without MCP | Savings |
|----------|----------|-------------|---------|
| Find Callers | $0.066 | $0.073 | 9% |
| Find Implementations | $0.043 | $0.070 | 38% |
| Impact Analysis | $0.187 | $0.337 | 44% |
| Dependency Analysis | $0.114 | $0.193 | 41% |
| Call Chain | $0.136 | $0.252 | 46% |
| **Total** | **$0.55** | **$0.92** | **41%** |

---

## Documentation Sidebar Structure

```
Getting Started
Installation

Commands
├── /codegraph:setup
├── /codegraph:index
└── /codegraph:status

MCP Tools
├── search_nodes
├── get_callees
├── get_neighbors
├── get_impact
├── find_path
└── get_file_symbols

LSP Tools
├── incomingCalls
└── goToImplementation

Languages
├── Kotlin
└── Java

Benchmark
```
