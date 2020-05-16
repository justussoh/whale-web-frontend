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
import Card from "./components/Card/Card";
import Bank from "./components/Bank/Bank";
import Endorse from "./components/Endorse/Endorse";
import Endorsement from "./components/Endorsement/Endorsement";
import AddBankAccount from "./components/Bank/AddBankAccount";
import { useAuth} from "../src/hooks/useAuth"

export default function App() {
    const {user} = useAuth();

    return (
        <React.Fragment>
                <Router history={history}>
                    {true ?
                        <>
                            <NavDrawer/>
                            <TopAppBar/>
                            <div className='main-container-auth'>
                                <Switch>
                                    <Route exact path="/card" component={Card}/>
                                    <Route exact path="/bank" component={Bank}/>
                                    <Route exact path="/bank/open" component={AddBankAccount}/>
                                    <Route exact path="/endorse" component={Endorse}/>
                                    <Route exact path="/endorse/endorsement" component={Endorsement}/>
                                    <Route exact path="/document" component={Card}/>
                                    <Route path="/" component={Dashboard}/>
                                </Switch>
                            </div>
                        </>
                        :
                        <Container maxWidth='xl' className='background fullscreen'>
                            <ExternalNavBar/>
                            <div className='main-container'>
                                <Switch>
                                    <Route exact path="/signup" component={SignUp}/>
                                    <Route exact path="/login" component={Login}/>
                                    <Route exact path="/about" component={About}/>
                                    <Route exact path="/endorse/endorsement" component={Endorsement}/>
                                    <Route path="/" component={Home}/>
                                </Switch>
                            </div>
                        </Container>

                    }
                </Router>
        </React.Fragment>
    );
}
