import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // For test, don't scare)
  setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
