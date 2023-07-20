import {React, useEffect, useState} from 'react';
import API_KEY from '../config';
import './MovieReviewsModal.css';

function MovieReviewsModal({ movie, onClose }) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const response = fetch(
                    `https://api.themoviedb.org/3/movie/${movie.id}/reviews?api_key=${API_KEY}&language=en-US`
                );
                if (!response.ok) {
                    throw new Error ('The reviews could not be fetched');
                }

                const data = await response.json();
                console.log(data);
                setReviews(data.results);
            } catch (error) {
                console.error(error);
            }
        }

        fetchReviews();
    }, [movie.id]);

    return (
        <div className='movie-reviews-modal-overlay'>
        <div className='movie-reviews-modal'>

            <h2>{movie.title} Reviews</h2>
            <ul>
                {reviews.length > 0
                ? (reviews.map(review => (
                    <li key={review.id}>
                        <p>{review.content}</p>
                        <p>By: {review.author}</p>
                    </li>
                )))
                : (<p className='no-reviews'>No reviews yet :(</p>)}
            </ul>
            <button className='close-button' onClick={onClose}>Close</button>
        </div>
        </div>
    )
}

export default MovieReviewsModal;
