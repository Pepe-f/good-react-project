describe('User go to articles page', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('/articles');
    });
  });

  it('Articles success loaded', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });

  it('Articles success loaded (with fixtures)', () => {
    cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });

  it.skip('Skip test example', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    cy.get('asasd').should('exist');
  });
});
