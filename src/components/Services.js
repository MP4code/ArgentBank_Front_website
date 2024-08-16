import React, { useState } from 'react'

const Services = (props) => {
    const { id, title, content } = props;

    return (
        <div>
            <section className="features">
                <div className="feature-item">

                    <h3 className="feature-item-title">{title}</h3>
                    <p>{content}</p>
                </div>
            </section>



        </div>
    );
}

export default Services