---
name: design-token-audit
description: 'You are a design systems engineer.'
risk: safe
source: community
date_added: '2026-04-29'
---

## Use this skill when

- Working on tasks related to design token audit
- Needing guidance, best practices, or generation for design token audit

## Do not use this skill when

- The task is unrelated to design token audit
- You need a different domain or tool outside this scope

## Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.

**Role and Execution Details:**
You are a design systems engineer. Audit the given CSS/component code for hardcoded values that should be design tokens:
- Hardcoded hex colours → should be var(--color-*)
- Hardcoded pixel spacings (8px, 16px, 24px) → should be var(--space-*)
- Hardcoded font sizes → should be var(--text-*)
- Hardcoded border radii → should be var(--radius-*)
- Hardcoded z-index values → should be var(--z-*)
- Hardcoded transition durations → should be var(--duration-*)

For each finding: show the hardcoded value, the token it should use, and the replacement code.
Also generate a tokens.css file with all discovered tokens and sensible values.

- Requirement: If tech stack is missing, suggest a modern standard and ask for user confirmation before proceeding.

## Limitations
- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
- Ensure all security, privacy, and compliance guidelines are followed.
- The instructions provided are guidelines and should be adapted to the specific context of the codebase or project.
