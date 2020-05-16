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
        card_number: '',
        first_name: '',
        last_name: '',
        expiry_date: new Date(),
    };

    handleCardNumberChange = (e) => {
        this.setState({card_number: e.target.value})
    };

    handleFirstNameChange = (e) => {
        this.setState({first_name: e.target.value})
    };

    handleLastNameChange = (e) => {
        this.setState({last_name: e.target.value})
    };

    handleExpiryChange = (date) => {
        this.setState({expiry_date: date})
    };

    openModal = () => {
        this.setState({isModalOpen: true})
    };

    closeModal = () => {
        this.setState({isModalOpen: false})
    };

    openSnack = (severity) => {
        this.setState({isSnackOpen: true, severity: severity})
    };

    closeSnack = () => {
        this.setState({isSnackOpen: false})
    };


    addCard = () => {
        axios.post('/cards/create', {
            card_number: this.state.card_number,
            user_id: this.props.user.id,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            expiry_date: this.state.expiry_date,
        }).then(res => {
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
                <AddCardModal open={this.state.isModalOpen}
                              handleClose={this.closeModal}
                              handleOpen={this.openModal}
                              onSubmit={this.addCard}
                              handleCardNumberChange={this.handleCardNumberChange}
                              handleExpiryChange={this.handleExpiryChange}
                              handleFirstNameChange={this.handleFirstNameChange}
                              handleLastNameChange={this.handleLastNameChange}
                              card_number={this.state.card_number}
                              first_name={this.state.first_name}
                              last_name={this.state.last_name}
                              expiry_date={this.state.expiry_date}
                />
                <ConfirmationSnackBar open={this.state.isSnackOpen} closeSnack={this.closeSnack}
                                      severity={this.state.severity}/>
            </Container>
        )

    }

}

export default Card;