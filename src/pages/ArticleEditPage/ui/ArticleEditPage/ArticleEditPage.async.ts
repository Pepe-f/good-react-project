import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // For test, don't scare)
  setTimeout(() => resolve(import('./ArticleEditPage')), 400);
}));
