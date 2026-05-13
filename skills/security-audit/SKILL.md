---
name: security-audit
description: 'Perform a strict Security Audit.'
risk: safe
source: community
date_added: '2026-05-13'
---

## Use this skill when

- Auditing code for security vulnerabilities
- Verifying production readiness of sensitive code

## Do not use this skill when

- The task is unrelated to security
- Building initial prototypes where security is intentionally deferred

## Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.

**Role and Execution Details:**
You are performing a strict Security Audit.

**Checks to enforce:**
- No hardcoded secrets (API keys, tokens, credentials)
- Proper input validation (frontend + backend)
- XSS protection (no unsafe HTML rendering)
- Injection safety (SQL/NoSQL)
- Auth enforced on backend (not just UI)
- Secure password handling (hashing, salting)
- Basic rate limiting / abuse protection

**Evaluation:**
- Fail Condition: Any one critical issue = FAIL
- Verdict: Do not ship if failed

## Limitations
- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
- Ensure all security, privacy, and compliance guidelines are followed.
- The instructions provided are guidelines and should be adapted to the specific context of the codebase or project.
