import React from 'react';
import Card from '@material-ui/core/Card';
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from '@material-ui/core/IconButton';

class DisplayEndorseeUser extends React.Component {
    render() {
        return (
            <Card className='d-flex align-items-center display-user' style={{padding:10}} >
                <Avatar>J</Avatar>
                <div style={{marginLeft: 20}}>
                    <h4>Justus</h4>
                </div>
                <div className='ml-auto'>
                    <IconButton aria-label="Close" className='closeButton ml-auto' onClick={() => this.props.handleDeleteClick(this.props.index)}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
            </Card>
        )

    }

}

export default DisplayEndorseeUser;