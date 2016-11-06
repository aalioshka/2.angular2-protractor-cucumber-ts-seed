import {ProtractorBrowser} from 'protractor';

export let config = {

    directConnect: true,

    // Base URL for application server
    baseUrl: 'http://localhost:8080',

    capabilities: {
        browserName: 'chrome'
    },

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        'e2e/features/*.feature'
    ],

    onPrepare: () => {
        let globals = require('protractor');
        let browser: ProtractorBrowser = globals.browser;
        browser.ignoreSynchronization = true;

    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        monochrome: true,
        strict: true,
        format: ['pretty', 'json:e2e/output/cucumber.json'],
        require: ['e2e/step_definitions/**/*.ts', 'e2e/support/**/*.ts'],
        tags: '@M2JS'
    }
};