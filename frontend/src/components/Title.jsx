import { Typography } from "@mui/material";
import { Grid } from "@mui/material";

const Title = ({title, image = null}) => {
  return( 
  <Grid item xs={12} justifyContent="center" textAlign="center">
    <Grid item>
      <Typography variant="h1" component="div" gutterBottom>
      {title}
      </Typography>
    </Grid>
  </Grid> 
  )   
};

export default Title;
