import { MovieStore, MoviesContext } from './stores/movieStore';
import React, { useMemo } from 'react';
import { Header } from './components/header/header.jsx';
import { GenresList } from './components/genresList/genresList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MovieDetails } from './components/movieDetails/movieDetails';


function App() {
  const movieStore = useMemo(() => new MovieStore(), []);  
  return (
    <MoviesContext.Provider value={movieStore}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <GenresList />
          </Route>
          <Route path="/movies/:id">
            <MovieDetails />
          </Route>
        </Switch>
      </Router>
    </MoviesContext.Provider>
  );
}

export default App;