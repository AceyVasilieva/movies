import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Header from '../Header/Header';
import MoviesList from './MoviesList/MoviesList';
import MovieDetails from './MovieDetails/MovieDetails';
import Favorites from './Favorites/Favorites';
import axiosInstance from '../../utils/axiosInstance';

import './App.css';

const App = () => {

  const [moviesList, setMoviesList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getMoviesList = async () => {
      const { data } = await axiosInstance.get(`/movie/now_playing`, {
          params: {
            page: page,
          }
        })
      setMoviesList(data.results);
      setTotalPages(data.total_pages);
  };

  useEffect(
    () => {
        getMoviesList();
    }, 
    [page]
)

  return (
    <BrowserRouter>
      <Header setPage={setPage} />
      <div className='main'>
        <Routes>
            <Route path='/' element={<MoviesList moviesList={moviesList} page={page} totalPages={totalPages} setPage={setPage} />}/>
            <Route path='favorites' element={<Favorites />}/>
            <Route path='/movie-details/:id' element={<MovieDetails moviesList={moviesList} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;