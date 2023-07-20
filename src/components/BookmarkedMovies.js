import React from 'react';
import './BookmarkedMovies.css';

function BookmarkedMovies({ movies }) {
    return (
        <div className='bookmarked-movies-div'>
            <h2 className='bookmarked-movies-title'>Bookmarked Movies</h2>
            <ul className='bookmarked-movies-list'>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <p className='bookmarked-movie'>{movie.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookmarkedMovies;