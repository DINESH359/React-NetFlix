import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movie }) => {
  if (!movie) return null;

  console.log('Rendering MovieDetails with movie:', movie); // Log to check if MovieDetails is rendering

  return (
    <div className="movie-details">
      <div className="details-header">
        <h2>{movie.Title} ({movie.Year})</h2>
        <img src={movie.Poster} alt={`${movie.Title} Poster`} />
      </div>
      <div className="details-info">
        <p><strong>Rated:</strong> {movie.Rated}</p>
        <p><strong>Released:</strong> {movie.Released}</p>
        <p><strong>Runtime:</strong> {movie.Runtime}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Writer:</strong> {movie.Writer}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Language:</strong> {movie.Language}</p>
        <p><strong>Country:</strong> {movie.Country}</p>
        <p><strong>Awards:</strong> {movie.Awards}</p>
        <p><strong>BoxOffice:</strong> {movie.BoxOffice}</p>
        <div className="ratings">
          <h3>Ratings:</h3>
          {movie.Ratings.map((rating, index) => (
            <p key={index}><strong>{rating.Source}:</strong> {rating.Value}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
