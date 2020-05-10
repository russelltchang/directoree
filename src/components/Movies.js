import React from "react";
import { data } from "./data.js"
import Card from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
      
const style = {
  movie: {
    minWidth: '285px',
    maxWidth: '285px',
    margin: 18
  }
}

class Movies extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      var cards = data[this.props.director].map((movie, i)=>
      <Card style={style.movie} variant="outlined">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            //should be images/{movie}, once all photos are saved
            image="/images/Lord of the Rings - The Fellowship of the Ring.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
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
}

export default Movies;