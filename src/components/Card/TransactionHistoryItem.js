import React from 'react';
import Card from '@material-ui/core/Card';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

class TransactionHistoryItem extends React.Component {
    render() {
        return (
            <Card className='d-flex align-items-center' style={{padding:10}}>
                <div className='transaction-history-icon' style={{backgroundColor: true ? 'red': 'white'}}>
                    {true ?
                        <ArrowUpwardIcon/> :
                        <ArrowDownwardIcon/>
                    }
                </div>
                <div style={{marginLeft: 20}}>
                    <h4 style={{marginBottom: 4}}>Test Comment</h4>
                    <span>Test Time</span>
                </div>
                <div className='ml-auto'>
                    <span>{`-$ 1,400`}</span>
                </div>
            </Card>
        )

    }

}

export default TransactionHistoryItem;