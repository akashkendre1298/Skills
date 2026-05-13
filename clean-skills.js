const fs = require('fs');
const path = require('path');

const keepSkills = new Set([
  'accessibility-checker',
  'animation-review',
  'api-design',
  'async-pattern',
  'ci-pipeline',
  'code-smell',
  'component-design',
  'css-naming-audit',
  'dark-mode-audit',
  'data-model',
  'dependency-injection',
  'dockerfile-gen',
  'error-handling',
  'integration-test',
  'lint-fix',
  'log-quality',
  'naming-audit',
  'perf-budget',
  'pr-review',
  'responsive-layout',
  'solid-review',
  'storybook-gen',
  'test-coverage-audit',
  'tracing-setup',
  'type-safety',
  'unit-test-gen'
]);

// 1. Clean LIBRARY.md
const libraryPath = path.join(__dirname, 'LIBRARY.md');
let libraryContent = fs.readFileSync(libraryPath, 'utf-8');

// Regex to match a skill block: ## skill-name \n\n **SKILL.md Prompt:** ... up to the next ---
const skillBlockRegex = /##\s+([a-zA-Z0-9-]+)\s*\n\s*\*\*SKILL\.md Prompt:\*\*[\s\S]*?(?=\n---\n|$)/g;

let deletedCount = 0;
let keptCount = 0;

const cleanedLibrary = libraryContent.replace(skillBlockRegex, (match, skillName) => {
  if (keepSkills.has(skillName)) {
    keptCount++;
    return match;
  } else {
    deletedCount++;
    return ''; // Remove the skill block
  }
});

// Clean up empty lines and double ---
let finalLibrary = cleanedLibrary.replace(/\n---\n\s*\n---\n/g, '\n---\n');
fs.writeFileSync(libraryPath, finalLibrary);

console.log(`LIBRARY.md cleaned. Kept ${keptCount} skills, deleted ${deletedCount} skills.`);

// 2. Clean skills/ directory
const skillsDir = path.join(__dirname, 'skills');
const existingFolders = fs.readdirSync(skillsDir);

let foldersDeleted = 0;
for (const folder of existingFolders) {
  const folderPath = path.join(skillsDir, folder);
  if (fs.statSync(folderPath).isDirectory()) {
    // Keep if it's in our keep list OR if it's a persona (we updated those manually)
    if (!keepSkills.has(folder) && !folder.startsWith('persona-')) {
      fs.rmSync(folderPath, { recursive: true, force: true });
      foldersDeleted++;
    }
  }
}

console.log(`Deleted ${foldersDeleted} fluff folders from skills/.`);
