import { CircularProgress } from '@material-ui/core';
import React from 'react'
import style from './loader.module.css';

export const Loader = () => {
    return <CircularProgress className={style.loader} />
}
