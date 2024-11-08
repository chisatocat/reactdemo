import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <img src={`${process.env.PUBLIC_URL}/img/beach2.jpg`} alt=""></img>
        <h1>Continue Exploring</h1>

        <p className="m-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          aperiam!
        </p>

        <a href="#tours" className="btn hero-btn">
          Explore tours
        </a>
      </div>
    </section>
  );
}

export default Hero;
