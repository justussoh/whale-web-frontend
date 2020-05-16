import React from 'react';
import Card from '@material-ui/core/Card';

class CardDisplayItem extends React.Component {
    render() {
        return (
            <Card className='card-display-item' style={{padding:16}}>
                <div>
                    <img src='/images/visaLogo.png' alt='visa-logo' style={{height:40, width:"auto"}}/>
                </div>
                <div style={{marginBottom:8}}>
                    <h5 className='card-text'>**** 3857</h5>
                </div>
                <div style={{marginBottom:8}}>
                    <h6 className='card-sub-text' >Card holder name</h6>
                    <h3 className='card-text'>{`Justus`}</h3>
                </div>
                <div>
                    <h6 className='card-sub-text'>Exp. Data</h6>
                    <h3 className='card-text'>{`13/21`}</h3>
                </div>
            </Card>
        )

    }

}

export default CardDisplayItem;