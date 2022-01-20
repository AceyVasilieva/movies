import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Header from '../Header/Header';
import MoviesList from './MoviesList/MoviesList';
import MovieInfo from './MovieInfo/MovieInfo';
import Favorites from './Favorites/Favorites';

import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<MoviesList />}/>
          <Route path='favorites' element={<Favorites />}/>
          <Route path=':movieId' element={<MovieInfo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;