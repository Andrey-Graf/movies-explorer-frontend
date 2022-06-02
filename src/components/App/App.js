import React from 'react';
import './App.css'
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import { Route, Switch, useHistory, Redirect } from 'react-router-dom';

import { shortMovies } from '../../utils/constants';
import {
  MOVIES_NOT_FOUND,
  MOVIES_SERVER_ERR,
  INVALID_ERR_MESSAGE,
  AUTH_ERR_MESSAGE,
  SERVER_ERR_MESSAGE,
  USER_EMAIL_ERROR,
  UPDATE_MESSAGE,
  ERR_UPDATE_MESSAGE,
  TOKEN_FORMAT_ERR_MESSAGE,
  TOKEN_ERR_MESSAGE,
  NOT_SAVED_ERR_MESSAGE,
  EXIT_ERR_MESSAGE
} from '../../utils/errorMessage';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [token, setToken] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isSavedMoviesLoading, setIsSavedMoviesLoading] = React.useState(true);
  const [isMoviesLoading, setIsMoviesLoading] = React.useState(false);
  const [foundSavedMovies, setFoundSavedMovies] = React.useState([]);

  const history = useHistory();

  const resetMessage = () => { setMessage(null) };

  const tokenCheck = React.useCallback(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      setToken(token);
      mainApi.checkToken(token).then((res) => {
        if (res) {
          setIsLoggedIn(true);
          history.push('/');
        }
      }).catch((err) => {
        if (err.status === 400) {
          console.log(TOKEN_FORMAT_ERR_MESSAGE);
        } else if (err.status === 401) {
          console.log(TOKEN_ERR_MESSAGE);
        } else if (err.status === 500) {
          errorMessage(SERVER_ERR_MESSAGE);
        }
      });
    }
  }, [history]);

  React.useEffect(() => {
    tokenCheck();
  }, [tokenCheck]);

  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (isLoggedIn) {
      mainApi.getUserInfo(token).then((userData) => {
        setCurrentUser(userData);
        localStorage.setItem('name', userData.name);
        localStorage.setItem('email', userData.email);
      })
      .catch((err) => {
              if (err === "500") {
                setMessage(MOVIES_SERVER_ERR);
              }
              console.log(err);
            });
    }
  }, [isLoggedIn])
  
  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (isLoggedIn) {
      const moviesLocalStorage = localStorage.getItem('movies');
      const savedMovieLocalStorage = localStorage.getItem('savedMovies');

      if (!moviesLocalStorage) {
        moviesApi
          .getMovies(token)
          .then((res) => {
            localStorage.setItem('movies', JSON.stringify(res || []));
            setMovies(res || []);
            setIsMoviesLoading(false);
          })
          .catch((err) => {
            if (err === "500") {
              setMessage(MOVIES_SERVER_ERR);
            }
            console.log(err);
          });
      } else {
        setMovies(JSON.parse(moviesLocalStorage));
        setIsMoviesLoading(false);
      }

      if (!savedMovieLocalStorage) {
        mainApi
          .getUserMovies(token)
          .then((res) => {
            localStorage.setItem('savedMovies', JSON.stringify(res || []));
            setSavedMovies(res || []);
            setIsSavedMoviesLoading(false);
          })
          .catch((err) => {
            if (err === "500") {
              setMessage(MOVIES_SERVER_ERR);
            }
            console.log(err);
          });
      } else {
        setSavedMovies(JSON.parse(savedMovieLocalStorage));
        setIsSavedMoviesLoading(false);
      }
    }
  }, [isLoggedIn, token]);

  function errorMessage(message) {
    setMessage(message);
    setTimeout(() => setMessage(''), 1000);
  }

  // Функция регистрации пользователя.
  function handleRegister(data) {
    setIsLoading(true);
    mainApi.register(data)
      .then(() => {
        history.push('/signin');
      }).catch((err) => {
        if (err.status === 400) {
          errorMessage(INVALID_ERR_MESSAGE);
        } else if (err.status === 409) {
          errorMessage(USER_EMAIL_ERROR);
        } else if (err.status === 500) {
          errorMessage(SERVER_ERR_MESSAGE);
        }
      })
  }

// Функция Авторизации. 
  function handleAuthorize(data) {
    setIsLoading(true);
    mainApi.authorize(data)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setToken(res.token);
        setIsLoggedIn(true);
      }).catch((err) => {
        if (err.status === 400) {
          errorMessage(INVALID_ERR_MESSAGE);
        } else if (err.status === 401) {
          errorMessage(AUTH_ERR_MESSAGE);
        } else if (err.status === 500) {
          errorMessage(SERVER_ERR_MESSAGE);
        }
      })
  }

  // Обновить данные аккаунта
  function handleUpdateUser(data) {
    mainApi.setUserInfo(data, token).then((res) => {
      setCurrentUser(res);
      localStorage.setItem('name', res.name);
      localStorage.setItem('email', res.email);
      errorMessage(UPDATE_MESSAGE);
    }).catch((err) => {
      if (err) {
        errorMessage(ERR_UPDATE_MESSAGE);
      }
      console.log(err);
    })
  }

  //Поиск фильмов
  function handleMovieSearch(query) {
    const searchMovie = query.toLowerCase();

    const searchResult = movies.filter((item) => {
      return item.nameRU.toLowerCase().includes(searchMovie);
    });
    if (searchResult.length === 0) {
      setMessage(MOVIES_NOT_FOUND);
      setMovies([]);
    } else {
      setMovies(searchResult);
      resetMessage();
    }
  }

  // Сохранить фильм
  function handleMovieLike(data) {
    mainApi
      .saveMovies(data, token)
      .then((res) => {
        localStorage.setItem("savedMovies", JSON.stringify([res, ...savedMovies]));
        setSavedMovies([res, ...savedMovies]);
        setFoundSavedMovies([res, ...savedMovies]);
        setMessage('');
      })
      .catch((err) => {
        console.log(NOT_SAVED_ERR_MESSAGE`${err}`);
        setMessage(err);
      });
  }

  // Поиск в сохраненных фильмах
  function handleSavedMovieSearch(query) {
    const searchTerm = query.toLowerCase();
    if (searchTerm === "") {
      setFoundSavedMovies([]);
      resetMessage();
      return;
    }
    const savedMovieSearchResult = savedMovies.filter((item) => {
      return item.nameRU.toLowerCase().includes(searchTerm);
    });
    if (savedMovieSearchResult.length === 0) {
      setMessage(MOVIES_SERVER_ERR);
      setFoundSavedMovies([]);
    } else {
      setFoundSavedMovies(savedMovieSearchResult);
      resetMessage();
    }
  }

  function sortShortMovies(movies) {
    const shortMoviesArray = movies.filter(
      (movie) => movie.duration <= shortMovies
    );
    return shortMoviesArray;
  }

  // Функция удаления карточки.
  function handleMovieDelete(movie) {
    const savedMovie = savedMovies.find((e) => e.movieId === movie.id);
    const newSaveMovie = (savedMovies.filter((i) => i._id !== savedMovie._id));
    mainApi.deleteMovies(savedMovie._id, token).then(() => {
      setSavedMovies(newSaveMovie);
      setFoundSavedMovies(newSaveMovie);
      localStorage.setItem("savedMovies", JSON.stringify(newSaveMovie));
    }).catch((err) => {
      console.log(err);
    })
  }

  // Выйти из аккаунта
  function handleSignOut() {
    mainApi
      .signOut()
      .then(() => {
        setIsLoggedIn(false);
        localStorage.removeItem('jwt');
        localStorage.removeItem('movies');
        localStorage.removeItem('savedMovies');
        localStorage.removeItem('currentUser');
        setToken('');
        history.push('/');
      })
      .catch((err) => {
        console.log(EXIT_ERR_MESSAGE`${err}`);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path='/'>
          <Main
            loggedIn={isLoggedIn}
          />
        </Route>
        <ProtectedRoute
          path='/movies'
          loggedIn={isLoggedIn}
          message={message}
          component={Movies}
          movies={movies}
          searchMovie={handleMovieSearch}
          savedMovies={savedMovies}
          isLoading={isMoviesLoading}
          movieSave={handleMovieLike}
          movieUnSave={handleMovieDelete}
          sortShortMovies={sortShortMovies}
        />
        <ProtectedRoute
          path='/saved-movies'
          loggedIn={isLoggedIn}
          message={message}
          component={SavedMovies}
          isLoading={isSavedMoviesLoading}
          savedMovies={savedMovies}
          foundSavedMovies={foundSavedMovies}
          movieUnSave={handleMovieDelete}
          searchSavedMovie={handleSavedMovieSearch}
          sortShortMovies={sortShortMovies}
        />
        <ProtectedRoute
          path='/profile'
          loggedIn={isLoggedIn}
          isLoading={isLoading}
          message={message}
          component={Profile}
          onEditProfile={handleUpdateUser}
          onSignOut={handleSignOut}
        />
        <Route path='/signup'>
          {isLoggedIn ? (
            <Redirect to='/signin' />
          ) : (
            <Register
              onRegister={handleRegister}
              isLoading={isLoading}
              message={message}
            />
          )}
        </Route>
        <Route path='/signin'>
          {isLoggedIn ? (
            <Redirect to='/movies' />
          ) : (
            <Login
              onLogin={handleAuthorize}
              isLoading={isLoading}
            />
          )}
        </Route>
        <Route path='*'>
          <NotFound loggedIn={isLoggedIn} />
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;