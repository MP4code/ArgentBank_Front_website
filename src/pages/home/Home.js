import React from "react";
import "../../styles/App.css"
import Banner from "../../assets/img/bank-tree.jpeg";
import Services from "../../components/Services";
import dataServices from "../../components/services.json";
import Images from "../../assets/img/icon-chat.png";

const Home = () => {
  return (

    <body>

      <main>
        <div className="hero" style={{
          backgroundImage: `url(${Banner})`,
          backgroundPosition: "0 -50px",
          backgroundRepeat: 'no-repeat',
          backgroundSize: "cover",
          height: "300px",
          width: '100%',
          position: "relative",
        }}>
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        {dataServices.map((data, index) => (
          <div key={data.id} ></div>
        ))}
        <Services id={dataServices[0].id} title={dataServices[0].title} content={dataServices[0].texte} />
        <Services id={dataServices[1].id} title={dataServices[1].title} content={dataServices[1].texte} />
        <Services id={dataServices[2].id} title={dataServices[0].title} content={dataServices[2].texte} />
      </main>
    </body >
  )
};

export default Home;
