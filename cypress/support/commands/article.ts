import { Article } from '../../../src/entities/Article';

const defaultArticle = {
  title: 'Научная статья - Биология',
  subtitle: 'БиологиЯ',
  img: 'https://demotivation.ru/wp-content/uploads/2020/03/1-baurin-2-2048x1364.jpg',
  views: 1022,
  createdAt: '26.02.2022',
  userId: '1',
  type: ['SCIENCE'],
  blocks: [],
};

export const createArticle = (article?: Article) => {
  return cy
    .request({
      method: 'POST',
      url: 'http://localhost:8000/articles',
      headers: {
        Authorization: 'asasad',
      },
      body: article ?? defaultArticle,
    })
    .then((response) => response.body);
};

export const removeArticle = (articleId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: {
      Authorization: 'asasad',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;

      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
