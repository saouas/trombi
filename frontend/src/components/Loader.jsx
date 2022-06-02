import * as React from 'react';
import { Grid } from '@mui/material';

import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <Grid item xs={12}>
      <CircularProgress disableShrink />
    </Grid>);

};

export default Loader;
