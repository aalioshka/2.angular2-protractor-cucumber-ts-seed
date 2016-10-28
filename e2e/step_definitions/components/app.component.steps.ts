import {AppComponent} from '../../support/components/app.component';
import {browser, protractor} from 'protractor';

export  = function() {
    let chai = require('chai').use(require('chai-as-promised'));
    let expect = chai.expect;
    let appComponent: AppComponent;

    this.Before(() => {
        appComponent = new AppComponent();
    });

    this.When(/^app.component is loaded$/, () => {
        return browser.wait(protractor.ExpectedConditions.visibilityOf(appComponent.h1), 15000);
    });

    this.Then(/^I expect to see app.component heading$/, () => {
        return expect(appComponent.h1.getText()).to.eventually.equal(appComponent.heading);
    });
}