import React from "react";
import { data } from "./data.js"
import Movie from "./Movie"

const Movies = (props) => {

  var cards = data[props.director].map((movie, i)=>
    <Movie 
      name={movie.name} 
      year={movie.year} 
      desc={movie.desc} 
      image={movie.image}
      rating={movie.rating}
    />
  )

  return (
    <>
      {cards}
    </>
  )
}

export default Movies;