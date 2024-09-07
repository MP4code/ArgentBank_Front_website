import React from "react";
import "../../styles/App.css";
import Banner from "../../assets/img/bank-tree.jpeg";
import Services from "../../components/Services";
import { servicesData } from "../../components/servicesData";


const Home = () => {
  return (
    <div>
      <div className="hero" style={{
        backgroundImage: `url(${Banner})`,
      }}>
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="services">
        {servicesData.map((data, index) => (
          <Services data={data} key={data.id} />
        ))}
      </section>
    </div>
  )
};

export default Home;
