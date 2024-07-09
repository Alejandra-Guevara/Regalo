import React, { useState } from "react";

import "./App.css";

import Confetti from "./components/confetti";
import Heart from "./components/heart";

import taeImage from "./assets/images/Tae.jpg";
import giftImageOne from "./assets/images/giftOne.png";
import giftImageTwo from "./assets/images/giftTwo.gif";

function App() {
  const [surprise, setSurprise] = useState(false);
  const [gift, setGift] = useState(1);

  const handleSurprise = () => {
    setSurprise(true);
  };

  const handleGift = (step) => {
    setGift(step);
  };

  return (
    <div className="app">
      {!surprise ? (
        <div className="app__welcome">
          <Confetti />
          <div className="app__welcome__title">¡Feliz Cumpleaños Mamita!</div>
          <div className="app__welcome__image">
            <img src={taeImage} alt="mamita" />
          </div>
          <div className="app__welcome__surprise">
            <p>Te tengo unos regalos</p>
            <div
              className="app__welcome__surprise__handle"
              onClick={handleSurprise}
            >
              Dando clic acá
            </div>
          </div>
        </div>
      ) : (
        <div className="app__surprise">
          <div className="app__surprise__gift__one">
            {gift === 1 && (
              <div className="app__surprise__gift__one__image">
                <Heart />
                <img
                  src={giftImageOne}
                  alt="giftOne"
                  onClick={() => handleGift(2)}
                />
                <div
                  className="app__surprise__gift__one__image__handle"
                  onClick={() => handleGift(2)}
                >
                  ¡Presiona aquí para ver tu regalo!
                </div>
              </div>
            )}
            {gift === 2 && (
              <div className="app__surprise__gift__two__image">
                <Heart />
                <img
                  src={giftImageTwo}
                  alt="giftTwo"
                  onClick={() => handleGift(3)}
                />
                <div
                  className="app__surprise__gift__two__image__handle"
                  onClick={() => handleGift(3)}
                >
                  ¡Te engañe jajaja, debes volver a presiona aquí para ver tu
                  regalo!
                </div>
              </div>
            )}
            {gift === 3 && (
              <div className="app__surprise__gift__three">
                <Heart />
                Mira atrás tuyo, esta tu regalo... ♥
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
