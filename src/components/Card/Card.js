import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import axios from "axios";
import TransactionHistoryItem from "./TransactionHistoryItem"
import CardDisplayItem from "./CardDisplayItem";
import AddCardModal from "./AddCardModal";

import './Card.css'
import AddCardItem from "./AddCardItem";
import ConfirmationSnackBar from "../Utils/ConfirmationSnackBar";

class Card extends React.Component {

    state = {
        isModalOpen: false,
        isSnackOpen: false,
        severity: "success",
        cards: [],
    };

    openModal = () => {
        this.setState({isModalOpen: true})
    };

    closeModal = () => {
        this.setState({isModalOpen: false})
    };

    openSnack = (severity) => {
        this.setState({isSnackOpen: true, severity:severity })
    };

    closeSnack = () => {
        this.setState({isSnackOpen: false})
    };


    addCard = () => {
        axios.post('/api/addcard', {}).then(res => {
            if (res.status === 200) {
                this.setState({cards: res.data});
                this.closeModal();
                this.openSnack("success");
            }
        }).catch(err => {
            this.closeModal();
            this.openSnack("error");
            console.log(err);
        });
    };

    render() {
        return (
            <Container maxWidth='md' style={{marginLeft: 0}}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <h1>Cards</h1>
                        <div className="card-list row ">
                            <CardDisplayItem/>
                            <AddCardItem openModal={this.openModal}/>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <h1>Recent Transactions</h1>
                        <div>
                            <TransactionHistoryItem/>
                            <TransactionHistoryItem/>
                            <TransactionHistoryItem/>
                        </div>
                    </Grid>
                </Grid>
                <AddCardModal open={this.state.isModalOpen} handleClose={this.closeModal} handleOpen={this.openModal}
                              onSubmit={this.addCard}/>
                <ConfirmationSnackBar open={this.state.isSnackOpen} closeSnack={this.closeSnack}
                                 severity={this.state.severity}/>
            </Container>
        )

    }

}

export default Card;