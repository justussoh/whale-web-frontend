import React from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class Loans extends React.Component {
    render() {
        return (
            <>
                {true ?
                    <Grid container spacing={0} justify='center'>
                        <Grid item xs={12}>
                            <h1 className='text-center'>Looks like you have not created an bank account yet!</h1>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" color="primary" fullWidth onClick={this.handleOpenAccount}>
                                OPEN LOAN ACCOUNT
                            </Button>
                        </Grid>
                    </Grid> : ''
                }
            </>
        )

    }

}

export default Loans;