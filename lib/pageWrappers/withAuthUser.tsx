import { User } from 'firebase';
import React from 'react';
import { AuthUserInfoData } from '../../typings/Generic';
import { MagmoContext } from '../../typings/Wrappers';
import { AuthUserInfoContext, useFirebaseAuth } from '../auth/hooks';
import { createAuthUser, createAuthUserInfo } from '../auth/user';

export default (ComposedComponent: any) => {
  const WithAuthUserComp = (props: AuthUserInfoData) => {
    const { AuthUserInfo, ...otherProps } = props;

    const { user: firebaseUser } = useFirebaseAuth();
    const AuthUserFromClient = createAuthUser(firebaseUser as User);
    const { AuthUser: AuthUserFromSession, token } = AuthUserInfo;
    const AuthUser = AuthUserFromClient || AuthUserFromSession || null;

    return (
      <AuthUserInfoContext.Provider value={{ AuthUser, token }}>
        <ComposedComponent {...otherProps} />
      </AuthUserInfoContext.Provider>
    );
  };

  WithAuthUserComp.getInitialProps = async (ctx: MagmoContext) => {
    const { req, res } = ctx;

    let AuthUserInfo;
    if (typeof window === 'undefined') {
      const { addSession } = require('../middleware/cookieSession');
      addSession(req, res);
      AuthUserInfo = createAuthUserInfo({
        firebaseUser: req.session.decodedToken || null,
        token: req.session.token || null,
      });
    } else {
      try {
        const jsonData = JSON.parse(window.document.getElementById('__MY_AUTH_USER_INFO')?.textContent as string);
        if (jsonData) {
          AuthUserInfo = jsonData;
        } else {
          AuthUserInfo = createAuthUserInfo();
        }
      } catch (e) {
        AuthUserInfo = createAuthUserInfo();
      }
    }

    ctx.customData = { AuthUserInfo: AuthUserInfo };

    let composedInitialProps = {};
    if (ComposedComponent.getInitialProps) {
      composedInitialProps = await ComposedComponent.getInitialProps(ctx);
    }

    return {
      ...composedInitialProps,
      AuthUserInfo,
    };
  };

  return WithAuthUserComp;
};
