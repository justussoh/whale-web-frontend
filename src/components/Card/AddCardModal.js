import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

class AddCardModal extends React.Component {
    render() {
        return (
            <Dialog open={this.props.open} onClose={this.props.handleClose} aria-labelledby="form-dialog-title"
                    style={{padding: 20}}>
                <DialogTitle id="alert-dialog-title">
                    <div className='d-flex align-items-center'>
                        Add a new Card
                        <IconButton aria-label="Close" className='closeButton ml-auto' onClick={this.props.handleClose}>
                            <CloseIcon/>
                        </IconButton>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        In order to track your expenses, please add a Visa card!
                    </DialogContentText>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                autoFocus
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                label="Card Number"
                                value={this.props.card_number}
                                onChange={this.props.handleCardNumberChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                label="First Name"
                                value={this.props.first_name}
                                onChange={this.props.handleFirstNameChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                label="Last Name"
                                value={this.props.last_name}
                                onChange={this.props.handleLastNameChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                label="CVV"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Date picker inline"
                                    value={this.props.expiry_date}
                                    onChange={this.props.handleExpiryChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onSubmit} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        )

    }

}

export default AddCardModal;