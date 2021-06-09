Feature: Navigating to automationpractice.com and verifying match result keyword

    Scenario: Perform navigation

        Given the user navigating automationpractice.com website
        When searches for "skirt"
        Then first search result matches "skirt" keyword 
