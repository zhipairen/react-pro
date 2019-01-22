import { LOGIN } from '../actions/type';

const initState = {
  user: {
    name: 'test',
    isLoggingIn: false,
  },
};
export default function todos (state = initState, action) {
  switch (action.type) {
  case LOGIN:
    return [
      ...state,
      {
        name: action.name,
        isLoggingIn: true,
      },
    ];
  default:
    return state;
  }
}
