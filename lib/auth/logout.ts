import firebase from 'firebase/app';
import 'firebase/auth';

export default async () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      if (typeof window !== 'undefined') {
        const elem = window.document.getElementById('__MY_AUTH_USER_INFO');
        elem?.parentNode?.removeChild(elem);
      }
      return true;
    })
    .catch((e) => {
      console.error(e);
      return false;
    });
};
