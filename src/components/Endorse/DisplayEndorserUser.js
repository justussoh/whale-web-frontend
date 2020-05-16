import React from 'react';
import Card from '@material-ui/core/Card';
import Avatar from "@material-ui/core/Avatar";

class DisplayEndorserUser extends React.Component {
    render() {
        return (
            <Card className='d-flex align-items-center display-user' style={{padding:10}} >
                <Avatar>J</Avatar>
                <div style={{marginLeft: 20}}>
                    <h4>Justus</h4>
                </div>
                <div className='ml-auto'>
                    <span>{`5.0`}</span>
                </div>
            </Card>
        )

    }

}

export default DisplayEndorserUser;