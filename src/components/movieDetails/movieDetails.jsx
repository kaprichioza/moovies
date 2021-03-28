import React, { useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { MoviesContext } from '../../stores/movieStore'
import { observer } from 'mobx-react-lite';
import style from './movieDetails.module.css'
import { Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

export const MovieDetails = observer(() => {
    let { id } = useParams();
    const movieStore = useContext(MoviesContext);
    const { filmData, fetchFilm, isLoading } = movieStore; 
    if (filmData) {
        var { poster, cast, director,
            imdb_rating, length,
            overview, title, released_on,
            classification } = filmData;
    }
    function getYear() {
        return released_on
            && released_on.match(/^([\d]+?)-/)
            && released_on.match(/^([\d]+?)-/)[1];
    }
    function parseCollection(names) {
        if (!Array.isArray(names)) return names;
        return names.join(', ');
    }
    useEffect(() => {
        fetchFilm(id);
    }, [])
    return (
        <div>{isLoading
            ? (<>Loading...</>)
            : (
                <div className={style.wrapper}>
                    <div className={style.leftSide}>
                        <img src={poster} alt="film preview"></img>
                    </div>
                    <div className={style.rightSide}>
                        <div className={style.titleWrapper}>
                            <Typography variant="h6" className={style.title}><strong>{title}</strong></Typography>
                            <Rating
                                value={Number(imdb_rating) / 2}
                                precision={0.1}
                                name="read-only"
                                readOnly />
                        </div>
                        <div className={style.shortInfo}>
                            <div className={style.topSide}>
                                <Typography variant="subtitle1"><strong>Age: </strong>{classification}</Typography>
                                <Typography variant="subtitle1"><strong>Year: </strong>{getYear()}</Typography>
                                <Typography variant="subtitle1"><strong>Length: </strong>{length}</Typography>
                                <Typography variant="subtitle1"><strong>Director: </strong>{parseCollection(director)}</Typography>
                            </div>
                            <div>
                                <Typography variant="subtitle1"><strong>Cast:</strong> {parseCollection(cast)}</Typography>
                            </div>
                        </div>
                        <div className={style.description}>
                            <Typography variant="subtitle1">
                                <strong>Movie Description:</strong> {overview}
                            </Typography>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
});
//{JSON.stringify(filmData)}