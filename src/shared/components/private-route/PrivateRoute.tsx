import React, { useContext, useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import AuthContext from '../../../auth/AuthContext';

interface PrivateRouteProps {
  component: React.FunctionComponent<any> | React.ComponentClass<any>;
  path: string;
}
const PrivateRoute = ({ component: PrivateComponent, ...rest }: PrivateRouteProps) => {
  const auth = useContext(AuthContext);

  const [loggedInState, setLoggedIn] = useState(false);
  useEffect(() => {
    const checkLoggedIn = async () => {
      const loggedIn = await auth.isLoggedIn();
      if (!loggedIn) {
        return await auth.login();
      }
      setLoggedIn(loggedIn);
    };
    checkLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {loggedInState && <Route {...rest} render={(props) => <PrivateComponent {...props}></PrivateComponent>}></Route>}
    </>
  );
};

export default PrivateRoute;
