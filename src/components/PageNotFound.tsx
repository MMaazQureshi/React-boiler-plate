import React from 'react';
import { Grid } from '@material-ui/core';

const PageNotFound = () => {
  return (
    <>
      <Grid container justify="center">
        <Grid item xs={11} md={6} sm={8}>
          <h3>Oop! the page you are looking for is not found.</h3>
          <p>Please click the home page link at the top to browse to the home page.</p>
        </Grid>
      </Grid>
    </>
  );
};

export default PageNotFound;
