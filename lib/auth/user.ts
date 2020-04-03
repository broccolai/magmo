import { User } from 'firebase';

export const createAuthUser = (firebaseUser: User | null) => {
  if (!firebaseUser || !firebaseUser.uid) {
    return null;
  }

  return {
    id: firebaseUser.uid,
    email: firebaseUser.email,
    emailVerified: firebaseUser.emailVerified,
  };
};

export const createAuthUserInfo = ({ firebaseUser = null, token = null } = {}) => {
  return {
    AuthUser: createAuthUser(firebaseUser),
    token,
  };
};
