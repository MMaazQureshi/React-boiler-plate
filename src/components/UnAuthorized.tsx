import React from 'react';
import { Grid } from '@material-ui/core';

const UnAuthorized = () => {
  return (
    <>
      <Grid container justify="center">
        <Grid item xs={11} md={6} sm={8}>
          <h3>Unauthorised to access</h3>
          <p>
            You do not have necessary permission to access the resource you are trying to access.
            Please contact your system administrator
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default UnAuthorized;
