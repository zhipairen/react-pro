import { LOGIN } from './type';

export function Login (name) {
  return {
    type: LOGIN,
    name,
  };
}
