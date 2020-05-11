import React from "react";
import { data } from "./data.js"
import Card from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
      
const useStyles = makeStyles((theme) => ({
  movie: {
    minWidth: '285px',
    maxWidth: '285px',
    height: '520px',
    margin: 18,
  },
  cardContent: {
    height: '60px'
  }
}));

const Movies = (props) => {
  const classes = useStyles();


    var cards = data[props.director].map((movie, i)=>
      <Card className={classes.movie} variant="outlined">
        <CardActionArea>
          <CardMedia
            className={classes.cardMedia}
            component="img"
            alt="Movie Poster"
            title="Movie Poster"
            height="400"
            image={"/images/" + movie.image}
          />
          <CardContent className={classes.cardContent}>
            <Typography>
              {movie.name} ({movie.year})
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )

    return (
      <>
        {cards}
      </>
    )
  }

  export default Movies;