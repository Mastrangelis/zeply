import { defineConfig } from 'cypress';

export default defineConfig({
    viewportWidth: 1920,
    viewportHeight: 1080,
    retries: 1,
    reporter: 'mochawesome',
    numTestsKeptInMemory: 0,
    reporterOptions: {
        reportDir: 'cypress/artifacts/reports',
        overwrite: false,
        html: false,
        json: true,
        toConsole: true
    },
    screenshotsFolder: 'cypress/artifacts/screenshots',
    videosFolder: 'cypress/artifacts/videos',
    trashAssetsBeforeRuns: false,
    e2e: {
        baseUrl: 'http://localhost:3000',
        supportFile: './cypress/support/e2e.ts',
        setupNodeEvents(on, config) {
            require('@cypress/code-coverage/task')(on, config);
        }
    },
    chromeWebSecurity: false,
    defaultCommandTimeout: 8000
});
