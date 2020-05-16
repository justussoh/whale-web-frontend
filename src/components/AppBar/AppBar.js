import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';


class TopAppBar extends React.Component {
    render() {
        return (
            <AppBar position="absolute" elevation={0} style={{background: "none"}}>
                <Toolbar >
                   <div className='ml-auto'>
                       <Avatar>J</Avatar>
                   </div>
                </Toolbar>
            </AppBar>
        )

    }

}

export default TopAppBar;