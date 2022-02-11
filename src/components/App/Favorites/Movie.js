/* eslint-disable react/prop-types */
import React from 'react'
import { useNavigate } from 'react-router-dom';

import './Movie.css';

export const Movie = ({ movie, getMovies }) => {

    const navigate = useNavigate();

    const removeFromFavorites = (event) => {
        event.stopPropagation ();
        const movies = JSON.parse(localStorage.getItem('favoriteMovies'));
        const filtered = movies.filter(item => item.id !== movie.id);
        localStorage.setItem('favoriteMovies', JSON.stringify(filtered));
        getMovies();
    }

    const handleMovieClick = () => {
        navigate(`/movie-details/${movie.id}`, { replace: true });
    }

    return (
        <div className='movie-container' onClick={handleMovieClick}>
            <img 
                src={process.env.REACT_APP_IMAGE_URL + movie.poster_path} 
                alt={movie.title}
                className='favorite-poster'
            />
            <div className='details'>
                <p className='movie-title'>
                    {movie.title}
                </p>
                <p className='movie-overview'>
                    {movie.overview}
                </p>
            </div>
            <div
                className='remove-from-favorites' 
                onClick={removeFromFavorites}
            >
                Unfavorite
            </div>
        </div>
  )
}
