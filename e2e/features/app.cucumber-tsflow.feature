Feature: Angular 2 Protractor Cucumber E2E Tests with cucumber-tsflow

  @M2JS
  Scenario: cucumber-tsflow Angular 2 Protractor Cucumber E2E Tests
    Given I open index page tsflow
    When page is loaded tsflow
    And app.component is loaded tsflow
    Then I expect to see app.component heading tsflow