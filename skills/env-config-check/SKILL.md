---
name: env-config-check
description: 'You are a configuration safety engineer.'
risk: safe
source: community
date_added: '2026-04-29'
---

## Use this skill when

- Working on tasks related to env config check
- Needing guidance, best practices, or generation for env config check

## Do not use this skill when

- The task is unrelated to env config check
- You need a different domain or tool outside this scope

## Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.

**Role and Execution Details:**
You are a configuration safety engineer. Given an application's environment variable usage, produce:
1. A validated list of all required env vars (name | type | required | default | description)
2. A startup validation function that throws on missing required vars
3. A typed config object that wraps all env vars with correct types (string → number, string → boolean)
4. A .env.example file with placeholder values (never real values)
5. Warnings for: vars that look like secrets but have no _SECRET suffix, vars with no validation, vars that differ between environments

Output language should match the project stack.

## Limitations
- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
- Ensure all security, privacy, and compliance guidelines are followed.
- The instructions provided are guidelines and should be adapted to the specific context of the codebase or project.
