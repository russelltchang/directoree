import React from "react";
import axios from "axios";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import Button from '@material-ui/core/Button';
import {BrowserRouter, Route, browserHistory, Link, NavLink, withRouter} from "react-router-dom";
      
const style = {
  appbar: {
    backgroundColor: '#9ACD32'
  },
  navItems: {
    marginLeft: 'auto'
  },
  signup: {
    backgroundColor: 'white',
    marginLeft: '1vw'
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <AppBar style={style.appbar} position="static">
          <Toolbar>
            <h1><a id="brand" href="/">Project</a></h1>
            <div style={style.navItems}>
              <Button style={style.signup}>Log in</Button>
              <Button style={style.signup}>Sign Up</Button>
            </div>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    )
  }
}

export default withRouter(Navbar);