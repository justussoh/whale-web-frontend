import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import history from "../../history";
import {NavLink} from "react-router-dom";
import queryString from 'query-string'
import ConfirmationSnackBar from "../Utils/ConfirmationSnackBar";


class Endorsement extends React.Component {

    state = {
        endorsee: '',
        user: true,
        isSnackOpen: false,
        severity: "success",
    };

    componentDidMount() {
        const query = queryString.parse(this.props.location.search);
        this.setState({endorsee: query.endorseeId})
    }

    handleEndorse = () => {
        this.openSnack("success");
        setTimeout(()=>this.handleLink('/'), 1000)
    };

    handleLink = (link) => {
        history.push(link)
    };

    openSnack = (severity) => {
        this.setState({isSnackOpen: true, severity:severity })
    };

    closeSnack = () => {
        this.setState({isSnackOpen: false})
    };

    render() {
        return (
            <>
                {this.state.user ?
                    <Container maxWidth='xs'>
                        <Grid container spacing={5} style={{padding: 30}}>
                            <Grid item xs={12}>
                                <h1 className='text-center'>Do you want to endorse Justus!</h1>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="contained" color="primary" fullWidth onClick={this.handleEndorse}>
                                    YES
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="outlined" color="primary" fullWidth onClick={()=> this.handleLink('/')}>
                                    NO
                                </Button>
                            </Grid>
                        </Grid>
                        <ConfirmationSnackBar open={this.state.isSnackOpen} closeSnack={this.closeSnack}
                                              severity={this.state.severity}/>
                    </Container>

                    :
                    <Grid container spacing={5} alignItems='stretch' justify='center' className='h-100'>
                        <Grid item xs={12}>
                            <h1>You need to be signed in to Endorse a user!</h1>
                            <div>
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
                        </Grid>
                    </Grid>
                }
            </>
        )
    }
}

export default Endorsement;