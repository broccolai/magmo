import React from 'react';
import { AuthUserInfoData } from '../../typings/Generic';
import { MagmoContext } from '../../typings/Wrappers';
import { AuthUserInfoContext } from '../auth/hooks';

export default (ComposedComponent: any) => {
  const WithAuthUserInfoComp = (props: AuthUserInfoData) => {
    const { AuthUserInfo: AuthUserInfoFromSession, ...otherProps } = props;
    return (
      <AuthUserInfoContext.Consumer>
        {(AuthUserInfo) => <ComposedComponent {...otherProps} AuthUserInfo={AuthUserInfo || AuthUserInfoFromSession} />}
      </AuthUserInfoContext.Consumer>
    );
  };

  WithAuthUserInfoComp.getInitialProps = async (ctx: MagmoContext) => {
    const AuthUserInfo = ctx.customData?.AuthUserInfo || null;

    let composedInitialProps = {};
    if (ComposedComponent.getInitialProps) {
      composedInitialProps = await ComposedComponent.getInitialProps(ctx);
    }

    return {
      ...composedInitialProps,
      AuthUserInfo,
    };
  };

  return WithAuthUserInfoComp;
};
