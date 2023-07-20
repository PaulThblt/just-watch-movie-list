import React, { useState, useEffect } from 'react';
import API_KEY from '../config';

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
        <div>
            <h1>Movie List</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default MovieList;