import React from 'react';
import Grid from "@material-ui/core/Grid";
import DisplayEndorserUser from "./DisplayEndorserUser";
import DisplayEndorseeUser from "./DisplayEndorseeUser";
import DeleteEndorseeModal from "./DeleteEndorseeModal"

import './Endorse.css';
import ConfirmationSnackBar from "../Utils/ConfirmationSnackBar";
import {CopyToClipboard} from 'react-copy-to-clipboard';

class Endorse extends React.Component {
    state = {
        isModalOpen: false,
        isSnackOpen: false,
        severity: "success",
        selected: 0,
        endorsees: [],
        endorsers: [],
        value: '',
        copied: false,
    };

    componentDidMount() {
        const baseUrl = window.location.origin;
        this.setState({value: baseUrl + `/endorse/endorsement?endorseeId=${123}`})
    }

    openModal = (index) => {
        this.setState({isModalOpen: true, selected: index})
    };

    closeModal = () => {
        this.setState({isModalOpen: false})
    };

    deleteEndorsee = () => {
        alert('deleted' + this.state.selected);
        this.closeModal();
        this.openSnack("success");
    };

    openSnack = (severity) => {
        this.setState({isSnackOpen: true, severity:severity })
    };

    closeSnack = () => {
        this.setState({isSnackOpen: false})
    };

    render() {
        return (

            <Grid container spacing={5} style={{padding: 30}}>
                <Grid item xs={10}>
                    <h1>Share this link with your friends to get endorsed!</h1>
                    <div>
                        <input value={this.state.value}
                               disabled/>

                        <CopyToClipboard text={this.state.value}
                                         onCopy={() => this.setState({copied: true})}>
                            <button>{this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : <span>Copy</span>}</button>
                        </CopyToClipboard>


                    </div>
                </Grid>
                <Grid item xs={5}>
                    <h1>Endorsers</h1>
                    <div>
                        <DisplayEndorserUser/>
                        <DisplayEndorserUser/>
                        <DisplayEndorserUser/>
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <h1>Endorsees</h1>
                    <div>
                        <DisplayEndorseeUser handleDeleteClick={this.openModal} index={0}/>
                        <DisplayEndorseeUser handleDeleteClick={this.openModal} index={1}/>
                        <DisplayEndorseeUser handleDeleteClick={this.openModal} index={2}/>
                    </div>
                </Grid>
                <DeleteEndorseeModal open={this.state.isModalOpen} handleClose={this.closeModal}
                                     handleOpen={this.openModal}
                                     onSubmit={this.deleteEndorsee}/>
                <ConfirmationSnackBar open={this.state.isSnackOpen} closeSnack={this.closeSnack}
                                      severity={this.state.severity}/>
            </Grid>

        )

    }

}

export default Endorse;