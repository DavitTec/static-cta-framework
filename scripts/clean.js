// scripts/clean.js
import fs from "fs";
import path from "path";

const targets = ["dist", "stage", "build"];

for (const dir of targets) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
    console.log(`✔ cleaned ${dir}/`);
  }
}
