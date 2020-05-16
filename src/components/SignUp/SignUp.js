import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


class SignUp extends React.Component {
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
                                name="email"
                                autoComplete="email"
                                autoFocus

                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Last Name"
                                name="email"
                                autoComplete="email"
                                autoFocus

                            />
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
                                autoFocus
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
                                
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Contact Number"
                                name="email"
                                autoComplete="email"
                                autoFocus

                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Sign Up
                            </Button>
                            <Grid item>
                                <Link href="/signup" variant="body2">
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