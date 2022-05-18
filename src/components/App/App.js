import React from 'react';
import './App.css'
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';

import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Main/>
        </Route>
        <Route path='/signup'>
          <Register/>
        </Route>
        <Route path='/signin'>
          <Login/>
        </Route>
        <Route path='/profile'>
          <Profile/>
        </Route>
        <Route path='/movies'>
          <Movies/>
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
    </>
  )
}

export default App;