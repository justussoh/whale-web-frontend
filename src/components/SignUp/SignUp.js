import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import history from "../../history";


class SignUp extends React.Component {

    state={
        first_name:'',
        last_name:'',
        nric:'',
        email:'',
        password:'',
        contact:'',
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = () =>{
        axios.post('/users/create', {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            nric: this.state.nric,
            password: this.state.password,
            contact_number:this.state.contact,
        }).then(res => {
            if(res.status === 200){
                history.push('/login');
            }
        })
    };

    render() {
        return (
            <Grid container spacing={5} alignItems='center' justify='center' alignContent='center' className='h-100'>
                <Grid item xs={4} component={Paper} style={{height: "90%", padding: 50}}
                      className='d-flex align-items-center'>
                    <Grid container >
                        <form>
                            <Grid item xs={12}>
                                <h1 style={{color: "#002845",fontSize: 36, fontWeight: 600, fontFamily: 'Montserrat'}}>Get started with WHALE!</h1>
                            </Grid>

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="First Name"
                                name="first_name"
                                autoComplete="fname"
                                autoFocus
                                value={this.state.first_name}
                                onChange={this.handleInputChange}
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Last Name"
                                name="last_name"
                                autoComplete="lname"
                                value={this.state.last_name}
                                onChange={this.handleInputChange}

                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="NRIC"
                                name="nric"
                                value={this.state.nric}
                                onChange={this.handleInputChange}

                            />
                                                        
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}

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
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Contact Number"
                                name="contact"
                                autoComplete="phone"
                                value={this.state.contact}
                                onChange={this.handleInputChange}

                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={this.handleSubmit}
                            >
                                Sign Up
                            </Button>
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    {"Already have an account? Sign In"}
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

export default SignUp;