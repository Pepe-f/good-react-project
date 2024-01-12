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
});
