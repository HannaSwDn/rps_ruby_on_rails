Feature: Adding points

    As a User
    In order to know who wins the game
    I would like to see how many points each player has

    Scenario: User gets a point
        Given I visit the site
        Then I should see '0 - 0'
        Then I click 'rock'