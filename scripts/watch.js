// scripts/watch.js
import { spawn } from "child_process";
import chokidar from "chokidar";

const run = (cmd) => {
  const proc = spawn(cmd, { shell: true, stdio: "inherit" });
  proc.on("close", () => {});
};

const watcher = chokidar.watch(["src/**/*", "data/**/*", "config/**/*"], {
  ignoreInitial: true,
});

console.log("👀 Watching for changes...");

watcher.on("all", () => {
  console.log("🔄 Rebuilding...");
  run("pnpm build:dev");
});
