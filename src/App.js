import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import database from './database/db';
import NavBar from './components/NavBar/NavBar';
import NewMovie from './components/NewMovie/NewMovie';
import MoviesList from './components/MoviesList/MoviesList';
import SingleMovie from './components/SingleMovie/SingleMovie';
function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    setMovies(database);
  }, [])

  const addNewMovie = (newMovie) => {
    movies.unshift(newMovie);
    setMovies(movies);
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route
          exact={true}
          path="/new"
          render={(props) => (
            <NewMovie
              addNewMovie={addNewMovie}
              {...props}
            />
          )}
        />
        <Route
          exact={true}
          path="/movies/:movieID"
          render={(props) => {
            <SingleMovie
              movies={movies}
              {...props}
            />
          }}
        />
        <Route
          exact={true}
          path="/"
          render={(props) => (
            <MoviesList
              movies={movies}
              {...props}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
