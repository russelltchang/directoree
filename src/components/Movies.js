import React from "react";
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
    var movieList = ['Shawshank Redemption', 'Green Mile', 'Saving Private Ryan']
    //take the above out...use props and a separate data file to pull movies on click
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
      <>
        {movies}
      </>
    )
  }
}

export default Movies;