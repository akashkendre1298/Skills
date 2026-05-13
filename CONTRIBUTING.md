# Contributing to DevSkill Studio

First off, thank you for considering contributing to DevSkill Studio! It's people like you that make DevSkill Studio such a great tool for the AI engineering community.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct (be kind, be professional).

## How Can I Contribute?

### Reporting Bugs
* Check the existing issues to see if the bug has already been reported.
* If not, create a new issue with a clear title and description.
* Include steps to reproduce the bug and your environment details (OS, Node version, etc.).

### Suggesting Enhancements
* Open an issue to discuss your idea before implementing it.
* Describe the use case and why this enhancement would be beneficial.

### Pull Requests
1. **Fork the repository** to your own GitHub account.
2. **Clone your fork** to your local machine.
3. **Create a new branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes** and ensure they follow the criteria below.
5. **Commit your changes** with a descriptive commit message.
6. **Push to your fork** and **Submit a Pull Request** to the `main` branch.

## 🛡️ Branch Protection Notice

> [!IMPORTANT]
> To maintain the rigor of the DevSkill Studio, **direct pushes to the `main` branch are disabled**. All changes must be submitted via a Pull Request and require code review before merging.

## 🏗️ How to Add a New Skill

Adding a new skill to the toolkit is highly encouraged, but to maintain a premium standard, new skills must pass a strict set of criteria.

### 1. The "No Duplication" Rule
Before creating a new skill, you **must** verify it does not already exist:
* Search the `skills/` directory and read `LIBRARY.md`.
* Check if the objective can be accomplished by an existing skill. For example, do not create an `html-accessibility` skill because `accessibility-checker` already handles it.
* If your skill overlaps significantly with an existing one, propose an enhancement to the existing `SKILL.md` rather than creating a new one.

### 2. Steps to Add a Skill
1. Create a new directory in the `skills/` folder using `kebab-case` (e.g., `my-new-skill`).
2. Create a `SKILL.md` file inside that directory.
3. Copy the standard header format from an existing skill (name, description, etc.).
4. Write the prompt following the strict Persona guidelines.
5. Update `LIBRARY.md` to document the new skill under the appropriate package section, including its `Invocation` format.

### 3. Acceptance Criteria
To get your PR approved, the new skill must pass these criteria:
* **Strict Persona:** The prompt must clearly define *who* the AI is (e.g., "You are a database architect").
* **Actionable Output:** It must explicitly demand production-ready output, not just generic advice.
* **Standardization:** It must include the standard output rules (e.g., `- Output: Production-ready code. - Standards: DRY, SOLID...`).
* **Documentation:** `LIBRARY.md` must be correctly updated with an example invocation.
