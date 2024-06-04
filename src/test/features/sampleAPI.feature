Feature: API Tests

  Background:
    Given the API endpoint is healthy
  @inventory
  Scenario: Get a pet inventory
    When I send a GET request to get the inventory
    Then the response status should be 200
    And assert the response


