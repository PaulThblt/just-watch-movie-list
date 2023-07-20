import './App.css';

import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import BookmarkedMovies from './components/BookmarkedMovies';
import API_KEY from './config';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`
        );
        if (!response.ok) {
          throw new Error ('The movies could not be fetched');
        }

        const data = await response.json();
        const moviesWithBookmarks = data.results.map(movie => {
          return {
            ...movie,
            isBookmarked: false,
          };
        });
        console.log(moviesWithBookmarks);
        setMovies(moviesWithBookmarks);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, []);

  const handleBookmark = (movieId, isBookmarked) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) => {
        if (movie.id === movieId) {
          return { ...movie, isBookmarked };
        }
        return movie;
      })
    );
  };

  return (
    <div className="App">
      <h1 className='title'>Now Playing</h1>
      <MovieList movies={movies} handleBookmark={handleBookmark}/>
      <BookmarkedMovies movies={movies.filter(movie => movie.isBookmarked)}/>
    </div>
  );
}

export default App;
