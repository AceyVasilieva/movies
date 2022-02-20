/* eslint-disable react/prop-types */
import React from 'react'

import './Movie.css';

export const Movie = (props) => {

  return (
    <div className='movie-container'>
        <img 
            src={process.env.REACT_APP_IMAGE_URL + props.movie.poster_path} 
            alt={props.movie.title}
            className='favorite-poster'
        />
        <div className='details'>
            <div className='remove-from-favorites' 
                onClick={() => props.update(props.movie.id)}
            >
                Unfavorite
            </div>
            <p className='movie-title'>
                {props.movie.title}
            </p>
            <p className='movie-overview'>
                {props.movie.overview}
            </p>
        </div>
    </div>
  )
}
