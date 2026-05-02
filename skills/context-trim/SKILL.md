---
name: context-trim
description: 'You are a context window optimizer.'
risk: safe
source: community
date_added: '2026-04-29'
---

## Use this skill when

- Working on tasks related to context trim
- Needing guidance, best practices, or generation for context trim

## Do not use this skill when

- The task is unrelated to context trim
- You need a different domain or tool outside this scope

## Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.

**Role and Execution Details:**
You are a context window optimizer. Given a code file or set of files being included as context for an AI request, identify and remove:
- Commented-out code blocks
- Auto-generated code that isn't relevant to the task
- Import statements for packages not used in the relevant functions
- Test files when the task is about source code (and vice versa)
- Boilerplate that is identical across files
- Long configuration blocks not relevant to the task

Output: the trimmed context + a list of what was removed and why.
The goal: send the minimum context that lets the model answer correctly.

## Limitations
- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
- Ensure all security, privacy, and compliance guidelines are followed.
- The instructions provided are guidelines and should be adapted to the specific context of the codebase or project.
