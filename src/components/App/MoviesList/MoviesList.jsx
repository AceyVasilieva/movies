/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import ReactTooltip from 'react-tooltip';
import Pagination from 'react-js-pagination';
import {  useNavigate } from 'react-router-dom';

import './MoviesList.css';

const MoviesList = (props) => {

    const navigate = useNavigate();

    const handlePageChange = (pageNumber) => {
        props.setPage(pageNumber);
    }

    useEffect(() => {
        ReactTooltip.rebuild();
      }, [props.moviesList]);

    return (
        <div className='flex-container'>
            <div className='category'>
                <p>Latest Releases</p>
            </div>
            <div className='movie-list'>
                {props.moviesList.map((movie) => (
                    <img 
                        onClick={() => navigate(`/movie-details/${movie.id}`, { replace: true })}
                        key={movie.id} 
                        src={process.env.REACT_APP_IMAGE_URL + movie.poster_path}
                        alt={movie.title}
                        className='movie-poster'
                        data-tip={movie.title} 
                        data-for='movieName'
                    />
                ))}
                <ReactTooltip id='movieName'/>
            </div>
            <nav aria-label='Page navigation' >
                <Pagination
                    activePage={props.page}
                    totalItemsCount={props.totalPages}
                    pageRangeDisplayed={3}
                    itemsCountPerPage={1}
                    onChange={handlePageChange}
                    prevPageText={'Prev'}
                    nextPageText={'Next'}
                    firstPageText={'First'}
                    lastPageText={'Last'}
                    innerClass='pagination'  
                    linkClass='page-link'
                    linkClassFirst='first'
                    linkClassLast='last'
                    activeLinkClass='active'
                />
            </nav>
        </div>
    )
}

export default MoviesList;