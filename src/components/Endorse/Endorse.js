import React from 'react';
import Grid from "@material-ui/core/Grid";
import DisplayEndorserUser from "./DisplayEndorserUser";
import DisplayEndorseeUser from "./DisplayEndorseeUser";
import DeleteEndorseeModal from "./DeleteEndorseeModal"

import './Endorse.css';
import ConfirmationSnackBar from "../Utils/ConfirmationSnackBar";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import axios from "axios";

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
        this.setState({value: baseUrl + `/endorse/endorsement?endorseeId=${this.props.user.id}`})
        let promiseArr = [];
        for (let i of this.props.user.endorsers) {
            let promise = axios.get(`/users/retrieveById?id=${i}`).then(res => {
                if (res.status === 200) {
                    return(res.data)
                }
            }).catch(err => {
                console.log(err);
            });
            promiseArr.push(promise)
        }
        Promise.all(promiseArr).then((arr) => {
            this.setState({endorsers:arr})
        });
        promiseArr = [];
        for (let i of this.props.user.endorsed) {
            let promise = axios.get(`/users/retrieveById?id=${i}`).then(res => {
                if (res.status === 200) {
                    return(res.data)
                }
            }).catch(err => {
                console.log(err);
            });
            promiseArr.push(promise)
        }
        Promise.all(promiseArr).then((arr) => {
            this.setState({endorsees:arr})
        });
    }

    openModal = (index) => {
        this.setState({isModalOpen: true, selected: index})
    };

    closeModal = () => {
        this.setState({isModalOpen: false})
    };

    deleteEndorsee = () => {
        axios.post(`/users/removeEndorsement`, {
            userToRemoveEndorsement: this.state.endorsees[this.state.selected].id,
            unhappyUser: this.props.user.id,
        }).then(res => {
            if (res.status === 200) {
                // this.openSnack("success");
                setTimeout(() => window.location.reload(), 1000)
            }
        }).catch(err => {
            console.log(err);
        });
    };

    openSnack = (severity) => {
        this.setState({isSnackOpen: true, severity: severity})
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
                        <input value={this.state.value} disabled style={{width: "90%"}}/>

                        <CopyToClipboard text={this.state.value}
                                         onCopy={() => this.setState({copied: true})}>
                            <button>{this.state.copied ? <span style={{color: 'red'}}>Copied.</span> :
                                <span>Copy</span>}</button>
                        </CopyToClipboard>


                    </div>
                </Grid>
                <Grid item xs={5}>
                    <h1>Endorsers</h1>
                    <div>
                        {this.state.endorsers.map((endorser, index) => {
                            return(
                                <DisplayEndorserUser user={endorser} key={index} />
                            )
                        })}
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <h1>Endorsees</h1>
                    <div>
                        {this.state.endorsees.map((endorser, index) => {
                            return(
                                <DisplayEndorseeUser user={endorser} key={index} handleDeleteClick={this.openModal} index={index}/>
                            )
                        })}
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