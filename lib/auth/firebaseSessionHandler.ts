import { User } from 'firebase';
import fetch from 'isomorphic-unfetch';

export const setSession = (user: User) => {
  if (user) {
    return user.getIdToken().then((token: string) => {
      return fetch('/api/login', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        credentials: 'same-origin',
        body: JSON.stringify({ token }),
      });
    });
  }

  return fetch('/api/logout', {
    method: 'POST',
    credentials: 'same-origin',
  });
};
