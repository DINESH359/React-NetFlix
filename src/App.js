import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); // Store detailed movie info

  // Function to search for movies
  const searchMovies = async (title) => {
    try {
      console.log(`Searching for movies with title: ${title}`);
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      console.log('Fetched movies:', data.Search);
      setMovies(data.Search);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }

  // Function to fetch detailed movie info by IMDb ID
  const fetchMovieDetails = async (imdbID) => {
    try {
      console.log(`Fetching details for movie ID: ${imdbID}`);
      const response = await fetch(`${API_URL}&i=${imdbID}`);
      const data = await response.json();
      console.log('Fetched movie details:', data);
      setSelectedMovie(data);  // Update state with the fetched movie details
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  }

  // Effect to log the selectedMovie when it updates
  useEffect(() => {
    if (selectedMovie) {
      console.log('selectedMovie updated:', selectedMovie);
    }
  }, [selectedMovie]);

  useEffect(() => {
    searchMovies("Batman");  // Initial search
  }, []);

 
  if(selectedMovie)
  {
return <MovieDetails movie={selectedMovie} />;
  }
  return (
    <div className="app">
      <h1>NetFlix</h1>
      <div className='search'>
        <input
          placeholder='Search for a movie'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
          src={SearchIcon}
          alt='Search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} onMovieClick={fetchMovieDetails} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

      {/* Render MovieDetails component when a movie is selected */}
      
    </div>
  );
}

export default App;
