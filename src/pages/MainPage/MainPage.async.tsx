import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  // For test, don't scare)
  setTimeout(() => resolve(import('./MainPage')), 1500);
}));
