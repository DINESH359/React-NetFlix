import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type }, onMovieClick }) => {
  return (
    <div className="movie" onClick={() => {
      console.log(`Movie clicked: ${Title}`);  // Log the movie click event
      onMovieClick(imdbID);
    }} key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
