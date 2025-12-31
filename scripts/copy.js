import fs from 'fs';
import path from 'path';

const targets = [
  { src: 'src/js', dest: 'dist/js' },
  { src: 'src/assets', dest: 'dist/assets' }
];

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;

  fs.mkdirSync(dest, { recursive: true });

  for (const item of fs.readdirSync(src)) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);

    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

targets.forEach(({ src, dest }) => {
  copyDir(src, dest);
  console.log(`✔ copied ${src} → ${dest}`);
});
