import { UserManager, User, UserManagerSettings } from 'oidc-client';
import history from '../history';
// import { History } from 'history'; Do not delete this comment.
import { APP_CLIENT_AUTHORITY, APP_CLIENT_ID_ON_IDP, APP_ROOT } from '../shared/Constants';
export const REDIRECT_ON_LOGIN: string = 'redirect_on_login';

export class AuthService {
  private _userManager: UserManager;
  private _user: User;

  public get User(): User {
    return this._user;
  }

  constructor() {
    const stsSettings: UserManagerSettings = {
      authority: APP_CLIENT_AUTHORITY,
      client_id: APP_CLIENT_ID_ON_IDP,
      redirect_uri: `${APP_ROOT}/signin-callback`,
      silent_redirect_uri: `${APP_ROOT}/silentrenew`,
      response_type: 'code',
      scope: 'openid profile gateway-api roles',
      post_logout_redirect_uri: `${APP_ROOT}/signout-callback`,
      automaticSilentRenew: true,
      loadUserInfo: true,
    };
    this._user = (null as unknown) as User;
    this._userManager = new UserManager(stsSettings);
  }

  login = (): Promise<void> => {
    localStorage.setItem(REDIRECT_ON_LOGIN, JSON.stringify(history.location));
    return this._userManager.signinRedirect();
  };

  completeLogin = async (): Promise<void> => {
    const user = await this._userManager.signinRedirectCallback();
    this._user = user;
    await this._userManager.storeUser(this._user);
  };

  redirect = () => {
    const redirectLocation = localStorage.getItem(REDIRECT_ON_LOGIN);
    localStorage.removeItem(REDIRECT_ON_LOGIN);
    const location = !redirectLocation ? '/' : redirectLocation;
    history.push(JSON.parse(location));
  };

  logout = (): Promise<void> => {
    return this._userManager.signoutRedirect();
  };

  completeLogout = () => {
    this._user = null;
    return this._userManager.signoutRedirectCallback().then((resp) => {
      this._userManager.removeUser();
      return resp;
    });
  };

  getUserScopes = (): string[] => {
    return this._user.scopes || [];
  };

  isLoggedIn = async (): Promise<boolean> => {
    const user = await this._userManager.getUser();
    const currentUser = !!user && !user.expired;
    this._user = user;
    return currentUser;
  };

  signinSilentCallback = () => {
    this._userManager.signinSilentCallback();
  };
}
