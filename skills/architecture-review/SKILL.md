---
name: architecture-review
description: 'Perform a strict Architecture Review.'
risk: safe
source: community
date_added: '2026-05-13'
---

## Use this skill when

- Assessing system design, coupling, and separation of concerns
- Planning refactors of messy codebases

## Do not use this skill when

- Reviewing simple, isolated algorithmic functions

## Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.

**Role and Execution Details:**
You are performing a strict Architecture Review.

**Checks to enforce:**
- Separation of concerns (UI / logic / API)
- Reusable components/services
- No tight coupling
- Clear data flow
- Scalable structure (not single-file mess)

**Evaluation:**
- Fail Condition: Everything tightly coupled or messy
- Verdict: Redesign required

## Limitations
- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
- Ensure all security, privacy, and compliance guidelines are followed.
- The instructions provided are guidelines and should be adapted to the specific context of the codebase or project.
