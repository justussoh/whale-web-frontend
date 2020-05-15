import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


class TopAppBar extends React.Component {
    render() {
        return (
            <AppBar position="absolute">
                <Toolbar >
                    <Typography component="h1" variant="h6" color="inherit" noWrap>
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
        )

    }

}

export default TopAppBar;