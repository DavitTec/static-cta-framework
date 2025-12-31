import nunjucks from "nunjucks";

export function configureNunjucks() {
  return nunjucks.configure("src/njk", {
    autoescape: true,
    noCache: true
  });
}
