import { React, useState } from "react";
import API_KEY from "../config";

function MovieCard({movie}) {
    const imageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
    const [isBookmarked, setBookmarked] = useState(false);
    const [showReviews, setShowReviews] = useState(false);

    const handleBookmarkClick = () => {
        setBookmarked(!isBookmarked);
        // onBookmark(movie.id);
    }

    const handlePosterClick = async () => {
        try {
            const response = await fetch(
                ` https://api.themoviedb.org/3/movie//reviews?api_key=${API_KEY}&language=en-US`
            )
            if (!response.ok) {
                throw new Error ('The reviews could not be fetched');
            }

            const data = await response.json();
            console.log(data);
            setShowReviews(true);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='movie-card'>
            <img src={imageUrl} alt={movie.title} onClick={handlePosterClick}/>
            <h3>{movie.title}</h3>
            <span
                className={`bookmark-icon ${isBookmarked ? "active" : ""}`}
                onClick={() => handleBookmarkClick()}
            ></span>
            <div className='movie-details'>
                <p className='movie-release-date'>Release date: {movie.release_date}</p>
                <p className='movie-rating'>Rating: {movie.vote_average}</p>
                <p className='movie-overview'>{movie.overview}</p>
            </div>
        </div>
    );
}

export default MovieCard;