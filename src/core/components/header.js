import React from 'react';
import './header.css';
import { Toolbar, AppBar, IconButton, Typography } from '@material-ui/core';
import Flight from '@material-ui/icons/Flight';
import Login from './login';
export class Header extends React.Component{
    render(){
        return(
          <div className="root">
            <AppBar position="static">
            <Toolbar>
              <IconButton className="menuButton" edge="start" color="inherit">
                <Flight />
              </IconButton>
              <Typography class="title" variant="h6" noWrap>
            Flight-CheckIn
          </Typography>
          <Login />
            </Toolbar>
            </AppBar>
          </div>
        )
    }
}
export default Header;