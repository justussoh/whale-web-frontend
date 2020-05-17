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
        transactions: [],
        card_number: '',
        first_name: '',
        last_name: '',
        expiry_date: new Date(),
    };

    componentDidMount() {
        axios.post(`/cards/findByUserId?id=${this.props.user.id}`, {}).then(res => {
            if (res.status === 200) {
                let cards = res.data;
                let promiseArr = [];
                for (let i of cards) {
                    let promise = axios.post(`/cards/getCardTransactionHistory`,{
                        card_number: i.card_number
                    }).then(res => {
                        if (res.status === 200) {
                            return(res.data)
                        }
                    }).catch(err => {
                        console.log(err);
                    });
                    promiseArr.push(promise)
                }
                Promise.all(promiseArr).then((arr) => {
                    console.log(arr)
                    this.setState({transactions:arr})
                });
                this.setState({cards: cards})
            }
        });
    }

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
                this.closeModal();
                this.openSnack("success");
                window.location.reload();
            }
        }).catch(err => {
            this.closeModal();
            this.openSnack("error");
            console.log(err);
        });
    };

    extract = () =>{
        let res= [];
        console.log(this.state.transactions)
        if (this.state.transactions > 0){
            for (let x of this.state.transactions){
                for (let y of x.transactions){
                    if (y){
                        res.push(y)
                    }
                }
            }
        }
        console.log(res)
        return res
    };

    render() {


        return (
            <Container maxWidth='md' style={{marginLeft: 0}}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <h1>Cards</h1>
                        <div className="card-list row">
                            {this.state.cards.map((card, index)=>{
                                return <CardDisplayItem key={index} card={card}/>
                            })}

                            <AddCardItem openModal={this.openModal}/>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <h1>Recent Transactions</h1>
                        {this.state.transactions.length !== 0 ?
                            <div>
                                {this.extract().map((transaction, index) => {
                                    return (
                                        <TransactionHistoryItem transaction={transaction} key={index}/>
                                    )
                                })}
                            </div> :
                            <h6>No transactions have been made</h6>
                        }
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