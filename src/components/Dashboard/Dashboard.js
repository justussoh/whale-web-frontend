import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import TransactionHistoryItem from "../Card/TransactionHistoryItem";
import axios from "axios";
import Loans from "./Loans";
import Chart from "./Chart";
import Button from "@material-ui/core/Button";
import history from "../../history";

class Dashboard extends React.Component {

    state = {
        creditScore: 0,
        transactions: [],
    };

    componentDidMount() {
        axios.post('/users/calculateTotalCreditScore', {nric: this.props.user.nric}).then(res => {
            if (res.status === 200) {
                this.setState({creditScore: res.data})
            }
        });

        if (this.props.user.current_account_id) {
            axios.post('/users/calculateTotalCreditScore', {currentAccountId: this.props.user.current_account_id}).then(res => {
                if (res.status === 200) {
                    this.setState({transactions: res.data})
                }
            });
        }
        console.log(this.props.user);
    }

    render() {
        return (
            <Container maxWidth='xl' style={{marginLeft: 0}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper style={{minHeight: 240}}>
                            <Chart/>
                        </Paper>

                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper style={{minHeight: 240}}>
                            <h1>Credit Score</h1>
                            <h1>{this.state.creditScore}</h1>
                        </Paper>
                    </Grid>
                    <Grid item xs={7} component={Paper}>
                        <h1>Recent Transactions</h1>
                        {this.props.user.current_account_id ?
                            <div>
                                {this.state.transactions.map((transaction, index) => {
                                    return (
                                        <TransactionHistoryItem transaction={transaction} key={index}/>
                                    )
                                })}
                            </div>
                            : <div>
                                <Button variant="contained" color="primary" fullWidth
                                        onClick={() => history.push('/bank')}>
                                    OPEN AN ACCOUNT
                                </Button>
                            </div>
                        }

                    </Grid>
                    <Grid item xs={5} component={Paper}>
                        <Loans user={this.props.user}/>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default Dashboard;