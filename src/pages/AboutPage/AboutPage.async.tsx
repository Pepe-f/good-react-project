import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  // For test, don't scare)
  setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
