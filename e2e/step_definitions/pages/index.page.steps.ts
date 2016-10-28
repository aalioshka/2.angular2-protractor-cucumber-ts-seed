import {IndexPage} from '../../support/pages/index.page';
import {browser} from 'protractor';

export  = function() {

    let chai = require('chai').use(require('chai-as-promised'));
    let expect = chai.expect;

    this.Given(/^I open index page$/, () => {
        return IndexPage.openPage();
    });

    this.When(/^page is loaded$/, () => {
        return expect(browser.getTitle()).to.eventually.equal(IndexPage.title);
    });

}