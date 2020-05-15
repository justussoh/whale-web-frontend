import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link, NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';

import "./ExternalNavBar.css"

class ExternalNavBar extends React.Component {
    render() {
        return (
            <AppBar position="static" style={{background: "none", marginTop: 15}} elevation={0}>
                <Toolbar>
                    <Link to="/" style={{marginRight: 40}}>
                        <img src='/images/logo.png' alt='logo' style={{height: 40}}/>
                    </Link>
                    <NavLink to="/about" activeClassName="selected" className='title link'>
                        ABOUT
                    </NavLink>
                    <div className='ml-auto'>
                        <NavLink to="/login" activeClassName="selected" style={{marginRight: 10}}>
                            <Button variant="contained" color="primary">
                                Sign Up
                            </Button>
                        </NavLink>
                        <NavLink to="/login" activeClassName="selected">
                            <Button variant="outlined" color="primary">
                                Login
                            </Button>
                        </NavLink>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}

export default ExternalNavBar;