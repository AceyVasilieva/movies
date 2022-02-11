import React, { useEffect, useState } from 'react';

import { Movie } from './Movie';

import './Favorites.css';

const Favorites = () => {

    const [movies, setMovies] = useState([]);

    const getFavoriteMoviesFromLocalStorage = () => {
        const movies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
        setMovies(movies);
    }

    useEffect(
        () => {
            getFavoriteMoviesFromLocalStorage();
        },
        []
    )

    return (
        <div className='content'>
            <div className='page-title'>
                <p>My Favorite</p>
                {!movies.length && (
                    <p className='favorites-default-text'>No favorites yet</p>
                )}
                {movies.map(movie => (
                    <Movie 
                        key={movie.id} 
                        movie={movie}
                        getMovies={getFavoriteMoviesFromLocalStorage}
                    />
                ))}
            </div>
        </div>
    )
}

export default Favorites;
