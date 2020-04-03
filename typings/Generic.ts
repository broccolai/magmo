export interface AuthUserInfoData {
  AuthUserInfo: AuthUserInfo;
}

export type AuthUserInfo = {
  AuthUser: AuthUser;
  token: string;
};

export type AuthUser = {
  id: string;
  email: string;
  emailVerified: boolean;
};
