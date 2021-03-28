import React from 'react'
import style from './genreItems.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const GenreItems = (props) => {
    const { filmsData } = props;
    const divStyle = {
        width: '100%',
    };
    return (
        <div className={style.filmWrapper}>
            <Swiper spaceBetween={150}
                slidesPerView={'auto'}
                style={divStyle}
                slidesOffsetAfter={50}
                className="swiper-container">
                {filmsData.map(({ slug, poster, title }) =>
                <SwiperSlide className={style.swiperSlide} key={title}>
                    <Link to={`/movies/${slug}`} className={style.path}>
                        <div>
                            <img src={poster} alt="poster" />
                        </div>
                        <Typography variant="h6">{title}</Typography>
                    </Link>
                </SwiperSlide>
            )}
            </Swiper>
        </div>
    )
}