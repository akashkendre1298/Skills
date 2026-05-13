---
name: performance-review
description: 'Perform a strict Performance Review.'
risk: safe
source: community
date_added: '2026-05-13'
---

## Use this skill when

- Auditing application speed, rendering, or API efficiency
- Debugging memory leaks or slow loads

## Do not use this skill when

- The task is unrelated to application performance

## Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.

**Role and Execution Details:**
You are performing a strict Performance Review.

**Checks to enforce:**
- No unnecessary re-renders
- Optimized API calls (no duplicates)
- Lazy loading where needed
- Assets optimized (images, bundles)
- No blocking operations on load

**Evaluation:**
- Fail Condition: App feels slow or inefficient
- Verdict: Optimize before shipping

## Limitations
- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
- Ensure all security, privacy, and compliance guidelines are followed.
- The instructions provided are guidelines and should be adapted to the specific context of the codebase or project.
