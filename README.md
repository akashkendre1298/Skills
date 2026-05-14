#  DevSkill Studio: Professional SDLC Toolkit

A highly curated, industry-standard collection of **25 core engineering skills** and **4 Super Personas** designed to turn your AI assistant (Cursor, VS Code Copilot, Claude Code) into a Lead Engineer.

##  Quick Start

Install globally to access the library from any project:

```bash
npm install -g @akashkendre/devskills
```

*Note: The installer automatically configures your AI agents immediately after installation.*

---

##  The Persona-Driven Workflow

Instead of memorizing dozens of individual commands, DevSkill Studio uses **Super Personas** that automatically enforce strict industry standards behind the scenes.

Simply invoke a persona, and it will apply its specific skill set to your problem:

### 1. Lead Frontend Architect (`/persona-frontend`)
Automatically enforces:
- `responsive-layout`
- `component-design`
- `perf-budget`
- `accessibility-checker` (WCAG 2.1 AA)
- `storybook-gen`

### 2. Lead Backend Architect (`/persona-backend`)
Automatically enforces:
- `api-design` (RESTful/gRPC)
- `async-pattern` (Concurrency & Event Loops)
- `dependency-injection`
- `error-handling`
- `solid-review` (SOLID Principles)

### 3. Lead QA Engineer (`/persona-qa`)
Automatically enforces:
- `unit-test-gen`
- `integration-test`
- `test-coverage-audit`
- `edge-case-finder`

### 4. DevOps/Infra (`/persona-devops`)
Automatically enforces:
- `dockerfile-gen`
- `ci-pipeline`
- `tracing-setup`
- `log-quality`

---

##  Individual Core Skills

If you need surgical precision, you can still call any of the 25 highly-optimized core skills directly (e.g., `/api-design`, `/dockerfile-gen`, `/perf-budget`).

### List all available skills:
```bash
devskills list
```

---

##  Recommended SDLC Workflow (The "Golden Path")

When building an application from scratch or auditing an existing one, follow this sequence of skills to ensure rigorous quality at every step of the Software Development Life Cycle:

### Phase 1: Planning & Architecture
*Before writing code, define the system boundaries and data.*
1. `/persona-pm` / `/prd-generator` - Generate a Product Requirements Document (PRD).
2. `/kpi-definition` - Define success metrics and leading/lagging indicators.
3. `/data-model` - Design the database schema and relationships.
3. `/api-design` - Plan the REST/gRPC endpoints based on the data model.
4. `/architecture-review` - Validate the overall system architecture.

### Phase 2: Implementation (Frontend & Backend)
*Build the features using strict, framework-agnostic standards.*
*   **Backend Path:** Invoke `/persona-backend` (which handles `/async-pattern`, `/dependency-injection`, `/error-handling`).
*   **Frontend Path:** Invoke `/persona-frontend` (which handles `/component-design`, `/responsive-layout`, `/accessibility-checker`).
*   *As needed during coding:* Call `/type-safety` to harden types and `/code-smell` if a file gets too complex.

### Phase 3: Testing & Quality Assurance
*Prove the code works as intended.*
1. `/persona-qa` - Set up the testing strategy.
2. `/unit-test-gen` - Generate edge cases and happy paths for pure functions.
3. `/integration-test` - Verify the API or major components end-to-end.
4. `/test-coverage-audit` - Find what you missed.

### Phase 4: Review & Refactoring
*Clean the codebase before merging.*
1. `/persona-reviewer` or `/pr-review` - Conduct a strict code review on the diff.
2. `/solid-review` - Ensure adherence to SOLID principles.
3. `/naming-audit` & `/css-naming-audit` - Ensure maximum readability.
4. `/lint-fix` - Auto-fix stylistic issues.

### Phase 5: Security & Performance Audits
*Harden the application for production.*
1. `/security-audit` - General vulnerability scan.
2. `/dependency-audit` - Check for risky packages.
3. `/performance-review` / `/perf-budget` - Optimize load times, queries, and bundles.

### Phase 6: DevOps & Deployment
*Ship it reliably.*
1. `/persona-devops` - Set up the infrastructure.
2. `/dockerfile-gen` - Create optimized, multi-stage containers.
3. `/ci-pipeline` - Automate the build, test, and linting processes.
4. `/tracing-setup` & `/log-quality` - Implement observability.

---

##  Contributing
Contributions are welcome! Please submit a Pull Request for any changes.
