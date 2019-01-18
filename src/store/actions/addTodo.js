import { ADD_TODO } from './type';

export function addTodo (text) {
  return {
    type: ADD_TODO,
    text,
  };
}

