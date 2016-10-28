import { element, by, browser } from 'protractor';

export class IndexPage {
  static title = 'Angular Protractor TS QuickStart';

  static openPage() : any {
    browser.get('');
  }
}
