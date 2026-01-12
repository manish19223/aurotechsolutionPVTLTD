/**
 * Typography Update Script for Auro Tech Solutions
 * Updates all font classes to use the new Apple font stack typography system
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Typography mapping from old classes to new ones
const typographyMappings = {
  // Font weight classes
  "font-light": "font-400",
  "font-normal": "font-400",
  "font-medium": "font-500",
  "font-semibold": "font-500",
  "font-bold": "font-600",
  "font-extrabold": "font-600",
  "font-black": "font-600",

  // Old font family classes
  "font-heading": "text-heading",
  "font-body": "text-description",
};

// Typography class mappings by context (heading levels, button text, etc.)
const contextMappings = {
  // H1 elements
  "h1.*font": "text-hero",
  // H2 elements
  "h2.*font": "text-heading",
  // H3 elements
  "h3.*font": "text-heading",
  // Button text
  "button.*font": "text-button",
  // Small text/paragraphs
  "p.*font": "text-description",
  "span.*font": "text-description",
  "div.*font": "text-description",
};

function updateTypographyInFile(filePath) {
  console.log(`Updating typography in: ${filePath}`);

  try {
    let content = fs.readFileSync(filePath, "utf8");
    let hasChanges = false;

    // Apply direct class mappings
    Object.entries(typographyMappings).forEach(([oldClass, newClass]) => {
      const regex = new RegExp(`\\b${oldClass}\\b`, "g");
      if (regex.test(content)) {
        content = content.replace(regex, newClass);
        hasChanges = true;
        console.log(`  ✓ Replaced: ${oldClass} → ${newClass}`);
      }
    });

    // Save file if changes were made
    if (hasChanges) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`  ✅ Updated: ${filePath}`);
    } else {
      console.log(`  ℹ️  No changes needed: ${filePath}`);
    }
  } catch (error) {
    console.error(`  ❌ Error updating ${filePath}:`, error.message);
  }
}

function findComponentFiles(dirPath) {
  const files = [];

  function scanDirectory(currentPath) {
    const items = fs.readdirSync(currentPath);

    items.forEach((item) => {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);

      if (
        stat.isDirectory() &&
        !item.startsWith(".") &&
        item !== "node_modules"
      ) {
        scanDirectory(fullPath);
      } else if (stat.isFile() && item.endsWith(".jsx")) {
        files.push(fullPath);
      }
    });
  }

  scanDirectory(dirPath);
  return files;
}

// Main execution
const componentsDir = path.join(__dirname, "../src/components");

console.log("🔄 Starting Typography System Update");
console.log("=====================================");
console.log(
  "Apple Official Font Stack: -apple-system, BlinkMacSystemFont, SF Pro Display, SF Pro Text, ..."
);
console.log("");

const componentFiles = findComponentFiles(componentsDir);
console.log(`📁 Found ${componentFiles.length} component files to check\n`);

componentFiles.forEach(updateTypographyInFile);

console.log("");
console.log("✅ Typography update completed!");
console.log("");
console.log("📝 Manual Review Needed:");
console.log("  - Check heading hierarchy (h1→text-hero, h2/h3→text-heading)");
console.log("  - Verify button text uses text-button");
console.log("  - Ensure descriptions use text-description");
console.log("  - Numbers/stats should use text-numbers");
console.log("");
console.log("🎯 Typography Classes Available:");
console.log("  text-hero        → H1 titles (600 weight)");
console.log("  text-heading     → H2/H3 headings (600 weight)");
console.log("  text-subheading  → Sub-headings/Tags (500 weight)");
console.log("  text-description → Body text (400 weight)");
console.log("  text-button      → Button text (500 weight)");
console.log("  text-numbers     → Numbers/stats (600 weight)");
