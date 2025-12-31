// stylelint.config.js
export default {
  extends: ["stylelint-config-standard-scss", "stylelint-config-prettier"],
  plugins: ["stylelint-scss"],
  rules: {
    // Enforce consistency, not dogma
    "selector-class-pattern": null,
    "custom-property-pattern": null,

    // SCSS-specific sanity
    "scss/dollar-variable-pattern": null,
    "scss/at-rule-no-unknown": true,

    // Design-system friendly
    "color-named": "never",
    "length-zero-no-unit": true,

    // Allow nesting (but not madness)
    "max-nesting-depth": 4,
  },
  ignoreFiles: ["dist/**/*", "stage/**/*", "build/**/*"],
};
