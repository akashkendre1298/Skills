#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const skillsDir = path.join(__dirname, '..', 'skills');

if (!fs.existsSync(skillsDir)) {
  console.error('Skills directory not found! Please ensure the package is installed correctly.');
  process.exit(1);
}

const args = process.argv.slice(2);
const command = args[0] || 'list';

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

function bundleForVSCode(targetFile) {
  let bundledContent = `# IDE Skills Master Library\n\nYou are an expert AI coding assistant. You have access to a library of specialized skills. Whenever the user invokes a skill using \`/<skill-name>\`, you must adopt the persona and instructions for that specific skill.\n\n## Available Skills:\n\n`;
  
  const skillFolders = fs.readdirSync(skillsDir).filter(f => fs.statSync(path.join(skillsDir, f)).isDirectory());
  
  skillFolders.forEach(folder => {
    const skillMdPath = path.join(skillsDir, folder, 'SKILL.md');
    if (fs.existsSync(skillMdPath)) {
      const content = fs.readFileSync(skillMdPath, 'utf-8');
      bundledContent += `### Command: /${folder}\n`;
      bundledContent += `**Instructions:**\n${content}\n\n---\n`;
    }
  });

  const targetDir = path.dirname(targetFile);
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(targetFile, bundledContent, 'utf-8');
}

function installTarget(targetName) {
  const home = os.homedir();
  let destPath = '';

  switch (targetName) {
    case 'cursor':
      destPath = path.join(home, '.cursor', 'skills');
      copyRecursiveSync(skillsDir, destPath);
      console.log(`\n✅ [Cursor] Installed to ${destPath}`);
      break;
    case 'claude':
      destPath = path.join(home, '.claude', 'skills');
      copyRecursiveSync(skillsDir, destPath);
      console.log(`\n✅ [Claude Code] Installed to ${destPath}`);
      break;
    case 'antigravity':
      destPath = path.join(home, '.gemini', 'antigravity', 'skills');
      copyRecursiveSync(skillsDir, destPath);
      console.log(`\n✅ [Antigravity] Installed to ${destPath}`);
      break;
    case 'codex':
      destPath = path.join(home, '.codex', 'skills');
      copyRecursiveSync(skillsDir, destPath);
      console.log(`\n✅ [Codex] Installed to ${destPath}`);
      break;
    case 'vscode':
      destPath = path.join(home, '.ide-skills', 'vscode-instructions.md');
      bundleForVSCode(destPath);
      console.log(`\n✅ [VS Code Copilot] Bundled to ${destPath}`);
      console.log('   Add this to VS Code Settings (JSON):');
      console.log(`   "github.copilot.chat.codeGeneration.instructions": [{"file": "${destPath.replace(/\\/g, '/')}"}]`);
      break;
    default:
      console.error(`❌ Unknown target '${targetName}'. Supported: cursor, claude, antigravity, codex, vscode, all`);
      process.exit(1);
  }
}

if (command === 'list') {
  console.log('\n🚀 DevSkill Studio — Professional SDLC Toolkit 🚀');
  console.log('--------------------------------------------------\n');
  
  const skillFolders = fs.readdirSync(skillsDir).filter(f => fs.statSync(path.join(skillsDir, f)).isDirectory());
  
  if (skillFolders.length === 0) {
    console.log('No skills found.');
    process.exit(0);
  }

  skillFolders.forEach(folder => {
    const skillMdPath = path.join(skillsDir, folder, 'SKILL.md');
    if (fs.existsSync(skillMdPath)) {
      const content = fs.readFileSync(skillMdPath, 'utf-8');
      
      // Parse frontmatter
      const nameMatch = content.match(/^name:\s*(.+)$/m);
      const descMatch = content.match(/^description:\s*'(.*?)'/m);
      
      const name = nameMatch ? nameMatch[1] : folder;
      const desc = descMatch ? descMatch[1] : 'No description available.';
      
      console.log(`\x1b[36m◆ ${name}\x1b[0m`);
      console.log(`  ${desc}\n`);
    }
  });

  console.log('Use `devskills get <skill-name>` to view the full prompt for a skill.');
  console.log('Use `devskills install <target>` to install globally (e.g. cursor, vscode, antigravity, all).\n');
} else if (command === 'get') {
  const skillName = args[1];
  
  if (!skillName) {
    console.error('❌ Please specify a skill name (e.g., `devskills get feature-brainstorm`)');
    process.exit(1);
  }

  const skillFolder = path.join(skillsDir, skillName);
  const skillMdPath = path.join(skillFolder, 'SKILL.md');

  if (!fs.existsSync(skillMdPath)) {
    console.error(`❌ Skill '${skillName}' not found.`);
    process.exit(1);
  }

  const content = fs.readFileSync(skillMdPath, 'utf-8');
  console.log(`\n📄 SKILL: ${skillName}`);
  console.log('--------------------------------------------------\n');
  console.log(content);
} else if (command === 'install') {
  const target = args[1];
  
  if (!target) {
    console.error('❌ Please specify a target agent (e.g., cursor, claude, antigravity, codex, vscode, all)');
    console.log('\nAvailable Targets:');
    console.log('  cursor      (-> ~/.cursor/skills/)');
    console.log('  claude      (-> ~/.claude/skills/)');
    console.log('  antigravity (-> ~/.gemini/antigravity/skills/)');
    console.log('  codex       (-> ~/.codex/skills/)');
    console.log('  vscode      (-> ~/.ide-skills/vscode-instructions.md)');
    console.log('  all         (-> Installs to ALL of the above)');
    process.exit(1);
  }

  if (target.toLowerCase() === 'all') {
    const allTargets = ['cursor', 'claude', 'antigravity', 'codex', 'vscode'];
    allTargets.forEach(installTarget);
    console.log('\n🚀 Successfully installed to all supported IDE agents globally!');
  } else {
    installTarget(target.toLowerCase());
  }

} else {
  console.error(`❌ Unknown command: ${command}`);
  console.log('Available commands:');
  console.log('  devskills list');
  console.log('  devskills get <skill-name>');
  console.log('  devskills install <target>');
  process.exit(1);
}
