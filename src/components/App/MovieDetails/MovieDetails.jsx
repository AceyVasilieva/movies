/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
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
                    <div>Back to List</div>
                </div> 
                <div onClick={goToNextMovie} className='back-next-button'>
                    <div>Next Movie</div>
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
                        {isFavorite ? 'Remove' : 'Add to favorite'}
                    </div>
                    <div className='title'>
                        {movie.title}
                    </div>
                    <div className='movie-details'>
                            <p className='score'>
                                Score: {movie.vote_average}
                            </p>
                            <p className='rating'>
                                Rating: {isAdult ? 'NC-17' : 'PG'}
                            </p>
                            <p className='release-date'>
                                Release Date: {releaseDate}
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