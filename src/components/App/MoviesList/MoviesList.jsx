import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../utils/axiosInstance';
import axios from 'axios';
import ReactTooltip from "react-tooltip";

import Pagination from './Pagination';

import './MoviesList.css';

const MoviesList = () => {

    const [moviesList, setMoviesList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage, setMoviesPerPage] = useState(3);


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

      const indexOfLastMovie = currentPage * moviesPerPage;
      const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
      const currentMovies = moviesList.slice(indexOfFirstMovie, indexOfLastMovie);

    return (
        <div>
            <div className='category'>
                <p>Latest Releases</p>
            </div>
            <div className='movie-list'>
                {currentMovies.map((movie) => (
                    <img className='movie-poster' data-tip={movie.title} data-for='movieName' src={process.env.REACT_APP_IMAGE_URL + movie.poster_path} />
                ))}
                <ReactTooltip id='movieName'/>
                <Pagination moviesPerPage={moviesPerPage} totalMovies={currentMovies.length} />
            </div>
        </div>
    )
}

export default MoviesList;