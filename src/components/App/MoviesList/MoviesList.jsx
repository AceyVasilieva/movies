import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../utils/axiosInstance';
import ReactTooltip from 'react-tooltip';
import Pagination from 'react-js-pagination';
import {  useNavigate } from 'react-router-dom';

import './MoviesList.css';

const MoviesList = () => {

    const [moviesList, setMoviesList] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();

    const getMoviesList = async () => {
        const { data } = await axiosInstance.get(`/movie/now_playing`, {
            params: {
              page: page,
            }
          })
        setMoviesList(data.results)
        setTotalPages(data.total_pages)
    };

    const handlePageChange = (pageNumber) => {
        setPage(pageNumber);
    }

    useEffect(
        () => {
            getMoviesList();
        }, 
        [page]
    )

    useEffect(() => {
        ReactTooltip.rebuild();
      }, [moviesList]);

    return (
        <div>
            <div className='category'>
                <p>Latest Releases</p>
            </div>
            <div className='movie-list'>
                {moviesList.map((movie) => (
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
                    activePage={page}
                    totalItemsCount={totalPages}
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