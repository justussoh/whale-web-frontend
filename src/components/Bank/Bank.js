import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import history from "../../history";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>
                    <h3>Loan Amount</h3>
                    <h3>Account Number</h3>
                    <h3>Repayment</h3>
                    <h3>Time</h3>
                </div>
            )}
        </div>
    );
}

class Bank extends React.Component {

    state = {
        accounts: [],
        tab:0,
    };

    handleOpenAccount = () => {
        history.push("/bank/open")
    };

    handleTabChange = (e, newValue) =>{
        this.setState({tab:newValue})
    };

    render() {
        return (
            <Container maxWidth='md' style={{marginLeft: 0}}>
                {this.props.user.loan_account_id ?
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <h1>Bank Accounts</h1>
                            <div className="card-list">
                                <Tabs
                                    value={this.state.tab}
                                    onChange={this.handleTabChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    variant="fullWidth"
                                    aria-label="full width tabs example"
                                >
                                    <Tab label="Account One"/>
                                    <Tab label="Account Two"/>
                                </Tabs>
                                <TabPanel value={this.state.tab} index={0} />
                                <TabPanel value={this.state.tab} index={1} />
                            </div>
                        </Grid>
                    </Grid>:
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <h1 className='text-center'>Looks like you have not created an bank account yet!</h1>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" color="primary" fullWidth onClick={this.handleOpenAccount}>
                                OPEN LOAN ACCOUNT
                            </Button>
                        </Grid>
                    </Grid>
                }

            </Container>
        )

    }

}

export default Bank;