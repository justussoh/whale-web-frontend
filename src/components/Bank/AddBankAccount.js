import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from "@material-ui/core/Button";
import axios from 'axios';
import history from "../../history";

const mark = [{value: 1, label: "1 Week"}, {value: 52, label: "52 Weeks"}]

class AddBankAccount extends React.Component {

    state = {
        creditScore: 0,
        loanAmount: 100,
        loanInstallments: 1,
        alternateCollateral: 'traditional',
    };

    componentDidMount() {
        axios.post('/users/calculateTotalCreditScore', {nric: this.props.user.nric}).then(res => {
            if (res.status === 200) {
                this.setState({creditScore: res.data})
            }
        });
    }

    calculateInterest = () => {
        let {creditScore} = this.state;
        if (creditScore <= 70) {
            return 5;
        } else if (creditScore > 70 && creditScore <= 80) {
            return 4;
        } else if (creditScore > 80 && creditScore <= 90) {
            return 2;
        } else if (creditScore > 90) {
            return 0.5;
        }
    };

    calculateMaxLoan = () => {
        let {creditScore} = this.state;
        if (creditScore <= 70) {
            return 5000;
        } else if (creditScore > 70 && creditScore <= 80) {
            return 10000;
        } else if (creditScore > 80 && creditScore <= 90) {
            return 15000;
        } else if (creditScore > 90) {
            return 20000;
        }
    };

    handleLoanAmountChange = (e, newValue) => {
        this.setState({loanAmount: newValue})
    };

    handleLoanInstallmentsChange = (e, newValue) => {
        this.setState({loanInstallments: newValue})
    };

    numberWithCommas = (x) => {
        x = x.toString();
        let pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    };

    generateMark = () => {
        const results = [];
        const min = 100;
        const max = this.calculateMaxLoan();
        results.push({value: min, label: "$100"});
        results.push({value: max, label: `$ ${this.numberWithCommas(max)}`});
        return results
    };

    handleLoanAmountBlur = () => {
        const min = 100;
        const max = this.calculateMaxLoan();
        if (this.state.loanAmount < min) {
            this.setState({loanAmount: min})
        } else if (this.state.loanAmount > max) {
            this.setState({loanAmount: max})
        }
    };

    handleLoanAmountInputChange = (event) => {
        this.setState({loanAmount: event.target.value === '' ? '' : Number(event.target.value)})
    };

    handleLoanInstallmentBlur = () => {
        if (this.state.loanInstallments < 1) {
            this.setState({loanInstallments: 1})
        } else if (this.state.loanInstallments > 52) {
            this.setState({loanInstallments: 52})
        }
    };

    handleLoanInstallmentInputChange = (event) => {
        this.setState({loanInstallments: event.target.value === '' ? '' : Number(event.target.value)})
    };

    handleAlternateCollateralChange = (event) => {
        this.setState({alternateCollateral: event.target.value});
    };

    onSubmit = () =>{
        axios.post('/users/createLoanAccount', {
            client_id: this.props.user.client_id,
            nric: this.props.user.nric,
            loanAmount: this.state.loanAmount,
            repaymentInstallments: this.state.loanInstallments,
            interestRate: this.calculateInterest(),
        }).then(res => {
            if (res.status === 200) {
                window.open('/bank',"_self")
            }
        }).catch((err) => {
            console.log(err);
        });

    };

    render() {
        return (
            <Container maxWidth='md' style={{marginLeft: 0}}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h1>Open a loans account</h1>
                        <p>Based on your credit score you will have a interest rate
                            of <b>{this.calculateInterest()}%</b></p>


                    </Grid>
                    <Grid item xs={12}>
                        <h3>Loan Amount</h3>
                    </Grid>
                    <Grid item xs={10}>

                        <Slider value={this.state.loanAmount} step={100} onChange={this.handleLoanAmountChange}
                                min={100} max={this.calculateMaxLoan()} valueLabelDisplay="auto"
                                marks={this.generateMark()}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Input
                            value={this.state.loanAmount}
                            margin="dense"
                            onChange={this.handleLoanAmountInputChange}
                            onBlur={this.handleLoanAmountBlur}
                            inputProps={{
                                step: 100,
                                min: 100,
                                max: this.calculateMaxLoan(),
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <h3>Installment</h3>
                    </Grid>
                    <Grid item xs={10}>

                        <Slider value={this.state.loanInstallments} step={1}
                                onChange={this.handleLoanInstallmentsChange}
                                min={1} max={52} valueLabelDisplay="auto" marks={mark}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Input
                            value={this.state.loanInstallments}
                            margin="dense"
                            onChange={this.handleLoanInstallmentInputChange}
                            onBlur={this.handleLoanInstallmentBlur}
                            inputProps={{
                                step: 1,
                                min: 1,
                                max: 52,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <h1>Alternative Collateral</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <RadioGroup value={this.state.alternateCollateral} onChange={this.handleAlternateCollateralChange}>
                            <FormControlLabel value="traditional" control={<Radio />} label="Traditional" />
                            <FormControlLabel value="transactionMonitoring" control={<Radio />} label="Transaction Monitoring" />
                            <FormControlLabel value="jointPeerLiability" control={<Radio />} label="Joint-Peer Liability" />
                            <FormControlLabel value="punishmentTechnology"  control={<Radio />} label="Punishment Technology" />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="outlined" color="primary" fullWidth onClick={this.onSubmit}>
                           Take Loan
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        )

    }

}

export default AddBankAccount;