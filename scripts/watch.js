import chokidar from 'chokidar';
import { exec } from 'child_process';

function run(cmd) {
  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      console.error(`✖ ${cmd}`);
      console.error(stderr);
    } else {
      console.log(`✔ ${cmd}`);
    }
  });
}

// Nunjucks templates + data
chokidar.watch(['src/njk/**/*.njk', 'data/**/*.json'], { ignoreInitial: true }).on('all', () => run('pnpm render'));

// Sass
chokidar.watch(['src/sass/**/*.{sass,scss}'], { ignoreInitial: true }).on('all', () => run('pnpm sass'));

// JS
chokidar.watch(['src/js/**/*.js'], { ignoreInitial: true }).on('all', () => run('pnpm copy'));

// Assets (images, favicon, etc)
chokidar.watch(['src/assets/**/*'], { ignoreInitial: true }).on('all', () => run('pnpm copy'));

console.log('👀 Watching for changes…');
