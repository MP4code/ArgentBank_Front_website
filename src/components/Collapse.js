import { useState } from "react";
import React from 'react'
import Image from "../assets/img/arrow_24px.png";
import "../styles/App.css"


const Collapse = () => {
    const [open, setOpen] = useState(false);
    const [note, setNote] = useState("");
    const [editNote, setEditNote] = useState(false);
    const [save, setSave] = useState(false);
    const [category, setCategory] = useState("");
    const [editCategory, setEditCategory] = useState(false);
    const noteOnchange = (e) => {
        setNote(e.target.value);
    };

    const categoryOnchange = (e) => {
        setCategory(e.target.value);
    }

    return (
        <div className="collapseContainer">
            <div className="collapseTransactions_content">
                <div className='collapseTransactions_infos'>
                    <p>27/02</p>
                    <p>Golden Sun</p>
                </div>
                <div className='collapseTransactions_infos'>
                    <p>$8.00</p>
                    <p>$298.00</p>
                    <button onClick={() => setOpen(!open)} className="arrowCollapse">
                        <img src={Image} alt="arrow" style={{ width: "22px" }} />
                    </button>
                </div>
            </div>
            {open && (
                <div className="collapseContent">
                    <div className="collapseContent_category">
                        <div className="collapseInfos">
                            <p>Transaction Type</p>
                            <p>Category</p>
                            <p>Note</p>

                        </div>
                        <div className="collapseInfos">
                            <p>Electronic</p>
                            <div className="edit_Collapse">
                                <p>{category}</p>
                                <button onClick={() => setEditCategory(!editCategory)}>
                                    <i className="fa fa-user-circle"></i>
                                </button>
                            </div>
                            {editCategory && (
                                <div>
                                    <label htmlFor="category"></label>
                                    <select
                                        id="multi-select"
                                        multiple
                                        value={category}
                                        onChange={categoryOnchange}
                                        className="optionCategory"
                                    >
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                        <option value="option4">Option 4</option>
                                    </select>
                                    <button onClick={() => { setSave(!save); setEditCategory(!editCategory); }}>Save</button>
                                </div>
                            )}

                            <div className="edit_Collapse">
                                <p>{note}</p>
                                <button onClick={() => setEditNote(!editNote)}>
                                    <i className="fa fa-user-circle"></i>
                                    <i class="fa fa-solid fa-pen"></i>
                                </button>
                            </div>

                            {editNote && (
                                <div>
                                    <label htmlFor="note"></label>
                                    <input
                                        type="text"
                                        id="note"
                                        value={note}
                                        onChange={noteOnchange}
                                    />
                                    <button onClick={() => { setSave(!save); setEditNote(!editNote); }}>Save</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Collapse