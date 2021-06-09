import HomePage from '../../../pages/HomePage/HomePage';
import ResultPage from '../../../pages/ResultPage/ResultPage';
import { Given } from 'cypress-cucumber-preprocessor/steps';
import { When } from 'cypress-cucumber-preprocessor/steps';
import { Then } from 'cypress-cucumber-preprocessor/steps';

const homePage = new HomePage();
const resultPage = new ResultPage();

Given('the user navigating automationpractice.com website', () => {
    cy.visit('http://automationpractice.com/index.php');
    
  });

When(
    'searches for {string}',
    (query) => {
      homePage.clickSearchTxtBox();
      homePage.typeInSearchTxtBox(query);
      homePage.submitSearchQuery();
    }
  );

Then(
    'first search result matches {string} keyword',
    (search_keyword) => {
      let result = resultPage.verifyFirstResult(search_keyword);
    }
  );