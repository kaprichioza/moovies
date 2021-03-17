import React from 'react'
import style from './genreItems.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { Typography } from '@material-ui/core';

export const GenreItems = (props) => {
    const { genreItems, genre, filmsData } = props;
    console.log(props);
    const divStyle = {
        width: '100%',
      };
    function addFilms(film) {
        if (genreItems[film].indexOf(genre) !== -1) {
            return <SwiperSlide className={style.swiperSlide} key={film}>
                <div>
                    <img src={filmsData[film]['poster']} alt="poster" />
                </div>
                <Typography variant="h6">{film}</Typography>
            </SwiperSlide>;
        }
    }
    return (
        <div className={style.filmWrapper}>
            <Swiper spaceBetween={150}      
                slidesPerView = {'auto'}              
                style={divStyle}  
                slidesOffsetAfter={50}
                //resistance={true}      
                className="swiper-container">
                {Object.keys(genreItems).map((film) => { return addFilms(film) })}
            </Swiper>
        </div>
    )
}