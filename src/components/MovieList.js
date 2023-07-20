import React, { useState, useEffect } from 'react';
import API_KEY from '../config';
import './MovieList.css';

function MovieCard({movie}) {
    const imageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

    return (
        <div className='movie-card'>
            <img src={imageUrl} alt={movie.title} />
            <h3>{movie.title}</h3>
            <div className='movie-details'>
                <p className='movie-release-date'>Release date: {movie.release_date}</p>
                <p className='movie-rating'>Rating: {movie.vote_average}</p>
                <p className='movie-overview'>{movie.overview}</p>
            </div>
        </div>
    );
}

function MovieList() {
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
                setMovies(data.results);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchMovies();
    }, []);

    return (
        <div className='movie-list'>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default MovieList;