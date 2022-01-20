import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../utils/axiosInstance';
import ReactTooltip from "react-tooltip";

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

    useEffect(() => {
        ReactTooltip.rebuild();
      }, [moviesList]);

    return (
        <div className='movie-list'>
            {moviesList.map((movie) => (
                <img className='movie-poster' data-tip={movie.title} data-for='movieName' src={process.env.REACT_APP_IMAGE_URL + movie.poster_path} />
            ))}
            <ReactTooltip id='movieName'/>
        </div>
    )
}

export default MoviesList;