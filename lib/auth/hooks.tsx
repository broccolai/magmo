import firebase, { User } from 'firebase/app';
import 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { setSession } from './firebaseSessionHandler';
import initFirebase from './initFirebase';
import { createAuthUserInfo } from './user';

initFirebase();

export const AuthUserInfoContext = React.createContext(createAuthUserInfo());

export const useAuthUserInfo = () => {
  return React.useContext(AuthUserInfoContext);
};

export const useFirebaseAuth = () => {
  const [state, setState] = useState(() => {
    const user = firebase.auth().currentUser;
    return {
      initializing: !user,
      user,
    };
  });

  const onChange = (user: User | null) => {
    if (!user) return;
    setState({ initializing: false, user });
    setSession(user);
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);
    return () => unsubscribe();
  }, []);

  return state;
};
