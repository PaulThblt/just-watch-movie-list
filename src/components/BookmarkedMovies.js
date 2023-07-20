import React from 'react';

function BookmarkedMovies({ movies }) {
    return (
        <div className='bookmarked-movies'>
            <h2>Bookmarked Movies</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <p>{movie.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookmarkedMovies;