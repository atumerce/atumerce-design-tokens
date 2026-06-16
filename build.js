const StyleDictionary = require('style-dictionary');

const sd = new StyleDictionary({
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables',
        options: {
          outputReferences: true,
          selector: ':root',
        },
      }],
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'build/scss/',
      files: [{
        destination: '_tokens.scss',
        format: 'scss/variables',
        options: {
          outputReferences: true,
        },
      }],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'build/js/',
      files: [{
        destination: 'tokens.js',
        format: 'javascript/module',
      }],
    },
    json: {
      transformGroup: 'js',
      buildPath: 'build/',
      files: [{
        destination: 'tokens.json',
        format: 'json/nested',
      }],
    },
  },
});

sd.buildAllPlatforms();
console.log('Atumerce tokens built successfully.');
