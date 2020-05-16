import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import VerifiedIcon from '@material-ui/icons/VerifiedUser';
import DescriptionIcon from '@material-ui/icons/Description';
import DashboardIcon from '@material-ui/icons/Dashboard';
import history from "../../history";


class NavDrawer extends React.Component {

    handleLink = (link) =>{
        history.push(link)
    };

    render() {
        return (
            <Drawer
                variant="permanent"
                style={{width: 240, flexShrink: 0}}
                anchor="left"
                PaperProps={{style:{width: 240}}}
            >
                <div style={{height: 64, padding: 16}} className='d-flex align-items-center'>
                    <img src='/images/logo.png' alt='logo' style={{height: 30}} onClick={()=>this.handleLink('/')}/>
                </div>
                <Divider />
                <List>
                    <ListItem button onClick={()=>this.handleLink('/')}>
                        <ListItemIcon><DashboardIcon /></ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    <ListItem button onClick={()=>this.handleLink('bank')}>
                        <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
                        <ListItemText primary="Bank" />
                    </ListItem>
                    <ListItem button onClick={()=>this.handleLink('card')}>
                        <ListItemIcon><PaymentIcon /></ListItemIcon>
                        <ListItemText primary="Card" />
                    </ListItem>
                    <ListItem button onClick={()=>this.handleLink('endorse')}>
                        <ListItemIcon><VerifiedIcon /></ListItemIcon>
                        <ListItemText primary="Endorse" />
                    </ListItem>
                    <ListItem button onClick={()=>this.handleLink('document')}>
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary="Document" />
                    </ListItem>
                </List>
            </Drawer>
        )

    }

}

export default NavDrawer;