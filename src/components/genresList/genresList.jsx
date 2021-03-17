import { Typography } from '@material-ui/core';
import React from 'react';
import { GenreItems } from '../genreItems/genreItems';
import style from './genresList.module.css'

export const GenresList = (props) => {
    console.log(props);
    const { genreItems, filmsData } = props;
    console.log(genreItems, filmsData)
    const genreContext = Object.values(props['moviesGenre']);
    console.log(genreContext);
    return (
        <div className={style.wrapper}>
            {genreContext.map((genre) =>
                <div className={style.genreWrapper} key={genre} datatype={genre}>
                    <Typography variant="h5" className={style.genreName}>{genre}</Typography>
                    <GenreItems genreItems={genreItems}
                        genre={genre}
                        filmsData={filmsData}>
                    </GenreItems>
                </div>
            )}
        </div>
    )
}
