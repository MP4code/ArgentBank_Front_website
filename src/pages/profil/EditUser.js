import React, { useState, useEffect } from 'react'
import "../../styles/userProfil.css";
import { useDispatch, useSelector } from 'react-redux';
import { EditProfile } from '../../data/actions';

const EditUser = ({ onClose }) => {
    const { user, token } = useSelector(state => state.user);
    const [userName, setUserName] = useState("");

    const dispatch = useDispatch();
    useEffect(() => {
        if (user) {
            setUserName(user.userName);  // L'utilisateur
        }
    }, [user]);

    const userNameChange = (e) => {
        setUserName(e.target.value);

    };
    const formSubmitEdit = (e) => {
        e.preventDefault();

        const body = {
            userName,
        };
        EditProfile(body, token, dispatch, onClose);

    }

    if (!user) {
        return <div>Loading...</div>;  // Indique que les données sont en cours de chargement
    }
    return (
        <div>
            <section className='edit-content'>

                <h1>Edit user info</h1>
                <form onSubmit={formSubmitEdit}>
                    <div className='edit-content_form'>
                        <div className="inputInfo">
                            <label htmlFor="username">User name:</label>
                            <input type="text" id="username" value={userName} onChange={userNameChange} />
                        </div>
                        <div className="inputInfo not">
                            <label htmlFor="firstName">First name:</label>
                            <input type="text" id="firstName" value={user.firstName} readOnly />
                        </div>
                        <div className="inputInfo not">
                            <label htmlFor="lastName">Last name:</label>
                            <input type="text" id="lastName" value={user.lastName} readOnly />
                        </div>
                    </div>
                    <div className="edit-form">
                        <button className="edit-form_button" type='submit' >Save</button>
                        <button className="edit-form_button" type="button" onClick={onClose} >Cancel</button>
                    </div>

                </form>


            </section>


        </div>
    )
}

export default EditUser