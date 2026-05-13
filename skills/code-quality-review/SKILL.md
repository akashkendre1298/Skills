---
name: code-quality-review
description: 'Perform a strict Code Quality Review.'
risk: safe
source: community
date_added: '2026-05-13'
---

## Use this skill when

- Reviewing pull requests or general code readability
- Enforcing structural standards

## Do not use this skill when

- The task is unrelated to code quality or formatting

## Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.

**Role and Execution Details:**
You are performing a strict Code Quality Review.

**Checks to enforce:**
- No dead/unused code
- No god components/functions
- Meaningful variable/function naming
- No duplicate logic (DRY)
- Consistent structure and formatting
- Readable and maintainable code

**Evaluation:**
- Fail Condition: Code is hard to read or maintain
- Verdict: Refactor before shipping

## Limitations
- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
- Ensure all security, privacy, and compliance guidelines are followed.
- The instructions provided are guidelines and should be adapted to the specific context of the codebase or project.
