Feature: Angular 2 Protractor Cucumber E2E Tests

  @M2JS
  Scenario: Simple Angular 2 Protractor Cucumber E2E Tests
    Given I open index page
    When page is loaded
    And app.component is loaded
    Then I expect to see app.component heading