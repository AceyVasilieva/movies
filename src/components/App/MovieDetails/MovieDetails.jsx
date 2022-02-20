/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FaStar, FaRegStar } from 'react-icons/fa';
import axiosInstance from '../../../utils/axiosInstance';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';

import './MovieDetails.css';

const MovieDetails = (props) => {

    const [movie, setMovie] = useState(null); 
    const [favoritesList, setFavoritesList] = useState([]);

    const { id } = useParams();

    const navigate = useNavigate();

    const addToFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
        
        if (!favorites.find((el) => el.id === movie.id)) {
            favorites.push(movie)
            localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
            setFavoritesList(favorites);
        } else {
            const newFavorites = favorites.filter((el) => el.id !== movie.id)
            localStorage.setItem('favoriteMovies', JSON.stringify(newFavorites))
            setFavoritesList(newFavorites)
        }
    }

    const getMovieDetails = async () => {
        const { data } = await axiosInstance.get(`/movie/${id}`)
        setMovie(data)
    };

    const goToNextMovie = () => {
        const currentIdIndex = props.moviesList.map((el) => el.id).indexOf(+id);
        if (currentIdIndex === props.moviesList.length - 1) {
            alert('This is the last movie on the page');
            return
        } else {
            navigate(`/movie-details/${props.moviesList[currentIdIndex + 1].id}`);
        }
    }

    const goBackToList = () => {
        navigate('/');
    }

    useEffect(
        () => {
            const favorites = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
            setFavoritesList(favorites);
        },
        []
    )

    useEffect(
        () => {
            getMovieDetails()
        }, 
        [id]
    )

    if(!movie) {
        return <div>Loading...</div>
    }

    const isFavorite = !!favoritesList.find((el) => el.id === movie.id);
    const isAdult = !!movie.adult;
    const releaseDate = moment(movie.release_date).format('LL');

    return (
        <div className='details-container'>
            <img 
                src={process.env.REACT_APP_IMAGE_URL + (movie.backdrop_path || movie.poster_path)} 
                alt='Background image' 
                className='background-img' 
            />
            <div className='top-buttons'>
                <div onClick={goBackToList} className='back-next-button'>
                    <FontAwesomeIcon className='left-arrow-img' icon={faArrowLeft} />
                    <div className='back-button-full-size'>Back to List</div>
                    <div className='back-button-phone-size'>Back</div>
                </div> 
                <div onClick={goToNextMovie} className='back-next-button'>
                    <div className='next-button-full-size'>Next Movie</div>
                    <div className='next-button-phone-size'>Next</div>
                    <FontAwesomeIcon className='right-arrow-img' icon={faArrowRight} />
                </div>
            </div>
            <div className='main-content'>
                <img 
                    src={process.env.REACT_APP_IMAGE_URL + movie.poster_path} 
                    alt={movie.title} 
                    className='poster' 
                />
                <div className='main-text'>
                    <div className='add-to-favorite' onClick={addToFavorite}>
                        <div className='add-to-favorite-full-size'>
                            {isFavorite ? 'Remove' : 'Add to favorite'}
                        </div>
                        <div className='add-to-favorite-phone-size'>
                            {isFavorite ? <FaStar /> : <FaRegStar /> }
                        </div>
                    </div>
                    <div className='title'>
                        {movie.title}
                    </div>
                    <div className='movie-details'>
                            <div className='average-info'>
                                <div className='score phone-size-movie-details'>
                                    Score: 
                                    <br />
                                    {movie.vote_average}
                                </div>
                                <div className='rating phone-size-movie-details'>
                                    Rating: 
                                    <br />
                                    {isAdult ? 'NC-17' : 'PG'}
                                </div>
                                <div className='release-date phone-size-movie-details'>
                                    Release Date: 
                                    <br />
                                    {releaseDate}
                                </div>
                            </div>
                            <div className='overview'>
                                {movie.overview}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;