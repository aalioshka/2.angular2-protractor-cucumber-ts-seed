import { element, by } from 'protractor';

export class AppComponent {
  heading = 'My First Angular App';
  h1 = element(by.css('h1'));
}
