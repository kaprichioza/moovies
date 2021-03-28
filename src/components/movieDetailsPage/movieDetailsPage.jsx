import React, { useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import { MoviesContext } from '../../stores/movieStore'
import { observer } from 'mobx-react-lite';
import { MovieDetail } from '../movieDetail/movieDetail';


export const MovieDetailsPage = observer(() => {
    let { id } = useParams();
    const movieStore = useContext(MoviesContext);
    const { filmData, fetchFilm, isLoading } = movieStore;
    useEffect(() => {
        fetchFilm(id);
    }, [])
    return (
        <div>{isLoading
            ? (<>Loading...</>)
            : filmData && <MovieDetail movie={filmData} />}
        </div>
    )
});
