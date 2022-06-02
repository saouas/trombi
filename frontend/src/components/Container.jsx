import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Container = ({children}) => {
  return <Box sx={{ flexGrow: 1 }} >
      <Grid container justifyContent="center" alignContent="center" alignItems="center" direction="row">
        {children}
      </Grid>
    </Box>
};

export default Container;
