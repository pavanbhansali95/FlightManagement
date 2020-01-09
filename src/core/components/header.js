import React from 'react';
import './header.scss';
import { Toolbar, AppBar, IconButton, Typography } from '@material-ui/core';
import Flight from '@material-ui/icons/Flight';
import Login from './login';
import { withRouter } from 'react-router';
export class Header extends React.Component{
  navigateToDashboard = () => {
    this.props.history.push('/');
  }
    render(){
        return(
          <header className="root">
            <AppBar style = {{background: "#373737"}} position="static">
            <Toolbar className="row">
            <div className="col-6 px-4 py-2 header-wrapper">
              <IconButton onClick = {this.navigateToDashboard} className="menuButton" edge="start" color="inherit">
                <Flight />
              </IconButton>
              <Typography id="myflight-text" className="title" variant="h6" noWrap>
            MyFlight
          </Typography>
          </div>
          <Login />
            </Toolbar>
            </AppBar>
          </header>
        )
    }
}
export default withRouter(Header);
