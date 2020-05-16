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
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoFocus
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                label="Card Holder Name"
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
                            <TextField
                                autoFocus
                                variant="outlined"
                                margin="dense"
                                fullWidth
                                label="date"
                            />
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