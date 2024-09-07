import React from 'react';
import "../styles/App.css"
import Collapse from './Collapse';

const Transactions = () => {
    return (
        <div className='transactions_container'>
            <div className='transactions_content'>
                <div className='transactions_infos'>
                    <h4>Date</h4>
                    <h4>Description</h4>
                </div>
                <div className='transactions_infos'>
                    <h4>Amount</h4>
                    <h4>Balance</h4>
                    <h4 className="hiddenElement">argent</h4>
                </div>
            </div>
            <Collapse />
        </div>
    )
}

export default Transactions