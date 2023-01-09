const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'src/client/testing/e2e-testing/*.cy.js',
    supportFile: false,
    video: false,
    screenshotOnRunFailure: false,
  },
});
