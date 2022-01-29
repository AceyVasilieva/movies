import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Header from '../Header/Header';
import MoviesList from './MoviesList/MoviesList';
import MovieDetails from './MovieDetails/MovieDetails';
import Favorites from './Favorites/Favorites';

import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <div className='main'>
        <Routes>
            <Route path='/' element={<MoviesList />}/>
            <Route path='*' element={<MoviesList />}/>
            <Route path='favorites' element={<Favorites />}/>
            <Route path='/movie-details/:id' element={<MovieDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;