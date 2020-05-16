import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import history from "../../history";
// import Container from '@material-ui/core/Container';

import './About.css'

class About extends React.Component {

    handleClick = () => {
        history.push('/signup')
    };

    render() {
        return (
            <Grid container spacing={5} alignItems='stretch' justify='center' className='h-100'>
            <Grid item xs={4} className='d-flex align-items-center justify-content-center'>
                <div>
                    <h1 className='title' style={{fontSize: 72}}>Our Solution</h1>
                    <p className='text'>WHALE uses a <span className='blue-text'>Proprietary Credit Score</span> that collects accessible <span className='blue-text'>Alternative Data</span> and <span className='blue-text'>Social Credit Endorsement</span> to create a <span className='blue-text'>secure, representative and credible credit score</span>, opening up previously unavailable Youths, Millennials and Start-Ups to financial institutions. 
                    <br></br>
                    <br></br>
                    WHALE also provides <span className='blue-text'>Alternative Collaterals</span> to act as substitutes for traditional collaterals for <span className='blue-text'>accountability</span> which includes <span className='blue-text'>Transaction Monitoring, Joint-Peer Liability and Punishment Technology.</span>
                    </p>
                    <Button variant="contained" size="large" className='try-button' onClick={this.handleClick}>
                        TRY FOR FREE
                    </Button>
                </div>
            </Grid>
            <Grid item xs={7} className='d-flex align-content-center justify-content-center flex-column'>
                <img src='/images/solutionDiagram.png' alt='credit' style={{width: "90%", height: "auto"}}/>
            </Grid>
        </Grid>
        )
    }
}

export default About;