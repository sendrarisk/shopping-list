import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BoxText from './BoxText';

const useStyles = makeStyles({
     toolbar: {
          background: '#4E3005',
          position: "fixed",
          bottom: 0
     },
     boxes: {
          display: 'flex',
          justifyContent: 'space-around'
     }
});

function TopAppBar(props) {
     const classes = useStyles();
     return (
          <AppBar position="static" className={classes.toolbar}>
               <Toolbar className={classes.boxes}>
                    <BoxText value={100}/>
                    <BoxText value={0}/>
               </Toolbar>
          </AppBar>
     );
}

export default TopAppBar;
