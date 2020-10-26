import React, { useEffect, useContext, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';
import { connect } from 'react-redux';
import { UpdateLastLoginPatchRequestAction } from '../../redux/actions/LoginActions';
// import { IProfileOptionsModel } from '../pubic-profile/model/PublicProfileDataModel';
import { RootState } from '../../redux/reducers';
import _ from 'lodash';

export interface PropsFromParent {
  props: RouteComponentProps;
}
export interface PropsFromDispatch {
  updateLastLoginPatchRequest: (
    suppressError: boolean,
    userId: string,
    token: string,
  ) => UpdateLastLoginPatchRequestAction;
}
export interface PropsFromState {}

type CallBackProps = PropsFromDispatch & PropsFromState & PropsFromParent;
const LoginCallBack = () => {
  let auth = useContext(AuthContext);

  const [authState, setAuthState] = useState(auth);

  useEffect(() => {
    debugger;
    auth.completeLogin().then(() => {
      setAuthState(_.cloneDeep(auth));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    debugger;
    if (authState && authState.User && authState.User.profile) {
      auth.redirect();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState]);

  return <h1>Loading...</h1>;
};
// const mapStateToProps = ({ commonData }: RootState): PropsFromState => {
//   return { commonData };
// };

// const mapDispatchToProps = {
//   updateLastLoginPatchRequest,
// };

// export default connect(null, mapDispatchToProps)(React.memo(LoginCallBack));
export default LoginCallBack;
