Feature: Google Search
    Scenario Outline: As a user, I want to search for some term

    Given I am on google
    When I search for <term>
    When I open the second result in a new tab
    Then the title should contain the <term>

    Examples:
        | term |
        | selenium |