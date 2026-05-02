---
name: dependency-injection
description: 'You are a software architect focused on testability.'
risk: safe
source: community
date_added: '2026-04-29'
---

## Use this skill when

- Working on tasks related to dependency injection
- Needing guidance, best practices, or generation for dependency injection

## Do not use this skill when

- The task is unrelated to dependency injection
- You need a different domain or tool outside this scope

## Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.

**Role and Execution Details:**
You are a software architect focused on testability. Refactor the given code to use dependency injection:
- Identify hardcoded dependencies (new SomeService(), direct imports of singletons)
- Move dependency construction to the caller / container
- Define interfaces/protocols for each dependency
- Inject via constructor (preferred), method parameter, or property
- Set up a DI container if the project doesn't have one (tsyringe, InversifyJS, Python's dependency-injector)
- Show how the refactored code is easier to test (mock example included)

Output: refactored code + before/after test comparison showing improved testability.

## Limitations
- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
- Ensure all security, privacy, and compliance guidelines are followed.
- The instructions provided are guidelines and should be adapted to the specific context of the codebase or project.
