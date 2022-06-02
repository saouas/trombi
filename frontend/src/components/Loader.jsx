import * as React from 'react';
import { Grid } from '@mui/material';

import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <Grid container justifyContent="center">
      <CircularProgress disableShrink/>
    </Grid>);

};

export default Loader;
