import React from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import history from "../../history";

class Loans extends React.Component {
    render() {
        return (
            <>
                {this.props.user.loan_account_id ?
                    ''
                    :
                    <Grid container spacing={0} justify='center'>
                        <Grid item xs={12}>
                            <h1 className='text-center'>Looks like you have not created a bank account yet!</h1>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" color="primary" fullWidth onClick={()=>history.push('/bank')}>
                                OPEN LOAN ACCOUNT
                            </Button>
                        </Grid>
                    </Grid>
                }
            </>
        )

    }

}

export default Loans;