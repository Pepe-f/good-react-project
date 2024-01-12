let currentArticleId: string;

describe('User go to article details page', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      currentArticleId = article.id;
      cy.visit(`/articles/${currentArticleId}`);
    });
  });

  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });

  it('User see article', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
  });

  it('User see article recommendations list', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });

  it('User send commentary', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('text');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });

  it('User rate article', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(4, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 4);
  });

  it('User rate article (with fixtures)', () => {
    cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(4, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 4);
  });
});
