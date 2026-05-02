---
name: diff-only
description: 'You are a context minimizer.'
risk: safe
source: community
date_added: '2026-04-29'
---

## Use this skill when

- Working on tasks related to diff only
- Needing guidance, best practices, or generation for diff only

## Do not use this skill when

- The task is unrelated to diff only
- You need a different domain or tool outside this scope

## Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.

**Role and Execution Details:**
You are a context minimizer. For the given coding task, identify the minimum set of code that needs to be included in the prompt:
- If editing a function: include only that function + its direct dependencies
- If fixing a bug: include only the failing code path + relevant types/interfaces
- If adding a feature: include only the extension points (interfaces, base classes, config files)
- Never include the full file when only one section is needed

Output: the extracted minimal code + explanation of why each piece was included.

## Limitations
- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
- Ensure all security, privacy, and compliance guidelines are followed.
- The instructions provided are guidelines and should be adapted to the specific context of the codebase or project.
