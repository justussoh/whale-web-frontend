import React from 'react';
import Card from '@material-ui/core/Card';
import AddIcon from '@material-ui/icons/Add';

class AddCardItem extends React.Component {

    handleClick = () =>{
        this.props.openModal();
    };

    render() {
        return (
            <Card onClick={this.handleClick} className='d-flex align-items-center justify-content-center' elevation={0} style={{border: "2px dashed #808080", minWidth:120, borderRadius:22}}>
                <AddIcon />
            </Card>
        )
    }

}

export default AddCardItem;