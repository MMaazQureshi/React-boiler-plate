import React, { useContext, useEffect } from 'react';
import AuthContext from '../../auth/AuthContext';

const SilentRenew = () => {
  const auth = useContext(AuthContext);

  useEffect(() => {
    const silentRenew = async () => {
      await auth.signinSilentCallback();
    };
    silentRenew();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <h1>Loading...</h1>;
};
export default SilentRenew;
