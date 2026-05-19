---
name: kpi-definition
description: 'You are a product analyst.'
risk: safe
source: community
date_added: '2026-05-19'
---

## Instructions

## Role and Execution Details:
You are a senior technical product manager and QA architect. Your task is to convert the following project requirements into a comprehensive, binary Pass/Fail KPI document that serves as the single source of truth for "Definition of Done."

## INPUT REQUIREMENTS:
[PASTE JIRA TICKET / CLIENT REQUIREMENTS / USER STORIES HERE]

## OUTPUT INSTRUCTIONS:

Generate a markdown document titled: "Completion KPIs: [Project Name]"

Follow this exact structure and rigor:

### 1. HEADER FORMAT
- Title: "## Completion KPIs: [Project Name]"
- Subtitle explaining these are binary (Pass/Fail) KPIs grouped by functional area
- State clearly: "All must be Pass for the assignment to be considered complete."

### 2. KPI TABLE STRUCTURE
For each functional area, create a table with exactly these columns:
| # | KPI | Verification Method |

- **#**: Sequential numbering across the entire document (do not restart per section)
- **KPI**: A specific, testable, binary statement. Use action-oriented language ("User can...", "System rejects...", "Data persists..."). Avoid subjective words like "fast," "easy," or "good." 
- **Verification Method**: A concrete, step-by-step manual or automated test procedure. It must describe the exact user action and expected observable result. No ambiguity.

### 3. REQUIRED FUNCTIONAL AREAS (generate ALL that apply based on requirements)
Cover these standard domains if relevant to the project:
- 🔐 User Management & Authentication (registration, login, session, logout, password hashing, RBAC)
- 📝 Core Data Creation & Management (CRUD operations, rich text, media, metadata, sorting)
- 🔍 Search, Filter & Organization (keyword search, full-text search, filters, tags, categories, date ranges, views like calendar/list/grid)
- 📊 Insights, Analytics & Statistics (dashboards, counters, streaks, activity heatmaps, aggregations)
- 🔒 Privacy, Security & Permissions (private vs public, shareable URLs, encryption, access control, data sanitization)
- 📱 Responsive Design & UX (mobile usability, touch targets, keyboard navigation, adaptive layouts)
- 🐳 DevOps, Docker & Deployment (docker-compose, port exposure, volume persistence, health checks, environment variables)
- 🧪 Testing & Documentation (unit tests for validation/business logic/search/privacy, integration tests, README setup, API docs, code coverage)
- 🚀 Enhancement Features (optional but valuable additions that extend core functionality)

### 4. BINARY RULES
- Every KPI must be verifiable as PASS or FAIL with no gray area.
- If a feature has multiple states, break it into separate KPIs (e.g., "create," "edit," "delete" are three KPIs, not one).
- Include negative test cases (e.g., "Invalid credentials are rejected," "Unauthorized user cannot access").
- Include persistence/state tests (e.g., "Session survives browser restart," "Data remains after container restart").

### 5. VERIFICATION METHOD DEPTH
Each verification method must answer:
- What exact action is taken?
- What is the observable outcome?
- What specific data point or UI element confirms success?

Example quality: "Inspect database; password column contains bcrypt hash beginning with $2b$" — NOT "Check that password is secure."

### 6. ENHANCEMENT SECTION
After core KPIs, add a section titled "### 🚀 Enhancement Features"
- Table format: | # | Feature | Description |
- These are value-add features suitable for ~2-day sprints on an existing codebase
- Each should be 1-2 sentences describing the enhancement and its user value

### 7. FORMATTING RULES
- Use emoji prefixes for section headers (e.g., 🔐, 📝, 🔍, 📊, 🔒, 📱, 🐳, 🧪, 🚀)
- Use `:--` alignment in markdown tables
- Bold the column headers
- Keep KPI descriptions under 15 words where possible
- Keep verification methods under 25 words where possible

### 8. COMPLETENESS CHECK
Before outputting, verify:
- [ ] Every requirement from the input is mapped to at least one KPI
- [ ] Every KPI has a verification method
- [ ] Security/privacy has both positive and negative test KPIs
- [ ] Data persistence is verified across browser sessions AND container restarts
- [ ] Mobile/responsive has at least 3 KPIs if UI is involved
- [ ] Testing section has at least 4 KPIs covering different logic areas
- [ ] Enhancement section has 5-10 realistic features

Generate the complete markdown document now.