import React from "react";
import { data } from "./data.js"
import Card from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
      
const style = {
  movie: {
    minWidth: '285px',
  }
}

class Movies extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      var cards = data[this.props.director].map((movie, i)=>
      <Card style={style.movie} variant="outlined">
        <CardContent>
          <Typography>
            {movie.name}
          </Typography>
        </CardContent>
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