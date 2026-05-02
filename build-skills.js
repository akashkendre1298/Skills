const fs = require('fs');
const path = require('path');

const readmePath = path.join(__dirname, 'LIBRARY.md');
const skillsDir = path.join(__dirname, 'skills');

if (!fs.existsSync(readmePath)) {
  console.error('README.md not found!');
  process.exit(1);
}

const content = fs.readFileSync(readmePath, 'utf-8');

// Regex to find skills
const skillRegex = /##\s+([a-zA-Z0-9-]+)\s*\n\s*\*\*SKILL\.md Prompt:\*\*\s*\n```\s*\n([\s\S]*?)\n```/g;

let match;
let skillsFound = 0;

if (!fs.existsSync(skillsDir)) {
  fs.mkdirSync(skillsDir);
}

const today = new Date().toISOString().split('T')[0];

while ((match = skillRegex.exec(content)) !== null) {
  const skillName = match[1];
  const promptText = match[2].trim();
  
  // Extract first sentence for description
  const firstSentenceMatch = promptText.match(/^.*?[.?!](?=\s|$)/m);
  let description = firstSentenceMatch ? firstSentenceMatch[0].replace(/\n/g, ' ') : `A useful skill for ${skillName}.`;
  
  // Clean description for YAML
  description = description.replace(/'/g, "''");

  const skillFolder = path.join(skillsDir, skillName);
  
  if (!fs.existsSync(skillFolder)) {
    fs.mkdirSync(skillFolder, { recursive: true });
  }

  const formattedName = skillName.replace(/-/g, ' ');

  const skillContent = `---
name: ${skillName}
description: '${description}'
risk: safe
source: community
date_added: '${today}'
---

## Use this skill when

- Working on tasks related to ${formattedName}
- Needing guidance, best practices, or generation for ${formattedName}

## Do not use this skill when

- The task is unrelated to ${formattedName}
- You need a different domain or tool outside this scope

## Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.

**Role and Execution Details:**
${promptText}

## Limitations
- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
- Ensure all security, privacy, and compliance guidelines are followed.
- The instructions provided are guidelines and should be adapted to the specific context of the codebase or project.
`;

  fs.writeFileSync(path.join(skillFolder, 'SKILL.md'), skillContent);
  skillsFound++;
}

console.log(`Successfully generated ${skillsFound} skills into the /skills directory.`);
