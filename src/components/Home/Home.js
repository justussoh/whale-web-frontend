import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import history from "../../history";

import './Home.css'

class Home extends React.Component {

    handleClick = () =>{
        history.push('/signup')
    };

    render() {
        return (
            <Grid container spacing={5} alignItems='center' justify='center' style={{height:"80%"}}>
                <Grid item xs={4}>
                    <h1 className='title' style={{fontSize:72}}>Whale</h1>
                    <p className='text'>Looking for creditable alternative credit scores online? Look no further, through documents and social scoring we can help you to get higher loans at a better rate! Give us a try today!</p>
                    <Button variant="contained" size="large" className='try-button' onClick={this.handleClick}>
                        TRY FOR FREE
                    </Button>
                </Grid>
                <Grid item xs={7} className='d-flex align-content-center justify-content-center flex-column'>
                    <img src='/images/homeCredit.svg' alt='credit-image'/>
                </Grid>
            </Grid>
        )
    }
}

export default Home;