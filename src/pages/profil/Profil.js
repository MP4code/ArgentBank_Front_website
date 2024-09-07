import React, { useState } from "react";
import "../../styles/App.css"
import { useSelector } from "react-redux";
import EditUser from "./EditUser";
import Transactions from "../../components/Transactions";


const Profil = () => {
    const { user } = useSelector(state => state.user);
    const [toggleForm, setToggleForm] = useState(false);
    const [viewTransactions, setviewTransactions] = useState(false);

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
                {toggleForm ? <EditUser onClose={() => setToggleForm(false)} /> : <button className="edit-button" onClick={() => setToggleForm(true)}>Edit Name</button>}


            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">

                    {viewTransactions ? (
                        <button onClick={() => setviewTransactions(false)}>close</button>)
                        :
                        (<button className="transaction-button" onClick={() => setviewTransactions(true)}>View transactions</button>)}
                </div>
            </section>
            {viewTransactions &&
                <Transactions />
            }
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">

                    {viewTransactions ? (
                        <button onClick={() => setviewTransactions(false)}>close</button>)
                        :
                        (<button className="transaction-button" onClick={() => setviewTransactions(true)}>View transactions</button>)}
                </div>
            </section>
            {viewTransactions &&
                <Transactions />
            }
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    {viewTransactions ? (
                        <button onClick={() => setviewTransactions(false)}>close</button>)
                        :
                        (<button className="transaction-button" onClick={() => setviewTransactions(true)}>View transactions</button>)}
                </div>
            </section>
            {viewTransactions &&
                <Transactions />
            }
        </main>
    )

};

export default Profil;
