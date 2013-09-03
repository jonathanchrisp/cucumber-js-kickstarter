Feature: Google Homepage feature

  Scenario: Lets visit Google!
  Given I have a zombie instance
  When I visit the page "http://www.google.com"
  Then I should be on the google home page