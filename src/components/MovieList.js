import MovieCard from './MovieCard';
import './MovieList.css';

function MovieList({ movies, handleBookmark }) {

    return (
        <div className='movie-list'>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} onBookmark={handleBookmark} />
            ))}
        </div>
    )
}

export default MovieList;