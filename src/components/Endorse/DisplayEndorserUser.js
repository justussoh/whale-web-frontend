import React from 'react';
import Card from '@material-ui/core/Card';
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";

class DisplayEndorserUser extends React.Component {

    state={
        creditScore:0
    };

    componentDidMount() {
        axios.post('/users/calculateTotalCreditScore', {nric: this.props.user.nric}).then(res => {
            if (res.status === 200) {
                this.setState({creditScore: res.data})
            }
        });
    }

    render() {
        const {user} = this.props;
        return (
            <Card className='d-flex align-items-center display-user' style={{padding:10}} >
                <Avatar>{user.first_name[0]}{user.last_name[0]}</Avatar>
                <div style={{marginLeft: 20}}>
                    <h4>{user.first_name} {user.last_name}</h4>
                </div>
                <div className='ml-auto'>
                    <span>{this.state.creditScore}</span>
                </div>
            </Card>
        )

    }

}

export default DisplayEndorserUser;