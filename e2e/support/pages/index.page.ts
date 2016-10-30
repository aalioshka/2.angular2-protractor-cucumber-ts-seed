import { element, by, browser } from 'protractor';

export class IndexPage {
  static title = 'Angular 2 Protractor Cucumber TypeScript Seed';

  static openPage() : any {
    browser.get('');
  }
}
