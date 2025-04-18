/* eslint-disable no-console */
import { exec } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';
import util from 'util';
import pLimit from 'p-limit';

const CONCURRENCY_LIMIT = 8;

const execPromise = util.promisify(exec);

async function findIndexFiles(dir) {
  let indexFiles = [];
  const files = await fs.readdir(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      indexFiles = indexFiles.concat(await findIndexFiles(fullPath));
    } else if (file.isFile() && file.name === 'index.ts') {
      indexFiles.push(fullPath);
    }
  }

  return indexFiles;
}

async function runTypedoc(indexFile, packagesDir) {
  const relativePath = path.relative(packagesDir, indexFile);
  const outputDir = path.dirname(relativePath.replace('src/', '').replace('index.ts', ''));
  const outputPath = path.join(`${process.cwd()}/output`, outputDir);
  const entryFileName = path.basename(path.dirname(relativePath));
  const command = `pnpm typedoc --entryPoints ${indexFile} --out ${outputPath} --entryFileName ${entryFileName}`;

  console.log(`Running: ${command}`);
  try {
    await execPromise(command);
    console.log(`Completed: ${command}`);
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    console.error(error);
  }
}

async function generateDocs() {
  const packagesDir = path.join(process.cwd(), '../packages');
  const packageFolders = await fs.readdir(packagesDir, { withFileTypes: true });

  // Create a limiter instance
  const limit = pLimit(CONCURRENCY_LIMIT);

  // Collect all commands to run
  const tasks = [];
  console.log(`Starting documentation generation with ${CONCURRENCY_LIMIT} concurrent processes.`);
  for (const folder of packageFolders) {
    if (folder.isDirectory()) {
      const srcDir = path.join(packagesDir, folder.name, 'src');
      const indexFiles = await findIndexFiles(srcDir);

      // Add each command to the tasks array, wrapped with the limiter
      tasks.push(...indexFiles.map((indexFile) => limit(() => runTypedoc(indexFile, packagesDir))));
    }
  }

  try {
    // Run commands with controlled concurrency
    await Promise.all(tasks);
    console.log('All documentation generation tasks completed successfully.');
  } catch (error) {
    console.error('Some documentation generation tasks failed:', error);
    throw error;
  }
}

generateDocs().catch(console.error);
