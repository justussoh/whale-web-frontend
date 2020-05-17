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
import Document from "./components/Document/Document";
import Endorse from "./components/Endorse/Endorse";
import Endorsement from "./components/Endorsement/Endorsement";
import AddBankAccount from "./components/Bank/AddBankAccount";
import { useAuth} from "../src/hooks/useAuth"

export default function App() {
    const {user, signIn} = useAuth();

    return (
        <React.Fragment>
                <Router history={history}>
                    {user ?
                        <>
                            <NavDrawer/>
                            <TopAppBar/>
                            <div className='main-container-auth'>
                                <Switch>
                                    <Route exact path="/card" render={(props) => <Card {...props} user={user}/>}/>
                                    <Route exact path="/bank" render={(props) => <Bank {...props} user={user}/>}/>
                                    <Route exact path="/bank/open" render={(props) => <AddBankAccount {...props} user={user}/>}/>
                                    <Route exact path="/endorse" render={(props) => <Endorse {...props} user={user}/>}/>
                                    <Route exact path="/endorse/endorsement" render={(props) => <Endorsement {...props} user={user}/>}/>
                                    <Route exact path="/document" render={(props) => <Document {...props} user={user}/>}/>
                                    <Route path="/" render={(props) => <Dashboard {...props} user={user}/>}/>
                                </Switch>
                            </div>
                        </>
                        :
                        <Container maxWidth='xl' className='background fullscreen'>
                            <ExternalNavBar/>
                            <div className='main-container'>
                                <Switch>
                                    <Route exact path="/signup" component={SignUp}/>
                                    <Route exact path="/login" render={(props) => <Login {...props} signIn={signIn}/>}/>
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
