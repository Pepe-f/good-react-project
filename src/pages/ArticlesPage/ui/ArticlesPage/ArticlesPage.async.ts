import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // For test, don't scare)
  setTimeout(() => resolve(import('./ArticlesPage')), 400);
}));
