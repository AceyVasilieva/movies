import React, { useEffect, useState } from 'react'
import axiosInstance from '../../../utils/axiosInstance';
import ReactTooltip from "react-tooltip";
import ReactPaginate from 'react-paginate';

import './MoviesList.css';

const MoviesList = () => {

    const [moviesList, setMoviesList] = useState([]);
    const [page, setPage] = useState(1);

    const getMoviesList = async () => {
        const data = await axiosInstance.get(`/movie/now_playing`, {
            params: {
              page: page,
            }
          })
        setMoviesList(data.data.results)
    };

    const handlePageChange = (data) => {
        setPage(data.selected + 1);
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
                <ReactPaginate 
                    previousLabel={'Prev'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    pageCount={1000}
                    marginPagesDisplayed={0}
                    onPageChange={handlePageChange}
                    containerClassName='pagination justify-content-center'
                    pageClassName='page-item'
                    pageLinkClassName='page-link'
                    previousClassName='page-item'
                    previousLinkClassName='page-link'
                    nextClassName='page-item'
                    nextLinkClassName='page-link'
                    breakClassName='page-item'
                    breakLinkClassName='page-link'
                    activeClassName='active'
                />
            </nav>
        </div>
    )
}

export default MoviesList;