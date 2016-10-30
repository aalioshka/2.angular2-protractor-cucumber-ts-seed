import {protractor, browser} from "protractor";
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import { binding, before, given, when, then } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';

import {AppComponent} from '../../support/components/app.component';
let appComponent: AppComponent;

@binding()
class AppComponentSteps {

    @before()
    private beforeAllScenarios(): void {
        appComponent = new AppComponent();
    }

    @when(/^app.component is loaded tsflow$/)
    private headingIsLoaded(callback: CallbackStepDefinition) {
        browser.wait(protractor.ExpectedConditions.visibilityOf(appComponent.h1), 15000);
        callback();
    };

    @then(/^I expect to see app.component heading tsflow$/)
    private headingIsValid(callback: CallbackStepDefinition) {
        expect(appComponent.h1.getText()).to.become(appComponent.heading).and.notify(callback);
    };
}

export = AppComponentSteps;