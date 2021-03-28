import styles from './header.module.css';
import React from 'react';
import { AppBar, Link, Toolbar, Typography } from '@material-ui/core';


export function Header() {
    return (
        <AppBar position="sticky" component="header" color="default" className={styles.appBar}>
            <Toolbar className={styles.toolbar}>
                <Link href="/" color="primary">
                    <Typography variant="h4" noWrap>
                        Wookie Movies
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
}