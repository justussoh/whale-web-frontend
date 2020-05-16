import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import history from "../../history";


class Login extends React.Component {

    state={
        rememberMe:false,
        nric:'',
        password:'',
    };

    componentDidMount() {
        if (localStorage.getItem("checked") && localStorage.getItem("checked") !== "") {
            this.setState({
                nric:localStorage.getItem("nric"),
                password: localStorage.getItem("password"),
                rememberMe: true,
            });
        }
    }

    onLogin = (e) => {
        e.preventDefault();
        if (this.state.nric === '' || this.state.password === '') {
            window.alert('Field Cannot be Empty');
            return;
        }

        const user = this.props.signIn(this.state.nric, this.state.password);

        if (user && this.state.rememberMe){
            localStorage.setItem("checked", "checked");
            localStorage.setItem("nric", this.state.nric);
            localStorage.setItem("password", this.state.password);
        } else{
            localStorage.setItem("checked", "");
        }

        if (user){
            history.push('/')
        }
    };

    handleRememberMeChange = (e) =>{
        this.setState({rememberMe:e.target.checked})
    };

    handleNricChange = (e) => {
        this.setState({ nric: e.target.value });
    };

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    render() {
        return (
            <Grid container spacing={5} alignItems='center' justify='center' alignContent='center' className='h-100'>
                <Grid item xs={4} component={Paper} style={{height: "90%", padding: 50}}
                      className='d-flex align-items-center'>
                    <Grid container >
                        <form noValidate onSubmit={this.onLogin}>
                            <Grid item xs={12}>
                                <h1 style={{fontSize: 36, fontWeight: 600, fontFamily: 'Montserrat'}}>Login to Your
                                    Account!</h1>
                            </Grid>

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="NRIC"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={this.handleNricChange}
                                value={this.state.nric}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={this.handlePasswordChange}
                                value={this.state.password}
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={this.handleRememberMeChange} checked={this.state.rememberMe} color="primary"/>}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Sign In
                            </Button>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
                <Grid item xs={7} className='d-flex align-content-center justify-content-center flex-column'>
                    <img src='/images/loginCredit.svg' alt='credit' style={{width: "80%", height: "auto"}}/>
                </Grid>
            </Grid>
        );
    }
}

export default Login;