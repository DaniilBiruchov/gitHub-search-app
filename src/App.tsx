import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FavouritesPages from './pages/FavouritesPages';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/favourites" element={ <FavouritesPages/> }/>
      </Routes>
    </>
  );
}

export default App;
