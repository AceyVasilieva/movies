import React, { useEffect, useState } from 'react';

import { Movie } from './Movie';

import './Favorites.css';

const Favorites = () => {

    const [movies, setMovies] = useState([]);

    useEffect(
        () => {
            const movies = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
            console.log(movies)
            setMovies(movies)
        },
        [JSON.parse(localStorage.getItem('favoriteMovies'))]
    )

    return (
        <div className='content'>
            <div className='page-title'>
                <p>My Favorite</p>
                {movies.map(movie => (
                    <Movie 
                        key={movie.id} 
                        movie={movie}
                    />
                ))}
            </div>
        </div>
    )
}

export default Favorites;
