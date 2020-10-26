import React, { useEffect, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';

export interface CallBackProps {}

const LogoutCallBack = ({ history }: RouteComponentProps) => {
  const auth = useContext(AuthContext);

  useEffect(() => {
    auth.completeLogout().then((resp) => {
      history.push('/');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // handle authentication here.
  return <div></div>;
};

export default LogoutCallBack;
