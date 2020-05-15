import React from 'react';
import {
    Router,
    Switch,
    Route
} from "react-router-dom";
import history from './history';
import Container from '@material-ui/core/Container';
import './App.css';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import NavDrawer from "./components/NavDrawer/NavDrawer";
import Dashboard from './components/Dashboard/Dashboard';
import TopAppBar from "./components/AppBar/AppBar";
import ExternalNavBar from "./components/ExternalNavBar/ExternalNavBar";
import About from "./components/About/About";


import {ProvideAuth, useAuth} from "../src/hooks/useAuth"

export default function App() {
    const auth = useAuth();

    return (
        <React.Fragment>
            <ProvideAuth>
                <Router history={history}>
                    {auth ?
                        <>
                            <NavDrawer/>
                            <TopAppBar/>
                            <Switch>
                                <Route path="/" component={Dashboard}/>
                            </Switch>
                        </>
                        :
                        <div className='background fullscreen'>
                            <Container className='h-100' maxWidth='xl'>
                                <ExternalNavBar/>
                                <Switch>
                                    <Route exact path="/signup" component={SignUp}/>
                                    <Route exact path="/login" component={Login}/>
                                    <Route exact path="/about" component={About}/>
                                    <Route path="/" component={Home}/>
                                </Switch>
                            </Container>
                        </div>
                    }
                </Router>
            </ProvideAuth>
        </React.Fragment>
    );
}
