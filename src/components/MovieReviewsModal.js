import React from 'react';

function MovieReviewsModal({ movie, showReviews, onClose }) {
    return (
        <div className={`movie-reviews-modal ${showReviews ? "active" : ""}`}>
            <div className='movie-reviews-modal-content'>
                <h3>Reviews for {movie.title}</h3>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default MovieReviewsModal;
