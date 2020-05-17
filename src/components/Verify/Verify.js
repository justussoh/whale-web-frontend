import React from 'react';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import FileBase64 from 'react-file-base64';

class Verify extends React.Component {

    state = {
        files: null
    };

    getFiles = (files) => {
        this.setState({files: files})
    };

    onClickHandler = () => {
        axios.post("/users/verifyKYC", {
            base64image: this.state.files.base64,
        }).then(res => {
            if (res.status === 200) {
                window.open('/', '_self')
            }
        });

    };

    render() {
        return (
            <Container maxWidth='md' style={{marginLeft: 0}}>
                {this.props.user.isVerified ?
                    <h1>Verified</h1> :
                    <div>
                        <h1>Please upload your NRIC</h1>
                        <FileBase64
                            multiple={false}
                            onDone={this.getFiles}/>
                        <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload
                        </button>
                    </div>
                }
            </Container>
        )

    }

}

export default Verify;