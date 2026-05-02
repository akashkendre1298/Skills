# 🚀 DevSkill Studio: Professional SDLC Toolkit for AI-Powered Engineering

A globally installable collection of **75+ professional AI skills** designed to turn your AI assistant (Cursor, VS Code Copilot, Claude Code) into a Lead Engineer.

## 🚀 Quick Start

Install globally to access the library from any project:

```bash
npm install -g @akashkendre/devskills
```

*Note: The installer automatically configures your AI agents (Cursor, VS Code, etc.) immediately after installation.*

---

## 🛠️ Global Setup

The library includes an automatic installer that links the prompts to your favorite IDEs. If you ever need to re-run the setup:

```bash
# Link to all supported agents (Cursor, VS Code, Claude, etc.)
devskills install all
```

---

## 🏗️ The Ultimate Production Workflow

To build **production-ready** software from scratch, follow this professional sequence using the built-in skills:

### Phase 1: Product Discovery
1.  `/brainstorm` — Explore feature ideas.
2.  `/prd` — Generate detailed Product Requirements.
3.  `/kpi` — Define measurable success metrics.
4.  `/scope` — Set MVP boundaries.

### Phase 2: Architecture & Design
5.  `/architect` — Design high-level infrastructure.
6.  `/data-model` — Design database schema.
7.  `/api-design` — Design REST/GraphQL endpoints.
8.  `/api-contract` — Generate formal OpenAPI/Proto specs.
9.  `/threat-model` — Identify security risks early.

### Phase 3: Planning & TDD Setup
10. `/breakdown` — Create small, manageable tasks.
11. `/sprint` — Map tasks to a timeline.
12. `/edge-cases` — Identify failure points for each task.
13. `/unit-test` — Write failing tests (The "Red" Phase).

### Phase 4: Implementation (The "Building")
14. **Backend:** `/backend` (Persona) — Write logic to pass tests.
15. **Frontend:** `/frontend` (Persona) — Build UI to pass tests.
16. `/refactor-suggest` — Optimize code while tests remain green.

### Phase 5: Quality & Security
17. `/service-contract` — Verify code matches the design.
18. `/integration-test` — Test full end-to-end flows.
19. `/reviewer` (Persona) — Perform a strict code audit.
20. `/vuln-scan` — Scan for security vulnerabilities.

### Phase 6: Production Readiness
21. `/ci` — Setup deployment pipelines.
22. `/dockerfile` — Containerize the application.
23. `/tracing` — Add observability and monitoring.
24. `/health-check` — Setup uptime and dependency checks.

---

## 📖 Usage

### List all available skills:
```bash
devskills list
```

### Use in your AI Agent:
Simply type the command in your AI chat (e.g. Cursor or VS Code):
> "Use **/prd** to generate a document for a new payment gateway feature."

---

## 👤 Author

**Akash Kendre**
[NPM Profile](https://www.npmjs.com/~akashkendre)

---

## 🤝 Contributing

Contributions are welcome! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

> [!NOTE]
> Direct pushes to the `main` branch are restricted. Please submit a Pull Request for any changes.

## 📄 License

MIT
