import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => new Promise((resolve) => {
  // @ts-ignore
  // For test, don't scare)
  setTimeout(() => resolve(import('./AddCommentForm')), 1500);
}));
