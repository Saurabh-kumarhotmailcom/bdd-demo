@UserStory=CCJ-4984
Feature: Login to Home page

Scenario: Login success with valid credentials
  Given I am on the login page
  When I fill in "User Name" with "xyz"
  And I fill in "Password" with "xyz"
  And I press "Login"
  Then I should be on the users home page

Scenario: Login Failed with invalid credentials
  Given I am on the login page
  When I fill in "User Name" with "abc"
  And I fill in "Password" with "abc"
  And I press "Login"
  Then I should see message "Username and Password incorrect"

