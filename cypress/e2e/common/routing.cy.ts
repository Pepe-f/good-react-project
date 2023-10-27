import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
  describe('User is not authorized', () => {
    it('Go to main page', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });

    it('Go to profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });

    it('Go to non-existent route', () => {
      cy.visit('/fasasfafs');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });

  describe('User is authorized', () => {
    beforeEach(() => {
      cy.login();
    });

    it('Go to profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });

    it('Go to articles page', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
  });
});
