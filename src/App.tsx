import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './components/home/Home';
import AuthContext from './auth/AuthContext';
import PageNotFound from './components/PageNotFound';
import UnAuthorized from './components/UnAuthorized';
import PrivateRoute from './shared/components/private-route/PrivateRoute';
import { AuthService } from './auth/auth.service';
import LoginCallBack from './components/call-back/login-call-back';
import SilentRenew from './components/call-back/silent-renew';
import LogoutCallBack from './components/call-back/logout-call-back';

function App() {
  const auth = new AuthService();

  return (
    <>
      <AuthContext.Provider value={auth}>
        <Switch>
          <Route path='/signin-callback' component={LoginCallBack}></Route>
          <Route path='/' exact component={HomePage} />
          <Route path='/signout-callback' component={LogoutCallBack} />
          <Route path='/silentrenew' component={SilentRenew} />
          <PrivateRoute path='/contact-us-messages' component={ContactUsMessages} />
          <Route path='*' component={PageNotFound}></Route>
          <Route path='/unauthorized' component={UnAuthorized}></Route>
        </Switch>
      </AuthContext.Provider>
    </>
  );
}

export default App;
