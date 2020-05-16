import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class ConfirmationSnackBar extends React.Component {
    render() {
        return (
            <Snackbar open={this.props.open} autoHideDuration={6000} onClose={this.props.closeSnack} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <Alert onClose={this.props.closeSnack} severity={this.props.severity}>
                    This is a success message!
                </Alert>
            </Snackbar>
        )

    }

}

export default ConfirmationSnackBar;