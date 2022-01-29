import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axiosInstance from '../../../utils/axiosInstance';
import { useParams } from 'react-router-dom';

import './MovieDetails.css';

const MovieDetails = () => {

    const { id } = useParams();

    const [movie, setMovie] = useState(null);

    const getMovieDetails = async () => {
        const { data } = await axiosInstance.get(`/movie/${id}`)
        setMovie(data)
    };

    useEffect(
        () => {
            getMovieDetails()
        }, 
        [id]
    )

    if(!movie) {
        return <div>Loading...</div>
    }

    return (
        <div className='details-container'>
            <img 
                src={process.env.REACT_APP_IMAGE_URL + (movie.backdrop_path || movie.poster_path)} 
                alt='Background image' 
                className='background-img' />
            <div className='top-buttons'>
                <a href='' className='back-button'>
                    <FontAwesomeIcon className='left-arrow-img' icon={faArrowLeft} />
                    <div>Back to List</div>
                </a> 
                <a href='' className='next-button'>
                    <div>Next Movie</div>
                    <FontAwesomeIcon className='right-arrow-img' icon={faArrowRight} />
                </a>
            </div>
            <div className='main-content'>
                <img 
                    src={process.env.REACT_APP_IMAGE_URL + movie.poster_path} 
                    alt='Poster image' 
                    className='poster' 
                />
                <div className='main-text'>
                    <span className='add-to-favorite'>
                        Add to favorite
                    </span>
                    <div className='title'>
                        {movie.title}
                    </div>
                    <div className='movie-details'>
                            <p className='score'>
                                Score: {movie.vote_average}
                            </p>
                            <p className='release-date'>
                                Release Date: {movie.release_date}
                            </p>
                            <p className='overview'>
                                {movie.overview}
                            </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;