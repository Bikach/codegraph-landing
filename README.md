# CodeGraph Landing Page

Landing page and documentation site for **CodeGraph** - an MCP server that gives AI assistants deep code understanding through knowledge graphs.

## About CodeGraph

CodeGraph enhances Claude and other AI assistants with a knowledge graph of your codebase using Neo4j, enabling:

- Intelligent code navigation with fewer LLM calls
- Impact analysis on code changes
- Dependency tracking and relationship mapping

**Performance improvements:**
- 45% fewer LLM calls
- 46% fewer tokens used
- 41% cost reduction
- 51% faster code analysis

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Astro](https://astro.build) | Static site generator |
| [Tailwind CSS](https://tailwindcss.com) | Styling (GitHub Light design system) |
| GitHub Pages | Deployment |

## Project Structure

```
src/
├── pages/
│   ├── index.astro          # Landing page
│   └── docs/                 # Documentation pages
├── components/
│   ├── landing/              # Landing page sections
│   └── docs/                 # Documentation components
├── layouts/
│   ├── Landing.astro         # Landing page layout
│   └── Docs.astro            # Documentation layout
└── styles/
    └── global.css            # Global styles and theme
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions on push to `main`.

**Live site:** https://bikach.github.io/codegraph-landing

## Documentation

The site includes comprehensive documentation covering:

- **Getting Started** - Overview and prerequisites
- **Installation** - Claude Plugin and MCP Standalone setup
- **Commands** - `/codegraph:setup`, `/codegraph:index`, `/codegraph:status`
- **Tools** - 8 graph analysis tools (`search_nodes`, `get_callers`, `get_callees`, `get_neighbors`, etc.)
- **Languages** - Kotlin and Java support (TypeScript coming soon)
- **Benchmark** - Performance metrics

## License

MIT
