import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';


class TopAppBar extends React.Component {
    render() {
        const {user} = this.props;
        return (
            <AppBar position="absolute" elevation={0} style={{background: "none"}}>
                <Toolbar >
                   <div className='ml-auto'>
                       <Avatar onClick={this.props.signOut}>{user.first_name[0]}{user.last_name[0]}</Avatar>
                   </div>
                </Toolbar>
            </AppBar>
        )

    }

}

export default TopAppBar;