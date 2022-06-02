import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import './UserCard.css';

const UserCard = ({ name = 'Salim', photo = 'http://i.annihil.us/u/prod/marvel/i/mg/4/60/52695285d6e7e.jpg'}) => {
  return (
    <Grid item>
      <Grid>
        <Card className="user_card">
          <CardActionArea>
            <CardMedia
              component="img"
              image={photo}
              height="160"
              alt={`$photo de ${name}`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" textAlign="center">
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  )
};

export default UserCard;