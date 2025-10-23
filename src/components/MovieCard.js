import React from "react";

function MovieCard({ title, poster, rating, description }) {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} />
      <h2>{title}</h2>
      <p className="rating">⭐ {rating}</p>
      <p>{description}</p>
    </div>
  );
}

export default MovieCard;