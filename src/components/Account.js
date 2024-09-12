import React from 'react'

const Account = (props) => {
    const { data } = props;
    return (
        <div>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">{data.title}</h3>
                    <p className="account-amount">{data.amount}</p>
                    <p className="account-amount-description">{data.description}</p>
                </div>

                <div className="account-content-wrapper cta">
                    <button class="transaction-button">View transactions</button>
                </div>
            </section>
        </div>
    )
}

export default Account