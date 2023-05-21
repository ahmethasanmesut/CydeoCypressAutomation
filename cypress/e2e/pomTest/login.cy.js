import { auth } from '../../support/pages/auth';
import { navigateTo } from '../../support/pages/navigation';

const LoginLocators = require('../../support/pages/auth'); // this way reaches all objects in auth class

describe('Auth:Login user with different ways', () => {
  // navigation to the test page
  beforeEach('navigate to loginpage', () => {
    cy.clearAllCookies();
    navigateTo.loginPage(); // this function we called it from our POM
  });
  it('Happy Path scenario using POM function', () => {
    // auth.login('hardcoded variables')--not a good way
    cy.fixture('user').then((user) => {
      auth.login(user.user2.username, user.user2.password);
    });
    // lets call our custom command to verify the text
    cy.textExists('You logged into a secure area!');
    auth.logout();
  });
  it('Happy Path scenario using POM Locators', () => {
    // auth.login('hardcoded variables')--not a good way
    cy.fixture('user').then((user) => {
      LoginLocators.locators.userName.type(user.user2.username);
      LoginLocators.locators.password.type(user.user2.password);
      LoginLocators.locators.submit.click();
    });
    // lets call our custom command to verify the text
    cy.textExists('You logged into a secure area!');
    auth.logout();
  });
  it('Check invalid user credentials', () => {
    auth.login('invalid234', 'invalid234'); // beauty of re-usability
    // verify error message
    cy.textExists('Your username is invalid!');
  });
});
