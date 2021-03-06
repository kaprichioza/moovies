import { Typography } from '@material-ui/core';
import React, { useEffect, useContext } from 'react';
import { GenreItems } from '../genreItems/genreItems';
import style from './genresList.module.css'
import { MoviesContext } from '../../stores/movieStore';
import { observer } from 'mobx-react-lite';
import { Loader } from '../loader/loader';

export const GenresList = observer(() => {
    const movieStore = useContext(MoviesContext);
    const { isLoading, fetch, filmsByGenre, genres } = movieStore;
    useEffect(() => {
        fetch()
    }, [fetch]);   
    return (
        <div>
            { isLoading
                ? <Loader />
                : genres && (<div className={style.wrapper}>
                    {genres.map((genre) =>
                        <div className={style.genreWrapper} key={genre} datatype={genre}>
                            <Typography variant="h5" className={style.genreName}>{genre}</Typography>
                            <GenreItems filmsData={filmsByGenre(genre)} />
                        </div>
                    )}
                </div>)}
        </div>)
});