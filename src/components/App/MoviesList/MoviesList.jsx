import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../utils/axiosInstance';

import './MoviesList.css';

const MoviesList = () => {

    const [moviesList, setMoviesList] = useState([]);

    const getMoviesList = async () => {
        const data = await axiosInstance.get('/movie/now_playing')
        setMoviesList(data.data.results)
    };


    useEffect(
        () => {
            getMoviesList();
        }, 
        []
    )

    return (
        <div>
            {moviesList.map((movie) => <img src={process.env.REACT_APP_IMAGE_URL + movie.poster_path} />)}
        </div>
    )
}

export default MoviesList;