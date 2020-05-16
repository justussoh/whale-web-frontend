import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import TransactionHistoryItem from "../Card/TransactionHistoryItem";
import Loans from "./Loans";
import Chart from "./Chart";

class Dashboard extends React.Component {
    render() {
        return (
            <Container maxWidth='xl' style={{marginLeft: 0}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper style={{minHeight:240}}>
                            <Chart />
                        </Paper>

                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper style={{minHeight:240}}>
                            <h1>Credit Score</h1>
                            <h1>52</h1>
                        </Paper>
                    </Grid>
                    <Grid item xs={7} component={Paper}>
                        <h1>Recent Transactions</h1>
                        <div>
                            <TransactionHistoryItem/>
                            <TransactionHistoryItem/>
                            <TransactionHistoryItem/>
                        </div>
                    </Grid>
                    <Grid item xs={5} component={Paper}>
                        <Loans />
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default Dashboard;