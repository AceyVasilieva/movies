import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Header from '../Header/Header';
import Home from './Home/Home';
import MovieInfo from './MovieInfo/MovieInfo';
import Favorites from './Favorites/Favorites';

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Header />
        </div>
      </div>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='favorites' element={<Favorites />}/>
          <Route path=':movieId' element={<MovieInfo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;