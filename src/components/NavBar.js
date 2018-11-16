import React from 'react';
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core/';
import { Search as SearchIcon } from '@material-ui/icons';

const NavBar = props => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                        News Scraper
                    </Typography>
                    <div className={classes.grow} />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
