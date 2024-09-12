import React, { useState } from "react";
import "../../styles/App.css"
import { useSelector } from "react-redux";
import EditUser from "./EditUser";
import Account from "../../components/Account";
import { accountData } from "../../components/servicesData";

const Profil = () => {
    const { user } = useSelector(state => state.user);
    const [toggleForm, setToggleForm] = useState(false);

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
                {toggleForm ? <EditUser onClose={() => setToggleForm(false)} /> : <button className="edit-button" onClick={() => setToggleForm(true)}>Edit Name</button>}


            </div>

            <div>
                <h2 className="sr-only">Accounts</h2>
                {accountData.map((data, index) => (
                    <Account data={data} key={data.id} />
                ))}
            </div>
        </main>
    )

};

export default Profil;
