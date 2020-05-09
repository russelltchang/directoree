import React from "react";
import Card from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
      
const style = {
  movie: {
    minWidth: '285px',
  }
}

class Movie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var movieList = ['Shawshank Redemption', 'Green Mile', 'Saving Private Ryan']
    var movies = movieList.map((movie, i)=>
      <Card style={style.movie} variant="outlined">
        <CardContent>
          <Typography>
            {movie}
          </Typography>
        </CardContent>
      </Card>
    )

    return (
      <React.Fragment>
        {movies}
      </React.Fragment>
    )
  }
}

export default Movie;