import React from 'react';
import Card from '@material-ui/core/Card';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

class TransactionHistoryItem extends React.Component {

    convertToCurrency = (num) =>{
        if (num < 0){
            return `- $ ${this.numberWithCommas(Math.abs(num))}`
        }
        return `$ ${this.numberWithCommas(num)}`
    };

    numberWithCommas = (x) => {
        x = x.toString();
        let pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    };

    render() {
        const {transaction} = this.props;
        let time = new Date(transaction.transactionDateTime);
        return (
            <Card className='d-flex align-items-center' style={{padding:10}}>
                <div className='transaction-history-icon' style={{backgroundColor: true ? 'red': 'white'}}>
                    {transaction.transactionAmount.amount >=0 ?
                        <ArrowUpwardIcon/> :
                        <ArrowDownwardIcon/>
                    }
                </div>
                <div style={{marginLeft: 20}}>
                    <h4 style={{marginBottom: 4}}>{transaction.transactionDescription}</h4>
                    <span>{time.toString()}</span>
                </div>
                <div className='ml-auto'>
                    <span>{this.convertToCurrency(transaction.transactionAmount.amount)}</span>
                </div>
            </Card>
        )

    }

}

export default TransactionHistoryItem;