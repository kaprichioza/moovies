import { MovieStore } from './stores/movieStore';
import React, { useEffect, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { Header } from './components/header/header.jsx';
import { GenresList } from './components/genresList/genresList';
import { GenreItems } from './components/genreItems/genreItems';

function App() {
  const movieStore = useMemo(() => new MovieStore(), []);
  const { movies, isLoading, fetch } = movieStore;
  const moviesGenre = {};
  const genreItems = {};
  const filmsData = {};
  useEffect(() => {
    fetch()
  }, []);
  function parseData() {
    const moviesContext = JSON.parse(JSON.stringify(movies));
    moviesContext.forEach(el => {
      genreItems[el.title] = el.genres;
      filmsData[el.title] = el;
    });

    console.log(filmsData)
    moviesContext.forEach(element => {
      element.genres.forEach(element => {
        moviesGenre[element] = element;
      });
    });
  }
  return (
    <div className="App">
      <Header></Header>
      {isLoading ? 'loading..' : parseData()}
      <GenresList moviesGenre={moviesGenre}
        genreItems={genreItems}
        filmsData={filmsData}></GenresList>
    </div>
  );
}

export default observer(App);

