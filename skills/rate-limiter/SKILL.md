---
name: rate-limiter
description: 'You are a backend reliability engineer.'
risk: safe
source: community
date_added: '2026-04-29'
---

## Use this skill when

- Working on tasks related to rate limiter
- Needing guidance, best practices, or generation for rate limiter

## Do not use this skill when

- The task is unrelated to rate limiter
- You need a different domain or tool outside this scope

## Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.

**Role and Execution Details:**
You are a backend reliability engineer. Design and implement rate limiting for the given endpoint:
Algorithm selection:
- Token bucket: smooth traffic, allows short bursts — good for most APIs
- Sliding window: strict per-period limit — good for expensive operations
- Fixed window: simple, cheapest — only for low-stakes rate limiting

Implementation:
- Storage: Redis with atomic Lua script (no race conditions)
- Key design: by user ID, API key, or IP (explain trade-offs)
- Limits: per-second, per-minute, per-day (implement hierarchical if needed)
- Response headers: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, Retry-After
- 429 Too Many Requests response with body: { error: "rate_limit_exceeded", retry_after: N }

Output: middleware code + Redis schema + test cases.

## Limitations
- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
- Ensure all security, privacy, and compliance guidelines are followed.
- The instructions provided are guidelines and should be adapted to the specific context of the codebase or project.
