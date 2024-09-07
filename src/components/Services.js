import React from "react";

const Services = (props) => {
    const { data } = props;

    return (
        <div className="features">
            <section>
                <h2 className="sr-only">Features</h2>
                <div className="feature-item">
                    <img src={data.image} alt={data.alt} className="feature-icon" />
                    <h3 className="feature-item-title">{data.title}</h3>
                    <p>{data.content}</p>
                </div>
            </section>
        </div>
    );
}

export default Services