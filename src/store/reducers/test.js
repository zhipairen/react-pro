import { ADD_TODO } from './actions/type';

export default function todos (state = [], action) {
  switch (action.type) {
  case ADD_TODO:
    return [
      ...state,
      {
        text: action.text,
        completed: false,
      },
    ];
  default:
    return state;
  }
}
