import React from "react";

function MovieCard({title,posterURL,genres}) {
  
  return (
    <div className="movie-card">
      <img src={props.posterURL} alt={props.title} />
      <h2>{props.title}</h2>
      <small>{props.genres.join(",") }</small>
</div>


)





}
