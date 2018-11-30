Feature: Adding points

    As a User
    In order to know who wins the game
    I would like to see how many points each player has

    Background:
        | computerChoice |
        | rock           |

    Scenario: It is a tie
        Given I visit the site
        Then I should see '0 - 0'
        Then I click 'paper'
        And computerChoice is 'paper'
        Then I should see 'It is a tie'

    Scenario: User gets a point
        Given I visit the site
        Then I should see '0 - 0'
        Then I click 'paper'
        And computerChoice is 'rock'
        Then I should see '1 - 0 to you'
        And I should see 'Computer chose rock, you chose paper'

    Scenario: Computer gets a point