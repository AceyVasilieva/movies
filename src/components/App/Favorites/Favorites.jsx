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
        []
    )

    const update = (id) => {
        const removeFromList = movies.filter(item => item.id !== id);
        localStorage.setItem('favoriteMovies', JSON.stringify(removeFromList));
        setMovies(removeFromList)
    }

    return (
        <div className='content'>
            <div className='page-title'>
                <p>My Favorite</p>
                {movies.map(movie => (
                    <Movie 
                        key={movie.id} 
                        movie={movie}
                        update={update}
                    />
                ))}
            </div>
        </div>
    )
}

export default Favorites;
