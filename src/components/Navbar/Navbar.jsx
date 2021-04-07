import React from 'react';
import {AppBar,Toolbar,IconButton,Badge,Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';

import useStyles from './styles';

const NavBar = () =>
{
    const classes=useStyles();
  return(
       <AppBar position="fixed" className={mergeClasses.appBar} color='inherit'>
           <Toolbar>
               <Typography variant='h6' className={classes.title} color="inherit">
                   <img src="" alt="E-Commerce" height="25px" className={classes.image} />
               </Typography>
               <div className={classes.grow}></div>
               <div className={classes.button}>
                   <IconButton aria-label="show cart item">
                       <Badge badgeContent={3} color ="secondary"><ShoppingCart /></Badge>
                   </IconButton>
               </div>
           </Toolbar>
       </AppBar>
  )
}

export default NavBar;