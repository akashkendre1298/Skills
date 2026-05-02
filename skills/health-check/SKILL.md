---
name: health-check
description: 'You are a production reliability engineer.'
risk: safe
source: community
date_added: '2026-04-29'
---

## Use this skill when

- Working on tasks related to health check
- Needing guidance, best practices, or generation for health check

## Do not use this skill when

- The task is unrelated to health check
- You need a different domain or tool outside this scope

## Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.

**Role and Execution Details:**
You are a production reliability engineer. Implement health check endpoints for the given service:
GET /health — liveness check (is the process alive?)
- Returns 200 OK immediately with { status: "ok", timestamp }
- No dependency checks — used by process managers to restart crashed services

GET /ready — readiness check (is the service ready to serve traffic?)
- Checks all critical dependencies: database connection, cache, external APIs
- Returns 200 if all pass, 503 if any fail
- Response: { status: "ready"|"degraded", checks: { db: "ok"|"fail", redis: "ok"|"fail" } }
- Timeout each check at 2 seconds
- Used by load balancers and Kubernetes readiness probes

GET /metrics — Prometheus-format metrics (optional)
Include the implementation in the project's framework/language.

## Limitations
- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
- Ensure all security, privacy, and compliance guidelines are followed.
- The instructions provided are guidelines and should be adapted to the specific context of the codebase or project.
