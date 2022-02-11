/* eslint-disable react/prop-types */
import React from 'react'

import './Movie.css';

export const Movie = ({ movie }) => {

    const removeFromFavorites = () => {
        const movies = JSON.parse(localStorage.getItem('favoriteMovies'));
        const filtered = movies.filter(item => item.id !== movie.id);
        localStorage.setItem('favoriteMovies', JSON.stringify(filtered));
    }

  return (
    <div className='movie-container'>
        <img 
            src={process.env.REACT_APP_IMAGE_URL + movie.poster_path} 
            alt={movie.title}
            className='favorite-poster'
        />
        <div className='details'>
            <div className='remove-from-favorites' 
                onClick={removeFromFavorites}
            >
                Unfavorite
            </div>
            <p className='movie-title'>
                {movie.title}
            </p>
            <p className='movie-overview'>
                {movie.overview}
            </p>
        </div>
    </div>
  )
}
