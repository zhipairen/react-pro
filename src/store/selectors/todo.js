import { createSelector } from 'reselect';

const value1 = (state) => state.todos[0];
const value2 = (state) => state.todos[1];
export const todos = createSelector(
  [value1, value2],
  (value1, value2) => value1 + value2
);

