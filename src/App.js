import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import database from './database/db';
import NavBar from './components/NavBar/NavBar';
import NewMovie from './components/NewMovie/NewMovie';
import MoviesList from './components/MoviesList/MoviesList';
import SingleMovie from './components/SingleMovie/SingleMovie';
import Footer from './components/Footer/Footer';
function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    setMovies(database);
  }, [])

  const addNewMovie = (newMovie) => {
    movies.unshift(newMovie);
    setMovies(movies);
  }

  const updateMovie = (movieId, newInfo) => {
    console.log("moiveId = ");
    console.log(movieId);
    console.log("newInfo = ");
    console.log(newInfo)
    const updatedVal = movies.map( m => m.id === movieId ? {...m, newInfo} : m);
    console.log(updatedVal);
    setMovies(updatedVal);
  }

  const deleteMovie = (movieId) => {
    const movieToDelete = movies.findIndex(movie => movie.id === movieId);
    movies.splice(movieToDelete, 1);
    setMovies(movies)
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
          render={(props) => (
            <SingleMovie
              movies={movies}
              updateMovie={updateMovie}
              deleteMovie={deleteMovie}
              {...props}
            />
          )}
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
      <Footer/>
    </div>
  );
}

export default App;
