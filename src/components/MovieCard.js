import { React, useState } from "react";

import "./MovieCard.css";
import MovieReviewsModal from "./MovieReviewsModal";

function MovieCard({movie, onBookmark}) {
    const imageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
    const [showReviews, setShowReviews] = useState(false);

    const handleBookmarkClick = () => {
        onBookmark(movie.id, !movie.isBookmarked);
    }

    const handlePosterClick = () => {
        setShowReviews(true);
    };

    const handleCloseModal = () => {
        setShowReviews(false);
    };

    return (
        <div className='movie-card'>
            <img src={imageUrl} alt={movie.title}/>
            <h3 className='movie-title' onClick={handlePosterClick}>{movie.title}</h3>
            <span
                className={`bookmark-icon ${movie.isBookmarked ? "active" : ""}`}
                onClick={() => handleBookmarkClick()}
            ></span>
            <div className='movie-details'>
                <p className='movie-release-date'>Release date: {movie.release_date}</p>
                <p className='movie-rating'>Rating: {movie.vote_average}</p>
                <p className='movie-overview'>{movie.overview}</p>
            </div>

            {showReviews && <MovieReviewsModal movie={movie} onClose={handleCloseModal}/>}
        </div>
    );
}

export default MovieCard;