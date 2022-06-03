import React from "react";
import fireplace from "../assets/michalowka-lato2020-004.jpg";
// import { Fade } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
// import BackgroundSlider from 'react-background-slider'

import image1 from "../assets/foto-miachalowka001.jpg";
import image2 from "../assets/foto-miachalowka002.jpg";
import image3 from "../assets/foto-miachalowka007.jpg";

const fadeImages = [image1, image2, image3];

const Home = () => {
  return (
    <section className="pt-24 bg-imageSlide1 w-screen h-screen bg-no-repeat bg-cover bg-fixed bg-center duration-[3000] animate-backgroundImages">
      {/* <BackgroundSlider images={fadeImages} duration={7} transition={2} />
      <h1 className="text-white text-4xl font-bold">Witamy w Michałówce!</h1> */}
      {/* <div className="slide-container w-screen">
        <Fade arrows="">
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade bg" key={index}>
              <div className="image-container">
                <img className="min-w-full h-" src={fadeImage} />
              </div>
            </div>
          ))}
        </Fade>
      </div> */}
      {/* <div className="flex flex-col justify-center">
        <h1 className="text-5xl font-bold">Witamy w Michałówce!</h1>
        <h2 className="text-3xl">Oferujemy:</h2>
        <ul className="text-2xl">
          <li>Wesela</li>
          <li>Chrzciny</li>
          <li>Komunie</li>
          <li>Urodziny</li>
          <li>Imprezy plenerowe i okolicznościowe</li>
        </ul>
      </div>
      <div></div> */}
      {/* <div className="w-1/2 p-4 flex justify-center">
          <img className="w-2/3" src={fireplace}/>
      </div>
      <div className="w-1/2">
        <h1 className="text-6xl font-bold">Witamy w Michałówce!</h1>
        <h2 className="text-3xl">Oferujemy:</h2>
        <ul className="text-2xl">
            <li>Wesela</li>
            <li>Chrzciny</li>
            <li>Komunie</li>
            <li>Urodziny</li>
            <li>Imprezy plenerowe i okolicznościowe</li>
        </ul>
      </div> */}
    </section>
  );
};

export default Home;
